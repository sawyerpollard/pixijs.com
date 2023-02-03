"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[11003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?i.createElement(f,p(p({ref:t},s),{},{components:r})):i.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={id:"pixi_sprite_animated.FrameObject",title:"Interface: FrameObject",sidebar_label:"FrameObject",custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/pixi_sprite_animated.FrameObject",id:"api/interfaces/pixi_sprite_animated.FrameObject",title:"Interface: FrameObject",description:"@pixi/sprite-animated.FrameObject",source:"@site/docs/api/interfaces/pixi_sprite_animated.FrameObject.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/pixi_sprite_animated.FrameObject",permalink:"/api/interfaces/pixi_sprite_animated.FrameObject",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pixi_sprite_animated.FrameObject",title:"Interface: FrameObject",sidebar_label:"FrameObject",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"WebGLContextEventMap",permalink:"/api/interfaces/pixi_settings.WebGLContextEventMap"},next:{title:"ISpritesheetData",permalink:"/api/interfaces/pixi_spritesheet.ISpritesheetData"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"texture",id:"texture",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/pixi_sprite_animated"},"@pixi/sprite-animated"),".FrameObject"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Memberof"))),(0,n.kt)("p",null,"PIXI.AnimatedSprite"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"texture"},"texture"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"texture"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Texture"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Resource"),">"),(0,n.kt)("p",null,"The PIXI.Texture of the frame."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/sprite-animated/src/AnimatedSprite.ts#L463"},"pixijs/packages/sprite-animated/src/AnimatedSprite.ts:463")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"time"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The duration of the frame, in milliseconds."),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/blob/2194fe5c5/packages/sprite-animated/src/AnimatedSprite.ts#L466"},"pixijs/packages/sprite-animated/src/AnimatedSprite.ts:466")))}u.isMDXComponent=!0}}]);