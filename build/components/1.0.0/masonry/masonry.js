define("//static.360buyimg.com/mtd/pc/components/1.0.0/masonry/masonry.js",["//static.360buyimg.com/mtd/pc/components/1.0.0/util/util.js"],function(t){"use strict";var i=t("//static.360buyimg.com/mtd/pc/components/1.0.0/util/util.js"),n=_.Class.extend({construct:function(t){$.extend(this,{container:null,itemSelector:"",itemWidth:0,column:1,horizontalMargin:15,verticalMargin:15,onAfterRender:function(){}},t),this.$container=$(this.container),this.init()},init:function(){var t=new Array(this.column);this.$items=this.$container.find(this.itemSelector),this.column=Math.min(this.$items.length,this.column);for(var n=0;n<this.column;n++)t[n]=this.$items[n].offsetTop+this.$items[n].offsetHeight;for(var e=0,s=this.$items.length;e<s;e++){var o=$(this.$items.get(e));if(this.itemWidth&&o.width(this.itemWidth),e>=this.column){var h=Math.min.apply(null,t),r=0;r=Array.prototype.indexOf?t.indexOf(h):i.indexOf(t,h),o.css({left:r*(this.itemWidth+this.horizontalMargin)+"px",top:h+this.verticalMargin+"px"}),t[r]+=o.get(0).offsetHeight+this.verticalMargin}else o.css({top:0,left:e%this.column*(this.itemWidth+this.horizontalMargin)+"px"})}this.$container.css({height:Math.max.apply(null,t)}),$.isFunction(this.onAfterRender)&&this.onAfterRender.call(this)}});return n});