(window.webpackJsonp=window.webpackJsonp||[]).push([["new-card/textHoleEle"],{"4ScS":function(t,e,n){"use strict";n("RW0V"),n("ioFf"),n("0l/t"),n("mYba"),n("jm62"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("pIFo"),n("KKXr"),n("f3/d");var i=n("YdJS"),r=n("H8mG");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={name:"textHoleEle",props:{wrapStyle:Object,info:Object,dataEle:String,paging:Function,fontList:Array},data:function(){return{isEdit:this.$route.meta.isEdit}},watch:{info:function(t,e){t.smallFontPath===e.smallFontPath||this.isEdit||this.loadFonts()}},computed:{withBrContent:function(){var t=this.info.content;return(void 0===t?"":t).replace(/\r\n|\n|\r/g,"<br>")},fontStyle:function(){var t=this.wrapStyle,e=this.info,n=this.isEdit,o=e.lineSpacing,c=void 0===o?-1:o,s=e.fontSize,f=e.color,d=e.alignment,l=void 0===d?0:d,u=e.smallFontPath,p=e.fontName,h=e.fitFullScreen,m=e.width,g=e.height,b=e.fontVersion,w=e.content;"MS.WANG"===(void 0===w?"":w)&&console.log("info",e,window.isLongPage);var v=n?p:u.split("/").pop().split(".")[0],O=window.isLongPage,S=a(a({},t),{},{wordBreak:"break-word",fontSize:(0,i.rem)(s)+"rem",color:f,textAlign:{0:"left",1:"center",2:"right"}[l],fontFamily:v,whiteSpace:"pre-wrap",transformOrigin:"left top",transform:"scale(.5)",width:(0,i.rem)(m)+"rem",height:(0,i.rem)(g)+"rem"}),y={fontSize:100,defaultLineHeight:120};return this.fontList.forEach((function(t){p===t.name&&(y=t)})),-1!==c&&(b&&0!==b?(S.lineHeight=(0,i.rem)(+c)+"rem",h&&(0,r.isMobile)()&&!O&&(S.lineHeight=+c+"px")):(S.lineHeight=(0,i.rem)(+(+s*y.defaultLineHeight/y.fontSize+ +(+c).toFixed()))+"rem",y.top&&(S.paddingTop=(0,i.rem)(y.top*s/y.fontSize)+"rem"),S.marginTop=-(0,i.rem)(c/4)+"rem",h&&(0,r.isMobile)()&&!O&&(S.lineHeight=+(+s*y.defaultLineHeight/y.fontSize+ +(+c).toFixed())+"px",y.top&&(S.paddingTop=y.top*s/y.fontSize+"px"),S.marginTop=-+c/4+"px"))),h&&(0,r.isMobile)()&&!O&&(S.fontSize=s+"px",S.width=m+"px",S.height=g+"px"),S}},destroyed:function(){},mounted:function(){},methods:{loadFonts:function(){if("fonts"in document){var t=this.info.smallFontPath,e=t.split("/").pop().split(".")[0],n=new FontFace(e,"url('".concat(t,"') format('woff2')"));n&&n.load().then((function(t){document.fonts.add(t)}))}}}};e.default=s},N8KS:function(t,e,n){"use strict";n.r(e);var i=n("4ScS"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e.default=r.a},fgWM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;e.render=function(){return(0,this._self._c)("div",{style:this.fontStyle,attrs:{"data-ele":this.dataEle},domProps:{innerHTML:this._s(this.withBrContent)},on:{click:this.paging}})};e.staticRenderFns=[]},"i+/c":function(t,e,n){"use strict";var i=n("fgWM");n.o(i,"render")&&n.d(e,"render",(function(){return i.render})),n.o(i,"staticRenderFns")&&n.d(e,"staticRenderFns",(function(){return i.staticRenderFns}))},"smD/":function(t,e,n){"use strict";n.r(e);var i=n("i+/c"),r=n("N8KS");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);var a=n("KHd+"),c=Object(a.a)(r.default,i.render,i.staticRenderFns,!1,null,"bea338ca",null);e.default=c.exports}}]);
//# sourceMappingURL=textHoleEle.dbd0886f.js.map