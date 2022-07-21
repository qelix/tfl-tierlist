import{w as bt}from"./index-7be4c444.js";import{S as kt,i as $t,s as Bt,a6 as at,N as Ht,l as Z,a as J,m as tt,n as et,c as K,h as k,p as nt,W as ft,q as W,b as st,I as H,O as It,P as Mt,Q as Xt,f as jt,t as Yt,o as ut,j as dt,r as vt,u as _t,E as At,X as mt}from"./index-cd411dc4.js";let I="en";I=localStorage.getItem("language")||"en",(I!=="de"||I!=="en")&&(I="en");const Ct=bt(I);Ct.subscribe(t=>localStorage.setItem("language",t));const Se=()=>{Ct.update(t=>t==="de"?"en":"de")};function Ft(t){const e=t-1;return e*e*e+1}function De(t){return t===1?t:1-Math.pow(2,-10*t)}function Ve(t,{delay:e=0,duration:n=400,easing:i=Ft,x:o=0,y:a=0,opacity:c=0}={}){const r=getComputedStyle(t),l=+r.opacity,u=r.transform==="none"?"":r.transform,d=l*(1-c);return{delay:e,duration:n,easing:i,css:(s,f)=>`
			transform: ${u} translate(${(1-s)*o}px, ${(1-s)*a}px);
			opacity: ${l-d*f}`}}const Ne=bt(!1);function B(t){return t.split("-")[0]}function L(t){return t.split("-")[1]}function X(t){return["top","bottom"].includes(B(t))?"x":"y"}function rt(t){return t==="y"?"height":"width"}function gt(t,e,n){let{reference:i,floating:o}=t;const a=i.x+i.width/2-o.width/2,c=i.y+i.height/2-o.height/2,r=X(e),l=rt(r),u=i[l]/2-o[l]/2,d=B(e),s=r==="x";let f;switch(d){case"top":f={x:a,y:i.y-o.height};break;case"bottom":f={x:a,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:c};break;case"left":f={x:i.x-o.width,y:c};break;default:f={x:i.x,y:i.y}}switch(L(e)){case"start":f[r]-=u*(n&&s?-1:1);break;case"end":f[r]+=u*(n&&s?-1:1);break}return f}const qt=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:a=[],platform:c}=n,r=await(c.isRTL==null?void 0:c.isRTL(e));let l=await c.getElementRects({reference:t,floating:e,strategy:o}),{x:u,y:d}=gt(l,i,r),s=i,f={},g=0;for(let p=0;p<a.length;p++){const{name:x,fn:y}=a[p],{x:w,y:h,data:b,reset:m}=await y({x:u,y:d,initialPlacement:i,placement:s,strategy:o,middlewareData:f,rects:l,platform:c,elements:{reference:t,floating:e}});if(u=w!=null?w:u,d=h!=null?h:d,f={...f,[x]:{...f[x],...b}},m&&g<=50){g++,typeof m=="object"&&(m.placement&&(s=m.placement),m.rects&&(l=m.rects===!0?await c.getElementRects({reference:t,floating:e,strategy:o}):m.rects),{x:u,y:d}=gt(l,s,r)),p=-1;continue}}return{x:u,y:d,placement:s,strategy:o,middlewareData:f}};function zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ot(t){return typeof t!="number"?zt(t):{top:t,right:t,bottom:t,left:t}}function F(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function Pt(t,e){var n;e===void 0&&(e={});const{x:i,y:o,platform:a,rects:c,elements:r,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:s="floating",altBoundary:f=!1,padding:g=0}=e,p=Ot(g),y=r[f?s==="floating"?"reference":"floating":s],w=F(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(y)))==null||n?y:y.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(r.floating)),boundary:u,rootBoundary:d,strategy:l})),h=F(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s==="floating"?{...c.floating,x:i,y:o}:c.reference,offsetParent:await(a.getOffsetParent==null?void 0:a.getOffsetParent(r.floating)),strategy:l}):c[s]);return{top:w.top-h.top+p.top,bottom:h.bottom-w.bottom+p.bottom,left:w.left-h.left+p.left,right:h.right-w.right+p.right}}const Qt=Math.min,Ut=Math.max;function ot(t,e,n){return Ut(t,Qt(e,n))}const Gt=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:i=0}=t!=null?t:{},{x:o,y:a,placement:c,rects:r,platform:l}=e;if(n==null)return{};const u=Ot(i),d={x:o,y:a},s=X(c),f=L(c),g=rt(s),p=await l.getDimensions(n),x=s==="y"?"top":"left",y=s==="y"?"bottom":"right",w=r.reference[g]+r.reference[s]-d[s]-r.floating[g],h=d[s]-r.reference[s],b=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let m=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0;m===0&&(m=r.floating[g]);const C=w/2-h/2,T=u[x],E=m-p[g]-u[y],v=m/2-p[g]/2+C,_=ot(T,v,E),N=(f==="start"?u[x]:u[y])>0&&v!==_&&r.reference[g]<=r.floating[g]?v<T?T-v:E-v:0;return{[s]:d[s]-N,data:{[s]:_,centerOffset:v-_}}}}),Jt={left:"right",right:"left",bottom:"top",top:"bottom"};function pt(t){return t.replace(/left|right|bottom|top/g,e=>Jt[e])}function Kt(t,e,n){n===void 0&&(n=!1);const i=L(t),o=X(t),a=rt(o);let c=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(c=pt(c)),{main:c,cross:pt(c)}}const Zt={start:"end",end:"start"};function te(t){return t.replace(/start|end/g,e=>Zt[e])}const ee=["top","right","bottom","left"],ne=ee.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);function oe(t,e,n){return(t?[...n.filter(o=>L(o)===t),...n.filter(o=>L(o)!==t)]:n.filter(o=>B(o)===o)).filter(o=>t?L(o)===t||(e?te(o)!==o:!1):!0)}const ie=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,i,o,a,c;const{x:r,y:l,rects:u,middlewareData:d,placement:s,platform:f,elements:g}=e,{alignment:p=null,allowedPlacements:x=ne,autoAlignment:y=!0,...w}=t,h=oe(p,y,x),b=await Pt(e,w),m=(n=(i=d.autoPlacement)==null?void 0:i.index)!=null?n:0,C=h[m];if(C==null)return{};const{main:T,cross:E}=Kt(C,u,await(f.isRTL==null?void 0:f.isRTL(g.floating)));if(s!==C)return{x:r,y:l,reset:{placement:h[0]}};const v=[b[B(C)],b[T],b[E]],_=[...(o=(a=d.autoPlacement)==null?void 0:a.overflows)!=null?o:[],{placement:C,overflows:v}],D=h[m+1];if(D)return{data:{index:m+1,overflows:_},reset:{placement:D}};const V=_.slice().sort((U,G)=>U.overflows[0]-G.overflows[0]),N=(c=V.find(U=>{let{overflows:G}=U;return G.every(Wt=>Wt<=0)}))==null?void 0:c.placement,ct=N!=null?N:V[0].placement;return ct!==s?{data:{index:m+1,overflows:_},reset:{placement:ct}}:{}}}};async function se(t,e){const{placement:n,platform:i,elements:o}=t,a=await(i.isRTL==null?void 0:i.isRTL(o.floating)),c=B(n),r=L(n),l=X(n)==="x",u=["left","top"].includes(c)?-1:1,d=a&&l?-1:1,s=typeof e=="function"?e(t):e;let{mainAxis:f,crossAxis:g,alignmentAxis:p}=typeof s=="number"?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...s};return r&&typeof p=="number"&&(g=r==="end"?p*-1:p),l?{x:g*d,y:f*u}:{x:f*u,y:g*d}}const re=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,o=await se(e,t);return{x:n+o.x,y:i+o.y,data:o}}}};function le(t){return t==="x"?"y":"x"}const ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:r={fn:y=>{let{x:w,y:h}=y;return{x:w,y:h}}},...l}=t,u={x:n,y:i},d=await Pt(e,l),s=X(B(o)),f=le(s);let g=u[s],p=u[f];if(a){const y=s==="y"?"top":"left",w=s==="y"?"bottom":"right",h=g+d[y],b=g-d[w];g=ot(h,g,b)}if(c){const y=f==="y"?"top":"left",w=f==="y"?"bottom":"right",h=p+d[y],b=p-d[w];p=ot(h,p,b)}const x=r.fn({...e,[s]:g,[f]:p});return{...x,data:{x:x.x-n,y:x.y-i}}}}};function Rt(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function P(t){if(t==null)return window;if(!Rt(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function j(t){return P(t).getComputedStyle(t)}function O(t){return Rt(t)?"":t?(t.nodeName||"").toLowerCase():""}function Tt(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function A(t){return t instanceof P(t).HTMLElement}function $(t){return t instanceof P(t).Element}function ae(t){return t instanceof P(t).Node}function lt(t){if(typeof ShadowRoot>"u")return!1;const e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function z(t){const{overflow:e,overflowX:n,overflowY:i}=j(t);return/auto|scroll|overlay|hidden/.test(e+i+n)}function fe(t){return["table","td","th"].includes(O(t))}function Et(t){const e=/firefox/i.test(Tt()),n=j(t);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)}function Lt(){return!/^((?!chrome|android).)*safari/i.test(Tt())}const ht=Math.min,M=Math.max,q=Math.round;function S(t,e,n){var i,o,a,c;e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect();let l=1,u=1;e&&A(t)&&(l=t.offsetWidth>0&&q(r.width)/t.offsetWidth||1,u=t.offsetHeight>0&&q(r.height)/t.offsetHeight||1);const d=$(t)?P(t):window,s=!Lt()&&n,f=(r.left+(s&&(i=(o=d.visualViewport)==null?void 0:o.offsetLeft)!=null?i:0))/l,g=(r.top+(s&&(a=(c=d.visualViewport)==null?void 0:c.offsetTop)!=null?a:0))/u,p=r.width/l,x=r.height/u;return{width:p,height:x,top:g,right:f+p,bottom:g+x,left:f,x:f,y:g}}function R(t){return((ae(t)?t.ownerDocument:t.document)||window.document).documentElement}function Q(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function St(t){return S(R(t)).left+Q(t).scrollLeft}function ue(t){const e=S(t);return q(e.width)!==t.offsetWidth||q(e.height)!==t.offsetHeight}function de(t,e,n){const i=A(e),o=R(e),a=S(t,i&&ue(e),n==="fixed");let c={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(i||!i&&n!=="fixed")if((O(e)!=="body"||z(o))&&(c=Q(e)),A(e)){const l=S(e,!0);r.x=l.x+e.clientLeft,r.y=l.y+e.clientTop}else o&&(r.x=St(o));return{x:a.left+c.scrollLeft-r.x,y:a.top+c.scrollTop-r.y,width:a.width,height:a.height}}function Dt(t){return O(t)==="html"?t:t.assignedSlot||t.parentNode||(lt(t)?t.host:null)||R(t)}function wt(t){return!A(t)||getComputedStyle(t).position==="fixed"?null:t.offsetParent}function me(t){let e=Dt(t);for(lt(e)&&(e=e.host);A(e)&&!["html","body"].includes(O(e));){if(Et(e))return e;e=e.parentNode}return null}function it(t){const e=P(t);let n=wt(t);for(;n&&fe(n)&&getComputedStyle(n).position==="static";)n=wt(n);return n&&(O(n)==="html"||O(n)==="body"&&getComputedStyle(n).position==="static"&&!Et(n))?e:n||me(t)||e}function yt(t){if(A(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=S(t);return{width:e.width,height:e.height}}function ge(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=A(n),a=R(n);if(n===a)return e;let c={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((o||!o&&i!=="fixed")&&((O(n)!=="body"||z(a))&&(c=Q(n)),A(n))){const l=S(n,!0);r.x=l.x+n.clientLeft,r.y=l.y+n.clientTop}return{...e,x:e.x-c.scrollLeft+r.x,y:e.y-c.scrollTop+r.y}}function pe(t,e){const n=P(t),i=R(t),o=n.visualViewport;let a=i.clientWidth,c=i.clientHeight,r=0,l=0;if(o){a=o.width,c=o.height;const u=Lt();(u||!u&&e==="fixed")&&(r=o.offsetLeft,l=o.offsetTop)}return{width:a,height:c,x:r,y:l}}function he(t){var e;const n=R(t),i=Q(t),o=(e=t.ownerDocument)==null?void 0:e.body,a=M(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=M(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let r=-i.scrollLeft+St(t);const l=-i.scrollTop;return j(o||n).direction==="rtl"&&(r+=M(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:r,y:l}}function Vt(t){const e=Dt(t);return["html","body","#document"].includes(O(e))?t.ownerDocument.body:A(e)&&z(e)?e:Vt(e)}function Nt(t,e){var n;e===void 0&&(e=[]);const i=Vt(t),o=i===((n=t.ownerDocument)==null?void 0:n.body),a=P(i),c=o?[a].concat(a.visualViewport||[],z(i)?i:[]):i,r=e.concat(c);return o?r:r.concat(Nt(c))}function we(t,e){const n=e.getRootNode==null?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&lt(n)){let i=e;do{if(i&&t===i)return!0;i=i.parentNode||i.host}while(i)}return!1}function ye(t,e){const n=S(t,!1,e==="fixed"),i=n.top+t.clientTop,o=n.left+t.clientLeft;return{top:i,left:o,x:o,y:i,right:o+t.clientWidth,bottom:i+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function xt(t,e,n){return e==="viewport"?F(pe(t,n)):$(e)?ye(e,n):F(he(R(t)))}function xe(t){const e=Nt(t),i=["absolute","fixed"].includes(j(t).position)&&A(t)?it(t):t;return $(i)?e.filter(o=>$(o)&&we(o,i)&&O(o)!=="body"):[]}function be(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const c=[...n==="clippingAncestors"?xe(e):[].concat(n),i],r=c[0],l=c.reduce((u,d)=>{const s=xt(e,d,o);return u.top=M(s.top,u.top),u.right=ht(s.right,u.right),u.bottom=ht(s.bottom,u.bottom),u.left=M(s.left,u.left),u},xt(e,r,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const ve={getClippingRect:be,convertOffsetParentRelativeRectToViewportRelativeRect:ge,isElement:$,getDimensions:yt,getOffsetParent:it,getDocumentElement:R,getElementRects:t=>{let{reference:e,floating:n,strategy:i}=t;return{reference:de(e,it(n),i),floating:{...yt(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>j(t).direction==="rtl"},_e=(t,e,n)=>qt(t,e,{platform:ve,...n});function Ae(t){let e;return{c(){e=vt(t[5])},l(n){e=_t(n,t[5])},m(n,i){st(n,e,i)},p:At,d(n){n&&k(e)}}}function Ce(t){let e,n;return{c(){e=Z("span"),n=vt(t[4]),this.h()},l(i){e=tt(i,"SPAN",{class:!0});var o=et(e);n=_t(o,t[4]),o.forEach(k),this.h()},h(){nt(e,"class","small-text svelte-11f0pce")},m(i,o){st(i,e,o),H(e,n)},p:At,d(i){i&&k(e)}}}function Oe(t){let e,n,i,o,a,c,r=t[5]&&Ae(t),l=t[4]&&Ce(t);const u=t[14].default,d=Ht(u,t,t[13],null);return{c(){e=Z("div"),r&&r.c(),n=J(),l&&l.c(),i=J(),o=Z("div"),a=J(),d&&d.c(),this.h()},l(s){e=tt(s,"DIV",{class:!0});var f=et(e);r&&r.l(f),n=K(f),l&&l.l(f),i=K(f),o=tt(f,"DIV",{class:!0}),et(o).forEach(k),a=K(f),d&&d.l(f),f.forEach(k),this.h()},h(){nt(o,"class","arrow svelte-11f0pce"),nt(e,"class","tooltip svelte-11f0pce"),ft(e,"animate",t[2]),W(e,"width",t[6],!1),W(e,"--background-color",t[7],!1),W(e,"--font-color",t[8],!1),W(e,"--font-color-lightened",t[9],!1),W(e,"transform",t[3],!1)},m(s,f){st(s,e,f),r&&r.m(e,null),H(e,n),l&&l.m(e,null),H(e,i),H(e,o),t[15](o),H(e,a),d&&d.m(e,null),t[16](e),c=!0},p(s,[f]){s[5]&&r.p(s,f),s[4]&&l.p(s,f),d&&d.p&&(!c||f&8192)&&It(d,u,s,s[13],c?Xt(u,s[13],f,null):Mt(s[13]),null),f&4&&ft(e,"animate",s[2]),f&8&&W(e,"transform",s[3],!1)},i(s){c||(jt(d,s),c=!0)},o(s){Yt(d,s),c=!1},d(s){s&&k(e),r&&r.d(),l&&l.d(),t[15](null),d&&d.d(s),t[16](null)}}}const Pe="tooltipDiv",Re="arrowDiv",Y="15px";function Te(t,e,n){let i,o,{$$slots:a={},$$scope:c}=e,r=!1,l,u;ut(()=>{setTimeout(()=>n(2,r=!0),0)});let{tooltipProps:d}=e,{placement:s=null}=e;const{subTitle:f,title:g,width:p="8rem",backgroundColor:x="var(--bg-color-highlighted)",fontColor:y="var(--font-color)",smallFontColor:w="var(--font-color-lightened)"}=d;ut(()=>{const m=l.parentElement;if(!m)throw new Error("Can't mount this component without a parent");_e(m,l,{middleware:[re(-5),ie({allowedPlacements:["bottom","top"]}),ce({padding:5}),Gt({element:u})]}).then(({x:C,y:T,placement:E,middlewareData:v})=>{var _;if(Object.assign(l.style,{left:`${C}px`,top:`${T}px`}),v.arrow){const{x:D,y:V}=v.arrow,N=(_={top:"bottom",right:"left",bottom:"top",left:"right"}[E.split("-")[0]])!=null?_:"bottom";Object.assign(u.style,{left:D!=null?`${D}px`:"",top:V!=null?`${V}px`:"",right:"",bottom:"",[N]:"-4px"})}n(10,s=E)})});function h(m){mt[m?"unshift":"push"](()=>{u=m,n(1,u)})}function b(m){mt[m?"unshift":"push"](()=>{l=m,n(0,l)})}return t.$$set=m=>{"tooltipProps"in m&&n(11,d=m.tooltipProps),"placement"in m&&n(10,s=m.placement),"$$scope"in m&&n(13,c=m.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&dt(Pe,l),t.$$.dirty&2&&dt(Re,u),t.$$.dirty&1024&&n(12,i=s==null?void 0:s.split("-")[0]),t.$$.dirty&4096&&n(3,o=i&&{left:`translateX(-${Y})`,right:`translateX(${Y})`,top:`translateY(-${Y})`,bottom:`translateY(${Y})`}[i])},[l,u,r,o,f,g,p,x,y,w,s,d,i,c,a,h,b]}class We extends kt{constructor(e){super(),$t(this,e,Te,Oe,Bt,{tooltipProps:11,placement:10})}get tooltipProps(){return this.$$.ctx[11]}set tooltipProps(e){this.$$set({tooltipProps:e}),at()}get placement(){return this.$$.ctx[10]}set placement(e){this.$$set({placement:e}),at()}}export{We as T,Ne as a,Ft as c,De as e,Ve as f,Ct as l,Se as t};
