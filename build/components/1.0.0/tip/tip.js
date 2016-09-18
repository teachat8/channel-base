define("//static.360buyimg.com/mtd/pc/components/1.0.0/tip/tip.js",[],function(){"use strict";var t=_.Class.extend({construct:function(t){$.extend(this,{auto:!1,placement:"right",borderColor:"#000",bg:"#000",color:"#fff",fontSize:"12px",angleBool:!0},t),this.tipOption={template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><span></span></div><div class="tooltip-inner"></div></div>',text:""},this.tagList=[],this.init()},init:function(){this.initEvent()},initEvent:function(){var t=$("[o2-tip]"),o=this;this.auto&&t.length>0&&($("body").delegate("[o2-tip]","mouseover",$.proxy(o.enter,o)),$("body").delegate("[o2-tip]","mouseout",$.proxy(o.leave,o)))},enter:function(t){var o=$(t.target);this.createTip({text:o.attr("o2-tip"),$obj:o,placement:o.attr("o2-placement")||this.placement})},leave:function(){this.removeTip()},calculateTarget:function(t){return{left:t.offset().left,right:t.width()+t.offset().left,top:t.offset().top,bottom:t.height()+t.offset().top}},createTip:function(t){var o=$(this.tipOption.template);switch($("body").append(o),t.tag&&(o.attr("data-tag",t.tag),this.tagList.push(t.tag)),t.angleBool!==!1?t.angleBool=!0:t.angleBool=!1,o.find(".tooltip-inner").text(t.text).css(this.tipStyle().tipInner),o.find(".tooltip-arrow").css(this.tipStyle().tipArrow),o.find(".tooltip-arrow span").css(this.tipStyle().tipArrow),o.css(this.tipStyle().tip),t.placement){case"top":o.find(".tooltip-arrow").css(this.tipStyle().tipArrowTop),o.find(".tooltip-arrow span").css(this.tipStyle().tipArrowTopIn),o.css({left:(t.$obj.width()-o.width())/2+this.calculateTarget(t.$obj).left,top:this.calculateTarget(t.$obj).top-o.height()-10});break;case"bottom":o.find(".tooltip-arrow").css(this.tipStyle().tipArrowBottom),o.find(".tooltip-arrow span").css(this.tipStyle().tipArrowBottomIn),o.css({left:(t.$obj.width()-o.width())/2+this.calculateTarget(t.$obj).left,top:this.calculateTarget(t.$obj).top+t.$obj.height()+10});break;case"right":o.find(".tooltip-arrow").css(this.tipStyle().tipArrowRight),o.find(".tooltip-arrow span").css(this.tipStyle().tipArrowRightIn),o.css({left:t.$obj.width()+this.calculateTarget(t.$obj).left+10,top:this.calculateTarget(t.$obj).top+(t.$obj.height()-o.height())/2});break;case"left":o.find(".tooltip-arrow").css(this.tipStyle().tipArrowLeft),o.find(".tooltip-arrow span").css(this.tipStyle().tipArrowLeftIn),o.css({left:this.calculateTarget(t.$obj).left-o.width()-10,top:this.calculateTarget(t.$obj).top+(t.$obj.height()-o.height())/2})}t.tag&&!t.angleBool&&o.find(".tooltip-arrow").hide(),this.angleBool||t.tag||o.find(".tooltip-arrow").hide()},removeTip:function(){$("body").find(".tooltip").last().remove()},show:function(t){this.checkTip(t.tag)&&this.createTip(t)},checkTip:function(t){if(!t)throw new Error('required a "tag" attribute');if(this.inArray(this.tagList,t)!=-1)throw new Error('Duplicate tip\'s "tag" attribute, tag attributes should be unique!');return!0},hide:function(t){var o=this.inArray(this.tagList,t);t&&o!=-1&&(this.tagList.splice(o,1),$("body").find(".tooltip[data-tag="+t+"]").remove())},tipStyle:function(){return{tip:{position:"absolute",zIndex:1070,display:"block",fontSize:"12px",fontStyle:"normal",fontWeight:"400",lineHeight:1.42857143,textAlign:"left",textAlign:"start",textDecoration:"none",textShadow:"none",textTransform:"none",letterSpacing:"normal",wordBreak:"normal",wordSpacing:"normal",wordWrap:"normal",whiteSpace:"normal",filter:"alpha(opacity=1)",opacity:1,lineBreak:"auto"},tipInner:{maxWidth:"200px",padding:"3px 8px",color:this.color,textAlign:"center",backgroundColor:this.bg,border:"1px solid "+this.borderColor,borderRadius:"4px"},tipArrow:{position:"absolute",width:0,height:0,borderStyle:"solid"},tipArrowRight:{borderWidth:"5px 5px 5px 0",borderColor:"transparent "+this.borderColor+" transparent transparent",_borderStyle:"dashed solid dashed dashed",top:"50%","margin-top":"-5px",left:"-5px"},tipArrowRightIn:{borderWidth:"5px 5px 5px 0",borderColor:"transparent "+this.bg+" transparent transparent",_borderStyle:"dashed solid dashed dashed",left:"1px",top:"-5px"},tipArrowLeft:{borderWidth:"5px 0 5px 5px",borderColor:"transparent transparent transparent "+this.borderColor,_borderStyle:"dashed dashed dashed solid",top:"50%","margin-top":"-5px",right:"-5px"},tipArrowLeftIn:{borderWidth:"5px 0 5px 5px",borderColor:"transparent transparent transparent "+this.bg,_borderStyle:"dashed dashed dashed solid",right:"1px",top:"-5px"},tipArrowTop:{borderWidth:"5px 5px 0",borderColor:this.borderColor+" transparent transparent",_borderStyle:"solid dashed dashed",left:"50%","margin-left":"-5px",bottom:"-5px"},tipArrowTopIn:{borderWidth:"5px 5px 0",borderColor:this.bg+" transparent transparent",_borderStyle:"solid dashed dashed",bottom:"1px",left:"-5px"},tipArrowBottom:{borderWidth:"0 5px 5px",borderColor:"transparent transparent "+this.borderColor,_borderStyle:"dashed dashed solid",left:"50%","margin-left":"-5px",top:"-5px"},tipArrowBottomIn:{borderWidth:"0 5px 5px",borderColor:"transparent transparent "+this.bg,_borderStyle:"dashed dashed solid",top:"1px",left:"-5px"}}},inArray:function(t,o){var r=-1;return $.each(t,function(t,e){e==o&&(r=t)}),r}});return t});