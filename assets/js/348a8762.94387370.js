"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[65862],{3905:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var u=t.createContext({}),l=function(n){var e=t.useContext(u),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},p=function(n){var e=l(n.components);return t.createElement(u.Provider,{value:e},n.children)},d="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=l(r),g=o,y=d["".concat(u,".").concat(g)]||d[g]||c[g]||a;return r?t.createElement(y,i(i({ref:e},p),{},{components:r})):t.createElement(y,i({ref:e},p))}));function y(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s[d]="string"==typeof n?n:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},55508:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const a={hide_table_of_contents:!0},i="Z-order",s={unversionedId:"examples/plugin-layers/zorder",id:"examples/plugin-layers/zorder",title:"Z-order",description:"",source:"@site/docs/examples/plugin-layers/zorder.md",sourceDirName:"examples/plugin-layers",slug:"/examples/plugin-layers/zorder",permalink:"/examples/plugin-layers/zorder",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/plugin-layers/zorder.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Lighting",permalink:"/examples/plugin-layers/lighting"},next:{title:"Bring to top",permalink:"/examples/plugin-layers/bringtotop"}},u={},l=[],p={toc:l};function d(n){let{components:e,...r}=n;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"z-order"},"Z-order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application<HTMLCanvasElement>({ background: '#1099bb', resizeTo: window });\ndocument.body.appendChild(app.view);\n\n// META STUFF, groups exist without stage just fine\n\n// z-index = 0, sorting = true;\nconst greenGroup = new PIXI.layers.Group(0, true);\ngreenGroup.on('sort', (sprite) => {\n    // green bunnies go down\n    sprite.zOrder = sprite.y;\n});\n\n// z-index = 1, sorting = true, we can provide zOrder function directly in constructor\nconst blueGroup = new PIXI.layers.Group(1, ((sprite) => {\n    // blue bunnies go up\n    sprite.zOrder = -sprite.y;\n}));\n\n// Drag is the best layer, dragged element is above everything else\nconst dragGroup = new PIXI.layers.Group(2, false);\n\n// Shadows are the lowest\nconst shadowGroup = new PIXI.layers.Group(-1, false);\n\n// specify display list component\napp.stage = new PIXI.layers.Stage();\n// PixiJS v5 sorting - works on zIndex - and layer gets its zIndex from a group!\napp.stage.sortableChildren = true;\napp.stage.interactive = true;\napp.stage.hitArea = app.screen;\n// sorry, group cant exist without layer yet :(;\napp.stage.addChild(new PIXI.layers.Layer(greenGroup));\napp.stage.addChild(new PIXI.layers.Layer(blueGroup));\napp.stage.addChild(new PIXI.layers.Layer(dragGroup));\napp.stage.addChild(new PIXI.layers.Layer(shadowGroup));\n\nconst blurFilter = new PIXI.filters.BlurFilter();\nblurFilter.blur = 0.5;\n\n// create a texture from an image path\nconst textureGreen = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny_green.png');\nconst textureBlue = PIXI.Texture.from('https://beta.pixijs.com/assets/bunny_blue.png');\n\n// make obsolete containers. Why do we need them?\n// Just to show that we can do everything without caring of actual parent container\nconst bunniesOdd = new PIXI.Container();\nconst bunniesEven = new PIXI.Container();\nconst bunniesBlue = new PIXI.Container();\napp.stage.addChild(bunniesOdd);\napp.stage.addChild(bunniesBlue);\napp.stage.addChild(bunniesEven);\n\nfor (let i = 0; i < 15; i++) {\n    const bunny = new PIXI.Sprite(textureGreen);\n    bunny.width = 50;\n    bunny.height = 50;\n    bunny.position.set(100 + 20 * i, 100 + 20 * i);\n    bunny.anchor.set(0.5);\n    // that thing is required\n    bunny.parentGroup = greenGroup;\n    if (i % 2 === 0) {\n        bunniesEven.addChild(bunny);\n    } else {\n        bunniesOdd.addChild(bunny);\n    }\n    subscribe(bunny);\n    addShadow(bunny);\n}\n\nfor (let i = 9; i >= 0; i--) {\n    const bunny = new PIXI.Sprite(textureBlue);\n    bunny.width = 50;\n    bunny.height = 50;\n    bunny.position.set(400 + 20 * i, 400 - 20 * i);\n    bunny.anchor.set(0.5);\n    // that thing is required\n    bunny.parentGroup = blueGroup;\n    bunniesBlue.addChild(bunny);\n    subscribe(bunny);\n    addShadow(bunny);\n}\n\nfunction subscribe(obj) {\n    obj.interactive = true;\n    obj.on('mousedown', onDragStart)\n        .on('touchstart', onDragStart)\n        .on('mouseup', onDragEnd)\n        .on('mouseupoutside', onDragEnd)\n        .on('touchend', onDragEnd)\n        .on('touchendoutside', onDragEnd);\n}\n\napp.stage\n    .on('mousemove', onDragMove)\n    .on('touchmove', onDragMove);\n\nlet dragTarget = null;\nconst dragPoint = new PIXI.Point();\n\nfunction addShadow(obj) {\n    const gr = new PIXI.Graphics();\n    gr.beginFill(0x0, 1);\n    // yes , I know bunny size, I'm sorry for this hack\n    const scale = 1.1;\n    gr.drawRect(-25 / 2 * scale, -36 / 2 * scale, 25 * scale, 36 * scale);\n    gr.endFill();\n    gr.filters = [blurFilter];\n\n    gr.parentGroup = shadowGroup;\n    obj.addChild(gr);\n}\n\nfunction onDragStart(event) {\n    if (!dragTarget) {\n        this.oldGroup = this.parentGroup;\n        this.parentGroup = dragGroup;\n        this.scale.x *= 1.1;\n        this.scale.y *= 1.1;\n        this.toLocal(event.global, null, dragPoint);\n        dragTarget = this;\n    }\n}\n\nfunction onDragEnd() {\n    if (dragTarget) {\n        this.parentGroup = this.oldGroup;\n        this.scale.x /= 1.1;\n        this.scale.y /= 1.1;\n        dragTarget = null;\n    }\n}\n\nfunction onDragMove(event) {\n    if (dragTarget) {\n        dragTarget.x = event.global.x - dragPoint.x;\n        dragTarget.y = event.global.y - dragPoint.y;\n    }\n}\n")))}d.isMDXComponent=!0}}]);