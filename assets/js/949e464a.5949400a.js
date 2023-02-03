"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[41526],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):p(p({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(i),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return i?n.createElement(m,p(p({ref:t},c),{},{components:i})):n.createElement(m,p({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,p=new Array(a);p[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<a;s++)p[s]=i[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},99179:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const a={id:"pixi_core.ViewOptions",title:"Interface: ViewOptions",sidebar_label:"ViewOptions",custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/pixi_core.ViewOptions",id:"api/interfaces/pixi_core.ViewOptions",title:"Interface: ViewOptions",description:"@pixi/core.ViewOptions",source:"@site/docs/api/interfaces/pixi_core.ViewOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_core.ViewOptions",permalink:"/api/interfaces/pixi_core.ViewOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_core.ViewOptions",title:"Interface: ViewOptions",sidebar_label:"ViewOptions",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"StartupOptions",permalink:"/api/interfaces/pixi_core.StartupOptions"},next:{title:"WebGLContextEventMap",permalink:"/api/interfaces/pixi_core.WebGLContextEventMap"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"autoDensity",id:"autodensity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"height",id:"height",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"resolution",id:"resolution",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"view",id:"view",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"width",id:"width",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/pixi_core"},"@pixi/core"),".ViewOptions"),(0,r.kt)("p",null,"Options passed to the ViewSystem"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,r.kt)("p",null,"PIXI"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"autodensity"},"autoDensity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"autoDensity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Resizes renderer view in CSS pixels to allow for resolutions other than 1."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/view/ViewSystem.ts#L23"},"pixijs/packages/core/src/view/ViewSystem.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The height of the screen."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/view/ViewSystem.ts#L19"},"pixijs/packages/core/src/view/ViewSystem.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resolution"},"resolution"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"resolution"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The resolution / device pixel ratio of the renderer."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/view/ViewSystem.ts#L25"},"pixijs/packages/core/src/view/ViewSystem.ts:25")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"view"},"view"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"view"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/pixi_core.ICanvas"},(0,r.kt)("inlineCode",{parentName:"a"},"ICanvas"))),(0,r.kt)("p",null,"The canvas to use as a view, optional."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/view/ViewSystem.ts#L21"},"pixijs/packages/core/src/view/ViewSystem.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"width"},"width"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The width of the screen."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/core/src/view/ViewSystem.ts#L17"},"pixijs/packages/core/src/view/ViewSystem.ts:17")))}u.isMDXComponent=!0}}]);