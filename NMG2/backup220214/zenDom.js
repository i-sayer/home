// zendom.js
ZenDom = (function () {
    var my = {};
    var zentypes = "id,class,child,sibling,attribute,textnode,multiplier".split(',');
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
        if (!zenquote) {
            var i = "#.>+[{*".indexOf(singlechar); // id,class,child,sibling,attribute,textnode,multiplier
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
    my.parse = function (parentElement, string, funcs) {

        if (typeof parentElement === "number")
            parentElement = document.body;
        else if (typeof parentElement === "string")
            parentElement = document.getElementById(parentElement);

        zentypeslist = ["parent"];
        zenquote = false;
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
                            stack.push(childElements);
                            childElements = [];
                        }
                        stack.push([]);
                    } else {
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