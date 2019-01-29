/*  Standard midi file parser
    Ian Sayer - Jan 2014
*/

function mid_(data, filename) {
    this.data = data;
    this.fileview = new DataView(data);
    this.fp = 0;
    this.filename = filename;
    this.tempo;
    this.ppq;
    this.startOffset = 0;
    this.numtracks = 0;
    this.notenames = ["C", "C\u266f", "D", "D\u266f", "E", "F", "F\u266f", "G", "G\u266f", "A", "A\u266f", "B"];
    function track(data) {
        this.trackName = "unnamed";
        this.notes = [];
        var dataview = data;
        var hdr = dataview.getInt32(0);
        if (hdr != 0x4d54726b) {
            alert("Bad Track Header")
            return;
        }
        function flagNoteCh(dv, ch, notenum) {
            // calc offset into bitbuffer, test bit value then set bit
            var bix = (ch & 0xF) * (128 / 8) + Math.floor(notenum / 8);
            var bib = (0x80 >> (notenum % 8));
            var bval = dv[bix] & bib;
            dv[bix] |= bib;
            return (bval) ? false : true;
        }
        this.getNoteStatistics = function (start, end) {
            if (start == undefined)
                start = 0;
            if (end == undefined)
                end = this.currTime;
            // get zero'd block of memory to check for uniqueness 
            var bba = new Uint8Array(16 * 128 / 8); // 16 channels, 128 notes, 1 bit per flag
            var stats = Object.create({ lo: 127, hi: 0, count: 0, firsti: -1, lasti: 0, uniqueCount: 0 });
            for (var i = 0; i < this.notes.length; i++) {
                var n = this.notes[i];
                if (n.start + n.length > end) {
                    stats.lasti = i - 1;
                    break;
                }
                if (n.start < start)
                    continue;
                stats.count++;
                if (flagNoteCh(bba, n.stat, n.notenum))
                    stats.uniqueCount++;
                if (stats.firsti == -1)
                    stats.firsti = i;
                if (n.notenum > stats.hi)
                    stats.hi = n.notenum;
                if (n.notenum < stats.lo)
                    stats.lo = n.notenum;
                // add code for unique notes in range
                // set end time
            }
            return stats;
        }
        this.currTime = 0; // reset realtime, updated in readDeltaTime()
        this.fp = 4;
        this.tracksize = dataview.getInt32(this.fp);
        this.fp += 4;
        var max4track = this.fp + this.tracksize;
        var runningStatus = 0, databyte, auxbyte;
        do {
            var delta = readDeltaTime(data, this);
            var eventCode = dataview.getUint8(this.fp++);
            if (eventCode == 0xFF) {
                // META
                var subCode = dataview.getUint8(this.fp++);
                var len = dataview.getUint8(this.fp++);
                if (subCode == 0x2f)
                    break;
                if (subCode == 0x03) {
                    var txt = "";
                    for (var i = 0; i < len; i++)
                        txt += String.fromCharCode(dataview.getUint8(this.fp + i));
                    this.trackName = txt;
                }
                this.fp += len;
            } else {
                // midi event, check status bit
                if (eventCode & 0x80) {
                    runningStatus = eventCode;
                    databyte = dataview.getUint8(this.fp++);
                } else
                    databyte = eventCode;
                var runch = String.fromCharCode(runningStatus & 0xF0);
                if (runch != '\xC0' && runch != '\xd0')
                    auxbyte = dataview.getUint8(this.fp++);
                if (runch == '\x80') {
                    runch = '\x90';
                    runningStatus = 0x90 | (runningStatus & 0xF);
                    auxbyte = 0; // fake alt note off for real note off
                }
                if (runch == '\x90') {
                    var n = procNoteEvent(this.currTime, runningStatus, databyte, auxbyte, this.notes);
                    if (n)
                        this.notes.push(n);
                }
            }
        } while (this.fp < max4track);
        function note(time, stat, notenum, vel) {
            this.stat = stat;
            this.notenum = notenum;
            this.vel = vel;
            this.start = time;
            this.length = -1;
        }
        function procNoteEvent(time, stat, notenum, vel, n) {
            var rv = null;
            if (vel == 0) {
                rv = null;// find matching note on and calc note length
                for (var i = n.length - 1; i >= 0; i--) {
                    if (n[i].stat == stat && n[i].notenum == notenum) {
                        if (n[i].length < 0)
                            n[i].length = time - n[i].start;
                        // else note on allready has a note off, wrong but we dont care
                        break;
                    }
                }
            } else {
                rv = new note(time, stat, notenum, vel);
            }
            return rv;
        }
        function readDeltaTime(dv, that) {
            // as per spec, delta time is n * 8bit values where bit 0-6 are time, msb is flag (0=end of delta time)
            var ch = dv.getInt8(that.fp++);
            var rv = ch & 0x7f;
            while (ch & 0x80) {
                rv *= 128;
                ch = dv.getInt8(that.fp++);
                rv += (ch & 0x7f);
            }
            that.currTime += rv;
            return rv;
        }
    }
    this.tracks = [];
    var hdr = new Uint8Array(data, this.fp, 4);
    if ("MThd" != String.fromCharCode.apply(null, hdr)) {
        alert("bad header");
        return;
    }
    var header_size = this.fileview.getInt32(4, false);
    this.format = this.fileview.getInt16(8, false);
    this.numtracks = this.fileview.getInt16(10, false);
    this.ppq = new DataView(data).getInt16(12, false);
    this.fp = 14 + (header_size - 6); // adjust in case header is > 6 bytes
    for (var i = 0; i < this.numtracks; i++) {
        this.tracks.push(new track(new DataView(this.data, this.fp)));
        this.fp += this.tracks[this.tracks.length - 1].tracksize + 8;
    }
    // remove any empty tracks from end
    for (var i = this.numtracks - 1; i > 1; i--)
        if (this.tracks[i].notes.length == 0)
            this.tracks.pop();
    this.numtracks = this.tracks.length;
}
