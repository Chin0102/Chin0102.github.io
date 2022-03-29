(function(){"use strict";var e={5995:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(5200),a=(n(1539),n(4747),n(9720),n(9714),n(144)),o=n(8932),i=(n(8309),n(2222),n(1249),n(6133)),s=n(2751),u=(n(1038),n(8783),n(189),n(3948),function(){function e(){(0,i.Z)(this,e),this._namespace={},this._groups={}}return(0,s.Z)(e,[{key:"set",value:function(e,t){this._namespace[e]=t}},{key:"has",value:function(e){return this._namespace.hasOwnProperty(e)}},{key:"get",value:function(e){if(this.has(e))return this._namespace[e];console.warn("the name:".concat(e," is undefined"))}},{key:"group",value:function(e){for(var t=this,n=this._groups,r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];if(!(a.length>0)){if(n.hasOwnProperty(e)){var s=[];return n[e].forEach((function(e){t._groups.hasOwnProperty(e)?s.push.apply(s,(0,o.Z)(t.group(e))):s.push(e)})),Array.from(new Set(s))}return[]}if(this.has(e))throw"the group name:".concat(e," is occupied");n[e]=a}},{key:"forEach",value:function(e){Object.entries(this._namespace).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],o=n[1];return e(o,a)}))}},{key:"retrieve",value:function(e,t){var n=this;e.forEach((function(e){n._groups.hasOwnProperty(e)?n.group(e).map((function(e){return t(n.get(e),e)})):n.has(e)&&t(n.get(e),e)}))}},{key:"list",value:function(){for(var e=[],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.retrieve(n,(function(t){return e.push(t)})),e}},{key:"map",value:function(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.retrieve(n,(function(t,n){return e[n]=t})),e}},{key:"delete",value:function(e){this._groups.hasOwnProperty(e)?delete this._groups[e]:this.has(e)&&delete this._namespace[e]}}]),e}()),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{configurable:!1,enumerable:t,writable:!1,value:e}},l="[object Array]",f="[object Object]",h="[object String]",p="[object Number]",v="[object Boolean]",d="[object Function]",m=function(e){return Object.prototype.toString.call(e)},g=function(e,t){return m(e)===t},y=function(e){return g(e,l)},_=function(e){return g(e,f)},b=function(e){return g(e,d)},w=function(e){return g(e,h)},$=function(e){return g(e,p)},q=function(e){return g(e,v)},S={name:"globalEvent",init:function(e){e.store.set("globalEvent",{data:function(){return{globalEventHandlers:{}}},mounted:function(){var e=this,t=this.$options.eventHandlers;t&&Object.entries(t).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],o=n[1];w(o)&&(o=e[o]),b(o)&&e.$VueMixinsPack.dispatcher.$on(a,e.globalEventHandlers[a]=o.bind(e))}))},beforeDestroy:function(){var e=this;Object.entries(this.globalEventHandlers).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],o=n[1];return e.$VueMixinsPack.dispatcher.$off(a,o)}))}})}},k=(n(4916),n(5306),n(3123),n(9600),{Number:{toModel:function(e){return parseFloat(e)},toQueryString:function(e){return 0===e||e?e.toString():NaN}},Boolean:{toModel:function(e){return"0"!==e&&"false"!==e},toQueryString:function(e){return e?e.toString():"false"}},Array:{toModel:function(e){return e.split(",")},toQueryString:function(e){return e?e.join(","):""}},NumberArray:{toModel:function(e){return e.split(",").map((function(e){return parseFloat(e)}))},toQueryString:function(e){return e.join(",")}}}),O={name:"query",init:function(e){e.store.set("query",{data:function(){return{queryConverter:{},queryDefault:{},query:{}}},watch:{$route:"_handleRouteChange"},mounted:function(){var e=this;this.$nextTick((function(){var t=e.queryConverter;Object.entries(e.query).forEach((function(n){var a=(0,r.Z)(n,2),o=a[0],i=a[1];w(i)||t.hasOwnProperty(o)||($(i)?t[o]=k.Number:q(i)?t[o]=k.Boolean:y(i)&&(t[o]=k.Array)),$(i)&&isNaN(i)&&(i=e.query[o]=""),e.queryDefault[o]=i})),e._handleRouteChange()}))},methods:{$locate:function(){var e=this;this.$options.$beforeLocate&&this.$options.$beforeLocate.bind(this)(this.query,this.$route.params);var t={},n=this.queryConverter;Object.entries(this.query).forEach((function(e){var a=(0,r.Z)(e,2),o=a[0],i=a[1];n.hasOwnProperty(o)&&(i=n[o].toQueryString(i)),!i&&0!==i||""===i||(t[o]=String(i).replace(/(^\s*)|(\s*$)/g,""))})),this.$router.push({path:this.$route.path,query:t}).then((function(t){t.path||t.query||e._handleRouteChange()}))},_handleRouteChange:function(){var e={},t=this.queryConverter;Object.entries(this.$route.query).forEach((function(n){var a=(0,r.Z)(n,2),o=a[0],i=a[1];i=i.replace(/(^\s*)|(\s*$)/g,""),t.hasOwnProperty(o)&&(i=t[o].toModel(i)),e[o]=i})),Object.assign(this.query,this.queryDefault,e),this.$options.$routeChanged&&this.$options.$routeChanged.bind(this)(this.query,this.$route.params)}}})}},x=n(9669),P=n.n(x),E=n(129),j=n.n(E),Z=new u,N=function(){function e(t){(0,i.Z)(this,e),this.name=t.name,this.axios=P().create(t.config),t.init(this.axios),this.api=t.api}return(0,s.Z)(e,[{key:"request",value:function(e,t){if(!this.api.hasOwnProperty(t))throw"without api:".concat(t," in service:").concat(this.name," ");for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var o=this.api[t].bind(e).apply(void 0,r),i=o.query,s=o.form,u=o.method;return i&&(o.params=i,delete o.query),s&&(o.data=j().stringify(s),delete o.form),u||(o.method=o.data?"post":"get"),this.axios.request(o)}}]),e}(),C={name:"service",init:function(e){e.store.set("service",{methods:{$api:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return function(){return t.$invoke.apply(t,[e].concat(r))}},$invoke:function(e){for(var t,n=e.split("/"),a=(0,r.Z)(n,2),o=a[0],i=a[1],s=arguments.length,u=new Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=arguments[c];return(t=Z.get(o)).request.apply(t,[this,i].concat(u))}}})},add:function(e){e=new N(e),Z.set(e.name,e)}},D=(n(8862),n(7327),n(7941),!1);try{window.localStorage.setItem("___test","OK");var M=window.localStorage.getItem("___test");window.localStorage.removeItem("___test"),D="OK"===M}catch(je){D=!1}var A,T=function(){function e(t,n){(0,i.Z)(this,e),n||(n=function(){return{}}),this.__default__=n,this.name=t,this.reload()}return(0,s.Z)(e,[{key:"reload",value:function(){var e;return D&&(e=window.localStorage.getItem(this.name)),this.__cache__=e&&w(e)?JSON.parse(e):this.__default__(D),this}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.__cache__[e]=t,n&&this.update()}},{key:"has",value:function(e){return this.__cache__.hasOwnProperty(e)}},{key:"get",value:function(e,t){return!this.__cache__.hasOwnProperty(e)&&t&&(this.__cache__[e]=t()),this.__cache__[e]}},{key:"del",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];delete this.__cache__[e],t&&this.update()}},{key:"destroy",value:function(){this.__cache__={},D&&window.localStorage.removeItem(this.name)}},{key:"update",value:function(){D&&window.localStorage.setItem(this.name,JSON.stringify(this.__cache__))}},{key:"merge",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object.keys(e).filter((function(e){return n||!t.has(e)})).forEach((function(n){return t.__cache__[n]=e[n]})),r&&this.update()}}]),e}(),H=new u,L=function(e,t){return H.has(e)||H.set(e,new T(e,t)),H.get(e)},z=function(){return 1===arguments.length?H.get(arguments.length<=0?void 0:arguments[0]):H.map.apply(H,arguments)},U={name:"localStorage",item:L,items:z,init:function(e){var t=this;A||(A=function(n){var r=n.key,a=t.item(r);a&&e.dispatcher.$emit("localStorage:"+r,a.reload())},window.addEventListener("storage",A)),e.store.set("localStorage",{methods:{$localStorage:L,$localStorages:z}})},install:function(e){Object.defineProperty(e,"$localStorage",c(L)),Object.defineProperty(e,"$localStorages",c(z))}},I=new u,V=new u,J={version:"0.0.5",store:V,use:function(e){var t=e.name;if(!t)throw"the plugin name is undefined";if(I.has(t))throw"the plugin name:".concat(t," is occupied");for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e.init&&e.init.apply(e,[J].concat(r)),I.set(t,e)},install:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n.shift();a||(a=new e),J.dispatcher=a,Object.defineProperty(e.prototype,"$VueMixinsPack",c(J)),Object.defineProperty(e,"$VueMixinsPack",c(J)),I.forEach((function(t){return t.install&&t.install(e,J)}))},plugin:function(){return 1===arguments.length?I.get(arguments.length<=0?void 0:arguments[0]):I.map.apply(I,arguments)},preset:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];V.group.apply(V,[e].concat(n))},mixin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n=V.list(e);return t&&n.push.apply(n,(0,o.Z)(t)),n}};J.use(S),J.use(U),J.use(C),J.use(O),J.preset("default","globalEvent","localStorage","service","query");var Q=J;function R(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){clearTimeout(t),t=setTimeout(e,n)}}Q.use({name:"domEvent",init:function(e){window.resizeHandler||(window.resizeHandler=R((function(){return e.dispatcher.$emit("resize",{type:"window"})}),200),window.addEventListener("resize",window.resizeHandler)),window.scrollHandler||(window.scrollHandler=function(){return e.dispatcher.$emit("scroll")},window.addEventListener("scroll",window.scrollHandler))}}),Q.store.set("data",{data:function(){return{loading:!1}},methods:{isNull:function(e){return null===e||""===e||void 0===e||e.length<=0},mergeValid:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return n.forEach((function(t){return Object.entries(t).forEach((function(t){var n=(0,r.Z)(t,2),a=n[0],o=n[1];""!==o&&null!==o&&void 0!==o&&(e[a]=o)}))})),e},mergeArray:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a=t.pop(),o=[],i={};if(b(a))r=a;else{if(!w(a))throw"mergeArray need prop name";r=function(e){return e[a]}}return t.forEach((function(e){e.forEach((function(e){var t=r(e);i[t]||(i[t]=!0,o.push(e))}))})),o},operate:function(e){var t=this,n=e.action,r=e.success,a=e.error,o=e.finished,i=e.cancel,s=e.confirm,u=e.prompt,c=e.notifySuccessTitle,l=e.notifyErrorTitle,f=e.dangerouslyUseHTMLString,h=void 0!==f&&f,p=e.loading,v=void 0===p||p,d=function(e){v&&(t.loading=!0),n(e).then((function(e){if(e.success){var n=e.result,o=e.message;r&&r(n,e),c&&t.$notify({title:c,dangerouslyUseHTMLString:h,message:o,type:"success"})}else a&&a(e),l&&t.$notify({title:l,dangerouslyUseHTMLString:h,message:e.message,type:"error"});return e})).catch((function(e){e.response||e.request||"Network Error"===e.message?("Network Error"===e.message&&(e.message="接口请求失败,数据未正常返回"),a&&a({success:!1,message:e.toString()}),l&&t.$notify({title:l,dangerouslyUseHTMLString:h,message:e.toString(),type:"error"})):console.error(e)})).finally((function(){v&&(t.loading=!1),o&&o()}))};if(s){var m=_(s)?s:{message:s};m.hasOwnProperty("title")||(m.title="提示"),m.dangerouslyUseHTMLString=h,this.$confirm(m.message,m).then(d).catch(i||function(e){return""})}else u?this.$prompt(u.message,u).then((function(e){return d(e)})).catch(i||function(e){return""}):d()}}}),Q.preset("page","default","data"),Q.plugin("service").add({name:"demo",config:{baseURL:"http://localhost:3000/api/test",timeout:5e3},init:function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){var t=e.config;e.status,e.data;if(e.data){var n=e.data,r=n.code,a=n.result,o=200===r;return t.pagination,{success:o,result:a}}return e}),(function(e){return Promise.reject(e)}))},api:{list:function(){return{url:"/query",query:this.query,pagination:{page:1,size:10}}},create:function(e){return{url:"/form",form:e}},update:function(e){return{url:"/json",data:e}}}}),a["default"].use(Q);var F=n(4720),B=n.n(F),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmp-app"},[n("div",{staticClass:"vmp-header"},[e._m(0),n("div",[e._v("v"+e._s(e.$VueMixinsPack.version))])]),n("div",{staticClass:"vmp-main"},[n("div",{staticClass:"vmp-aside"},[n("router-link",{attrs:{"exact-active-class":"active",to:"/"}},[e._v("/")]),n("router-link",{attrs:{"exact-active-class":"active",to:"/query-service"}},[e._v("query & service")]),n("router-link",{attrs:{"exact-active-class":"active",to:"/local-storage"}},[e._v("local-storage")]),n("router-link",{attrs:{"exact-active-class":"active",to:"/global-event"}},[e._v("global-event")])],1),n("router-view",{staticClass:"vmp-content"})],1)])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"logo",attrs:{href:"/"}},[n("img",{attrs:{src:"logo.svg",alt:"vue logo"}}),n("span",[e._v("Vue Mixins Pack")])])}],W={name:"app"},X=W,Y=n(1001),ee=(0,Y.Z)(X,K,G,!1,null,"f032f0ca",null),te=ee.exports,ne=n(8345),re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},ae=[],oe={name:"vmp-main"},ie=oe,se=(0,Y.Z)(ie,re,ae,!1,null,"30adc00e",null),ue=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"clearfix",attrs:{"label-position":"top"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:5}},[n("el-form-item",{attrs:{label:"query.num"}},[n("el-input-number",{model:{value:e.query.num,callback:function(t){e.$set(e.query,"num",t)},expression:"query.num"}})],1)],1),n("el-col",{attrs:{span:5}},[n("el-form-item",{attrs:{label:"query.str"}},[n("el-input",{model:{value:e.query.str,callback:function(t){e.$set(e.query,"str",t)},expression:"query.str"}})],1)],1),n("el-col",{attrs:{span:5}},[n("el-form-item",{attrs:{label:"query.bool"}},[n("el-switch",{model:{value:e.query.bool,callback:function(t){e.$set(e.query,"bool",t)},expression:"query.bool"}})],1)],1),n("el-col",{attrs:{span:5}},[n("el-form-item",{attrs:{label:"query.arr"}},[n("el-select",{attrs:{multiple:""},model:{value:e.query.arr,callback:function(t){e.$set(e.query,"arr",t)},expression:"query.arr"}},e._l(e.query.arr,(function(e,t){return n("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1)],1),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.$locate}},[e._v("$locate")])],1)],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{label:"service response"}},[n("el-input",{attrs:{type:"textarea",value:e.response,readonly:"",rows:22}})],1)],1),n("el-col",{attrs:{span:4}},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.request("list")}}},[e._v("service-query")])],1),n("div",{staticStyle:{margin:"10px 0"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.request("create")}}},[e._v("service-form")])],1),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.request("update")}}},[e._v("service-json")])],1)])],1)],1)},le=[],fe={name:"query-demo",mixins:Q.mixin("page"),data:function(){return{query:{num:NaN,str:"",bool:!1,arr:[0,"p","t",1,"o","n",5]},response:""}},mounted:function(){},$routeChanged:function(e,t){var n=this;this.operate({action:this.$api("demo/list"),notifyErrorTitle:"error",success:function(e){n.response=JSON.stringify(e,null,4)},error:function(e){n.response=JSON.stringify(e,null,4)}})},methods:{request:function(e){var t=this;this.$invoke("demo/".concat(e),this.query).then((function(e){t.response=JSON.stringify(e,null,4)})).catch((function(e){t.response=JSON.stringify(e,null,4)}))}}},he=fe,pe=(0,Y.Z)(he,ce,le,!1,null,"3b888734",null),ve=pe.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("el-form",{staticClass:"clearfix",attrs:{"label-position":"top"}},[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"localStorage.TestLocalData.PageData.testStr"}},[n("el-input",{model:{value:e.PageData.testStr,callback:function(t){e.$set(e.PageData,"testStr",t)},expression:"PageData.testStr"}})],1)],1),n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"localStorage.TestLocalData.PageData.testNum"}},[n("el-input-number",{model:{value:e.PageData.testNum,callback:function(t){e.$set(e.PageData,"testNum",t)},expression:"PageData.testNum"}})],1)],1),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.localStorageUpdate}},[e._v("update")])],1)],1)],1)},me=[],ge={name:"local-storage-demo",mixins:Q.mixin("page"),data:function(){var e=this.$localStorage("TestLocalData",(function(){return{PageData:{testStr:"testStr",testNum:123}}}));return{localData:e,PageData:e.get("PageData")}},methods:{localStorageUpdate:function(){this.localData.update()}}},ye=ge,_e=(0,Y.Z)(ye,de,me,!1,null,"bb41a364",null),be=_e.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("I am listening window resize")])},$e=[],qe={name:"global-event-demo",mixins:Q.mixin("page"),eventHandlers:{resize:function(e){var t=e.type;this.$message("".concat(t," resized"))}}},Se=qe,ke=(0,Y.Z)(Se,we,$e,!1,null,"42c6d7bd",null),Oe=ke.exports,xe=ne.Z.prototype.push;ne.Z.prototype.push=function(e){return xe.call(this,e).catch((function(e){return e}))},a["default"].use(ne.Z);var Pe=new ne.Z({routes:[{name:"main",path:"/",component:ue},{name:"query",path:"/query-service",component:ve},{name:"local-storage",path:"/local-storage",component:be},{name:"global-event",path:"/global-event",component:Oe}]});Pe.beforeEach((function(e,t,n){n()}));var Ee=Pe;a["default"].use(B(),{size:"mini"}),new a["default"]({router:Ee,render:function(e){return e(te)}}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkvue_mixins_pack"]=self["webpackChunkvue_mixins_pack"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5995)}));r=n.O(r)})();
//# sourceMappingURL=index-legacy.2dda9794.js.map