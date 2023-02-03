"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[81717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||x[u]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={id:"pixi_extensions",title:"Module: @pixi/extensions",sidebar_label:"@pixi/extensions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/modules/pixi_extensions",id:"api/modules/pixi_extensions",title:"Module: @pixi/extensions",description:"Enumerations",source:"@site/docs/api/modules/pixi_extensions.md",sourceDirName:"api/modules",slug:"/api/modules/pixi_extensions",permalink:"/api/modules/pixi_extensions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"pixi_extensions",title:"Module: @pixi/extensions",sidebar_label:"@pixi/extensions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"@pixi/events",permalink:"/api/modules/pixi_events"},next:{title:"@pixi/extract",permalink:"/api/modules/pixi_extract"}},s={},p=[{value:"Enumerations",id:"enumerations",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"ExtensionHandler",id:"extensionhandler",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"ExtensionMetadata",id:"extensionmetadata",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Variables",id:"variables",level:2},{value:"extensions",id:"extensions",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enumerations"},"Enumerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/enums/pixi_extensions.ExtensionType"},"ExtensionType"))),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/pixi_extensions.ExtensionFormat"},"ExtensionFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/pixi_extensions.ExtensionFormatLoose"},"ExtensionFormatLoose"))),(0,a.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,a.kt)("h3",{id:"extensionhandler"},"ExtensionHandler"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"ExtensionHandler"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"extension"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_extensions.ExtensionFormat"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionFormat")),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"extension"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"extension")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/api/interfaces/pixi_extensions.ExtensionFormat"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionFormat")))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L65"},"pixijs/packages/extensions/src/index.ts:65")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"extensionmetadata"},"ExtensionMetadata"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"ExtensionMetadata"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/enums/pixi_extensions.ExtensionType"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionType"))," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtensionMetadataDetails")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L35"},"pixijs/packages/extensions/src/index.ts:35")),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"extensions"},"extensions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"extensions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"Global registration of all PixiJS extensions. One-stop-shop for extensibility."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,a.kt)("p",null,"PIXI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Namespace"))),(0,a.kt)("p",null,"extensions"),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"add")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(...",(0,a.kt)("inlineCode",{parentName:"td"},"extensions"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]) => { ","_","addHandlers: Record<ExtensionType, ExtensionHandler",">","; ","_","removeHandlers: Record<ExtensionType, ExtensionHandler",">","; ... 5 more ...; handleByList(type: ExtensionType, list: any[], defaultPriority?: number): ...; }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"handle")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("a",{parentName:"td",href:"/api/enums/pixi_extensions.ExtensionType"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionType")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"onAdd"),": ",(0,a.kt)("a",{parentName:"td",href:"/api/modules/pixi_extensions#extensionhandler"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionHandler")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"onRemove"),": ",(0,a.kt)("a",{parentName:"td",href:"/api/modules/pixi_extensions#extensionhandler"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionHandler")),") => { ","_","addHandlers: Record<ExtensionType, ExtensionHandler",">","; ","_","removeHandlers: Record<ExtensionType, ExtensionHandler",">","; ... 5 more ...; handleByList(type: ExtensionType, list: any[], defaultPriority?: number): ...; }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"handleByList")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("a",{parentName:"td",href:"/api/enums/pixi_extensions.ExtensionType"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionType")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"list"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[], ",(0,a.kt)("inlineCode",{parentName:"td"},"defaultPriority"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"number"),") => { ","_","addHandlers: Record<ExtensionType, ExtensionHandler",">","; ","_","removeHandlers: Record<ExtensionType, ExtensionHandler",">","; ... 5 more ...; handleByList(type: ExtensionType, list: any[], defaultPriority?: number): ...; }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"handleByMap")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(",(0,a.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,a.kt)("a",{parentName:"td",href:"/api/enums/pixi_extensions.ExtensionType"},(0,a.kt)("inlineCode",{parentName:"a"},"ExtensionType")),", ",(0,a.kt)("inlineCode",{parentName:"td"},"map"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">",") => { ","_","addHandlers: Record<ExtensionType, ExtensionHandler",">","; ","_","removeHandlers: Record<ExtensionType, ExtensionHandler",">","; ... 5 more ...; handleByList(type: ExtensionType, list: any[], defaultPriority?: number): ...; }")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"remove")),(0,a.kt)("td",{parentName:"tr",align:"left"},"(...",(0,a.kt)("inlineCode",{parentName:"td"},"extensions"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]) => { ","_","addHandlers: Record<ExtensionType, ExtensionHandler",">","; ","_","removeHandlers: Record<ExtensionType, ExtensionHandler",">","; ... 5 more ...; handleByList(type: ExtensionType, list: any[], defaultPriority?: number): ...; }")))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/extensions/src/index.ts#L120"},"pixijs/packages/extensions/src/index.ts:120")))}m.isMDXComponent=!0}}]);