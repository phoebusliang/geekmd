(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={index:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"2e76":function(e,t,n){"use strict";var a=n("e73f"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("28dd"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-drawer-layout",{ref:"drawer",attrs:{"drawer-width":300,enable:!1,animatable:!0,"z-index":0,"drawable-distance":Math.floor(200/3),"content-drawable":!0,backdrop:!0,"backdrop-opacity-range":[0,.4]},on:{"mask-click":e.handleToggleDrawer}},[n("div",{staticClass:"drawer",staticStyle:{height:"100vh"},attrs:{slot:"drawer"},slot:"drawer"},[n("sidebar")],1),n("div",{staticClass:"drawer-content",attrs:{slot:"content"},slot:"content"},[n("header",{staticClass:"drawer-content-header",on:{click:e.handleToggleDrawer}},[n("span",{staticClass:"drawer-content-title menu_item"},[e._v("极客MD编辑器")])]),n("markdown")],1)])],1)},o=[],c=n("d225"),s=n("b0b4"),l=n("308d"),u=n("6bb5"),d=n("4e2b"),p=(n("7f7f"),n("f77e")),f=n("2fe1"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-container",attrs:{id:"markdown"}},[n("header",[n("div",{staticClass:"menu_group right"},[n("button",{staticClass:"menu_item",on:{click:e.reset}},[e._v("重置")]),n("button",{ref:"button",staticClass:"menu_item"},[e._v("复制")]),n("button",{staticClass:"menu_item",class:{active:1===e.viewState.length&&"edit"===e.viewState[0]},on:{click:function(t){e.viewState=["edit"]}}},[e._v("仅编辑\n      ")]),n("button",{staticClass:"menu_item",class:{active:1===e.viewState.length&&"preview"===e.viewState[0]},on:{click:function(t){e.viewState=["preview"]}}},[e._v("仅预览\n      ")]),n("button",{staticClass:"menu_item",class:{active:e.viewState.indexOf("edit")>=0&&e.viewState.indexOf("preview")>=0},on:{click:function(t){e.viewState=["edit","preview"]}}},[e._v("编辑|预览\n      ")])])]),e.viewState.indexOf("edit")>=0?n("div",{staticClass:"markdown-input-section section"},[n("div",{staticClass:"markdown-input-container"},[e.showSubjectInput?n("div",{staticClass:"subject-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rawEmailSubjectInput,expression:"rawEmailSubjectInput"}],attrs:{id:"emailSubject",type:"text",placeholder:"请输入邮件主题"},domProps:{value:e.rawEmailSubjectInput},on:{input:function(t){t.target.composing||(e.rawEmailSubjectInput=t.target.value)}}})]):e._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rawInputMd,expression:"rawInputMd"}],ref:"inputTextArea",staticClass:"edit-text-area content",attrs:{autocomplete:"off"},domProps:{value:e.rawInputMd},on:{scroll:e.onInputScroll,input:function(t){t.target.composing||(e.rawInputMd=t.target.value)}}})])]):e._e(),e.viewState.indexOf("preview")>=0?n("Preview",{ref:"preview",attrs:{subject:e.rawEmailSubjectInput,content:e.rawInputMd}}):e._e()],1)},h=[],g=(n("6b54"),n("ac6a"),n("60a3")),m=n("b311"),b=n.n(m),w=n("b012"),y=n.n(w),S=n("d4cd"),j=n("1487"),k=n("362d"),O=n.n(k),_=n("54f6"),x=n.n(_),I=n("7ba6"),C=n.n(I),T=n("ff97"),E=n.n(T),A=n("5121"),M=n.n(A),H=n("e6f9"),D=n.n(H),P=n("4bb9"),$=n.n(P),N=n("be03"),L=n.n(N),R=n("2d46"),F=n.n(R),U=n("5316"),J=n.n(U),z=n("8a99"),q=n.n(z);console.log(S["tokens"]);var B=S({html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(e){return Object(j["highlightAuto"])(e).value}});B.use(O.a).use(C.a).use(x.a).use(E.a).use(M.a).use(D.a).use($.a).use(L.a).use(J.a).use(q.a,{dataType:!1,figcaption:!0,tabindex:!1,link:!0,figcaption_open:"div class='figcaption'",figure_open:"div class='figure'",figcaption_close:"div",figure_close:"div"}).use(F.a),console.log(B.renderer.rules),B.renderer.rules.table_open=function(){return'<table class="table">'};var G,W,K,Q,V,X,Y,Z,ee,te,ne=B,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"html-preview-section section"},[n("div",{ref:"parsedHtmlNode",staticClass:"html-preview-content content"},[n("div",{staticClass:"mail-container"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"content-header"},[n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.emailSubject()||"<空主题>")}})]),n("div",{staticClass:"content-body",domProps:{innerHTML:e._s(e.parsedHtml())}}),n("div",{staticClass:"content-footer"})]),n("div",{staticClass:"copyright-info"},[e._v("\n        本邮件自豪地采用“"),n("a",{attrs:{href:e.pageUrl}},[e._v("极客MD")]),e._v("”编辑并排版\n      ")])])])])},re=[],ie=(n("a481"),n("28a5"),G=Object(g["a"])({props:{subject:String,content:String}}),G((K=function(e){function t(){var e,n;Object(c["a"])(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(l["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(r))),n.subject="",n.content="",n.pageUrl=window.location.origin,n}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"previewHtmlNode",value:function(){return this.$refs.parsedHtmlNode}},{key:"emailSubject",value:function(){if(this.subject){var e=this.subject.split("\n");return'<div class="sub-title">'.concat(e[0],"</div>").concat(e[1]||"")}return"< 空主题 >"}},{key:"parsedHtml",value:function(){if(this.content){var e=t.parseRawMd(this.content);return ne.render(e)}return'<p style="margin-top: 100px;text-align: center;color: #5e6772">内容为空</p>'}}],[{key:"parseRawMd",value:function(e){return e.replace("\n","\r\n\n")}}]),t}(g["b"]),W=K))||W),oe=ie,ce=n("2877"),se=Object(ce["a"])(oe,ae,re,!1,null,"67619f06",null),le=se.exports,ue=function(){function e(t){Object(c["a"])(this,e),this.inputTextArea=t}return Object(s["a"])(e,[{key:"insertTextAtCursor",value:function(e){var t=this;return this.inputTextArea.focus(),new Promise((function(n){var a=document.execCommand("insertText",!1,e);if(!a&&"function"===typeof t.inputTextArea.setRangeText){var r=t.inputTextArea.selectionStart;t.inputTextArea.setRangeText(e),t.inputTextArea.selectionStart=r+e.length,t.inputTextArea.selectionEnd=r+e.length;var i=document.createEvent("UIEvent");i.initEvent("input",!0,!1),t.inputTextArea.dispatchEvent(i)}n(t.inputTextArea.value),t.inputTextArea.focus()}))}}],[{key:"syncElementScrolling",value:function(e,t){var n=t;n.scrollTop=(e.scrollTop+e.offsetHeight)/e.scrollHeight*t.scrollHeight-t.offsetHeight,n.scrollTop*=e.scrollTop/(e.scrollHeight-e.offsetHeight)}}]),e}(),de=function(){function e(t){Object(c["a"])(this,e),this.id=t.id,this.alt=t.alt,this.data=t.data}return Object(s["a"])(e,[{key:"id",set:function(e){this.id=e}}]),e}(),pe=function(){function e(){Object(c["a"])(this,e),this.name="tech-radar",this.repo="".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port,"/themes")}return Object(s["a"])(e,[{key:"useRepo",value:function(e){return this.repo=e,this}},{key:"useTheme",value:function(e){return this.name=e,this}},{key:"getImageSrc",value:function(e){return"".concat(this.path("image"),"/").concat(e)}},{key:"path",value:function(e){return"".concat(this.repo,"/").concat(e)}}]),e}(),fe=(Q=Object(g["a"])({components:{Preview:le}}),Q((X=function(e){function t(){var e,n;Object(c["a"])(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(l["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(r))),n.viewState=["edit","preview"],n.rawInputMd="",n.rawEmailSubjectInput="极客MD编辑器\n用Markdown写邮件",n.editHelper=null,n.imageStorage=[],n.showSubjectInput=!0,n.themeService=new pe,n}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"reset",value:function(){localStorage.removeItem("md.images"),localStorage.removeItem("md.emailSubjectInput"),localStorage.removeItem("md.content"),this.loadDefaultContent()}},{key:"mounted",value:function(){this.editHelper=new ue(this.$refs.inputTextArea),this.loadDefaultContent(),this.registerEvents()}},{key:"loadDefaultContent",value:function(){var e=this;try{this.imageStorage=JSON.parse(localStorage.getItem("md.images")||"[]")}catch(a){this.imageStorage=[]}this.imageStorage&&this.imageStorage.constructor===Array&&this.imageStorage.length>0?this.imageStorage.forEach((function(e){ne.image_add("".concat(e.id),e.data)})):this.imageStorage=[];var t=localStorage.getItem("md.emailSubjectInput");t&&(this.rawEmailSubjectInput=t);var n=localStorage.getItem("md.content");n?this.rawInputMd=n:this.$http.get("/data/example.md").then((function(t){e.rawInputMd=t.body}))}},{key:"registerEvents",value:function(){var e=this,n=this;this.$watch("rawEmailSubjectInput",(function(e){y()((function(){return localStorage.setItem("md.emailSubjectInput",e)}),500)()})),this.$watch("rawInputMd",(function(e){e||(n.imageStorage=[]),y()((function(){return localStorage.setItem("md.content",e)}),1e3)()})),this.$watch("imageStorage",(function(e){y()((function(){return localStorage.setItem("md.images",JSON.stringify(e))}),1e3)()}));var a=this.$refs.button,r=new b.a(a,{target:function(){return e.$refs.preview.previewHtmlNode()}});r.on("success",t.onCopy),r.on("error",t.onError);var i=this.$refs.inputTextArea;i.addEventListener("paste",(function(t){var n=t.clipboardData;if(n){var a=n.items;if(!a)return;for(var r=n.types||[],i=null,o=0;o<r.length;o+=1)if("Files"===r[o]){i=a[o];break}if(i&&"file"===i.kind){t.preventDefault(),t.stopPropagation();var c=i.getAsFile(),s=new FileReader;s.onload=function(){if(s){var t=s.result.toString()||"",n=new de({id:0,alt:"图片描述",data:t});e.addImage(n),e.editHelper.insertTextAtCursor("\n![".concat(n.alt,"](").concat(n.id,")\n\n")||!1).then((function(t){e.rawInputMd=t}))}},c&&s.readAsDataURL(c)}}}))}},{key:"addImage",value:function(e){e.id("./images/".concat("".concat((new Date).getTime(),"_").concat(this.imageStorage.length,1),".pic")),this.imageStorage.push(e),ne.image_add("".concat(e.id),e.data)}},{key:"onInputScroll",value:function(e){this.showSubjectInput=e.target.scrollTop<=10,this.editHelper.syncElementScrolling(e.srcElement,this.$refs.preview.previewHtmlNode())}}],[{key:"onCopy",value:function(){alert("复制成功!")}},{key:"onError",value:function(){alert("复制失败")}}]),t}(g["b"]),V=X))||V),ve=fe,he=(n("2e76"),Object(ce["a"])(ve,v,h,!1,null,null,null)),ge=he.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[e.isLoggedIn?n("div",[n("img",{staticStyle:{"border-radius":"50px"},attrs:{src:e.user.avatar_url,alt:"",width:"100"}}),n("div",[e._v(e._s(e.user.name))])]):n("a",{attrs:{href:"#"},on:{click:e.login}},[e._v("请登录")])])},be=[],we=n("0262"),ye=n.n(we),Se=Object(g["a"])((Z=function(e){function t(){var e,n;Object(c["a"])(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(l["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(r))),n.isLoggedIn=!1,n.user={},n}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){var e=this,t=localStorage.getItem("access_token");if(t){var n=new ye.a({token:t}),a=n.getUser();a.getProfile().then((function(t){e.user=t.data,e.isLoggedIn=!0,n.getRepo(e.user.login,"geekmd-files").getDetails().catch((function(e){404===e.response.status&&a.createRepo({name:"geekmd-files",description:"Files generated by GeekMD",private:!0})}))})).catch((function(){e.isLoggedIn=!1}))}}},{key:"login",value:function(){var e=360,t=600,n=(window.screen.availHeight-30-t)/2,a=(window.screen.availWidth-10-e)/2;window.open("https://github.com/login/oauth/authorize?client_id=2716d2180d1a362bf08a&scope=repo&redirect_uri=https://md.wangbaiyuan.cn/auth","newwindow","height=".concat(t,", width=").concat(e,", top=").concat(n,", left=").concat(a,", toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no, titlebar=no"))}}]),t}(g["b"]),Y=Z))||Y,je=Se,ke=Object(ce["a"])(je,me,be,!1,null,"1f3db566",null),Oe=ke.exports;a["a"].component(p["DrawerLayout"].name,p["DrawerLayout"]);var _e=(ee=Object(f["b"])({components:{markdown:ge,sidebar:Oe}}),ee(te=function(e){function t(){return Object(c["a"])(this,t),Object(l["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"handleToggleDrawer",value:function(){this.$refs.drawer.toggle()}}]),t}(a["a"]))||te),xe=_e,Ie=(n("5c0b"),Object(ce["a"])(xe,i,o,!1,null,null,null)),Ce=Ie.exports,Te=n("9483");Object(Te["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({render:function(e){return e(Ce)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("e332"),r=n.n(a);r.a},e332:function(e,t,n){},e73f:function(e,t,n){}});