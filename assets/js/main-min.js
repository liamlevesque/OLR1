/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

/*! @license Firebase v2.4.0
    License: https://www.firebase.com/terms/terms-of-service.html */
(function() {var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.yb=function(){return a.zf?a.zf:a.zf=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function r(a){return"function"==ca(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)}var ja=Date.now||function(){return+new Date};
function ka(a,b){function c(){}c.prototype=b.prototype;a.nh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.jh=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function la(a){if(Error.captureStackTrace)Error.captureStackTrace(this,la);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(la,Error);la.prototype.name="CustomError";function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ma(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function na(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function oa(a){var b=0,c;for(c in a)b++;return b}function pa(a){for(var b in a)return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function sa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function ta(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function ua(a,b){var c=ta(a,b,void 0);return c&&a[c]}function va(a){for(var b in a)return!1;return!0}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Vd=void 0}
function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Vd?a.Vd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
c.push(":"),Ba(a,a.Vd?a.Vd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};function Fa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ja()).toString(36)};var w;a:{var Ga=n.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){w=Ha;break a}}w=""};function Ia(){this.Ya=-1};function Ja(){this.Ya=-1;this.Ya=64;this.P=[];this.pe=[];this.eg=[];this.Od=[];this.Od[0]=128;for(var a=1;a<this.Ya;++a)this.Od[a]=0;this.ge=this.ec=0;this.reset()}ka(Ja,Ia);Ja.prototype.reset=function(){this.P[0]=1732584193;this.P[1]=4023233417;this.P[2]=2562383102;this.P[3]=271733878;this.P[4]=3285377520;this.ge=this.ec=0};
function Ka(a,b,c){c||(c=0);var d=a.eg;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.P[0];c=a.P[1];for(var g=a.P[2],k=a.P[3],m=a.P[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.P[0]=a.P[0]+b&4294967295;a.P[1]=a.P[1]+c&4294967295;a.P[2]=a.P[2]+g&4294967295;a.P[3]=a.P[3]+k&4294967295;a.P[4]=a.P[4]+m&4294967295}
Ja.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.pe,f=this.ec;d<b;){if(0==f)for(;d<=c;)Ka(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){Ka(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){Ka(this,e);f=0;break}}this.ec=f;this.ge+=b}};var x=Array.prototype,La=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ma=x.forEach?function(a,b,c){x.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=x.filter?function(a,b,c){return x.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Oa=x.map?function(a,b,c){return x.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Pa=x.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=u(b,d));return x.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ma(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Qa=x.every?function(a,b,
c){return x.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ra(a,b){var c=Sa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Sa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Ta(a,b){var c=La(a,b);0<=c&&x.splice.call(a,c,1)}function Ua(a,b,c){return 2>=arguments.length?x.slice.call(a,b):x.slice.call(a,b,c)}
function Va(a,b){a.sort(b||Wa)}function Wa(a,b){return a>b?1:a<b?-1:0};function Xa(a){n.setTimeout(function(){throw a;},0)}var Ya;
function Za(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.hb;c.hb=null;a()}};return function(a){d.next={hb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function $a(a,b){ab||bb();cb||(ab(),cb=!0);db.push(new eb(a,b))}var ab;function bb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();ab=function(){a.then(fb)}}else ab=function(){var a=fb;!r(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(Ya||(Ya=Za()),Ya(a)):n.setImmediate(a)}}var cb=!1,db=[];[].push(function(){cb=!1;db=[]});
function fb(){for(;db.length;){var a=db;db=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.yg.call(c.scope)}catch(d){Xa(d)}}}cb=!1}function eb(a,b){this.yg=a;this.scope=b};var gb=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),hb=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),ib=-1!=w.indexOf("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE")),jb=-1!=w.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(gb&&n.opera)return a=n.opera.version,r(a)?a():a;ib?b=/rv\:([^\);]+)(\)|;)/:hb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:jb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(w))?a[1]:"");return hb&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var kb=null,lb=null,mb=null;function nb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");ob();for(var c=b?lb:kb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[t],c[f],c[k],c[l])}return d.join("")}
function ob(){if(!kb){kb={};lb={};mb={};for(var a=0;65>a;a++)kb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),lb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),mb[lb[a]]=a,62<=a&&(mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function pb(a,b){this.N=qb;this.Rf=void 0;this.Ba=this.Ha=null;this.yd=this.ye=!1;if(a==rb)sb(this,tb,b);else try{var c=this;a.call(b,function(a){sb(c,tb,a)},function(a){if(!(a instanceof ub))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}sb(c,vb,a)})}catch(d){sb(this,vb,d)}}var qb=0,tb=2,vb=3;function rb(){}pb.prototype.then=function(a,b,c){return wb(this,r(a)?a:null,r(b)?b:null,c)};pb.prototype.then=pb.prototype.then;pb.prototype.$goog_Thenable=!0;
pb.prototype.cancel=function(a){this.N==qb&&$a(function(){var b=new ub(a);xb(this,b)},this)};function xb(a,b){if(a.N==qb)if(a.Ha){var c=a.Ha;if(c.Ba){for(var d=0,e=-1,f=0,g;g=c.Ba[f];f++)if(g=g.o)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.N==qb&&1==d?xb(c,b):(d=c.Ba.splice(e,1)[0],yb(c,d,vb,b)))}a.Ha=null}else sb(a,vb,b)}function zb(a,b){a.Ba&&a.Ba.length||a.N!=tb&&a.N!=vb||Ab(a);a.Ba||(a.Ba=[]);a.Ba.push(b)}
function wb(a,b,c,d){var e={o:null,Hf:null,Jf:null};e.o=new pb(function(a,g){e.Hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.Jf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ub?g(b):a(e)}catch(l){g(l)}}:g});e.o.Ha=a;zb(a,e);return e.o}pb.prototype.Yf=function(a){this.N=qb;sb(this,tb,a)};pb.prototype.Zf=function(a){this.N=qb;sb(this,vb,a)};
function sb(a,b,c){if(a.N==qb){if(a==c)b=vb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.N=1;c.then(a.Yf,a.Zf,a);return}if(ga(c))try{var f=c.then;if(r(f)){Bb(a,c,f);return}}catch(g){b=vb,c=g}}a.Rf=c;a.N=b;a.Ha=null;Ab(a);b!=vb||c instanceof ub||Cb(a,c)}}function Bb(a,b,c){function d(b){f||(f=!0,a.Zf(b))}function e(b){f||(f=!0,a.Yf(b))}a.N=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
function Ab(a){a.ye||(a.ye=!0,$a(a.wg,a))}pb.prototype.wg=function(){for(;this.Ba&&this.Ba.length;){var a=this.Ba;this.Ba=null;for(var b=0;b<a.length;b++)yb(this,a[b],this.N,this.Rf)}this.ye=!1};function yb(a,b,c,d){if(c==tb)b.Hf(d);else{if(b.o)for(;a&&a.yd;a=a.Ha)a.yd=!1;b.Jf(d)}}function Cb(a,b){a.yd=!0;$a(function(){a.yd&&Db.call(null,b)})}var Db=Xa;function ub(a){la.call(this,a)}ka(ub,la);ub.prototype.name="cancel";var Eb=Eb||"2.4.0";function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function z(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function Gb(a){var b={};Fb(a,function(a,d){b[a]=d});return b}function Hb(a){return"object"===typeof a&&null!==a};function Ib(a){var b=[];Fb(a,function(a,d){da(d)?Ma(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function Jb(a){var b={};a=a.replace(/^\?/,"").split("&");Ma(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase ("+Eb+") INTERNAL ASSERT FAILED: "+a)};var Mb=n.Promise||pb;function B(){var a=this;this.reject=this.resolve=null;this.D=new Mb(function(b,c){a.resolve=b;a.reject=c})}function C(a,b){return function(c,d){c?a.reject(c):a.resolve(d);r(b)&&(Nb(a.D),1===b.length?b(c):b(c,d))}}function Nb(a){a.then(void 0,aa)};function Ob(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Pb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function E(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function F(a,b,c,d){if((!d||p(c))&&!r(c))throw Error(E(a,b,d)+"must be a valid function.");}function Qb(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(E(a,b,!0)+"must be a valid context object.");};function Rb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function G(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Sb(){this.Zd=H}Sb.prototype.j=function(a){return this.Zd.S(a)};Sb.prototype.toString=function(){return this.Zd.toString()};function Tb(){}Tb.prototype.uf=function(){return null};Tb.prototype.Ce=function(){return null};var Ub=new Tb;function Vb(a,b,c){this.bg=a;this.Oa=b;this.Nd=c}Vb.prototype.uf=function(a){var b=this.Oa.Q;if(Wb(b,a))return b.j().T(a);b=null!=this.Nd?new Xb(this.Nd,!0,!1):this.Oa.w();return this.bg.Bc(a,b)};Vb.prototype.Ce=function(a,b,c){var d=null!=this.Nd?this.Nd:Yb(this.Oa);a=this.bg.qe(d,b,1,c,a);return 0===a.length?null:a[0]};function Zb(){this.xb=[]}function $b(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.cc();null===c||f.ea(c.cc())||(a.xb.push(c),c=null);null===c&&(c=new ac(f));c.add(e)}c&&a.xb.push(c)}function bc(a,b,c){$b(a,c);cc(a,function(a){return a.ea(b)})}function dc(a,b,c){$b(a,c);cc(a,function(a){return a.contains(b)||b.contains(a)})}
function cc(a,b){for(var c=!0,d=0;d<a.xb.length;d++){var e=a.xb[d];if(e)if(e=e.cc(),b(e)){for(var e=a.xb[d],f=0;f<e.xd.length;f++){var g=e.xd[f];if(null!==g){e.xd[f]=null;var k=g.Zb();ec&&fc("event: "+g.toString());gc(k)}}a.xb[d]=null}else c=!1}c&&(a.xb=[])}function ac(a){this.ta=a;this.xd=[]}ac.prototype.add=function(a){this.xd.push(a)};ac.prototype.cc=function(){return this.ta};function J(a,b,c,d){this.type=a;this.Na=b;this.Za=c;this.Oe=d;this.Td=void 0}function hc(a){return new J(ic,a)}var ic="value";function jc(a,b,c,d){this.xe=b;this.be=c;this.Td=d;this.wd=a}jc.prototype.cc=function(){var a=this.be.Mb();return"value"===this.wd?a.path:a.parent().path};jc.prototype.De=function(){return this.wd};jc.prototype.Zb=function(){return this.xe.Zb(this)};jc.prototype.toString=function(){return this.cc().toString()+":"+this.wd+":"+G(this.be.qf())};function kc(a,b,c){this.xe=a;this.error=b;this.path=c}kc.prototype.cc=function(){return this.path};kc.prototype.De=function(){return"cancel"};
kc.prototype.Zb=function(){return this.xe.Zb(this)};kc.prototype.toString=function(){return this.path.toString()+":cancel"};function Xb(a,b,c){this.A=a;this.ga=b;this.Yb=c}function lc(a){return a.ga}function mc(a){return a.Yb}function nc(a,b){return b.e()?a.ga&&!a.Yb:Wb(a,K(b))}function Wb(a,b){return a.ga&&!a.Yb||a.A.Fa(b)}Xb.prototype.j=function(){return this.A};function oc(a){this.pg=a;this.Gd=null}oc.prototype.get=function(){var a=this.pg.get(),b=wa(a);if(this.Gd)for(var c in this.Gd)b[c]-=this.Gd[c];this.Gd=a;return b};function pc(a,b){this.Vf={};this.hd=new oc(a);this.da=b;var c=1E4+2E4*Math.random();setTimeout(u(this.Of,this),Math.floor(c))}pc.prototype.Of=function(){var a=this.hd.get(),b={},c=!1,d;for(d in a)0<a[d]&&y(this.Vf,d)&&(b[d]=a[d],c=!0);c&&this.da.Ye(b);setTimeout(u(this.Of,this),Math.floor(6E5*Math.random()))};function qc(){this.Hc={}}function rc(a,b,c){p(c)||(c=1);y(a.Hc,b)||(a.Hc[b]=0);a.Hc[b]+=c}qc.prototype.get=function(){return wa(this.Hc)};var sc={},tc={};function uc(a){a=a.toString();sc[a]||(sc[a]=new qc);return sc[a]}function vc(a,b){var c=a.toString();tc[c]||(tc[c]=b());return tc[c]};function L(a,b){this.name=a;this.U=b}function wc(a,b){return new L(a,b)};function xc(a,b){return yc(a.name,b.name)}function zc(a,b){return yc(a,b)};function Ac(a,b,c){this.type=Bc;this.source=a;this.path=b;this.Ja=c}Ac.prototype.$c=function(a){return this.path.e()?new Ac(this.source,M,this.Ja.T(a)):new Ac(this.source,N(this.path),this.Ja)};Ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function Cc(a,b){this.type=Dc;this.source=a;this.path=b}Cc.prototype.$c=function(){return this.path.e()?new Cc(this.source,M):new Cc(this.source,N(this.path))};Cc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Ec(a,b){this.Pa=a;this.xa=b?b:Fc}h=Ec.prototype;h.Sa=function(a,b){return new Ec(this.Pa,this.xa.Sa(a,b,this.Pa).$(null,null,!1,null,null))};h.remove=function(a){return new Ec(this.Pa,this.xa.remove(a,this.Pa).$(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.Pa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function Gc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.Pa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Vc=function(){return this.xa.Vc()};h.jc=function(){return this.xa.jc()};h.ka=function(a){return this.xa.ka(a)};
h.ac=function(a){return new Hc(this.xa,null,this.Pa,!1,a)};h.bc=function(a,b){return new Hc(this.xa,a,this.Pa,!1,b)};h.dc=function(a,b){return new Hc(this.xa,a,this.Pa,!0,b)};h.xf=function(a){return new Hc(this.xa,null,this.Pa,!0,a)};function Hc(a,b,c,d,e){this.Xd=e||null;this.Je=d;this.Ta=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Je?a.left:a.right;else if(0===e){this.Ta.push(a);break}else this.Ta.push(a),a=this.Je?a.right:a.left}
function Ic(a){if(0===a.Ta.length)return null;var b=a.Ta.pop(),c;c=a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value};if(a.Je)for(b=b.left;!b.e();)a.Ta.push(b),b=b.right;else for(b=b.right;!b.e();)a.Ta.push(b),b=b.left;return c}function Jc(a){if(0===a.Ta.length)return null;var b;b=a.Ta;b=b[b.length-1];return a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value}}function Kc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Fc;this.right=null!=e?e:Fc}h=Kc.prototype;
h.$=function(a,b,c,d,e){return new Kc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ka=function(a){return this.left.ka(a)||a(this.key,this.value)||this.right.ka(a)};function Lc(a){return a.left.e()?a:Lc(a.left)}h.Vc=function(){return Lc(this).key};h.jc=function(){return this.right.e()?this.key:this.right.jc()};
h.Sa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.$(null,null,null,e.left.Sa(a,b,c),null):0===d?e.$(null,b,null,null,null):e.$(null,null,null,null,e.right.Sa(a,b,c));return Mc(e)};function Nc(a){if(a.left.e())return Fc;a.left.ha()||a.left.left.ha()||(a=Oc(a));a=a.$(null,null,null,Nc(a.left),null);return Mc(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ha()||c.left.left.ha()||(c=Oc(c)),c=c.$(null,null,null,c.left.remove(a,b),null);else{c.left.ha()&&(c=Pc(c));c.right.e()||c.right.ha()||c.right.left.ha()||(c=Qc(c),c.left.left.ha()&&(c=Pc(c),c=Qc(c)));if(0===b(a,c.key)){if(c.right.e())return Fc;d=Lc(c.right);c=c.$(d.key,d.value,null,null,Nc(c.right))}c=c.$(null,null,null,null,c.right.remove(a,b))}return Mc(c)};h.ha=function(){return this.color};
function Mc(a){a.right.ha()&&!a.left.ha()&&(a=Rc(a));a.left.ha()&&a.left.left.ha()&&(a=Pc(a));a.left.ha()&&a.right.ha()&&(a=Qc(a));return a}function Oc(a){a=Qc(a);a.right.left.ha()&&(a=a.$(null,null,null,null,Pc(a.right)),a=Rc(a),a=Qc(a));return a}function Rc(a){return a.right.$(null,null,a.color,a.$(null,null,!0,null,a.right.left),null)}function Pc(a){return a.left.$(null,null,a.color,null,a.$(null,null,!0,a.left.right,null))}
function Qc(a){return a.$(null,null,!a.color,a.left.$(null,null,!a.left.color,null,null),a.right.$(null,null,!a.right.color,null,null))}function Sc(){}h=Sc.prototype;h.$=function(){return this};h.Sa=function(a,b){return new Kc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ka=function(){return!1};h.Vc=function(){return null};h.jc=function(){return null};h.ha=function(){return!1};var Fc=new Sc;function Tc(a,b){return a&&"object"===typeof a?(O(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Uc(a,b){var c=new Vc;Wc(a,new P(""),function(a,e){c.rc(a,Xc(e,b))});return c}function Xc(a,b){var c=a.C().J(),c=Tc(c,b),d;if(a.L()){var e=Tc(a.Ea(),b);return e!==a.Ea()||c!==a.C().J()?new Yc(e,Q(c)):a}d=a;c!==a.C().J()&&(d=d.ia(new Yc(c)));a.R(R,function(a,c){var e=Xc(c,b);e!==c&&(d=d.W(a,e))});return d};function Zc(){this.Ac={}}Zc.prototype.set=function(a,b){null==b?delete this.Ac[a]:this.Ac[a]=b};Zc.prototype.get=function(a){return y(this.Ac,a)?this.Ac[a]:null};Zc.prototype.remove=function(a){delete this.Ac[a]};Zc.prototype.Af=!0;function $c(a){this.Ic=a;this.Sd="firebase:"}h=$c.prototype;h.set=function(a,b){null==b?this.Ic.removeItem(this.Sd+a):this.Ic.setItem(this.Sd+a,G(b))};h.get=function(a){a=this.Ic.getItem(this.Sd+a);return null==a?null:Rb(a)};h.remove=function(a){this.Ic.removeItem(this.Sd+a)};h.Af=!1;h.toString=function(){return this.Ic.toString()};function ad(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new $c(b)}}catch(c){}return new Zc}var bd=ad("localStorage"),cd=ad("sessionStorage");function dd(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.ob=b;this.lc=c;this.hh=d;this.Rd=e||"";this.ab=bd.get("host:"+a)||this.host}function ed(a,b){b!==a.ab&&(a.ab=b,"s-"===a.ab.substr(0,2)&&bd.set("host:"+a.host,a.ab))}
function fd(a,b,c){O("string"===typeof b,"typeof type must == string");O("object"===typeof c,"typeof params must == object");if(b===gd)b=(a.ob?"wss://":"ws://")+a.ab+"/.ws?";else if(b===hd)b=(a.ob?"https://":"http://")+a.ab+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.ab&&(c.ns=a.lc);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}dd.prototype.toString=function(){var a=(this.ob?"https://":"http://")+this.host;this.Rd&&(a+="<"+this.Rd+">");return a};var id=function(){var a=1;return function(){return a++}}(),O=Kb,jd=Lb;
function kd(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{ob();for(var c=mb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ua(d,c,
c+8192));b=a}}return b}catch(l){fc("base64Decode failed: ",l)}return null}function ld(a){var b=Ob(a);a=new Ja;a.update(b);var b=[],c=8*a.ge;56>a.ec?a.update(a.Od,56-a.ec):a.update(a.Od,a.Ya-(a.ec-56));for(var d=a.Ya-1;56<=d;d--)a.pe[d]=c&255,c/=256;Ka(a,a.pe);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.P[d]>>e&255,++c;return nb(b)}
function md(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+md.apply(null,arguments[c]):"object"===typeof arguments[c]?b+G(arguments[c]):b+arguments[c],b+=" ";return b}var ec=null,nd=!0;
function od(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?ec=u(console.log,console):"object"===typeof console.log&&(ec=function(a){console.log(a)})),b&&cd.set("logging_enabled",!0)):r(a)?ec=a:(ec=null,cd.remove("logging_enabled"))}function fc(a){!0===nd&&(nd=!1,null===ec&&!0===cd.get("logging_enabled")&&od(!0));if(ec){var b=md.apply(null,arguments);ec(b)}}
function pd(a){return function(){fc(a,arguments)}}function qd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+md.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function rd(a){var b=md.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function S(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+md.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function sd(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(q(a)){var m=a.indexOf("//");0<=m&&(g=a.substring(0,m-1),a=a.substring(m+2));m=a.indexOf("/");-1===m&&(m=a.length);b=a.substring(0,m);e="";a=a.substring(m).split("/");for(m=0;m<a.length;m++)if(0<a[m].length){var l=a[m];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(t){}e+="/"+l}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);m=b.indexOf(":");0<=m&&(f="https"===g||"wss"===g,k=b.substring(m+1),isFinite(k)&&
(k=String(k)),k=q(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,eh:d,ob:f,scheme:g,bd:e}}function td(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function ud(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function yc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=vd(a),d=vd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function wd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+G(b));}
function xd(a){if("object"!==typeof a||null===a)return G(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=G(b[d]),c+=":",c+=xd(a[b[d]]);return c+"}"}function yd(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function zd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
function Ad(a){O(!td(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Bd=/^-?\d{1,10}$/;function vd(a){return Bd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function gc(a){try{a()}catch(b){setTimeout(function(){S("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function T(a,b){if(r(a)){var c=Array.prototype.slice.call(arguments,1).slice();gc(function(){a.apply(null,c)})}};function Cd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Rb(kd(f[0])||""),c=Rb(kd(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{kh:b,Ec:c,data:d,ah:e}}function Dd(a){a=Cd(a).Ec;return"object"===typeof a&&a.hasOwnProperty("iat")?z(a,"iat"):null}function Ed(a){a=Cd(a);var b=a.Ec;return!!a.ah&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Fd(a){this.Y=a;this.g=a.n.g}function Gd(a,b,c,d){var e=[],f=[];Ma(b,function(b){"child_changed"===b.type&&a.g.Dd(b.Oe,b.Na)&&f.push(new J("child_moved",b.Na,b.Za))});Hd(a,e,"child_removed",b,d,c);Hd(a,e,"child_added",b,d,c);Hd(a,e,"child_moved",f,d,c);Hd(a,e,"child_changed",b,d,c);Hd(a,e,ic,b,d,c);return e}function Hd(a,b,c,d,e,f){d=Na(d,function(a){return a.type===c});Va(d,u(a.qg,a));Ma(d,function(c){var d=Id(a,c,f);Ma(e,function(e){e.Qf(c.type)&&b.push(e.createEvent(d,a.Y))})})}
function Id(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Td=c.wf(b.Za,b.Na,a.g));return b}Fd.prototype.qg=function(a,b){if(null==a.Za||null==b.Za)throw jd("Should only compare child_ events.");return this.g.compare(new L(a.Za,a.Na),new L(b.Za,b.Na))};function Jd(){this.ib={}}
function Kd(a,b){var c=b.type,d=b.Za;O("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");O(".priority"!==d,"Only non-priority child changes can be tracked.");var e=z(a.ib,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Na);else if("child_removed"==c&&"child_added"==f)delete a.ib[d];else if("child_removed"==c&&"child_changed"==f)a.ib[d]=new J("child_removed",e.Oe,d);else if("child_changed"==c&&
"child_added"==f)a.ib[d]=new J("child_added",b.Na,d);else if("child_changed"==c&&"child_changed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Oe);else throw jd("Illegal combination of changes: "+b+" occurred after "+e);}else a.ib[d]=b};function Ld(a){this.g=a}h=Ld.prototype;h.H=function(a,b,c,d,e,f){O(a.Mc(this.g),"A node must be indexed if only a child is updated");e=a.T(b);if(e.S(d).ea(c.S(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Kd(f,new J("child_removed",e,b)):O(a.L(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Kd(f,new J("child_added",c,b)):Kd(f,new J("child_changed",c,b,e)));return a.L()&&c.e()?a:a.W(b,c).pb(this.g)};
h.ya=function(a,b,c){null!=c&&(a.L()||a.R(R,function(a,e){b.Fa(a)||Kd(c,new J("child_removed",e,a))}),b.L()||b.R(R,function(b,e){if(a.Fa(b)){var f=a.T(b);f.ea(e)||Kd(c,new J("child_changed",e,b,f))}else Kd(c,new J("child_added",e,b))}));return b.pb(this.g)};h.ia=function(a,b){return a.e()?H:a.ia(b)};h.Ra=function(){return!1};h.$b=function(){return this};function Md(a){this.Fe=new Ld(a.g);this.g=a.g;var b;a.oa?(b=Nd(a),b=a.g.Sc(Od(a),b)):b=a.g.Wc();this.gd=b;a.ra?(b=Pd(a),a=a.g.Sc(Rd(a),b)):a=a.g.Tc();this.Jc=a}h=Md.prototype;h.matches=function(a){return 0>=this.g.compare(this.gd,a)&&0>=this.g.compare(a,this.Jc)};h.H=function(a,b,c,d,e,f){this.matches(new L(b,c))||(c=H);return this.Fe.H(a,b,c,d,e,f)};
h.ya=function(a,b,c){b.L()&&(b=H);var d=b.pb(this.g),d=d.ia(H),e=this;b.R(R,function(a,b){e.matches(new L(a,b))||(d=d.W(a,H))});return this.Fe.ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.Fe};function Sd(a){this.ua=new Md(a);this.g=a.g;O(a.la,"Only valid if limit has been set");this.ma=a.ma;this.Nb=!Td(a)}h=Sd.prototype;h.H=function(a,b,c,d,e,f){this.ua.matches(new L(b,c))||(c=H);return a.T(b).ea(c)?a:a.Hb()<this.ma?this.ua.$b().H(a,b,c,d,e,f):Ud(this,a,b,c,e,f)};
h.ya=function(a,b,c){var d;if(b.L()||b.e())d=H.pb(this.g);else if(2*this.ma<b.Hb()&&b.Mc(this.g)){d=H.pb(this.g);b=this.Nb?b.dc(this.ua.Jc,this.g):b.bc(this.ua.gd,this.g);for(var e=0;0<b.Ta.length&&e<this.ma;){var f=Ic(b),g;if(g=this.Nb?0>=this.g.compare(this.ua.gd,f):0>=this.g.compare(f,this.ua.Jc))d=d.W(f.name,f.U),e++;else break}}else{d=b.pb(this.g);d=d.ia(H);var k,m,l;if(this.Nb){b=d.xf(this.g);k=this.ua.Jc;m=this.ua.gd;var t=Vd(this.g);l=function(a,b){return t(b,a)}}else b=d.ac(this.g),k=this.ua.gd,
m=this.ua.Jc,l=Vd(this.g);for(var e=0,A=!1;0<b.Ta.length;)f=Ic(b),!A&&0>=l(k,f)&&(A=!0),(g=A&&e<this.ma&&0>=l(f,m))?e++:d=d.W(f.name,H)}return this.ua.$b().ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.ua.$b()};
function Ud(a,b,c,d,e,f){var g;if(a.Nb){var k=Vd(a.g);g=function(a,b){return k(b,a)}}else g=Vd(a.g);O(b.Hb()==a.ma,"");var m=new L(c,d),l=a.Nb?Wd(b,a.g):Xd(b,a.g),t=a.ua.matches(m);if(b.Fa(c)){for(var A=b.T(c),l=e.Ce(a.g,l,a.Nb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.Ce(a.g,l,a.Nb);e=null==l?1:g(l,m);if(t&&!d.e()&&0<=e)return null!=f&&Kd(f,new J("child_changed",d,c,A)),b.W(c,d);null!=f&&Kd(f,new J("child_removed",A,c));b=b.W(c,H);return null!=l&&a.ua.matches(l)?(null!=f&&Kd(f,new J("child_added",
l.U,l.name)),b.W(l.name,l.U)):b}return d.e()?b:t&&0<=g(l,m)?(null!=f&&(Kd(f,new J("child_removed",l.U,l.name)),Kd(f,new J("child_added",d,c))),b.W(c,d).W(l.name,H)):b};function Yd(a,b){this.me=a;this.og=b}function Zd(a){this.X=a}
Zd.prototype.gb=function(a,b,c,d){var e=new Jd,f;if(b.type===Bc)b.source.Ae?c=$d(this,a,b.path,b.Ja,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w())&&!b.path.e(),c=ae(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===be)b.source.Ae?c=ce(this,a,b.path,b.children,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w()),c=de(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Yd)if(b=b.path,null!=c.xc(b))c=a;else{f=new Vb(c,a,d);d=a.Q.j();if(b.e()||".priority"===K(b))lc(a.w())?
b=c.Aa(Yb(a)):(b=a.w().j(),O(b instanceof fe,"serverChildren would be complete if leaf node"),b=c.Cc(b)),b=this.X.ya(d,b,e);else{var g=K(b),k=c.Bc(g,a.w());null==k&&Wb(a.w(),g)&&(k=d.T(g));b=null!=k?this.X.H(d,g,k,N(b),f,e):a.Q.j().Fa(g)?this.X.H(d,g,H,N(b),f,e):d;b.e()&&lc(a.w())&&(d=c.Aa(Yb(a)),d.L()&&(b=this.X.ya(b,d,e)))}d=lc(a.w())||null!=c.xc(M);c=ge(a,b,d,this.X.Ra())}else c=he(this,a,b.path,b.Ub,c,d,e);else if(b.type===Dc)d=b.path,b=a.w(),f=b.j(),g=b.ga||d.e(),c=ie(this,new je(a.Q,new Xb(f,
g,b.Yb)),d,c,Ub,e);else throw jd("Unknown operation type: "+b.type);e=qa(e.ib);d=c;b=d.Q;b.ga&&(f=b.j().L()||b.j().e(),g=ke(a),(0<e.length||!a.Q.ga||f&&!b.j().ea(g)||!b.j().C().ea(g.C()))&&e.push(hc(ke(d))));return new Yd(c,e)};
function ie(a,b,c,d,e,f){var g=b.Q;if(null!=d.xc(c))return b;var k;if(c.e())O(lc(b.w()),"If change path is empty, we must have complete server data"),mc(b.w())?(e=Yb(b),d=d.Cc(e instanceof fe?e:H)):d=d.Aa(Yb(b)),f=a.X.ya(b.Q.j(),d,f);else{var m=K(c);if(".priority"==m)O(1==le(c),"Can't have a priority with additional path components"),f=g.j(),k=b.w().j(),d=d.nd(c,f,k),f=null!=d?a.X.ia(f,d):g.j();else{var l=N(c);Wb(g,m)?(k=b.w().j(),d=d.nd(c,g.j(),k),d=null!=d?g.j().T(m).H(l,d):g.j().T(m)):d=d.Bc(m,
b.w());f=null!=d?a.X.H(g.j(),m,d,l,e,f):g.j()}}return ge(b,f,g.ga||c.e(),a.X.Ra())}function ae(a,b,c,d,e,f,g,k){var m=b.w();g=g?a.X:a.X.$b();if(c.e())d=g.ya(m.j(),d,null);else if(g.Ra()&&!m.Yb)d=m.j().H(c,d),d=g.ya(m.j(),d,null);else{var l=K(c);if(!nc(m,c)&&1<le(c))return b;var t=N(c);d=m.j().T(l).H(t,d);d=".priority"==l?g.ia(m.j(),d):g.H(m.j(),l,d,t,Ub,null)}m=m.ga||c.e();b=new je(b.Q,new Xb(d,m,g.Ra()));return ie(a,b,c,e,new Vb(e,b,f),k)}
function $d(a,b,c,d,e,f,g){var k=b.Q;e=new Vb(e,b,f);if(c.e())g=a.X.ya(b.Q.j(),d,g),a=ge(b,g,!0,a.X.Ra());else if(f=K(c),".priority"===f)g=a.X.ia(b.Q.j(),d),a=ge(b,g,k.ga,k.Yb);else{c=N(c);var m=k.j().T(f);if(!c.e()){var l=e.uf(f);d=null!=l?".priority"===me(c)&&l.S(c.parent()).e()?l:l.H(c,d):H}m.ea(d)?a=b:(g=a.X.H(k.j(),f,d,c,e,g),a=ge(b,g,k.ga,a.X.Ra()))}return a}
function ce(a,b,c,d,e,f,g){var k=b;ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))&&(k=$d(a,k,t,l,e,f,g))});ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))||(k=$d(a,k,t,l,e,f,g))});return k}function oe(a,b){ne(b,function(b,d){a=a.H(b,d)});return a}
function de(a,b,c,d,e,f,g,k){if(b.w().j().e()&&!lc(b.w()))return b;var m=b;c=c.e()?d:pe(qe,c,d);var l=b.w().j();c.children.ka(function(c,d){if(l.Fa(c)){var I=b.w().j().T(c),I=oe(I,d);m=ae(a,m,new P(c),I,e,f,g,k)}});c.children.ka(function(c,d){var I=!Wb(b.w(),c)&&null==d.value;l.Fa(c)||I||(I=b.w().j().T(c),I=oe(I,d),m=ae(a,m,new P(c),I,e,f,g,k))});return m}
function he(a,b,c,d,e,f,g){if(null!=e.xc(c))return b;var k=mc(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.ga||nc(m,c))return ae(a,b,c,m.j().S(c),e,f,k,g);if(c.e()){var l=qe;m.j().R(re,function(a,b){l=l.set(new P(a),b)});return de(a,b,c,l,e,f,k,g)}return b}l=qe;ne(d,function(a){var b=c.o(a);nc(m,b)&&(l=l.set(a,m.j().S(b)))});return de(a,b,c,l,e,f,k,g)};function se(){}var te={};function Vd(a){return u(a.compare,a)}se.prototype.Dd=function(a,b){return 0!==this.compare(new L("[MIN_NAME]",a),new L("[MIN_NAME]",b))};se.prototype.Wc=function(){return ue};function ve(a){O(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.gc=a}ka(ve,se);h=ve.prototype;h.Lc=function(a){return!a.S(this.gc).e()};h.compare=function(a,b){var c=a.U.S(this.gc),d=b.U.S(this.gc),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};
h.Sc=function(a,b){var c=Q(a),c=H.H(this.gc,c);return new L(b,c)};h.Tc=function(){var a=H.H(this.gc,we);return new L("[MAX_NAME]",a)};h.toString=function(){return this.gc.slice().join("/")};function xe(){}ka(xe,se);h=xe.prototype;h.compare=function(a,b){var c=a.U.C(),d=b.U.C(),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};h.Lc=function(a){return!a.C().e()};h.Dd=function(a,b){return!a.C().ea(b.C())};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",new Yc("[PRIORITY-POST]",we))};
h.Sc=function(a,b){var c=Q(a);return new L(b,new Yc("[PRIORITY-POST]",c))};h.toString=function(){return".priority"};var R=new xe;function ye(){}ka(ye,se);h=ye.prototype;h.compare=function(a,b){return yc(a.name,b.name)};h.Lc=function(){throw jd("KeyIndex.isDefinedOn not expected to be called.");};h.Dd=function(){return!1};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",H)};h.Sc=function(a){O(q(a),"KeyIndex indexValue must always be a string.");return new L(a,H)};h.toString=function(){return".key"};
var re=new ye;function ze(){}ka(ze,se);h=ze.prototype;h.compare=function(a,b){var c=a.U.Gc(b.U);return 0===c?yc(a.name,b.name):c};h.Lc=function(){return!0};h.Dd=function(a,b){return!a.ea(b)};h.Wc=function(){return ue};h.Tc=function(){return Ae};h.Sc=function(a,b){var c=Q(a);return new L(b,c)};h.toString=function(){return".value"};var Be=new ze;function Ce(){this.Xb=this.ra=this.Pb=this.oa=this.la=!1;this.ma=0;this.Rb="";this.ic=null;this.Bb="";this.fc=null;this.zb="";this.g=R}var De=new Ce;function Td(a){return""===a.Rb?a.oa:"l"===a.Rb}function Od(a){O(a.oa,"Only valid if start has been set");return a.ic}function Nd(a){O(a.oa,"Only valid if start has been set");return a.Pb?a.Bb:"[MIN_NAME]"}function Rd(a){O(a.ra,"Only valid if end has been set");return a.fc}
function Pd(a){O(a.ra,"Only valid if end has been set");return a.Xb?a.zb:"[MAX_NAME]"}function Ee(a){var b=new Ce;b.la=a.la;b.ma=a.ma;b.oa=a.oa;b.ic=a.ic;b.Pb=a.Pb;b.Bb=a.Bb;b.ra=a.ra;b.fc=a.fc;b.Xb=a.Xb;b.zb=a.zb;b.g=a.g;return b}h=Ce.prototype;h.Le=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="";return b};h.Me=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="l";return b};h.Ne=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="r";return b};
h.ce=function(a,b){var c=Ee(this);c.oa=!0;p(a)||(a=null);c.ic=a;null!=b?(c.Pb=!0,c.Bb=b):(c.Pb=!1,c.Bb="");return c};h.vd=function(a,b){var c=Ee(this);c.ra=!0;p(a)||(a=null);c.fc=a;p(b)?(c.Xb=!0,c.zb=b):(c.mh=!1,c.zb="");return c};function Fe(a,b){var c=Ee(a);c.g=b;return c}function Ge(a){var b={};a.oa&&(b.sp=a.ic,a.Pb&&(b.sn=a.Bb));a.ra&&(b.ep=a.fc,a.Xb&&(b.en=a.zb));if(a.la){b.l=a.ma;var c=a.Rb;""===c&&(c=Td(a)?"l":"r");b.vf=c}a.g!==R&&(b.i=a.g.toString());return b}
function He(a){return!(a.oa||a.ra||a.la)}function Ie(a){return He(a)&&a.g==R}function Je(a){var b={};if(Ie(a))return b;var c;a.g===R?c="$priority":a.g===Be?c="$value":a.g===re?c="$key":(O(a.g instanceof ve,"Unrecognized index type!"),c=a.g.toString());b.orderBy=G(c);a.oa&&(b.startAt=G(a.ic),a.Pb&&(b.startAt+=","+G(a.Bb)));a.ra&&(b.endAt=G(a.fc),a.Xb&&(b.endAt+=","+G(a.zb)));a.la&&(Td(a)?b.limitToFirst=a.ma:b.limitToLast=a.ma);return b}h.toString=function(){return G(Ge(this))};function Ke(a,b){this.Ed=a;this.hc=b}Ke.prototype.get=function(a){var b=z(this.Ed,a);if(!b)throw Error("No index defined for "+a);return b===te?null:b};function Le(a,b,c){var d=ma(a.Ed,function(d,f){var g=z(a.hc,f);O(g,"Missing index implementation for "+f);if(d===te){if(g.Lc(b.U)){for(var k=[],m=c.ac(wc),l=Ic(m);l;)l.name!=b.name&&k.push(l),l=Ic(m);k.push(b);return Me(k,Vd(g))}return te}g=c.get(b.name);k=d;g&&(k=k.remove(new L(b.name,g)));return k.Sa(b,b.U)});return new Ke(d,a.hc)}
function Ne(a,b,c){var d=ma(a.Ed,function(a){if(a===te)return a;var d=c.get(b.name);return d?a.remove(new L(b.name,d)):a});return new Ke(d,a.hc)}var Oe=new Ke({".priority":te},{".priority":R});function Yc(a,b){this.B=a;O(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.ca=b||H;Pe(this.ca);this.Gb=null}var Qe=["object","boolean","number","string"];h=Yc.prototype;h.L=function(){return!0};h.C=function(){return this.ca};h.ia=function(a){return new Yc(this.B,a)};h.T=function(a){return".priority"===a?this.ca:H};h.S=function(a){return a.e()?this:".priority"===K(a)?this.ca:H};h.Fa=function(){return!1};h.wf=function(){return null};
h.W=function(a,b){return".priority"===a?this.ia(b):b.e()&&".priority"!==a?this:H.W(a,b).ia(this.ca)};h.H=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;O(".priority"!==c||1===le(a),".priority must be the last token in a path");return this.W(c,H.H(N(a),b))};h.e=function(){return!1};h.Hb=function(){return 0};h.R=function(){return!1};h.J=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().J()}:this.Ea()};
h.hash=function(){if(null===this.Gb){var a="";this.ca.e()||(a+="priority:"+Re(this.ca.J())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Ad(this.B):a+this.B;this.Gb=ld(a)}return this.Gb};h.Ea=function(){return this.B};h.Gc=function(a){if(a===H)return 1;if(a instanceof fe)return-1;O(a.L(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=La(Qe,b),e=La(Qe,c);O(0<=d,"Unknown leaf type: "+b);O(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
h.pb=function(){return this};h.Mc=function(){return!0};h.ea=function(a){return a===this?!0:a.L()?this.B===a.B&&this.ca.ea(a.ca):!1};h.toString=function(){return G(this.J(!0))};function fe(a,b,c){this.m=a;(this.ca=b)&&Pe(this.ca);a.e()&&O(!this.ca||this.ca.e(),"An empty node cannot have a priority");this.Ab=c;this.Gb=null}h=fe.prototype;h.L=function(){return!1};h.C=function(){return this.ca||H};h.ia=function(a){return this.m.e()?this:new fe(this.m,a,this.Ab)};h.T=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?H:a};h.S=function(a){var b=K(a);return null===b?this:this.T(b).S(N(a))};h.Fa=function(a){return null!==this.m.get(a)};
h.W=function(a,b){O(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ia(b);var c=new L(a,b),d,e;b.e()?(d=this.m.remove(a),c=Ne(this.Ab,c,this.m)):(d=this.m.Sa(a,b),c=Le(this.Ab,c,this.m));e=d.e()?H:this.ca;return new fe(d,e,c)};h.H=function(a,b){var c=K(a);if(null===c)return b;O(".priority"!==K(a)||1===le(a),".priority must be the last token in a path");var d=this.T(c).H(N(a),b);return this.W(c,d)};h.e=function(){return this.m.e()};h.Hb=function(){return this.m.count()};
var Se=/^(0|[1-9]\d*)$/;h=fe.prototype;h.J=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.R(R,function(f,g){b[f]=g.J(a);c++;e&&Se.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.C().e()&&(b[".priority"]=this.C().J());return b};h.hash=function(){if(null===this.Gb){var a="";this.C().e()||(a+="priority:"+Re(this.C().J())+":");this.R(R,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Gb=""===a?"":ld(a)}return this.Gb};
h.wf=function(a,b,c){return(c=Te(this,c))?(a=Gc(c,new L(a,b)))?a.name:null:Gc(this.m,a)};function Wd(a,b){var c;c=(c=Te(a,b))?(c=c.Vc())&&c.name:a.m.Vc();return c?new L(c,a.m.get(c)):null}function Xd(a,b){var c;c=(c=Te(a,b))?(c=c.jc())&&c.name:a.m.jc();return c?new L(c,a.m.get(c)):null}h.R=function(a,b){var c=Te(this,a);return c?c.ka(function(a){return b(a.name,a.U)}):this.m.ka(b)};h.ac=function(a){return this.bc(a.Wc(),a)};
h.bc=function(a,b){var c=Te(this,b);if(c)return c.bc(a,function(a){return a});for(var c=this.m.bc(a.name,wc),d=Jc(c);null!=d&&0>b.compare(d,a);)Ic(c),d=Jc(c);return c};h.xf=function(a){return this.dc(a.Tc(),a)};h.dc=function(a,b){var c=Te(this,b);if(c)return c.dc(a,function(a){return a});for(var c=this.m.dc(a.name,wc),d=Jc(c);null!=d&&0<b.compare(d,a);)Ic(c),d=Jc(c);return c};h.Gc=function(a){return this.e()?a.e()?0:-1:a.L()||a.e()?1:a===we?-1:0};
h.pb=function(a){if(a===re||sa(this.Ab.hc,a.toString()))return this;var b=this.Ab,c=this.m;O(a!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.ac(wc),f=Ic(c);f;)e=e||a.Lc(f.U),d.push(f),f=Ic(c);d=e?Me(d,Vd(a)):te;e=a.toString();c=wa(b.hc);c[e]=a;a=wa(b.Ed);a[e]=d;return new fe(this.m,this.ca,new Ke(a,c))};h.Mc=function(a){return a===re||sa(this.Ab.hc,a.toString())};
h.ea=function(a){if(a===this)return!0;if(a.L())return!1;if(this.C().ea(a.C())&&this.m.count()===a.m.count()){var b=this.ac(R);a=a.ac(R);for(var c=Ic(b),d=Ic(a);c&&d;){if(c.name!==d.name||!c.U.ea(d.U))return!1;c=Ic(b);d=Ic(a)}return null===c&&null===d}return!1};function Te(a,b){return b===re?null:a.Ab.get(b.toString())}h.toString=function(){return G(this.J(!0))};function Q(a,b){if(null===a)return H;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);O(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Yc(a,Q(c));if(a instanceof Array){var d=H,e=a;v(e,function(a,b){if(y(e,b)&&"."!==b.substring(0,1)){var c=Q(a);if(c.L()||!c.e())d=
d.W(b,c)}});return d.ia(Q(c))}var f=[],g=!1,k=a;Fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=Q(k[a]);b.e()||(g=g||!b.C().e(),f.push(new L(a,b)))}});if(0==f.length)return H;var m=Me(f,xc,function(a){return a.name},zc);if(g){var l=Me(f,Vd(R));return new fe(m,Q(c),new Ke({".priority":l},{".priority":R}))}return new fe(m,Q(c),Oe)}var Ue=Math.log(2);
function Ve(a){this.count=parseInt(Math.log(a+1)/Ue,10);this.nf=this.count-1;this.ng=a+1&parseInt(Array(this.count+1).join("1"),2)}function We(a){var b=!(a.ng&1<<a.nf);a.nf--;return b}
function Me(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],t=c?c(l):l;return new Kc(t,l.U,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),A=e(l+1,d),l=a[l],t=c?c(l):l;return new Kc(t,l.U,!1,f,A)}a.sort(b);var f=function(b){function d(b,g){var k=t-b,A=t;t-=b;var A=e(k+1,A),k=a[k],I=c?c(k):k,A=new Kc(I,k.U,g,null,A);f?f.left=A:l=A;f=A}for(var f=null,l=null,t=a.length,A=0;A<b.count;++A){var I=We(b),Qd=Math.pow(2,b.count-(A+1));I?d(Qd,!1):(d(Qd,!1),d(Qd,!0))}return l}(new Ve(a.length));
return null!==f?new Ec(d||b,f):new Ec(d||b)}function Re(a){return"number"===typeof a?"number:"+Ad(a):"string:"+a}function Pe(a){if(a.L()){var b=a.J();O("string"===typeof b||"number"===typeof b||"object"===typeof b&&y(b,".sv"),"Priority must be a string or number.")}else O(a===we||a.e(),"priority of unexpected type.");O(a===we||a.C().e(),"Priority nodes can't have a priority of their own.")}var H=new fe(new Ec(zc),null,Oe);function Xe(){fe.call(this,new Ec(zc),H,Oe)}ka(Xe,fe);h=Xe.prototype;
h.Gc=function(a){return a===this?0:1};h.ea=function(a){return a===this};h.C=function(){return this};h.T=function(){return H};h.e=function(){return!1};var we=new Xe,ue=new L("[MIN_NAME]",H),Ae=new L("[MAX_NAME]",we);function je(a,b){this.Q=a;this.ae=b}function ge(a,b,c,d){return new je(new Xb(b,c,d),a.ae)}function ke(a){return a.Q.ga?a.Q.j():null}je.prototype.w=function(){return this.ae};function Yb(a){return a.ae.ga?a.ae.j():null};function Ye(a,b){this.Y=a;var c=a.n,d=new Ld(c.g),c=He(c)?new Ld(c.g):c.la?new Sd(c):new Md(c);this.Nf=new Zd(c);var e=b.w(),f=b.Q,g=d.ya(H,e.j(),null),k=c.ya(H,f.j(),null);this.Oa=new je(new Xb(k,f.ga,c.Ra()),new Xb(g,e.ga,d.Ra()));this.$a=[];this.ug=new Fd(a)}function Ze(a){return a.Y}h=Ye.prototype;h.w=function(){return this.Oa.w().j()};h.kb=function(a){var b=Yb(this.Oa);return b&&(He(this.Y.n)||!a.e()&&!b.T(K(a)).e())?b.S(a):null};h.e=function(){return 0===this.$a.length};h.Tb=function(a){this.$a.push(a)};
h.nb=function(a,b){var c=[];if(b){O(null==a,"A cancel should cancel all event registrations.");var d=this.Y.path;Ma(this.$a,function(a){(a=a.lf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.$a.length;++f){var g=this.$a[f];if(!g.matches(a))e.push(g);else if(a.yf()){e=e.concat(this.$a.slice(f+1));break}}this.$a=e}else this.$a=[];return c};
h.gb=function(a,b,c){a.type===be&&null!==a.source.Lb&&(O(Yb(this.Oa),"We should always have a full cache before handling merges"),O(ke(this.Oa),"Missing event cache, even though we have a server cache"));var d=this.Oa;a=this.Nf.gb(d,a,b,c);b=this.Nf;c=a.me;O(c.Q.j().Mc(b.X.g),"Event snap not indexed");O(c.w().j().Mc(b.X.g),"Server snap not indexed");O(lc(a.me.w())||!lc(d.w()),"Once a server snap is complete, it should never go back");this.Oa=a.me;return $e(this,a.og,a.me.Q.j(),null)};
function af(a,b){var c=a.Oa.Q,d=[];c.j().L()||c.j().R(R,function(a,b){d.push(new J("child_added",b,a))});c.ga&&d.push(hc(c.j()));return $e(a,d,c.j(),b)}function $e(a,b,c,d){return Gd(a.ug,b,c,d?[d]:a.$a)};function bf(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}bf.prototype.$c=function(a){if(this.path.e())return a=this.children.subtree(new P(a)),a.e()?null:a.value?new Ac(this.source,M,a.value):new bf(this.source,M,a);O(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new bf(this.source,N(this.path),this.children)};bf.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function cf(a,b){this.f=pd("p:rest:");this.G=a;this.Kb=b;this.Ca=null;this.ba={}}function df(a,b){if(p(b))return"tag$"+b;O(Ie(a.n),"should have a tag if it's not a default query.");return a.path.toString()}h=cf.prototype;
h.Cf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=df(a,c),g={};this.ba[f]=g;a=Je(a.n);var k=this;ef(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Kb(e,t,!1,c);z(k.ba,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.$f=function(a,b){var c=df(a,b);delete this.ba[c]};h.O=function(a,b){this.Ca=a;var c=Cd(a),d=c.data,c=c.Ec&&c.Ec.exp;b&&b("ok",{auth:d,expires:c})};h.je=function(a){this.Ca=null;a("ok",null)};
h.Qe=function(){};h.Gf=function(){};h.Md=function(){};h.put=function(){};h.Df=function(){};h.Ye=function(){};
function ef(a,b,c,d){c=c||{};c.format="export";a.Ca&&(c.auth=a.Ca);var e=(a.G.ob?"https://":"http://")+a.G.host+b+"?"+Ib(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=Rb(f.responseText)}catch(c){S("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
f.status&&S("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function ff(a){O(da(a)&&0<a.length,"Requires a non-empty array");this.fg=a;this.Rc={}}ff.prototype.ie=function(a,b){var c;c=this.Rc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Dc.apply(c[d].Qa,Array.prototype.slice.call(arguments,1))};ff.prototype.Ib=function(a,b,c){gf(this,a);this.Rc[a]=this.Rc[a]||[];this.Rc[a].push({Dc:b,Qa:c});(a=this.Ee(a))&&b.apply(c,a)};
ff.prototype.mc=function(a,b,c){gf(this,a);a=this.Rc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Dc===b&&(!c||c===a[d].Qa)){a.splice(d,1);break}};function gf(a,b){O(Ra(a.fg,function(a){return a===b}),"Unknown event: "+b)};var hf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);O(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);O(20===c.length,"nextPushId: Length should be 20.");
return c}}();function jf(){ff.call(this,["online"]);this.oc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.oc||(a.oc=!0,a.ie("online",!0))},!1);window.addEventListener("offline",function(){a.oc&&(a.oc=!1,a.ie("online",!1))},!1)}}ka(jf,ff);jf.prototype.Ee=function(a){O("online"===a,"Unknown event type: "+a);return[this.oc]};ba(jf);function kf(){ff.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Sb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Sb&&(c.Sb=b,c.ie("visible",b))},!1)}}ka(kf,ff);kf.prototype.Ee=function(a){O("visible"===a,"Unknown event type: "+a);return[this.Sb]};ba(kf);function P(a,b){if(1==arguments.length){this.u=a.split("/");for(var c=0,d=0;d<this.u.length;d++)0<this.u[d].length&&(this.u[c]=this.u[d],c++);this.u.length=c;this.aa=0}else this.u=a,this.aa=b}function lf(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return lf(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function mf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=yc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.aa>=a.u.length?null:a.u[a.aa]}function le(a){return a.u.length-a.aa}function N(a){var b=a.aa;b<a.u.length&&b++;return new P(a.u,b)}function me(a){return a.aa<a.u.length?a.u[a.u.length-1]:null}h=P.prototype;
h.toString=function(){for(var a="",b=this.aa;b<this.u.length;b++)""!==this.u[b]&&(a+="/"+this.u[b]);return a||"/"};h.slice=function(a){return this.u.slice(this.aa+(a||0))};h.parent=function(){if(this.aa>=this.u.length)return null;for(var a=[],b=this.aa;b<this.u.length-1;b++)a.push(this.u[b]);return new P(a,0)};
h.o=function(a){for(var b=[],c=this.aa;c<this.u.length;c++)b.push(this.u[c]);if(a instanceof P)for(c=a.aa;c<a.u.length;c++)b.push(a.u[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new P(b,0)};h.e=function(){return this.aa>=this.u.length};h.ea=function(a){if(le(this)!==le(a))return!1;for(var b=this.aa,c=a.aa;b<=this.u.length;b++,c++)if(this.u[b]!==a.u[c])return!1;return!0};
h.contains=function(a){var b=this.aa,c=a.aa;if(le(this)>le(a))return!1;for(;b<this.u.length;){if(this.u[b]!==a.u[c])return!1;++b;++c}return!0};var M=new P("");function nf(a,b){this.Ua=a.slice();this.Ka=Math.max(1,this.Ua.length);this.pf=b;for(var c=0;c<this.Ua.length;c++)this.Ka+=Pb(this.Ua[c]);of(this)}nf.prototype.push=function(a){0<this.Ua.length&&(this.Ka+=1);this.Ua.push(a);this.Ka+=Pb(a);of(this)};nf.prototype.pop=function(){var a=this.Ua.pop();this.Ka-=Pb(a);0<this.Ua.length&&--this.Ka};
function of(a){if(768<a.Ka)throw Error(a.pf+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ua.length)throw Error(a.pf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+pf(a));}function pf(a){return 0==a.Ua.length?"":"in property '"+a.Ua.join(".")+"'"};function qf(a,b){this.value=a;this.children=b||rf}var rf=new Ec(function(a,b){return a===b?0:a<b?-1:1});function sf(a){var b=qe;v(a,function(a,d){b=b.set(new P(d),a)});return b}h=qf.prototype;h.e=function(){return null===this.value&&this.children.e()};function tf(a,b,c){if(null!=a.value&&c(a.value))return{path:M,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=tf(a,N(b),c),null!=b?{path:(new P(d)).o(b.path),value:b.value}:null):null}
function uf(a,b){return tf(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):qe};h.set=function(a,b){if(a.e())return new qf(b,this.children);var c=K(a),d=(this.children.get(c)||qe).set(N(a),b),c=this.children.Sa(c,d);return new qf(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?qe:new qf(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Sa(b,a),null===this.value&&b.e()?qe:new qf(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
function pe(a,b,c){if(b.e())return c;var d=K(b);b=pe(a.children.get(d)||qe,N(b),c);d=b.e()?a.children.remove(d):a.children.Sa(d,b);return new qf(a.value,d)}function vf(a,b){return wf(a,M,b)}function wf(a,b,c){var d={};a.children.ka(function(a,f){d[a]=wf(f,b.o(a),c)});return c(b,a.value,d)}function xf(a,b,c){return yf(a,b,M,c)}function yf(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?yf(a,N(b),c.o(e),d):null}
function zf(a,b,c){Af(a,b,M,c)}function Af(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Af(a,N(b),c.o(e),d):qe}function ne(a,b){Bf(a,M,b)}function Bf(a,b,c){a.children.ka(function(a,e){Bf(e,b.o(a),c)});a.value&&c(b,a.value)}function Cf(a,b){a.children.ka(function(a,d){d.value&&b(a,d.value)})}var qe=new qf(null);qf.prototype.toString=function(){var a={};ne(this,function(b,c){a[b.toString()]=c.toString()});return G(a)};function Df(a,b,c){this.type=ee;this.source=Ef;this.path=a;this.Ub=b;this.Yd=c}Df.prototype.$c=function(a){if(this.path.e()){if(null!=this.Ub.value)return O(this.Ub.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ub.subtree(new P(a));return new Df(M,a,this.Yd)}O(K(this.path)===a,"operationForChild called for unrelated child.");return new Df(N(this.path),this.Ub,this.Yd)};
Df.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Yd+" affectedTree="+this.Ub+")"};var Bc=0,be=1,ee=2,Dc=3;function Ff(a,b,c,d){this.Ae=a;this.tf=b;this.Lb=c;this.ef=d;O(!d||b,"Tagged queries must be from server.")}var Ef=new Ff(!0,!1,null,!1),Gf=new Ff(!1,!0,null,!1);Ff.prototype.toString=function(){return this.Ae?"user":this.ef?"server(queryID="+this.Lb+")":"server"};function Hf(a){this.Z=a}var If=new Hf(new qf(null));function Jf(a,b,c){if(b.e())return new Hf(new qf(c));var d=uf(a.Z,b);if(null!=d){var e=d.path,d=d.value;b=lf(e,b);d=d.H(b,c);return new Hf(a.Z.set(e,d))}a=pe(a.Z,b,new qf(c));return new Hf(a)}function Kf(a,b,c){var d=a;Fb(c,function(a,c){d=Jf(d,b.o(a),c)});return d}Hf.prototype.Ud=function(a){if(a.e())return If;a=pe(this.Z,a,qe);return new Hf(a)};function Lf(a,b){var c=uf(a.Z,b);return null!=c?a.Z.get(c.path).S(lf(c.path,b)):null}
function Mf(a){var b=[],c=a.Z.value;null!=c?c.L()||c.R(R,function(a,c){b.push(new L(a,c))}):a.Z.children.ka(function(a,c){null!=c.value&&b.push(new L(a,c.value))});return b}function Nf(a,b){if(b.e())return a;var c=Lf(a,b);return null!=c?new Hf(new qf(c)):new Hf(a.Z.subtree(b))}Hf.prototype.e=function(){return this.Z.e()};Hf.prototype.apply=function(a){return Of(M,this.Z,a)};
function Of(a,b,c){if(null!=b.value)return c.H(a,b.value);var d=null;b.children.ka(function(b,f){".priority"===b?(O(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Of(a.o(b),f,c)});c.S(a).e()||null===d||(c=c.H(a.o(".priority"),d));return c};function Pf(){this.V=If;this.pa=[];this.Pc=-1}function Qf(a,b){for(var c=0;c<a.pa.length;c++){var d=a.pa[c];if(d.md===b)return d}return null}h=Pf.prototype;
h.Ud=function(a){var b=Sa(this.pa,function(b){return b.md===a});O(0<=b,"removeWrite called with nonexistent writeId.");var c=this.pa[b];this.pa.splice(b,1);for(var d=c.visible,e=!1,f=this.pa.length-1;d&&0<=f;){var g=this.pa[f];g.visible&&(f>=b&&Rf(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.V=Sf(this.pa,Tf,M),this.Pc=0<this.pa.length?this.pa[this.pa.length-1].md:-1;else if(c.Ja)this.V=this.V.Ud(c.path);else{var k=this;v(c.children,function(a,b){k.V=k.V.Ud(c.path.o(b))})}return!0}return!1};
h.Aa=function(a,b,c,d){if(c||d){var e=Nf(this.V,a);return!d&&e.e()?b:d||null!=b||null!=Lf(e,M)?(e=Sf(this.pa,function(b){return(b.visible||d)&&(!c||!(0<=La(c,b.md)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||H,e.apply(b)):null}e=Lf(this.V,a);if(null!=e)return e;e=Nf(this.V,a);return e.e()?b:null!=b||null!=Lf(e,M)?(b=b||H,e.apply(b)):null};
h.Cc=function(a,b){var c=H,d=Lf(this.V,a);if(d)d.L()||d.R(R,function(a,b){c=c.W(a,b)});else if(b){var e=Nf(this.V,a);b.R(R,function(a,b){var d=Nf(e,new P(a)).apply(b);c=c.W(a,d)});Ma(Mf(e),function(a){c=c.W(a.name,a.U)})}else e=Nf(this.V,a),Ma(Mf(e),function(a){c=c.W(a.name,a.U)});return c};h.nd=function(a,b,c,d){O(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.o(b);if(null!=Lf(this.V,a))return null;a=Nf(this.V,a);return a.e()?d.S(b):a.apply(d.S(b))};
h.Bc=function(a,b,c){a=a.o(b);var d=Lf(this.V,a);return null!=d?d:Wb(c,b)?Nf(this.V,a).apply(c.j().T(b)):null};h.xc=function(a){return Lf(this.V,a)};h.qe=function(a,b,c,d,e,f){var g;a=Nf(this.V,a);g=Lf(a,M);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.pb(f);if(g.e()||g.L())return[];b=[];a=Vd(f);e=e?g.dc(c,f):g.bc(c,f);for(f=Ic(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=Ic(e);return b};
function Rf(a,b){return a.Ja?a.path.contains(b):!!ta(a.children,function(c,d){return a.path.o(d).contains(b)})}function Tf(a){return a.visible}
function Sf(a,b,c){for(var d=If,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=lf(c,g),d=Jf(d,g,f.Ja)):g.contains(c)&&(g=lf(g,c),d=Jf(d,M,f.Ja.S(g)));else if(f.children)if(c.contains(g))g=lf(c,g),d=Kf(d,g,f.children);else{if(g.contains(c))if(g=lf(g,c),g.e())d=Kf(d,M,f.children);else if(f=z(f.children,K(g)))f=f.S(N(g)),d=Jf(d,M,f)}else throw jd("WriteRecord should have .snap or .children");}}return d}function Uf(a,b){this.Qb=a;this.Z=b}h=Uf.prototype;
h.Aa=function(a,b,c){return this.Z.Aa(this.Qb,a,b,c)};h.Cc=function(a){return this.Z.Cc(this.Qb,a)};h.nd=function(a,b,c){return this.Z.nd(this.Qb,a,b,c)};h.xc=function(a){return this.Z.xc(this.Qb.o(a))};h.qe=function(a,b,c,d,e){return this.Z.qe(this.Qb,a,b,c,d,e)};h.Bc=function(a,b){return this.Z.Bc(this.Qb,a,b)};h.o=function(a){return new Uf(this.Qb.o(a),this.Z)};function Vf(){this.children={};this.pd=0;this.value=null}function Wf(a,b,c){this.Jd=a?a:"";this.Ha=b?b:null;this.A=c?c:new Vf}function Xf(a,b){for(var c=b instanceof P?b:new P(b),d=a,e;null!==(e=K(c));)d=new Wf(e,d,z(d.A.children,e)||new Vf),c=N(c);return d}h=Wf.prototype;h.Ea=function(){return this.A.value};function Yf(a,b){O("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Zf(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.pd=0;Zf(this)};
h.zd=function(){return 0<this.A.pd};h.e=function(){return null===this.Ea()&&!this.zd()};h.R=function(a){var b=this;v(this.A.children,function(c,d){a(new Wf(d,b,c))})};function $f(a,b,c,d){c&&!d&&b(a);a.R(function(a){$f(a,b,!0,d)});c&&d&&b(a)}function ag(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new P(null===this.Ha?this.Jd:this.Ha.path()+"/"+this.Jd)};h.name=function(){return this.Jd};h.parent=function(){return this.Ha};
function Zf(a){if(null!==a.Ha){var b=a.Ha,c=a.Jd,d=a.e(),e=y(b.A.children,c);d&&e?(delete b.A.children[c],b.A.pd--,Zf(b)):d||e||(b.A.children[c]=a.A,b.A.pd++,Zf(b))}};var bg=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,dg=/^[a-zA-Z][a-zA-Z._\-+]+$/;function eg(a){return q(a)&&0!==a.length&&!bg.test(a)}function fg(a){return null===a||q(a)||fa(a)&&!td(a)||ga(a)&&y(a,".sv")}function gg(a,b,c,d){d&&!p(b)||hg(E(a,1,d),b,c)}
function hg(a,b,c){c instanceof P&&(c=new nf(c,a));if(!p(b))throw Error(a+"contains undefined "+pf(c));if(r(b))throw Error(a+"contains a function "+pf(c)+" with contents: "+b.toString());if(td(b))throw Error(a+"contains "+b.toString()+" "+pf(c));if(q(b)&&b.length>10485760/3&&10485760<Pb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+pf(c)+" ('"+b.substring(0,50)+"...')");if(ga(b)){var d=!1,e=!1;Fb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!eg(b)))throw Error(a+" contains an invalid key ("+b+") "+pf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);hg(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+pf(c)+" in addition to actual children.");}}
function ig(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!eg(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(mf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function jg(a,b,c){var d=E(a,1,!1);if(!ga(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Fb(b,function(a,b){var k=new P(a);hg(d,b,c.o(k));if(".priority"===me(k)&&!fg(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ig(d,e)}
function kg(a,b,c){if(td(c))throw Error(E(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fg(c))throw Error(E(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function lg(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(E(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function mg(a,b){if(p(b)&&!eg(b))throw Error(E(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function ng(a,b){if(!q(b)||0===b.length||cg.test(b))throw Error(E(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function og(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}function pg(a,b){if(!q(b))throw Error(E(a,1,!1)+"must be a valid credential (a string).");}function qg(a,b,c){if(!q(c))throw Error(E(a,b,!1)+"must be a valid string.");}
function rg(a,b){qg(a,1,b);if(!dg.test(b))throw Error(E(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function sg(a,b,c,d){if(!d||p(c))if(!ga(c)||null===c)throw Error(E(a,b,d)+"must be a valid object.");}function tg(a,b,c){if(!ga(b)||!y(b,c))throw Error(E(a,1,!1)+'must contain the key "'+c+'"');if(!q(z(b,c)))throw Error(E(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function ug(){this.set={}}h=ug.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return y(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return va(this.set)};h.count=function(){return oa(this.set)};function vg(a,b){v(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Vc(){this.m=this.B=null}Vc.prototype.find=function(a){if(null!=this.B)return this.B.S(a);if(a.e()||null==this.m)return null;var b=K(a);a=N(a);return this.m.contains(b)?this.m.get(b).find(a):null};Vc.prototype.rc=function(a,b){if(a.e())this.B=b,this.m=null;else if(null!==this.B)this.B=this.B.H(a,b);else{null==this.m&&(this.m=new ug);var c=K(a);this.m.contains(c)||this.m.add(c,new Vc);c=this.m.get(c);a=N(a);c.rc(a,b)}};
function wg(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.L())return!1;var c=a.B;a.B=null;c.R(R,function(b,c){a.rc(new P(b),c)});return wg(a,b)}return null!==a.m?(c=K(b),b=N(b),a.m.contains(c)&&wg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function Wc(a,b,c){null!==a.B?c(b,a.B):a.R(function(a,e){var f=new P(b.toString()+"/"+a);Wc(e,f,c)})}Vc.prototype.R=function(a){null!==this.m&&vg(this.m,function(b,c){a(b,c)})};var xg="auth.firebase.com";function yg(a,b,c){this.qd=a||{};this.he=b||{};this.fb=c||{};this.qd.remember||(this.qd.remember="default")}var zg=["remember","redirectTo"];function Ag(a){var b={},c={};Fb(a||{},function(a,e){0<=La(zg,a)?b[a]=e:c[a]=e});return new yg(b,{},c)};function Bg(a,b){this.Ue=["session",a.Rd,a.lc].join(":");this.ee=b}Bg.prototype.set=function(a,b){if(!b)if(this.ee.length)b=this.ee[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ue,a)};Bg.prototype.get=function(){var a=Oa(this.ee,u(this.Bg,this)),a=Na(a,function(a){return null!==a});Va(a,function(a,c){return Dd(c.token)-Dd(a.token)});return 0<a.length?a.shift():null};Bg.prototype.Bg=function(a){try{var b=a.get(this.Ue);if(b&&b.token)return b}catch(c){}return null};
Bg.prototype.clear=function(){var a=this;Ma(this.ee,function(b){b.remove(a.Ue)})};function Cg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function Dg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg())}function Eg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
function Fg(a){var b=Cg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function Gg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Hg(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Ig(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function Jg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Kg(a){var b="";try{a=a.replace(/.*\?/,"");var c=Jb(a);c&&y(c,"__firebase_request_key")&&(b=z(c,"__firebase_request_key"))}catch(d){}return b}function Lg(){var a=sd(xg);return a.scheme+"://"+a.host+"/v2"}function Mg(a){return Lg()+"/"+a+"/auth/channel"};function Ng(a){var b=this;this.hb=a;this.fe="*";Fg(8)?this.Uc=this.Cd=Gg():(this.Uc=window.opener,this.Cd=window);if(!b.Uc)throw"Unable to find relay frame";Hg(this.Cd,"message",u(this.nc,this));Hg(this.Cd,"message",u(this.Ff,this));try{Og(this,{a:"ready"})}catch(c){Hg(this.Uc,"load",function(){Og(b,{a:"ready"})})}Hg(window,"unload",u(this.Mg,this))}function Og(a,b){b=G(b);Fg(8)?a.Uc.doPost(b,a.fe):a.Uc.postMessage(b,a.fe)}
Ng.prototype.nc=function(a){var b=this,c;try{c=Rb(a.data)}catch(d){}c&&"request"===c.a&&(Ig(window,"message",this.nc),this.fe=a.origin,this.hb&&setTimeout(function(){b.hb(b.fe,c.d,function(a,c){b.mg=!c;b.hb=void 0;Og(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Ng.prototype.Mg=function(){try{Ig(this.Cd,"message",this.Ff)}catch(a){}this.hb&&(Og(this,{a:"error",d:"unknown closed window"}),this.hb=void 0);try{window.close()}catch(b){}};Ng.prototype.Ff=function(a){if(this.mg&&"die"===a.data)try{window.close()}catch(b){}};function Pg(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}Pg.prototype.open=function(a,b){cd.set("redirect_request_id",this.tc);cd.set("redirect_request_id",this.tc);b.requestId=this.tc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+Ib(b);window.location=a};Pg.isAvailable=function(){return!Eg()&&!Dg()};Pg.prototype.Fc=function(){return"redirect"};var Qg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Rg(a){var b=Error(z(Qg,a),a);b.code=a;return b};function Sg(a){var b;(b=!a.window_features)||(b=Cg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
Sg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);t&&(t=clearInterval(t));Ig(window,"message",e);Ig(window,"unload",d);if(l&&!a)try{l.close()}catch(b){k.postMessage("die",m)}l=k=void 0}function e(a){if(a.origin===m)try{var b=Rb(a.data);"ready"===b.a?k.postMessage(A,m):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Fg(8),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var m=Jg(a);if(m!==Jg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+Ib(b);var l=window.open(a,this.options.window_name,this.options.window_features);k||(k=l);var t=setInterval(function(){l&&l.closed&&
(d(!1),c&&(c(Rg("USER_CANCELLED")),c=null))},500),A=G({a:"request",d:b});Hg(window,"unload",d);Hg(window,"message",e)}};
Sg.isAvailable=function(){var a;if(a="postMessage"in window&&!Eg())(a=Dg()||"undefined"!==typeof navigator&&(!!Cg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=Cg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!Cg().match(/PhantomJS/)};Sg.prototype.Fc=function(){return"popup"};function Tg(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
Tg.prototype.open=function(a,b,c){function d(){c&&(c(Rg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;Hg(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=Rb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Rg("SERVER_ERROR")):c(Rg("NETWORK_ERROR"));c=null;Ig(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+Ib(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=G(b));"application/x-www-form-urlencoded"===k&&(g=Ib(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};ya(a,this.options.headers);for(var m in a)e.setRequestHeader(m,a[m]);e.send(g)};Tg.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=Cg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||Fg(10);return a};Tg.prototype.Fc=function(){return"json"};function Ug(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}
Ug.prototype.open=function(a,b,c){function d(){c&&(c(Rg("USER_CANCELLED")),c=null)}var e=this,f=sd(xg),g;b.requestId=this.tc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=Ib(b);(g=window.open(a,"_blank","location=no"))&&r(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var l=document.createElement("a");l.href=a.url;b=l.host===f.host&&"/blank/page.html"===l.pathname;break a}catch(t){}b=!1}b&&(a=Kg(a.url),g.removeEventListener("exit",
d),g.close(),a=new yg(null,null,{requestId:e.tc,requestKey:a}),e.Kf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(Rg("TRANSPORT_UNAVAILABLE"))};Ug.isAvailable=function(){return Dg()};Ug.prototype.Fc=function(){return"redirect"};function Vg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Vg.prototype.open=function(a,b,c){function d(){c&&(c(Rg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;va(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Ig(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+Ib(b);
Hg(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Wg(f,a,c)};
function Wg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Rg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Rg("NETWORK_ERROR"))}},0)}Vg.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
Vg.prototype.Fc=function(){return"json"};function Xg(a,b,c,d){ff.call(this,["auth_status"]);this.G=a;this.hf=b;this.gh=c;this.Pe=d;this.wc=new Bg(a,[bd,cd]);this.qb=null;this.We=!1;Yg(this)}ka(Xg,ff);h=Xg.prototype;h.Be=function(){return this.qb||null};function Yg(a){cd.get("redirect_request_id")&&Zg(a);var b=a.wc.get();b&&b.token?($g(a,b),a.hf(b.token,function(c,d){ah(a,c,d,!1,b.token,b)},function(b,d){bh(a,"resumeSession()",b,d)})):$g(a,null)}
function ch(a,b,c,d,e,f){"firebaseio-demo.com"===a.G.domain&&S("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.hf(b,function(f,k){ah(a,f,k,!0,b,c,d||{},e)},function(b,c){bh(a,"auth()",b,c,f)})}function dh(a,b){a.wc.clear();$g(a,null);a.gh(function(a,d){if("ok"===a)T(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;T(b,f)}})}
function ah(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Ed(e)?e:"",c=null,b&&y(b,"uid")?c=z(b,"uid"):y(f,"uid")&&(c=z(f,"uid")),f.uid=c,c="custom",b&&y(b,"provider")?c=z(b,"provider"):y(f,"provider")&&(c=z(f,"provider")),f.provider=c,a.wc.clear(),Ed(e)&&(g=g||{},c=bd,"sessionOnly"===g.remember&&(c=cd),"none"!==g.remember&&a.wc.set(f,c)),$g(a,f)),T(k,null,f)):(a.wc.clear(),$g(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,T(k,f))}
function bh(a,b,c,d,e){S(b+" was canceled: "+d);a.wc.clear();$g(a,null);a=Error(d);a.code=c.toUpperCase();T(e,a)}function eh(a,b,c,d,e){fh(a);c=new yg(d||{},{},c||{});gh(a,[Tg,Vg],"/auth/"+b,c,e)}
function hh(a,b,c,d){fh(a);var e=[Sg,Ug];c=Ag(c);"anonymous"===b||"password"===b?setTimeout(function(){T(d,Rg("TRANSPORT_UNAVAILABLE"))},0):(c.he.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.he.relay_url=Mg(a.G.lc),c.he.requestWithCredential=u(a.uc,a),gh(a,e,"/auth/"+b,c,d))}
function Zg(a){var b=cd.get("redirect_request_id");if(b){var c=cd.get("redirect_client_options");cd.remove("redirect_request_id");cd.remove("redirect_client_options");var d=[Tg,Vg],b={requestId:b,requestKey:Kg(document.location.hash)},c=new yg(c,{},b);a.We=!0;try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}gh(a,d,"/auth/session",c,function(){this.We=!1}.bind(a))}}
h.ve=function(a,b){fh(this);var c=Ag(a);c.fb._method="POST";this.uc("/users",c,function(a,c){a?T(b,a):T(b,a,c)})};h.Xe=function(a,b){var c=this;fh(this);var d="/users/"+encodeURIComponent(a.email),e=Ag(a);e.fb._method="DELETE";this.uc(d,e,function(a,d){!a&&d&&d.uid&&c.qb&&c.qb.uid&&c.qb.uid===d.uid&&dh(c);T(b,a)})};h.se=function(a,b){fh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="PUT";d.fb.password=a.newPassword;this.uc(c,d,function(a){T(b,a)})};
h.re=function(a,b){fh(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=Ag(a);d.fb._method="PUT";d.fb.email=a.newEmail;d.fb.password=a.password;this.uc(c,d,function(a){T(b,a)})};h.Ze=function(a,b){fh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="POST";this.uc(c,d,function(a){T(b,a)})};h.uc=function(a,b,c){ih(this,[Tg,Vg],a,b,c)};
function gh(a,b,c,d,e){ih(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?ch(a,c.token,c,d.qd,function(a,b){a?T(e,a):T(e,null,b)}):T(e,b||Rg("UNKNOWN_ERROR"))})}
function ih(a,b,c,d,e){b=Na(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){T(e,Rg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.he),d=Gb(d.fb),d.v="js-"+Eb,d.transport=b.Fc(),d.suppress_status_codes=!0,a=Lg()+"/"+a.G.lc+c,b.open(a,d,function(a,b){if(a)T(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;T(e,c)}else T(e,null,b)}))}
function $g(a,b){var c=null!==a.qb||null!==b;a.qb=b;c&&a.ie("auth_status",b);a.Pe(null!==b)}h.Ee=function(a){O("auth_status"===a,'initial event must be of type "auth_status"');return this.We?null:[this.qb]};function fh(a){var b=a.G;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===xg)throw Error("This custom Firebase server ('"+a.G.domain+"') does not support delegated login.");};var gd="websocket",hd="long_polling";function jh(a){this.nc=a;this.Qd=[];this.Wb=0;this.te=-1;this.Jb=null}function kh(a,b,c){a.te=b;a.Jb=c;a.te<a.Wb&&(a.Jb(),a.Jb=null)}function lh(a,b,c){for(a.Qd[b]=c;a.Qd[a.Wb];){var d=a.Qd[a.Wb];delete a.Qd[a.Wb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;gc(function(){f.nc(d[e])})}if(a.Wb===a.te){a.Jb&&(clearTimeout(a.Jb),a.Jb(),a.Jb=null);break}a.Wb++}};function mh(a,b,c,d){this.ue=a;this.f=pd(a);this.rb=this.sb=0;this.Xa=uc(b);this.Xf=c;this.Kc=!1;this.Fb=d;this.ld=function(a){return fd(b,hd,a)}}var nh,oh;
mh.prototype.open=function(a,b){this.mf=0;this.na=b;this.Ef=new jh(a);this.Db=!1;var c=this;this.ub=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.ub=null},Math.floor(3E4));ud(function(){if(!c.Db){c.Wa=new ph(function(a,b,d,k,m){qh(c,arguments);if(c.Wa)if(c.ub&&(clearTimeout(c.ub),c.ub=null),c.Kc=!0,"start"==a)c.id=b,c.Mf=d;else if("close"===a)b?(c.Wa.$d=!1,kh(c.Ef,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){qh(c,arguments);
lh(c.Ef,a,b)},function(){c.bb()},c.ld);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.ke&&(a.cb=c.Wa.ke);a.v="5";c.Xf&&(a.s=c.Xf);c.Fb&&(a.ls=c.Fb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.ld(a);c.f("Connecting via long-poll to "+a);rh(c.Wa,a,function(){})}})};
mh.prototype.start=function(){var a=this.Wa,b=this.Mf;a.Fg=this.id;a.Gg=b;for(a.oe=!0;sh(a););a=this.id;b=this.Mf;this.kc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.kc.src=this.ld(c);this.kc.style.display="none";document.body.appendChild(this.kc)};
mh.isAvailable=function(){return nh||!oh&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.ih)&&!0};h=mh.prototype;h.Hd=function(){};h.fd=function(){this.Db=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.kc&&(document.body.removeChild(this.kc),this.kc=null);this.ub&&(clearTimeout(this.ub),this.ub=null)};
h.bb=function(){this.Db||(this.f("Longpoll is closing itself"),this.fd(),this.na&&(this.na(this.Kc),this.na=null))};h.close=function(){this.Db||(this.f("Longpoll is being closed."),this.fd())};h.send=function(a){a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=Ob(a);a=nb(a,!0);a=yd(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.cd.push({Xg:this.mf,fh:a.length,of:a[b]});c.oe&&sh(c);this.mf++}};function qh(a,b){var c=G(b).length;a.rb+=c;rc(a.Xa,"bytes_received",c)}
function ph(a,b,c,d){this.ld=d;this.lb=c;this.Te=new ug;this.cd=[];this.we=Math.floor(1E8*Math.random());this.$d=!0;this.ke=id();window["pLPCommand"+this.ke]=a;window["pRTLPCB"+this.ke]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||fc("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.jb=a.contentDocument:a.contentWindow?a.jb=a.contentWindow.document:a.document&&(a.jb=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.jb.open(),this.Ga.jb.write(a),this.Ga.jb.close()}catch(f){fc("frame writing exception"),f.stack&&fc(f.stack),fc(f)}}
ph.prototype.close=function(){this.oe=!1;if(this.Ga){this.Ga.jb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.lb;b&&(this.lb=null,b())};
function sh(a){if(a.oe&&a.$d&&a.Te.count()<(0<a.cd.length?2:1)){a.we++;var b={};b.id=a.Fg;b.pw=a.Gg;b.ser=a.we;for(var b=a.ld(b),c="",d=0;0<a.cd.length;)if(1870>=a.cd[0].of.length+30+c.length){var e=a.cd.shift(),c=c+"&seg"+d+"="+e.Xg+"&ts"+d+"="+e.fh+"&d"+d+"="+e.of;d++}else break;th(a,b+c,a.we);return!0}return!1}function th(a,b,c){function d(){a.Te.remove(c);sh(a)}a.Te.add(c,1);var e=setTimeout(d,Math.floor(25E3));rh(a,b,function(){clearTimeout(e);d()})}
function rh(a,b,c){setTimeout(function(){try{if(a.$d){var d=a.Ga.jb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){fc("Long-poll script failed to load: "+b);a.$d=!1;a.close()};a.Ga.jb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var uh=null;"undefined"!==typeof MozWebSocket?uh=MozWebSocket:"undefined"!==typeof WebSocket&&(uh=WebSocket);function vh(a,b,c,d){this.ue=a;this.f=pd(this.ue);this.frames=this.Nc=null;this.rb=this.sb=this.ff=0;this.Xa=uc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.jf=fd(b,gd,a)}var wh;
vh.prototype.open=function(a,b){this.lb=b;this.Kg=a;this.f("Websocket connecting to "+this.jf);this.Kc=!1;bd.set("previous_websocket_failure",!0);try{this.La=new uh(this.jf)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.Kc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.bb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.rb+=
a.length,rc(e.Xa,"bytes_received",a.length),xh(e),null!==e.frames)yh(e,a);else{a:{O(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.ff=b;e.frames=[];a=null;break a}}e.ff=1;e.frames=[]}null!==a&&yh(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};vh.prototype.start=function(){};
vh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==uh&&!wh};vh.responsesRequiredToBeHealthy=2;vh.healthyTimeout=3E4;h=vh.prototype;h.Hd=function(){bd.remove("previous_websocket_failure")};function yh(a,b){a.frames.push(b);if(a.frames.length==a.ff){var c=a.frames.join("");a.frames=null;c=Rb(c);a.Kg(c)}}
h.send=function(a){xh(this);a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=yd(a,16384);1<a.length&&zh(this,String(a.length));for(var b=0;b<a.length;b++)zh(this,a[b])};h.fd=function(){this.Db=!0;this.Nc&&(clearInterval(this.Nc),this.Nc=null);this.La&&(this.La.close(),this.La=null)};h.bb=function(){this.Db||(this.f("WebSocket is closing itself"),this.fd(),this.lb&&(this.lb(this.Kc),this.lb=null))};h.close=function(){this.Db||(this.f("WebSocket is being closed"),this.fd())};
function xh(a){clearInterval(a.Nc);a.Nc=setInterval(function(){a.La&&zh(a,"0");xh(a)},Math.floor(45E3))}function zh(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(u(a.bb,a),0)}};function Ah(a){Bh(this,a)}var Ch=[mh,vh];function Bh(a,b){var c=vh&&vh.isAvailable(),d=c&&!(bd.Af||!0===bd.get("previous_websocket_failure"));b.hh&&(c||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.jd=[vh];else{var e=a.jd=[];zd(Ch,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Dh(a){if(0<a.jd.length)return a.jd[0];throw Error("No transports available");};function Eh(a,b,c,d,e,f,g){this.id=a;this.f=pd("c:"+this.id+":");this.nc=c;this.Zc=d;this.na=e;this.Re=f;this.G=b;this.Pd=[];this.kf=0;this.Wf=new Ah(b);this.N=0;this.Fb=g;this.f("Connection created");Fh(this)}
function Fh(a){var b=Dh(a.Wf);a.K=new b("c:"+a.id+":"+a.kf++,a.G,void 0,a.Fb);a.Ve=b.responsesRequiredToBeHealthy||0;var c=Gh(a,a.K),d=Hh(a,a.K);a.kd=a.K;a.ed=a.K;a.F=null;a.Eb=!1;setTimeout(function(){a.K&&a.K.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.Bd=setTimeout(function(){a.Bd=null;a.Eb||(a.K&&102400<a.K.rb?(a.f("Connection exceeded healthy timeout but has received "+a.K.rb+" bytes.  Marking connection healthy."),a.Eb=!0,a.K.Hd()):a.K&&10240<a.K.sb?a.f("Connection exceeded healthy timeout but has sent "+
a.K.sb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Hh(a,b){return function(c){b===a.K?(a.K=null,c||0!==a.N?1===a.N&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.G.ab.substr(0,2)&&(bd.remove("host:"+a.G.host),a.G.ab=a.G.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.kd!==c&&a.ed!==c||a.close()):a.f("closing an old connection")}}
function Gh(a,b){return function(c){if(2!=a.N)if(b===a.ed){var d=wd("t",c);c=wd("d",c);if("c"==d){if(d=wd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Uf=c.s;ed(a.G,f);0==a.N&&(a.K.start(),Ih(a,a.K,d),"5"!==e&&S("Protocol version mismatch detected"),c=a.Wf,(c=1<c.jd.length?c.jd[1]:null)&&Jh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.ed=a.F;for(c=0;c<a.Pd.length;++c)a.Ld(a.Pd[c]);a.Pd=[];Kh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Re&&(a.Re(c),a.Re=null),a.na=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),ed(a.G,c),1===a.N?a.close():(Lh(a),Fh(a))):"e"===d?qd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Mh(a),Nh(a)):qd("Unknown control packet command: "+d)}else"d"==d&&a.Ld(c)}else if(b===a.F)if(d=wd("t",c),c=wd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Oh(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.kd!==a.F&&a.ed!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.Tf--,Oh(a)));else if("d"==d)a.Pd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Eh.prototype.Ia=function(a){Ph(this,{t:"d",d:a})};function Kh(a){a.kd===a.F&&a.ed===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.ue),a.K=a.F,a.F=null)}
function Oh(a){0>=a.Tf?(a.f("Secondary connection is healthy."),a.Eb=!0,a.F.Hd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.K.send({t:"c",d:{t:"n",d:{}}}),a.kd=a.F,Kh(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}Eh.prototype.Ld=function(a){Mh(this);this.nc(a)};function Mh(a){a.Eb||(a.Ve--,0>=a.Ve&&(a.f("Primary connection is healthy."),a.Eb=!0,a.K.Hd()))}
function Jh(a,b){a.F=new b("c:"+a.id+":"+a.kf++,a.G,a.Uf);a.Tf=b.responsesRequiredToBeHealthy||0;a.F.open(Gh(a,a.F),Hh(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function Ih(a,b,c){a.f("Realtime connection established.");a.K=b;a.N=1;a.Zc&&(a.Zc(c,a.Uf),a.Zc=null);0===a.Ve?(a.f("Primary connection is healthy."),a.Eb=!0):setTimeout(function(){Nh(a)},Math.floor(5E3))}
function Nh(a){a.Eb||1!==a.N||(a.f("sending ping on primary."),Ph(a,{t:"c",d:{t:"p",d:{}}}))}function Ph(a,b){if(1!==a.N)throw"Connection is not connected";a.kd.send(b)}Eh.prototype.close=function(){2!==this.N&&(this.f("Closing realtime connection."),this.N=2,Lh(this),this.na&&(this.na(),this.na=null))};function Lh(a){a.f("Shutting down all connections");a.K&&(a.K.close(),a.K=null);a.F&&(a.F.close(),a.F=null);a.Bd&&(clearTimeout(a.Bd),a.Bd=null)};function Qh(a,b,c,d){this.id=Rh++;this.f=pd("p:"+this.id+":");this.Bf=this.Ie=!1;this.ba={};this.sa=[];this.ad=0;this.Yc=[];this.qa=!1;this.eb=1E3;this.Id=3E5;this.Kb=b;this.Xc=c;this.Se=d;this.G=a;this.wb=this.Ca=this.Ma=this.Fb=this.$e=null;this.Sb=!1;this.Wd={};this.Wg=0;this.rf=!0;this.Oc=this.Ke=null;Sh(this,0);kf.yb().Ib("visible",this.Ng,this);-1===a.host.indexOf("fblocal")&&jf.yb().Ib("online",this.Lg,this)}var Rh=0,Th=0;h=Qh.prototype;
h.Ia=function(a,b,c){var d=++this.Wg;a={r:d,a:a,b:b};this.f(G(a));O(this.qa,"sendRequest call when we're not connected not allowed.");this.Ma.Ia(a);c&&(this.Wd[d]=c)};h.Cf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.ba[f]=this.ba[f]||{};O(Ie(a.n)||!He(a.n),"listen() called for non-default but complete query");O(!this.ba[f][e],"listen() called twice for same path/queryId.");a={I:d,Ad:b,Tg:a,tag:c};this.ba[f][e]=a;this.qa&&Uh(this,a)};
function Uh(a,b){var c=b.Tg,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Ge(c.n),f.t=b.tag);f.h=b.Ad();a.Ia("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&y(k,"w")){var l=z(k,"w");da(l)&&0<=La(l,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.ba[d]&&a.ba[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Vh(a,d,e),b.I&&
b.I(m,k))})}h.O=function(a,b,c){this.Ca={rg:a,sf:!1,Dc:b,od:c};this.f("Authenticating using credential: "+a);Wh(this);(b=40==a.length)||(a=Cd(a).Ec,b="object"===typeof a&&!0===z(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Id=3E4)};h.je=function(a){delete this.Ca;this.qa&&this.Ia("unauth",{},function(b){a(b.s,b.d)})};
function Wh(a){var b=a.Ca;a.qa&&b&&a.Ia("auth",{cred:b.rg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ca===b&&delete a.Ca;b.sf?"ok"!==d&&b.od&&b.od(d,c):(b.sf=!0,b.Dc&&b.Dc(d,c))})}h.$f=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);O(Ie(a.n)||!He(a.n),"unlisten() called for non-default but complete query");if(Vh(this,c,d)&&this.qa){var e=Ge(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Ia("n",c)}};
h.Qe=function(a,b,c){this.qa?Xh(this,"o",a,b,c):this.Yc.push({bd:a,action:"o",data:b,I:c})};h.Gf=function(a,b,c){this.qa?Xh(this,"om",a,b,c):this.Yc.push({bd:a,action:"om",data:b,I:c})};h.Md=function(a,b){this.qa?Xh(this,"oc",a,null,b):this.Yc.push({bd:a,action:"oc",data:null,I:b})};function Xh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ia(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Yh(this,"p",a,b,c,d)};
h.Df=function(a,b,c,d){Yh(this,"m",a,b,c,d)};function Yh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.sa.push({action:b,Pf:d,I:e});a.ad++;b=a.sa.length-1;a.qa?Zh(a,b):a.f("Buffering put: "+c)}function Zh(a,b){var c=a.sa[b].action,d=a.sa[b].Pf,e=a.sa[b].I;a.sa[b].Ug=a.qa;a.Ia(c,d,function(d){a.f(c+" response",d);delete a.sa[b];a.ad--;0===a.ad&&(a.sa=[]);e&&e(d.s,d.d)})}
h.Ye=function(a){this.qa&&(a={c:a},this.f("reportStats",a),this.Ia("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
h.Ld=function(a){if("r"in a){this.f("from server: "+G(a));var b=a.r,c=this.Wd[b];c&&(delete this.Wd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Kb(c.p,c.d,!1,c.t):"m"===b?this.Kb(c.p,c.d,!0,c.t):"c"===b?$h(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ca,delete this.Ca,c&&c.od&&c.od(a,b)):"sd"===b?this.$e?this.$e(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):qd("Unrecognized action received from server: "+G(b)+"\nAre you using the latest client?"))}};h.Zc=function(a,b){this.f("connection ready");this.qa=!0;this.Oc=(new Date).getTime();this.Se({serverTimeOffset:a-(new Date).getTime()});this.Fb=b;if(this.rf){var c={};c["sdk.js."+Eb.replace(/\./g,"-")]=1;Dg()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.Ye(c)}ai(this);this.rf=!1;this.Xc(!0)};
function Sh(a,b){O(!a.Ma,"Scheduling a connect when we're already connected/ing?");a.wb&&clearTimeout(a.wb);a.wb=setTimeout(function(){a.wb=null;bi(a)},Math.floor(b))}h.Ng=function(a){a&&!this.Sb&&this.eb===this.Id&&(this.f("Window became visible.  Reducing delay."),this.eb=1E3,this.Ma||Sh(this,0));this.Sb=a};h.Lg=function(a){a?(this.f("Browser went online."),this.eb=1E3,this.Ma||Sh(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ma&&this.Ma.close())};
h.If=function(){this.f("data client disconnected");this.qa=!1;this.Ma=null;for(var a=0;a<this.sa.length;a++){var b=this.sa[a];b&&"h"in b.Pf&&b.Ug&&(b.I&&b.I("disconnect"),delete this.sa[a],this.ad--)}0===this.ad&&(this.sa=[]);this.Wd={};ci(this)&&(this.Sb?this.Oc&&(3E4<(new Date).getTime()-this.Oc&&(this.eb=1E3),this.Oc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.eb=this.Id,this.Ke=(new Date).getTime()),a=Math.max(0,this.eb-((new Date).getTime()-this.Ke)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Sh(this,a),this.eb=Math.min(this.Id,1.3*this.eb));this.Xc(!1)};function bi(a){if(ci(a)){a.f("Making a connection attempt");a.Ke=(new Date).getTime();a.Oc=null;var b=u(a.Ld,a),c=u(a.Zc,a),d=u(a.If,a),e=a.id+":"+Th++;a.Ma=new Eh(e,a.G,b,c,d,function(b){S(b+" ("+a.G.toString()+")");a.Bf=!0},a.Fb)}}h.Cb=function(){this.Ie=!0;this.Ma?this.Ma.close():(this.wb&&(clearTimeout(this.wb),this.wb=null),this.qa&&this.If())};h.vc=function(){this.Ie=!1;this.eb=1E3;this.Ma||Sh(this,0)};
function $h(a,b,c){c=c?Oa(c,function(a){return xd(a)}).join("$"):"default";(a=Vh(a,b,c))&&a.I&&a.I("permission_denied")}function Vh(a,b,c){b=(new P(b)).toString();var d;p(a.ba[b])?(d=a.ba[b][c],delete a.ba[b][c],0===oa(a.ba[b])&&delete a.ba[b]):d=void 0;return d}function ai(a){Wh(a);v(a.ba,function(b){v(b,function(b){Uh(a,b)})});for(var b=0;b<a.sa.length;b++)a.sa[b]&&Zh(a,b);for(;a.Yc.length;)b=a.Yc.shift(),Xh(a,b.action,b.bd,b.data,b.I)}function ci(a){var b;b=jf.yb().oc;return!a.Bf&&!a.Ie&&b};var U={zg:function(){nh=wh=!0}};U.forceLongPolling=U.zg;U.Ag=function(){oh=!0};U.forceWebSockets=U.Ag;U.$g=function(a,b){a.k.Va.$e=b};U.setSecurityDebugCallback=U.$g;U.bf=function(a,b){a.k.bf(b)};U.stats=U.bf;U.cf=function(a,b){a.k.cf(b)};U.statsIncrementCounter=U.cf;U.ud=function(a){return a.k.ud};U.dataUpdateCount=U.ud;U.Dg=function(a,b){a.k.He=b};U.interceptServerData=U.Dg;U.Jg=function(a){new Ng(a)};U.onPopupOpen=U.Jg;U.Yg=function(a){xg=a};U.setAuthenticationServer=U.Yg;function di(a,b){this.committed=a;this.snapshot=b};function V(a,b){this.dd=a;this.ta=b}V.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);F("Firebase.onDisconnect().cancel",1,a,!0);var b=new B;this.dd.Md(this.ta,C(b,a));return b.D};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);og("Firebase.onDisconnect().remove",this.ta);F("Firebase.onDisconnect().remove",1,a,!0);var b=new B;ei(this.dd,this.ta,null,C(b,a));return b.D};
V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);og("Firebase.onDisconnect().set",this.ta);gg("Firebase.onDisconnect().set",a,this.ta,!1);F("Firebase.onDisconnect().set",2,b,!0);var c=new B;ei(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.set=V.prototype.set;
V.prototype.Ob=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);og("Firebase.onDisconnect().setWithPriority",this.ta);gg("Firebase.onDisconnect().setWithPriority",a,this.ta,!1);kg("Firebase.onDisconnect().setWithPriority",2,b);F("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new B;fi(this.dd,this.ta,a,b,C(d,c));return d.D};V.prototype.setWithPriority=V.prototype.Ob;
V.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);og("Firebase.onDisconnect().update",this.ta);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.onDisconnect().update",a,this.ta);F("Firebase.onDisconnect().update",2,b,!0);
c=new B;gi(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.update=V.prototype.update;function W(a,b,c){this.A=a;this.Y=b;this.g=c}W.prototype.J=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.J()};W.prototype.val=W.prototype.J;W.prototype.qf=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.J(!0)};W.prototype.exportVal=W.prototype.qf;W.prototype.xg=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.xg;
W.prototype.o=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));ng("Firebase.DataSnapshot.child",a);var b=new P(a),c=this.Y.o(b);return new W(this.A.S(b),c,R)};W.prototype.child=W.prototype.o;W.prototype.Fa=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ng("Firebase.DataSnapshot.hasChild",a);var b=new P(a);return!this.A.S(b).e()};W.prototype.hasChild=W.prototype.Fa;
W.prototype.C=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().J()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);F("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.L())return!1;var b=this;return!!this.A.R(this.g,function(c,d){return a(new W(d,b.Y.o(c),R))})};W.prototype.forEach=W.prototype.forEach;
W.prototype.zd=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.L()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.zd;W.prototype.name=function(){S("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};W.prototype.name=W.prototype.name;W.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.Y.key()};
W.prototype.key=W.prototype.key;W.prototype.Hb=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Hb()};W.prototype.numChildren=W.prototype.Hb;W.prototype.Mb=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.Y};W.prototype.ref=W.prototype.Mb;function hi(a,b,c){this.Vb=a;this.tb=b;this.vb=c||null}h=hi.prototype;h.Qf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new jc("value",this,new W(a.Na,b.Mb(),c))};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.Vb;return function(){d.call(b,a.be)}};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
h.matches=function(a){return a instanceof hi?a.Vb&&this.Vb?a.Vb===this.Vb&&a.vb===this.vb:!0:!1};h.yf=function(){return null!==this.Vb};function ii(a,b,c){this.ja=a;this.tb=b;this.vb=c}h=ii.prototype;h.Qf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ja};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
h.createEvent=function(a,b){O(null!=a.Za,"Child events should have a childName.");var c=b.Mb().o(a.Za);return new jc(a.type,this,new W(a.Na,c,b.n.g),a.Td)};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.ja[a.wd];return function(){d.call(b,a.be,a.Td)}};
h.matches=function(a){if(a instanceof ii){if(!this.ja||!a.ja)return!0;if(this.vb===a.vb){var b=oa(a.ja);if(b===oa(this.ja)){if(1===b){var b=pa(a.ja),c=pa(this.ja);return c===b&&(!a.ja[b]||!this.ja[c]||a.ja[b]===this.ja[c])}return na(this.ja,function(b,c){return a.ja[c]===b})}}}return!1};h.yf=function(){return null!==this.ja};function ji(){this.za={}}h=ji.prototype;h.e=function(){return va(this.za)};h.gb=function(a,b,c){var d=a.source.Lb;if(null!==d)return d=z(this.za,d),O(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.gb(a,b,c))});return e};h.Tb=function(a,b,c,d,e){var f=a.wa(),g=z(this.za,f);if(!g){var g=c.Aa(e?d:null),k=!1;g?k=!0:(g=d instanceof fe?c.Cc(d):H,k=!1);g=new Ye(a,new je(new Xb(g,k,!1),new Xb(d,e,!1)));this.za[f]=g}g.Tb(b);return af(g,b)};
h.nb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=ki(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.nb(b,c));a.e()&&(delete k.za[d],He(a.Y.n)||e.push(a.Y))})}else{var m=z(this.za,d);m&&(f=f.concat(m.nb(b,c)),m.e()&&(delete this.za[d],He(m.Y.n)||e.push(m.Y)))}g&&null==ki(this)&&e.push(new X(a.k,a.path));return{Vg:e,vg:f}};function li(a){return Na(qa(a.za),function(a){return!He(a.Y.n)})}h.kb=function(a){var b=null;v(this.za,function(c){b=b||c.kb(a)});return b};
function mi(a,b){if(He(b.n))return ki(a);var c=b.wa();return z(a.za,c)}function ki(a){return ua(a.za,function(a){return He(a.Y.n)})||null};function ni(a){this.va=qe;this.mb=new Pf;this.df={};this.qc={};this.Qc=a}function oi(a,b,c,d,e){var f=a.mb,g=e;O(d>f.Pc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.pa.push({path:b,Ja:c,md:d,visible:g});g&&(f.V=Jf(f.V,b,c));f.Pc=d;return e?pi(a,new Ac(Ef,b,c)):[]}function qi(a,b,c,d){var e=a.mb;O(d>e.Pc,"Stacking an older merge on top of newer ones");e.pa.push({path:b,children:c,md:d,visible:!0});e.V=Kf(e.V,b,c);e.Pc=d;c=sf(c);return pi(a,new bf(Ef,b,c))}
function ri(a,b,c){c=c||!1;var d=Qf(a.mb,b);if(a.mb.Ud(b)){var e=qe;null!=d.Ja?e=e.set(M,!0):Fb(d.children,function(a,b){e=e.set(new P(a),b)});return pi(a,new Df(d.path,e,c))}return[]}function si(a,b,c){c=sf(c);return pi(a,new bf(Gf,b,c))}function ti(a,b,c,d){d=ui(a,d);if(null!=d){var e=vi(d);d=e.path;e=e.Lb;b=lf(d,b);c=new Ac(new Ff(!1,!0,e,!0),b,c);return wi(a,d,c)}return[]}
function xi(a,b,c,d){if(d=ui(a,d)){var e=vi(d);d=e.path;e=e.Lb;b=lf(d,b);c=sf(c);c=new bf(new Ff(!1,!0,e,!0),b,c);return wi(a,d,c)}return[]}
ni.prototype.Tb=function(a,b){var c=a.path,d=null,e=!1;zf(this.va,c,function(a,b){var f=lf(a,c);d=d||b.kb(f);e=e||null!=ki(b)});var f=this.va.get(c);f?(e=e||null!=ki(f),d=d||f.kb(M)):(f=new ji,this.va=this.va.set(c,f));var g;null!=d?g=!0:(g=!1,d=H,Cf(this.va.subtree(c),function(a,b){var c=b.kb(M);c&&(d=d.W(a,c))}));var k=null!=mi(f,a);if(!k&&!He(a.n)){var m=yi(a);O(!(m in this.qc),"View does not exist, but we have a tag");var l=zi++;this.qc[m]=l;this.df["_"+l]=m}g=f.Tb(a,b,new Uf(c,this.mb),d,g);
k||e||(f=mi(f,a),g=g.concat(Ai(this,a,f)));return g};
ni.prototype.nb=function(a,b,c){var d=a.path,e=this.va.get(d),f=[];if(e&&("default"===a.wa()||null!=mi(e,a))){f=e.nb(a,b,c);e.e()&&(this.va=this.va.remove(d));e=f.Vg;f=f.vg;b=-1!==Sa(e,function(a){return He(a.n)});var g=xf(this.va,d,function(a,b){return null!=ki(b)});if(b&&!g&&(d=this.va.subtree(d),!d.e()))for(var d=Bi(d),k=0;k<d.length;++k){var m=d[k],l=m.Y,m=Ci(this,m);this.Qc.af(Di(l),Ei(this,l),m.Ad,m.I)}if(!g&&0<e.length&&!c)if(b)this.Qc.de(Di(a),null);else{var t=this;Ma(e,function(a){a.wa();
var b=t.qc[yi(a)];t.Qc.de(Di(a),b)})}Fi(this,e)}return f};ni.prototype.Aa=function(a,b){var c=this.mb,d=xf(this.va,a,function(b,c){var d=lf(b,a);if(d=c.kb(d))return d});return c.Aa(a,d,b,!0)};function Bi(a){return vf(a,function(a,c,d){if(c&&null!=ki(c))return[ki(c)];var e=[];c&&(e=li(c));v(d,function(a){e=e.concat(a)});return e})}function Fi(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!He(d.n)){var d=yi(d),e=a.qc[d];delete a.qc[d];delete a.df["_"+e]}}}
function Di(a){return He(a.n)&&!Ie(a.n)?a.Mb():a}function Ai(a,b,c){var d=b.path,e=Ei(a,b);c=Ci(a,c);b=a.Qc.af(Di(b),e,c.Ad,c.I);d=a.va.subtree(d);if(e)O(null==ki(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=vf(d,function(a,b,c){if(!a.e()&&b&&null!=ki(b))return[Ze(ki(b))];var d=[];b&&(d=d.concat(Oa(li(b),function(a){return a.Y})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Qc.de(Di(c),Ei(a,c));return b}
function Ci(a,b){var c=b.Y,d=Ei(a,c);return{Ad:function(){return(b.w()||H).hash()},I:function(b){if("ok"===b){if(d){var f=c.path;if(b=ui(a,d)){var g=vi(b);b=g.path;g=g.Lb;f=lf(b,f);f=new Cc(new Ff(!1,!0,g,!0),f);b=wi(a,b,f)}else b=[]}else b=pi(a,new Cc(Gf,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.nb(c,null,f)}}}function yi(a){return a.path.toString()+"$"+a.wa()}function vi(a){var b=a.indexOf("$");O(-1!==b&&b<a.length-1,"Bad queryKey.");return{Lb:a.substr(b+1),path:new P(a.substr(0,b))}}function ui(a,b){var c=a.df,d="_"+b;return d in c?c[d]:void 0}function Ei(a,b){var c=yi(b);return z(a.qc,c)}var zi=1;
function wi(a,b,c){var d=a.va.get(b);O(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new Uf(b,a.mb),null)}function pi(a,b){return Gi(a,b,a.va,null,new Uf(M,a.mb))}function Gi(a,b,c,d,e){if(b.path.e())return Hi(a,b,c,d,e);var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[],k=K(b.path),m=b.$c(k);if((c=c.children.get(k))&&m)var l=d?d.T(k):null,k=e.o(k),g=g.concat(Gi(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g}
function Hi(a,b,c,d,e){var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[];c.children.ka(function(c,f){var l=d?d.T(c):null,t=e.o(c),A=b.$c(c);A&&(g=g.concat(Hi(a,A,f,l,t)))});f&&(g=g.concat(f.gb(b,e,d)));return g};function Ii(a,b){this.G=a;this.Xa=uc(a);this.hd=null;this.fa=new Zb;this.Kd=1;this.Va=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.da=new cf(this.G,u(this.Kb,this)),setTimeout(u(this.Xc,this,!0),0)):this.da=this.Va=new Qh(this.G,u(this.Kb,this),u(this.Xc,this),u(this.Se,this));this.dh=vc(a,u(function(){return new pc(this.Xa,this.da)},this));this.yc=new Wf;
this.Ge=new Sb;var c=this;this.Fd=new ni({af:function(a,b,f,g){b=[];f=c.Ge.j(a.path);f.e()||(b=pi(c.Fd,new Ac(Gf,a.path,f)),setTimeout(function(){g("ok")},0));return b},de:aa});Ji(this,"connected",!1);this.na=new Vc;this.O=new Xg(a,u(this.da.O,this.da),u(this.da.je,this.da),u(this.Pe,this));this.ud=0;this.He=null;this.M=new ni({af:function(a,b,f,g){c.da.Cf(a,f,b,function(b,e){var f=g(b,e);dc(c.fa,a.path,f)});return[]},de:function(a,b){c.da.$f(a,b)}})}h=Ii.prototype;
h.toString=function(){return(this.G.ob?"https://":"http://")+this.G.host};h.name=function(){return this.G.lc};function Ki(a){a=a.Ge.j(new P(".info/serverTimeOffset")).J()||0;return(new Date).getTime()+a}function Li(a){a=a={timestamp:Ki(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
h.Kb=function(a,b,c,d){this.ud++;var e=new P(a);b=this.He?this.He(a,b):b;a=[];d?c?(b=ma(b,function(a){return Q(a)}),a=xi(this.M,e,b,d)):(b=Q(b),a=ti(this.M,e,b,d)):c?(d=ma(b,function(a){return Q(a)}),a=si(this.M,e,d)):(d=Q(b),a=pi(this.M,new Ac(Gf,e,d)));d=e;0<a.length&&(d=Mi(this,e));dc(this.fa,d,a)};h.Xc=function(a){Ji(this,"connected",a);!1===a&&Ni(this)};h.Se=function(a){var b=this;zd(a,function(a,d){Ji(b,d,a)})};h.Pe=function(a){Ji(this,"authenticated",a)};
function Ji(a,b,c){b=new P("/.info/"+b);c=Q(c);var d=a.Ge;d.Zd=d.Zd.H(b,c);c=pi(a.Fd,new Ac(Gf,b,c));dc(a.fa,b,c)}h.Ob=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,lh:c});var e=Li(this);b=Q(b,c);var e=Xc(b,e),f=this.Kd++,e=oi(this.M,a,e,f,!0);$b(this.fa,e);var g=this;this.da.put(a.toString(),b.J(!0),function(b,c){var e="ok"===b;e||S("set at "+a+" failed: "+b);e=ri(g.M,f,!e);dc(g.fa,a,e);Oi(d,b,c)});e=Pi(this,a);Mi(this,e);dc(this.fa,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Li(this),f={};v(b,function(a,b){d=!1;var c=Q(a);f[b]=Xc(c,e)});if(d)fc("update() called with empty data.  Don't do anything."),Oi(c,"ok");else{var g=this.Kd++,k=qi(this.M,a,f,g);$b(this.fa,k);var m=this;this.da.Df(a.toString(),b,function(b,d){var e="ok"===b;e||S("update at "+a+" failed: "+b);var e=ri(m.M,g,!e),f=a;0<e.length&&(f=Mi(m,a));dc(m.fa,f,e);Oi(c,b,d)});b=Pi(this,a);Mi(this,b);dc(this.fa,a,[])}};
function Ni(a){a.f("onDisconnectEvents");var b=Li(a),c=[];Wc(Uc(a.na,b),M,function(b,e){c=c.concat(pi(a.M,new Ac(Gf,b,e)));var f=Pi(a,b);Mi(a,f)});a.na=new Vc;dc(a.fa,M,c)}h.Md=function(a,b){var c=this;this.da.Md(a.toString(),function(d,e){"ok"===d&&wg(c.na,a);Oi(b,d,e)})};function ei(a,b,c,d){var e=Q(c);a.da.Qe(b.toString(),e.J(!0),function(c,g){"ok"===c&&a.na.rc(b,e);Oi(d,c,g)})}function fi(a,b,c,d,e){var f=Q(c,d);a.da.Qe(b.toString(),f.J(!0),function(c,d){"ok"===c&&a.na.rc(b,f);Oi(e,c,d)})}
function gi(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(fc("onDisconnect().update() called with empty data.  Don't do anything."),Oi(d,"ok")):a.da.Gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=Q(c[m]);a.na.rc(b.o(m),l)}Oi(d,e,f)})}function Qi(a,b,c){c=".info"===K(b.path)?a.Fd.Tb(b,c):a.M.Tb(b,c);bc(a.fa,b.path,c)}h.Cb=function(){this.Va&&this.Va.Cb()};h.vc=function(){this.Va&&this.Va.vc()};
h.bf=function(a){if("undefined"!==typeof console){a?(this.hd||(this.hd=new oc(this.Xa)),a=this.hd.get()):a=this.Xa.get();var b=Pa(ra(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.cf=function(a){rc(this.Xa,a);this.dh.Vf[a]=!0};h.f=function(a){var b="";this.Va&&(b=this.Va.id+":");fc(b,arguments)};
function Oi(a,b,c){a&&gc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Ri(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new X(a,b);g.Ib("value",f);c={path:b,update:c,I:d,status:null,Lf:id(),gf:e,Sf:0,le:function(){g.mc("value",f)},ne:null,Da:null,rd:null,sd:null,td:null};d=a.M.Aa(b,void 0)||H;c.rd=d;d=c.update(d.J());if(p(d)){hg("transaction failed: Data returned ",d,c.path);c.status=1;e=Xf(a.yc,b);var k=e.Ea()||[];k.push(c);Yf(e,k);"object"===typeof d&&null!==d&&y(d,".priority")?(k=z(d,".priority"),O(fg(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.M.Aa(b)||H).C().J();e=Li(a);d=Q(d,k);e=Xc(d,e);c.sd=d;c.td=e;c.Da=a.Kd++;c=oi(a.M,b,e,c.Da,c.gf);dc(a.fa,b,c);Si(a)}else c.le(),c.sd=null,c.td=null,c.I&&(a=new W(c.rd,new X(a,c.path),R),c.I(null,!1,a))}function Si(a,b){var c=b||a.yc;b||Ti(a,c);if(null!==c.Ea()){var d=Ui(a,c);O(0<d.length,"Sending zero length transaction queue");Qa(d,function(a){return 1===a.status})&&Vi(a,c.path(),d)}else c.zd()&&c.R(function(b){Si(a,b)})}
function Vi(a,b,c){for(var d=Oa(c,function(a){return a.Da}),e=a.M.Aa(b,d)||H,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];O(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Sf++;var k=lf(b,g.path),d=d.H(k,g.sd)}d=d.J(!0);a.da.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(ri(a.M,c[f].Da));if(c[f].I){var g=c[f].td,k=new X(a,c[f].path);d.push(u(c[f].I,
null,null,!0,new W(g,k,R)))}c[f].le()}Ti(a,Xf(a.yc,b));Si(a);dc(a.fa,b,e);for(f=0;f<d.length;f++)gc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(S("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ne=d;Mi(a,b)}},e)}function Mi(a,b){var c=Wi(a,b),d=c.path(),c=Ui(a,c);Xi(a,c,d);return d}
function Xi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Oa(b,function(a){return a.Da}),g=0;g<b.length;g++){var k=b[g],m=lf(c,k.path),l=!1,t;O(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,t=k.ne,e=e.concat(ri(a.M,k.Da,!0));else if(1===k.status)if(25<=k.Sf)l=!0,t="maxretry",e=e.concat(ri(a.M,k.Da,!0));else{var A=a.M.Aa(k.path,f)||H;k.rd=A;var I=b[g].update(A.J());p(I)?(hg("transaction failed: Data returned ",I,k.path),m=Q(I),"object"===typeof I&&null!=
I&&y(I,".priority")||(m=m.ia(A.C())),A=k.Da,I=Li(a),I=Xc(m,I),k.sd=m,k.td=I,k.Da=a.Kd++,Ta(f,A),e=e.concat(oi(a.M,k.path,I,k.Da,k.gf)),e=e.concat(ri(a.M,A,!0))):(l=!0,t="nodata",e=e.concat(ri(a.M,k.Da,!0)))}dc(a.fa,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].le,Math.floor(0)),b[g].I&&("nodata"===t?(k=new X(a,b[g].path),d.push(u(b[g].I,null,null,!1,new W(b[g].rd,k,R)))):d.push(u(b[g].I,null,Error(t),!1,null))))}Ti(a,a.yc);for(g=0;g<d.length;g++)gc(d[g]);Si(a)}}
function Wi(a,b){for(var c,d=a.yc;null!==(c=K(b))&&null===d.Ea();)d=Xf(d,c),b=N(b);return d}function Ui(a,b){var c=[];Yi(a,b,c);c.sort(function(a,b){return a.Lf-b.Lf});return c}function Yi(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.R(function(b){Yi(a,b,c)})}function Ti(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Yf(b,0<c.length?c:null)}b.R(function(b){Ti(a,b)})}
function Pi(a,b){var c=Wi(a,b).path(),d=Xf(a.yc,b);ag(d,function(b){Zi(a,b)});Zi(a,d);$f(d,function(b){Zi(a,b)});return c}
function Zi(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(O(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ne="set"):(O(1===c[g].status,"Unexpected transaction status in abort"),c[g].le(),e=e.concat(ri(a.M,c[g].Da,!0)),c[g].I&&d.push(u(c[g].I,null,Error("set"),!1,null))));-1===f?Yf(b,null):c.length=f+1;dc(a.fa,b.path(),e);for(g=0;g<d.length;g++)gc(d[g])}};function $i(){this.sc={};this.ag=!1}$i.prototype.Cb=function(){for(var a in this.sc)this.sc[a].Cb()};$i.prototype.vc=function(){for(var a in this.sc)this.sc[a].vc()};$i.prototype.ze=function(){this.ag=!0};ba($i);$i.prototype.interrupt=$i.prototype.Cb;$i.prototype.resume=$i.prototype.vc;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.pc=d}
function aj(a){var b=null,c=null;a.oa&&(b=Od(a));a.ra&&(c=Rd(a));if(a.g===re){if(a.oa){if("[MIN_NAME]"!=Nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.ra){if("[MAX_NAME]"!=Pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===R){if(null!=b&&!fg(b)||null!=c&&!fg(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(O(a.g instanceof ve||a.g===Be,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function bj(a){if(a.oa&&a.ra&&a.la&&(!a.la||""===a.Rb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function cj(a,b){if(!0===a.pc)throw Error(b+": You can't combine multiple orderBy calls.");}h=Y.prototype;h.Mb=function(){D("Query.ref",0,0,arguments.length);return new X(this.k,this.path)};
h.Ib=function(a,b,c,d){D("Query.on",2,4,arguments.length);lg("Query.on",a,!1);F("Query.on",2,b,!1);var e=dj("Query.on",c,d);if("value"===a)Qi(this.k,this,new hi(b,e.cancel||null,e.Qa||null));else{var f={};f[a]=b;Qi(this.k,this,new ii(f,e.cancel,e.Qa))}return b};
h.mc=function(a,b,c){D("Query.off",0,3,arguments.length);lg("Query.off",a,!0);F("Query.off",2,b,!0);Qb("Query.off",3,c);var d=null,e=null;"value"===a?d=new hi(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new ii(e,null,c||null));e=this.k;d=".info"===K(this.path)?e.Fd.nb(this,d):e.M.nb(this,d);bc(e.fa,this.path,d)};
h.Og=function(a,b){function c(k){f&&(f=!1,e.mc(a,c),b&&b.call(d.Qa,k),g.resolve(k))}D("Query.once",1,4,arguments.length);lg("Query.once",a,!1);F("Query.once",2,b,!0);var d=dj("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new B;Nb(g.D);this.Ib(a,c,function(b){e.mc(a,c);d.cancel&&d.cancel.call(d.Qa,b);g.reject(b)});return g.D};
h.Le=function(a){S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Le(a);bj(b);return new Y(this.k,this.path,b,this.pc)};
h.Me=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Me(a),this.pc)};
h.Ne=function(a){D("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ne(a),this.pc)};
h.Pg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ng("Query.orderByChild",a);cj(this,"Query.orderByChild");var b=new P(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new ve(b);b=Fe(this.n,b);aj(b);return new Y(this.k,this.path,b,!0)};h.Qg=function(){D("Query.orderByKey",0,0,arguments.length);cj(this,"Query.orderByKey");var a=Fe(this.n,re);aj(a);return new Y(this.k,this.path,a,!0)};h.Rg=function(){D("Query.orderByPriority",0,0,arguments.length);cj(this,"Query.orderByPriority");var a=Fe(this.n,R);aj(a);return new Y(this.k,this.path,a,!0)};
h.Sg=function(){D("Query.orderByValue",0,0,arguments.length);cj(this,"Query.orderByValue");var a=Fe(this.n,Be);aj(a);return new Y(this.k,this.path,a,!0)};h.ce=function(a,b){D("Query.startAt",0,2,arguments.length);gg("Query.startAt",a,this.path,!0);mg("Query.startAt",b);var c=this.n.ce(a,b);bj(c);aj(c);if(this.n.oa)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new Y(this.k,this.path,c,this.pc)};
h.vd=function(a,b){D("Query.endAt",0,2,arguments.length);gg("Query.endAt",a,this.path,!0);mg("Query.endAt",b);var c=this.n.vd(a,b);bj(c);aj(c);if(this.n.ra)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.pc)};
h.tg=function(a,b){D("Query.equalTo",1,2,arguments.length);gg("Query.equalTo",a,this.path,!1);mg("Query.equalTo",b);if(this.n.oa)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.ra)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.ce(a,b).vd(a,b)};
h.toString=function(){D("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.aa;c<a.u.length;c++)""!==a.u[c]&&(b+="/"+encodeURIComponent(String(a.u[c])));return this.k.toString()+(b||"/")};h.wa=function(){var a=xd(Ge(this.n));return"{}"===a?"default":a};
function dj(a,b,c){var d={cancel:null,Qa:null};if(b&&c)d.cancel=b,F(a,3,d.cancel,!0),d.Qa=c,Qb(a,4,d.Qa);else if(b)if("object"===typeof b&&null!==b)d.Qa=b;else if("function"===typeof b)d.cancel=b;else throw Error(E(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.Mb;Y.prototype.on=Y.prototype.Ib;Y.prototype.off=Y.prototype.mc;Y.prototype.once=Y.prototype.Og;Y.prototype.limit=Y.prototype.Le;Y.prototype.limitToFirst=Y.prototype.Me;
Y.prototype.limitToLast=Y.prototype.Ne;Y.prototype.orderByChild=Y.prototype.Pg;Y.prototype.orderByKey=Y.prototype.Qg;Y.prototype.orderByPriority=Y.prototype.Rg;Y.prototype.orderByValue=Y.prototype.Sg;Y.prototype.startAt=Y.prototype.ce;Y.prototype.endAt=Y.prototype.vd;Y.prototype.equalTo=Y.prototype.tg;Y.prototype.toString=Y.prototype.toString;var Z={};Z.zc=Qh;Z.DataConnection=Z.zc;Qh.prototype.bh=function(a,b){this.Ia("q",{p:a},b)};Z.zc.prototype.simpleListen=Z.zc.prototype.bh;Qh.prototype.sg=function(a,b){this.Ia("echo",{d:a},b)};Z.zc.prototype.echo=Z.zc.prototype.sg;Qh.prototype.interrupt=Qh.prototype.Cb;Z.dg=Eh;Z.RealTimeConnection=Z.dg;Eh.prototype.sendRequest=Eh.prototype.Ia;Eh.prototype.close=Eh.prototype.close;
Z.Cg=function(a){var b=Qh.prototype.put;Qh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Qh.prototype.put=b}};Z.hijackHash=Z.Cg;Z.cg=dd;Z.ConnectionTarget=Z.cg;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.Eg=function(a){return a.k.Va.ba};Z.listens=Z.Eg;Z.ze=function(a){a.ze()};Z.forceRestClient=Z.ze;function X(a,b){var c,d,e;if(a instanceof Ii)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=sd(arguments[0]);c=d.eh;"firebase"===d.domain&&rd(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||rd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.ob||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new dd(d.host,d.ob,c,"ws"===d.scheme||"wss"===d.scheme);d=new P(d.bd);e=d.toString();var f;!(f=!q(c.host)||0===c.host.length||!eg(c.lc))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(q(e)&&0!==e.length&&!cg.test(e)));if(f)throw Error(E("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof $i)e=b;else if(q(b))e=$i.yb(),c.Rd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=$i.yb();f=c.toString();var g=z(e.sc,f);g||(g=new Ii(c,e.ag),e.sc[f]=g);c=g}Y.call(this,c,d,De,!1);this.then=void 0;this["catch"]=void 0}ka(X,Y);var ej=X,fj=["Firebase"],gj=n;fj[0]in gj||!gj.execScript||gj.execScript("var "+fj[0]);for(var hj;fj.length&&(hj=fj.shift());)!fj.length&&p(ej)?gj[hj]=ej:gj=gj[hj]?gj[hj]:gj[hj]={};X.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);$i.yb().Cb()};X.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);$i.yb().vc()};
X.enableLogging=od;X.ServerValue={TIMESTAMP:{".sv":"timestamp"}};X.SDK_VERSION=Eb;X.INTERNAL=U;X.Context=$i;X.TEST_ACCESS=Z;X.prototype.name=function(){S("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};X.prototype.name=X.prototype.name;X.prototype.key=function(){D("Firebase.key",0,0,arguments.length);return this.path.e()?null:me(this.path)};X.prototype.key=X.prototype.key;
X.prototype.o=function(a){D("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof P))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ng("Firebase.child",b)}else ng("Firebase.child",a);return new X(this.k,this.path.o(a))};X.prototype.child=X.prototype.o;X.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new X(this.k,a)};X.prototype.parent=X.prototype.parent;
X.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};X.prototype.root=X.prototype.root;X.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);og("Firebase.set",this.path);gg("Firebase.set",a,this.path,!1);F("Firebase.set",2,b,!0);var c=new B;this.k.Ob(this.path,a,null,C(c,b));return c.D};X.prototype.set=X.prototype.set;
X.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);og("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.update",a,this.path);F("Firebase.update",2,b,!0);c=new B;this.k.update(this.path,a,C(c,b));return c.D};
X.prototype.update=X.prototype.update;X.prototype.Ob=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);og("Firebase.setWithPriority",this.path);gg("Firebase.setWithPriority",a,this.path,!1);kg("Firebase.setWithPriority",2,b);F("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";var d=new B;this.k.Ob(this.path,a,b,C(d,c));return d.D};X.prototype.setWithPriority=X.prototype.Ob;
X.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);og("Firebase.remove",this.path);F("Firebase.remove",1,a,!0);return this.set(null,a)};X.prototype.remove=X.prototype.remove;
X.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);og("Firebase.transaction",this.path);F("Firebase.transaction",1,a,!1);F("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(E("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new B;r(b)&&Nb(d.D);Ri(this.k,this.path,a,function(a,c,g){a?
d.reject(a):d.resolve(new di(c,g));r(b)&&b(a,c,g)},c);return d.D};X.prototype.transaction=X.prototype.transaction;X.prototype.Zg=function(a,b){D("Firebase.setPriority",1,2,arguments.length);og("Firebase.setPriority",this.path);kg("Firebase.setPriority",1,a);F("Firebase.setPriority",2,b,!0);var c=new B;this.k.Ob(this.path.o(".priority"),a,null,C(c,b));return c.D};X.prototype.setPriority=X.prototype.Zg;
X.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);og("Firebase.push",this.path);gg("Firebase.push",a,this.path,!0);F("Firebase.push",2,b,!0);var c=Ki(this.k),d=hf(c),c=this.o(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.o(d)});c.then=u(f.then,f);c["catch"]=u(f.then,f,void 0);r(b)&&Nb(f)}return c};X.prototype.push=X.prototype.push;X.prototype.lb=function(){og("Firebase.onDisconnect",this.path);return new V(this.k,this.path)};X.prototype.onDisconnect=X.prototype.lb;
X.prototype.O=function(a,b,c){S("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);pg("Firebase.auth",a);F("Firebase.auth",2,b,!0);F("Firebase.auth",3,b,!0);var d=new B;ch(this.k.O,a,{},{remember:"none"},C(d,b),c);return d.D};X.prototype.auth=X.prototype.O;X.prototype.je=function(a){D("Firebase.unauth",0,1,arguments.length);F("Firebase.unauth",1,a,!0);var b=new B;dh(this.k.O,C(b,a));return b.D};X.prototype.unauth=X.prototype.je;
X.prototype.Be=function(){D("Firebase.getAuth",0,0,arguments.length);return this.k.O.Be()};X.prototype.getAuth=X.prototype.Be;X.prototype.Ig=function(a,b){D("Firebase.onAuth",1,2,arguments.length);F("Firebase.onAuth",1,a,!1);Qb("Firebase.onAuth",2,b);this.k.O.Ib("auth_status",a,b)};X.prototype.onAuth=X.prototype.Ig;X.prototype.Hg=function(a,b){D("Firebase.offAuth",1,2,arguments.length);F("Firebase.offAuth",1,a,!1);Qb("Firebase.offAuth",2,b);this.k.O.mc("auth_status",a,b)};X.prototype.offAuth=X.prototype.Hg;
X.prototype.hg=function(a,b,c){D("Firebase.authWithCustomToken",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);pg("Firebase.authWithCustomToken",a);F("Firebase.authWithCustomToken",2,b,!0);sg("Firebase.authWithCustomToken",3,c,!0);var d=new B;ch(this.k.O,a,{},c||{},C(d,b));return d.D};X.prototype.authWithCustomToken=X.prototype.hg;
X.prototype.ig=function(a,b,c){D("Firebase.authWithOAuthPopup",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthPopup",a);F("Firebase.authWithOAuthPopup",2,b,!0);sg("Firebase.authWithOAuthPopup",3,c,!0);var d=new B;hh(this.k.O,a,c,C(d,b));return d.D};X.prototype.authWithOAuthPopup=X.prototype.ig;
X.prototype.jg=function(a,b,c){D("Firebase.authWithOAuthRedirect",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthRedirect",a);F("Firebase.authWithOAuthRedirect",2,b,!1);sg("Firebase.authWithOAuthRedirect",3,c,!0);var d=new B,e=this.k.O,f=c,g=C(d,b);fh(e);var k=[Pg],f=Ag(f);"anonymous"===a||"firebase"===a?T(g,Rg("TRANSPORT_UNAVAILABLE")):(cd.set("redirect_client_options",f.qd),gh(e,k,"/auth/"+a,f,g));return d.D};X.prototype.authWithOAuthRedirect=X.prototype.jg;
X.prototype.kg=function(a,b,c,d){D("Firebase.authWithOAuthToken",2,4,arguments.length);3===arguments.length&&Hb(c)&&(d=c,c=void 0);rg("Firebase.authWithOAuthToken",a);F("Firebase.authWithOAuthToken",3,c,!0);sg("Firebase.authWithOAuthToken",4,d,!0);var e=new B;q(b)?(qg("Firebase.authWithOAuthToken",2,b),eh(this.k.O,a+"/token",{access_token:b},d,C(e,c))):(sg("Firebase.authWithOAuthToken",2,b,!1),eh(this.k.O,a+"/token",b,d,C(e,c)));return e.D};X.prototype.authWithOAuthToken=X.prototype.kg;
X.prototype.gg=function(a,b){D("Firebase.authAnonymously",0,2,arguments.length);1===arguments.length&&Hb(a)&&(b=a,a=void 0);F("Firebase.authAnonymously",1,a,!0);sg("Firebase.authAnonymously",2,b,!0);var c=new B;eh(this.k.O,"anonymous",{},b,C(c,a));return c.D};X.prototype.authAnonymously=X.prototype.gg;
X.prototype.lg=function(a,b,c){D("Firebase.authWithPassword",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);sg("Firebase.authWithPassword",1,a,!1);tg("Firebase.authWithPassword",a,"email");tg("Firebase.authWithPassword",a,"password");F("Firebase.authWithPassword",2,b,!0);sg("Firebase.authWithPassword",3,c,!0);var d=new B;eh(this.k.O,"password",a,c,C(d,b));return d.D};X.prototype.authWithPassword=X.prototype.lg;
X.prototype.ve=function(a,b){D("Firebase.createUser",1,2,arguments.length);sg("Firebase.createUser",1,a,!1);tg("Firebase.createUser",a,"email");tg("Firebase.createUser",a,"password");F("Firebase.createUser",2,b,!0);var c=new B;this.k.O.ve(a,C(c,b));return c.D};X.prototype.createUser=X.prototype.ve;
X.prototype.Xe=function(a,b){D("Firebase.removeUser",1,2,arguments.length);sg("Firebase.removeUser",1,a,!1);tg("Firebase.removeUser",a,"email");tg("Firebase.removeUser",a,"password");F("Firebase.removeUser",2,b,!0);var c=new B;this.k.O.Xe(a,C(c,b));return c.D};X.prototype.removeUser=X.prototype.Xe;
X.prototype.se=function(a,b){D("Firebase.changePassword",1,2,arguments.length);sg("Firebase.changePassword",1,a,!1);tg("Firebase.changePassword",a,"email");tg("Firebase.changePassword",a,"oldPassword");tg("Firebase.changePassword",a,"newPassword");F("Firebase.changePassword",2,b,!0);var c=new B;this.k.O.se(a,C(c,b));return c.D};X.prototype.changePassword=X.prototype.se;
X.prototype.re=function(a,b){D("Firebase.changeEmail",1,2,arguments.length);sg("Firebase.changeEmail",1,a,!1);tg("Firebase.changeEmail",a,"oldEmail");tg("Firebase.changeEmail",a,"newEmail");tg("Firebase.changeEmail",a,"password");F("Firebase.changeEmail",2,b,!0);var c=new B;this.k.O.re(a,C(c,b));return c.D};X.prototype.changeEmail=X.prototype.re;
X.prototype.Ze=function(a,b){D("Firebase.resetPassword",1,2,arguments.length);sg("Firebase.resetPassword",1,a,!1);tg("Firebase.resetPassword",a,"email");F("Firebase.resetPassword",2,b,!0);var c=new B;this.k.O.Ze(a,C(c,b));return c.D};X.prototype.resetPassword=X.prototype.Ze;})();



/**
 * Swiper 3.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: January 10, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext(),y.emit("onAutoplay",y)):y.isEnd?s.autoplayStopOnLast?y.stopAutoplay():(y._slideTo(0),y.emit("onAutoplay",y)):(y._slideNext(),y.emit("onAutoplay",y))},y.params.autoplay)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),y.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(y.isHorizontal()&&39===a||!y.isHorizontal()&&40===a))return!1;if(!y.params.allowSwipeToPrev&&(y.isHorizontal()&&37===a||!y.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=y.container.offset();y.rtl&&(n.left=n.left-y.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+y.width,n.top],[n.left,n.top+y.height],[n.left+y.width,n.top+y.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}y.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!y.rtl||37===a&&y.rtl)&&y.slideNext(),(37===a&&!y.rtl||39===a&&y.rtl)&&y.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&y.slideNext(),38===a&&y.slidePrev())}}function p(e){e.originalEvent&&(e=e.originalEvent);var a=y.mousewheel.event,t=0,s=y.rtl?-1:1;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==t){if(y.params.mousewheelInvert&&(t=-t),y.params.freeMode){var r=y.getWrapperTranslate()+t*y.params.mousewheelSensitivity,i=y.isBeginning,n=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!i&&y.isBeginning||!n&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky?(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)):y.params.lazyLoading&&y.lazy&&y.lazy.load(),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>t)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function d(e,t){e=a(e);var s,r,i,n=y.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):y.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},m=s&&s.virtualTranslate;s=s||{};var f={};for(var h in s)if("object"!=typeof s[h]||null===s[h]||(s[h].nodeType||s[h]===window||s[h]===document||"undefined"!=typeof Dom7&&s[h]instanceof Dom7||"undefined"!=typeof jQuery&&s[h]instanceof jQuery))f[h]=s[h];else{f[h]={};for(var g in s[h])f[h][g]=s[h][g]}for(var v in c)if("undefined"==typeof s[v])s[v]=c[v];else if("object"==typeof s[v])for(var w in c[v])"undefined"==typeof s[v][w]&&(s[v][w]=c[v][w]);var y=this;if(y.params=s,y.originalParams=f,y.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(y.$=a,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,a=!1,t=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var a=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams;for(var t in a)y.params[t]=a[t];y.currentBreakpoint=e}},y.params.breakpoints&&y.setBreakpoint(),y.container=a(e),0!==y.container.length)){if(y.container.length>1)return void y.container.each(function(){new t(this,s)});y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),("fade"===y.params.effect||"flip"===y.params.effect)&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,y.params.setWrapperSize=!1,"undefined"==typeof m&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=a(y.params.pagination),"bullets"===y.params.paginationType&&y.params.paginationClickable?y.paginationContainer.addClass("swiper-pagination-clickable"):y.params.paginationClickable=!1,y.paginationContainer.addClass("swiper-pagination-"+y.params.paginationType)),y.isHorizontal=function(){return"horizontal"===y.params.direction},y.rtl=y.isHorizontal()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,a,t,s,r){function i(){r&&r()}var n;e.complete&&s?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var a=0;a<y.imagesToLoad.length;a++)y.loadImage(y.imagesToLoad[a],y.imagesToLoad[a].currentSrc||y.imagesToLoad[a].getAttribute("src"),y.imagesToLoad[a].srcset||y.imagesToLoad[a].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void i()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,i()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?i():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&y.wrapper.css("height",a+"px")}},y.updateContainerSize=function(){var e,a;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,a="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&y.isHorizontal()||0===a&&!y.isHorizontal()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),a=a-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=a,y.size=y.isHorizontal()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,a=y.params.spaceBetween,t=-y.params.slidesOffsetBefore,s=0,i=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*y.size),y.virtualSize=-a,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var n;y.params.slidesPerColumn>1&&(n=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(n=Math.max(n,y.params.slidesPerView*y.params.slidesPerColumn)));var o,l=y.params.slidesPerColumn,p=n/l,d=p-(y.params.slidesPerColumn*p-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var u=y.slides.eq(e);if(y.params.slidesPerColumn>1){var c,m,f;"column"===y.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===y.params.slidesPerView?(o=y.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),y.params.roundLengths&&(o=r(o))):(o=(y.size-(y.params.slidesPerView-1)*a)/y.params.slidesPerView,y.params.roundLengths&&(o=r(o)),y.isHorizontal()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-y.size/2-a),Math.abs(t)<.001&&(t=0),i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t)):(i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t),t=t+o+a),y.virtualSize+=o+a,s=o,i++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var h;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(y.isHorizontal()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*n,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(h=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&h.push(y.snapGrid[e]);y.snapGrid=h}if(!y.params.centeredSlides){for(h=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&h.push(y.snapGrid[e]);y.snapGrid=h,Math.floor(y.virtualSize-y.size)>Math.floor(y.snapGrid[y.snapGrid.length-1])&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(y.isHorizontal()?y.rtl?y.slides.css({marginLeft:a+"px"}):y.slides.css({marginRight:a+"px"}):y.slides.css({marginBottom:a+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=y.isHorizontal()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var a=-e;y.rtl&&(a=e),y.slides.removeClass(y.params.slideVisibleClass);for(var t=0;t<y.slides.length;t++){var s=y.slides[t],r=(a-s.swiperSlideOffset)/(s.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+y.slidesSizesGrid[t],o=i>=0&&i<y.size||n>0&&n<=y.size||0>=i&&n>=y.size;o&&y.slides.eq(t).addClass(y.params.slideVisibleClass)}s.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var a=y.maxTranslate()-y.minTranslate(),t=y.isBeginning,s=y.isEnd;0===a?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/a,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!t&&y.emit("onReachBeginning",y),y.isEnd&&!s&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,a,t,s=y.rtl?y.translate:-y.translate;for(a=0;a<y.slidesGrid.length;a++)"undefined"!=typeof y.slidesGrid[a+1]?s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]-(y.slidesGrid[a+1]-y.slidesGrid[a])/2?e=a:s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]&&(e=a+1):s>=y.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/y.params.slidesPerGroup),t>=y.snapGrid.length&&(t=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=t,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);if(e.addClass(y.params.slideActiveClass),e.next("."+y.params.slideClass).addClass(y.params.slideNextClass),e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass),y.paginationContainer&&y.paginationContainer.length>0){var t,s=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length;if(y.params.loop?(t=Math.ceil(y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup,t>y.slides.length-1-2*y.loopedSlides&&(t-=y.slides.length-2*y.loopedSlides),t>s-1&&(t-=s),0>t&&"bullets"!==y.params.paginationType&&(t=s+t)):t="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,"bullets"===y.params.paginationType&&y.bullets&&y.bullets.length>0&&(y.bullets.removeClass(y.params.bulletActiveClass),y.paginationContainer.length>1?y.bullets.each(function(){a(this).index()===t&&a(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(t).addClass(y.params.bulletActiveClass)),"fraction"===y.params.paginationType&&(y.paginationContainer.find("."+y.params.paginationCurrentClass).text(t+1),y.paginationContainer.find("."+y.params.paginationTotalClass).text(s)),"progress"===y.params.paginationType){var r=(t+1)/s,i=r,n=1;y.isHorizontal()||(n=r,i=1),y.paginationContainer.find("."+y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+i+") scaleY("+n+")").transition(y.params.speed)}"custom"===y.params.paginationType&&y.params.paginationCustomRender&&y.paginationContainer.html(y.params.paginationCustomRender(y,t+1,s))}y.params.loop||(y.params.prevButton&&(y.isBeginning?(a(y.params.prevButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(a(y.params.prevButton))):(a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(a(y.params.prevButton)))),y.params.nextButton&&(y.isEnd?(a(y.params.nextButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(a(y.params.nextButton))):(a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(a(y.params.nextButton)))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){var e="";if("bullets"===y.params.paginationType){for(var a=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,t=0;a>t;t++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(t,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}"fraction"===y.params.paginationType&&(e=y.params.paginationFractionRender?y.params.paginationFractionRender(y,y.params.paginationCurrentClass,y.params.paginationTotalClass):'<span class="'+y.params.paginationCurrentClass+'"></span> / <span class="'+y.params.paginationTotalClass+'"></span>',y.paginationContainer.html(e)),"progress"===y.params.paginationType&&(e=y.params.paginationProgressRender?y.params.paginationProgressRender(y,y.params.paginationProgressbarClass):'<span class="'+y.params.paginationProgressbarClass+'"></span>',y.paginationContainer.html(e))}},y.update=function(e){function a(){s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var t,s;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(a(),y.params.autoHeight&&y.updateAutoHeight()):(t=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),t||a())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var a=y.params.allowSwipeToPrev,t=y.params.allowSwipeToNext;if(y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode){var s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.allowSwipeToPrev=a,y.params.allowSwipeToNext=t};var b=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?b=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(b=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":b[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":b[1],end:y.support.touch||!y.params.simulateTouch?"touchend":b[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",i="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],n=y.support.touch?i:document,o=y.params.nested?!0:!1;y.browser.ie?(i[r](y.touchEvents.start,y.onTouchStart,!1),n[r](y.touchEvents.move,y.onTouchMove,o),n[r](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(i[r](y.touchEvents.start,y.onTouchStart,!1),i[r](y.touchEvents.move,y.onTouchMove,o),i[r](y.touchEvents.end,y.onTouchEnd,!1)),!s.simulateTouch||y.device.ios||y.device.android||(i[r]("mousedown",y.onTouchStart,!1),document[r]("mousemove",y.onTouchMove,o),document[r]("mouseup",y.onTouchEnd,!1))),window[r]("resize",y.onResize),y.params.nextButton&&(a(y.params.nextButton)[t]("click",y.onClickNext),y.params.a11y&&y.a11y&&a(y.params.nextButton)[t]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&(a(y.params.prevButton)[t]("click",y.onClickPrev),y.params.a11y&&y.a11y&&a(y.params.prevButton)[t]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(a(y.paginationContainer)[t]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&a(y.paginationContainer)[t]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&i[r]("click",y.preventClicks,!0)},y.attachEvents=function(e){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*y.params.slidesPerGroup;y.params.loop&&(t+=y.loopedSlides),y.slideTo(t)},y.updateClickedSlide=function(e){var t=n(e,"."+y.params.slideClass),s=!1;if(t)for(var r=0;r<y.slides.length;r++)y.slides[r]===t&&(s=!0);if(!t||!s)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=t,y.clickedIndex=a(t).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var i,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;i=a(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var T,x,S,C,z,M,P,I,k,E,D="input, select, textarea, button",L=Date.now(),H=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,B;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(y.params.noSwiping&&n(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||n(e,y.params.swipeHandler)){var t=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&t<=y.params.iOSEdgeSwipeThreshold)){if(T=!0,x=!1,S=!0,z=void 0,B=void 0,y.touches.startX=t,y.touches.startY=s,C=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(I=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(G&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(y.params.onlyExternal)return y.allowClick=!1,void(T&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,C=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return x=!0,void(y.allowClick=!1);if(S&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof z){var t=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;z=y.isHorizontal()?t>y.params.touchAngle:90-t>y.params.touchAngle}if(z&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof B&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(B=!0),T){if(z)return void(T=!1);if(B||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),x||(s.loop&&y.fixLoop(),P=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),E=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),x=!0;var r=y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;r*=y.params.touchRatio,y.rtl&&(r=-r),y.swipeDirection=r>0?"prev":"next",M=r+P;var i=!0;if(r>0&&M>y.minTranslate()?(i=!1,y.params.resistance&&(M=y.minTranslate()-1+Math.pow(-y.minTranslate()+P+r,y.params.resistanceRatio))):0>r&&M<y.maxTranslate()&&(i=!1,y.params.resistance&&(M=y.maxTranslate()+1-Math.pow(y.maxTranslate()-P-r,y.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&P>M&&(M=P),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&M>P&&(M=P),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(r)>y.params.threshold||I))return void(M=P);if(!I)return I=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,M=P,void(y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===H.length&&H.push({position:y.touches[y.isHorizontal()?"startX":"startY"],time:C}),H.push({position:y.touches[y.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(M),y.setWrapperTranslate(M)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),S&&y.emit("onTouchEnd",y,e),S=!1,T){y.params.grabCursor&&x&&T&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var t=Date.now(),s=t-C;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>s&&t-L>300&&(k&&clearTimeout(k),k=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!a(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),
y.emit("onClick",y,e))},300)),300>s&&300>t-L&&(k&&clearTimeout(k),y.emit("onDoubleTap",y,e))),L=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!T||!x||!y.swipeDirection||0===y.touches.diff||M===P)return void(T=x=!1);T=x=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-M,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;y.velocity=o/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(y.velocity=0)}else y.velocity=0;H.length=0;var p=1e3*y.params.freeModeMomentumRatio,d=y.velocity*p,u=y.translate+d;y.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),c=y.maxTranslate(),m=!0,E=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),c=y.minTranslate(),m=!0,E=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var h,g=0;for(g=0;g<y.snapGrid.length;g+=1)if(y.snapGrid[g]>-u){h=g;break}u=Math.abs(y.snapGrid[h]-u)<Math.abs(y.snapGrid[h-1]-u)||"next"===y.swipeDirection?y.snapGrid[h]:y.snapGrid[h-1],y.rtl||(u=-u)}if(0!==y.velocity)p=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&m?(y.updateProgress(c),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&E&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(c),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||s>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,w=0,b=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(w=v,b=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(w=v,b=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var z=(r-y.slidesGrid[w])/b;if(s>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(z>=y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w)),"prev"===y.swipeDirection&&(z>1-y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(w+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(w)}}},y._slideTo=function(e,a){return y.slideTo(e,a,!0,!0)},y.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(s||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(a):y.stopAutoplay()),y.updateProgress(r);for(var i=0;i<y.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[i])&&(e=i);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(t),0===a?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(t)):(y.setWrapperTranslate(r),y.setWrapperTransition(a),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(t)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,a,e,t)}return y.slideTo(y.activeIndex-1,a,e,t)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,a,t){return y.slideTo(y.activeIndex,a,e)},y.setWrapperTransition=function(e,a){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,a),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;y.isHorizontal()?s=y.rtl?-e:e:i=e,y.params.roundLengths&&(s=r(s),i=r(i)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):y.wrapper.transform("translate("+s+"px, "+i+"px)")),y.translate=y.isHorizontal()?s:i;var o,l=y.maxTranslate()-y.minTranslate();o=0===l?0:(e-y.minTranslate())/l,o!==y.progress&&y.updateProgress(e),a&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,t),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),y.rtl&&s&&(s=-s),s||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=y.isHorizontal()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),a=0;a<e.length;a++)o(e[a]);o(y.container[0],{childList:!1}),o(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove();var e=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=e.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>e.length&&(y.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<y.loopedSlides&&r.push(i),t<e.length&&t>=e.length-y.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&y.wrapper.append(e[a]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var a=y.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&y.wrapper.prepend(e[t]);a=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(a,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var a,t=y.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(t+y.loopedSlides,0,!1):y.slideTo(t,0,!1)},y.removeAllSlides=function(){for(var e=[],a=0;a<y.slides.length;a++)e.push(a);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var a=y.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;y.params.virtualTranslate||(s-=y.translate);var r=0;y.isHorizontal()||(r=s,s=0);var i=y.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var a=!1;y.slides.transitionEnd(function(){if(!a&&y){a=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)y.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),s=t[0].progress;y.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(y.isHorizontal()?y.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+y.slides.length,y.params.flip.slideShadows){var d=y.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=y.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.eq(y.activeIndex).transitionEnd(function(){if(!t&&y&&a(this).hasClass(y.params.slideActiveClass)){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)y.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;y.params.cube.shadow&&(y.isHorizontal()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var s=0;s<y.slides.length;s++){var r=y.slides.eq(s),i=90*s,n=Math.floor(i/360);y.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*y.size,d=0):(s-1)%4===0?(l=0,d=4*-n*y.size):(s-2)%4===0?(l=y.size+4*n*y.size,d=y.size):(s-3)%4===0&&(l=-y.size,d=3*y.size+4*y.size*n),y.rtl&&(l=-l),y.isHorizontal()||(p=l,l=0);var u="rotateX("+(y.isHorizontal()?0:-i)+"deg) rotateY("+(y.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*s+90*o,y.rtl&&(t=90*-s-90*o)),r.transform(u),y.params.cube.slideShadows){var c=y.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=y.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(y.isHorizontal())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),g=y.params.cube.shadowScale,v=y.params.cube.shadowScale/h,w=y.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/v+"px) rotateX(-90deg)")}var b=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(y.isHorizontal()?0:t)+"deg) rotateY("+(y.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!y.isHorizontal()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,t=y.isHorizontal()?-e+y.width/2:-e+y.height/2,s=y.isHorizontal()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,i=0,n=y.slides.length;n>i;i++){var o=y.slides.eq(i),l=y.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*y.params.coverflow.modifier,u=y.isHorizontal()?s*d:0,c=y.isHorizontal()?0:s*d,m=-r*Math.abs(d),f=y.isHorizontal()?0:y.params.coverflow.stretch*d,h=y.isHorizontal()?y.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+h+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,y.params.coverflow.slideShadows){var v=y.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=y.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(y.browser.ie){var b=y.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==y.slides.length)){var s=y.slides.eq(e),r=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");y.loadImage(e[0],i||r,n,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(y.params.slideDuplicateClass)){var o=y.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(o.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,s[0],e[0])}),y.emit("onLazyImageLoad",y,s[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(a(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1||y.params.lazyLoadingInPrevNextAmount&&y.params.lazyLoadingInPrevNextAmount>1){var t=y.params.lazyLoadingInPrevNextAmount,s=y.params.slidesPerView,r=Math.min(y.activeIndex+s+Math.max(t,s),y.slides.length),i=Math.max(y.activeIndex-Math.max(s,t),0);for(e=y.activeIndex+y.params.slidesPerView;r>e;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=i;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var o=y.wrapper.children("."+y.params.slidePrevClass);o.length>0&&y.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var a=y.scrollbar,t=y.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[y.isHorizontal()?"left":"top"]-a.dragSize/2,r=-y.minTranslate()*a.moveDivider,i=-y.maxTranslate()*a.moveDivider;r>s?s=r:s>i&&(s=i),s=-s/a.moveDivider,y.updateProgress(s),y.setWrapperTranslate(s,!0)},dragStart:function(e){var a=y.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),y.params.scrollbarHide&&a.track.css("opacity",1),y.wrapper.transition(100),a.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var a=y.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),y.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var a=y.scrollbar;a.isTouched&&(a.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).on(y.touchEvents.start,e.dragStart),a(t).on(y.touchEvents.move,e.dragMove),a(t).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).off(y.touchEvents.start,e.dragStart),a(t).off(y.touchEvents.move,e.dragMove),a(t).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=a(y.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=y.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,y.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,a=y.scrollbar,t=(y.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*y.progress,y.rtl&&y.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),y.isHorizontal()?(y.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(y.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),y.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(a),i=-y.controller.spline.interpolate(-e)),i&&"container"!==y.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(y.maxTranslate()-y.minTranslate()),i=(e-y.minTranslate())*r+a.minTranslate()),y.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,y),a.updateActiveIndex()}var r,i,n=y.params.control;if(y.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,y),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===y.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=y.params.control;if(y.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=y.slides.length;s>t;t++){var r=y.slides.eq(t),i=r.attr("data-hash");if(i===e&&!r.hasClass(y.params.slideDuplicateClass)){var n=r.index();y.slideTo(n,a,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,a(document).off("keydown",l)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,a(document).on("keydown",l)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(A){}y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,p),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,p),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,y.progress)}),y.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},y._plugins=[];for(var O in y.plugins){var R=y.plugins[O](y,y.params[O]);R&&y._plugins.push(R)}return y.callPlugins=function(e){for(var a=0;a<y._plugins.length;a++)e in y._plugins[a]&&y._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(y.emitterEventListeners[e])for(a=0;a<y.emitterEventListeners[e].length;a++)y.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,a){return e=u(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(a),y},y.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t]===a&&y.emitterEventListeners[e].splice(t,1);return y}},y.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,t)};return y.on(e,t),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):a(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),a(e.target).is("."+y.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=y.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(y.params.nextButton){var e=a(y.params.nextButton);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.nextSlideMessage)}if(y.params.prevButton){var t=a(y.params.prevButton);y.a11y.makeFocusable(t),y.a11y.addRole(t,"button"),y.a11y.addLabel(t,y.params.prevSlideMessage)}a(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=a(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,a){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),a&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,
ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map


/* Tooltipster v3.3.0 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,debug:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},hideOnClick:false,icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,positionTrackerCallback:function(e){if(this.option("trigger")=="hover"&&this.option("autoClose")){this.hide()}},restoration:"current",speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){var r=null;if(t.$el.data("tooltipster-initialTitle")===undefined){r=t.$el.attr("title");if(r===undefined)r=null;t.$el.data("tooltipster-initialTitle",r)}if(t.options.content!==null){t._content_set(t.options.content)}else{t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}if(r.options.hideOnClick){r.$elProxy.on("click."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition();t.options.positionTrackerCallback.call(t,t.$el)}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0]){t.$elProxy.remove()}t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=null;if(t.options.restoration==="previous"){r=t.$el.data("tooltipster-initialTitle")}else if(t.options.restoration==="current"){r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html()}if(r){t.$el.attr("title",r)}t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple,f=t[0]&&typeof t[0].debug!=="undefined",l=f&&t[0].debug||!f&&i.debug;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else if(a){n=true}else if(l){console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.2.1";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer});


// Rivets.js + Sightglass.js
// version: 0.8.1
// author: Michael Richards
// license: MIT
(function(){function t(t,i,s,h){return new e(t,i,s,h)}function e(t,e,s,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=s,this.objectPath=[],this.parse(),i(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function i(t){return"object"==typeof t&&null!==t}function s(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,i){var s,h,a=[],o={i:i,path:""};for(s=0;s<t.length;s++)h=t.charAt(s),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var i,h,a=this.interfaces();a.length||s("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(i=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(i=this.options.root||t.root)&&s("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,i),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,s=!1;return this.tokens.forEach(function(h,a){i(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update.bind(this)),this.set(!0,h,e,this.update.bind(this)),this.objectPath[a]=e):(this.set(!0,h,e,this.update.bind(this)),this.objectPath[a]=e),e=this.get(h,e)):(s===!1&&(s=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update.bind(this)))},this),s!==!1&&this.objectPath.splice(s),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(i(this.target)&&this.set(!1,this.key,this.target,this.callback),i(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,this.value()!==e&&this.callback())},e.prototype.value=function(){return i(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){i(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,i,s){var h=t?"observe":"unobserve";this.adapter(e)[h](i,e.path,s)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,i){(t=this.objectPath[i])&&this.set(!1,e,t,this.update.bind(this))},this),i(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
(function(){var t,e,i,n,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].slice,o={}.hasOwnProperty,u=function(t,e){function i(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},l=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s;return null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],i.innerHTML=e.template.call(this,i),r=e.initialize.call(this,i,n),s=new t.View(i,r),s.bind(),s}}},window.jQuery||window.$?(n="on"in jQuery.prototype?["on","off"]:["bind","unbind"],e=n[0],i=n[1],t.Util={bindEvent:function(t,i,n){return jQuery(t)[e](i,n)},unbindEvent:function(t,e,n){return jQuery(t)[i](e,n)},getInputValue:function(t){var e;return e=jQuery(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var s,o,u,l,h,a,p,d,c,f,b,v,y;for(this.els=e,this.models=i,null==n&&(n={}),this.update=r(this.update,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.select=r(this.select,this),this.traverse=r(this.traverse,this),this.build=r(this.build,this),this.buildBinding=r(this.buildBinding,this),this.bindingRegExp=r(this.bindingRegExp,this),this.options=r(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(s in f)u=f[s],this[o][s]=u}b=t["public"][o];for(s in b)u=b[s],null==(l=this[o])[s]&&(l[s]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(y=n[o])?y:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.split("|"),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v,y;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r){for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),y=[],c=0,b=v.length;b>c;c++)s=v[c],y.push(i(s));return y}}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,y;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(y=n||e.attributes,d=0,f=y.length;f>d;d++)i=y[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.bind());return r},e.prototype.unbind=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.unbind());return r},e.prototype.sync=function(){var t,e,i,n,r;for(n=this.bindings,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push("function"==typeof t.sync?t.sync():void 0);return r},e.prototype.publish=function(){var t,e,i,n,r;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.publish());return r},e.prototype.update=function(t){var e,i,n,r,s,o,u;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,u=[],r=0,s=o.length;s>r;r++)e=o[r],u.push("function"==typeof e.update?e.update(t):void 0);return u},e}(),t.Binding=function(){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.getValue=r(this.getValue,this),this.update=r(this.update,this),this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.publish=r(this.publish,this),this.sync=r(this.sync,this),this.set=r(this.set,this),this.eventHandler=r(this.eventHandler,this),this.formattedValue=r(this.formattedValue,this),this.parseTarget=r(this.parseTarget,this),this.observe=r(this.observe,this),this.setBinder=r(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),0===e.type?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.formattedValue=function(e){var i,n,r,o,u,l,h,a,p,d,c,f,b,v;for(v=this.formatters,o=d=0,f=v.length;f>d;o=++d){for(u=v[o],r=u.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),l=r.shift(),u=this.view.formatters[l],r=function(){var e,i,s;for(s=[],e=0,i=r.length;i>e;e++)n=r[e],s.push(t.TypeParser.parse(n));return s}(),a=[],i=c=0,b=r.length;b>c;i=++c)n=r[i],a.push(0===n.type?n.value:((p=this.formatterObservers)[o]||(p[o]={}),(h=this.formatterObservers[o][i])?void 0:(h=this.observe(this.view.models,n.value,this.sync),this.formatterObservers[o][i]=h),h.value()));(null!=u?u.read:void 0)instanceof Function?e=u.read.apply(u,[e].concat(s.call(a))):u instanceof Function&&(e=u.apply(null,[e].concat(s.call(a))))}return e},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(t){var e;return t=t instanceof Function&&!this.binder["function"]?this.formattedValue(t.call(this.model)):this.formattedValue(t),null!=(e=this.binder.routine)?e.call(this,this.el,t):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,o,u,l,h;if(this.observer){for(n=this.getValue(this.el),u=this.formatters.slice(0).reverse(),r=0,o=u.length;o>r;r++)e=u[r],t=e.split(/\s+/),i=t.shift(),(null!=(l=this.view.formatters[i])?l.publish:void 0)&&(n=(h=this.view.formatters[i]).publish.apply(h,[n].concat(s.call(t))));return this.observer.setValue(n)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(t,e,i){var n,s,o,u,h,a,p;for(this.view=t,this.el=e,this.type=i,this.unbind=r(this.unbind,this),this.bind=r(this.bind,this),this.locals=r(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},s=t.bindingRegExp(),a=this.el.attributes||[],u=0,h=a.length;h>u;u++)n=a[u],s.test(n.name)||(o=this.camelCase(n.name),l.call(null!=(p=this.component["static"])?p:[],o)>=0?this["static"][o]=n.value:this.observers[o]=n.value)}return u(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,y,g,m,w,k;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)return this.componentView.bind();for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}y=this.view[s];for(e in y)l=y[e],null==(h=o[s])[e]&&(h[e]=l)}for(g=t.options,p=0,c=g.length;c>p;p++)s=g[p],o[s]=null!=(m=this.component[s])?m:this.view[s];this.componentView=new t.View(this.el,u,o),this.componentView.bind(),w=this.observers,k=[];for(i in w)r=w[i],k.push(this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r)));return k},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.sync=r(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return u(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var i,n,r,s,o,u,h;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=jQuery(t),(null!=e?e.toString():void 0)!==(null!=(s=t.val())?s.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(h=[],n=0,r=t.length;r>n;n++)i=t[n],h.push(i.selected=(o=i.value,l.call(e,o)>=0));return h}}else if((null!=e?e.toString():void 0)!==(null!=(u=t.value)?u.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){var t;return null!=(t=this.nested)?t.unbind():void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n,r;if(null!=this.iterated){for(n=this.iterated,r=[],e=0,i=n.length;i>e;e++)t=n[e],r.push(t.unbind());return r}},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,y,g,m,w,k,x,N;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,y=w.length;y>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,g=i.length;g>b;o=++b)if(l=i[o],r={index:o},r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName){for(x=this.view.bindings,N=[],v=0,m=x.length;m>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type?N.push(n.sync()):N.push(void 0);return N}},update:function(t){var e,i,n,r,s,o,u,l;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,l=[],s=0,o=u.length;o>s;s++)r=u[s],l.push(r.update(e));return l}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,h;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,h=r.length;h>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),l.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(r){return function(o){var u,h,a,p;if(o!==s&&(r.unobserveMutations(s,t[r.id],e),s=o,u=r.weakmap[t[r.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),h=0,a=p.length;a>h;h++)i=p[h],l.call(n[e],i)>=0&&i();return r.observeMutations(o,t[r.id],e)}}}(this)}))),l.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||delete s.callbacks[e]),this.unobserveMutations(t[e],t[this.id],e),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);

/*! intercom.js | https://github.com/diy/intercom.js | Apache License (v2) */
var Intercom=function(){var g=function(){};g.createInterface=function(b){return{on:function(a,c){"undefined"===typeof this[b]&&(this[b]={});this[b].hasOwnProperty(a)||(this[b][a]=[]);this[b][a].push(c)},off:function(a,c){"undefined"!==typeof this[b]&&this[b].hasOwnProperty(a)&&i.removeItem(c,this[b][a])},trigger:function(a){if("undefined"!==typeof this[b]&&this[b].hasOwnProperty(a))for(var c=Array.prototype.slice.call(arguments,1),e=0;e<this[b][a].length;e++)this[b][a][e].apply(this[b][a][e],c)}}};
var m=g.createInterface("_handlers");g.prototype._on=m.on;g.prototype._off=m.off;g.prototype._trigger=m.trigger;var n=g.createInterface("handlers");g.prototype.on=function(){n.on.apply(this,arguments);Array.prototype.unshift.call(arguments,"on");this._trigger.apply(this,arguments)};g.prototype.off=n.off;g.prototype.trigger=n.trigger;var f=window.localStorage;"undefined"===typeof f&&(f={getItem:function(){},setItem:function(){},removeItem:function(){}});var i={},h=function(){return(65536*(1+Math.random())|
0).toString(16).substring(1)};i.guid=function(){return h()+h()+"-"+h()+"-"+h()+"-"+h()+"-"+h()+h()+h()};i.throttle=function(b,a){var c=0;return function(){var e=(new Date).getTime();e-c>b&&(c=e,a.apply(this,arguments))}};i.extend=function(b,a){if("undefined"===typeof b||!b)b={};if("object"===typeof a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b};i.removeItem=function(b,a){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1);return a};var d=function(){var b=this,a=(new Date).getTime();
this.origin=i.guid();this.lastMessage=a;this.bindings=[];this.receivedIDs={};this.previousValues={};a=function(){b._onStorageEvent.apply(b,arguments)};window.attachEvent?document.attachEvent("onstorage",a):window.addEventListener("storage",a,!1)};d.prototype._transaction=function(b){var a=this,c=!1,e=!1,p=null,d=function(){if(!c){var g=(new Date).getTime(),s=parseInt(f.getItem(l)||0);s&&1E3>g-s?(e||(a._on("storage",d),e=!0),p=window.setTimeout(d,20)):(c=!0,f.setItem(l,g),b(),e&&a._off("storage",d),
p&&window.clearTimeout(p),f.removeItem(l))}};d()};d.prototype._cleanup_emit=i.throttle(100,function(){this._transaction(function(){for(var b=(new Date).getTime()-t,a=0,c=JSON.parse(f.getItem(j)||"[]"),e=c.length-1;0<=e;e--)c[e].timestamp<b&&(c.splice(e,1),a++);0<a&&f.setItem(j,JSON.stringify(c))})});d.prototype._cleanup_once=i.throttle(100,function(){var b=this;this._transaction(function(){var a,c=JSON.parse(f.getItem(k)||"{}");(new Date).getTime();var e=0;for(a in c)b._once_expired(a,c)&&(delete c[a],
e++);0<e&&f.setItem(k,JSON.stringify(c))})});d.prototype._once_expired=function(b,a){if(!a||!a.hasOwnProperty(b)||"object"!==typeof a[b])return!0;var c=a[b].ttl||u,e=(new Date).getTime();return a[b].timestamp<e-c};d.prototype._localStorageChanged=function(b,a){if(b&&b.key)return b.key===a;var c=f.getItem(a);if(c===this.previousValues[a])return!1;this.previousValues[a]=c;return!0};d.prototype._onStorageEvent=function(b){var b=b||window.event,a=this;this._localStorageChanged(b,j)&&this._transaction(function(){for(var b=
(new Date).getTime(),e=f.getItem(j),e=JSON.parse(e||"[]"),d=0;d<e.length;d++)if(e[d].origin!==a.origin&&!(e[d].timestamp<a.lastMessage)){if(e[d].id){if(a.receivedIDs.hasOwnProperty(e[d].id))continue;a.receivedIDs[e[d].id]=!0}a.trigger(e[d].name,e[d].payload)}a.lastMessage=b});this._trigger("storage",b)};d.prototype._emit=function(b,a,c){if((c="string"===typeof c||"number"===typeof c?String(c):null)&&c.length){if(this.receivedIDs.hasOwnProperty(c))return;this.receivedIDs[c]=!0}var e={id:c,name:b,origin:this.origin,
timestamp:(new Date).getTime(),payload:a},d=this;this._transaction(function(){var c=f.getItem(j)||"[]",c=[c.substring(0,c.length-1),"[]"===c?"":",",JSON.stringify(e),"]"].join("");f.setItem(j,c);d.trigger(b,a);window.setTimeout(function(){d._cleanup_emit()},50)})};d.prototype.bind=function(b,a){for(var c=0;c<d.bindings.length;c++){var e=d.bindings[c].factory(b,a||null,this);e&&this.bindings.push(e)}};d.prototype.emit=function(b,a){this._emit.apply(this,arguments);this._trigger("emit",b,a)};d.prototype.once=
function(b,a,c){if(d.supported){var e=this;this._transaction(function(){var d=JSON.parse(f.getItem(k)||"{}");e._once_expired(b,d)&&(d[b]={},d[b].timestamp=(new Date).getTime(),"number"===typeof c&&(d[b].ttl=1E3*c),f.setItem(k,JSON.stringify(d)),a(),window.setTimeout(function(){e._cleanup_once()},50))})}};i.extend(d.prototype,g.prototype);d.bindings=[];d.supported="undefined"!==typeof f;var j="intercom",k="intercom_once",l="intercom_lock",t=5E4,u=36E5;d.destroy=function(){f.removeItem(l);f.removeItem(j);
f.removeItem(k)};var q=null;d.getInstance=function(){q||(q=new d);return q};var r=function(b,a,c){a=i.extend({id:null,send:!0,receive:!0},a);if(a.receive){var d=[],f=function(f){-1===d.indexOf(f)&&(d.push(f),b.on(f,function(b){var d="function"===typeof a.id?a.id(f,b):null,e="function"===typeof a.receive?a.receive(f,b):!0;(e||"boolean"!==typeof e)&&c._emit(f,b,d)}))},g;for(g in c.handlers)for(var h=0;h<c.handlers[g].length;h++)f(g,c.handlers[g][h]);c._on("on",f)}a.send&&c._on("emit",function(c,d){var e=
"function"===typeof a.send?a.send(c,d):!0;(e||"boolean"!==typeof e)&&b.emit(c,d)})};r.factory=function(b,a,c){return"undefined"===typeof b.socket?!1:new r(b,a,c)};d.bindings.push(r);return d}();


!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){!function(c,d){"use strict";var e=c.document,f=a("./src/utils/get-by-class"),g=a("./src/utils/extend"),h=a("./src/utils/index-of"),i=a("./src/utils/events"),j=a("./src/utils/to-string"),k=a("./src/utils/natural-sort"),l=a("./src/utils/classes"),m=a("./src/utils/get-attribute"),n=a("./src/utils/to-array"),o=function(b,c,p){var q,r=this,s=a("./src/item")(r),t=a("./src/add-async")(r);q={start:function(){r.listClass="list",r.searchClass="search",r.sortClass="sort",r.page=1e4,r.i=1,r.items=[],r.visibleItems=[],r.matchingItems=[],r.searched=!1,r.filtered=!1,r.searchColumns=d,r.handlers={updated:[]},r.plugins={},r.valueNames=[],r.utils={getByClass:f,extend:g,indexOf:h,events:i,toString:j,naturalSort:k,classes:l,getAttribute:m,toArray:n},r.utils.extend(r,c),r.listContainer="string"==typeof b?e.getElementById(b):b,r.listContainer&&(r.list=f(r.listContainer,r.listClass,!0),r.parse=a("./src/parse")(r),r.templater=a("./src/templater")(r),r.search=a("./src/search")(r),r.filter=a("./src/filter")(r),r.sort=a("./src/sort")(r),this.handlers(),this.items(),r.update(),this.plugins())},handlers:function(){for(var a in r.handlers)r[a]&&r.on(a,r[a])},items:function(){r.parse(r.list),p!==d&&r.add(p)},plugins:function(){for(var a=0;a<r.plugins.length;a++){var b=r.plugins[a];r[b.name]=b,b.init(r,o)}}},this.reIndex=function(){r.items=[],r.visibleItems=[],r.matchingItems=[],r.searched=!1,r.filtered=!1,r.parse(r.list)},this.toJSON=function(){for(var a=[],b=0,c=r.items.length;c>b;b++)a.push(r.items[b].values());return a},this.add=function(a,b){if(0!==a.length){if(b)return void t(a,b);var c=[],e=!1;a[0]===d&&(a=[a]);for(var f=0,g=a.length;g>f;f++){var h=null;e=r.items.length>r.page?!0:!1,h=new s(a[f],d,e),r.items.push(h),c.push(h)}return r.update(),c}},this.show=function(a,b){return this.i=a,this.page=b,r.update(),r},this.remove=function(a,b,c){for(var d=0,e=0,f=r.items.length;f>e;e++)r.items[e].values()[a]==b&&(r.templater.remove(r.items[e],c),r.items.splice(e,1),f--,e--,d++);return r.update(),d},this.get=function(a,b){for(var c=[],d=0,e=r.items.length;e>d;d++){var f=r.items[d];f.values()[a]==b&&c.push(f)}return c},this.size=function(){return r.items.length},this.clear=function(){return r.templater.clear(),r.items=[],r},this.on=function(a,b){return r.handlers[a].push(b),r},this.off=function(a,b){var c=r.handlers[a],d=h(c,b);return d>-1&&c.splice(d,1),r},this.trigger=function(a){for(var b=r.handlers[a].length;b--;)r.handlers[a][b](r);return r},this.reset={filter:function(){for(var a=r.items,b=a.length;b--;)a[b].filtered=!1;return r},search:function(){for(var a=r.items,b=a.length;b--;)a[b].found=!1;return r}},this.update=function(){var a=r.items,b=a.length;r.visibleItems=[],r.matchingItems=[],r.templater.clear();for(var c=0;b>c;c++)a[c].matching()&&r.matchingItems.length+1>=r.i&&r.visibleItems.length<r.page?(a[c].show(),r.visibleItems.push(a[c]),r.matchingItems.push(a[c])):a[c].matching()?(r.matchingItems.push(a[c]),a[c].hide()):a[c].hide();return r.trigger("updated"),r},q.start()};"function"==typeof define&&define.amd&&define(function(){return o}),b.exports=o,c.List=o}(window)},{"./src/add-async":2,"./src/filter":3,"./src/item":4,"./src/parse":5,"./src/search":6,"./src/sort":7,"./src/templater":8,"./src/utils/classes":9,"./src/utils/events":10,"./src/utils/extend":11,"./src/utils/get-attribute":12,"./src/utils/get-by-class":13,"./src/utils/index-of":14,"./src/utils/natural-sort":15,"./src/utils/to-array":16,"./src/utils/to-string":17}],2:[function(a,b,c){b.exports=function(a){var b=function(c,d,e){var f=c.splice(0,50);e=e||[],e=e.concat(a.add(f)),c.length>0?setTimeout(function(){b(c,d,e)},1):(a.update(),d(e))};return b}},{}],3:[function(a,b,c){b.exports=function(a){return a.handlers.filterStart=a.handlers.filterStart||[],a.handlers.filterComplete=a.handlers.filterComplete||[],function(b){if(a.trigger("filterStart"),a.i=1,a.reset.filter(),void 0===b)a.filtered=!1;else{a.filtered=!0;for(var c=a.items,d=0,e=c.length;e>d;d++){var f=c[d];b(f)?f.filtered=!0:f.filtered=!1}}return a.update(),a.trigger("filterComplete"),a.visibleItems}}},{}],4:[function(a,b,c){b.exports=function(a){return function(b,c,d){var e=this;this._values={},this.found=!1,this.filtered=!1;var f=function(b,c,d){if(void 0===c)d?e.values(b,d):e.values(b);else{e.elm=c;var f=a.templater.get(e,b);e.values(f)}};this.values=function(b,c){if(void 0===b)return e._values;for(var d in b)e._values[d]=b[d];c!==!0&&a.templater.set(e,e.values())},this.show=function(){a.templater.show(e)},this.hide=function(){a.templater.hide(e)},this.matching=function(){return a.filtered&&a.searched&&e.found&&e.filtered||a.filtered&&!a.searched&&e.filtered||!a.filtered&&a.searched&&e.found||!a.filtered&&!a.searched},this.visible=function(){return e.elm&&e.elm.parentNode==a.list?!0:!1},f(b,c,d)}}},{}],5:[function(a,b,c){b.exports=function(b){var c=a("./item")(b),d=function(a){for(var b=a.childNodes,c=[],d=0,e=b.length;e>d;d++)void 0===b[d].data&&c.push(b[d]);return c},e=function(a,d){for(var e=0,f=a.length;f>e;e++)b.items.push(new c(d,a[e]))},f=function(a,c){var d=a.splice(0,50);e(d,c),a.length>0?setTimeout(function(){f(a,c)},1):(b.update(),b.trigger("parseComplete"))};return b.handlers.parseComplete=b.handlers.parseComplete||[],function(){var a=d(b.list),c=b.valueNames;b.indexAsync?f(a,c):e(a,c)}}},{"./item":4}],6:[function(a,b,c){b.exports=function(a){var b,c,d,e,f={resetList:function(){a.i=1,a.templater.clear(),e=void 0},setOptions:function(a){2==a.length&&a[1]instanceof Array?c=a[1]:2==a.length&&"function"==typeof a[1]?e=a[1]:3==a.length&&(c=a[1],e=a[2])},setColumns:function(){0!==a.items.length&&void 0===c&&(c=void 0===a.searchColumns?f.toArray(a.items[0].values()):a.searchColumns)},setSearchString:function(b){b=a.utils.toString(b).toLowerCase(),b=b.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),d=b},toArray:function(a){var b=[];for(var c in a)b.push(c);return b}},g={list:function(){for(var b=0,c=a.items.length;c>b;b++)g.item(a.items[b])},item:function(a){a.found=!1;for(var b=0,d=c.length;d>b;b++)if(g.values(a.values(),c[b]))return void(a.found=!0)},values:function(c,e){return c.hasOwnProperty(e)&&(b=a.utils.toString(c[e]).toLowerCase(),""!==d&&b.search(d)>-1)?!0:!1},reset:function(){a.reset.search(),a.searched=!1}},h=function(b){return a.trigger("searchStart"),f.resetList(),f.setSearchString(b),f.setOptions(arguments),f.setColumns(),""===d?g.reset():(a.searched=!0,e?e(d,c):g.list()),a.update(),a.trigger("searchComplete"),a.visibleItems};return a.handlers.searchStart=a.handlers.searchStart||[],a.handlers.searchComplete=a.handlers.searchComplete||[],a.utils.events.bind(a.utils.getByClass(a.listContainer,a.searchClass),"keyup",function(b){var c=b.target||b.srcElement,d=""===c.value&&!a.searched;d||h(c.value)}),a.utils.events.bind(a.utils.getByClass(a.listContainer,a.searchClass),"input",function(a){var b=a.target||a.srcElement;""===b.value&&h("")}),h}},{}],7:[function(a,b,c){b.exports=function(a){a.sortFunction=a.sortFunction||function(b,c,d){return d.desc="desc"==d.order?!0:!1,a.utils.naturalSort(b.values()[d.valueName],c.values()[d.valueName],d)};var b={els:void 0,clear:function(){for(var c=0,d=b.els.length;d>c;c++)a.utils.classes(b.els[c]).remove("asc"),a.utils.classes(b.els[c]).remove("desc")},getOrder:function(b){var c=a.utils.getAttribute(b,"data-order");return"asc"==c||"desc"==c?c:a.utils.classes(b).has("desc")?"asc":a.utils.classes(b).has("asc")?"desc":"asc"},getInSensitive:function(b,c){var d=a.utils.getAttribute(b,"data-insensitive");"false"===d?c.insensitive=!1:c.insensitive=!0},setOrder:function(c){for(var d=0,e=b.els.length;e>d;d++){var f=b.els[d];if(a.utils.getAttribute(f,"data-sort")===c.valueName){var g=a.utils.getAttribute(f,"data-order");"asc"==g||"desc"==g?g==c.order&&a.utils.classes(f).add(c.order):a.utils.classes(f).add(c.order)}}}},c=function(){a.trigger("sortStart");var c={},d=arguments[0].currentTarget||arguments[0].srcElement||void 0;d?(c.valueName=a.utils.getAttribute(d,"data-sort"),b.getInSensitive(d,c),c.order=b.getOrder(d)):(c=arguments[1]||c,c.valueName=arguments[0],c.order=c.order||"asc",c.insensitive="undefined"==typeof c.insensitive?!0:c.insensitive),b.clear(),b.setOrder(c),c.sortFunction=c.sortFunction||a.sortFunction,a.items.sort(function(a,b){var d="desc"===c.order?-1:1;return c.sortFunction(a,b,c)*d}),a.update(),a.trigger("sortComplete")};return a.handlers.sortStart=a.handlers.sortStart||[],a.handlers.sortComplete=a.handlers.sortComplete||[],b.els=a.utils.getByClass(a.listContainer,a.sortClass),a.utils.events.bind(b.els,"click",c),a.on("searchStart",b.clear),a.on("filterStart",b.clear),c}},{}],8:[function(a,b,c){var d=function(a){var b,c=this,d=function(){b=c.getItemSource(a.item),b=c.clearSourceItem(b,a.valueNames)};this.clearSourceItem=function(b,c){for(var d=0,e=c.length;e>d;d++){var f;if(c[d].data)for(var g=0,h=c[d].data.length;h>g;g++)b.setAttribute("data-"+c[d].data[g],"");else c[d].attr&&c[d].name?(f=a.utils.getByClass(b,c[d].name,!0),f&&f.setAttribute(c[d].attr,"")):(f=a.utils.getByClass(b,c[d],!0),f&&(f.innerHTML=""));f=void 0}return b},this.getItemSource=function(b){if(void 0===b){for(var c=a.list.childNodes,d=0,e=c.length;e>d;d++)if(void 0===c[d].data)return c[d].cloneNode(!0)}else{if(/^tr[\s>]/.exec(b)){var f=document.createElement("table");return f.innerHTML=b,f.firstChild}if(-1!==b.indexOf("<")){var g=document.createElement("div");return g.innerHTML=b,g.firstChild}var h=document.getElementById(a.item);if(h)return h}throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.")},this.get=function(b,d){c.create(b);for(var e={},f=0,g=d.length;g>f;f++){var h;if(d[f].data)for(var i=0,j=d[f].data.length;j>i;i++)e[d[f].data[i]]=a.utils.getAttribute(b.elm,"data-"+d[f].data[i]);else d[f].attr&&d[f].name?(h=a.utils.getByClass(b.elm,d[f].name,!0),e[d[f].name]=h?a.utils.getAttribute(h,d[f].attr):""):(h=a.utils.getByClass(b.elm,d[f],!0),e[d[f]]=h?h.innerHTML:"");h=void 0}return e},this.set=function(b,d){var e=function(b){for(var c=0,d=a.valueNames.length;d>c;c++)if(a.valueNames[c].data){for(var e=a.valueNames[c].data,f=0,g=e.length;g>f;f++)if(e[f]===b)return{data:b}}else{if(a.valueNames[c].attr&&a.valueNames[c].name&&a.valueNames[c].name==b)return a.valueNames[c];if(a.valueNames[c]===b)return b}},f=function(c,d){var f,g=e(c);g&&(g.data?b.elm.setAttribute("data-"+g.data,d):g.attr&&g.name?(f=a.utils.getByClass(b.elm,g.name,!0),f&&f.setAttribute(g.attr,d)):(f=a.utils.getByClass(b.elm,g,!0),f&&(f.innerHTML=d)),f=void 0)};if(!c.create(b))for(var g in d)d.hasOwnProperty(g)&&f(g,d[g])},this.create=function(a){if(void 0!==a.elm)return!1;var d=b.cloneNode(!0);return d.removeAttribute("id"),a.elm=d,c.set(a,a.values()),!0},this.remove=function(b){b.elm.parentNode===a.list&&a.list.removeChild(b.elm)},this.show=function(b){c.create(b),a.list.appendChild(b.elm)},this.hide=function(b){void 0!==b.elm&&b.elm.parentNode===a.list&&a.list.removeChild(b.elm)},this.clear=function(){if(a.list.hasChildNodes())for(;a.list.childNodes.length>=1;)a.list.removeChild(a.list.firstChild)},d()};b.exports=function(a){return new d(a)}},{}],9:[function(a,b,c){function d(a){if(!a||!a.nodeType)throw new Error("A DOM element reference is required");this.el=a,this.list=a.classList}var e=a("./index-of"),f=/\s+/,g=Object.prototype.toString;b.exports=function(a){return new d(a)},d.prototype.add=function(a){if(this.list)return this.list.add(a),this;var b=this.array(),c=e(b,a);return~c||b.push(a),this.el.className=b.join(" "),this},d.prototype.remove=function(a){if("[object RegExp]"==g.call(a))return this.removeMatching(a);if(this.list)return this.list.remove(a),this;var b=this.array(),c=e(b,a);return~c&&b.splice(c,1),this.el.className=b.join(" "),this},d.prototype.removeMatching=function(a){for(var b=this.array(),c=0;c<b.length;c++)a.test(b[c])&&this.remove(b[c]);return this},d.prototype.toggle=function(a,b){return this.list?("undefined"!=typeof b?b!==this.list.toggle(a,b)&&this.list.toggle(a):this.list.toggle(a),this):("undefined"!=typeof b?b?this.add(a):this.remove(a):this.has(a)?this.remove(a):this.add(a),this)},d.prototype.array=function(){var a=this.el.getAttribute("class")||"",b=a.replace(/^\s+|\s+$/g,""),c=b.split(f);return""===c[0]&&c.shift(),c},d.prototype.has=d.prototype.contains=function(a){return this.list?this.list.contains(a):!!~e(this.array(),a)}},{"./index-of":14}],10:[function(a,b,c){var d=window.addEventListener?"addEventListener":"attachEvent",e=window.removeEventListener?"removeEventListener":"detachEvent",f="addEventListener"!==d?"on":"",g=a("./to-array");c.bind=function(a,b,c,e){a=g(a);for(var h=0;h<a.length;h++)a[h][d](f+b,c,e||!1)},c.unbind=function(a,b,c,d){a=g(a);for(var h=0;h<a.length;h++)a[h][e](f+b,c,d||!1)}},{"./to-array":16}],11:[function(a,b,c){b.exports=function(a){for(var b,c=Array.prototype.slice.call(arguments,1),d=0;b=c[d];d++)if(b)for(var e in b)a[e]=b[e];return a}},{}],12:[function(a,b,c){b.exports=function(a,b){var c=a.getAttribute&&a.getAttribute(b)||null;if(!c)for(var d=a.attributes,e=d.length,f=0;e>f;f++)void 0!==b[f]&&b[f].nodeName===b&&(c=b[f].nodeValue);return c}},{}],13:[function(a,b,c){b.exports=function(){return document.getElementsByClassName?function(a,b,c){return c?a.getElementsByClassName(b)[0]:a.getElementsByClassName(b)}:document.querySelector?function(a,b,c){return b="."+b,c?a.querySelector(b):a.querySelectorAll(b)}:function(a,b,c){var d=[],e="*";null===a&&(a=document);for(var f=a.getElementsByTagName(e),g=f.length,h=new RegExp("(^|\\s)"+b+"(\\s|$)"),i=0,j=0;g>i;i++)if(h.test(f[i].className)){if(c)return f[i];d[j]=f[i],j++}return d}}()},{}],14:[function(a,b,c){var d=[].indexOf;b.exports=function(a,b){if(d)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}},{}],15:[function(a,b,c){b.exports=function(a,b,c){var d,e,f=/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[\da-fA-F]+$|\d+)/g,g=/^\s+|\s+$/g,h=/\s+/g,i=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,j=/^0x[0-9a-f]+$/i,k=/^0/,l=c||{},m=function(a){return l.insensitive&&(""+a).toLowerCase()||""+a},n=m(a)||"",o=m(b)||"",p=n.replace(f,"\x00$1\x00").replace(/\0$/,"").replace(/^\0/,"").split("\x00"),q=o.replace(f,"\x00$1\x00").replace(/\0$/,"").replace(/^\0/,"").split("\x00"),r=parseInt(n.match(j),16)||1!==p.length&&Date.parse(n),s=parseInt(o.match(j),16)||r&&o.match(i)&&Date.parse(o)||null,t=function(a,b){return(!a.match(k)||1==b)&&parseFloat(a)||a.replace(h," ").replace(g,"")||0};if(s){if(s>r)return-1;if(r>s)return 1}for(var u=0,v=p.length,w=q.length,x=Math.max(v,w);x>u;u++){if(d=t(p[u],v),e=t(q[u],w),isNaN(d)!==isNaN(e))return isNaN(d)?1:-1;if(typeof d!=typeof e&&(d+="",e+=""),e>d)return-1;if(d>e)return 1}return 0}},{}],16:[function(a,b,c){function d(a){return"[object Array]"===Object.prototype.toString.call(a)}b.exports=function(a){if("undefined"==typeof a)return[];if(null===a)return[null];if(a===window)return[window];if("string"==typeof a)return[a];if(d(a))return a;if("number"!=typeof a.length)return[a];if("function"==typeof a&&a instanceof Function)return[a];for(var b=[],c=0;c<a.length;c++)(Object.prototype.hasOwnProperty.call(a,c)||c in a)&&b.push(a[c]);return b.length?b:[]}},{}],17:[function(a,b,c){b.exports=function(a){return a=void 0===a?"":a,a=null===a?"":a,a=a.toString()}},{}]},{},[1]);

/**
 * autoNumeric.js
 * @author: Bob Knothe
 * @author: Sokolov Yura
 * @version: 1.9.43 - 2015-12-19 GMT 4:00 PM / 16:00
 *
 * Created by Robert J. Knothe on 2010-10-25. Please report any bugs to https://github.com/BobKnothe/autoNumeric
 * Contributor by Sokolov Yura on 2010-11-07
 *
 * Copyright (c) 2011 Robert J. Knothe http://www.decorplanit.com/plugin/
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";function t(e){var t={};if(void 0===e.selectionStart){e.focus();var a=document.selection.createRange();t.length=a.text.length,a.moveStart("character",-e.value.length),t.end=a.text.length,t.start=t.end-t.length}else t.start=e.selectionStart,t.end=e.selectionEnd,t.length=t.end-t.start;return t}function a(e,t,a){if(void 0===e.selectionStart){e.focus();var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",a),i.moveStart("character",t),i.select()}else e.selectionStart=t,e.selectionEnd=a}function i(e,t){if(t){var a=new Error(e);throw a}}function n(t,a){e.each(a,function(e,i){"function"==typeof i?a[e]=i(t,a,e):"function"==typeof t.autoNumeric[i]&&(a[e]=t.autoNumeric[i](t,a,e))})}function r(e,t){n(e,t);var a=t.vMax.toString().split("."),i=t.vMin||0===t.vMin?t.vMin.toString().split("."):[];if(t.aNeg=t.vMin<0?"-":"",a[0]=a[0].replace("-",""),i[0]=i[0].replace("-",""),t.mIntPos=Math.max(a[0].length,1),t.mIntNeg=Math.max(i[0].length,1),null===t.mDec){var r=0,s=0;a[1]&&(r=a[1].length),i[1]&&(s=i[1].length),t.mDec=Math.max(r,s),t.oDec=t.mDec}else t.mDec=Number(t.mDec);null===t.altDec&&t.mDec>0&&("."===t.aDec&&","!==t.aSep?t.altDec=",":","===t.aDec&&"."!==t.aSep&&(t.altDec="."));var o=t.aNeg?"([-\\"+t.aNeg+"]?)":"(-?)";t.aNegRegAutoStrip=o,t.skipFirstAutoStrip=new RegExp(o+"[^-"+(t.aNeg?"\\"+t.aNeg:"")+"\\"+t.aDec+"\\d].*?(\\d|\\"+t.aDec+"\\d)"),t.skipLastAutoStrip=new RegExp("(\\d\\"+t.aDec+"?)[^\\"+t.aDec+"\\d]\\D*$");var u="-"+t.aNum+"\\"+t.aDec;return t.allowedAutoStrip=new RegExp("[^"+u+"]","gi"),t.numRegAutoStrip=new RegExp(o+"(?:\\"+t.aDec+"?(\\d+\\"+t.aDec+"\\d+)|(\\d*(?:\\"+t.aDec+"\\d*)?))"),t}function s(e,t){if(""!==t.aSign&&(e=e.replace(t.aSign,"")),t.aSuffix)for(;e.indexOf(t.aSuffix)>-1;)e=e.replace(t.aSuffix,"");e=e.replace(t.skipFirstAutoStrip,"$1$2"),("s"===t.pNeg||"s"===t.pSign&&"p"!==t.pNeg)&&e.indexOf("-")>-1&&""!==e&&(t.trailingNegative=!0),e=e.replace(t.skipLastAutoStrip,"$1"),e=e.replace(t.allowedAutoStrip,""),t.altDec&&(e=e.replace(t.altDec,t.aDec));var a=e.match(t.numRegAutoStrip);if(e=a?[a[1],a[2],a[3]].join(""):"","allow"===t.lZero||"keep"===t.lZero){var i=[],n="";i=e.split(t.aDec),-1!==i[0].indexOf(t.aNeg)&&(n=t.aNeg,i[0]=i[0].replace(t.aNeg,"")),""===n&&i[0].length>t.mIntPos&&"0"===i[0].charAt(0)&&(i[0]=i[0].slice(1)),""!==n&&i[0].length>t.mIntNeg&&"0"===i[0].charAt(0)&&(i[0]=i[0].slice(1)),e=n+i.join(t.aDec)}if(t.onOff&&"deny"===t.lZero||"allow"===t.lZero&&t.onOff===!1){var r="^"+t.aNegRegAutoStrip+"0*(\\d|$)";r=new RegExp(r),e=e.replace(r,"$1$2")}return e}function o(e,t){if("p"===t.pSign&&"l"===t.pNeg||"s"===t.pSign&&"p"===t.pNeg){var a=t.nBracket.split(",");t.onOff?t.onOff&&e.charAt(0)===a[0]&&(e=e.replace(a[0],t.aNeg),e=e.replace(a[1],"")):(e=e.replace(t.aNeg,""),e=a[0]+e+a[1])}return e}function u(e){return e=e.replace(",","."),-1!==e.lastIndexOf("-")&&e.lastIndexOf("-")===e.length-1&&(e=e.replace("-",""),e="-"+e),e}function l(e,t,a){return t&&"."!==t&&(e=e.replace(t,".")),a&&"-"!==a&&(e=e.replace(a,"-")),e.match(/\d/)||(e+="0"),e}function c(e,t,a){return a&&"-"!==a&&(e=e.replace("-",a)),t&&"."!==t&&(e=e.replace(".",t)),e}function g(e,t,a){return""===e||e===t.aNeg?"always"===t.wEmpty||a?"l"===t.pNeg?e+t.aSign+t.aSuffix:t.aSign+e+t.aSuffix:e:null}function h(e,t){e=s(e,t),t.trailingNegative&&-1===e.indexOf("-")&&(e="-"+e);var a=g(e,t,!0),i=e.replace(",",".")<0;if(e.indexOf("-")>-1&&0===Number(e)&&(i=!0),i&&(e=e.replace("-","")),null!==a)return a;var n="";t.dGroup=t.dGroup.toString(),n="2"===t.dGroup?/(\d)((\d)(\d{2}?)+)$/:"2s"===t.dGroup?/(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/:"4"===t.dGroup?/(\d)((\d{4}?)+)$/:/(\d)((\d{3}?)+)$/;var r=e.split(t.aDec);t.altDec&&1===r.length&&(r=e.split(t.altDec));var u=r[0];if(""!==t.aSep)for(;n.test(u);)u=u.replace(n,"$1"+t.aSep+"$2");return 0!==t.mDec&&r.length>1?(r[1].length>t.mDec&&(r[1]=r[1].substring(0,t.mDec)),e=u+t.aDec+r[1]):e=u,"p"===t.pSign&&(i&&"l"===t.pNeg&&(e=t.aNeg+t.aSign+e),i&&"r"===t.pNeg&&(e=t.aSign+t.aNeg+e),i&&"s"===t.pNeg&&(e=t.aSign+e+t.aNeg),i||t.trailingNegative||(e=t.aSign+e)),"s"===t.pSign&&(i&&"r"===t.pNeg&&(e=e+t.aSign+t.aNeg),i&&"l"===t.pNeg&&(e=e+t.aNeg+t.aSign),i&&"p"===t.pNeg&&(e=t.aNeg+e+t.aSign),i||(e+=t.aSign)),t.rawValue<0&&null!==t.nBracket&&(e=o(e,t)),t.trailingNegative=!1,e+t.aSuffix}function p(e,t){if(e=""===e?"0":e.toString(),"N05"===t.mRound||"U05"===t.mRound||"D05"===t.mRound)return e="N05"===t.mRound?(Math.round(20*e)/20).toString():"U05"===t.mRound?(Math.ceil(20*e)/20).toString():(Math.floor(20*e)/20).toString(),-1===e.indexOf(".")?e+".00":e.length-e.indexOf(".")<3?e+"0":e;var a="",i=0,n="",r="boolean"==typeof t.aPad||null===t.aPad?t.aPad?t.mDec:0:Number(t.aPad),s=function(e){var t=0===r?/(\.(?:\d*[1-9])?)0*$/:1===r?/(\.\d(?:\d*[1-9])?)0*$/:new RegExp("(\\.\\d{"+r+"}(?:\\d*[1-9])?)0*");return e=e.replace(t,"$1"),0===r&&(e=e.replace(/\.$/,"")),e};"-"===e.charAt(0)&&(n="-",e=e.replace("-","")),e.match(/^\d/)||(e="0"+e),"-"===n&&0===Number(e)&&(n=""),(Number(e)>0&&"keep"!==t.lZero||e.length>0&&"allow"===t.lZero)&&(e=e.replace(/^0*(\d)/,"$1"));var o=e.lastIndexOf("."),u=-1===o?e.length-1:o,l=e.length-1-u;if(l<=t.mDec){if(a=e,r>l){-1===o&&(a+=t.aDec);for(var c="000000";r>l;)c=c.substring(0,r-l),a+=c,l+=c.length}else l>r?a=s(a):0===l&&0===r&&(a=a.replace(/\.$/,""));return 0===Number(a)?a:n+a}var g=o+t.mDec,h=Number(e.charAt(g+1)),p=e.substring(0,g+1).split(""),f="."===e.charAt(g)?e.charAt(g-1)%2:e.charAt(g)%2;if(h>4&&"S"===t.mRound||h>4&&"A"===t.mRound&&""===n||h>5&&"A"===t.mRound&&"-"===n||h>5&&"s"===t.mRound||h>5&&"a"===t.mRound&&""===n||h>4&&"a"===t.mRound&&"-"===n||h>5&&"B"===t.mRound||5===h&&"B"===t.mRound&&1===f||h>0&&"C"===t.mRound&&""===n||h>0&&"F"===t.mRound&&"-"===n||h>0&&"U"===t.mRound)for(i=p.length-1;i>=0;i-=1)if("."!==p[i]){if(p[i]=+p[i]+1,p[i]<10)break;i>0&&(p[i]="0")}return p=p.slice(0,g+1),a=s(p.join("")),0===Number(a)?a:n+a}function f(e,t,a){var i=t.aDec,n=t.mDec;if(e="paste"===a?p(e,t):e,i&&n){var r=e.split(i);r[1]&&r[1].length>n&&(n>0?(r[1]=r[1].substring(0,n),e=r.join(i)):e=r[0])}return e}function d(e){var t,a,i,n,r={};if(0===e&&0>1/e&&(e="-0"),"-"===e.charAt(0)?(e=e.slice(1),r.s=-1):r.s=1,t=e.indexOf("."),t>-1&&(e=e.replace(".","")),0>t&&(t=e.length),a=-1===e.search(/[1-9]/i)?e.length:e.search(/[1-9]/i),i=e.length,a===i)r.e=0,r.c=[0];else{for(n=i-1;"0"===e.charAt(n);n-=1)i-=1;for(i-=1,r.e=t-a-1,r.c=[],t=0;i>=a;a+=1)r.c[t]=+e.charAt(a),t+=1}return r}function m(e,t){var a,i=t.c,n=e.c,r=t.s,s=e.s,o=t.e,u=e.e;if(!i[0]||!n[0])return i[0]?r:n[0]?-s:0;if(r!==s)return r;if(a=0>r,o!==u)return o>u^a?1:-1;for(r=-1,o=i.length,u=n.length,s=u>o?o:u,r+=1;s>r;r+=1)if(i[r]!==n[r])return i[r]>n[r]^a?1:-1;return o===u?0:o>u^a?1:-1}function v(e,t){e=e.replace(",",".");var a=d(t.vMin),i=d(t.vMax),n=d(e);return m(a,n)>-1&&m(i,n)<1}function N(t,a){this.settings=a,this.that=t,this.$that=e(t),this.formatted=!1,this.settingsClone=r(this.$that,this.settings),this.value=t.value}function S(t){return"string"==typeof t&&(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),t="#"+t.replace(/(:|\.)/g,"\\$1")),e(t)}function y(e,t,a){var i=e.data("autoNumeric");i||(i={},e.data("autoNumeric",i));var n=i.holder;return(void 0===n&&t||a)&&(n=new N(e.get(0),t),i.holder=n),n}function x(e){return e.oDec=e.mDec,e.oPad=e.aPad,e.oBracket=e.nBracket,e.oSep=e.aSep,e.oSign=e.aSign,e}function w(e){var t=e+"=",a=document.cookie.split(";"),i=0,n="";for(i;i<a.length;i+=1){for(n=a[i];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}function D(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}function b(e,t,a){if(t.aStor){var i=""!==e[0].name&&void 0!==e[0].name?"AUTO_"+decodeURIComponent(e[0].name):"AUTO_"+e[0].id;if(D()===!1){if("get"===a)return w(i);if("set"===a&&(document.cookie=i+"="+t.rawValue+"; expires= ; path=/"),"wipe"===a){var n=new Date;n.setTime(n.getTime()+-864e5);var r="; expires="+n.toGMTString();document.cookie=i+'="" ;'+r+"; path=/"}}else{if("get"===a)return sessionStorage.getItem(i);"set"===a&&sessionStorage.setItem(i,t.rawValue),"wipe"===a&&sessionStorage.removeItem(i)}}}N.prototype={init:function(e){this.value=this.that.value,this.settingsClone=r(this.$that,this.settings),this.ctrlKey=e.ctrlKey,this.cmdKey=e.metaKey,this.shiftKey=e.shiftKey,this.selection=t(this.that),("keydown"===e.type||"keyup"===e.type)&&(this.kdCode=e.keyCode),this.which=e.which,this.processed=!1,this.formatted=!1},setSelection:function(e,t,i){e=Math.max(e,0),t=Math.min(t,this.that.value.length),this.selection={start:e,end:t,length:t-e},(void 0===i||i)&&a(this.that,e,t)},setPosition:function(e,t){this.setSelection(e,e,t)},getBeforeAfter:function(){var e=this.value,t=e.substring(0,this.selection.start),a=e.substring(this.selection.end,e.length);return[t,a]},getBeforeAfterStriped:function(){var e=this.settingsClone,t=this.getBeforeAfter();return t[0]=s(t[0],this.settingsClone),t[1]=s(t[1],this.settingsClone),e.trailingNegative&&-1===t[0].indexOf("-")&&(t[0]="-"+t[0],t[1]="-"===t[1]?"":t[1]),e.trailingNegative=!1,t},normalizeParts:function(e,t){var a=this.settingsClone;e=s(e,a),t=s(t,a),a.trailingNegative&&-1===e.indexOf("-")&&(e="-"+e,a.trailingNegative=!1),""!==e&&e!==a.aNeg||"deny"!==a.lZero||t>""&&(t=t.replace(/^0*(\d)/,"$1"));var i=e+t;if(a.aDec){var n=i.match(new RegExp("^"+a.aNegRegAutoStrip+"\\"+a.aDec));n&&(e=e.replace(n[1],n[1]+"0"),i=e+t)}return[e,t]},setValueParts:function(e,t,a){var i=this.settingsClone,n=this.normalizeParts(e,t),r=n.join(""),s=n[0].length;if(v(r,i)){r=f(r,i,a);var o=-1!==r.indexOf(",")?r.replace(",","."):r,u=o;return""===o||o===i.aNeg?i.rawValue="":i.rawValue=u,s>r.length&&(s=r.length),this.value=r,this.setPosition(s,!1),!0}return!1},signPosition:function(){var e=this.settingsClone,t=e.aSign,a=this.that;if(t){var i=t.length;if("p"===e.pSign){var n=e.aNeg&&a.value&&a.value.charAt(0)===e.aNeg;return n?[1,i+1]:[0,i]}var r=a.value.length;return[r-i,r]}return[1e3,-1]},expandSelectionOnSign:function(e){var t=this.signPosition(),a=this.selection;a.start<t[1]&&a.end>t[0]&&((a.start<t[0]||a.end>t[1])&&this.value.substring(Math.max(a.start,t[0]),Math.min(a.end,t[1])).match(/^\s*$/)?a.start<t[0]?this.setSelection(a.start,t[0],e):this.setSelection(t[1],a.end,e):this.setSelection(Math.min(a.start,t[0]),Math.max(a.end,t[1]),e))},checkPaste:function(){if(void 0!==this.valuePartsBeforePaste){var e=this.getBeforeAfter(),t=this.valuePartsBeforePaste;delete this.valuePartsBeforePaste,e[0]=e[0].substr(0,t[0].length)+s(e[0].substr(t[0].length),this.settingsClone),this.setValueParts(e[0],e[1],"paste")||(this.value=t.join(""),this.setPosition(t[0].length,!1))}},skipAllways:function(e){var t=this.kdCode,i=this.which,n=this.ctrlKey,r=this.cmdKey,s=this.shiftKey;if((n||r)&&"keyup"===e.type&&void 0!==this.valuePartsBeforePaste||s&&45===t)return this.checkPaste(),!1;if(t>=112&&123>=t||t>=91&&93>=t||t>=9&&31>=t||8>t&&(0===i||i===t)||144===t||145===t||45===t||224===t)return!0;if((n||r)&&65===t){if(this.settings.sNumber){e.preventDefault();var o=this.that.value.length,u=this.settings.aSign.length,l=-1===this.that.value.indexOf("-")?0:1,c=this.settings.aSuffix.length,g=this.settings.pSign,h=this.settings.pNeg,p="s"===g?0:"l"===h&&1===l&&u>0?u+1:u,f="p"===g?o-c:"l"===h?o-(c+u):"r"===h&&u>0?o-(u+l+c):o-(u+c);a(this.that,p,f)}return!0}if((n||r)&&(67===t||86===t||88===t))return"keydown"===e.type&&this.expandSelectionOnSign(),(86===t||45===t)&&("keydown"===e.type||"keypress"===e.type?void 0===this.valuePartsBeforePaste&&(this.valuePartsBeforePaste=this.getBeforeAfter()):this.checkPaste()),"keydown"===e.type||"keypress"===e.type||67===t;if(n||r)return!0;if(37===t||39===t){var d=this.settingsClone.aSep,m=this.settingsClone.aDec,v=this.selection.start,N=this.that.value;return"keydown"!==e.type||this.shiftKey||(37!==t||N.charAt(v-2)!==d&&N.charAt(v-2)!==m?39!==t||N.charAt(v+1)!==d&&N.charAt(v+1)!==m||this.setPosition(v+1):this.setPosition(v-1)),!0}return t>=34&&40>=t?!0:!1},processTrailing:function(e){var t=this.settingsClone;return"p"===t.pSign&&"s"===t.pNeg&&(8===this.kdCode?(t.caretFix=this.selection.start>=this.value.indexOf(t.aSuffix)&&""!==t.aSuffix?!0:!1,"-"===this.value.charAt(this.selection.start-1)?e[0]=e[0].substring(1):this.selection.start<=this.value.length-t.aSuffix.length&&(e[0]=e[0].substring(0,e[0].length-1))):(t.caretFix=this.selection.start>=this.value.indexOf(t.aSuffix)&&""!==t.aSuffix?!0:!1,this.selection.start>=this.value.indexOf(t.aSign)+t.aSign.length&&(e[1]=e[1].substring(1,e[1].length)),e[0].indexOf("-")>-1&&"-"===this.value.charAt(this.selection.start)&&(e[0]=e[0].substring(1)))),"s"===t.pSign&&"l"===t.pNeg&&(t.caretFix=this.selection.start>=this.value.indexOf(t.aNeg)+t.aNeg.length?!0:!1,8===this.kdCode?this.selection.start===this.value.indexOf(t.aNeg)+t.aNeg.length&&-1!==this.value.indexOf(t.aNeg)?e[0]=e[0].substring(1):"-"!==e[0]&&(this.selection.start<=this.value.indexOf(t.aNeg)||-1===this.value.indexOf(t.aNeg))&&(e[0]=e[0].substring(0,e[0].length-1)):("-"===e[0][0]&&(e[1]=e[1].substring(1)),this.selection.start===this.value.indexOf(t.aNeg)&&-1!==this.value.indexOf(t.aNeg)&&(e[0]=e[0].substring(1)))),"s"===t.pSign&&"r"===t.pNeg&&(t.caretFix=this.selection.start>=this.value.indexOf(t.aNeg)+t.aNeg.length?!0:!1,8===this.kdCode?this.selection.start===this.value.indexOf(t.aNeg)+t.aNeg.length?e[0]=e[0].substring(1):"-"!==e[0]&&this.selection.start<=this.value.indexOf(t.aNeg)-t.aSign.length?e[0]=e[0].substring(0,e[0].length-1):""!==e[0]&&-1===this.value.indexOf(t.aNeg)&&(e[0]=e[0].substring(0,e[0].length-1)):(t.caretFix=this.selection.start>=this.value.indexOf(t.aSign)&&""!==t.aSign?!0:!1,this.selection.start===this.value.indexOf(t.aNeg)&&(e[0]=e[0].substring(1)),e[1]=e[1].substring(1))),e},processAllways:function(){var e=this.settingsClone,t=[];return 8===this.kdCode||46===this.kdCode?(this.selection.length?(this.expandSelectionOnSign(!1),t=this.getBeforeAfterStriped(),this.setValueParts(t[0],t[1])):(t=this.getBeforeAfterStriped(),""===t[0]&&""===t[1]&&(e.throwInput=!1),"p"===e.pSign&&"s"===e.pNeg||"s"===e.pSign&&"p"!==e.pNeg?t=this.processTrailing(t):8===this.kdCode?t[0]=t[0].substring(0,t[0].length-1):t[1]=t[1].substring(1,t[1].length),this.setValueParts(t[0],t[1])),!0):!1},processKeypress:function(){var e=this.settingsClone,t=String.fromCharCode(this.which),a=this.getBeforeAfterStriped(),i=a[0],n=a[1];return e.throwInput=!0,t===e.aDec||e.altDec&&t===e.altDec||("."===t||","===t)&&110===this.kdCode?e.mDec&&e.aDec?e.aNeg&&n.indexOf(e.aNeg)>-1?!0:i.indexOf(e.aDec)>-1?!0:n.indexOf(e.aDec)>0?!0:(0===n.indexOf(e.aDec)&&(n=n.substr(1)),this.setValueParts(i+e.aDec,n,null),!0):!0:"-"===t||"+"===t?e?("p"===e.pSign&&"s"===e.pNeg||"s"===e.pSign&&"p"!==e.pNeg?(""===i&&n.indexOf(e.aNeg)>-1&&(i=e.aNeg,n=n.substring(1,n.length)),i="-"===i.charAt(0)||-1!==i.indexOf(e.aNeg)?i.substring(1,i.length):"-"===t?e.aNeg+i:i):(""===i&&n.indexOf(e.aNeg)>-1&&(i=e.aNeg,n=n.substring(1,n.length)),i=i.charAt(0)===e.aNeg?i.substring(1,i.length):"-"===t?e.aNeg+i:i),this.setValueParts(i,n,null),!0):!0:t>="0"&&"9">=t?(e.aNeg&&""===i&&n.indexOf(e.aNeg)>-1&&(i=e.aNeg,n=n.substring(1,n.length)),e.vMax<=0&&e.vMin<e.vMax&&-1===this.value.indexOf(e.aNeg)&&"0"!==t&&(i=e.aNeg+i),this.setValueParts(i+t,n,null),!0):(e.throwInput=!1,!0)},formatQuick:function(t){var a=this.settingsClone,i=this.getBeforeAfterStriped(),n=this.value,r=t.keyCode;if((""===a.aSep||""!==a.aSep&&-1===n.indexOf(a.aSep))&&(""===a.aSign||""!==a.aSign&&-1===n.indexOf(a.aSign))){var s=[],o="";s=n.split(a.aDec),s[0].indexOf("-")>-1&&(o="-",s[0]=s[0].replace("-",""),i[0]=i[0].replace("-","")),""===o&&s[0].length>a.mIntPos&&"0"===i[0].charAt(0)&&(i[0]=i[0].slice(1)),"-"===o&&s[0].length>a.mIntNeg&&"0"===i[0].charAt(0)&&(i[0]=i[0].slice(1)),i[0]=o+i[0]}var u=h(this.value,this.settingsClone),l=u.length;if(u){var c=i[0].split(""),g=0;if(("s"===a.pNeg||"s"===a.pSign&&"p"!==a.pNeg)&&"-"===c[0]&&""!==a.aNeg&&(c.shift(),"s"!==a.pSign||"l"!==a.pNeg||8!==r&&8!==this.kdCode&&46!==r&&46!==this.kdCode||!a.caretFix||(c.push("-"),a.caretFix="keydown"===t.type?!0:!1),"p"!==a.pSign||"s"!==a.pNeg||8!==r&&8!==this.kdCode&&46!==r&&46!==this.kdCode||!a.caretFix||(c.push("-"),a.caretFix="keydown"===t.type?!0:!1),"s"===a.pSign&&"r"===a.pNeg&&(8===r||8===this.kdCode||46===r||46===this.kdCode)&&a.caretFix)){var p=a.aSign.split(""),f=["\\","^","$",".","|","?","*","+","(",")","["],d=[],m="";e.each(p,function(t,a){a=p[t],-1!==e.inArray(a,f)?d.push("\\"+a):d.push(a)}),(8===r||8===this.kdCode)&&d.push("-"),m=d.join(""),c.push(m),a.caretFix="keydown"===t.type?!0:!1}for(g;g<c.length;g+=1)c[g].match("\\d")||(c[g]="\\"+c[g]);var v=new RegExp("^.*?"+c.join(".*?")),N=u.match(v);N?(l=N[0].length,(0===l&&u.charAt(0)!==a.aNeg||1===l&&u.charAt(0)===a.aNeg)&&a.aSign&&"p"===a.pSign&&(l=this.settingsClone.aSign.length+("-"===u.charAt(0)?1:0))):(a.aSign&&"s"===a.pSign&&(l-=a.aSign.length),a.aSuffix&&(l-=a.aSuffix.length))}this.that.value=u,this.setPosition(l),this.formatted=!0}};var k={init:function(t){return this.each(function(){var n=e(this),r=n.data("autoNumeric"),u=n.data(),f=n.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");if(e.each(u,function(e,t){"number"==typeof t&&(u[e]=t.toString())}),"object"==typeof r)return this;r=e.extend({},e.fn.autoNumeric.defaults,u,t,{aNum:"0123456789",onOff:!1,runOnce:!1,rawValue:"",trailingNegative:!1,caretFix:!1,throwInput:!0,tagList:["b","caption","cite","code","dd","del","div","dfn","dt","em","h1","h2","h3","h4","h5","h6","ins","kdb","label","li","option","output","p","q","s","sample","span","strong","td","th","u","var"]}),r.aDec===r.aSep&&i('autoNumeric will not function properly when the decimal character aDec: "'+r.aDec+'" and thousand separator aSep: "'+r.aSep+'" are the same character',r.debug),e.each(r,function(e,t){("true"===t||"false"===t)&&(r[e]="true"===t?!0:!1)}),n.data("autoNumeric",r),r=x(r);var d=y(n,r);if(f||"input"!==n.prop("tagName").toLowerCase()||i('The input type "'+n.prop("type")+'" is not supported by autoNumeric()',r.debug),-1===e.inArray(n.prop("tagName").toLowerCase(),r.tagList)&&"input"!==n.prop("tagName").toLowerCase()&&i('The "<'+n.prop("tagName").toLowerCase()+'>" is not supported by autoNumeric()',r.debug),r.aDec===r.aSep&&i('autoNumeric will not function properly when the decimal character aDec: "'+r.aDec+'" and thousand separator aSep: "'+r.aSep+'" are the same character',r.debug),r.eDec<r.mDec&&null!==r.eDec&&i('autoNumeric will not function properly when the extended decimal places "eDec: '+r.eDec+'" is greater than mDec: "'+r.mDec+'" value',r.debug),r.runOnce===!1&&r.aForm){var m=!0;if(f){if(null!==r.anDefault&&r.anDefault.toString()!==n.val()||null===r.anDefault&&""!==n.val()&&n.val()!==n.attr("value")||""!==n.val()&&"hidden"===n.attr("type")&&!e.isNumeric(n.val().replace(",","."))){if(null!==r.eDec&&r.aStor&&(r.rawValue=b(n,r,"get")),!r.aStor){var N="";null!==r.nBracket&&""!==r.aNeg?(r.onOff=!0,N=o(n.val(),r)):N=n.val(),r.rawValue=("s"===r.pNeg||"s"===r.pSign&&"p"!==r.pNeg)&&""!==r.aNeg&&n.val().indexOf("-")>-1?"-"+s(N,r):s(N,r)}m=!1}""===n.val()&&"focus"===r.wEmpty&&(m=!1),""===n.val()&&"always"===r.wEmpty&&(n.val(r.aSign),m=!1),m&&""!==n.val()&&n.val()===n.attr("value")&&n.autoNumeric("set",n.val())}-1!==e.inArray(n.prop("tagName").toLowerCase(),r.tagList)&&""!==n.text()&&(null!==r.anDefault?r.anDefault===n.text()&&n.autoNumeric("set",n.text()):n.autoNumeric("set",n.text()))}r.runOnce=!0,f&&(n.on("focusin.autoNumeric",function(){d=y(n);var e=d.settingsClone;e.onOff=!0,null!==e.nBracket&&""!==e.aNeg&&n.val(o(n.val(),e)),e.nSep===!0&&(e.aSep="",e.aSign=""),null!==e.eDec?(e.mDec=e.eDec,n.autoNumeric("set",e.rawValue)):n.autoNumeric("set",e.rawValue),d.inVal=n.val(),d.lastVal=n.val();var t=g(d.inVal,e,!0);null!==t&&""!==t&&"focus"===e.wEmpty&&n.val(t)}),n.on("keydown.autoNumeric",function(e){return d=y(n),d.that.readOnly?(d.processed=!0,!0):(d.init(e),d.skipAllways(e)?(d.processed=!0,!0):d.processAllways()?(d.processed=!0,d.formatQuick(e),n.val()!==d.lastVal&&d.settingsClone.throwInput&&n.trigger("input"),d.lastVal=n.val(),d.settingsClone.throwInput=!0,e.preventDefault(),!1):(d.formatted=!1,!0))}),n.on("keypress.autoNumeric",function(e){if(!e.shiftKey||45!==e.keyCode){d=y(n);var t=d.processed;return d.init(e),d.skipAllways(e)?!0:t?(e.preventDefault(),!1):d.processAllways()||d.processKeypress()?(d.formatQuick(e),n.val()!==d.lastVal&&d.settingsClone.throwInput&&n.trigger("input"),d.lastVal=n.val(),d.settingsClone.throwInput=!0,void e.preventDefault()):void(d.formatted=!1)}}),n.on("keyup.autoNumeric",function(e){d=y(n),d.init(e);var t=d.skipAllways(e);return d.kdCode=0,delete d.valuePartsBeforePaste,n[0].value===d.settingsClone.aSign&&("s"===d.settingsClone.pSign?a(this,0,0):a(this,d.settingsClone.aSign.length,d.settingsClone.aSign.length)),n[0].value===d.settingsClone.aSuffix&&a(this,0,0),""===d.settingsClone.rawValue&&""!==d.settingsClone.aSign&&""!==d.settingsClone.aSuffix&&a(this,0,0),null!==d.settingsClone.eDec&&d.settingsClone.aStor&&b(n,r,"set"),t?!0:""===this.value?!0:void(d.formatted||d.formatQuick(e))}),n.on("focusout.autoNumeric",function(){d=y(n);var e=n.val(),t=e,a=d.settingsClone;a.onOff=!1,a.aStor&&b(n,a,"set"),a.nSep===!0&&(a.aSep=a.oSep,a.aSign=a.oSign),null!==a.eDec&&(a.mDec=a.oDec,a.aPad=a.oPad,a.nBracket=a.oBracket),""!==e?(e=s(e,a),a.trailingNegative&&(e="-"+e,a.trailingNegative=!1),null===g(e,a)&&v(e,a,n[0])?(e=l(e,a.aDec,a.aNeg),a.rawValue=e,e=p(e,a),e=c(e,a.aDec,a.aNeg)):(e="",a.rawValue="")):a.rawValue="";var i=g(e,a,!1);null===i&&(i=h(e,a)),i!==t&&n.val(i),i!==d.inVal&&(n.change(),delete d.inVal)}),n.on("paste.autoNumeric",function(e){d=y(n);var t=e.clipboardData||e.originalEvent.clipboardData||window.clipboardData,a=t.getData("text");a!==d.lastVal&&(n.trigger("input"),d.lastVal=window.setTimeout(function(){n.val()},100))}),n.closest("form").on("submit.autoNumeric",function(){d=y(n);var e=d.settingsClone;e.unSetOnSubmit&&n.val(e.rawValue)}))})},destroy:function(){return e(this).each(function(){var t=S(e(this)),a=t.data("autoNumeric");"object"==typeof a&&(t.val(""),b(t,a,"wipe"),t.off(".autoNumeric"),t.removeData("autoNumeric"))})},wipe:function(){return e(this).each(function(){var t=S(e(this)),a=t.data("autoNumeric");"object"==typeof a&&(t.val(""),a.rawValue="",b(t,a,"wipe"))})},update:function(t){return e(this).each(function(){var a=S(e(this)),n=a.data("autoNumeric");"object"!=typeof n&&i('Initializing autoNumeric is required prior to calling the "update" method',!0);var r=a.autoNumeric("get");return n=e.extend(n,t),n=x(n),y(a,n,!0),n.aDec===n.aSep&&i('autoNumeric will not function properly when the decimal character aDec: "'+n.aDec+'" and thousand separator aSep: "'+n.aSep+'" are the same character',n.debug),a.data("autoNumeric",n),""!==a.val()||""!==a.text()?a.autoNumeric("set",r):void 0})},set:function(t){return e(this).each(function(){if(null!==t){var a=S(e(this)),n=a.data("autoNumeric"),r=t.toString(),s=a.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");return"object"!=typeof n&&i('Initializing autoNumeric is required prior to calling the "set" method',!0),r=u(r),e.isNumeric(Number(r))||i('The value "'+r+'" being "set" is not numeric and has caused a error to be thrown',n.debug),""===r?"":v(r,n)?(s&&null!==n.eDec&&(n.rawValue=r),(s||-1!==e.inArray(a.prop("tagName").toLowerCase(),n.tagList))&&(r=p(r,n),null===n.eDec&&(n.rawValue=r),r=c(r,n.aDec,n.aNeg),r=h(r,n)),n.aStor&&null!==n.eDec&&b(a,n,"set"),s?a.val(r):-1!==e.inArray(a.prop("tagName").toLowerCase(),n.tagList)?a.text(r):!1):(n.rawValue="",b(a,n,"wipe"),r="",i('The value being set falls outside the min: "'+n.vMin+' max: "'+n.vMax+'" ) settings for this element',n.debug),"")}})},unSet:function(t){return e(this).each(function(){var a=S(e(this)),i=a.data("autoNumeric");"object"==typeof i&&(i.onOff=!0,a.val(a.autoNumeric("get",t)))})},reSet:function(){return e(this).each(function(){var t=S(e(this)),a=t.data("autoNumeric");"object"==typeof a&&t.autoNumeric("set",t.val())})},get:function(t){var a=S(e(this)),n=a.data("autoNumeric"),r=a.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");"object"!=typeof n&&i('Initializing autoNumeric is required prior to calling the "get" method',!0);var s="";return r?s=a.eq(0).val():-1!==e.inArray(a.prop("tagName").toLowerCase(),n.tagList)?s=a.eq(0).text():i('The "<'+a.prop("tagName").toLowerCase()+'>" is not supported by autoNumeric()',n.debug),""!==n.rawValue&&(s=n.rawValue),!(!1).test(s)&&0!==Number(s)||"focus"!==n.wEmpty?(""!==s&&null!==n.nBracket&&(n.onOff=!0,s=o(s,n)),s=l(s,n.aDec,n.aNeg),0===Number(s)&&"keep"!==n.lZero&&(s="0"),","===t&&(s=s.replace(".",",")),".-"===t&&s.indexOf("-")>-1&&(s=s.replace("-","")+"-"),",-"===t&&s.indexOf("-")>-1&&(s=s.replace(".",",").replace("-","")+"-"),s):""},getString:function(t){var a=S(e(this)),i=a.serialize(),n=i.split("&"),r=e("form").index(a),s=e("form:eq("+r+")"),o=[],u=[],l=/^(?:submit|button|image|reset|file)$/i,c=/^(?:input|select|textarea|keygen)/i,g=/^(?:checkbox|radio)$/i,h=/^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,p=0;return e.each(s[0],function(e,t){""===t.name||!c.test(t.localName)||l.test(t.type)||t.disabled||!t.checked&&g.test(t.type)?u.push(-1):(u.push(p),p+=1)}),p=0,e.each(s[0],function(e,t){"input"!==t.localName||""!==t.type&&"text"!==t.type&&"hidden"!==t.type&&"tel"!==t.type?(o.push(-1),"input"===t.localName&&h.test(t.type)&&(p+=1)):(o.push(p),p+=1)}),e.each(n,function(a,i){i=n[a].split("=");var s=e.inArray(a,u);if(s>-1&&o[s]>-1){var l=e("form:eq("+r+") input:eq("+o[s]+")"),c=l.data("autoNumeric");"object"==typeof c&&null!==i[1]&&(i[1]=e("form:eq("+r+") input:eq("+o[s]+")").autoNumeric("get",t).toString(),n[a]=i.join("="))}}),n.join("&")},getArray:function(t){var a=S(e(this)),i=a.serializeArray(),n=e("form").index(a),r=e("form:eq("+n+")"),s=[],o=[],u=/^(?:submit|button|image|reset|file)$/i,l=/^(?:input|select|textarea|keygen)/i,c=/^(?:checkbox|radio)$/i,g=/^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,h=0;return e.each(r[0],function(e,t){""===t.name||!l.test(t.localName)||u.test(t.type)||t.disabled||!t.checked&&c.test(t.type)?o.push(-1):(o.push(h),h+=1)}),h=0,e.each(r[0],function(e,t){"input"!==t.localName||""!==t.type&&"text"!==t.type&&"hidden"!==t.type&&"tel"!==t.type?(s.push(-1),"input"===t.localName&&g.test(t.type)&&(h+=1)):(s.push(h),h+=1)}),e.each(i,function(a,i){var r=e.inArray(a,o);if(r>-1&&s[r]>-1){var u=e("form:eq("+n+") input:eq("+s[r]+")"),l=u.data("autoNumeric");"object"==typeof l&&(i.value=e("form:eq("+n+") input:eq("+s[r]+")").autoNumeric("get",t).toString())}}),i},getSettings:function(){var t=S(e(this));return t.eq(0).data("autoNumeric")}};e.fn.autoNumeric=function(e){return k[e]?k[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void i('Method "'+e+'" is not supported by autoNumeric()',!0):k.init.apply(this,arguments)},e.fn.autoNumeric.defaults={aSep:",",nSep:!1,dGroup:"3",aDec:".",altDec:null,aSign:"",pSign:"p",pNeg:"l",aSuffix:"",vMax:"9999999999999.99",vMin:"-9999999999999.99",mDec:null,eDec:null,aStor:!1,mRound:"S",aPad:!0,nBracket:null,wEmpty:"focus",lZero:"allow",aForm:!0,sNumber:!1,anDefault:null,unSetOnSubmit:!1,debug:!0}});

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2016 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.0
*/
!function(a){function b(c,d){return this instanceof b?(a.isPlainObject(c)?d=c:(d=d||{},d.alias=c),this.el=void 0,this.opts=a.extend(!0,{},this.defaults,d),this.noMasksCache=d&&void 0!==d.definitions,this.userOptions=d||{},this.events={},void e(this.opts.alias,d,this.opts)):new b(c,d)}function c(a){var b=document.createElement("input"),c="on"+a,d=c in b;return d||(b.setAttribute(c,"return;"),d="function"==typeof b[c]),b=null,d}function d(b,c){var d=b.getAttribute("type"),e="INPUT"===b.tagName&&-1!==a.inArray(d,c.supportsInputType)||b.isContentEditable||"TEXTAREA"===b.tagName;if(!e&&"INPUT"===b.tagName){var f=document.createElement("input");f.setAttribute("type",d),e="text"===f.type,f=null}return e}function e(b,c,d){var f=d.aliases[b];return f?(f.alias&&e(f.alias,void 0,d),a.extend(!0,d,f),a.extend(!0,d,c),!0):(null===d.mask&&(d.mask=b),!1)}function f(b,c,d){function f(a,c){c=void 0!==c?c:b.getAttribute("data-inputmask-"+a),null!==c&&("string"==typeof c&&(0===a.indexOf("on")?c=window[c]:"false"===c?c=!1:"true"===c&&(c=!0)),d[a]=c)}var g,h,i,j,k=b.getAttribute("data-inputmask");if(k&&""!==k&&(k=k.replace(new RegExp("'","g"),'"'),h=JSON.parse("{"+k+"}")),h){i=void 0;for(j in h)if("alias"===j.toLowerCase()){i=h[j];break}}f("alias",i),d.alias&&e(d.alias,d,c);for(g in c){if(h){i=void 0;for(j in h)if(j.toLowerCase()===g.toLowerCase()){i=h[j];break}}f(g,i)}return a.extend(!0,c,d),c}function g(c,d){function e(b){function d(a,b,c,d){this.matches=[],this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function e(b,d,e){var f=c.definitions[d];e=void 0!==e?e:b.matches.length;var g=b.matches[e-1];if(f&&!r){f.placeholder=a.isFunction(f.placeholder)?f.placeholder(c):f.placeholder;for(var h=f.prevalidator,i=h?h.length:0,j=1;j<f.cardinality;j++){var k=i>=j?h[j-1]:[],l=k.validator,m=k.cardinality;b.matches.splice(e++,0,{fn:l?"string"==typeof l?new RegExp(l):new function(){this.test=l}:new RegExp("."),cardinality:m?m:1,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d}),g=b.matches[e-1]}b.matches.splice(e++,0,{fn:f.validator?"string"==typeof f.validator?new RegExp(f.validator):new function(){this.test=f.validator}:new RegExp("."),cardinality:f.cardinality,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==(f.definitionSymbol||d),casing:f.casing,def:f.definitionSymbol||d,placeholder:f.placeholder,mask:d})}else b.matches.splice(e++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:void 0===g||g.def!==d,casing:null,def:c.staticDefinitionSymbol||d,placeholder:void 0!==c.staticDefinitionSymbol?d:void 0,mask:d}),r=!1}function f(a,b){a.isGroup&&(a.isGroup=!1,e(a,c.groupmarker.start,0),b!==!0&&e(a,c.groupmarker.end))}function g(a,b,c,d){b.matches.length>0&&(void 0===d||d)&&(c=b.matches[b.matches.length-1],f(c)),e(b,a)}function h(){if(t.length>0){if(m=t[t.length-1],g(k,m,o,!m.isAlternator),m.isAlternator){n=t.pop();for(var a=0;a<n.matches.length;a++)n.matches[a].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else g(k,s,o)}function i(a){function b(a){return a===c.optionalmarker.start?a=c.optionalmarker.end:a===c.optionalmarker.end?a=c.optionalmarker.start:a===c.groupmarker.start?a=c.groupmarker.end:a===c.groupmarker.end&&(a=c.groupmarker.start),a}a.matches=a.matches.reverse();for(var d in a.matches){var e=parseInt(d);if(a.matches[d].isQuantifier&&a.matches[e+1]&&a.matches[e+1].isGroup){var f=a.matches[d];a.matches.splice(d,1),a.matches.splice(e+1,0,f)}void 0!==a.matches[d].matches?a.matches[d]=i(a.matches[d]):a.matches[d]=b(a.matches[d])}return a}for(var j,k,l,m,n,o,p,q=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,r=!1,s=new d,t=[],u=[];j=q.exec(b);)if(k=j[0],r)h();else switch(k.charAt(0)){case c.escapeChar:r=!0;break;case c.optionalmarker.end:case c.groupmarker.end:if(l=t.pop(),void 0!==l)if(t.length>0){if(m=t[t.length-1],m.matches.push(l),m.isAlternator){n=t.pop();for(var v=0;v<n.matches.length;v++)n.matches[v].isGroup=!1;t.length>0?(m=t[t.length-1],m.matches.push(n)):s.matches.push(n)}}else s.matches.push(l);else h();break;case c.optionalmarker.start:t.push(new d(!1,!0));break;case c.groupmarker.start:t.push(new d(!0));break;case c.quantifiermarker.start:var w=new d(!1,!1,!0);k=k.replace(/[{}]/g,"");var x=k.split(","),y=isNaN(x[0])?x[0]:parseInt(x[0]),z=1===x.length?y:isNaN(x[1])?x[1]:parseInt(x[1]);if(("*"===z||"+"===z)&&(y="*"===z?0:1),w.quantifier={min:y,max:z},t.length>0){var A=t[t.length-1].matches;j=A.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),A.push(j),A.push(w)}else j=s.matches.pop(),j.isGroup||(p=new d(!0),p.matches.push(j),j=p),s.matches.push(j),s.matches.push(w);break;case c.alternatormarker:t.length>0?(m=t[t.length-1],o=m.matches.pop()):o=s.matches.pop(),o.isAlternator?t.push(o):(n=new d(!1,!1,!1,!0),n.matches.push(o),t.push(n));break;default:h()}for(;t.length>0;)l=t.pop(),f(l,!0),s.matches.push(l);return s.matches.length>0&&(o=s.matches[s.matches.length-1],f(o),u.push(s)),c.numericInput&&i(u[0]),u}function f(f,g){if(null===f||""===f)return void 0;if(1===f.length&&c.greedy===!1&&0!==c.repeat&&(c.placeholder=""),c.repeat>0||"*"===c.repeat||"+"===c.repeat){var h="*"===c.repeat?0:"+"===c.repeat?1:c.repeat;f=c.groupmarker.start+f+c.groupmarker.end+c.quantifiermarker.start+h+","+c.repeat+c.quantifiermarker.end}var i;return void 0===b.prototype.masksCache[f]||d===!0?(i={mask:f,maskToken:e(f),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:g},d!==!0&&(b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]=i,i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]))):i=a.extend(!0,{},b.prototype.masksCache[c.numericInput?f.split("").reverse().join(""):f]),i}function g(a){return a=a.toString()}var h;if(a.isFunction(c.mask)&&(c.mask=c.mask(c)),a.isArray(c.mask)){if(c.mask.length>1){c.keepStatic=null===c.keepStatic?!0:c.keepStatic;var i="(";return a.each(c.numericInput?c.mask.reverse():c.mask,function(b,c){i.length>1&&(i+=")|("),i+=g(void 0===c.mask||a.isFunction(c.mask)?c:c.mask)}),i+=")",f(i,c.mask)}c.mask=c.mask.pop()}return c.mask&&(h=void 0===c.mask.mask||a.isFunction(c.mask.mask)?f(g(c.mask),c.mask):f(g(c.mask.mask),c.mask)),h}function h(e,f,g){function i(a,b,c){b=b||0;var d,e,f,h=[],i=0,j=o();do{if(a===!0&&m().validPositions[i]){var k=m().validPositions[i];e=k.match,d=k.locator.slice(),h.push(c===!0?k.input:I(i,e))}else f=r(i,d,i-1),e=f.match,d=f.locator.slice(),(g.jitMasking===!1||j>i||isFinite(g.jitMasking)&&g.jitMasking>i)&&h.push(I(i,e));i++}while((void 0===ha||ha>i-1)&&null!==e.fn||null===e.fn&&""!==e.def||b>=i);return""===h[h.length-1]&&h.pop(),h}function m(){return f}function n(a){var b=m();b.buffer=void 0,a!==!0&&(b.tests={},b._buffer=void 0,b.validPositions={},b.p=0)}function o(a,b){var c=-1,d=-1,e=m().validPositions;void 0===a&&(a=-1);for(var f in e){var g=parseInt(f);e[g]&&(b||null!==e[g].match.fn)&&(a>=g&&(c=g),g>=a&&(d=g))}return-1!==c&&a-c>1||a>d?c:d}function p(b,c,d,e){if(e||g.insertMode&&void 0!==m().validPositions[b]&&void 0===d){var f,h=a.extend(!0,{},m().validPositions),i=o();for(f=b;i>=f;f++)delete m().validPositions[f];m().validPositions[b]=c;var j,k=!0,l=m().validPositions;for(f=j=b;i>=f;f++){var p=h[f];if(void 0!==p)for(var q=j,r=-1;q<D()&&(null==p.match.fn&&l[f]&&(l[f].match.optionalQuantifier===!0||l[f].match.optionality===!0)||null!=p.match.fn);)if(null===p.match.fn||!g.keepStatic&&l[f]&&(void 0!==l[f+1]&&v(f+1,l[f].locator.slice(),f).length>1||void 0!==l[f].alternation)?q++:q=E(j),t(q,p.match.def)){var s=B(q,p.input,!0,!0);if(k=s!==!1,j=s.caret||s.insert?o():q,k)break}else{if(k=null==p.match.fn,r===q)break;r=q}if(!k)break}if(!k)return m().validPositions=a.extend(!0,{},h),n(!0),!1}else m().validPositions[b]=c;return n(!0),!0}function q(a,b,c,d){function e(a){var b=m().validPositions[a];if(void 0!==b&&null===b.match.fn){var c=m().validPositions[a-1],d=m().validPositions[a+1];return void 0!==c&&void 0!==d}return!1}var f,h=a;for(m().p=a,f=b-1;f>=h;f--)void 0!==m().validPositions[f]&&(c===!0||!e(f)&&g.canClearPosition(m(),f,o(),d,g)!==!1)&&delete m().validPositions[f];for(n(!0),f=h+1;f<=o();){for(;void 0!==m().validPositions[h];)h++;var i=m().validPositions[h];if(h>f&&(f=h+1),void 0===m().validPositions[f]&&C(f)||void 0!==i)f++;else{var j=r(f);t(h,j.match.def)?B(h,j.input||I(f),!0)!==!1&&(delete m().validPositions[f],f++):C(f)||(f++,h--),h++}}n(!0)}function r(a,b,c){var d=m().validPositions[a];if(void 0===d)for(var e=v(a,b,c),f=o(),h=m().validPositions[f]||v(0)[0],i=void 0!==h.alternation?h.locator[h.alternation].toString().split(","):[],j=0;j<e.length&&(d=e[j],!(d.match&&(g.greedy&&d.match.optionalQuantifier!==!0||(d.match.optionality===!1||d.match.newBlockMarker===!1)&&d.match.optionalQuantifier!==!0)&&(void 0===h.alternation||h.alternation!==d.alternation||void 0!==d.locator[h.alternation]&&A(d.locator[h.alternation].toString().split(","),i))));j++);return d}function s(a){return m().validPositions[a]?m().validPositions[a].match:v(a)[0].match}function t(a,b){for(var c=!1,d=v(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function u(b,c){var d,e;return(m().tests[b]||m().validPositions[b])&&a.each(m().tests[b]||[m().validPositions[b]],function(a,b){var f=b.alternation?b.locator[b.alternation].toString().indexOf(c):-1;(void 0===e||e>f)&&-1!==f&&(d=b,e=f)}),d}function v(b,c,d){function e(c,d,f,h){function j(f,h,o){function p(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){return e.isQuantifier===!0&&(d=p(b,c.matches[a-1]))?!1:void 0}),d}function q(a,b){var c=u(a,b);return c?c.locator.slice(c.alternation+1):[]}if(i>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+m().mask;if(i===b&&void 0===f.matches)return k.push({match:f,locator:h.reverse(),cd:n}),!0;if(void 0!==f.matches){if(f.isGroup&&o!==f){if(f=j(c.matches[a.inArray(f,c.matches)+1],h))return!0}else if(f.isOptional){var r=f;if(f=e(f,d,h,o)){if(g=k[k.length-1].match,!p(g,r))return!0;l=!0,i=b}}else if(f.isAlternator){var s,t=f,v=[],w=k.slice(),x=h.length,y=d.length>0?d.shift():-1;if(-1===y||"string"==typeof y){var z,A=i,B=d.slice(),C=[];if("string"==typeof y)C=y.split(",");else for(z=0;z<t.matches.length;z++)C.push(z);for(var D=0;D<C.length;D++){if(z=parseInt(C[D]),k=[],d=q(i,z),f=j(t.matches[z]||c.matches[z],[z].concat(h),o)||f,f!==!0&&void 0!==f&&C[C.length-1]<t.matches.length){var E=a.inArray(f,c.matches)+1;c.matches.length>E&&(f=j(c.matches[E],[E].concat(h.slice(1,h.length)),o),f&&(C.push(E.toString()),a.each(k,function(a,b){b.alternation=h.length-1})))}s=k.slice(),i=A,k=[];for(var F=0;F<B.length;F++)d[F]=B[F];for(var G=0;G<s.length;G++){var H=s[G];H.alternation=H.alternation||x;for(var I=0;I<v.length;I++){var J=v[I];if(H.match.def===J.match.def&&("string"!=typeof y||-1!==a.inArray(H.locator[H.alternation].toString(),C))){H.match.mask===J.match.mask&&(s.splice(G,1),G--),-1===J.locator[H.alternation].toString().indexOf(H.locator[H.alternation])&&(J.locator[H.alternation]=J.locator[H.alternation]+","+H.locator[H.alternation],J.alternation=H.alternation);break}}}v=v.concat(s)}"string"==typeof y&&(v=a.map(v,function(b,c){if(isFinite(c)){var d,e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=void 0,b.alternation=void 0;for(var g=0;g<f.length;g++)d=-1!==a.inArray(f[g],C),d&&(void 0!==b.locator[e]?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(void 0!==b.locator[e])return b}})),k=w.concat(v),i=b,l=k.length>0}else f=j(t.matches[y]||c.matches[y],[y].concat(h),o);if(f)return!0}else if(f.isQuantifier&&o!==c.matches[a.inArray(f,c.matches)-1])for(var K=f,L=d.length>0?d.shift():0;L<(isNaN(K.quantifier.max)?L+1:K.quantifier.max)&&b>=i;L++){var M=c.matches[a.inArray(K,c.matches)-1];if(f=j(M,[L].concat(h),M)){if(g=k[k.length-1].match,g.optionalQuantifier=L>K.quantifier.min-1,p(g,M)){if(L>K.quantifier.min-1){l=!0,i=b;break}return!0}return!0}}else if(f=e(f,d,h,o))return!0}else i++}for(var o=d.length>0?d.shift():0;o<c.matches.length;o++)if(c.matches[o].isQuantifier!==!0){var p=j(c.matches[o],[o].concat(f),h);if(p&&i===b)return p;if(i>b)break}}function f(a){var b=a[0]||a;return b.locator.slice()}var g,h=m().maskToken,i=c?d:0,j=c||[0],k=[],l=!1,n=c?c.join(""):"";if(b>-1){if(void 0===c){for(var o,p=b-1;void 0===(o=m().validPositions[p]||m().tests[p])&&p>-1;)p--;void 0!==o&&p>-1&&(j=f(o),n=j.join(""),o=o[0]||o,i=p)}if(m().tests[b]&&m().tests[b][0].cd===n)return m().tests[b];for(var q=j.shift();q<h.length;q++){var r=e(h[q],j,[q]);if(r&&i===b||i>b)break}}return(0===k.length||l)&&k.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),m().tests[b]=a.extend(!0,[],k),m().tests[b]}function w(){return void 0===m()._buffer&&(m()._buffer=i(!1,1)),m()._buffer}function x(a){if(void 0===m().buffer||a===!0){if(a===!0)for(var b in m().tests)void 0===m().validPositions[b]&&delete m().tests[b];m().buffer=i(!0,o(),!0)}return m().buffer}function y(a,b,c){var d;if(c=c,a===!0)n(),a=0,b=c.length;else for(d=a;b>d;d++)delete m().validPositions[d],delete m().tests[d];for(d=a;b>d;d++)n(!0),c[d]!==g.skipOptionalPartCharacter&&B(d,c[d],!0,!0)}function z(a,b){switch(b.casing){case"upper":a=a.toUpperCase();break;case"lower":a=a.toLowerCase()}return a}function A(b,c){for(var d=g.greedy?c:c.slice(0,1),e=!1,f=0;f<b.length;f++)if(-1!==a.inArray(b[f],d)){e=!0;break}return e}function B(c,d,e,f){function h(a){return ja?a.begin-a.end>1||a.begin-a.end===1&&g.insertMode:a.end-a.begin>1||a.end-a.begin===1&&g.insertMode}function i(b,d,e,f){var i=!1;return a.each(v(b),function(j,k){for(var l=k.match,r=d?1:0,s="",t=l.cardinality;t>r;t--)s+=G(b-(t-1));if(d&&(s+=d),x(!0),i=null!=l.fn?l.fn.test(s,m(),b,e,g,h(c)):d!==l.def&&d!==g.skipOptionalPartCharacter||""===l.def?!1:{c:l.placeholder||l.def,pos:b},i!==!1){var u=void 0!==i.c?i.c:d;u=u===g.skipOptionalPartCharacter&&null===l.fn?l.placeholder||l.def:u;var v=b,w=x();if(void 0!==i.remove&&(a.isArray(i.remove)||(i.remove=[i.remove]),a.each(i.remove.sort(function(a,b){return b-a}),function(a,b){q(b,b+1,!0)})),void 0!==i.insert&&(a.isArray(i.insert)||(i.insert=[i.insert]),a.each(i.insert.sort(function(a,b){return a-b}),function(a,b){B(b.pos,b.c,!1,f)})),i.refreshFromBuffer){var A=i.refreshFromBuffer;if(e=!0,y(A===!0?A:A.start,A.end,w),void 0===i.pos&&void 0===i.c)return i.pos=o(),!1;if(v=void 0!==i.pos?i.pos:b,v!==b)return i=a.extend(i,B(v,u,!0,f)),!1}else if(i!==!0&&void 0!==i.pos&&i.pos!==b&&(v=i.pos,y(b,v,x().slice()),v!==b))return i=a.extend(i,B(v,u,!0)),!1;return i!==!0&&void 0===i.pos&&void 0===i.c?!1:(j>0&&n(!0),p(v,a.extend({},k,{input:z(u,l)}),f,h(c))||(i=!1),!1)}}),i}function j(b,c,d,e){for(var f,h,i,j,k,l,p=a.extend(!0,{},m().validPositions),q=a.extend(!0,{},m().tests),s=o();s>=0&&(j=m().validPositions[s],!j||void 0===j.alternation||(f=s,h=m().validPositions[f].alternation,r(f).locator[j.alternation]===j.locator[j.alternation]));s--);if(void 0!==h){f=parseInt(f);for(var t in m().validPositions)if(t=parseInt(t),j=m().validPositions[t],t>=f&&void 0!==j.alternation){var v;0===f?(v=[],a.each(m().tests[f],function(a,b){void 0!==b.locator[h]&&(v=v.concat(b.locator[h].toString().split(",")))})):v=m().validPositions[f].locator[h].toString().split(",");var w=void 0!==j.locator[h]?j.locator[h]:v[0];w.length>0&&(w=w.split(",")[0]);for(var x=0;x<v.length;x++){var y=[],z=0,A=0;if(w<v[x]){for(var C,D,E=t;E>=0;E--)if(C=m().validPositions[E],void 0!==C){var F=u(E,v[x]);m().validPositions[E].match.def!==F.match.def&&(y.push(m().validPositions[E].input),m().validPositions[E]=F,m().validPositions[E].input=I(E),null===m().validPositions[E].match.fn&&A++,C=F),D=C.locator[h],C.locator[h]=parseInt(v[x]);break}if(w!==C.locator[h]){for(k=t+1;k<o(void 0,!0)+1;k++)l=m().validPositions[k],l&&null!=l.match.fn?y.push(l.input):b>k&&z++,delete m().validPositions[k],delete m().tests[k];for(n(!0),g.keepStatic=!g.keepStatic,i=!0;y.length>0;){var G=y.shift();if(G!==g.skipOptionalPartCharacter&&!(i=B(o(void 0,!0)+1,G,!1,e)))break}if(C.alternation=h,C.locator[h]=D,i){var H=o(b)+1;for(k=t+1;k<o()+1;k++)l=m().validPositions[k],(void 0===l||null==l.match.fn)&&b>k&&A++;b+=A-z,i=B(b>H?H:b,c,d,e)}if(g.keepStatic=!g.keepStatic,i)return i;n(),m().validPositions=a.extend(!0,{},p),m().tests=a.extend(!0,{},q)}}}break}}return!1}function k(b,c){for(var d=m().validPositions[c],e=d.locator,f=e.length,g=b;c>g;g++)if(void 0===m().validPositions[g]&&!C(g,!0)){var h=v(g),i=h[0],j=-1;a.each(h,function(a,b){for(var c=0;f>c&&(void 0!==b.locator[c]&&A(b.locator[c].toString().split(","),e[c].toString().split(",")));c++)c>j&&(j=c,i=b)}),p(g,a.extend({},i,{input:i.match.placeholder||i.match.def}),!0)}}e=e===!0;var l=c;void 0!==c.begin&&(l=ja&&!h(c)?c.end:c.begin);for(var s=!1,t=a.extend(!0,{},m().validPositions),w=l-1;w>-1&&!m().validPositions[w];w--);var F;for(w++;l>w;w++)void 0===m().validPositions[w]&&(g.jitMasking===!1||g.jitMasking>w)&&((F=r(w)).match.def===g.radixPointDefinitionSymbol||!C(w,!0)||a.inArray(g.radixPoint,x())<w&&F.match.fn&&F.match.fn.test(I(w),m(),w,!1,g))&&i(o(w,!0)+1,F.match.placeholder||(null==F.match.fn?F.match.def:""!==I(w)?I(w):x()[w]),!0,f);if(h(c)&&(Q(void 0,b.keyCode.DELETE,c),l=m().p),l<D()&&(s=i(l,d,e,f),(!e||f===!0)&&s===!1)){var H=m().validPositions[l];if(!H||null!==H.match.fn||H.match.def!==d&&d!==g.skipOptionalPartCharacter){if((g.insertMode||void 0===m().validPositions[E(l)])&&!C(l,!0)){var J=r(l).match;J=J.placeholder||J.def,i(l,J,e,f);for(var K=l+1,L=E(l);L>=K;K++)if(s=i(K,d,e,f),s!==!1){k(l,K),l=K;break}}}else s={caret:E(l)}}return s===!1&&g.keepStatic&&(s=j(l,d,e,f)),s===!0&&(s={pos:l}),a.isFunction(g.postValidation)&&s!==!1&&!e&&f!==!0&&(s=g.postValidation(x(!0),s,g)?s:!1),void 0===s.pos&&(s.pos=l),s===!1&&(n(!0),m().validPositions=a.extend(!0,{},t)),s}function C(a,b){var c;if(b?(c=r(a).match,""===c.def&&(c=s(a))):c=s(a),null!=c.fn)return c.fn;if(b!==!0&&a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var d=v(a);return d.length>2}return!1}function D(){var a;ha=void 0!==fa?fa.maxLength:void 0,-1===ha&&(ha=void 0);var b,c=o(),d=m().validPositions[c],e=void 0!==d?d.locator.slice():void 0;for(b=c+1;void 0===d||null!==d.match.fn||null===d.match.fn&&""!==d.match.def;b++)d=r(b,e,b-1),e=d.locator.slice();var f=s(b-1);return a=""!==f.def?b:b-1,void 0===ha||ha>a?a:ha}function E(a,b){var c=D();if(a>=c)return c;for(var d=a;++d<c&&(b===!0&&(s(d).newBlockMarker!==!0||!C(d))||b!==!0&&!C(d)&&(g.nojumps!==!0||g.nojumpsThreshold>d)););return d}function F(a,b){var c=a;if(0>=c)return 0;for(;--c>0&&(b===!0&&s(c).newBlockMarker!==!0||b!==!0&&!C(c)););return c}function G(a){return void 0===m().validPositions[a]?I(a):m().validPositions[a].input}function H(b,c,d,e,f){if(e&&a.isFunction(g.onBeforeWrite)){var h=g.onBeforeWrite(e,c,d,g);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;y(i===!0?i:i.start,i.end,h.buffer||c),c=x(!0)}void 0!==d&&(d=void 0!==h.caret?h.caret:d)}}b.inputmask._valueSet(c.join("")),void 0===d||void 0!==e&&"blur"===e.type||L(b,d),f===!0&&(la=!0,a(b).trigger("input"))}function I(a,b){if(b=b||s(a),void 0!==b.placeholder)return b.placeholder;if(null===b.fn){if(a>-1&&!g.keepStatic&&void 0===m().validPositions[a]){var c,d=v(a),e=0;if(d.length>2)for(var f=0;f<d.length;f++)if(d[f].match.optionality!==!0&&d[f].match.optionalQuantifier!==!0&&(null===d[f].match.fn||void 0===c||d[f].match.fn.test(c.match.def,m(),a,!0,g)!==!1)&&(e++,null===d[f].match.fn&&(c=d[f]),e>1))return g.placeholder.charAt(a%g.placeholder.length)}return b.def}return g.placeholder.charAt(a%g.placeholder.length)}function J(c,d,e,f){function h(){var a=!1,b=w().slice(l,E(l)).join("").indexOf(k);if(-1!==b&&!C(l)){a=!0;for(var c=w().slice(l,l+b),d=0;d<c.length;d++)if(" "!==c[d]){a=!1;break}}return a}var i,j=f.slice(),k="",l=0;if(n(),m().p=E(-1),!e)if(g.autoUnmask!==!0){var p=w().slice(0,E(-1)).join(""),q=j.join("").match(new RegExp("^"+b.escapeRegex(p),"g"));q&&q.length>0&&(j.splice(0,q.length*p.length),l=E(l))}else l=E(l);a.each(j,function(b,d){if(void 0!==d){var f=new a.Event("keypress");f.which=d.charCodeAt(0),k+=d;var j=o(void 0,!0),p=m().validPositions[j],q=r(j+1,p?p.locator.slice():void 0,j);if(!h()||e||g.autoUnmask){var s=e?b:null==q.match.fn&&q.match.optionality&&j+1<m().p?j+1:m().p;i=S.call(c,f,!0,!1,e,s),l=s+1,k=""}else i=S.call(c,f,!0,!1,!0,j+1);if(!e&&a.isFunction(g.onBeforeWrite)&&(i=g.onBeforeWrite(f,x(),i.forwardPosition,g),i&&i.refreshFromBuffer)){var t=i.refreshFromBuffer;y(t===!0?t:t.start,t.end,i.buffer),n(!0),i.caret&&(m().p=i.caret)}}}),d&&H(c,x(),document.activeElement===c?E(o(0)):void 0,new a.Event("checkval"))}function K(b){if(b&&void 0===b.inputmask)return b.value;var c=[],d=m().validPositions;for(var e in d)d[e].match&&null!=d[e].match.fn&&c.push(d[e].input);var f=0===c.length?null:(ja?c.reverse():c).join("");if(null!==f){var h=(ja?x().slice().reverse():x()).join("");a.isFunction(g.onUnMask)&&(f=g.onUnMask(h,f,g)||f)}return f}function L(a,b,c,d){function e(a){if(d!==!0&&ja&&"number"==typeof a&&(!g.greedy||""!==g.placeholder)){var b=x().join("").length;a=b-a}return a}var f;if("number"!=typeof b)return a.setSelectionRange?(b=a.selectionStart,c=a.selectionEnd):window.getSelection?(f=window.getSelection().getRangeAt(0),(f.commonAncestorContainer.parentNode===a||f.commonAncestorContainer===a)&&(b=f.startOffset,c=f.endOffset)):document.selection&&document.selection.createRange&&(f=document.selection.createRange(),b=0-f.duplicate().moveStart("character",-a.inputmask._valueGet().length),c=b+f.text.length),{begin:e(b),end:e(c)};b=e(b),c=e(c),c="number"==typeof c?c:b;var h=parseInt(((a.ownerDocument.defaultView||window).getComputedStyle?(a.ownerDocument.defaultView||window).getComputedStyle(a,null):a.currentStyle).fontSize)*c;if(a.scrollLeft=h>a.scrollWidth?h:0,j||g.insertMode!==!1||b!==c||c++,a.setSelectionRange)a.selectionStart=b,a.selectionEnd=c;else if(window.getSelection){if(f=document.createRange(),void 0===a.firstChild||null===a.firstChild){var i=document.createTextNode("");a.appendChild(i)}f.setStart(a.firstChild,b<a.inputmask._valueGet().length?b:a.inputmask._valueGet().length),f.setEnd(a.firstChild,c<a.inputmask._valueGet().length?c:a.inputmask._valueGet().length),f.collapse(!0);var k=window.getSelection();k.removeAllRanges(),k.addRange(f)}else a.createTextRange&&(f=a.createTextRange(),f.collapse(!0),f.moveEnd("character",c),f.moveStart("character",b),f.select())}function M(b){var c,d,e=x(),f=e.length,g=o(),h={},i=m().validPositions[g],j=void 0!==i?i.locator.slice():void 0;for(c=g+1;c<e.length;c++)d=r(c,j,c-1),j=d.locator.slice(),h[c]=a.extend(!0,{},d);var k=i&&void 0!==i.alternation?i.locator[i.alternation]:void 0;for(c=f-1;c>g&&(d=h[c],(d.match.optionality||d.match.optionalQuantifier||k&&(k!==h[c].locator[i.alternation]&&null!=d.match.fn||null===d.match.fn&&d.locator[i.alternation]&&A(d.locator[i.alternation].toString().split(","),k.toString().split(","))&&""!==v(c)[0].def))&&e[c]===I(c,d.match));c--)f--;return b?{l:f,def:h[f]?h[f].match:void 0}:f}function N(a){for(var b=M(),c=a.length-1;c>b&&!C(c);c--);return a.splice(b,c+1-b),a}function O(b){if(a.isFunction(g.isComplete))return g.isComplete(b,g);if("*"===g.repeat)return void 0;var c=!1,d=M(!0),e=F(d.l);if(void 0===d.def||d.def.newBlockMarker||d.def.optionality||d.def.optionalQuantifier){c=!0;for(var f=0;e>=f;f++){var h=r(f).match;if(null!==h.fn&&void 0===m().validPositions[f]&&h.optionality!==!0&&h.optionalQuantifier!==!0||null===h.fn&&b[f]!==I(f,h)){c=!1;break}}}return c}function P(b){function c(b){if(a.valHooks&&(void 0===a.valHooks[b]||a.valHooks[b].inputmaskpatch!==!0)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},d=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return-1!==o()||g.nullable!==!0?b:""}return c(a)},set:function(b,c){var e,f=a(b);return e=d(b,c),b.inputmask&&f.trigger("setvalue"),e},inputmaskpatch:!0}}}function d(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==o()||g.nullable!==!0?document.activeElement===this&&g.clearMaskOnLostFocus?(ja?N(x().slice()).reverse():N(x().slice())).join(""):h.call(this):"":h.call(this)}function e(b){i.call(this,b),this.inputmask&&a(this).trigger("setvalue")}function f(b){oa.on(b,"mouseenter",function(b){var c=a(this),d=this,e=d.inputmask._valueGet();e!==x().join("")&&c.trigger("setvalue")})}var h,i;if(!b.inputmask.__valueGet){if(Object.getOwnPropertyDescriptor){var j=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):void 0;j&&j.get&&j.set?(h=j.get,i=j.set,Object.defineProperty(b,"value",{get:d,set:e,configurable:!0})):"INPUT"!==b.tagName&&(h=function(){return this.textContent},i=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:d,set:e,configurable:!0}))}else document.__lookupGetter__&&b.__lookupGetter__("value")&&(h=b.__lookupGetter__("value"),i=b.__lookupSetter__("value"),b.__defineGetter__("value",d),b.__defineSetter__("value",e));void 0===h&&(h=function(){return b.value},i=function(a){b.value=a},c(b.type),f(b)),b.inputmask.__valueGet=h,b.inputmask._valueGet=function(a){return ja&&a!==!0?h.call(this.el).split("").reverse().join(""):h.call(this.el)},b.inputmask.__valueSet=i,b.inputmask._valueSet=function(a,b){i.call(this.el,null===a||void 0===a?"":b!==!0&&ja?a.split("").reverse().join(""):a)}}}function Q(c,d,e,f){function h(){if(g.keepStatic){n(!0);var b,d=[],e=a.extend(!0,{},m().validPositions);for(b=o();b>=0;b--){var f=m().validPositions[b];if(f&&(null!=f.match.fn&&d.push(f.input),delete m().validPositions[b],void 0!==f.alternation&&f.locator[f.alternation]===r(b).locator[f.alternation]))break}if(b>-1)for(;d.length>0;){m().p=E(o());var h=new a.Event("keypress");h.which=d.pop().charCodeAt(0),S.call(c,h,!0,!1,!1,m().p)}else m().validPositions=a.extend(!0,{},e)}}if((g.numericInput||ja)&&(d===b.keyCode.BACKSPACE?d=b.keyCode.DELETE:d===b.keyCode.DELETE&&(d=b.keyCode.BACKSPACE),ja)){var i=e.end;e.end=e.begin,e.begin=i}d===b.keyCode.BACKSPACE&&(e.end-e.begin<1||g.insertMode===!1)?(e.begin=F(e.begin),void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.begin--):d===b.keyCode.DELETE&&e.begin===e.end&&(e.end=C(e.end)?e.end+1:E(e.end)+1,void 0===m().validPositions[e.begin]||m().validPositions[e.begin].input!==g.groupSeparator&&m().validPositions[e.begin].input!==g.radixPoint||e.end++),q(e.begin,e.end,!1,f),f!==!0&&h();var j=o(e.begin);j<e.begin?(-1===j&&n(),m().p=E(j)):f!==!0&&(m().p=e.begin)}function R(d){var e=this,f=a(e),h=d.keyCode,i=L(e);if(h===b.keyCode.BACKSPACE||h===b.keyCode.DELETE||l&&h===b.keyCode.BACKSPACE_SAFARI||d.ctrlKey&&h===b.keyCode.X&&!c("cut"))d.preventDefault(),Q(e,h,i),H(e,x(),m().p,d,ea!==x().join("")),e.inputmask._valueGet()===w().join("")?f.trigger("cleared"):O(x())===!0&&f.trigger("complete"),g.showTooltip&&(e.title=g.tooltip||m().mask);else if(h===b.keyCode.END||h===b.keyCode.PAGE_DOWN){d.preventDefault();var j=E(o());g.insertMode||j!==D()||d.shiftKey||j--,L(e,d.shiftKey?i.begin:j,j,!0)}else h===b.keyCode.HOME&&!d.shiftKey||h===b.keyCode.PAGE_UP?(d.preventDefault(),L(e,0,d.shiftKey?i.begin:0,!0)):(g.undoOnEscape&&h===b.keyCode.ESCAPE||90===h&&d.ctrlKey)&&d.altKey!==!0?(J(e,!0,!1,ea.split("")),f.trigger("click")):h!==b.keyCode.INSERT||d.shiftKey||d.ctrlKey?g.tabThrough===!0&&h===b.keyCode.TAB?(d.shiftKey===!0?(null===s(i.begin).fn&&(i.begin=E(i.begin)),i.end=F(i.begin,!0),i.begin=F(i.end,!0)):(i.begin=E(i.begin,!0),i.end=E(i.begin,!0),i.end<D()&&i.end--),i.begin<D()&&(d.preventDefault(),L(e,i.begin,i.end))):g.insertMode!==!1||d.shiftKey||(h===b.keyCode.RIGHT?setTimeout(function(){var a=L(e);L(e,a.begin)},0):h===b.keyCode.LEFT&&setTimeout(function(){var a=L(e);L(e,ja?a.begin+1:a.begin-1)},0)):(g.insertMode=!g.insertMode,L(e,g.insertMode||i.begin!==D()?i.begin:i.begin-1));g.onKeyDown.call(this,d,x(),L(e).begin,g),ma=-1!==a.inArray(h,g.ignorables)}function S(c,d,e,f,h){var i=this,j=a(i),k=c.which||c.charCode||c.keyCode;if(!(d===!0||c.ctrlKey&&c.altKey)&&(c.ctrlKey||c.metaKey||ma))return k===b.keyCode.ENTER&&ea!==x().join("")&&(ea=x().join(""),setTimeout(function(){j.trigger("change")},0)),!0;if(k){46===k&&c.shiftKey===!1&&","===g.radixPoint&&(k=44);var l,o=d?{begin:h,end:h}:L(i),p=String.fromCharCode(k);m().writeOutBuffer=!0;var q=B(o,p,f);if(q!==!1){var r=q.pos;if(n(!0),void 0!==q.caret)l=q.caret;else{var s=m().validPositions;l=!g.keepStatic&&(void 0!==s[r+1]&&v(r+1,s[r].locator.slice(),r).length>1||void 0!==s[r].alternation)?r+1:E(r)}m().p=l}if(e!==!1){var t=this;if(setTimeout(function(){g.onKeyValidation.call(t,k,q,g)},0),m().writeOutBuffer&&q!==!1){var u=x();H(i,u,g.numericInput&&void 0===q.caret?F(l):l,c,d!==!0),d!==!0&&setTimeout(function(){O(u)===!0&&j.trigger("complete")},0)}}if(g.showTooltip&&(i.title=g.tooltip||m().mask),c.preventDefault(),d)return q.forwardPosition=l,q}}function T(b){var c,d=this,e=b.originalEvent||b,f=a(d),h=d.inputmask._valueGet(!0),i=L(d);ja&&(c=i.end,i.end=i.begin,i.begin=c);var j=h.substr(0,i.begin),k=h.substr(i.end,h.length);j===(ja?w().reverse():w()).slice(0,i.begin).join("")&&(j=""),k===(ja?w().reverse():w()).slice(i.end).join("")&&(k=""),ja&&(c=j,j=k,k=c),window.clipboardData&&window.clipboardData.getData?h=j+window.clipboardData.getData("Text")+k:e.clipboardData&&e.clipboardData.getData&&(h=j+e.clipboardData.getData("text/plain")+k);var l=h;if(a.isFunction(g.onBeforePaste)){if(l=g.onBeforePaste(h,g),l===!1)return b.preventDefault();l||(l=h)}return J(d,!1,!1,ja?l.split("").reverse():l.toString().split("")),H(d,x(),E(o()),b,!0),O(x())===!0&&f.trigger("complete"),b.preventDefault()}function U(c){var d=this,e=d.inputmask._valueGet();if(x().join("")!==e){var f=L(d);if(e=e.replace(new RegExp("("+b.escapeRegex(w().join(""))+")*"),""),k){var g=e.replace(x().join(""),"");if(1===g.length){var h=new a.Event("keypress");return h.which=g.charCodeAt(0),S.call(d,h,!0,!0,!1,m().validPositions[f.begin-1]?f.begin:f.begin-1),!1}}if(f.begin>e.length&&(L(d,e.length),f=L(d)),x().length-e.length!==1||e.charAt(f.begin)===x()[f.begin]||e.charAt(f.begin+1)===x()[f.begin]||C(f.begin)){for(var i=o()+1,j=x().slice(i).join("");null===e.match(b.escapeRegex(j)+"$");)j=j.slice(1);e=e.replace(j,""),e=e.split(""),J(d,!0,!1,e),O(x())===!0&&a(d).trigger("complete")}else c.keyCode=b.keyCode.BACKSPACE,R.call(d,c);c.preventDefault()}}function V(b){var c=this,d=c.inputmask._valueGet();J(c,!0,!1,(a.isFunction(g.onBeforeMask)?g.onBeforeMask(d,g)||d:d).split("")),ea=x().join(""),(g.clearMaskOnLostFocus||g.clearIncomplete)&&c.inputmask._valueGet()===w().join("")&&c.inputmask._valueSet("")}function W(a){var b=this,c=b.inputmask._valueGet();g.showMaskOnFocus&&(!g.showMaskOnHover||g.showMaskOnHover&&""===c)?b.inputmask._valueGet()!==x().join("")&&H(b,x(),E(o())):na===!1&&L(b,E(o())),g.positionCaretOnTab===!0&&setTimeout(function(){L(b,E(o()))},0),ea=x().join("")}function X(a){var b=this;if(na=!1,g.clearMaskOnLostFocus&&document.activeElement!==b){var c=x().slice(),d=b.inputmask._valueGet();d!==b.getAttribute("placeholder")&&""!==d&&(-1===o()&&d===w().join("")?c=[]:N(c),H(b,c))}}function Y(b){function c(b){if(g.radixFocus&&""!==g.radixPoint){var c=m().validPositions;if(void 0===c[b]||c[b].input===I(b)){if(b<E(-1))return!0;var d=a.inArray(g.radixPoint,x());if(-1!==d){for(var e in c)if(e>d&&c[e].input!==I(e))return!1;return!0}}}return!1}var d=this;setTimeout(function(){if(document.activeElement===d){var b=L(d);if(b.begin===b.end)if(c(b.begin))L(d,g.numericInput?E(a.inArray(g.radixPoint,x())):a.inArray(g.radixPoint,x()));else{var e=b.begin,f=o(e,!0),h=E(f);if(h>e)L(d,C(e)||C(e-1)?e:E(e));else{var i=I(h);(""!==i&&x()[h]!==i||!C(h,!0)&&s(h).def===i)&&(h=E(h)),
L(d,h)}}}},0)}function Z(a){var b=this;setTimeout(function(){L(b,0,E(o()))},0)}function $(c){var d=this,e=a(d),f=L(d),h=c.originalEvent||c,i=window.clipboardData||h.clipboardData,j=ja?x().slice(f.end,f.begin):x().slice(f.begin,f.end);i.setData("text",ja?j.reverse().join(""):j.join("")),document.execCommand&&document.execCommand("copy"),Q(d,b.keyCode.DELETE,f),H(d,x(),m().p,c,ea!==x().join("")),d.inputmask._valueGet()===w().join("")&&e.trigger("cleared"),g.showTooltip&&(d.title=g.tooltip||m().mask)}function _(b){var c=a(this),d=this;if(d.inputmask){var e=d.inputmask._valueGet(),f=x().slice();ea!==f.join("")&&setTimeout(function(){c.trigger("change"),ea=f.join("")},0),""!==e&&(g.clearMaskOnLostFocus&&(-1===o()&&e===w().join("")?f=[]:N(f)),O(f)===!1&&(setTimeout(function(){c.trigger("incomplete")},0),g.clearIncomplete&&(n(),f=g.clearMaskOnLostFocus?[]:w().slice())),H(d,f,void 0,b))}}function aa(a){var b=this;na=!0,document.activeElement!==b&&g.showMaskOnHover&&b.inputmask._valueGet()!==x().join("")&&H(b,x())}function ba(a){ea!==x().join("")&&ga.trigger("change"),g.clearMaskOnLostFocus&&-1===o()&&fa.inputmask._valueGet&&fa.inputmask._valueGet()===w().join("")&&fa.inputmask._valueSet(""),g.removeMaskOnSubmit&&(fa.inputmask._valueSet(fa.inputmask.unmaskedvalue(),!0),setTimeout(function(){H(fa,x())},0))}function ca(a){setTimeout(function(){ga.trigger("setvalue")},0)}function da(b){if(fa=b,ga=a(fa),g.showTooltip&&(fa.title=g.tooltip||m().mask),("rtl"===fa.dir||g.rightAlign)&&(fa.style.textAlign="right"),("rtl"===fa.dir||g.numericInput)&&(fa.dir="ltr",fa.removeAttribute("dir"),fa.inputmask.isRTL=!0,ja=!0),oa.off(fa),P(fa),d(fa,g)&&(oa.on(fa,"submit",ba),oa.on(fa,"reset",ca),oa.on(fa,"mouseenter",aa),oa.on(fa,"blur",_),oa.on(fa,"focus",W),oa.on(fa,"mouseleave",X),oa.on(fa,"click",Y),oa.on(fa,"dblclick",Z),oa.on(fa,"paste",T),oa.on(fa,"dragdrop",T),oa.on(fa,"drop",T),oa.on(fa,"cut",$),oa.on(fa,"complete",g.oncomplete),oa.on(fa,"incomplete",g.onincomplete),oa.on(fa,"cleared",g.oncleared),oa.on(fa,"keydown",R),oa.on(fa,"keypress",S),oa.on(fa,"input",U)),oa.on(fa,"setvalue",V),""!==fa.inputmask._valueGet()||g.clearMaskOnLostFocus===!1||document.activeElement===fa){var c=a.isFunction(g.onBeforeMask)?g.onBeforeMask(fa.inputmask._valueGet(),g)||fa.inputmask._valueGet():fa.inputmask._valueGet();J(fa,!0,!1,c.split(""));var e=x().slice();ea=e.join(""),O(e)===!1&&g.clearIncomplete&&n(),g.clearMaskOnLostFocus&&document.activeElement!==fa&&(-1===o()?e=[]:N(e)),H(fa,e),document.activeElement===fa&&L(fa,E(o()))}}var ea,fa,ga,ha,ia,ja=!1,ka=!1,la=!1,ma=!1,na=!0,oa={on:function(c,d,e){var f=function(c){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var d=a.data(this,"_inputmask_opts");d?new b(d).mask(this):oa.off(this)}else{if("setvalue"===c.type||!(this.disabled||this.readOnly&&!("keydown"===c.type&&c.ctrlKey&&67===c.keyCode||g.tabThrough===!1&&c.keyCode===b.keyCode.TAB))){switch(c.type){case"input":if(la===!0)return la=!1,c.preventDefault();break;case"keydown":ka=!1,la=!1;break;case"keypress":if(ka===!0)return c.preventDefault();ka=!0;break;case"click":if(k){var f=this;return setTimeout(function(){e.apply(f,arguments)},0),!1}}var h=e.apply(this,arguments);return h===!1&&(c.preventDefault(),c.stopPropagation()),h}c.preventDefault()}};c.inputmask.events[d]=c.inputmask.events[d]||[],c.inputmask.events[d].push(f),-1!==a.inArray(d,["submit","reset"])?null!=c.form&&a(c.form).on(d,f):a(c).on(d,f)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}};if(void 0!==e)switch(e.action){case"isComplete":return fa=e.el,O(x());case"unmaskedvalue":return fa=e.el,void 0!==fa&&void 0!==fa.inputmask?(f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL):(ia=e.value,g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(ia,g)||ia:ia).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,x(),0,g)),K(fa);case"mask":fa=e.el,f=fa.inputmask.maskset,g=fa.inputmask.opts,ja=fa.inputmask.isRTL,ea=x().join(""),da(fa);break;case"format":return g.numericInput&&(ja=!0),ia=(a.isFunction(g.onBeforeMask)?g.onBeforeMask(e.value,g)||e.value:e.value).split(""),J(void 0,!1,!1,ja?ia.reverse():ia),a.isFunction(g.onBeforeWrite)&&g.onBeforeWrite(void 0,x(),0,g),e.metadata?{value:ja?x().slice().reverse().join(""):x().join(""),metadata:h({action:"getmetadata"},f,g)}:ja?x().slice().reverse().join(""):x().join("");case"isValid":g.numericInput&&(ja=!0),e.value?(ia=e.value.split(""),J(void 0,!1,!0,ja?ia.reverse():ia)):e.value=x().join("");for(var pa=x(),qa=M(),ra=pa.length-1;ra>qa&&!C(ra);ra--);return pa.splice(qa,ra+1-qa),O(pa)&&e.value===x().join("");case"getemptymask":return w().join("");case"remove":fa=e.el,ga=a(fa),f=fa.inputmask.maskset,g=fa.inputmask.opts,fa.inputmask._valueSet(K(fa)),oa.off(fa);var sa;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(sa=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(fa),"value"),sa&&fa.inputmask.__valueGet&&Object.defineProperty(fa,"value",{get:fa.inputmask.__valueGet,set:fa.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&fa.__lookupGetter__("value")&&fa.inputmask.__valueGet&&(fa.__defineGetter__("value",fa.inputmask.__valueGet),fa.__defineSetter__("value",fa.inputmask.__valueSet)),fa.inputmask=void 0;break;case"getmetadata":if(a.isArray(f.metadata)){for(var ta,ua=o(void 0,!0),va=ua;va>=0;va--)if(m().validPositions[va]&&void 0!==m().validPositions[va].alternation){ta=m().validPositions[va].alternation;break}return void 0!==ta?f.metadata[m().validPositions[va].locator[ta]]:[]}return f.metadata}}b.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask(b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",showTooltip:!1,tooltip:void 0,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:null,positionCaretOnTab:!1,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:a.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0},masksCache:{},mask:function(c){var d=this;return"string"==typeof c&&(c=document.getElementById(c)||document.querySelectorAll(c)),c=c.nodeName?[c]:c,a.each(c,function(c,e){var i=a.extend(!0,{},d.opts);f(e,i,a.extend(!0,{},d.userOptions));var j=g(i,d.noMasksCache);void 0!==j&&(void 0!==e.inputmask&&e.inputmask.remove(),e.inputmask=new b,e.inputmask.opts=i,e.inputmask.noMasksCache=d.noMasksCache,e.inputmask.userOptions=a.extend(!0,{},d.userOptions),e.inputmask.el=e,e.inputmask.maskset=j,e.inputmask.isRTL=!1,a.data(e,"_inputmask_opts",i),h({action:"mask",el:e}))}),c&&c[0]?c[0].inputmask||this:this},option:function(b){return"string"==typeof b?this.opts[b]:"object"==typeof b?(a.extend(this.opts,b),a.extend(this.userOptions,b),this.el&&(void 0!==b.mask||void 0!==b.alias?this.mask(this.el):(a.data(this.el,"_inputmask_opts",this.opts),h({action:"mask",el:this.el}))),this):void 0},unmaskedvalue:function(a){return h({action:"unmaskedvalue",el:this.el,value:a},this.el&&this.el.inputmask?this.el.inputmask.maskset:g(this.opts,this.noMasksCache),this.opts)},remove:function(){return this.el?(h({action:"remove",el:this.el}),this.el.inputmask=void 0,this.el):void 0},getemptymask:function(){return h({action:"getemptymask"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return h({action:"isComplete",el:this.el},this.maskset||g(this.opts,this.noMasksCache),this.opts)},getmetadata:function(){return h({action:"getmetadata"},this.maskset||g(this.opts,this.noMasksCache),this.opts)},isValid:function(a){return h({action:"isValid",value:a},this.maskset||g(this.opts,this.noMasksCache),this.opts)},format:function(a,b){return h({action:"format",value:a,metadata:b},this.maskset||g(this.opts,this.noMasksCache),this.opts)}},b.extendDefaults=function(c){a.extend(!0,b.prototype.defaults,c)},b.extendDefinitions=function(c){a.extend(!0,b.prototype.defaults.definitions,c)},b.extendAliases=function(c){a.extend(!0,b.prototype.defaults.aliases,c)},b.format=function(a,c,d){return b(c).format(a,d)},b.unmask=function(a,c){return b(c).unmaskedvalue(a)},b.isValid=function(a,c){return b(c).isValid(a)},b.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},b.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},b.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88};var i=navigator.userAgent,j=/mobile/i.test(i),k=/iemobile/i.test(i),l=/iphone/i.test(i)&&!k;/android.*safari.*/i.test(i)&&!k;return window.Inputmask=b,b}(jQuery),function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return f&&f.inputmask?f.inputmask.hasMaskedValue():!1;case"isComplete":return f&&f.inputmask?f.inputmask.isComplete():!0;case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0!==f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){return void 0!==this.inputmask?this.inputmask.option(d):void 0});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==typeof c)return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(c):void e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({h:{validator:"[01][0-9]|2[0-3]",cardinality:2,prevalidator:[{validator:"[0-2]",cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:"[0-5]",cardinality:1}]},d:{validator:"0[1-9]|[12][0-9]|3[01]",cardinality:2,prevalidator:[{validator:"[0-3]",cardinality:1}]},m:{validator:"0[1-9]|1[012]",cardinality:2,prevalidator:[{validator:"[01]",cardinality:1}]},y:{validator:"(19|20)\\d{2}",cardinality:4,prevalidator:[{validator:"[12]",cardinality:1},{validator:"(19|20)",cardinality:2},{validator:"(19|20)\\d",cardinality:3}]}}),b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return(isNaN(d)?!1:d>=b&&c>=d)||(isNaN(e)?!1:e>=b&&c>=e)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(d>b){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);e+c>b;)e--;var g=e+f;return a>g?a:g}if(d>=a&&b>=d){for(var h=d.toString().slice(0,2);h+c>b;)h--;var i=h+c;return a>i?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);if(!d&&!g&&(a.charAt(1)===e.separator||-1!=="-./".indexOf(a.charAt(1)))&&(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0))))return b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)};if(e.mask.indexOf("2")===e.mask.length-1&&g){var h=b.buffer.join("").substr(4,4)+a;if(h!==e.leapday)return!0;var i=parseInt(b.buffer.join("").substr(0,4),10);return i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}return g},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){if(e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)){var f=b.buffer.join("").substr(0,6);if(f!==e.leapday)return!0;var g=parseInt(a,10);return g%4===0?g%100===0?g%400===0?!0:!1:!0:!1}return!1},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear)){var h=b.buffer.join("").substr(0,6);if(h!==e.leapday)f=!0;else{var i=parseInt(a,10);f=i%4===0?i%100===0?i%400===0?!0:!1:!0:!1}}else f=!1;if(f)return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||-1!=="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,10>g?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a}},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}[.-{1,63}][.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a}},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({numeric:{mask:function(a){function c(b){for(var c="",d=0;d<b.length;d++)c+=a.definitions[b.charAt(d)]||a.optionalmarker.start===b.charAt(d)||a.optionalmarker.end===b.charAt(d)||a.quantifiermarker.start===b.charAt(d)||a.quantifiermarker.end===b.charAt(d)||a.groupmarker.start===b.charAt(d)||a.groupmarker.end===b.charAt(d)||a.alternatormarker===b.charAt(d)?"\\"+b.charAt(d):b.charAt(d);return c}if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=void 0),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var d=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?d-1:d),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),a.radixFocus=a.radixFocus&&""!==a.placeholder&&a.integerOptional===!0,a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",a.numericInput===!0&&(a.radixFocus=!1,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f=c(a.prefix);return f+="[+]",f+=a.integerOptional===!0?"~{1,"+a.integerDigits+"}":"~{"+a.integerDigits+"}",void 0!==a.digits&&(isNaN(a.digits)||parseInt(a.digits)>0)&&(a.decimalProtect&&(a.radixPointDefinitionSymbol=":"),f+=a.digitsOptional?"["+(a.decimalProtect?":":a.radixPoint)+";{1,"+a.digits+"}]":(a.decimalProtect?":":a.radixPoint)+";{"+a.digits+"}"),f+="[-]",f+=c(a.suffix),a.greedy=!1,null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,"."))),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,"."))),f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",radixFocus:!0,groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,postFormat:function(c,d,e){e.numericInput===!0&&(c=c.reverse(),isFinite(d)&&(d=c.join("").length-d-1));var f,g,h=!1;c.length>=e.suffix.length&&c.join("").indexOf(e.suffix)===c.length-e.suffix.length&&(c.length=c.length-e.suffix.length,h=!0),d=d>=c.length?c.length-1:d<e.prefix.length?e.prefix.length:d;var i=!1,j=c[d],k=c.slice();j===e.groupSeparator&&(k.splice(d--,1),j=k[d]),j!==e.radixPoint&&j!==e.negationSymbol.front&&j!==e.negationSymbol.back&&(k[d]="?");var l=k.join(""),m=l;if(l.length>0&&e.autoGroup||-1!==l.indexOf(e.groupSeparator)){var n=b.escapeRegex(e.groupSeparator);i=0===l.indexOf(e.groupSeparator),l=l.replace(new RegExp(n,"g"),"");var o=l.split(e.radixPoint);if(l=""===e.radixPoint?l:o[0],l!==e.prefix+"?0"&&l.length>=e.groupSize+e.prefix.length)for(var p=new RegExp("([-+]?[\\d?]+)([\\d?]{"+e.groupSize+"})");p.test(l)&&""!==e.groupSeparator;)l=l.replace(p,"$1"+e.groupSeparator+"$2"),l=l.replace(e.groupSeparator+e.groupSeparator,e.groupSeparator);""!==e.radixPoint&&o.length>1&&(l+=e.radixPoint+o[1])}for(i=m!==l,c.length=l.length,f=0,g=l.length;g>f;f++)c[f]=l.charAt(f);var q=a.inArray("?",c);if(-1===q&&(q=a.inArray(j,c)),c[q]=j,!i&&h)for(f=0,g=e.suffix.length;g>f;f++)c.push(e.suffix.charAt(f));return q=e.numericInput&&isFinite(d)?c.join("").length-q-1:q,e.numericInput&&(c=c.reverse(),a.inArray(e.radixPoint,c)<q&&c.join("").length-e.suffix.length!==q&&(q-=1)),{pos:q,refreshFromBuffer:i,buffer:c}},onBeforeWrite:function(c,d,e,f){var g;if(c&&("blur"===c.type||"checkval"===c.type||"keydown"===c.type)){var h=f.numericInput?d.slice().reverse().join(""):d.join(""),i=h.replace(f.prefix,"");i=i.replace(f.suffix,""),i=i.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),","===f.radixPoint&&(i=i.replace(f.radixPoint,"."));var j=i.match(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"));if(j=null!==j&&1===j.length,i=i.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),i=i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(i=i.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),i=i===f.negationSymbol.front?i+"0":i,""!==i&&isFinite(i)){var k=parseFloat(i),l=j?-1*k:k;if(null!==f.min&&isFinite(f.min)&&l<parseFloat(f.min)?(k=Math.abs(f.min),j=f.min<0,h=void 0):null!==f.max&&isFinite(f.max)&&l>parseFloat(f.max)&&(k=Math.abs(f.max),j=f.max<0,h=void 0),i=k.toString().replace(".",f.radixPoint).split(""),isFinite(f.digits)){var m=a.inArray(f.radixPoint,i),n=a.inArray(f.radixPoint,h);-1===m&&(i.push(f.radixPoint),m=i.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional||void 0!==i[m+o]&&i[m+o]!==f.placeholder.charAt(0)?-1!==n&&void 0!==h[n+o]&&(i[m+o]=i[m+o]||h[n+o]):i[m+o]="0";i[i.length-1]===f.radixPoint&&delete i[i.length-1]}if(k.toString()!==i&&k.toString()+"."!==i||j)return!j||0===k&&"blur"===c.type||(i.unshift(f.negationSymbol.front),i.push(f.negationSymbol.back)),i=(f.prefix+i.join("")).split(""),f.numericInput&&(i=i.reverse()),g=f.postFormat(i,f.numericInput?e:e-1,f),g.buffer&&(g.refreshFromBuffer=g.buffer.join("")!==d.join("")),g}}return f.autoGroup?(g=f.postFormat(d,f.numericInput?e:e-1,f),g.caret=e<=f.prefix.length?g.pos:g.pos+1,g):void 0},regex:{integerPart:function(a){return new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},signHandler:function(a,b,c,d,e){if(!d&&e.allowMinus&&"-"===a||e.allowPlus&&"+"===a){var f=b.buffer.join("").match(e.regex.integerPart(e));if(f&&f[0].length>0)return b.buffer[f.index]===("-"===a?"+":e.negationSymbol.front)?"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c,insert:{pos:b.buffer.length-e.suffix.length-1,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,remove:f.index,caret:c}:""!==e.negationSymbol.back?{pos:f.index,c:"+",remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c}:{pos:f.index,c:"+",remove:f.index,caret:c}:b.buffer[f.index]===("-"===a?e.negationSymbol.front:"+")?"-"===a&&""!==e.negationSymbol.back?{remove:[f.index,b.buffer.length-e.suffix.length-1],caret:c-1}:{remove:f.index,caret:c-1}:"-"===a?""!==e.negationSymbol.back?{pos:f.index,c:e.negationSymbol.front,caret:c+1,insert:{pos:b.buffer.length-e.suffix.length,c:e.negationSymbol.back}}:{pos:f.index,c:e.negationSymbol.front,caret:c+1}:{pos:f.index,c:a,caret:c+1}}return!1},radixHandler:function(b,c,d,e,f){if(!e&&f.numericInput!==!0&&b===f.radixPoint&&void 0!==f.digits&&(isNaN(f.digits)||parseInt(f.digits)>0)){var g=a.inArray(f.radixPoint,c.buffer),h=c.buffer.join("").match(f.regex.integerPart(f));if(-1!==g&&c.validPositions[g])return c.validPositions[g-1]?{caret:g+1}:{pos:h.index,c:h[0],caret:g+1};if(!h||"0"===h[0]&&h.index+1!==d)return c.buffer[h?h.index:d]="0",{pos:(h?h.index:d)+1,c:f.radixPoint}}return!1},leadingZeroHandler:function(b,c,d,e,f,g){if(!e)if(f.numericInput===!0){var h=c.buffer.slice("").reverse(),i=h[f.prefix.length];if("0"===i&&void 0===c.validPositions[d-1])return{pos:d,remove:h.length-f.prefix.length-1}}else{var j=a.inArray(f.radixPoint,c.buffer),k=c.buffer.slice(0,-1!==j?j:void 0).join("").match(f.regex.integerNPart(f));if(k&&(-1===j||j>=d)){var l=-1===j?0:parseInt(c.buffer.slice(j+1).join(""));if(0===k[0].indexOf(""!==f.placeholder?f.placeholder.charAt(0):"0")&&(k.index+1===d||g!==!0&&0===l))return c.buffer.splice(k.index,1),{pos:k.index,remove:k.index};if("0"===b&&d<=k.index&&k[0]!==f.groupSeparator)return!1}}return!0},definitions:{"~":{validator:function(c,d,e,f,g,h){var i=g.signHandler(c,d,e,f,g);if(!i&&(i=g.radixHandler(c,d,e,f,g),!i&&(i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(c):new RegExp("[0-9]").test(c),i===!0&&(i=g.leadingZeroHandler(c,d,e,f,g,h),i===!0)))){var j=a.inArray(g.radixPoint,d.buffer);i=-1!==j&&(g.digitsOptional===!1||d.validPositions[e])&&g.numericInput!==!0&&e>j&&!f?{pos:e,remove:e}:{pos:e}}return i},cardinality:1},"+":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&(d&&e.allowMinus&&a===e.negationSymbol.front||e.allowMinus&&"-"===a||e.allowPlus&&"+"===a)&&(f=d||"-"!==a?!0:""!==e.negationSymbol.back?{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1,insert:{pos:b.buffer.length,c:e.negationSymbol.back}}:{pos:c,c:"-"===a?e.negationSymbol.front:"+",caret:c+1}),f},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){var f=e.signHandler(a,b,c,d,e);return!f&&d&&e.allowMinus&&a===e.negationSymbol.back&&(f=!0),f},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g=f.signHandler(a,c,d,e,f);
if(!g){var h="["+b.escapeRegex(f.radixPoint)+"]";g=new RegExp(h).test(a),g&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(g={caret:d+1})}return g?{c:f.radixPoint}:g},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),d.unmaskAsNumber?(""!==d.radixPoint&&-1!==e.indexOf(d.radixPoint)&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),Number(e)):e},isComplete:function(a,c){var d=a.join(""),e=a.slice();if(c.postFormat(e,0,c),e.join("")!==d)return!1;var f=d.replace(c.prefix,"");return f=f.replace(c.suffix,""),f=f.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(f=f.replace(b.escapeRegex(c.radixPoint),".")),isFinite(f)},onBeforeMask:function(a,c){if(""!==c.radixPoint&&isFinite(a))a=a.toString().replace(".",c.radixPoint);else{var d=a.match(/,/g),e=a.match(/\./g);e&&d?e.length>d.length?(a=a.replace(/\./g,""),a=a.replace(",",c.radixPoint)):d.length>e.length?(a=a.replace(/,/g,""),a=a.replace(".",c.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),"")}if(0===c.digits&&(-1!==a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!==a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!==c.radixPoint&&isFinite(c.digits)&&-1!==a.indexOf(c.radixPoint)){var f=a.split(c.radixPoint),g=f[1].match(new RegExp("\\d*"))[0];if(parseInt(c.digits)<g.toString().length){var h=Math.pow(10,parseInt(c.digits));a=a.replace(b.escapeRegex(c.radixPoint),"."),a=Math.round(parseFloat(a)*h)/h,a=a.toString().replace(".",c.radixPoint)}}return a.toString()},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b].input,g=f!==e.radixPoint||null!==a.validPositions[b].match.fn&&e.decimalProtect===!1||isFinite(f)||b===c||f===e.groupSeparator||f===e.negationSymbol.front||f===e.negationSymbol.back;return g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({phone:{url:"phone-codes/phone-codes.js",countrycode:"",phoneCodeCache:{},mask:function(b){if(void 0===b.phoneCodeCache[b.url]){var c=[];b.definitions["#"]=b.definitions[9],a.ajax({url:b.url,async:!1,type:"get",dataType:"json",success:function(a){c=a},error:function(a,c,d){alert(d+" - "+b.url)}}),b.phoneCodeCache[b.url]=c.sort(function(a,b){return(a.mask||a)<(b.mask||b)?-1:1})}return b.phoneCodeCache[b.url]},keepStatic:!1,nojumps:!0,nojumpsThreshold:1,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c}},phonebe:{alias:"phone",url:"phone-codes/phone-be.js",countrycode:"32",nojumpsThreshold:4}}),b}(jQuery,Inputmask),function(a,b){return b.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(a,b){return new RegExp(b.regex).test(a.join(""))},definitions:{r:{validator:function(b,c,d,e,f){function g(a,b){this.matches=[],this.isGroup=a||!1,this.isQuantifier=b||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function h(){var a,b,c=new g,d=[];for(f.regexTokens=[];a=f.tokenizer.exec(f.regex);)switch(b=a[0],b.charAt(0)){case"(":d.push(new g(!0));break;case")":k=d.pop(),d.length>0?d[d.length-1].matches.push(k):c.matches.push(k);break;case"{":case"+":case"*":var e=new g(!1,!0);b=b.replace(/[{}]/g,"");var h=b.split(","),i=isNaN(h[0])?h[0]:parseInt(h[0]),j=1===h.length?i:isNaN(h[1])?h[1]:parseInt(h[1]);if(e.quantifier={min:i,max:j},d.length>0){var l=d[d.length-1].matches;a=l.pop(),a.isGroup||(k=new g(!0),k.matches.push(a),a=k),l.push(a),l.push(e)}else a=c.matches.pop(),a.isGroup||(k=new g(!0),k.matches.push(a),a=k),c.matches.push(a),c.matches.push(e);break;default:d.length>0?d[d.length-1].matches.push(b):c.matches.push(b)}c.matches.length>0&&f.regexTokens.push(c)}function i(b,c){var d=!1;c&&(m+="(",o++);for(var e=0;e<b.matches.length;e++){var f=b.matches[e];if(f.isGroup===!0)d=i(f,!0);else if(f.isQuantifier===!0){var g=a.inArray(f,b.matches),h=b.matches[g-1],k=m;if(isNaN(f.quantifier.max)){for(;f.repeaterPart&&f.repeaterPart!==m&&f.repeaterPart.length>m.length&&!(d=i(h,!0)););d=d||i(h,!0),d&&(f.repeaterPart=m),m=k+f.quantifier.max}else{for(var l=0,n=f.quantifier.max-1;n>l&&!(d=i(h,!0));l++);m=k+"{"+f.quantifier.min+","+f.quantifier.max+"}"}}else if(void 0!==f.matches)for(var p=0;p<f.length&&!(d=i(f[p],c));p++);else{var q;if("["==f.charAt(0)){q=m,q+=f;for(var r=0;o>r;r++)q+=")";var s=new RegExp("^("+q+")$");d=s.test(j)}else for(var t=0,u=f.length;u>t;t++)if("\\"!==f.charAt(t)){q=m,q+=f.substr(0,t+1),q=q.replace(/\|$/,"");for(var r=0;o>r;r++)q+=")";var s=new RegExp("^("+q+")$");if(d=s.test(j))break}m+=f}if(d)break}return c&&(m+=")",o--),d}var j,k,l=c.buffer.slice(),m="",n=!1,o=0;null===f.regexTokens&&h(),l.splice(d,0,b),j=l.join("");for(var p=0;p<f.regexTokens.length;p++){var q=f.regexTokens[p];if(n=i(q,q.isGroup))break}return n},cardinality:1}}}}),b}(jQuery,Inputmask);

//THIS FILE PULLS IN ALL OF THE JAVASCRIPT DEPENDENCIES AND THE MODELS FOR EACH FUNCTIONAL AREA



rivets.formatters.price = function(value){
	return formatprice(value);
}

rivets.formatters.totalmaxbidprice = function(value,bid,hasbid,initialbid){
	if(hasbid)
		return formatprice(value - parseInt(initialbid) + parseInt(bid));
	else
		return formatprice(value + parseInt(bid));
}

rivets.formatters.pricelist = function(value){
	var val = value.length * saleItem.highBid;

	return formatprice(val);
}

rivets.formatters.limitprice = function(value, spent, bid){
	var val = value - spent;

	return formatprice(val);
}


function formatprice(amt){
	if(amt === 0) return 0;
	else if(!amt) return null;

	var price;

	if($('#js--body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1<span class="divider"></span>');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '<span class="divider"></span>');

	return price;
}

function formatpriceInput(amt){
	if(amt === 0) return 0;
	else if(!amt) return 0;

	var price;

	if($('#js--body').hasClass('INR')) 
		price = amt.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
	else 
		price = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return price;
}


rivets.formatters.convertPrice = function(value, rate){
	var tempVal = parseFloat(value),
		tempRate = parseFloat(rate),
		convertedVal = tempVal * tempRate;
		convertedVal = convertedVal || 0;
	return "roughly <span class='USD'><span class='CCY'></span><span class='dollars'>" + formatprice(convertedVal.toFixed(0)) + "</span></span>";
}


rivets.formatters.greaterThanToFalse = function(value,comparison){
	if(parseInt(value) > comparison){
		return true;	
	} 
	else return false;
}

rivets.formatters.greaterThanToFalse_bids = function(value,credit,bids,initialbid,hasbid){
	
	if(hasbid && parseInt(value) + (bids - parseInt(initialbid)) > credit){
		if(parseInt(value) > credit) return false;
		return true;
	}
	else if(!hasbid && parseInt(value) + bids > credit){
		if(parseInt(value) > credit) return false;
		return true;	
	} 
	else return false;
}

rivets.formatters.zeroToFalse = function(value){
	if(value > 0) return false;
	else return true;
}

rivets.formatters.zeroOrEmptyToFalse = function(value){
	console.log(value);
	if(value === 0 || value === ''|| isNaN(value)) return false;
	else return true;
}


rivets.formatters.lotPhotoDirectory = function(value){
	return 'assets/js/data/'+value;
} 

rivets.formatters.activeToButtonText = function(value){
	if(!value) return "Off";
	else return "On";
}

rivets.formatters.booltotext = function(value, text){
	if(value) return text + " On";
	else return text + " Off";
}

rivets.formatters.lengthtoquantity = function(value){
	
	return value.length;
}

rivets.formatters.bidderoryou = function(value){
	if(value === user.bidder) return 'You!'
	return value;
}





/********************************
GENERIC BINDERS USED THROUGHOUT
********************************/

rivets.binders.addclass = function(el, value) {
	if(value) $(el).addClass('s-active');
	else $(el).removeClass('s-active');
}

rivets.binders.adderrorclass = function(el, value) {
	if(value) $(el).addClass('s-error');
	else $(el).removeClass('s-error');
}

$(function(){

	//ON LOAD ASSIGN A RANDOM BIDDER NUMBER
	user.bidder = "v" + getRandomInt(7000, 8000);
	user.spent = 0;

	dataController.submitLotChange({lot: 0,source: user.bidder});

	
	$('.js--settings').tooltipster({
		content: $($('.js--settings-content').html()),
		theme: 'ritchie-tooltips',
		interactive: true,
		trigger: "click",
		position: 'bottom-left',
		functionBefore: function(origin, continueTooltip){
			continueTooltip();
			settings.load();
		},
		functionAfter: function(origin){
			settings.unload();
		}
	});
	
 
});

var user = {
		bidder : "v7005",
		limit: 100000, 
		spent: 0,
		bid: 0,
		bidcount: 0,
		message: '',
		audio: true,
		photos: true,
		cart: [], 
	},
	headerController = {

		onDismissMSGClick: function(e, model){
			$('.js--auctioneer-msg').removeClass('s-active');
			setTimeout(function(){
				model.user.message = "";
				clearMessage();
			},1000);
		},

		generateMessage: function(msg){
			user.message = msg;
		},

		addToCart: function(lot){
			user.cart.push(lot);
			user.spent += lot.soldPrice;
			user.bid -= lot.bid;

			sortList(user.cart);
		},

		alertWon: function(obj){
			if(obj.length > 0){
				wonItems.listlength = obj.length;
			}	
			else{
				wonItems.wonItem = obj;
			} 
			loadConfirmModal();
		},

		onToggleCartClick: function(){
			$('.js--cart').toggleClass('s-visible');
		},

		onCartCloseClick: function(){
			$('.js--cart').removeClass('s-visible');
		}

	};



rivets.bind($('.js--header'),{
	user: user,
	headerController: headerController
});

rivets.bind($('.js--main-body'),{
	user: user,
	headerController: headerController
});


var confirmModal,
	wonItems = {
		listlength: 0,
		wonItem: {}
	},
	confirmationController = {
		onDismissClick: function(e, model){
			$('.js--header .js-confirm-object').removeClass('s-active');
			confirmationController.destroyConfirmation();
		},

		destroyConfirmation: function(){
			setTimeout(function(){
				confirmModal.unbind();
				$('.js--header .js-confirm-object').remove();
				wonItems.listlength = 0;
				wonItems.wonItem = {};
			},500);
		}
	}


function loadConfirmModal(){
	$('.js-confirm-object').clone().appendTo('.js--header');

	confirmModal = rivets.bind($('.js--header .js-confirm-object'),{
		wonItems: wonItems,
		confirmationController: confirmationController
	});

	setTimeout(function(){
		$('.js--header .js-confirm-object').addClass('s-active');
	},100);

	setTimeout(function(){
		$('.js--header .js-confirm-object').removeClass('s-active');
		confirmationController.destroyConfirmation();
	},2000);
}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




var settings = {
	load: function(){
		settingsModal = rivets.bind($('.js--settings-object'),{
			user: user,
			headerController: headerController
		});
	},

	unload: function(){
		settingsModal.unbind();
	}
}




/*********************
	FIREBASE
*********************/

var firebase = new Firebase("https://sizzling-inferno-6912.firebaseio.com/"),

	dataController = {
		submitBid: function(isSold){

			var bid = {
				source: user.bidder,
				lot: saleItem.currentLot,
				price: saleItem.price,
				bidder: saleItem.bidder,
				highBid: saleItem.highBid,
				sold: isSold
			};

			dataController.sendBid(bid);
			
		},

		submitCounterBid: function(bid){
			dataController.sendBid(bid);
		},

		sendBid: function(bid){
			if(!bid.highBid) bid.highBid = null;

			firebase.child("bids").update({
				source: bid.source,
				lot: bid.lot,
				price: bid.price,
				bidder: bid.bidder,
				highBid: bid.highBid,
				sold: bid.sold
			})
		},

		clearMessage: function(){
			firebase.child("message").update({
				message : ""
			})
		},

		submitLotChange: function(newlot){
			firebase.child("lot").update({
				lot: newlot.lot,
				source: newlot.source
			}) 
		}
	}

/*************************
	HANDLE BIDS
*************************/

firebase.child("bids").on("value", function(snapshot) {

	controller.incomingBid(snapshot);

});


/****************************************
	HANDLE SENDING AUCITONEER'S MESSAGE
****************************************/

firebase.child("message").on("value", function(snapshot) {

	var message = snapshot.val();
	user.message = message.message;
	
});




/*************************
	HANDLE LOT CHANGES
*************************/

firebase.child("lot").on("value", function(snapshot) {
	var lotchange = snapshot.val();

	//MAKE SURE YOU DIDN'T INITIATE THE LOT CHANGE
	if(lotchange.source === user.bidder) return;
	
	controller.initSaleItem(lotchange.lot);
});





/*********************
	INTERCOM
*********************/
// var intercom = Intercom.getInstance();

// intercom.on('newbid', function(data) {
	
// 	//IF A BID COMES IN, BUT I HAVE A HIGHER PREBID
// 	if(saleItem.prebid >= data.price && data.bidder != user.bidder){ 
// 		//UPDATE THE ITEM WITH THE HIGH BID SUBMITTED BY THE OTHER BIDDER
// 		saleItem.highBid = data.highBid;
// 		saleItem.price = data.price;
		
// 		//THEN PLACE MY COUNTER BID AUTOMATICALLY
// 		controller.placeBid();
// 		return;
// 	}

// 	//ELSE IF I WAS THE HIGH BIDDER AND THE NEW BIDDER ISN'T ME, SHOW OUTBID NOTIFICATION
// 	else if(saleItem.bidder === user.bidder && data.bidder != user.bidder) outBid();
	
//     //IF I'M BIDDING AND I'M IN ANOTHER STATE (WAITING, ETC)
//     if(saleItem.bidstatus != 'disabled' && user.bidder != data.bidder) saleItem.bidstatus = 'active';
	
// 	//SET THE BIDDER TO THE NEW BID VALUES
// 	saleItem.bidder = data.bidder;
// 	saleItem.highBid = data.highBid;
// 	saleItem.price = data.price;

// 	controller.updatePrice();
// });

// intercom.on('sold',function(data){
// 	if(saleItem.bidder === user.bidder) return;
	
// 	controller.sellItem();
// });










$(function(){

});

function bounceActivateButton(){
	$('.js--activate-container').addClass('s-bounce');
	setTimeout(function(){
		$('.js--activate-container').removeClass('s-bounce');
	},400);
}

function outBid(){
	if(saleItem.bidder === user.bidder){
		saleItem.bidstatus = 'active';
		notifyOutbid();
	}

	saleItem.prebid = 0;

	controller.updatePrice();
}

function notifyOutbid(){
	$('.js--outbid').addClass('s-visible');
	setTimeout(function(){
		$('.js--outbid').removeClass('s-visible');
	},5000);
}

/********************************
	SWITCH WHICH LOT IS ACTIVE
*********************************/

function initializeLot(index){
	controller.initSaleItem();
}


var saleItem = {
		"price" : null,
		"highBid" : null,
		"bidder" : '10005',
		"prebid" : 0,
		"financeRate" : 5,
		"financePeriod" : 48,
		"payment" : 100,
		"bidactive" : false,
		"bidstatus" : 'disabled',
		"currentLot" : null,
		"isgroup":false,
		"openOffersList": []
	},

	controller = {
		initSaleItem: function(index){
			$('.js--upper-area').clone().appendTo('.js--middle-section').addClass('s-copy');
			setTimeout(function(){
				$('.js--upper-area.s-copy').addClass('s-hide');
				setTimeout(function(){
					$('.js--upper-area.s-copy').remove();
				},1000);
			},10);

			lotTable.currentLot = index + 1;
    
		    lotInfo.currentLot = index; 

		    saleItem.currentLot = index;

			var currentItem = lotTable.lotList[lotTable.currentLot-1],
				currentGroup = currentItem.group;
			
			saleItem.currentLot = lotTable.currentLot;
			saleItem.price = currentItem.openPrice;
			saleItem.highBid = null;
			saleItem.bidder = null;
			saleItem.bidactive = false;
			saleItem.bidstatus = 'disabled';
			saleItem.prebid = 0;

			dataController.submitBid(false);

			//IF THIS IS PART OF A BIDDING GROUP AND WE'VE NOT INITIALIZED THIS GROUP, INITALIZE THAT
			if(currentGroup > 0 && group.groupnumber != currentGroup){
				
				groupController.initializeGroup(currentGroup);
				saleItem.isgroup = true;

			}
			else if(currentGroup === 0){ 
				saleItem.isgroup = false;
				groupController.destroyGroup();
			}
			
			//IF YOU'VE PLACED A PREBID ON THIS, THEN DON'T ALLOW TO BID UNTIL AMT PASSED
			if(currentItem.bid > 0 && currentItem.bid > currentItem.openPrice){
				saleItem.prebid = currentItem.bid;
				saleItem.bidactive = true;
				saleItem.bidstatus = 'active';
				saleItem.bidder = user.bidder;
				saleItem.highBid = saleItem.price;
				saleItem.price += 500;

				dataController.submitBid(false);
			}
		},

		onActivateClick: function(e, model) {
			controller.activateBidding(model.saleItem.currentLot, model.saleItem.bidactive);
	    },

	    activateBidding: function(targetLot, status){
	    	saleItem.currentLot = targetLot;
	    	saleItem.bidactive = status;
			saleItem.bidstatus = (status)? "active" : "disabled";
	    },

	    onBidClick: function(e, model){
	    	if(!model.saleItem.bidactive){ 
	    		//IF BIDDING ISN'T ACTIVATED, MAKE IT OBVIOUS YOU NEED TO CLICK TO ACTIVATE
	    		bounceActivateButton();
	    		return;
	    	}

	    	switch (model.saleItem.bidstatus){
	    		case 'open-offer':
	    			model.saleItem.bidstatus = 'waiting';

					setTimeout(function(){
						model.saleItem.bidstatus = 'soldYou';
						controller.sellItem();
					},1000);
	    			break;

	    		case 'active':
					model.saleItem.bidstatus = 'waiting';

					setTimeout(function(){
						model.saleItem.bidstatus = 'accepted';
						controller.placeBid();
					},1000);

					break;

				case 'waiting':
					model.saleItem.bidstatus = 'accepted';
					break;

				case 'accepted':
					model.saleItem.bidstatus = 'soldYou';
					break;

				case 'soldYou':
					model.saleItem.bidstatus = 'soldOther';
					break;

				case 'soldOther':
					model.saleItem.bidstatus = 'active';

				default:
					model.saleItem.bidstatus = 'active';
					break;
	    	}

	    },

	    placeBid: function(){
	    	saleItem.bidder = user.bidder;
			saleItem.highBid = saleItem.price;
			saleItem.price += 500;

			dataController.submitBid(false);
			$('.js--outbid').removeClass('s-visible');

			controller.updatePrice();
	    },

	   onOutBid: function(e, model){
	    	outBid();
	    },

	    updatePrice: function(){
	    	ccyconversion.conversion = saleItem.price;
	    	finance.payment = financingCalculation();
	    },

	    onSellClick: function(){
	    	dataController.submitBid(true);
	    	//IF YOU WON THE LOT, SHOW THE RIGHT MESSAGE
	    	controller.sellItem();

	    },

	    incomingBid: function(snapshot){
	    	var bid = snapshot.val();
	    	
	    	//IF YOU'RE INTO OPEN OFFERS RETURN
	    		if(group.isOpenOffers) return;

			//IF THIS LOT SOLD
				if(bid.sold){
					if(bid.source === user.bidder) return;
					controller.sellItem();
					return;
				}

			//IF A BID COMES IN, BUT I HAVE A HIGHER PRE-BID
				if(saleItem.prebid >= bid.price && bid.bidder != user.bidder){ 
					//UPDATE THE ITEM WITH THE HIGH BID SUBMITTED BY THE OTHER BIDDER
					saleItem.highBid = bid.highBid;
					saleItem.price = bid.price;
					
					//THEN PLACE MY COUNTER BID AUTOMATICALLY
					controller.placeBid();
					return;
				}

			//OTHERWISE!!
				//IF I WAS THE HIGH BIDDER AND THE NEW BIDDER ISN'T ME, SHOW OUTBID NOTIFICATION
				if(saleItem.bidder === user.bidder && bid.bidder != user.bidder) outBid();

				//IF I'M BIDDING AND I'M IN ANOTHER STATE (WAITING, ETC), SWITCH TO ACTIVE
			    if(saleItem.bidstatus != 'disabled' && user.bidder != bid.bidder) saleItem.bidstatus = 'active';
				
				//SET THE BIDDER TO THE NEW BID VALUES
				saleItem.bidder = bid.bidder;
				saleItem.highBid = bid.highBid;
				saleItem.price = bid.price;

				controller.updatePrice();

				//COUNTER BIDDER
				counterbidderData.price = bid.price;
				counterbidderData.highBid = bid.highBid;

	    },

	    sellItem: function(){
	    	var youwin = (saleItem.bidder === user.bidder)? true : false;

	    	$('.js--outbid').removeClass('s-visible');

	    	saleItem.bidstatus = (youwin)? 'soldYou': 'soldOther';

	    	//IF WE WERE IN OPEN OFFERS
			if(saleItem.isgroup && saleItem.openOffersList.length > 0){	    		
	    		controller.sellOpenOffers();
	    	}
 
	    	//IF THIS LOT WAS PART OF A GROUP
		    else if(saleItem.isgroup){

	    		group.lotList[findLot(group.lotList,saleItem.currentLot)].soldPrice = saleItem.highBid;

	    		if(youwin){
		    		headerController.addToCart(lotTable.lotList[saleItem.currentLot - 1]);
					headerController.alertWon(lotTable.lotList[saleItem.currentLot - 1]);
				}

	    		setTimeout(function(){
					//MOVE ON TO OPEN OFFERS AFTER 2 SECONDS
					groupController.activateOpenOffers();
				},2000);
				
			}

			//NON GROUP LOTS
			else{
				lotTable.lotList[lotTable.currentLot-1].soldPrice = saleItem.highBid;
				lotTable.lotList[lotTable.currentLot-1].bidder = saleItem.bidder;

				if(youwin){
					headerController.addToCart(lotTable.lotList[lotTable.currentLot-1]);
					headerController.alertWon(lotTable.lotList[lotTable.currentLot-1]);
				}

				setTimeout(function(){
					//MOVE ON TO THE NEXT LOT AFTER 2 SECONDS
					controller.initSaleItem(lotTable.currentLot);
				},5000);
			}
			
	    },

	    sellOpenOffers: function(){
	    	var allSold = true;//CHECKING IF ALL ARE SOLD

    		//SET SOLD PRICE FOR LOTS PURCHASED AND ADD TO CART
    		for(var i =0; i < saleItem.openOffersList.length; i++){ 
    			var soldLot = findLot(lotTable.lotList,saleItem.openOffersList[i]);
    			
    			lotTable.lotList[soldLot].soldPrice = saleItem.highBid;
    			headerController.addToCart(lotTable.lotList[soldLot]);
    		}

    		headerController.alertWon(saleItem.openOffersList);
			
			//SET ALL LOTS IN GROUP TO INACTIVE
			for(var j = 0; j < group.lotList.length; j++){ 
				group.lotList[j].isActive = false;
				if(group.lotList[j].soldPrice === 0) allSold = false;
			}
    		
    		//RESET THE OPEN OFFERS LIST
    		saleItem.openOffersList = [];

    		//MOVE ON TO THE NEXT LOT AFTER 2 SECONDS
    		if(allSold){
	    		setTimeout(function(){
					controller.initSaleItem(group.lotList[group.lotList.length-1].lot);
					$('.js--open-offer').removeClass('s-visible');
				},5000);
			}
			//OR RESUME OPEN OFFER IF NOT ALL SOLD
			else{
				setTimeout(function(){
					groupController.activateOpenOffers();

				},2000);
			}
	    }

	};

rivets.binders.bidstate = function(el, value) {
	$(el).removeClass().addClass('bidding--bid-button');

	switch (value){
		case 'disabled':
			$(el).addClass('s-disabled');
			break;	

		case 'waiting':
			$(el).addClass('s-waiting');
			break;

		case 'accepted':
			$(el).addClass('s-accepted');
			break;			

		case 'soldYou':
			$(el).addClass('s-sold-won');
			break;

		case 'soldOther':
			$(el).addClass('s-sold-lost');
			break;

		case 'open-offer':
			$(el).addClass('s-open-offer');
			break;

		case 'open-offer_disabled':
			$(el).addClass('s-open-offer_disabled');
			break;

		default:
			$(el).addClass('s-active');
			break;
	}
}

rivets.binders.isgroupbidding = function(el, value){
	if(value > 0) $(el).addClass('s-group-active');
	else $(el).removeClass('s-group-active');
}

rivets.binders.oogroupsize = function(el, value){
	if(value.length === 0) $(el).html(" ");
	else if(value.length === 1) $(el).html("1 lot");
	else $(el).html(value.length + " lots");
}

rivets.bind($('.js--bidding-area'),{
	saleItem: saleItem,
	controller: controller
});







$(function(){

	$.ajax({
		method: "GET",
		url: "assets/js/data/lotdata.json",
		dataType: "json", 
		success: function(data){
			buildLotsTable( data );
			buildLotPreview();
		},
		error: function(jqXHR, textStatus){
			console.log(jqXHR.responseText);
			console.log("Request failed: " + textStatus);
		}
	});

	$(document).on('mouseup','.js--watch',function(e){
		e.stopPropagation();
		var index = $(e.currentTarget).data('lot');
		tablecontroller.watchItem(index);
	});

});

var lotTable = {
		allActive: true,
		allCount: 21,
		biddingActive: false,
		biddingCount: 0,
		watchingActive: false,
		watchingCount: 0,
		lotList : {},
		biddingList: {},
		watchingList: {},
		currentLot: null,
		followCurrentLot: true
	},

	tablecontroller = {
		changeTab: function(e, model){
			model.lotTable.allActive = model.lotTable.biddingActive = model.lotTable.watchingActive = false;

			switch ($(e.currentTarget).data('tab')) {
				case 'all':
					model.lotTable.allActive = true;
					break;

				case 'bidding':
					model.lotTable.biddingActive = true;
					break;

				case 'watching':
					model.lotTable.watchingActive = true;
					break;
			}

		},

		onLotClick: function(e, model){
			// if($('body').hasClass('s-prebid-open')) return;
			// createPrebidPopup($(e.currentTarget));
		},

		onWatchClick: function(e, model){
			//var index = $(e.currentTarget).data('lot');
			//watchItem(index);
		},

		watchItem: function(index){
			lotTable.lotList[index-1].watching = !lotTable.lotList[index-1].watching;

			//IF WE JUST STARTED WATCHING, ADD TO WATCHING TABLE
			if(lotTable.lotList[index-1].watching){
				lotTable.watchingList.push(lotTable.lotList[index-1]);
				//SORT THE LIST
				sortList(lotTable.watchingList);
			}
			
			//ELSE REMOVE FROM WATCHING TABLE
			else{
				lotTable.watchingList.splice(findLot(lotTable.watchingList, index),1); 
			}

			//UPDATE THE COUNT AFTERWARDS
			lotTable.watchingCount = lotTable.watchingList.length;

		}
	};

//WHEN WE CHANGE CURRENT LOT, CHECK THE STATUS OF ALL OF THE LOTS AND MAKE SURE THEY'RE RIGHT (SOLD,CURRENT...)
rivets.binders.lotstatus = function(el, value) {
	if($(el).data('bidder') === user.bidder) $(el).addClass('s-youwon');
	if( value > $(el).data('lot') ) $(el).addClass('s-sold').removeClass('s-currentLot');
	else if( value == $(el).data('lot') ) $(el).addClass('s-currentLot').removeClass('s-sold');
	else $(el).removeClass().addClass('lot js--prebid-click');
	return;
}


rivets.bind($('.js-lot-tables'),{
	lotTable: lotTable,
	tablecontroller: tablecontroller
});

function findLot(searchList, index){
	for(var i = 0; i < searchList.length; i++){
		if(searchList[i].lot === index) return i;
	}
}

function buildLotsTable(data){
	
	var lots = data[0].lots,
		bids = [],
		watching = [];

	for (var i = 0; i < lots.length; i++){
		if(lots[i].bid > 0){
			bids.push(lots[i]);
		}
		if(lots[i].watching){
			watching.push(lots[i]);
		}
	}

	//POPULATE ALL OF THE TABLES 
	lotTable.lotList = lots;
	lotTable.biddingList = bids;
	lotTable.watchingList = watching;
	
    //SET THE LOT TABLE COUNT CIRCLE (IN THE LOT TABLE HEADER)
    lotTable.allCount = lots.length;
    lotTable.biddingCount = bids.length;
    lotTable.watchingCount = watching.length;

    controller.initSaleItem(0);
	
}

function sortList(data){
	data.sort(function(a,b) {return a.lot - b.lot});
}











var group = {
		groupnumber: 0,
		length: 0,
		currentLot: 0,
		previewLot: 0,
		isOpenOffers: false,
		lotList: {}
	},
	groupController = {

		initializeGroup: function(currentGroup){

			group.groupnumber = 0;
			group.currentLot = 0;
			group.previewLot = 0;
			group.lotList = [];
			group.isOpenOffers = false;

			var groupLots = [];

			for(var i=lotTable.currentLot-1; i<lotTable.lotList.length; i++){
				if(lotTable.lotList[i].group === currentGroup) groupLots.push(lotTable.lotList[i]);
			}
			group.groupnumber = currentGroup;
			group.lotList = groupLots;
			group.length = groupLots.length;
			group.previewLot = saleItem.currentLot;

		},

		destroyGroup: function(){
			group.groupnumber = 0;
		},
		
		/******************************
		  FOR CLICKING THE CHECKMARK
		*******************************/
		// onActivateClick: function(e, model){
		// 	var currentLot = $(e.currentTarget).data('lot'),
		// 		checked = $(e.currentTarget).is(':checked'); 

		// 	if(!group.isOpenOffers){
				
		// 		if(!checked) group.currentLot = 0;
		// 		else{ 
		// 			group.currentLot = currentLot;
		// 			groupController.updatePreview(currentLot);
		// 		}

		// 		//ACTIVATE BIDDING
		// 		controller.activateBidding(currentLot, checked);
		// 	}
			
		// 	//IF WE'RE IN OPEN OFFERS
		// 	else{
		// 		if(checked) saleItem.openOffersList.push(currentLot);
		// 		else for(var i=0; i<saleItem.openOffersList.length; i++) if(saleItem.openOffersList[i] === currentLot) saleItem.openOffersList.splice(i,1);
		// 	}

		// 	e.stopPropagation();

		// },

		/******************************
		  FOR CLICKING THE WHOLE TILE
		*******************************/
		onActivateClick: function(e, model){
			var currentLot = $(e.currentTarget).data('lot'),
				clickedLot = findLot(group.lotList,currentLot);
			
			//IF WE'RE IN OPEN OFFERS
			if(group.isOpenOffers){
				if( !group.lotList[clickedLot].isActive ){ 
					groupController.updatePreview(currentLot);
					saleItem.openOffersList.push(currentLot);
					group.lotList[clickedLot].isActive = true; 
				}
				else{
					group.lotList[clickedLot].isActive = false; 
					saleItem.openOffersList.splice(findLot(saleItem.openOffersList, currentLot),1);
				}

				saleItem.bidstatus = (saleItem.openOffersList.length > 0)? 'open-offer' : 'open-offer_disabled';
			}

			//IF THIS IS JUST REGULAR BIDDING ON GROUP LOTS
			else{
				if(group.currentLot != 0 && currentLot != group.currentLot){
					e.stopPropagation();
					return;
				} 
				else if(currentLot === group.currentLot){
					group.currentLot = 0;
					group.lotList[clickedLot].isActive = false;
				}
				else{ 
					group.currentLot = currentLot;
					groupController.updatePreview(currentLot);
					group.lotList[clickedLot].isActive = true;
				}

				//ACTIVATE BIDDING
				controller.activateBidding(currentLot, group.lotList[clickedLot].isActive);
			}
			
			e.stopPropagation();

		},

		onPreviewClick: function(e, model){
			var targetLot = $(e.currentTarget).data('lot');
			groupController.updatePreview(targetLot);

			e.stopPropagation();
			
		},

		updatePreview: function(target){
			//DON'T REBUILD THE LOT INFO IF YOU CLICK ON THE SAME ONE AGAIN
			if( target != group.previewLot) buildCurrentLot(target - 1);

			group.previewLot = target; 
		},

		activateOpenOffers: function(){
			notifyOpenOffers();
			group.isOpenOffers = true;
			saleItem.bidstatus = 'open-offer_disabled';
		},

		onSelectAllClick: function(){
			
			saleItem.openOffersList = [];

			for(var i=0; i < group.lotList.length; i++)
				if(group.lotList[i].soldPrice === 0){ 
					saleItem.openOffersList.push( group.lotList[i].lot);
					group.lotList[i].isActive = true; 
				}

			saleItem.bidstatus = 'open-offer';
		}

	};

rivets.binders.itemsold = function(el, value){
	if(value > 0) $(el).addClass('s-sold');
	else $(el).removeClass('s-sold');

	group.currentLot = 0;
}

rivets.binders.itempreview = function(el,value){
	if($(el).data('lot') === value) $(el).addClass('s-preview');
	else $(el).removeClass('s-preview');
}

rivets.binders.itemactive = function(el, value){
	if(value) $(el).addClass('s-active-lot');
	else $(el).removeClass('s-active-lot');
}

rivets.binders.disableothers = function(el, value){
	if(value != 0) $(el).addClass('s-lot-selected');
	else $(el).removeClass('s-lot-selected');
}

rivets.binders.isopenoffers = function(el, value){
	if(value) $(el).addClass('s-open-offers');
	else $(el).removeClass('s-open-offers');
}

rivets.bind($('.js--group-area'),{
	group: group,
	groupController: groupController
});


function notifyOpenOffers(){
	$('.js--open-offer').addClass('s-visible');
	// setTimeout(function(){
	// 	$('.js--open-offer').removeClass('s-visible');
	// },5000);
}

$(function(){

	//CCY CONVERTER CONTROLS
	$('.js--convert-ccy').tooltipster({
		content: $($('.js--convert-ccy--content').html()),
		theme: 'ritchie-tooltips',
		interactive: true,
		trigger: "click",
		position: 'top-right',
		functionBefore: function(origin, continueTooltip){
			continueTooltip();
			loadCCYConverter();
		},
		functionAfter: function(origin){
			unloadCCYConverter();
		}
	});

});

var ccys = {
		"CAD":"1",
		"USD":"0.7",
		"EUR":"0.6",
		"GBP":"0.5",
		"CNY":"4.5",
		"SGD":"0.9",
		"NZD":"1.1",
		"AUD":"1",
		"MXN":"12.5",
		"PLN":"2.8",
		"JPY":"79.5",
		"INR":"46.5",
		"AED":"2.5",
		"ZAR":"11.5"
	},
	ccyModal,
	
	ccyconversion = {
		'active' : false,
		'currentCCY' : 'CAD',
		'rate' : 1,
		'conversion' : saleItem.price,
		'price': saleItem.price
	},
	
	ccycontroller = {
		
		onCCYChange: function(e, model) {			
			model.ccyconversion.currentCCY = $(e.currentTarget).val();
			ccycontroller.update(model.ccyconversion);
			model.ccyconversion.active = true;
	    },

	    onToggleClick: function(e, model){
	    	//model.ccyconversion.active = !model.ccyconversion.active;
	    	ccycontroller.update(model.ccyconversion);
	    },
	    
	    update: function(data) {
	    	data.rate = ccys[data.currentCCY];
			data.conversion = data.rate * saleItem.price;
			
			finance.ccy = data.currentCCY;
	    },

	    onCloseClick: function(e, model){
	    	$('.js--convert-ccy').tooltipster('hide');
	    	unloadCCYConverter();
	    }
	};

rivets.formatters.priceWithCCY = function(value){
	var val = saleItem.price * ccyconversion.rate;
	return "<span class='" + ccyconversion.currentCCY + "'>roughly " + ccyconversion.currentCCY + " <span class='dollars'>" + formatprice(val.toFixed(0)) + '</span></span>';
}

rivets.bind($('.js--converter-output'),{
	ccyconversion: ccyconversion,
	ccycontroller: ccycontroller
});

function loadCCYConverter(){
	ccyModal = rivets.bind($('.js-ccy-object'),{
		ccyconversion: ccyconversion,
		ccycontroller: ccycontroller
	});

	//$('.js--ccy-selector').val(ccyconversion.currentCCY);
}

function unloadCCYConverter(){
	ccyModal.unbind();
}

// function updateCCYConversion(){
// 	// if(ccyconversion.active) $('.js--convert-ccy').html(ccyconversion.currentCCY + ' ' + saleItem.price);
// 	// else $('.js--convert-ccy').html('Convert Currency');

// 	ccyconversion.rate = ccys[ccyconversion.currentCCY];
// 	ccyconversion.conversion = ccyconversion.rate * saleItem.price;
// }

$(function(){

	//FINANCE CALCULATOR CONTROLS
	$('.js--calc-financing').tooltipster({
		content: $($('.js--calculate-payments--content').html()),
		theme: 'ritchie-tooltips',
		interactive: true,
		trigger: "click",
		position: 'top-right',
		functionBefore: function(origin, continueTooltip){
			continueTooltip();
			loadCalculator();
		},
		functionAfter: function(origin){
			unloadCalculator();
		}
	});

});

var	finance = {
		"active" : false,
		"financeRate" : 5.00,
		"financePeriod" : 24,
		"maxFinanceRate" : 15,
		"payment" : 100,
		"ccy": ccyconversion.currentCCY,
		"price": saleItem.price
	},
	financeModal,
	calccontroller = {
		
		onInterestInput: function(e, model){
			switch(e.which) {
		    	case 9:
		    	case 13: // enter
			        cleanupInterestInput();
			        $('.js--finance-period').focus();
			        e.preventDefault();
			        return true;
			        break;

		        case 38: // up
		        	incrementInterest(0.5);
		        	cleanupInterestInput();
			       	e.preventDefault();
			       	return true;
			        break;

		        case 40: // down
		        	incrementInterest(-0.5);
		        	cleanupInterestInput();
		        	e.preventDefault();
			       	return true;
			       	break;

		        default: 

		        	if(e.which != 46 && e.which != 190 && e.which != 188 && e.which > 31 && (e.which < 48 || e.which > 57)) return false;
		        	else return true; // exit this handler for other keys
		    }
		    e.preventDefault();
		},

		onInterestBlur: function(e, model){
			var val = parseFloat($(e.currentTarget).val());
			updateInterest(val);
			cleanupInterestInput();
			finance.active = true;
		},

		onInterestIncrement: function(e, model){
			incrementInterest($(e.currentTarget).data('increment'));
			cleanupInterestInput();
			finance.active = true;
		},

		onPeriodUpdate: function(e, model){
			model.finance.financePeriod = $(e.currentTarget).val();
			model.finance.payment = financingCalculation();
			finance.active = true;
		},
		
		onToggleClick: function(e, model){
	    	//model.finance.active = !model.finance.active;
	    },

	    onCloseClick: function(e, model){
	    	$('.js--calc-financing').tooltipster('hide');
	    	unloadCalculator();
	    }

	};

	//INIT THE CORRECT PAYMENT PRICE
	finance.payment = financingCalculation();

	//INIT CLEAN INTEREST RATE INPUT DISPLAY
	cleanupInterestInput();

rivets.formatters.convertedPrice = function(value){
	var tempVal = parseFloat(value),
		convertedVal = tempVal * ccyconversion.rate;
	if(ccyconversion.active) return "<span class='"+ ccyconversion.currentCCY +"'><span class='CCY'></span><span class='dollars'>" + formatprice(convertedVal.toFixed(2)) + "</span> per month</span>";
	else return ccyconversion.currentCCY + " <span class='dollars'>" + formatprice(tempVal.toFixed(2)) + "</span> per month";
}

rivets.bind($('.js--calculator-output'),{finance: finance});


function loadCalculator(){
	financeModal = rivets.bind($('.js-financing-object'),{
			finance: finance,
			calccontroller : calccontroller
		});

	cleanupInterestInput();

	if(!finance.active) $('.js--toggle-calculation').removeClass('s-negative').html('TURN ON');
	else $('.js--toggle-calculation').addClass('s-negative').html('TURN OFF');
}

function unloadCalculator(){
	financeModal.unbind();
}


//HANDLE INTEREST RATE INCREMENTS (+/- Button presses)
function incrementInterest(val){
	var tempValue = parseFloat(finance.financeRate),
		increment = parseFloat(val);
	
	updateInterest(tempValue + increment);
}

//ADJUST INTEREST RATE
function updateInterest(val){
	
	if(val < 0) finance.financeRate = 0;
	
	else if(val >= finance.maxFinanceRate) finance.financeRate = finance.maxFinanceRate;
	
	else finance.financeRate = val;

	finance.payment = financingCalculation();
}

//TIDY UP DISPLAY OF INTEREST RATE
function cleanupInterestInput(){
	var val = parseFloat($('.js--finance-interest').val());
	$('.js--finance-interest').val(val.toFixed(2) + "%");
}



function financingCalculation(){
	var amt = saleItem.price,
		adjustedInterest = (finance.financeRate/100)/12,
		monthly = amt * ((adjustedInterest * Math.pow((1 + adjustedInterest),finance.financePeriod)) / (Math.pow((1 + adjustedInterest),finance.financePeriod) - 1));

	if(adjustedInterest === 0) monthly = amt/finance.financePeriod; //IF 0% FINANCING, JUST DIVIDE PRICE BY TOTAL PERIOD

	return monthly.toFixed(2);
}





$(function(){

	$(document).on('mouseup','.js--prebid-click',function(e){
		if($('body').hasClass('s-prebid-open')) return;
		createPrebidPopup($(e.currentTarget));
	});

});

function createPrebidPopup(el){
	var index = $(el).data('lot');

	$(el).addClass('s-active-prebid');

	$(el).tooltipster({
		content: $($('.js--prebid-toggle--content').html()),
		theme: 'ritchie-tooltips-footed',
		interactive: true,
		trigger: "click",
		position: 'bottom',
		functionBefore: function(origin, continueTooltip){
			continueTooltip();
			loadPreBidTooltip(index);
			//$(origin.tooltipster('elementTooltip')).find('input').focus();
		},
		functionAfter: function(origin){
			origin.tooltipster('destroy');
			prebidModal.unbind();
			$('.s-active-prebid').removeClass('s-active-prebid');
			$('body').removeClass('s-prebid-open');
		}
	});
	
}

function killPrebidModal(){
	$('.s-active-prebid').removeClass('s-active-prebid').tooltipster('destroy');
	$('body').removeClass('s-prebid-open');
}

var prebidModal,

	prebid = {
		lot: {},
		bid: 0,
		index: 0,
		bidActive: false,
		conversionActive: false,
		conversion: 0
	},

	prebidController = {
		bid: function(e, model){
			
			//IF WE'RE NOT ALREADY BIDDING ON THIS ITEM
			if(!model.prebid.bidActive){
				//ADD THIS ITEM TO THE BIDDING TABLE
				lotTable.biddingList.push(lotTable.lotList[model.prebid.index]);
				sortList(lotTable.biddingList);

				//UPDATE THE COUNT AFTERWARDS
				lotTable.biddingCount = lotTable.biddingList.length;
			}

			lotTable.lotList[model.prebid.index].bid = model.prebid.bid;
			model.prebid.bidActive = (model.prebid.bid > 0) ? true : false;

			killPrebidModal();
		},

		delete: function(e, model){
			model.prebid.bid = 0;
			lotTable.lotList[model.prebid.index].bid = 0;
			model.prebid.bidActive = false;
			
			//REMOVE THIS ITEM FROM THE BIDDING LIST
			lotTable.biddingList.splice(findLot(lotTable.biddingList, model.prebid.index + 1),1);
			//for(var i = 0; i < lotTable.biddingList.length; i++) if(lotTable.biddingList[i].lot === model.prebid.index + 1) lotTable.biddingList.splice(i,1);

			//UPDATE THE COUNT AFTERWARDS
			lotTable.biddingCount = lotTable.biddingList.length;

			killPrebidModal();
		},

		onFocus: function(e, model){
			$(e.currentTarget)
				.one('mouseup', function () {
            		$(this).select();
            		return false;
        		})
        		.select();
		},

		onKeyPress: function(e, model){
			switch(e.which) {
		    	case 9://tab
		    		$(e.currentTarget).next().focus();
			        e.preventDefault();
			        return true;
			        break;

		    	case 13: // enter
			        prebidController.bid(e,model);
			        e.preventDefault();
			        return true;
			        break;

		        default: 

		        	if(e.which != 46 && e.which != 190 && e.which > 31 && (e.which < 48 || e.which > 57)) return false;
		        	else return true; // exit this handler for other keys
		    }
		    e.preventDefault();
		},

	    onCloseClick: function(e, model){
	    	killPrebidModal();
	    }
	};

rivets.formatters.convertedPrebid = function(value){
	var tempVal = parseFloat(value),
		convertedVal = tempVal * ccyconversion.rate;
	
	return "<span class='" + ccyconversion.currentCCY + "'><span class='convertCCY'>" + ccyconversion.currentCCY + "</span> <span class='dollars'>" + formatprice(convertedVal.toFixed(0)) + "</span></span>";
}

function loadPreBidTooltip(index){
	prebidModal = rivets.bind($('.js--pre-bid-object'),{
		prebid: prebid,
		prebidController : prebidController
	});

	$('body').addClass('s-prebid-open');

	prebid.lot = lotTable.lotList[findLot(lotTable.lotList, index)];
	prebid.conversionActive = ccyconversion.active;
	prebid.conversion = ccyconversion.rate;
	prebid.index = index - 1;
	prebid.bid = lotTable.lotList[index-1].bid;
	prebid.bidActive = (prebid.bid > 0)? true : false;

}

var lotInfo = {
    currentLot: null
  };

rivets.binders.currentlot = function(e, value){
  buildCurrentLot(value);
}

rivets.bind($('.js--lot-info'),{
  lotInfo: lotInfo
}); 


//BUILD THE DISPLAY FOR THE CURRENT LOT INFO
function buildCurrentLot(index){
  var currentLot = lotTable.lotList[index],
    template2 = $('#currentlot').html();

    if(!currentLot) return;

  var rendered = Mustache.render(template2, currentLot);
  $('.js--lot-info').html(rendered);  

  var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: 'true',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoHeight: true
    })
}

var counterbidderData = {
	    currentLot: 1,
	    price: saleItem.price,
	    highBid: saleItem.highBid
	},
	counterbidder = {
		onBidClick: function(e, model){
			if(!saleItem.highBid) saleItem.highBid = 9500;

			var newBid = {
				source: '10005',
				lot: saleItem.currentLot,
				price: saleItem.price + 500,
				bidder: '10005',
				highBid: saleItem.highBid + 500,
				sold: false
			};

			dataController.submitCounterBid(newBid);
		},

		onLotClick: function(e, model){
			var newlot = {
				lot: $(e.currentTarget).data('lot'),
				source: user.bidder
			}

			counterbidderData.currentLot = newlot.lot + 1;

			dataController.submitLotChange(newlot);
		},

		onSellClick: function(e, model){
			var newBid = {
				source: '10005',
				lot: saleItem.currentLot,
				price: saleItem.price,
				bidder: saleItem.bidder,
				highBid: saleItem.highBid,
				sold: true
			};

			counterbidderData.currentLot = newBid.lot + 1;

			dataController.submitCounterBid(newBid);
		},

		onMessageClick: function(e, model){
			firebaseMsg.update({
				message : "This is the auctioneer's message - how do you like me now"
			})
		}

	}

rivets.bind($('.js--counter-bidder'),{
  counterbidderData: counterbidderData,
  counterbidder: counterbidder
});  

$(function(){

	$(document).on('mouseup','.js--max-bid-tooltip',function(e){
		loadMaxBidTooltip($(e.currentTarget));
	});

	$('.js-tooltip-ooo').tooltipster({
		content: $('<p>Sold Out Of Order</p>'),
		theme: 'ritchie-tooltips_small',
		delay: tooltipDelay,
		position: 'bottom'
	});

	$('.js--ppl-tooltip').tooltipster({
		content: $($('.js--tooltip-ppl').html()),
		theme: 'ritchie-tooltips_small',
		delay: tooltipDelay,
		touchDevices: false,
		position: 'bottom'
	});

	$('.js--audio-tooltip').tooltipster({
		content: $($('.js--tooltip-audio').html()),
		theme: 'ritchie-tooltips_small',
		delay: tooltipDelay,
		touchDevices: false,
		position: 'bottom'
	});

	$('.js--photo-tooltip').tooltipster({
		content: $($('.js--tooltip-photos').html()),
		theme: 'ritchie-tooltips_small',
		delay: tooltipDelay,
		touchDevices: false,
		position: 'bottom'
	});

	$('.js--cart-tooltip').tooltipster({
		content: $($('.js--tooltip-cart').html()),
		theme: 'ritchie-tooltips_small',
		delay: tooltipDelay,
		touchDevices: false,
		position: 'bottom'
	});

	$('.js--auctioneer-msg-button').click(function(){
		user.message = auctioneerMessages[Math.floor(Math.random() * auctioneerMessages.length)];
	});

	$('.js--logo-swap').click(function(){
		var $next = $('.js--logo .s-active').attr('class','').next('svg');
		if ($next.length) $next.attr('class','s-active'); 
		else $(".js--logo svg:first").attr('class','s-active'); 

	});

	$('.js--goToOpenOffers').click(function(){
		bidObject.openOffer = !bidObject.openOffer;
		bidModeIndex = (bidModeIndex + 1 < bidMode.length)? bidModeIndex + 1 : 0;
		bidObject.bidMode = bidMode[bidModeIndex];
	});

	//SHOW/HIDE THE PREVIEW IMAGE IN THE LOT TABLE
	$('.js--lot-preview-hover').mouseover(function(e){
		var offset = $(e.currentTarget).offset();
		$('.js--preview-photo').addClass('s-visible').css({"top":(offset.top + 8) + "px", "left": (offset.left - 220) +"px"}); 
	}).mouseout(function(e){
		$('.js--preview-photo').removeClass('s-visible');
	});


	$('.js-expander-toggle').click(function(e){
		$(e.currentTarget).parent().toggleClass('s-expanded');
	});

	//FINANCE CALCULATOR FORMATTING ON INIT
	//INIT THE CORRECT PAYMENT PRICE
	finance2.payment = financingCalculation2();

	//INIT CLEAN INTEREST RATE INPUT DISPLAY
	cleanupInterestInput2();


	$('.js--open-ccyconverter').click(function(){
		$('.js--calc-modal').addClass('s-shown');
		$('.js--ccy-converter').addClass('s-expanded');
		ccyconversion2.editing = true;
	});

	$('.js--open-financecalc').click(function(){
		$('.js--calc-modal').addClass('s-shown');
		$('.js--finance-calc').addClass('s-expanded');
	});

	$('.js--close-calc').click(function(){
		$('.js--calc-modal').removeClass('s-shown');
		$('.js--finance-calc, .js--ccy-converter').removeClass('s-expanded');
	});

	// window.onbeforeunload = function(){
 //    	location.assign('http://www.google.com');
 //    	return "Woah! You've won 6 lots.\n\nTo see a summary of your purchases, stay on this page and click on the shopping cart.";
 //    } 

});

var tooltipDelay = 500,
	auctioneerMessages = [
			"This is the auctioneer's message",
			"Avast! As in Avast ye mateys! What the hell does Avast mean and where did it come from?",
			"Arrg. What does Arrg mean and why did so many pirates say that?",
			"How much wood would a wood chuck chuck if a wood chuck could chuck wood?",
			"She sells sea shells by the sea shore",
			"My Mum tries to be cool by saying that she likes all the same things that I do.",
			"If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?",
			"Wednesday is hump day, but has anyone asked the camel if he's happy about it?"
		],
	bidMode = [ 'normal', 'open-offer', 'runner-up', 'winners-choice' ],
	bidModeIndex = 0;


function loadMaxBidTooltip(target){
	var parent = $(target).parents('.lot');
	parent.addClass('s-selected');
	
	//FINANCE CALCULATOR CONTROLS
	$(target).tooltipster({
		content: $($('.js--max-bid-content').html()),
		theme: 'ritchie-tooltips_full',
		interactive: true,
		trigger: "click",
		position: 'top-right',
		functionBefore: function(origin, continueTooltip){
			continueTooltip();
			
			maxbidObject.lotNumber = parent.find('.col-0').text();
			maxbidObject.lotName = parent.find('.col-2a').text();
			maxbidObject.lotSerial = parent.find('.col-2b').text();
			maxbidObject.lotMeter = parent.find('.col-2c').text();

			maxbidObject.totalMaxBids = user.bid;
			maxbidObject.hasMaxBid = (target.data('bid') > 0) ? true : false;
			maxbidObject.initialBid = (target.data('bid') > 0) ? target.data('bid') : 0;
			maxbidObject.maxbidAmount = (target.data('bid') > 0) ? target.data('bid') : '';
			
			financeModal = rivets.bind($('.js--max-bid-object'),{
				maxbidObject: maxbidObject,
				maxbidController : maxbidController
			});

			$('.js--max-bid-field').val(maxbidObject.maxbidAmount).autoNumeric('init',{
				aSep: ',', 
				aDec: '.',
				mDec: 0
			});

			// $('.js--max-bid-field').inputmask("numeric", {
			//     radixPoint: ".",
			//     groupSeparator: ",",
			//     digits: 2,
			//     autoGroup: true,
			//     prefix: '', //Space after $, this will not truncate the first character.
			//     rightAlign: false,
			//     oncleared: function () { self.Value(''); }
			// });

			//console.log(maxbidObject.initialBid);

			$('.js--max-bid-field').focus().removeClass('s-error');
		},
		functionAfter: function(origin){
			unloadMaxBidTooltip(target);
		}
	});
}

function unloadMaxBidTooltip(target){
	$(target).parents('.lot').removeClass('s-selected');
}
	
	var maxbidObject = {
		"lotNumber" : '0',
		"lotName" : '0',
		"lotSerial" : '0',
		"lotMeter" : '0',
		"totalMaxBids" : user.bid,
		"remainingCredit" : user.limit,
		"maxbidAmount" :0,
		"hasMaxBid": false,
		"initialBid" : 0,
		"conversion" : 1.53,
		"offIncrement" : false,
		"offIncrement_high": 0,
		"offIncrement_low": 0,
		"isValid": true
	},
	maxbidModal,
	maxbidController = {

		onCloseClick: function(e, model){
			maxbidController.killtooltip();
	    },

	    onSetClick: function(e,model){
	    	maxbidController.createMaxBid();
	    },

	    onSetLowClick: function(e,model){
	    	maxbidObject.maxbidAmount = maxbidObject.offIncrement_low;
	    	maxbidController.createMaxBid();
	    },

	    onSetHighClick: function(e,model){
	    	maxbidObject.maxbidAmount = maxbidObject.offIncrement_high;
	    	maxbidController.createMaxBid();
	    },

	    clearWarningClick: function(e,model){
			maxbidObject.maxbidAmount = '';
			$('.js--max-bid-field').autoNumeric('set', 0).focus().select();
	    },

	    onMaxBidInput: function(e, model){
	    	
		},

		onMaxBidChange: function(e,model){
			console.log('test');

			$(e.currentTarget).removeClass('s-error');

	    	maxbidObject.offIncrement = false; //HIDE INCREMENT WARNING WHEN YOU START TO TYPE AGAIN
	    	
	    	maxbidObject.maxbidAmount = parseInt($(e.currentTarget).val().split(',').join(''));

			switch(e.which){
				case 13://ENTER
					if(maxbidObject.maxbidAmount === 0) return;
					maxbidController.createMaxBid();
					break;
				case 9://TAB
					$('.js--set-maxbid').focus();
					break;
			}
		},

	    onMaxBidBlur: function(e,model){

	    },

	    incrementMaxBid: function(amt){
	    	var intAmt =  (maxbidObject.maxbidAmount === '') ? 0 : parseInt(maxbidObject.maxbidAmount);
	    	//console.log(intAmt);
	    	maxbidObject.maxbidAmount = (intAmt + amt < 0)? 0: intAmt + amt;
	    },

	    createMaxBid: function(){
	    	if(maxbidObject.maxbidAmount > user.limit){
	    		$('.js--max-bid-field').addClass('s-error').focus().select();
	    		return;
	    	}

	    	//IF THIS IS OFF INCREMENT POLICY
	    	if(maxbidObject.maxbidAmount % 1000 != 0){
	    		$('.js--max-bid-field').addClass('s-error').focus().select();
	    		maxbidObject.offIncrement = true;
	    		maxbidObject.offIncrement_low = Math.floor(maxbidObject.maxbidAmount/1000)*1000;
	    		maxbidObject.offIncrement_high = Math.ceil(maxbidObject.maxbidAmount/1000)*1000;
	    		return;
	    	}

	    	maxbidObject.offIncrement = false;

	    	$('.js--max-bid-tooltip.tooltipstered').data('bid',maxbidObject.maxbidAmount).html("<span class='dollars'>"+formatprice(maxbidObject.maxbidAmount)+"</span>");
	    	maxbidController.updateBids();
	    	maxbidController.killtooltip();
	    },

	    updateBids: function(){
	    	user.bid = 0;
	    	var i = 0;

	    	$('.js--max-bid-tooltip').each(function(){
	    		var tempbid = parseInt($(this).data('bid'));
	    		if(tempbid > 0){
	    			user.bid += tempbid; 
	    			i++;
	    		}
	    	})

	    	user.bidcount = i;
	    },

	    cancelMaxBid: function(amt){
	    	$('.js--max-bid-tooltip.tooltipstered').data('bid',0).text('');
	    	maxbidController.updateBids();
	    	maxbidController.killtooltip();
	    },

	    killtooltip: function(){
	    	$('.js--max-bid-tooltip.tooltipstered').tooltipster('destroy');
	    	unloadMaxBidTooltip();
	    }

	};

rivets.formatters.validateBid = function(value,offIncrement,bids,credit){
	if(parseInt(bids) > credit || offIncrement){
		return true;	
	} 
	else return false;
}



//SIMPLE BIDDING PROTOTYPE
	
	var bidObject = {
		"lotSelected": 0,
		"bidStatus": 'disabled',
		"bidder" : 'v10005',
		"location" : 'TX, USA',
		"askPrice" : 10000,
		"bidPrice" : 7500,
		"bidMode" : 'normal',
		"openOffer" : false,
		"selectAll" : false,
		"previewLot" : 11,
		"disabledClickCount" : 0
	}, 
	bidController = {

		activate: function(e, model){
			
			var target = $(e.currentTarget).parent().parent().data('lotnumber');
			
			if(bidObject.lotSelected == target){
				//console.log(bidObject.lotSelected, target);
				bidObject.lotSelected = 0;
				bidObject.bidStatus = 'disabled';
				return;
			}
			else bidObject.lotSelected = target;
			bidObject.bidStatus = 'active'; 

			//RESET WARNING TO SELECT A LOT BEFORE BIDDING
			bidObject.disabledClickCount = 0;
		},

		changePreview: function(e, model){
			var targetLot = ($(e.currentTarget).data('lotnumber')) - 1;
			if(targetLot === lotObject.lot) return;

			lotObject.lot = bidObject.previewLot = targetLot;
		},

		onBidClick: function(e, model){
			//IF NO LOT SELECTED, DON'T DO NOTHING
			if(bidObject.lotSelected === 0){
				bidObject.disabledClickCount ++;
				setTimeout(function(){bidObject.disabledClickCount = 0;},1000);
				return;
			}

			switch(bidObject.bidStatus){
				case "disabled":
					bidObject.bidStatus = 'active';
					break;

				case "active":
					bidObject.bidStatus = 'waiting';
					break;

				case "waiting":
					bidObject.bidStatus = 'accepted';
					break;

				case "accepted":
					bidObject.bidStatus = 'outbid';
					break;

				case "outbid":
					bidObject.bidStatus = 'soldYou';
					break;

				case "soldYou":
					bidObject.bidStatus = 'tooLate';
					break;

				case "tooLate":
					bidObject.bidStatus = 'limitExceeded';
					break;

				case "limitExceeded":
					bidObject.bidStatus = 'backedUp';
					break;

				case "backedUp":
					bidObject.bidStatus = 'inactive';
					break;

				case "inactive":
					bidObject.bidStatus = 'notInCatalog';
					$('.js--not-in-catalog').addClass('s-visible');
					break;

				case "notInCatalog":
					bidObject.bidStatus = 'maxBidding';
					$('.js--not-in-catalog').removeClass('s-visible');
					break;

				case "maxBidding":
					bidObject.bidStatus = 'disabled';
					break;

				case "soldOther":
					bidObject.bidStatus = 'open-offer';
					break;

				case "open-offer":
					bidObject.bidStatus = 'disabled';
					break;
				
				default:
					bidObject.bidStatus = 'disabled';
			}
		},

		bidSubmitted: function(){
			setTimeout(function(){
				bidController.outbid();
			},3000);
		},

		outbid: function(){
			$('.js--outbid').addClass('s-active');
			setTimeout(function(){
				$('.js--outbid').removeClass('s-active');
			},3000);
		},

		onSelectAllClick: function(e, model){
			bidObject.selectAll = !bidObject.selectAll;
			if(bidObject.selectAll){ 
				$('.js--group-lot:not(.s-out):not(.s-sold)').addClass('s-active-lot').find('input').prop("checked", "checked");
				bidObject.lotSelected = 99;
				bidObject.bidStatus = 'active';
			}
			else {
				$('.js--group-lot').removeClass('s-active-lot').find('input').prop("checked", "");
				bidObject.lotSelected = 0;
				bidObject.bidStatus = 'disabled';
			} 
		}

	};

	rivets.formatters.equals = function(value, arg){
		return value === arg;
	}

	rivets.binders.lotactive = function(el, value){
		if(value === 99) return;
		if(value == $(el).data('lotnumber')) $(el).addClass('s-active-lot');
		else $(el).removeClass('s-active-lot');

	}

	rivets.binders.lotpreview = function(el, value){
		if(value === 99) return;
		if(value == $(el).data('lotnumber') - 1) $(el).addClass('s-preview');
		else $(el).removeClass('s-preview');
	}

	rivets.binders.isopenoffers = function(el, value){
		
		if(value) $(el).addClass('s-open-offers');
		else $(el).removeClass('s-open-offers');

	}

	rivets.binders.activatewarning = function(el, value) {
		if(value > 0) $(el).addClass('s-flash');
		else $(el).removeClass('s-flash');
	}

	rivets.binders.biddingmode = function(el, value) {
		$(el).removeClass('s-normal s-open-offers s-runnerup s-winner');

		switch (value){
			case 'normal':
				$(el).addClass('s-normal');
				break;

			case 'open-offer':
				$(el).addClass('s-open-offers');
				break;

			case 'runner-up':
				$(el).addClass('s-runnerup');
				break;

			case 'winners-choice':
				$(el).addClass('s-winner');
				break;

			default:
				$(el).addClass('s-normal');
				break;
		}
	}

	rivets.binders.lotbidstate = function(el, value) {
		$(el).removeClass().addClass('bidding--bid-button');
		
		switch (value){
			case 'disabled':
			case 'waiting':
			case 'accepted':
			case 'soldYou':
			case 'limitExceeded':
			case 'inactive':
			case 'maxBidding':
			case 'notInCatalog':
				$(el).addClass('s-disabled');
				break;

			case 'outbid':
			case 'backedUp':
				$(el).addClass('s-active');
				break;

			default:
				$(el).addClass('s-active');
				break;
		}

	},

	bidArea = rivets.bind($('.js--bid-area'),{
		bidObject: bidObject,
		bidController : bidController
	});


 
 	var lotObject = {
			lot: bidObject.previewLot,
		},
		lotArea;


	rivets.binders.lotpreviews = function(el,value){
		$(el).html('');

		var newLotData = lotTable.lotList[value];
		var template3 = $('#currentlot').html();
		var newLot = Mustache.render(template3, newLotData);
		$(el).html(newLot);

		//Init image scrolling on the preview image
		buildSwiper();
	}

	function buildLotPreview(){
		lotArea = rivets.bind($('.js--lot-info'),{
			lotObject: lotObject
		});
	}

	function buildSwiper(){
		var mySwiper = new Swiper ('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			pagination: '.swiper-pagination',
			paginationClickable: 'true',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoHeight: true,
			onSlideChangeEnd: function(mySwiper){
				$('.js--swiper-active').text($('.swiper-slide-active').data('swiper-slide-index')+1);

			}
		})
	}



//CCY CONVERTER

var ccys = {
		"CAD":"1",
		"USD":"0.7",
		"EUR":"0.6",
		"GBP":"0.5",
		"CNY":"4.5",
		"SGD":"0.9",
		"NZD":"1.1",
		"AUD":"1",
		"MXN":"12.5",
		"PLN":"2.8",
		"JPY":"79.5",
		"INR":"46.5",
		"AED":"2.5",
		"ZAR":"11.5"
	},
	
	ccyconversion2 = {
		'active' : false,
		'currentCCY' : 'CAD',
		'rate' : 1,
		'conversion' : bidObject.askPrice,
		'price': bidObject.askPrice,
		'editing': false
	},
	
	ccycontroller2 = { 
		
		onCCYChange: function(e, model) {			
			ccyconversion2.currentCCY = $(e.currentTarget).val();
			ccycontroller2.update(ccyconversion2);
			ccyconversion2.active = true;
			ccyconversion2.editing = false;
	    },

	    ccyChange: function(e,model){
	    	ccyconversion2.currentCCY = $(e.currentTarget).data('ccy');
			ccycontroller2.update(ccyconversion2);
			ccyconversion2.active = true;
			ccyconversion2.editing = false;
	    },

		onToggleClick: function(e, model){
	    	console.log('test');
	    	ccyconversion2.editing = !ccyconversion2.editing;
	    },
	    
	    update: function(data) {
	    	data.rate = ccys[data.currentCCY];
			data.conversion = data.rate * bidObject.askPrice;
			
			ccyconversion2.active = true;
			finance2.ccy = data.currentCCY;
			finance2.payment = 0; //force refresh of the CCY in the finance calculator
			finance2.payment = financingCalculation2();

	    },

	    onCloseClick: function(e, model){
	    	$('.js--convert-ccy').tooltipster('hide');
	    	unloadCCYConverter();
	    }
	};

rivets.formatters.priceWithCCYs = function(value){
	var val = bidObject.askPrice * ccyconversion2.rate;
	return "<span class='" + ccyconversion2.currentCCY + "'><span class='dollars'>" + formatprice(val.toFixed(0)) + '</span><span class="CCY"></span><span class="auction-ccy-flag"></span></span>';
}

rivets.binders.activeccy = function(el, value){
	$(el).children('.s-active').removeClass('s-active');
	$(el).find('.'+value).addClass('s-active');
}

rivets.binders.activetoggle = function(el, value){
	if(value) $(el).addClass('s-active');
	else $(el).removeClass('s-active');
}

rivets.bind($('.js--converter-outputz'),{
	ccyconversion2: ccyconversion2,
	ccycontroller2: ccycontroller2
});



// FINANCE CALCULATOR

var	finance2 = {
		"active" : false,
		"financeRate" : 5.00,
		"financePeriod" : 24,
		"maxFinanceRate" : 15,
		"payment" : 100,
		"ccy": ccyconversion2.currentCCY,
		"price": bidObject.askPrice,
		"editing": false
	},
	calccontroller2 = {
		
		onInterestInput: function(e, model){
			switch(e.which) {
		    	case 9:
		    	case 13: // enter
			        cleanupInterestInput2();
			        $('.js--finance-period').focus();
			        e.preventDefault();
			        return true;
			        break;

		        case 38: // up
		        	incrementInterest2(0.5);
		        	cleanupInterestInput2();
			       	e.preventDefault();
			       	return true;
			        break;

		        case 40: // down
		        	incrementInterest2(-0.5);
		        	cleanupInterestInput2();
		        	e.preventDefault();
			       	return true;
			       	break;

		        default: 

		        	if(e.which != 46 && e.which != 190 && e.which != 188 && e.which > 31 && (e.which < 48 || e.which > 57)) return false;
		        	else return true; // exit this handler for other keys
		    }
		    e.preventDefault();
		},

		onInterestBlur: function(e, model){
			var val = parseFloat($(e.currentTarget).val());
			updateInterest2(val);
			cleanupInterestInput2();
			finance2.active = true;
		},

		onInterestIncrement: function(e, model){
			incrementInterest2($(e.currentTarget).data('increment'));
			cleanupInterestInput2();
			finance2.active = true;
		},

		onPeriodUpdate: function(e, model){
			finance2.financePeriod = $(e.currentTarget).val();
			finance2.payment = financingCalculation2();
			finance2.active = true;
		},
		
		onToggleClick: function(e, model){
	    	finance2.editing = !finance2.editing;
	    },

	    showCCYConverter: function(e,model){
	    	$('.js--ccy-converter').addClass('s-expanded');
			ccyconversion2.editing = true;
	    }

	};

	

rivets.formatters.convertedPrice2 = function(value){
	var tempVal = parseFloat(value),
		convertedVal = tempVal * ccyconversion2.rate;

	console.log(tempVal);
	if(ccyconversion2.active) return "<span class='"+ ccyconversion2.currentCCY +"'><span class='CCY'></span><span class='dollars'>" + formatprice(convertedVal.toFixed(2)) + "</span><span class='h-t-s'>per month</span></span>";
	else return "<span class='CCY'></span><span class='dollars'>" + formatprice(tempVal.toFixed(2)) + "</span><span class='h-t-s'>per month</span>";
}

rivets.bind($('.js-financing-object2'),{
	finance2: finance2,
	calccontroller2 : calccontroller2
});


//HANDLE INTEREST RATE INCREMENTS (+/- Button presses)
function incrementInterest2(val){
	var tempValue = parseFloat(finance2.financeRate),
		increment = parseFloat(val);
	
	updateInterest2(tempValue + increment);
}

//ADJUST INTEREST RATE
function updateInterest2(val){
	
	if(val < 0) finance2.financeRate = 0;
	
	else if(val >= finance2.maxFinanceRate) finance2.financeRate = finance2.maxFinanceRate;
	
	else finance2.financeRate = val;

	finance2.payment = financingCalculation2();
}

//TIDY UP DISPLAY OF INTEREST RATE
function cleanupInterestInput2(){
	var val = parseFloat($('.js--finance-interest').val());
	$('.js--finance-interest').val(val.toFixed(2) + "%");
}


function financingCalculation2(){
	var amt = bidObject.askPrice,
		adjustedInterest = (finance2.financeRate/100)/12,
		monthly = amt * ((adjustedInterest * Math.pow((1 + adjustedInterest),finance2.financePeriod)) / (Math.pow((1 + adjustedInterest),finance2.financePeriod) - 1));

	if(adjustedInterest === 0) monthly = amt/finance2.financePeriod; //IF 0% FINANCING, JUST DIVIDE PRICE BY TOTAL PERIOD

	return monthly.toFixed(2);
}















