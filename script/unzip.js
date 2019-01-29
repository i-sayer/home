function readOfficeDoc(data, wanted) {
    // like unzip but optimised for Microsoft Office documents
    var EOCD = data.byteLength/*data.length*/ - 22;
    var vw = new Uint8Array(data);
    var sig = getInteger(vw.subarray(EOCD,EOCD+4));
    if (sig != 0x6054B50)
        return console.log("error locating EOCD");
    var i, numrecs = getInteger(vw.subarray(EOCD + 8, EOCD + 10));
    var CD = getInteger(vw.subarray(EOCD + 16, EOCD + 20));
    if (getString(vw.subarray(CD, CD + 4)) != "PK\01\02")
        return console.log("error locating CD");
    var entries = [];
    for (i = 0; i < numrecs; i++) {
        // get each entry
        var filenamelen = getInteger(vw.subarray(CD + 28, CD + 30));
        var extralen = getInteger(vw.subarray(CD + 30, CD + 32));
        var filename = getString(vw.subarray(CD + 46, CD + 46 + filenamelen));
        var wix = filename.endsWith(wanted);
        if (wix) {
            var offset = getInteger(vw.subarray(CD + 42, CD + 46));
            extralen = getInteger(vw.subarray(offset + 28, offset + 30));
            var compressedSize = getInteger(vw.subarray(CD + 20, CD + 24));
            var uncompressedSize = getInteger(vw.subarray(CD + 24, CD + 28));
            var fdata = getString(vw.subarray(offset + 30 + filenamelen + extralen, offset + 30 + filenamelen + extralen + compressedSize));
            if (vw[CD + 10] != 0)
                fdata = RawDeflate.inflate(fdata, uncompressedSize);
            entries.push({ name: filename.split(".")[0], data: fdata });
        }
        CD += (46 + filenamelen);
    }
    return entries /*.sort(function (a, b) { return (a.ix - b.ix) })*/;
}
function getString(a) {
    return Array.from(a, function (x) { return String.fromCharCode(x) }).join("");
}
function getInteger(b) {
    for (var i = 0, result = 0; i < b.byteLength; i++)
        result += b[i] << (i * 8);
    return result;
}
  