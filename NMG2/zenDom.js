// zendom.js
ZenDom = (function () {
    var my = {};
    var zentypes = "id,class,child,sibling,attribute,textnode,multiplier".split(',');
    // detect CSS3 browser prefix string if any
    var div = document.createElement('div');
    if (div.style["webkitColumnWidth"] == "")
        my.cssprefix = "-webkit-";
    else if (div.style["MozColumnWidth"] == "")
        my.cssprefix = "-moz-";
    else
        my.cssprefix = "";
    my.testdiv = div;
    function conJoin(a) {
        // return new array to fix problem with attribute values that contain spaces
        var newa = [];
        var v, attr = "";
        while (v = a.shift()) {
            if (v.indexOf("=") > 0) {
                if (attr.length)
                    newa.push(attr);
                attr = v;
            } else
                attr += " " + v; // re-connect these two elements
        }
        if (attr.length)
            newa.push(attr);
        return newa;
    }
    function addAttributes(element, string, funcs) {
        var a = string.split(" ");
        a = conJoin(a);
        for (var i = 0; i < a.length; i++) {
            aa = a[i].split("=");
            if (aa.length > 1) {
                var attval = aa[1].slice(1, -1);
                if (funcs && attval in funcs)
                    element[aa[0]] = funcs[attval];
                else
                    element.setAttribute(aa[0], attval);
            } else
                element.setAttribute(aa[0]);
        }
    }

    function mapzen(singlechar, index) {
        // called from .map() to process each character.
        // replace all (non literal) zen control characters and build a matching list of types
        var returnchar = singlechar;
        if (returnchar === "'")
            zenquote = (zenquote) ? false : true;
        if (returnchar === "{")
            zenbracket = true;
        if (returnchar === "}")
            zenbracket = false;
        if (!zenquote) {
            var i = "#.>+[{*".indexOf(singlechar); // id,class,child,sibling,attribute,textnode,multiplier
            if (zenbracket && i != 5)
                i = -1;
            if (i >= 0) {
                returnchar = '~';
                try {
                    zentypeslist.push(zentypes[i]);
                } catch (e) {
                    alert("MapZen::Error Mapping String At:" + index);
                }
            }
        }
        return returnchar;
    }
    function camel(str) {
        // does what it says
        var tmp = str.split('-');
        var cameled = tmp[0];
        tmp.slice(1).forEach(function (wrd) {
            cameled += wrd.charAt(0).toUpperCase() + wrd.substr(1);
        });
        return cameled;
    }
    my.setKeyframes = function (animationName, listofkeys) {
        var styleblock = document.createElement('style');
        styleblock.innerHTML = '@' + this.cssprefix + 'keyframes ' + animationName + '{' + listofkeys + '}';
        document.head.appendChild(styleblock);
    }
    my.setCSS = function (selrulstr) {
        // smart css rule set, selrulstr = ".selector1,.selector2;attrib:value;attrib:value"
        // will apply correct CSS3 prefix for current browser
        if (!this.styleSheet)
            this.styleSheet = document.styleSheets[0];
        if (!this.styleSheet)
            return;
        selrulstr = selrulstr.split(";");
        var sel = selrulstr[0];
        function mapa(e) {
            var av = e.split(":");
            if (this.testdiv.style[camel(av[0])] == undefined)
                av[0] = this.cssprefix + av[0];
            return av.join(":");
        }
        // check if we need a browser prefix on any of the attibutes
        var frules = selrulstr.slice(1).map( mapa.bind(this));
        if (this.styleSheet.insertRule)
            this.styleSheet.insertRule(sel + "{" + frules.join(";") + "}", 0);
        else
            this.styleSheet.addRule(sel,frules.join(";"));
    }
    my.parse = function (parentElement, string, funcs) {

        if (typeof parentElement === "number")
            parentElement = document.body;
        else if (typeof parentElement === "string")
            parentElement = document.getElementById(parentElement);

        zentypeslist = ["parent"];
        zenquote = false;
        zenbracket = false;
        var sa = string.split("");
        if (Array.prototype.map)
            sa = sa.map(mapzen); // see mapzen above
        else
            for (var i = 0; i < sa.length; i++)
                sa[i] = mapzen(sa[i]);
        var zennamelist = (sa.join("")).split('~');
        var classlist = "";
        var id = "";
        var text = "";
        var attr = "";
        var prevContainerType = "";
        var childElements = [];
        var stack = []; // holds childElement arrays that are sibblings higher up
        var multi = 1;
        for (var i = zennamelist.length - 1; i >= 0; i--) {
            switch (zentypeslist[i]) {
                case 'multiplier':
                    multi = parseInt(zennamelist[i]);
                    break;
                case 'id':
                    id = zennamelist[i];
                    break;
                case 'class':
                    if (classlist != "")
                        classlist += " ";
                    classlist += zennamelist[i];
                    break;
                case 'textnode':
                    text = zennamelist[i].slice(0, -1);
                    break;
                case 'attribute':
                    attr = zennamelist[i].slice(0, -1);
                    break;
                case 'sibling':
                case 'child':
                case 'parent':
                    if (zennamelist[i].length == 0) {
                        // the current childElements are to be a sibbling of next level up
                        if (childElements.length) {
                            if (stack.length)
                                childElements.forEach(function (e) { stack[0].push(e) });
                                //stack[0].push(childElements[0]);
                            else
                                stack.push(childElements);
                            // if top of stack is not empty, add to the element array
                            childElements = [];
                        }
                        stack.push([]);
                    } else {
                        // if zennamelist[i] starts with _zen then assume it is an in scope variable name
                        if (zennamelist[i].substr(0, 4) == "_zen")
                            elem = window[zennamelist[i]];
                        else
                            elem = document.createElement(zennamelist[i]);
                        if (text.length)
                            elem.appendChild(document.createTextNode((text==" ")?"":text));
                        if (id.length)
                            elem.setAttribute("id", id);
                        if (classlist.length)
                            elem.setAttribute("class", classlist);
                        if (attr.length)
                            addAttributes(elem, attr, funcs);
                        if (prevContainerType == 'child')
                            while (childElements.length)
                                elem.appendChild(childElements.pop());
                        classlist = text = attr = id = "";
                        if (zentypeslist[i] != 'parent') {
                            // see if see have any nodes in stack
                            if (/*prevContainerType*/zentypeslist[i] == 'child' && stack.length) {
                                var nodes = stack.pop();
                                for (var j = 0; j < nodes.length; j++)
                                    childElements.push(nodes[j]);
                            }
                            childElements.push(elem);
                            for (; multi > 1; multi--)
                                childElements.push(elem.cloneNode(true));
                        } else {
                            while (stack.length) {
                                var nodes = stack.pop();
                                for (var j = 0; j < nodes.length; j++)
                                    elem.appendChild(nodes[j]);
                            }
                            if (parentElement) { // it is valid to set parentElement to nothing if you just want the nodes
                                parentElement.appendChild(elem);
                                for (; multi > 1; multi--)
                                    parentElement.appendChild(elem.cloneNode(true));
                            }
                            return elem;
                        }
                    }
                    prevContainerType = zentypeslist[i];
                    break;
            }
        }
    }
    return my;
}());