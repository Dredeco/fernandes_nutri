(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7123)}])},3762:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t;var a,{src:n,sizes:r,unoptimized:u=!1,priority:m=!1,loading:f,lazyRoot:w=null,lazyBoundary:E,className:C,quality:N,width:S,height:B,style:k,objectFit:I,objectPosition:Q,onLoadingComplete:M,placeholder:P="empty",blurDataURL:z}=e,O=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);let D=o.useContext(d.ImageConfigContext),_=o.useMemo(()=>{let e=g||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:a})},[D]),R=O,F=r?"responsive":"intrinsic";"layout"in R&&(R.layout&&(F=R.layout),delete R.layout);let U=j;if("loader"in R){if(R.loader){let e=R.loader;U=t=>{let{config:a}=t,i=s(t,["config"]);return e(i)}}delete R.loader}let L="";if("object"==typeof(a=n)&&(x(a)||void 0!==a.src)){let e=x(n)?n.default:n;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(z=z||e.blurDataURL,L=e.src,(!F||"fill"!==F)&&(B=B||e.height,S=S||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)))}let G=!m&&("lazy"===f||void 0===f);((n="string"==typeof n?n:L).startsWith("data:")||n.startsWith("blob:"))&&(u=!0,G=!1),h.has(n)&&(G=!1),_.unoptimized&&(u=!0);let[T,W]=o.useState(!1),[Y,K,Z]=A.useIntersection({rootRef:w,rootMargin:E||"200px",disabled:!G}),V=!G||K,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},H=!1,X=v(S),$=v(B),ee=v(N),et=Object.assign({},k,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:Q}),ea="blur"!==P||T?{}:{backgroundSize:I||"cover",backgroundPosition:Q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(z,'")')};if("fill"===F)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if(void 0!==X&&void 0!==$){let e=$/X,a=isNaN(e)?"100%":"".concat(100*e,"%");"responsive"===F?(J.display="block",J.position="relative",H=!0,q.paddingTop=a):"intrinsic"===F?(J.display="inline-block",J.position="relative",J.maxWidth="100%",H=!0,q.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===F&&(J.display="inline-block",J.position="relative",J.width=X,J.height=$)}let ei={src:p,srcSet:void 0,sizes:void 0};V&&(ei=b({config:_,src:n,unoptimized:u,layout:F,width:X,quality:ee,sizes:r,loader:U}));let en=n,er={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:R.crossOrigin},es=o.default.useLayoutEffect,eo=o.useRef(M),el=o.useRef(n);o.useEffect(()=>{eo.current=M},[M]),es(()=>{el.current!==n&&(Z(),el.current=n)},[Z,n]);let ec=i({isLazy:G,imgAttributes:ei,heightInt:$,widthInt:X,qualityInt:ee,layout:F,className:C,imgStyle:et,blurStyle:ea,loading:f,config:_,unoptimized:u,placeholder:P,loader:U,srcString:en,onLoadingCompleteRef:eo,setBlurComplete:W,setIntersection:Y,isVisible:V,noscriptSizes:r},R);return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:J},H?o.default.createElement("span",{style:q},t?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,o.default.createElement(y,Object.assign({},ec))),m?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},er))):null)};var i=a(6495).Z,n=a(2648).Z,r=a(1598).Z,s=a(7273).Z,o=r(a(7294)),l=n(a(3121)),c=a(139),A=a(9246),d=a(8730);a(7238);var u=a(2700);function m(e){return"/"===e[0]?e.slice(1):e}let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},h=new Set,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",f=new Map([["default",function(e){let{config:t,src:a,width:i,quality:n}=e;return a.endsWith(".svg")&&!t.dangerouslyAllowSVG?a:"".concat(u.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(a),"&w=").concat(i,"&q=").concat(n||75)}],["imgix",function(e){let{config:t,src:a,width:i,quality:n}=e,r=new URL("".concat(t.path).concat(m(a))),s=r.searchParams;return s.set("auto",s.getAll("auto").join(",")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||i.toString()),n&&s.set("q",n.toString()),r.href}],["cloudinary",function(e){let{config:t,src:a,width:i,quality:n}=e,r=["f_auto","c_limit","w_"+i,"q_"+(n||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(m(a))}],["akamai",function(e){let{config:t,src:a,width:i}=e;return"".concat(t.path).concat(m(a),"?imwidth=").concat(i)}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function b(e){let{config:t,src:a,unoptimized:i,layout:n,width:r,quality:s,sizes:o,loader:l}=e;if(i)return{src:a,srcSet:void 0,sizes:void 0};let{widths:c,kind:A}=function(e,t,a,i){let{deviceSizes:n,allSizes:r}=e;if(i&&("fill"===a||"responsive"===a)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(i);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t||"fill"===a||"responsive"===a)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:s,kind:"x"}}(t,r,n,o),d=c.length-1;return{sizes:o||"w"!==A?o:"100vw",srcSet:c.map((e,i)=>"".concat(l({config:t,src:a,quality:s,width:e})," ").concat("w"===A?e:i+1).concat(A)).join(", "),src:l({config:t,src:a,quality:s,width:c[d]})}}function v(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t;let a=(null==(t=e.config)?void 0:t.loader)||"default",i=f.get(a);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(a))}function w(e,t,a,i,n,r){if(!e||e.src===p||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(t),"blur"===i&&r(!0),null==n?void 0:n.current)){let{naturalWidth:t,naturalHeight:a}=e;n.current({naturalWidth:t,naturalHeight:a})}})}let y=e=>{var{imgAttributes:t,heightInt:a,widthInt:n,qualityInt:r,layout:l,className:c,imgStyle:A,blurStyle:d,isLazy:u,placeholder:m,loading:g,srcString:h,config:p,unoptimized:f,loader:x,onLoadingCompleteRef:v,setBlurComplete:j,setIntersection:y,onLoad:E,onError:C,isVisible:N,noscriptSizes:S}=e,B=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},B,t,{decoding:"async","data-nimg":l,className:c,style:i({},A,d),ref:o.useCallback(e=>{y(e),(null==e?void 0:e.complete)&&w(e,h,l,m,v,j)},[y,h,l,m,v,j]),onLoad:e=>{let t=e.currentTarget;w(t,h,l,m,v,j),E&&E(e)},onError:e=>{"blur"===m&&j(!0),C&&C(e)}})),(u||"blur"===m)&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},B,{loading:g,decoding:"async","data-nimg":l,style:A,className:c},b({config:p,src:h,unoptimized:f,layout:l,width:n,quality:r,sizes:S,loader:x})))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:a,disabled:l}=e,c=l||!r,[A,d]=i.useState(!1),u=i.useRef(null),m=i.useCallback(e=>{u.current=e},[]);i.useEffect(()=>{if(r){if(c||A)return;let e=u.current;if(e&&e.tagName){let i=function(e,t,a){let{id:i,observer:n,elements:r}=function(e){let t;let a={root:e.root||null,margin:e.rootMargin||""},i=o.find(e=>e.root===a.root&&e.margin===a.margin);if(i&&(t=s.get(i)))return t;let n=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)})},e);return t={id:a,observer:r,elements:n},o.push(a),s.set(a,t),t}(a);return r.set(e,t),n.observe(e),function(){if(r.delete(e),n.unobserve(e),0===r.size){n.disconnect(),s.delete(i);let e=o.findIndex(e=>e.root===i.root&&e.margin===i.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:a});return i}}else if(!A){let e=n.requestIdleCallback(()=>d(!0));return()=>n.cancelIdleCallback(e)}},[c,a,t,A,u.current]);let g=i.useCallback(()=>{d(!1)},[]);return[m,A,g]};var i=a(7294),n=a(4686);let r="function"==typeof IntersectionObserver,s=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7123:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var i=a(5893),n=a(9008),r=a.n(n),s=a(4523),o=a.n(s);a(7294);var l=a(7516);function c(){return(0,i.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top bg-primary-color",children:(0,i.jsxs)("div",{className:"container py-3",children:[(0,i.jsx)("a",{children:(0,i.jsx)("span",{children:"Fernandes Nutri"})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-items","aria-controls":"navbar-items","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)(l.ib2,{})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-items",children:(0,i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#",className:"nav-link active","aria-current":"page",children:"Home"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#",className:"nav-link","aria-current":"page",children:"Projetos"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#",className:"nav-link","aria-current":"page",children:"Im\xf3veis"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)("a",{href:"#",className:"nav-link","aria-current":"page",children:"Contatos"})})]})})]})})}var A=a(9755),d=a.n(A),u={src:"/fernandes_nutri//_next/static/media/foods1.2b6b7f85.jpg",height:2859,width:4288,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAtgH/AP/EABwQAAMAAQUAAAAAAAAAAAAAAAECAwAEERMhMf/aAAgBAQABPwA8kY6RUYKKWYvsPe8//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAIRIf/aAAgBAgEBPwCax//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAwEBPwBof//Z",blurWidth:8,blurHeight:5},m={src:"/fernandes_nutri//_next/static/media/foods2.dff4a1fc.jpg",height:1537,width:2305,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAqAU3/8QAHRAAAQIHAAAAAAAAAAAAAAAAAhESAAMEBRMikf/aAAgBAQABPwC/vKvkg7XHxSSP/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQMAAhFCwf/aAAgBAgEBPwBtQXNyNuT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBJB/9oACAEDAQE/AMJFegbDs//Z",blurWidth:8,blurHeight:5},g={src:"/fernandes_nutri//_next/static/media/womanworkout.9d3dd03b.jpg",height:3840,width:5760,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApgP/xAAeEAACAQMFAAAAAAAAAAAAAAACAwEABAUSISJhcv/aAAgBAQABPwBWRdk7qwea0iVzLoLhq2kO/Nf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhIhcf/aAAgBAgEBPwBLlp//xAAYEQACAwAAAAAAAAAAAAAAAAABAgARcf/aAAgBAwEBPwByaTJ//9k=",blurWidth:8,blurHeight:5};function h(){return(0,i.jsx)("div",{id:"slider",children:(0,i.jsxs)("div",{id:"carousel",className:"carousel slide","data-bs-ride":"carousel",children:[(0,i.jsxs)("div",{className:"carousel-inner",children:[(0,i.jsxs)("div",{className:"carousel-item active",children:[(0,i.jsx)(d(),{src:u,layout:"responsive",className:"slider-image d-block w-100",alt:"..."}),(0,i.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,i.jsx)("h5",{children:"First slide label"}),(0,i.jsx)("p",{children:"Some representative placeholder content for the first slide."})]})]}),(0,i.jsxs)("div",{className:"carousel-item",children:[(0,i.jsx)(d(),{src:m,layout:"responsive",className:"d-block w-100",alt:"..."}),(0,i.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,i.jsx)("h5",{children:"Second slide label"}),(0,i.jsx)("p",{children:"Some representative placeholder content for the second slide."})]})]}),(0,i.jsxs)("div",{className:"carousel-item",children:[(0,i.jsx)(d(),{src:g,layout:"responsive",className:"d-block w-100",alt:"..."}),(0,i.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,i.jsx)("h5",{children:"Third slide label"}),(0,i.jsx)("p",{children:"Some representative placeholder content for the third slide."})]})]})]}),(0,i.jsxs)("div",{className:"carousel-indicators",children:[(0,i.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),(0,i.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),(0,i.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),(0,i.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carousel","data-bs-slide":"prev",children:[(0,i.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),(0,i.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),(0,i.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carousel","data-bs-slide":"next",children:[(0,i.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),(0,i.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}function p(){return(0,i.jsx)("div",{id:"services",children:(0,i.jsx)("ul",{className:"services-cards",children:[{name:"Nutri\xe7\xe3o a Domic\xedlio",description:"Orienta\xe7\xe3o nutricional individualizada no conforto da sua casa."},{name:"Nutri\xe7\xe3o Funcional",description:"Orienta\xe7\xe3o nutricional para controle e tratamentos de doen\xe7as cr\xf4nicas."},{name:"Nutri\xe7\xe3o Esportiva",description:"Melhor desempenho e performance em sua modalidade esportiva."},{name:"Nutri\xe7\xe3o Online",description:"Orienta\xe7\xe3o nutricional para quem n\xe3o tem tempo para consulta presencial."},{name:"Gestantes",description:"Tenha uma gesta\xe7\xe3o saud\xe1vel e com qualidade, prevenindo complica\xe7\xf5es."},{name:"Vegetariana",description:"Receba uma orienta\xe7\xe3o nutricional vegetariana variada e balanceada."},{name:"Emagrecimento",description:"Emagrecimento e manuten\xe7\xe3o de peso de forma saud\xe1vel, promovendo a sa\xfade."}].map(e=>(0,i.jsxs)("li",{className:"service-card",children:[(0,i.jsx)("h5",{children:e.name}),(0,i.jsx)("span",{children:e.description}),(0,i.jsx)("button",{href:"#",children:"Saiba Mais"})]}))})})}function f(){return(0,i.jsxs)("div",{id:"calltoaction",className:"",children:[(0,i.jsx)("div",{className:"bg-image"}),(0,i.jsxs)("div",{className:"cta-box",children:[(0,i.jsx)("h5",{children:"Alcance seus objetivos"}),(0,i.jsx)("ul",{className:"cta-box-items",children:[{id:"1",name:"Anamnese",description:"question\xe1rio de anamnese para avalia\xe7\xe3o de h\xe1bitos, hor\xe1rios, restri\xe7\xf5es e prefer\xeancias alimentares, entre outros fatores."},{id:"2",name:"Consulta",description:"avalia\xe7\xe3o de resultados de exames laboratoriais, exame de bioimped\xe2ncia e an\xe1lise de pr\xe1ticas e costumes alimentares."},{id:"3",name:"Plano Nutricional",description:"elaboramos o plano nutricional de acordo com as necessidades do paciente em at\xe9 uma semana ap\xf3s a consulta."}].map(e=>(0,i.jsxs)("li",{className:"items-wrapper",children:[(0,i.jsx)("span",{children:e.id}),(0,i.jsxs)("p",{children:[(0,i.jsxs)("strong",{children:[e.name,":"]})," ",e.description]})]}))}),(0,i.jsx)("button",{children:"Entre em contato!"})]})]})}function x(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",crossorigin:"anonymous"})]}),(0,i.jsxs)("main",{className:o().main,children:[(0,i.jsx)(c,{}),(0,i.jsx)(h,{}),(0,i.jsx)(p,{}),(0,i.jsx)(f,{}),(0,i.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",integrity:"sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3",crossorigin:"anonymous"}),(0,i.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",integrity:"sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD",crossorigin:"anonymous"})]})]})}},4523:function(e){e.exports={main:"Home_main__EtNt2"}},9008:function(e,t,a){e.exports=a(3121)},9755:function(e,t,a){e.exports=a(3762)},8357:function(e,t,a){"use strict";a.d(t,{w_:function(){return l}});var i=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=i.createContext&&i.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]]);return a};function l(e){return function(t){return i.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,a){return i.createElement(t.tag,s({key:a},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var a,n=e.attr,r=e.size,l=e.title,c=o(e,["attr","size","title"]),A=r||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),i.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==r?i.createElement(r.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[874,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);