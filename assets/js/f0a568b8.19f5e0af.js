"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4821],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||n;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={id:"pixi_core.IFilterTarget",title:"Interface: IFilterTarget",sidebar_label:"IFilterTarget",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/pixi_core.IFilterTarget",id:"api/interfaces/pixi_core.IFilterTarget",title:"Interface: IFilterTarget",description:"@pixi/core.IFilterTarget",source:"@site/docs/api/interfaces/pixi_core.IFilterTarget.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_core.IFilterTarget",permalink:"/api/interfaces/pixi_core.IFilterTarget",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.IFilterTarget",title:"Interface: IFilterTarget",sidebar_label:"IFilterTarget",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ICubeResourceOptions",permalink:"/api/interfaces/pixi_core.ICubeResourceOptions"},next:{title:"IGenerateTextureOptions",permalink:"/api/interfaces/pixi_core.IGenerateTextureOptions"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"filterArea",id:"filterarea",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"getBounds",id:"getbounds",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".IFilterTarget"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IFilterTarget"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_core.IMaskTarget"},(0,i.kt)("inlineCode",{parentName:"a"},"IMaskTarget"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"filterarea"},"filterArea"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"filterArea"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,i.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/filters/IFilterTarget.ts#L5"},"pixijs/packages/core/src/filters/IFilterTarget.ts:5")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getbounds"},"getBounds"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getBounds"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"skipUpdate?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,i.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"skipUpdate?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/pixi_core.Rectangle"},(0,i.kt)("inlineCode",{parentName:"a"},"Rectangle"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/filters/IFilterTarget.ts#L6"},"pixijs/packages/core/src/filters/IFilterTarget.ts:6")))}u.isMDXComponent=!0}}]);