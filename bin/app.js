!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";function r(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}r.normalize=function(e){return Array.isArray(e)?r("[",void 0,void 0,r.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:r("#",void 0,void 0,String(e),void 0,void 0)},r.normalizeChildren=function(e){var t=[];if(e.length){for(var n=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==n)throw new TypeError("Vnodes must either always have keys or never have keys!");for(o=0;o<e.length;o++)t[o]=r.normalize(e[o])}return t},e.exports=r},function(e,t,n){"use strict";var r=n(17),o=n(20),i=n(3),l=function(){return r.apply(this,arguments)};l.m=r,l.trust=r.trust,l.fragment=r.fragment,l.mount=i.mount,l.route=n(26),l.render=n(11),l.redraw=i.redraw,l.request=o.request,l.jsonp=o.jsonp,l.parseQueryString=n(14),l.buildQueryString=n(12),l.parsePathname=n(5),l.buildPathname=n(4),l.vnode=n(0),l.PromisePolyfill=n(9),e.exports=l},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(11);e.exports=n(24)(r,requestAnimationFrame,console)},function(e,t,n){"use strict";var r=n(12),o=n(13);e.exports=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Template parameter names *must* be separated");if(null==t)return e;var n=e.indexOf("?"),i=e.indexOf("#"),l=i<0?e.length:i,a=n<0?l:n,u=e.slice(0,a),s={};o(s,t);var c=u.replace(/:([^\/\.-]+)(\.{3})?/g,(function(e,n,r){return delete s[n],null==t[n]?e:r?t[n]:encodeURIComponent(String(t[n]))})),f=c.indexOf("?"),d=c.indexOf("#"),p=d<0?c.length:d,h=f<0?p:f,m=c.slice(0,h);n>=0&&(m+=e.slice(n,l)),f>=0&&(m+=(n<0?"?":"&")+c.slice(f,p));var v=r(s);return v&&(m+=(n<0&&f<0?"?":"&")+v),i>=0&&(m+=e.slice(i)),d>=0&&(m+=(i<0?"":"&")+c.slice(d)),m}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e){var t=e.indexOf("?"),n=e.indexOf("#"),o=n<0?e.length:n,i=t<0?o:t,l=e.slice(0,i).replace(/\/{2,}/g,"/");return l?("/"!==l[0]&&(l="/"+l),l.length>1&&"/"===l[l.length-1]&&(l=l.slice(0,-1))):l="/",{path:l,params:t<0?{}:r(e.slice(t+1,o))}}},function(e,t,n){"use strict";var r=n(0),o=n(7),i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,l={},a={}.hasOwnProperty;function u(e){for(var t in e)if(a.call(e,t))return!1;return!0}function s(e){for(var t,n="div",r=[],o={};t=i.exec(e);){var a=t[1],u=t[2];if(""===a&&""!==u)n=u;else if("#"===a)o.id=u;else if("."===a)r.push(u);else if("["===t[3][0]){var s=t[6];s&&(s=s.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(s):o[t[4]]=""===s?s:s||!0}}return r.length>0&&(o.className=r.join(" ")),l[e]={tag:n,attrs:o}}function c(e,t){var n=t.attrs,o=r.normalizeChildren(t.children),i=a.call(n,"class"),l=i?n.class:n.className;if(t.tag=e.tag,t.attrs=null,t.children=void 0,!u(e.attrs)&&!u(n)){var s={};for(var c in n)a.call(n,c)&&(s[c]=n[c]);n=s}for(var c in e.attrs)a.call(e.attrs,c)&&"className"!==c&&!a.call(n,c)&&(n[c]=e.attrs[c]);for(var c in null==l&&null==e.attrs.className||(n.className=null!=l?null!=e.attrs.className?String(e.attrs.className)+" "+String(l):l:null!=e.attrs.className?e.attrs.className:null),i&&(n.class=null),n)if(a.call(n,c)&&"key"!==c){t.attrs=n;break}return Array.isArray(o)&&1===o.length&&null!=o[0]&&"#"===o[0].tag?t.text=o[0].children:t.children=o,t}e.exports=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=o.apply(1,arguments);return"string"==typeof e&&(t.children=r.normalizeChildren(t.children),"["!==e)?c(l[e]||s(e),t):(t.tag=e,t)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(){var e,t=arguments[this],n=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},n=this),arguments.length===n+1)e=arguments[n],Array.isArray(e)||(e=[e]);else for(e=[];n<arguments.length;)e.push(arguments[n++]);return r("",t.key,t,e)}},function(e,t,n){"use strict";(function(t){var r=n(9);"undefined"!=typeof window?(void 0===window.Promise?window.Promise=r:window.Promise.prototype.finally||(window.Promise.prototype.finally=r.prototype.finally),e.exports=window.Promise):void 0!==t?(void 0===t.Promise?t.Promise=r:t.Promise.prototype.finally||(t.Promise.prototype.finally=r.prototype.finally),e.exports=t.Promise):e.exports=r}).call(this,n(2))},function(e,t,n){"use strict";(function(t){var n=function(e){if(!(this instanceof n))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var r=this,o=[],i=[],l=c(o,!0),a=c(i,!1),u=r._instance={resolvers:o,rejectors:i},s="function"==typeof t?t:setTimeout;function c(e,t){return function n(l){var c;try{if(!t||null==l||"object"!=typeof l&&"function"!=typeof l||"function"!=typeof(c=l.then))s((function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",l);for(var r=0;r<e.length;r++)e[r](l);o.length=0,i.length=0,u.state=t,u.retry=function(){n(l)}}));else{if(l===r)throw new TypeError("Promise can't be resolved w/ itself");f(c.bind(l))}}catch(e){a(e)}}}function f(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(a);try{e(n(l),r)}catch(e){r(e)}}f(e)};n.prototype.then=function(e,t){var r,o,i=this._instance;function l(e,t,n,l){t.push((function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}})),"function"==typeof i.retry&&l===i.state&&i.retry()}var a=new n((function(e,t){r=e,o=t}));return l(e,i.resolvers,r,!0),l(t,i.rejectors,o,!1),a},n.prototype.catch=function(e){return this.then(null,e)},n.prototype.finally=function(e){return this.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){return n.reject(t)}))}))},n.resolve=function(e){return e instanceof n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.all=function(e){return new n((function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)}))},n.race=function(e){return new n((function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)}))},e.exports=n}).call(this,n(10).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(21),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){"use strict";e.exports=n(23)(window)},function(e,t,n){"use strict";e.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}}},function(e,t,n){"use strict";e.exports=Object.assign||function(e,t){t&&Object.keys(t).forEach((function(n){e[n]=t[n]}))}},function(e,t,n){"use strict";e.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),s=r;l.indexOf("[")>-1&&u.pop();for(var c=0;c<u.length;c++){var f=u[c],d=u[c+1],p=""==d||!isNaN(parseInt(d,10));if(""===f)null==n[l=u.slice(0,c).join()]&&(n[l]=Array.isArray(s)?s.length:0),f=n[l]++;else if("__proto__"===f)break;if(c===u.length-1)s[f]=a;else{var h=Object.getOwnPropertyDescriptor(s,f);null!=h&&(h=h.value),null==h&&(s[f]=h=p?[]:{}),s=h}}}return r}},function(e,t,n){var r=n(1),o={list:[],loadList:function(){return r.request({method:"GET",url:"http://rem-rest-api.herokuapp.com/api/users",withCredentials:!0}).then((function(e){o.list=e.data}))},current:{},load:function(e){return r.request({method:"GET",url:"http://rem-rest-api.herokuapp.com/api/users/:id",data:{id:e},withCredentials:!0}).then((function(e){o.current=e}))},save:function(){return r.request({method:"PUT",url:"http://rem-rest-api.herokuapp.com/api/users/:id",data:o.current,withCredentials:!0})}};e.exports=o},function(e,t,n){var r=n(1),o=n(29),i=n(30),l=n(31);r.route(document.body,"/list",{"/list":{render:function(){return r(l,r(o))}},"/edit/:id":{render:function(e){return r(l,r(i,e.attrs))}}})},function(e,t,n){"use strict";var r=n(6);r.trust=n(18),r.fragment=n(19),e.exports=r},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)}},function(e,t,n){"use strict";var r=n(0),o=n(7);e.exports=function(){var e=o.apply(0,arguments);return e.tag="[",e.children=r.normalizeChildren(e.children),e}},function(e,t,n){"use strict";var r=n(8),o=n(3);e.exports=n(25)(window,r,o.redraw)},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,l,a,u=1,s={},c=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(l="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(l)&&h(+t.data.slice(l.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(l+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[u]=o,r(u),u++},d.clearImmediate=p}function p(e){delete s[e]}function h(e){if(c)setTimeout(h,0,e);else{var t=s[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(22))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,s=[],c=!1,f=-1;function d(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&p())}function p(){if(!c){var e=a(d);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n=e&&e.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function l(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{l(e,t)}}function u(){try{return n.activeElement}catch(e){return null}}function s(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var u=t[a];null!=u&&c(e,u,o,l,i)}}function c(e,t,o,l,u){var f=t.tag;if("string"==typeof f)switch(t.state={},null!=t.attrs&&$(t.attrs,t,o),f){case"#":!function(e,t,r){t.dom=n.createTextNode(t.children),w(e,t.dom,r)}(e,t,u);break;case"<":d(e,t,l,u);break;case"[":!function(e,t,r,o,i){var l=n.createDocumentFragment();if(null!=t.children){var a=t.children;s(l,a,0,a.length,r,null,o)}t.dom=l.firstChild,t.domSize=l.childNodes.length,w(e,l,i)}(e,t,o,l,u);break;default:!function(e,t,o,l,a){var u=t.tag,c=t.attrs,f=c&&c.is,d=(l=i(t)||l)?f?n.createElementNS(l,u,{is:f}):n.createElementNS(l,u):f?n.createElement(u,{is:f}):n.createElement(u);t.dom=d,null!=c&&function(e,t,n){for(var r in t)j(e,r,null,t[r],n)}(t,c,l);if(w(e,d,a),!b(t)&&(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children)){var p=t.children;s(d,p,0,p.length,o,null,l),"select"===t.tag&&null!=c&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&j(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,c)}}(e,t,o,l,u)}else!function(e,t,n,o,i){(function(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}$(e.state,e,t),null!=e.attrs&&$(e.attrs,e,t);if(e.instance=r.normalize(a.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null})(t,n),null!=t.instance?(c(e,t.instance,n,o,i),t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0):t.domSize=0}(e,t,o,l,u)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(e,t,r,o){var i=t.children.match(/^\s*?<(\w+)/im)||[],l=n.createElement(f[i[1]]||"div");"http://www.w3.org/2000/svg"===r?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length,t.instance=[];for(var a,u=n.createDocumentFragment();a=l.firstChild;)t.instance.push(a),u.appendChild(a);w(e,u,o)}function p(e,t,n,r,o,i){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)s(e,n,0,n.length,r,o,i);else if(null==n||0===n.length)x(e,t,0,t.length);else{var l=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,u=0,f=0;if(!l)for(;f<t.length&&null==t[f];)f++;if(!a)for(;u<n.length&&null==n[u];)u++;if(null===a&&null==l)return;if(l!==a)x(e,t,f,t.length),s(e,n,u,n.length,r,o,i);else if(a){for(var d,p,w,b,T,E=t.length-1,S=n.length-1;E>=f&&S>=u&&(w=t[E],b=n[S],w.key===b.key);)w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),E--,S--;for(;E>=f&&S>=u&&(d=t[f],p=n[u],d.key===p.key);)f++,u++,d!==p&&h(e,d,p,r,y(t,f,o),i);for(;E>=f&&S>=u&&u!==S&&d.key===b.key&&w.key===p.key;)g(e,w,T=y(t,f,o)),w!==p&&h(e,w,p,r,T,i),++u<=--S&&g(e,d,o),d!==b&&h(e,d,b,r,o,i),null!=b.dom&&(o=b.dom),f++,w=t[--E],b=n[S],d=t[f],p=n[u];for(;E>=f&&S>=u&&w.key===b.key;)w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),S--,w=t[--E],b=n[S];if(u>S)x(e,t,f,E+1);else if(f>E)s(e,n,u,S+1,r,o,i);else{var j,C,O=o,I=S-u+1,A=new Array(I),N=0,_=0,P=2147483647,z=0;for(_=0;_<I;_++)A[_]=-1;for(_=S;_>=u;_--){null==j&&(j=m(t,f,E+1));var L=j[(b=n[_]).key];null!=L&&(P=L<P?L:-1,A[_-u]=L,w=t[L],t[L]=null,w!==b&&h(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),z++)}if(o=O,z!==E-f+1&&x(e,t,f,E+1),0===z)s(e,n,u,S+1,r,o,i);else if(-1===P)for(N=(C=function(e){var t=[0],n=0,r=0,o=0,i=v.length=e.length;for(o=0;o<i;o++)v[o]=e[o];for(o=0;o<i;++o)if(-1!==e[o]){var l=t[t.length-1];if(e[l]<e[o])v[o]=l,t.push(o);else{for(n=0,r=t.length-1;n<r;){var a=(n>>>1)+(r>>>1)+(n&r&1);e[t[a]]<e[o]?n=a+1:r=a}e[o]<e[t[n]]&&(n>0&&(v[o]=t[n-1]),t[n]=o)}}n=t.length,r=t[n-1];for(;n-- >0;)t[n]=r,r=v[r];return v.length=0,t}(A)).length-1,_=S;_>=u;_--)p=n[_],-1===A[_-u]?c(e,p,r,i,o):C[N]===_-u?N--:g(e,p,o),null!=p.dom&&(o=n[_].dom);else for(_=S;_>=u;_--)p=n[_],-1===A[_-u]&&c(e,p,r,i,o),null!=p.dom&&(o=n[_].dom)}}else{var $=t.length<n.length?t.length:n.length;for(u=u<f?u:f;u<$;u++)(d=t[u])===(p=n[u])||null==d&&null==p||(null==d?c(e,p,r,i,y(t,u+1,o)):null==p?k(e,d):h(e,d,p,r,y(t,u+1,o),i));t.length>$&&x(e,t,u,t.length),n.length>$&&s(e,n,u,n.length,r,o,i)}}}function h(e,t,n,o,l,u){var s=t.tag;if(s===n.tag){if(n.state=t.state,n.events=t.events,function(e,t){do{var n;if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate)if(void 0!==(n=a.call(e.attrs.onbeforeupdate,e,t))&&!n)break;if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate)if(void 0!==(n=a.call(e.state.onbeforeupdate,e,t))&&!n)break;return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(n,t))return;if("string"==typeof s)switch(null!=n.attrs&&M(n.attrs,n,o),s){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,n);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(T(e,t),d(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize,n.instance=t.instance)}(e,t,n,u,l);break;case"[":!function(e,t,n,r,o,i){p(e,t.children,n.children,r,o,i);var l=0,a=n.children;if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var s=a[u];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),l+=s.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,n,o,l,u);break;default:!function(e,t,n,o){var l=t.dom=e.dom;o=i(t)||o,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)j(e,o,t&&t[o],n[o],r);var i;if(null!=t)for(var o in t)null==(i=t[o])||null!=n&&null!=n[o]||C(e,o,i,r)})(t,e.attrs,t.attrs,o),b(t)||(null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[r("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),p(l,e.children,t.children,n,null,o)))}(t,n,o,u)}else!function(e,t,n,o,i,l){if(n.instance=r.normalize(a.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");M(n.state,n,o),null!=n.attrs&&M(n.attrs,n,o);null!=n.instance?(null==t.instance?c(e,n.instance,o,l,i):h(e,t.instance,n.instance,o,i,l),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(k(e,t.instance),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,o,l,u)}else k(e,t),c(e,n,o,u,l)}function m(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var i=o.key;null!=i&&(r[i]=t)}}return r}var v=[];function y(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function g(e,t,r){var o=n.createDocumentFragment();!function e(t,n,r){for(;null!=r.dom&&r.dom.parentNode===t;){if("string"!=typeof r.tag){if(null!=(r=r.instance))continue}else if("<"===r.tag)for(var o=0;o<r.instance.length;o++)n.appendChild(r.instance[o]);else if("["!==r.tag)n.appendChild(r.dom);else if(1===r.children.length){if(null!=(r=r.children[0]))continue}else for(o=0;o<r.children.length;o++){var i=r.children[o];null!=i&&e(t,n,i)}break}}(e,o,t),w(e,o,r)}function w(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function b(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function x(e,t,n,r){for(var o=n;o<r;o++){var i=t[o];null!=i&&k(e,i)}}function k(e,t){var n,r,o,i=0,u=t.state;"string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&(null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(i=1,n=o));t.attrs&&"function"==typeof t.attrs.onbeforeremove&&(null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(i|=2,r=o));if(l(t,u),i){if(null!=n){var s=function(){1&i&&((i&=2)||c())};n.then(s,s)}if(null!=r){s=function(){2&i&&((i&=1)||c())};r.then(s,s)}}else S(t),E(e,t);function c(){l(t,u),S(t),E(e,t)}}function T(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function E(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)T(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var r=t.children[n];null!=r&&E(e,r)}}break}}function S(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&S(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&S(r)}}}function j(e,t,r,o,i){if("key"!==t&&"is"!==t&&null!=o&&!O(t)&&(r!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===n.activeElement}(e,t)||"object"==typeof o)){if("o"===t[0]&&"n"===t[1])return L(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)P(e.dom,r,o);else if(I(e,t,i)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&e.dom===u())return;if("select"===e.tag&&null!==r&&e.dom.value===""+o)return;if("option"===e.tag&&null!==r&&e.dom.value===""+o)return}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,o):e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function C(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!O(t))if("o"!==t[0]||"n"!==t[1]||O(t))if("style"===t)P(e.dom,n,null);else if(!I(e,t,r)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===u())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else L(e,t,void 0)}function O(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function I(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var A=/[A-Z]/g;function N(e){return"-"+e.toLowerCase()}function _(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(A,N)}function P(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n){null!=(o=n[r])&&e.style.setProperty(_(r),String(o))}else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(_(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(_(r))}}function z(){this._=t}function L(e,t,n){if(null!=e.events){if(e.events[t]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(e.events=new z,e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}function $(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function M(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return z.prototype=Object.create(null),z.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(e,n,o){if(!e)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=[],l=u(),a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),n=r.normalizeChildren(Array.isArray(n)?n:[n]);var s=t;try{t="function"==typeof o?o:void 0,p(e,e.vnodes,n,i,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)}finally{t=s}e.vnodes=n,null!=l&&u()!==l&&"function"==typeof l.focus&&l.focus();for(var c=0;c<i.length;c++)i[c]()}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){var o=[],i=!1,l=!1;function a(){if(i)throw new Error("Nested m.redraw.sync() call");i=!0;for(var t=0;t<o.length;t+=2)try{e(o[t],r(o[t+1]),u)}catch(e){n.error(e)}i=!1}function u(){l||(l=!0,t((function(){l=!1,a()})))}return u.sync=a,{mount:function(t,n){if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var i=o.indexOf(t);i>=0&&(o.splice(i,2),e(t,[],u)),null!=n&&(o.push(t,n),e(t,r(n),u))},redraw:u}}},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t,n){var o=0;function i(e){return new t(e)}function l(e){return function(o,l){"string"!=typeof o?(l=o,o=o.url):null==l&&(l={});var a=new t((function(t,n){e(r(o,l.params),l,(function(e){if("function"==typeof l.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new l.type(e[n]);else e=new l.type(e);t(e)}),n)}));if(!0===l.background)return a;var u=0;function s(){0==--u&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.constructor=i,t.then=function(){u++;var r=n.apply(t,arguments);return r.then(s,(function(e){if(s(),0===u)throw e})),e(r)},t}(a)}}function a(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}return i.prototype=t.prototype,i.__proto__=t,{request:l((function(t,n,r,o){var i,l=null!=n.method?n.method.toUpperCase():"GET",u=n.body,s=!(null!=n.serialize&&n.serialize!==JSON.serialize||u instanceof e.FormData),c=n.responseType||("function"==typeof n.extract?"":"json"),f=new e.XMLHttpRequest,d=!1,p=f,h=f.abort;for(var m in f.abort=function(){d=!0,h.call(this)},f.open(l,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),s&&null!=u&&!a(n,/^content-type$/i)&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||a(n,/^accept$/i)||f.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(f.withCredentials=n.withCredentials),n.timeout&&(f.timeout=n.timeout),f.responseType=c,n.headers)({}).hasOwnProperty.call(n.headers,m)&&f.setRequestHeader(m,n.headers[m]);f.onreadystatechange=function(e){if(!d&&4===e.target.readyState)try{var i,l=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),a=e.target.response;if("json"===c?e.target.responseType||"function"==typeof n.extract||(a=JSON.parse(e.target.responseText)):c&&"text"!==c||null==a&&(a=e.target.responseText),"function"==typeof n.extract?(a=n.extract(e.target,n),l=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),l)r(a);else{try{i=e.target.responseText}catch(e){i=a}var u=new Error(i);u.code=e.target.status,u.response=a,o(u)}}catch(e){o(e)}},"function"==typeof n.config&&(f=n.config(f,n,t)||f)!==p&&(i=f.abort,f.abort=function(){d=!0,i.call(this)}),null==u?f.send():"function"==typeof n.serialize?f.send(n.serialize(u)):u instanceof e.FormData?f.send(u):f.send(JSON.stringify(u))})),jsonp:l((function(t,n,r,i){var l=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,a=e.document.createElement("script");e[l]=function(t){delete e[l],a.parentNode.removeChild(a),r(t)},a.onerror=function(){delete e[l],a.parentNode.removeChild(a),i(new Error("JSONP request failed"))},a.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(l),e.document.documentElement.appendChild(a)}))}}},function(e,t,n){"use strict";var r=n(3);e.exports=n(27)(window,r)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(6),i=n(8),l=n(4),a=n(5),u=n(28),s=n(13),c={};e.exports=function(e,n){var f;function d(t,n,r){if(t=l(t,n),null!=f){f();var o=r?r.state:null,i=r?r.title:null;r&&r.replace?e.history.replaceState(o,i,w.prefix+t):e.history.pushState(o,i,w.prefix+t)}else e.location.href=w.prefix+t}var p,h,m,v,y=c,g=w.SKIP={};function w(o,l,b){if(null==o)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var x,k=0,T=Object.keys(b).map((function(e){if("/"!==e[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:e,component:b[e],check:u(e)}})),E="function"==typeof t?t:setTimeout,S=i.resolve(),j=!1;if(f=null,null!=l){var C=a(l);if(!T.some((function(e){return e.check(C)})))throw new ReferenceError("Default route doesn't match any known routes")}function O(){j=!1;var t=e.location.hash;"#"!==w.prefix[0]&&(t=e.location.search+t,"?"!==w.prefix[0]&&"/"!==(t=e.location.pathname+t)[0]&&(t="/"+t));var r=t.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(w.prefix.length),o=a(r);function i(){if(r===l)throw new Error("Could not resolve default route "+l);d(l,null,{replace:!0})}s(o.params,e.history.state),function e(t){for(;t<T.length;t++)if(T[t].check(o)){var l=T[t].component,a=T[t].route,u=l,s=v=function(i){if(s===v){if(i===g)return e(t+1);p=null==i||"function"!=typeof i.view&&"function"!=typeof i?"div":i,h=o.params,m=r,v=null,y=l.render?l:null,2===k?n.redraw():(k=2,n.redraw.sync())}};return void(l.view||"function"==typeof l?(l={},s(u)):l.onmatch?S.then((function(){return l.onmatch(o.params,r,a)})).then(s,i):s("div"))}i()}(0)}return f=function(){j||(j=!0,E(O))},"function"==typeof e.history.pushState?(x=function(){e.removeEventListener("popstate",f,!1)},e.addEventListener("popstate",f,!1)):"#"===w.prefix[0]&&(f=null,x=function(){e.removeEventListener("hashchange",O,!1)},e.addEventListener("hashchange",O,!1)),n.mount(o,{onbeforeupdate:function(){return!(!(k=k?2:1)||c===y)},oncreate:O,onremove:x,view:function(){if(k&&c!==y){var e=[r(p,h.key,h)];return y&&(e=y.render(e[0])),e}}})}return w.set=function(e,t,n){null!=v&&((n=n||{}).replace=!0),v=null,d(e,t,n)},w.get=function(){return m},w.prefix="#!",w.Link={view:function(e){var t,n,r=e.attrs.options,i={};s(i,e.attrs),i.selector=i.options=i.key=i.oninit=i.oncreate=i.onbeforeupdate=i.onupdate=i.onbeforeremove=i.onremove=null;var l=o(e.attrs.selector||"a",i,e.children);return(l.attrs.disabled=Boolean(l.attrs.disabled))?(l.attrs.href=null,l.attrs["aria-disabled"]="true",l.attrs.onclick=null):(t=l.attrs.onclick,n=l.attrs.href,l.attrs.href=w.prefix+n,l.attrs.onclick=function(e){var o;"function"==typeof t?o=t.call(e.currentTarget,e):null==t||"object"!=typeof t||"function"==typeof t.handleEvent&&t.handleEvent(e),!1===o||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,w.set(n,null,r))}),l}},w.param=function(e){return h&&null!=e?h[e]:h},w}}).call(this,n(10).setImmediate)},function(e,t,n){"use strict";var r=n(5);e.exports=function(e){var t=r(e),n=Object.keys(t.params),o=[],i=new RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(e,t,n){return null==t?"\\"+e:(o.push({k:t,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$");return function(e){for(var r=0;r<n.length;r++)if(t.params[n[r]]!==e.params[n[r]])return!1;if(!o.length)return i.test(e.path);var l=i.exec(e.path);if(null==l)return!1;for(r=0;r<o.length;r++)e.params[o[r].k]=o[r].r?l[r+1]:decodeURIComponent(l[r+1]);return!0}}},function(e,t,n){var r=n(1),o=n(15);e.exports={oninit:o.loadList,view:function(){return r(".user-list",o.list.map((function(e){return r("a.user-list-item",{href:"/edit/"+e.id,oncreate:r.route.link},e.firstName+" "+e.lastName)})))}}},function(e,t,n){var r=n(1),o=n(15);e.exports={oninit:function(e){o.load(e.attrs.id)},view:function(){return r("form",[r("label.label","First name"),r("input.input[type=text][placeholder=First name]",{oninput:r.withAttr("value",(function(e){o.current.firstName=e})),value:o.current.firstName}),r("label.label","Last name"),r("input.input[placeholder=Last name]",{oninput:r.withAttr("value",(function(e){o.current.lastName=e})),value:o.current.lastName}),r("button.button[type=submit]",{onclick:o.save},"Save")])}}},function(e,t,n){var r=n(1);e.exports={view:function(e){return r("main.layout",[r("nav.menu",[r("a[href='/list']",{oncreate:r.route.link},"Users")]),r("section",e.children)])}}}]);