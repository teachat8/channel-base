define("//static.360buyimg.com/mtd/pc/components/1.0.0/console/console.js",[],function(e){"use strict";function n(e){var n=!1,t=e.split("?")[1];if(t)if(t=t.split("#")[0]){t=t.split("&");for(var o=0,i=t.length;o<i;o++){var r=t[o].split("=");n=2===r.length&&("debug"===r[0]&&"true"===r[1])}}else n=!1;else n=!1;return n}for(var t,o={},i=["assert","cd","clear","count","countReset","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","select","table","time","timeEnd","timeStamp","timeline","timelineEnd","trace","warn"],r=i.length,u=window.console=window.console||{},l=function(){};r--;)t=i[r],u[t]||(u[t]=l);var c=n(window.location.href);o=function(e){this.debug=c},o.prototype={log:function(e){this.debug&&u.log(e)},warn:function(e){this.debug&&u.warn(e)},error:function(e){this.debug&&u.error(e)},debug:function(e){this.debug&&u.debug(e)},info:function(e){this.debug&&u.debug(e)}},o.prototype.errorReport=function(e,n){};var s=new o;return s});