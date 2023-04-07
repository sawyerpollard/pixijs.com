"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7596],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={id:"PIXI.PreferOrder.pixi_assets",title:"Interface: PIXI.PreferOrder",sidebar_label:"PIXI.PreferOrder",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/PIXI.PreferOrder.pixi_assets",id:"api/interfaces/PIXI.PreferOrder.pixi_assets",title:"Interface: PIXI.PreferOrder",description:"@pixi/assets.PreferOrder",source:"@site/docs/api/interfaces/PIXI.PreferOrder.pixi_assets.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/PIXI.PreferOrder.pixi_assets",permalink:"/api/interfaces/PIXI.PreferOrder.pixi_assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.PreferOrder.pixi_assets",title:"Interface: PIXI.PreferOrder",sidebar_label:"PIXI.PreferOrder",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.LoaderParser",permalink:"/api/interfaces/PIXI.LoaderParser.pixi_assets"},next:{title:"PIXI.ResolveAsset",permalink:"/api/interfaces/PIXI.ResolveAsset.pixi_assets"}},o={},p=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"priority",id:"priority",level:3}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"package-name"},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/pixi_assets"},"@pixi/assets"),".PreferOrder")),(0,a.kt)("p",null,"A prefer order lets the resolver know which assets to prefer depending on the various parameters passed to it."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Properties"),(0,a.kt)("p",null,(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{parentName:"tr",align:null},"the importance order of the params")))))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("article",null,(0,a.kt)("h3",{id:"priority"},"priority"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type:")," ",(0,a.kt)("code",null,"string[]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," the importance order of the params")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);