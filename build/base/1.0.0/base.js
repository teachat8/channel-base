!function(e){"use strict";function t(e){for(var t={},n=t.toString,r="Boolean Number String Function Array Date RegExp Object Error".split(" "),o=0;o<r.length;o++){var i=r[o];t["[object "+i+"]"]=i.toLowerCase()}return null===e?e+"":"object"==typeof e||"function"==typeof e?t[n.call(e)]||"object":typeof e}function n(e){return"function"===t(e)}var r=e._||(e._={}),o=!1,i=/xyz/.test(function(){})?/\bsuper\b/:/.*/;r.Class=function(){},r.Class.extend=function s(e){function t(e,t,n){return function(){return this._super=e[t],n.apply(this,arguments)}}function r(){!o&&n(this.construct)&&this.construct.apply(this,arguments)}var a=this.prototype;o=!0;var u=new this;o=!1;for(var c in e)if("statics"===c){var f=e[c];for(var l in f)r[l]=f[l]}else n(a[c])&&n(e[c])&&i.test(e[c])?u[c]=t(a,c,e[c]):u[c]=e[c];return r.prototype=u,r.prototype.constructor=r,r.extend=s,r}}(window,void 0),function(e){"use strict";function t(e,t,n){var r;return r=t&&t.hasOwnProperty("constructor")?t.constructor:function(){e.apply(this,arguments)},$.extend(r,e),a.prototype=e.prototype,r.prototype=new a,t&&$.extend(r.prototype,t),n&&$.extend(r,n),r.prototype.constructor=r,r.__super__=e.prototype,r}function n(e,n){var r=t(this,e,n);return r.extend=this.extend,r}function r(e){"undefined"!=typeof e&&e.callbacks?this.callbacks=e.callbacks:this.callbacks={}}var o=/\s+/,i=[].slice,s=e._||(e._={}),a=function(){};r.extend=n,r.prototype={on:function(e,t,n){var r,i,s,a,u;if(!t)return this;for(e=e.split(o),r=this.callbacks;i=e.shift();)u=r[i],s=u?u.tail:{},s.next=a={},s.context=n,s.callback=t,r[i]={tail:a,next:u?u.next:s};return this},off:function(e,t,n){var r,i,a,u,c,f;if(i=this.callbacks){if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(o):s.keys(i);r=e.shift();)if(a=i[r],delete i[r],a&&(t||n))for(u=a.tail;(a=a.next)!==u;)c=a.callback,f=a.context,(t&&c!==t||n&&f!==n)&&this.on(r,c,f);return this}},trigger:function(e){var t,n,r,s,a,u,c;if(!(r=this.callbacks))return this;for(u=r.all,e=e.split(o),c=i.call(arguments,1);t=e.shift();){if(n=r[t])for(s=n.tail;(n=n.next)!==s;)n.callback.apply(n.context||this,c);if(n=u)for(s=n.tail,a=[t].concat(c);(n=n.next)!==s;)n.callback.apply(n.context||this,a)}return this}},s.Events=r,s.eventCenter=new r}(window,void 0),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,o,i,s,a=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(u)){for(i=u.length,n=0;n<i;n+=1)s[n]=str(n,u)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(i=rep.length,n=0;n<i;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,u),o&&s.push(quote(r)+(gap?": ":":")+o));else for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(o=str(r,u),o&&s.push(quote(r)+(gap?": ":":")+o));return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,o=e[t];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(e,t,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("o2console",function(){"use strict";return{consoleConfig:{staff:"%c本页面由%c 凹凸实验室（JDC-多终端研发部） %c负责开发，你可以通过 https://aotu.io 了解我们。\n\n如果你对我们在做的事情也有兴趣，欢迎加入 %caotu@jd.com%c（注明来自console）\n\n",freshTec:"%c%c",funExp:"%c%c"},consoleConfigFunc:function(){if(window.console&&console.log&&navigator.userAgent.toLowerCase().match(/chrome\/([\d.]+)/)){var e="undefined"!=typeof o2ConsoleConfig?o2ConsoleConfig:this.consoleConfig,t="font-weight: bold;color: #6190e8;",n="font-size: 12px;color: #6190e8;";console.log(e.staff+e.freshTec+e.funExp,"color: #6190e8;",t,n,t,n,t,n,t,n)}}}}),define("store",function(){"use strict";function e(){try{return i in r&&r[i]}catch(e){return!1}}var t,n={},r="undefined"!=typeof window?window:global,o=r.document,i="localStorage",s="script";if(n.disabled=!1,n.version="1.3.20",n.set=function(e,t){},n.get=function(e,t){},n.has=function(e){return void 0!==n.get(e)},n.remove=function(e){},n.clear=function(){},n.transact=function(e,t,r){null==r&&(r=t,t=null),null==t&&(t={});var o=n.get(e,t);r(o),n.set(e,o)},n.getAll=function(){var e={};return n.forEach(function(t,n){e[t]=n}),e},n.forEach=function(){},n.serialize=function(e){return JSON.stringify(e)},n.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=r[i],n.set=function(e,r){return void 0===r?n.remove(e):(t.setItem(e,n.serialize(r)),r)},n.get=function(e,r){var o=n.deserialize(t.getItem(e));return void 0===o?r:o},n.remove=function(e){t.removeItem(e)},n.clear=function(){t.clear()},n.forEach=function(e){for(var r=0;r<t.length;r++){var o=t.key(r);e(o,n.get(o))}};else if(o&&o.documentElement.addBehavior){var a,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+s+">document.w=window</"+s+'><iframe src="/favicon.ico"></iframe>'),u.close(),a=u.w.frames[0].document,t=a.createElement("div")}catch(c){t=o.createElement("div"),a=o.body}var f=function(e){return function(){var r=Array.prototype.slice.call(arguments,0);r.unshift(t),a.appendChild(t),t.addBehavior("#default#userData"),t.load(i);var o=e.apply(n,r);return a.removeChild(t),o}},l=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),p=function(e){return e.replace(/^d/,"___$&").replace(l,"___")};n.set=f(function(e,t,r){return t=p(t),void 0===r?n.remove(t):(e.setAttribute(t,n.serialize(r)),e.save(i),r)}),n.get=f(function(e,t,r){t=p(t);var o=n.deserialize(e.getAttribute(t));return void 0===o?r:o}),n.remove=f(function(e,t){t=p(t),e.removeAttribute(t),e.save(i)}),n.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(i);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(i)}),n.forEach=f(function(e,t){for(var r,o=e.XMLDocument.documentElement.attributes,i=0;r=o[i];++i)t(r.name,n.deserialize(e.getAttribute(r.name)))})}try{var d="__storejs__";n.set(d,d),n.get(d)!=d&&(n.disabled=!0),n.remove(d)}catch(c){n.disabled=!0}return n.enabled=!n.disabled,n}),define("o2tpl",function(){"use strict";var e=function(t,n){var r=/[^\w\-\.:]/.test(t)?new Function(e.arg+",tmpl","var _e=tmpl.encode"+e.helper+",_s='"+t.replace(e.regexp,e.func)+"';return _s;"):e.cache[t]=e.cache[t]||e(e.load(t));return n?r(n,e):function(t){return r(t,e)}};return e.cache={},e.load=function(e){return document.getElementById(e).innerHTML},e.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,e.func=function(e,t,n,r,o,i){return t?{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[t]||"\\"+t:n?"="===n?"'+_e("+r+")+'":"'+("+r+"==null?'':"+r+")+'":o?"';":i?"_s+='":void 0},e.encReg=/[<>&"'\x00]/g,e.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},e.encode=function(t){return(null==t?"":""+t).replace(e.encReg,function(t){return e.encMap[t]||""})},e.arg="o",e.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}",e}),function(e){"use strict";function t(e){var t=!1,n=e.split("?")[1];if(n)if(n=n.split("#")[0]){n=n.split("&");for(var r=0,o=n.length;r<o;r++){var i=n[r].split("=");t=2===i.length&&("debug"===i[0]&&"true"===i[1])}}else t=!1;else t=!1;return t}for(var n,r=e._||(e._={}),o={},i=["assert","cd","clear","count","countReset","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","select","table","time","timeEnd","timeStamp","timeline","timelineEnd","trace","warn"],s=i.length,a=window.console=window.console||{},u=function(){};s--;)n=i[s],a[n]||(a[n]=u);var c=t(window.location.href);o=function(e){this.debug=c},o.prototype={log:function(e){this.debug&&a.log(e)},warn:function(e){this.debug&&a.warn(e)},error:function(e){this.debug&&a.error(e)},debug:function(e){this.debug&&a.debug(e)},info:function(e){this.debug&&a.debug(e)}},o.prototype.errorReport=function(e,t){},r.console=new o}(window,void 0),function(){"use strict";var e={getDownloadSpeed:function(){try{var e=(window.performance||window.webkitPerformance||{}).timing;if(e){var t=$("html").html().length,n=t/1024,r=performance.timing.responseEnd-performance.timing.requestStart;return Math.round(.25*n/(r/1e3))}}catch(o){}return 0},getRank:function(){var e=this.getDownloadSpeed();return e<25?31:e<50?32:e<75?33:e<100?34:e<150?35:e<200?36:e<250?37:e<300?38:e<350?39:e<400?40:e<450?41:e<500?42:e<1e3?43:44},getSpeedInfo:function(){var e=Math.floor(100*Math.random()),t=this.getDownloadSpeed(),n=window.pageConfig||{},r=n&&n.O2_REPORT;return void 0!==r&&"number"==typeof r||(r=100),r>0&&e>=0&&e<=r&&t>0?"s"+this.getRank()+"="+t:""},getScreenSection:function(){var e=document.documentElement.clientWidth;return e>=1190?68:e>=990?69:70},getScreenRatio:function(){var e=window.screen.width,t=window.screen.height,n={51:{width:800,height:600},52:{width:960,height:640},53:{width:1024,height:768},54:{width:1136,height:640},55:{width:1152,height:864},56:{width:1280,height:768},57:{width:1280,height:800},58:{width:1280,height:960},59:{width:1280,height:1024},60:{width:1366,height:768},61:{width:1440,height:900},62:{width:1600,height:1024},63:{width:1600,height:1200},64:{width:1920,height:1080},65:{width:1920,height:1200},66:{width:2560,height:1440},67:{width:2560,height:1600}};for(var r in n)if(e===n[r].width&&t===n[r].height)return r},getBrowser:function(){var e,t={},n=navigator.userAgent.toLowerCase();return(e=n.match(/rv:([\d.]+)\) like gecko/))?t.ie=e[1]:(e=n.match(/msie ([\d.]+)/))?t.ie=e[1]:(e=n.match(/firefox\/([\d.]+)/))?t.firefox=e[1]:(e=n.match(/metasr/))?t.sougou=!0:(e=n.match(/qqbrowser/))?t.qq=!0:(e=n.match(/version\/([\d.]+).*safari/))?t.safari=e[1]:(e=n.match(/chrome\/([\d.]+)/))?t.chrome=e[1]:(e=n.match(/opera.([\d.]+)/))?t.opera=e[1]:(e=n.match(/ipad/))?t.ipad=!0:0,t.chrome?11:t.firefox?12:t.safari?13:t.opera?14:t.ie?"6.0"===t.ie?15:"7.0"===t.ie?16:"8.0"===t.ie?17:"9.0"===t.ie?18:"10.0"===t.ie?19:"11.0"===t.ie?20:21:t.sougou?22:t.qq?23:t.ipad?24:25},getBaseData:function(){var e=window._REPORT_,t=e&&e.START,n=[];if(e&&t){var r=e.CSS,o=e.FS,i=e.JS,s=e.DOM;r&&n.push("s72="+(r.getTime()-t.getTime())),o&&n.push("s73="+(o.getTime()-t.getTime())),i&&n.push("s74="+(i.getTime()-t.getTime())),s&&n.push("s75="+(s.getTime()-t.getTime()))}return n.join("&")},getRetina:function(){return window.devicePixelRatio>1||window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx)").matches?"s71=1":""},processRetina:function(){var e=this.getRetina();e&&this.processCore(e)},getSystem:function(){var e=navigator.userAgent.toLowerCase();if(e.indexOf("macintosh")!==-1||e.indexOf("mac os x")!==-1)return 6;if(e.indexOf("linux")!==-1)return 7;var t={"nt 5.1":1,"nt 5.2":1,"nt 6.0":2,"nt 6.1":3,"nt 6.2":4,"nt 6.3":4,"nt 6.4":5,"nt 10.0":5};for(var n in t)if(e.indexOf(n)!==-1)return t[n];return 8},_getErrorInfo:function(e){var t=[];t.push("s"+this.getSystem()+"=1"),t.push("s"+this.getBrowser()+"=1"),t.push("s30=1");var n=this.getDownloadSpeed();return n>0&&t.push("s"+this.getRank()+"="+n),t.push("s"+(50+e)+"=1"),t.join("&")},processBackup:function(e){this.pBackupId&&this.processCore(this._getErrorInfo(e),this.pBackupId)},processHidedFloor:function(e){this.pFloorId&&this.processCore(this._getErrorInfo(e),this.pFloorId)},processTempl:function(e){this.pTemplId&&this.processCore(this._getErrorInfo(e),this.pTemplId)},processSpeed:function(){var e=this.getSpeedInfo();e&&this.processCore(e)},processBaseData:function(){var e=this.getBaseData();e&&this.processCore(e)},_firstReport:!1,processAllData:function(){if(!this._firstReport){this._firstReport=!0;var e=this.getSpeedInfo(),t=this.getRetina();if(t||e){var n=this.getBaseData(),r=this.getBrowser(),o=this.getScreenRatio(),i=this.getSystem(),s=[];s.push("s"+i+"=1"),s.push("s"+r+"=1"),s.push("s30=1"),e&&s.push(e),o&&s.push("s"+o+"=1"),s.push("s"+this.getScreenSection()+"=1"),t&&s.push(t),n&&s.push(n),this.processCore(s.join("&"))}}},image:null,processCore:function(e,t){var n=t||this.pid;this.image=new Image,this.image.src="//fd.3.cn/cesu/r?pid="+n+"&"+e+"&_="+(new Date).getTime()},debug:function(e){"undefined"!=typeof console.log&&console.log(e)},pid:0,pFloorId:0,pBackupId:0,pTemplId:0,init:function(e,t,n,r){var o=this;return e?(o.pid=e,o.pFloorId=n,o.pBackupId=t,o.pTemplId=r,void(window.onload=function(){o.processAllData()})):void o.debug("pageId must be provided!")}};"function"==typeof define&&(define.amd||define.cmd)?define("report",function(){return e}):window.o2Report=e}(),define("ajax_setup",function(e){var t=e("store"),n=!!window.ActiveXObject||navigator.userAgent.indexOf("Trident")>0;!function(){function e(e,n){var r=n.times,o=n.backup,i=e.timeout,s=null;return function(a,u,c){function f(e){e&&e.url===n.backup&&_.eventCenter.trigger(p.jsonpCallback+":backup",n.backup),p.data=p.__data||{},$.extend(p,{url:p.originalUrl,forceStore:!1},e),$.ajax(p).retry({times:r-1,timeout:n.timeout,statusCodes:n.statusCodes,backup:o}).pipe(d.resolve,d.reject)}function l(){var e=t.get(p.storeKey);e?f({forceStore:!0}):d.rejectWith(this,arguments)}var p=this,d=new $.Deferred,h=e.getResponseHeader("Retry-After");return s&&clearTimeout(s),r>0&&(!e.statusCodes||$.inArray(a.status,e.statusCodes)>-1)?(h&&(i=isNaN(h)?new Date(h).getTime()-$.now():1e3*parseInt(h,10),(isNaN(i)||i<0)&&(i=e.timeout)),void 0!==i&&r!==n.times?s=setTimeout(f,i):f()):0===r?"string"==typeof o&&o.length>0?f({url:o}):l():r===-1?l():d.rejectWith(this,arguments),d}}$.ajaxPrefilter(function(r,o,i){var s=r.needStore,a=r.storeKey,u=r.storeCheck;if(s=!!s&&(!n&&t.enabled)){var c=t.get(a);c&&u(c)||(r.success&&(r.realsuccess=r.success),r.success=function(e,n,o){if("string"==typeof e)try{e=JSON.parse(e)}catch(i){e={}}t.set(a,e),r.realsuccess&&r.realsuccess(e,n,o)})}i.retry=function(t){return t.timeout&&(this.timeout=t.timeout),t.statusCodes&&(this.statusCodes=t.statusCodes),this.pipe(null,e(this,t))}}),$.ajaxTransport("+script",function(e){var r=e.needStore,o=e.storeKey,i=e.storeCheck,s=e.dataType,a=e.forceStore;if(r=!!r&&(!n&&t.enabled)){var u=t.get(o);if(u&&(i(u)||a))return{send:function(t,n){var r={};r[s]=e.jsonpCallback+"("+JSON.stringify(u)+")",n(200,"success",r,"")},abort:function(){_.console.log("abort ajax transport for local cache")}}}})}()}),define("load_async",["ajax_setup"],function(e){return e("ajax_setup"),function(e){return e=$.extend({url:"",params:{},timeout:3e3,times:2,backup:null,needStore:!1,storeSign:null,dataType:"jsonp",type:"get",scriptCharset:"UTF-8"},e),$.ajax({type:e.type,url:e.url,scriptCharset:e.scriptCharset,originalUrl:e.url,data:e.params,__data:e.params,dataType:e.dataType,jsonp:"callback",jsonpCallback:e.jsonpCallback,timeout:e.timeout,storeKey:e.url,needStore:e.needStore,storeCheck:function(t){return!!t&&t.version&&t.version===e.storeSign}}).retry({timeout:e.timeout,times:e.times,backup:e.backup}).then(function(t){if(t&&(t.__uri=e.url),e.params&&e.params.__trigger){var n=e.jsonpCallback+":end";_.eventCenter.trigger(n,t)}},function(t){_.console.log(e.url),_.console.log("请求接口和兜底都失败了")})}});