function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var defer=function(){var a=!1,c=[];return{resolved:function(){return a},resolve:function(e){if(!a){a=!0;for(var t=0,r=c.length;t<r;t++)c[t](e)}},promise:{then:function(e){a?e():c.push(e)}}}},ownProp=Object.prototype.hasOwnProperty;function createRecaptcha(){var e=defer();return{notify:function(){e.resolve()},wait:function(){return e.promise},render:function(e,t,r){this.wait().then(function(){r(window.grecaptcha.enterprise.render(e,t))})},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.enterprise.reset(e)}))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.enterprise.execute(e)}))},checkRecaptchaLoad:function(){ownProp.call(window,"grecaptcha")&&ownProp.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!e.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var recaptcha=createRecaptcha(),CaptachaComponents=(()=>{var a={},c=null,n="",i=null;function e(e){i("verified",e)}function t(){i("expired")}function r(){i("error")}function o(){try{grecaptcha.enterprise.render(n||c,_extends(_extends({},a),{},{sitekey:a.sitekey,callback:e,"expired-callback":t,"error-callback":r}))}catch(e){}}return{registerVueComponent:function(){Vue.customElement("v-recaptcha",{props:{sitekey:{type:String,required:!0},theme:{type:String,default:"dark"},badge:{type:String},type:{type:String,default:"checkbox"},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""},loadscript:{type:Boolean,default:!1}},beforeMount:function(){var e;document.getElementById(this.recaptchaScriptId)||(this.loadscript&&((e=document.createElement("script")).id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/enterprise.js?onload=initCaptcha&render=explicit",e.async=!0,e.defer=!0,document.head.appendChild(e)),(e=document.createElement("script")).id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/enterprise.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,e.async=!0,e.defer=!0,document.head.appendChild(e))},mounted:function(){var t=this,e=(recaptcha.checkRecaptchaLoad(),_extends(_extends({},this.$props),{},{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError})),r=this.$slots.default?this.$el.children[0]:this.$el;recaptcha.render(r,e,function(e){t.$widgetId=e,t.$emit("render",e)})},methods:{reset:function(){recaptcha.reset(this.$widgetId)},execute:function(){recaptcha.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}})},registerComponent:function(e,t,r){e&&"function"==typeof t&&(n=r,i=t,a={sitekey:(c=e).getAttribute("data-sitekey"),theme:e.getAttribute("data-theme")?e.getAttribute("data-theme"):"dark",type:e.getAttribute("data-type")?e.getAttribute("data-type"):checkboxTypeCaptcha,recaptchaScriptId:e.getAttribute("data-scriptId")?e.getAttribute("data-scriptId"):"__RECAPTCHA_SCRIPT",recaptchaHost:e.getAttribute("data-recaptchaHost")?e.getAttribute("data-recaptchaHost"):"www.google.com",language:e.getAttribute("data-language")?e.getAttribute("data-language"):""}),"object"==typeof grecaptcha?o():document.getElementById(a.recaptchaScriptId)||"undefined"!=typeof grecaptcha||((r=document.createElement("script")).id=a.recaptchaScriptId,r.src="https://"+a.recaptchaHost+"/recaptcha/enterprise.js?onload=recaptchaApiLoaded&render=explicit&hl="+a.language,r.async=!0,r.defer=!0,document.head.appendChild(r))},renderCaptcha:o,getCaptchaResponse:function(e){return e=void 0!==e?e:0,grecaptcha.enterprise.getResponse(e)},resetCaptcha:function(e){e=void 0!==e?e:0,"undefined"!=typeof grecaptcha&&grecaptcha.enterprise.reset(e)}}})();"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=recaptcha.notify,window.recaptchaApiLoaded=CaptachaComponents.renderCaptcha);