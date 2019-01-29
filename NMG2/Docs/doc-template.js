/*
 * template for yomo2g2 documentation files
 * requires ZenDom.js
 */
var bodyHeader = ZenDom.parse(0, "div#doc-header.underline>div.logo+h2{" + document.title + "}");
var menu = ZenDom.parse(bodyHeader, "ul.razorMenu>li.buttonbg>a.icon-menu[onclick='nored(this)']" +
    "++li.buttonbg>a[href='/NMG2/Docs/Self.html']{Self setting PCH2}" +
    "++li.buttonbg>a[href='/NMG2/Docs/Wav.html']{Audio samples}" +
    "++li.buttonbg>a[href='/NMG2/Docs/Midi.html']{MIDI files}" +
    "++li.buttonbg>a[href='/NMG2/Docs/scala.html']{Scala files}" +
    "++li.buttonbg>a[href='/NMG2/Docs/Links.html']{Links}" +
    "++li.buttonbg>a[href='/NMG2/Docs/Credits.html']{Credits}"
    );

var links = menu.getElementsByTagName('a');
if (document.location.href.indexOf('~sayer7723') > 0)
    for (var i = 1; i < links.length; i++)
        links[i].href = links[i].href.replace('/NMG2', '/~sayer7723/NMG2');

for (var i = 1; i < links.length; i++) {
    links[i].onclick = function (e) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var dspace = document.getElementById('dspace');
            dspace.innerHTML = xhr.responseText;
            ZenDom.parse(dspace, "button.buttonbg[onclick='closeDocs()']>span.icon-eject");
            dspace.style.height = (dspace.firstElementChild.clientHeight+30) + "px";
        };
        xhr.open("get", e.target.href, true);
        xhr.send();
        e.stopPropagation();
        e.cancelBubble = true;
        return false;
    };
}

function closeDocs() {
    document.getElementById('dspace').style.height = 0;
}

function nored(obj) {
    var op = ["gray", "rgb(144, 16, 16)"];
    var opn = (document.body.style.backgroundColor == op[1]) ? 0 : 1;
    var colour = op[opn];
    document.body.style.backgroundColor = colour;
    localStorage.setItem("colourPref", colour);
    //document.cookie = "bgcolourpref=" + colour + "; expires=Fri, 31 Dec 2038 23:59:59 GMT";
}

ZenDom.setCSS("#doc-header h2;display:inline-block;border:none;margin:0 0 0 1em;color:#28041d;font-weight:500;text-spacing:3px");
ZenDom.setCSS("#doc-header;margin-bottom:1em;padding-bottom:0.25em;position:relative");
ZenDom.setCSS(".multicol;column-width:460px;column-gap:2em");
ZenDom.setCSS("pre;background-color:#aaa;font-size:small;color:black;padding:12px 4px");
ZenDom.setCSS("a;color:white;text-decoration:none;");
ZenDom.setCSS("blockquote;border-top:1px solid silver;border-bottom:1px solid silver");
ZenDom.setCSS("#dspace,#bspace;overflow:hidden;transition:height 0.2s ease-in");
ZenDom.setCSS("#dspace button,#bspace button;position:absolute;bottom:0;right:0");
