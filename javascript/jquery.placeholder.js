!function(e,r,o){var a,t,l="placeholder"in r.createElement("input"),d="placeholder"in r.createElement("textarea"),c=o.fn,n=o.valHooks,i=o.propHooks;function h(e,a){var t=this,l=o(t);if(t.value==l.attr("placeholder")&&l.hasClass("placeholder"))if(l.data("placeholder-password")){if(l=l.hide().next().show().attr("id",l.removeAttr("id").data("placeholder-id")),!0===e)return l[0].value=a;l.focus()}else t.value="",l.removeClass("placeholder"),t==r.activeElement&&t.select()}function u(){var a,e=this,t=o(e),l=this.id;if(""==e.value){if("password"==e.type){if(!t.data("placeholder-textinput")){try{a=t.clone().attr({type:"text"})}catch(e){a=o("<input>").attr(o.extend(function(e){var t={},l=/^jQuery\d+$/;return o.each(e.attributes,function(e,a){a.specified&&!l.test(a.name)&&(t[a.name]=a.value)}),t}(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":t,"placeholder-id":l}).bind("focus.placeholder",h),t.data({"placeholder-textinput":a,"placeholder-id":l}).before(a)}t=t.removeAttr("id").hide().prev().attr("id",l).show()}t.addClass("placeholder"),t[0].value=t.attr("placeholder")}else t.removeClass("placeholder")}l&&d?(t=c.placeholder=function(){return this}).input=t.textarea=!0:((t=c.placeholder=function(){return this.filter((l?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":u}).data("placeholder-enabled",!0).trigger("blur.placeholder"),this}).input=l,t.textarea=d,a={get:function(e){var a=o(e),t=a.data("placeholder-password");return t?t[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":e.value},set:function(e,a){var t=o(e),l=t.data("placeholder-password");return l?l[0].value=a:t.data("placeholder-enabled")?(""==a?(e.value=a,e!=r.activeElement&&u.call(e)):t.hasClass("placeholder")&&h.call(e,!0,a)||(e.value=a),t):e.value=a}},l||(n.input=a,i.value=a),d||(n.textarea=a,i.value=a),o(function(){o(r).delegate("form","submit.placeholder",function(){var e=o(".placeholder",this).each(h);setTimeout(function(){e.each(u)},10)})}),o(e).bind("beforeunload.placeholder",function(){o(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);