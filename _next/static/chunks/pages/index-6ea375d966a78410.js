(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,A,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7600)}])},3762:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.default=function(e){let A;var t,{src:i,sizes:n,unoptimized:u=!1,priority:g=!1,loading:x,lazyRoot:E=null,lazyBoundary:C,className:Q,quality:y,width:B,height:I,style:N,objectFit:S,objectPosition:k,onLoadingComplete:M,placeholder:D="empty",blurDataURL:P}=e,R=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);let U=r.useContext(d.ImageConfigContext),F=r.useMemo(()=>{let e=m||U||l.imageConfigDefault,A=[...e.deviceSizes,...e.imageSizes].sort((e,A)=>e-A),t=e.deviceSizes.sort((e,A)=>e-A);return a({},e,{allSizes:A,deviceSizes:t})},[U]),z=R,O=n?"responsive":"intrinsic";"layout"in z&&(z.layout&&(O=z.layout),delete z.layout);let L=j;if("loader"in z){if(z.loader){let e=z.loader;L=A=>{let{config:t}=A,a=s(A,["config"]);return e(a)}}delete z.loader}let _="";if("object"==typeof(t=i)&&(f(t)||void 0!==t.src)){let e=f(i)?i.default:i;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(P=P||e.blurDataURL,_=e.src,(!O||"fill"!==O)&&(I=I||e.height,B=B||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)))}let T=!g&&("lazy"===x||void 0===x);((i="string"==typeof i?i:_).startsWith("data:")||i.startsWith("blob:"))&&(u=!0,T=!1),h.has(i)&&(T=!1),F.unoptimized&&(u=!0);let[G,K]=r.useState(!1),[Y,W,V]=c.useIntersection({rootRef:E,rootMargin:C||"200px",disabled:!T}),X=!T||W,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},H={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,q=v(B),$=v(I),ee=v(y),eA=Object.assign({},N,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:k}),et="blur"!==D||G?{}:{backgroundSize:S||"cover",backgroundPosition:k||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(P,'")')};if("fill"===O)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if(void 0!==q&&void 0!==$){let e=$/q,t=isNaN(e)?"100%":"".concat(100*e,"%");"responsive"===O?(J.display="block",J.position="relative",Z=!0,H.paddingTop=t):"intrinsic"===O?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Z=!0,H.maxWidth="100%",A="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(q,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===O&&(J.display="inline-block",J.position="relative",J.width=q,J.height=$)}let ea={src:p,srcSet:void 0,sizes:void 0};X&&(ea=b({config:F,src:i,unoptimized:u,layout:O,width:q,quality:ee,sizes:n,loader:L}));let ei=i,en={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:z.crossOrigin},es=r.default.useLayoutEffect,er=r.useRef(M),eo=r.useRef(i);r.useEffect(()=>{er.current=M},[M]),es(()=>{eo.current!==i&&(V(),eo.current=i)},[V,i]);let el=a({isLazy:T,imgAttributes:ea,heightInt:$,widthInt:q,qualityInt:ee,layout:O,className:Q,imgStyle:eA,blurStyle:et,loading:x,config:F,unoptimized:u,placeholder:D,loader:L,srcString:ei,onLoadingCompleteRef:er,setBlurComplete:K,setIntersection:Y,isVisible:X,noscriptSizes:n},z);return r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:J},Z?r.default.createElement("span",{style:H},A?r.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:A}):null):null,r.default.createElement(w,Object.assign({},el))),g?r.default.createElement(o.default,null,r.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},en))):null)};var a=t(6495).Z,i=t(2648).Z,n=t(1598).Z,s=t(7273).Z,r=n(t(7294)),o=i(t(3121)),l=t(139),c=t(9246),d=t(8730);t(7238);var u=t(2700);function g(e){return"/"===e[0]?e.slice(1):e}let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},h=new Set,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){let{config:A,src:t,width:a,quality:i}=e;return t.endsWith(".svg")&&!A.dangerouslyAllowSVG?t:"".concat(u.normalizePathTrailingSlash(A.path),"?url=").concat(encodeURIComponent(t),"&w=").concat(a,"&q=").concat(i||75)}],["imgix",function(e){let{config:A,src:t,width:a,quality:i}=e,n=new URL("".concat(A.path).concat(g(t))),s=n.searchParams;return s.set("auto",s.getAll("auto").join(",")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||a.toString()),i&&s.set("q",i.toString()),n.href}],["cloudinary",function(e){let{config:A,src:t,width:a,quality:i}=e,n=["f_auto","c_limit","w_"+a,"q_"+(i||"auto")].join(",")+"/";return"".concat(A.path).concat(n).concat(g(t))}],["akamai",function(e){let{config:A,src:t,width:a}=e;return"".concat(A.path).concat(g(t),"?imwidth=").concat(a)}],["custom",function(e){let{src:A}=e;throw Error('Image with src "'.concat(A,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function f(e){return void 0!==e.default}function b(e){let{config:A,src:t,unoptimized:a,layout:i,width:n,quality:s,sizes:r,loader:o}=e;if(a)return{src:t,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,A,t,a){let{deviceSizes:i,allSizes:n}=e;if(a&&("fill"===t||"responsive"===t)){let e=/(^|\s)(1?\d?\d)vw/g,A=[];for(let t;t=e.exec(a);t)A.push(parseInt(t[2]));if(A.length){let e=.01*Math.min(...A);return{widths:n.filter(A=>A>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof A||"fill"===t||"responsive"===t)return{widths:i,kind:"w"};let s=[...new Set([A,2*A].map(e=>n.find(A=>A>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(A,n,i,r),d=l.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:l.map((e,a)=>"".concat(o({config:A,src:t,quality:s,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:o({config:A,src:t,quality:s,width:l[d]})}}function v(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var A;let t=(null==(A=e.config)?void 0:A.loader)||"default",a=x.get(t);if(a)return a(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(t))}function E(e,A,t,a,i,n){if(!e||e.src===p||e["data-loaded-src"]===A)return;e["data-loaded-src"]=A;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(A),"blur"===a&&n(!0),null==i?void 0:i.current)){let{naturalWidth:A,naturalHeight:t}=e;i.current({naturalWidth:A,naturalHeight:t})}})}let w=e=>{var{imgAttributes:A,heightInt:t,widthInt:i,qualityInt:n,layout:o,className:l,imgStyle:c,blurStyle:d,isLazy:u,placeholder:g,loading:m,srcString:h,config:p,unoptimized:x,loader:f,onLoadingCompleteRef:v,setBlurComplete:j,setIntersection:w,onLoad:C,onError:Q,isVisible:y,noscriptSizes:B}=e,I=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,r.default.createElement(r.default.Fragment,null,r.default.createElement("img",Object.assign({},I,A,{decoding:"async","data-nimg":o,className:l,style:a({},c,d),ref:r.useCallback(e=>{w(e),(null==e?void 0:e.complete)&&E(e,h,o,g,v,j)},[w,h,o,g,v,j]),onLoad:e=>{let A=e.currentTarget;E(A,h,o,g,v,j),C&&C(e)},onError:e=>{"blur"===g&&j(!0),Q&&Q(e)}})),(u||"blur"===g)&&r.default.createElement("noscript",null,r.default.createElement("img",Object.assign({},I,{loading:m,decoding:"async","data-nimg":o,style:c,className:l},b({config:p,src:h,unoptimized:x,layout:o,width:i,quality:n,sizes:B,loader:f})))))};("function"==typeof A.default||"object"==typeof A.default&&null!==A.default)&&void 0===A.default.__esModule&&(Object.defineProperty(A.default,"__esModule",{value:!0}),Object.assign(A.default,A),e.exports=A.default)},9246:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.useIntersection=function(e){let{rootRef:A,rootMargin:t,disabled:o}=e,l=o||!n,[c,d]=a.useState(!1),u=a.useRef(null),g=a.useCallback(e=>{u.current=e},[]);a.useEffect(()=>{if(n){if(l||c)return;let e=u.current;if(e&&e.tagName){let a=function(e,A,t){let{id:a,observer:i,elements:n}=function(e){let A;let t={root:e.root||null,margin:e.rootMargin||""},a=r.find(e=>e.root===t.root&&e.margin===t.margin);if(a&&(A=s.get(a)))return A;let i=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{let A=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;A&&t&&A(t)})},e);return A={id:t,observer:n,elements:i},r.push(t),s.set(t,A),A}(t);return n.set(e,A),i.observe(e),function(){if(n.delete(e),i.unobserve(e),0===n.size){i.disconnect(),s.delete(a);let e=r.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&r.splice(e,1)}}}(e,e=>e&&d(e),{root:null==A?void 0:A.current,rootMargin:t});return a}}else if(!c){let e=i.requestIdleCallback(()=>d(!0));return()=>i.cancelIdleCallback(e)}},[l,t,A,c,u.current]);let m=a.useCallback(()=>{d(!1)},[]);return[g,c,m]};var a=t(7294),i=t(4686);let n="function"==typeof IntersectionObserver,s=new Map,r=[];("function"==typeof A.default||"object"==typeof A.default&&null!==A.default)&&void 0===A.default.__esModule&&(Object.defineProperty(A.default,"__esModule",{value:!0}),Object.assign(A.default,A),e.exports=A.default)},7600:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return w}});var a=t(5893),i=t(9008),n=t.n(i),s=t(4523),r=t.n(s);t(7294);var o=t(7516),l=t(9583);function c(){return(0,a.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top bg-primary-color",children:(0,a.jsxs)("div",{className:"container py-3",children:[(0,a.jsx)("a",{className:"navbar-brand",href:"#",children:(0,a.jsxs)("span",{children:["Fernandes ",(0,a.jsx)("strong",{children:"Nutri"}),(0,a.jsx)(l.tGO,{})]})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-items","aria-controls":"navbar-items","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)(o.ib2,{})}),(0,a.jsx)("div",{className:"collapse navbar-collapse",id:"navbar-items",children:(0,a.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{href:"#",className:"nav-link active","aria-current":"page",children:"Home"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{href:"#services",className:"nav-link","aria-current":"page",children:"Servi\xe7os"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{href:"#calltoaction",className:"nav-link","aria-current":"page",children:"Sobre"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("a",{href:"#blog",className:"nav-link","aria-current":"page",children:"Blog"})})]})})]})})}var d=t(9755),u=t.n(d),g={src:"/fernandes_nutri//_next/static/media/foods1.2b6b7f85.jpg",height:2859,width:4288,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAtgH/AP/EABwQAAMAAQUAAAAAAAAAAAAAAAECAwAEERMhMf/aAAgBAQABPwA8kY6RUYKKWYvsPe8//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAIRIf/aAAgBAgEBPwCax//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAwEBPwBof//Z",blurWidth:8,blurHeight:5},m={src:"/fernandes_nutri//_next/static/media/foods2.dff4a1fc.jpg",height:1537,width:2305,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAqAU3/8QAHRAAAQIHAAAAAAAAAAAAAAAAAhESAAMEBRMikf/aAAgBAQABPwC/vKvkg7XHxSSP/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQMAAhFCwf/aAAgBAgEBPwBtQXNyNuT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBJB/9oACAEDAQE/AMJFegbDs//Z",blurWidth:8,blurHeight:5},h={src:"/fernandes_nutri//_next/static/media/womanworkout.9d3dd03b.jpg",height:3840,width:5760,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApgP/xAAeEAACAQMFAAAAAAAAAAAAAAACAwEABAUSISJhcv/aAAgBAQABPwBWRdk7qwea0iVzLoLhq2kO/Nf/xAAYEQACAwAAAAAAAAAAAAAAAAAAAhIhcf/aAAgBAgEBPwBLlp//xAAYEQACAwAAAAAAAAAAAAAAAAABAgARcf/aAAgBAwEBPwByaTJ//9k=",blurWidth:8,blurHeight:5};function p(){return(0,a.jsx)("div",{id:"slider",children:(0,a.jsxs)("div",{id:"carousel",className:"carousel slide","data-bs-ride":"carousel",children:[(0,a.jsxs)("div",{className:"carousel-inner",children:[(0,a.jsxs)("div",{className:"carousel-item active",children:[(0,a.jsx)(u(),{src:g,layout:"responsive",className:"slider-image d-block w-100",alt:"..."}),(0,a.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,a.jsx)("h5",{children:"Fique em forma!"}),(0,a.jsx)("p",{children:"Com uma alimenta\xe7\xe3o saud\xe1vel e balanceada."})]})]}),(0,a.jsxs)("div",{className:"carousel-item",children:[(0,a.jsx)(u(),{src:m,layout:"responsive",className:"d-block w-100",alt:"..."}),(0,a.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,a.jsx)("h5",{children:"Seu peso ideal"}),(0,a.jsx)("p",{children:"Atrav\xe9s de orienta\xe7\xe3o nutricional para emagrecimento, ganho e manuten\xe7\xe3o de peso de forma saud\xe1vel."})]})]}),(0,a.jsxs)("div",{className:"carousel-item",children:[(0,a.jsx)(u(),{src:h,layout:"responsive",className:"d-block w-100",alt:"..."}),(0,a.jsxs)("div",{className:"carousel-caption d-md-block",children:[(0,a.jsx)("h5",{children:"Supere-se!"}),(0,a.jsx)("p",{children:"Melhorando o seu desempenho e recupera\xe7\xe3o p\xf3s-exerc\xedcios."})]})]})]}),(0,a.jsxs)("div",{className:"carousel-indicators",children:[(0,a.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),(0,a.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),(0,a.jsx)("button",{type:"button","data-bs-target":"#carousel","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),(0,a.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carousel","data-bs-slide":"prev",children:[(0,a.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),(0,a.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carousel","data-bs-slide":"next",children:[(0,a.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),(0,a.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}function x(){return(0,a.jsx)("div",{id:"services",children:(0,a.jsx)("ul",{className:"services-cards",children:[{name:"Nutri\xe7\xe3o a Domic\xedlio",description:"Orienta\xe7\xe3o nutricional individualizada no conforto da sua casa."},{name:"Nutri\xe7\xe3o Funcional",description:"Orienta\xe7\xe3o nutricional para controle e tratamentos de doen\xe7as cr\xf4nicas."},{name:"Nutri\xe7\xe3o Esportiva",description:"Melhor desempenho e performance em sua modalidade esportiva."},{name:"Nutri\xe7\xe3o Online",description:"Orienta\xe7\xe3o nutricional para quem n\xe3o tem tempo para consulta presencial."},{name:"Gestantes",description:"Tenha uma gesta\xe7\xe3o saud\xe1vel e com qualidade, prevenindo complica\xe7\xf5es."},{name:"Vegetariana",description:"Receba uma orienta\xe7\xe3o nutricional vegetariana variada e balanceada."},{name:"Emagrecimento",description:"Emagrecimento e manuten\xe7\xe3o de peso de forma saud\xe1vel, promovendo a sa\xfade."}].map(e=>(0,a.jsxs)("li",{className:"service-card",children:[(0,a.jsx)("h5",{children:e.name}),(0,a.jsx)("span",{children:e.description}),(0,a.jsx)("button",{href:"#",children:"Saiba Mais"})]}))})})}function f(){return(0,a.jsxs)("div",{id:"calltoaction",className:"",children:[(0,a.jsx)("div",{className:"bg-image"}),(0,a.jsxs)("div",{className:"cta-box",children:[(0,a.jsx)("h5",{children:"Alcance seus objetivos"}),(0,a.jsx)("ul",{className:"cta-box-items",children:[{id:"1",name:"Anamnese",description:"question\xe1rio de anamnese para avalia\xe7\xe3o de h\xe1bitos, hor\xe1rios, restri\xe7\xf5es e prefer\xeancias alimentares, entre outros fatores."},{id:"2",name:"Consulta",description:"avalia\xe7\xe3o de resultados de exames laboratoriais, exame de bioimped\xe2ncia e an\xe1lise de pr\xe1ticas e costumes alimentares."},{id:"3",name:"Plano Nutricional",description:"elaboramos o plano nutricional de acordo com as necessidades do paciente em at\xe9 uma semana ap\xf3s a consulta."}].map(e=>(0,a.jsxs)("li",{className:"items-wrapper",children:[(0,a.jsx)("span",{children:e.id}),(0,a.jsxs)("p",{children:[(0,a.jsxs)("strong",{children:[e.name,":"]})," ",e.description]})]}))}),(0,a.jsx)("button",{children:"Entre em contato!"})]})]})}var b={src:"/fernandes_nutri//_next/static/media/foodplate.8ca33385.jpg",height:4181,width:6877,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALQT/8QAGxAAAgIDAQAAAAAAAAAAAAAAAgMBEgAEIRH/2gAIAQEAAT8A2nKAGnCBtOya5nnbFX3P/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgARcv/aAAgBAgEBPwAk29T/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhJR/9oACAEDAQE/AKbT/9k=",blurWidth:8,blurHeight:5},v={src:"/fernandes_nutri//_next/static/media/womaneatingh.c0296e7c.jpg",height:4812,width:7210,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALkQf//EABwQAAICAgMAAAAAAAAAAAAAAAECBBEAAwUSQf/aAAgBAQABPwCYXXk42xXIACr18Ia7vP/EABcRAQADAAAAAAAAAAAAAAAAAAIAAyH/2gAIAQIBAT8AsSKyf//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AAEL/9k=",blurWidth:8,blurHeight:5},j={src:"/fernandes_nutri//_next/static/media/womaneatingv2.882889e7.jpg",height:6668,width:4912,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAALUDV//EABoQAQACAwEAAAAAAAAAAAAAAAIBEQMEBQD/2gAIAQEAAT8AfY2T0MgOMLXgTBtVNmvf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBIXH/2gAIAQIBAT8Ah2vT/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAITIXH/2gAIAQMBAT8AiSsP/9k=",blurWidth:6,blurHeight:8};function E(){return(0,a.jsxs)("div",{id:"blog",children:[(0,a.jsxs)("div",{className:"blog-title",children:[(0,a.jsx)("h5",{children:"\xdaltimas publica\xe7\xf5es do Blog"}),(0,a.jsx)("p",{children:"Tenha um estilo de vida mais saud\xe1vel, melhorando seus h\xe1bitos alimentares e conquistando mais qualidade de vida."})]}),(0,a.jsx)("div",{className:"blog-wrapper",children:(0,a.jsx)("ul",{className:"blog-card",children:[{name:"Alimenta\xe7\xe3o saud\xe1vel, qual a import\xe2ncia?",img:b},{name:"As gorduras boas para sua dieta.",img:v},{name:"Conhe\xe7a os benef\xedcios de incluir fibras na sua dieta.",img:j}].map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)(u(),{src:e.img,layout:"responsive",width:300,height:200,className:"card-image"}),(0,a.jsx)("div",{children:e.name}),(0,a.jsx)("button",{children:"LER MAT\xc9RIA"})]}))})})]})}function w(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Fernandes Nutri"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",crossorigin:"anonymous"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@300;400;600;700&display=swap",rel:"stylesheet"})]}),(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsx)(c,{}),(0,a.jsx)(p,{}),(0,a.jsx)(x,{}),(0,a.jsx)(f,{}),(0,a.jsx)(E,{}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",integrity:"sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3",crossorigin:"anonymous"}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",integrity:"sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD",crossorigin:"anonymous"})]})]})}},4523:function(e){e.exports={main:"Home_main__EtNt2"}},9008:function(e,A,t){e.exports=t(3121)},9755:function(e,A,t){e.exports=t(3762)},8357:function(e,A,t){"use strict";t.d(A,{w_:function(){return o}});var a=t(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(i),s=function(){return(s=Object.assign||function(e){for(var A,t=1,a=arguments.length;t<a;t++)for(var i in A=arguments[t])Object.prototype.hasOwnProperty.call(A,i)&&(e[i]=A[i]);return e}).apply(this,arguments)},r=function(e,A){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>A.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>A.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};function o(e){return function(A){return a.createElement(l,s({attr:s({},e.attr)},A),function e(A){return A&&A.map(function(A,t){return a.createElement(A.tag,s({key:t},A.attr),e(A.child))})}(e.child))}}function l(e){var A=function(A){var t,i=e.attr,n=e.size,o=e.title,l=r(e,["attr","size","title"]),c=n||A.size||"1em";return A.className&&(t=A.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},A.attr,i,l,{className:t,style:s(s({color:e.color||A.color},A.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==n?a.createElement(n.Consumer,null,function(e){return A(e)}):A(i)}}},function(e){e.O(0,[445,874,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);