"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=i,u=g["".concat(p,".").concat(d)]||g[d]||m[d]||r;return t?a.createElement(u,o(o({ref:n},l),{},{components:t})):a.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={hide_table_of_contents:!0,sidebar_position:2},o="Displacement Map Crawlies",s={unversionedId:"examples/filters-basic/displacement-map-crawlies",id:"examples/filters-basic/displacement-map-crawlies",title:"Displacement Map Crawlies",description:"",source:"@site/docs/examples/filters-basic/displacement-map-crawlies.md",sourceDirName:"examples/filters-basic",slug:"/examples/filters-basic/displacement-map-crawlies",permalink:"/examples/filters-basic/displacement-map-crawlies",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-basic/displacement-map-crawlies.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"examplesSidebar",previous:{title:"Color Matrix",permalink:"/examples/filters-basic/color-matrix"},next:{title:"Displacement Map Flag",permalink:"/examples/filters-basic/displacement-map-flag"}},p={},c=[],l={toc:c};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"displacement-map-crawlies"},"Displacement Map Crawlies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\napp.stage.eventMode = 'static';\n\nconst container = new PIXI.Container();\n\napp.stage.addChild(container);\n\nconst padding = 100;\nconst bounds = new PIXI.Rectangle(\n    -padding,\n    -padding,\n    app.screen.width + padding * 2,\n    app.screen.height + padding * 2,\n);\nconst maggots = [];\n\nfor (let i = 0; i < 20; i++)\n{\n    const maggot = PIXI.Sprite.from('https://pixijs.com/assets/maggot.png');\n\n    maggot.anchor.set(0.5);\n    container.addChild(maggot);\n\n    maggot.direction = Math.random() * Math.PI * 2;\n    maggot.speed = 1;\n    maggot.turnSpeed = Math.random() - 0.8;\n\n    maggot.x = Math.random() * bounds.width;\n    maggot.y = Math.random() * bounds.height;\n\n    maggot.scale.set(1 + Math.random() * 0.3);\n    maggot.original = new PIXI.Point();\n    maggot.original.copyFrom(maggot.scale);\n    maggots.push(maggot);\n}\n\nconst displacementSprite = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/displace.png');\nconst displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\napp.stage.addChild(displacementSprite);\n\ncontainer.filters = [displacementFilter];\n\ndisplacementFilter.scale.x = 110;\ndisplacementFilter.scale.y = 110;\ndisplacementSprite.anchor.set(0.5);\n\nconst ring = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/ring.png');\n\nring.anchor.set(0.5);\n\nring.visible = false;\n\napp.stage.addChild(ring);\n\nconst bg = PIXI.Sprite.from('https://pixijs.com/assets/bg_grass.jpg');\n\nbg.width = app.screen.width;\nbg.height = app.screen.height;\n\nbg.alpha = 0.4;\n\ncontainer.addChild(bg);\n\napp.stage\n    .on('mousemove', onPointerMove)\n    .on('touchmove', onPointerMove);\n\nfunction onPointerMove(eventData)\n{\n    ring.visible = true;\n\n    displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    ring.position.copyFrom(displacementSprite.position);\n}\n\nlet count = 0;\n\napp.ticker.add(() =>\n{\n    count += 0.05;\n\n    for (let i = 0; i < maggots.length; i++)\n    {\n        const maggot = maggots[i];\n\n        maggot.direction += maggot.turnSpeed * 0.01;\n        maggot.x += Math.sin(maggot.direction) * maggot.speed;\n        maggot.y += Math.cos(maggot.direction) * maggot.speed;\n\n        maggot.rotation = -maggot.direction - Math.PI / 2;\n        maggot.scale.x = maggot.original.x + Math.sin(count) * 0.2;\n\n        // wrap the maggots around as the crawl\n        if (maggot.x < bounds.x)\n        {\n            maggot.x += bounds.width;\n        }\n        else if (maggot.x > bounds.x + bounds.width)\n        {\n            maggot.x -= bounds.width;\n        }\n\n        if (maggot.y < bounds.y)\n        {\n            maggot.y += bounds.height;\n        }\n        else if (maggot.y > bounds.y + bounds.height)\n        {\n            maggot.y -= bounds.height;\n        }\n    }\n});\n")))}g.isMDXComponent=!0}}]);