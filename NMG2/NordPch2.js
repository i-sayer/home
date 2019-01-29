/*  Clavia Nord Modular G2 pch2 file reader writer
    Adapted from g2ools python utility at https://github.com/msg/g2ools
*/

function pch2_(data, filename) {
    this.data = data;
    this.filename = filename;
    function area(name) {
        this.name = name;
        this.modules = [];
        this.paramaterDataOfs = 0;
        return this;
    }
    var areas = [new area("fx"), new area("voice")];
    var textpadofs;
    var textpadlen = 0;

    this.getTextPad = function () {
        if (textpadlen == 0)
            return null;
        var rv = "";
        var dv = new DataView(this.data);
        for (var i = 0; i < textpadlen; i++)
            rv += String.fromCharCode(dv.getUint8(textpadofs + i));
        return rv;
    }
    this.setTextPad = function (str) {
        if (textpadlen == 0)
            return; // not able to create text area at the moment
        var dv = new DataView(this.data);
        for (var i = 0; i < Math.min(str.length, textpadlen) ; i++)
            dv.setUint8(textpadofs + i, str.charCodeAt(i));
    }
    this.getArea = function (i) {
        return areas[i];
    }

    this.getUrl = function () {
        // get the pch2 as a data url
        var blob = new Blob([this.data], { type: 'application/octet-binary' });
        var url = URL.createObjectURL(blob);
        return url;
    }

    function getBits(numbits, initialData, maxreq) {
        // if initialData parameter supplied, read first n bits else read next n bits. maxreq = maximum number of bytes to convert to bits
        if (initialData) {
            this.bitArray = [];
            var max = maxreq || initialData.length;
            for (i = 0; i < max; i++)
                for (var j = 0x80; j > 0; j = j >> 1)
                    this.bitArray.push((initialData[i] & j) ? 1 : 0)
            this.bitofs = 0;
        }
        rv = this.bitArray[this.bitofs];
        this.bitofs += 1;
        while (numbits > 1) {
            rv = (rv << 1) + this.bitArray[this.bitofs];
            this.bitofs += 1;
            numbits -= 1;
        }
        return rv;
    }
    
    function setBits(numbits, byte) {
        // add Least Significant n bits to array, if numbits == 0 then return bytearray
        if (window['bitbuf'] == undefined)
            bitbuf = [];
        if (numbits) {
            for (var bw = Math.pow(2, numbits - 1) ; bw; bw = bw >> 1)
                bitbuf.push(byte & bw ? 1 : 0);
        } else {
            // convert bitbuf to binary data
            var bytes = new Int8Array(Math.ceil(bitbuf.length/8));
            var byte = 0;
            var first = true;
            var bw = 0x80;
            for (var i = 0; i < bitbuf.length; i++) {
                var bofs = Math.floor(i / 8);
                if (bitbuf[i])
                    bytes[bofs] |= Math.pow(2, 7-(i % 8));
            }
            bitbuf = [];
            return bytes;
        }
    }
    function findModule(area, index) {
        // return single module from given [area]
        for (var i = 0; i < areas[area].modules.length; i++)
            if (areas[area].modules[i].index == index)
                break;
        return areas[area].modules[i];
    }

    function setModuleName(area, index, name) {
        // set user name of module
        findModule(area, index).uname = name;
    }

    function parseModuleNames(data) {
        // parse list of module names from pch2 and set names in module areas
        var area = getBits(2, data, 2);
        var wtf = getBits(6);
        var nummod = getBits(8);
        var ofs = 2;
        for (var i = 0; i < nummod; i++) {
            // get index and name for each module
            var index = data[ofs];
            var str = "";
            var charcode;
            for (j = 1; j < 17; j++) {
                if (charcode = data[ofs + j])
                    str += String.fromCharCode(charcode);
                else
                    break;
            }
            ofs += j + 1;
            setModuleName(area, index, str);
        }
        return "Area=" + area + ":Count=" + nummod;
    }

    function parseModuleList(data) {
        // get list of modules from pch2
        var area = getBits(2, data);
        var nummod = getBits(8);
        for (var i = 0; i < nummod; i++) {
            var modtype = getBits(8);
            var mod = Object.create(moduleDic[modtype]);
            mod.lv = Array(mod.pcnt * 9); // initialise parameter array to number of parameters * number of variations (8+1)
            // dont need the following data at the moment but...
            mod.index = getBits(8);
            mod.horiz = getBits(7);
            mod.vert = getBits(7);
            mod.colour = getBits(8);
            mod.uprate = getBits(1);
            mod.leds = getBits(1);
            var reserved = getBits(6);
            var nmodes = getBits(4);
            for (var j = 0; j < nmodes; j++)
                var dontCareYet = getBits(6);
            areas[area].modules.push(mod);
        }
        return "Area=" + area + ":Count=" + nummod;
    }

    function parseTextPad(data) {
        // record location and length of text pad data
        textpadlen = data.length;
        textpadofs = data.byteOffset;
    }

    function parseModuleParameters(data) {
        // get all the parameter data for the modules.
        //  Each param is 7bit value (even on/off). each block is repeated 9 times, one for each variation + 1 for variation init
        //  There is also a section [area=2] for patch settings but we don't care right now.
        var area = getBits(2, data);
        var nummod = getBits(8);
        var numvar = getBits(8);
        if (area > 1)
            return "Patch settings, whatever";
        areas[area].paramaterDataOfs = data.byteOffset; // save for file modifying later
        areas[area].nummod = nummod;
        for (var i = 0; i < nummod; i++) {
            var index = getBits(8);
            var m = findModule(area, index);
            var paramcnt = getBits(7);
            for (var v = 0; v < numvar; v++) {
                var variation = getBits(8);
                for (var p = 0; p < paramcnt; p++) {
                    if (p < m.pcnt)
                        m.lv[variation * m.pcnt + p] = getBits(7);
                    else
                        var junk = getBits(7);
                }
            }
        }
        return "Area=" + area + ":ModuleCount=" + nummod + ":VariationCount=" + numvar;
    }

    this.writeParameters = function (areanum) {
        var area = areas[areanum];
        setBits(2, areanum);
        setBits(8, area.nummod);
        setBits(8, (area.nummod) ? 9 : 0);
        for (var i=0; i<area.modules.length; i++) {
            var m = area.modules[i];
            if (m.pcnt == 0)
                continue;
            setBits(8, m.index);
            setBits(7, m.pcnt);
            for (var v = 0; v<9; v++) {
                setBits(8, v);
                for (var p=0; p<m.pcnt; p++)
                    setBits(7, m.lv[v * m.pcnt + p]);
            }
        }
        // now get those bits
        var data = new Int8Array(this.data);
        data.set(setBits(0),area.paramaterDataOfs);
        var ofs = this.ofs;
        var filedataArray = new Uint8Array(this.data, ofs + 1, data.byteLength - ofs - 3);
        var calcCRC = calcCrc(filedataArray);
        data.set([Math.floor(calcCRC / 256), calcCRC % 256], this.data.byteLength - 2);
    }
    function getModuleByName(area, name) {
        // get module by name :¬)
        var a = areas[area];
        for (var i = 0; i < a.modules.length; i++)
            if (a.modules[i].uname == name)
                return a.modules[i];
        return null;
    }
    this.getModuleArray = function (area, basename) {
        // get ordered group of modules in array, like SeqLevA0 - SeqLevA8. Numeric section added to basename
        var i = 0;
        var array = [];
        var m;
        while (m = getModuleByName(area, basename + i)) {
            i += 1;
            array.push(m);
        }
        return array;
    }
    // parse pch2 file into memory so parameter values can be manipulated and pch2 saved
    // as we don't add modules or connections to the pch2, we only need to parse the following sections
    var g2section = {
        0x5a: ["Module Names", parseModuleNames],
        0x4a: ["Module List", parseModuleList],
        0x6F: ["Text Pad", parseTextPad],
        0x4d: ["Parameters", parseModuleParameters]
    }
    // read standard text header
    var hdr = new Uint8Array(data, 0, 320);
    var str = String.fromCharCode.apply(null, hdr);
    var ofs = str.indexOf("\0");
    var textHdrLen = ofs + 3;
    // verify CRC at end of data
    var fileCRC = new DataView(data).getInt16(data.byteLength - 2) & 0xFFFF;
    var filedata = new DataView(data, ofs + 3, data.byteLength - ofs - 5);
    this.ofs = ofs;
    var filedataArray = new Uint8Array(data, ofs + 1, data.byteLength - ofs - 3);
    var calcCRC = calcCrc(filedataArray);
    if (fileCRC != calcCRC) {
        alert("PCH2 ERROR:Bad CRC");
        //return;
    }

    var maxofs = filedata.byteLength;
    ofs = 0;
    // walk list of sections, log and parse sections we need
    var res = "";
    while (ofs < maxofs) {
        var type = filedata.getInt8(ofs);
        var siz = filedata.getInt16(ofs + 1);
        if (type in g2section) {
            res += "\n" + g2section[type][0] + ":offset=0x" + (textHdrLen + ofs).toString(16);
            if (g2section[type][1])
                res += g2section[type][1](new Int8Array(data, textHdrLen + ofs + 3, siz));
        }
        ofs += siz + 3;
    }
    return this;
}

var crctab = [
    0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
    0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
    0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
    0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
    0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
    0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
    0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
    0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
    0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
    0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
    0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
    0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
    0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
    0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
    0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
    0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
    0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
    0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
    0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
    0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
    0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
    0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
    0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
    0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
    0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
    0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
    0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
    0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
    0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
    0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
    0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
    0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
]

function calcCrc(data) {
    // return crc16 of data
    var rv = 0;
    for (var i = 0; i < data.length; i++)
        rv = (crctab[((rv >> 8) ^ data[i]) & 0xFF] ^ (rv << 8)) & 0xFFFF;
    return rv;
}
