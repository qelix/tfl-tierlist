function x(){}const G=t=>t;function bt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function it(){return Object.create(null)}function C(t){t.forEach(rt)}function T(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Jt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function $t(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return ot(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Ut(t,e,n,i){if(t){const r=ct(t,e,n,i);return t[0](r)}}function ct(t,e,n,i){return t[1]&&i?bt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Xt(t,e,n,i,r,c){if(r){const s=ct(e,n,i,c);t.p(s,r)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t){return t==null?"":t}function ee(t,e,n){return t.set(n),e}function ne(t){return t&&T(t.destroy)?t.destroy:x}const lt=typeof window<"u";let J=lt?()=>window.performance.now():()=>Date.now(),Z=lt?t=>requestAnimationFrame(t):x;const S=new Set;function at(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Z(at)}function K(t){let e;return S.size===0&&Z(at),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let Q=!1;function xt(){Q=!0}function wt(){Q=!1}function vt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:vt(1,r,u=>e[n[u]].claim_order,a))-1;i[o]=n[d]+1;const _=d+1;n[_]=o,r=Math.max(_,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(s[o],d)}}function Et(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=ft("style");return St(ut(t),e),e.sheet}function St(t,e){Et(t.head||t,e)}function Nt(t,e){if(Q){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){Q&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function jt(t){t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function re(){return tt(" ")}function oe(){return tt("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function le(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t,e){for(const n in e)Mt(t,n,e[n])}function Rt(t){return Array.from(t.childNodes)}function Pt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,i,r=!1){Pt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function dt(t,e,n,i){return _t(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ue(t,e,n){return dt(t,e,n,ft)}function fe(t,e,n){return dt(t,e,n,At)}function Bt(t,e){return _t(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function _e(t){return Bt(t," ")}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function he(t,e){t.value=e==null?"":e}function me(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const I=new Map;let W=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:Ct(e),rules:{}};return I.set(t,n),n}function P(t,e,n,i,r,c,s,l=0){const o=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*c(m);a+=m*100+`%{${s(y,1-y)}}
`}const d=a+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Dt(d)}_${l}`,u=ut(t),{stylesheet:f,rules:h}=I.get(u)||Tt(u,t);h[_]||(h[_]=!0,f.insertRule(`@keyframes ${_} ${d}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,W+=1,_}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),W-=r,W||Ot())}function Ot(){Z(()=>{W||(I.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),I.clear())})}function ge(t,e,n,i){if(!e)return x;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return x;const{delay:c=0,duration:s=300,easing:l=G,start:o=J()+c,end:a=o+s,tick:d=x,css:_}=n(t,{from:e,to:r},i);let u=!0,f=!1,h;function p(){_&&(h=P(t,0,1,s,c,l,_)),c||(f=!0)}function m(){_&&B(t,h),u=!1}return K(y=>{if(!f&&y>=o&&(f=!0),f&&y>=a&&(d(1,0),m()),!u)return!1;if(f){const b=y-o,$=0+1*l(b/s);d($,1-$)}return!0}),p(),d(0,1),m}function ye(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,qt(t,r)}}function qt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function R(t){D=t}function j(){if(!D)throw new Error("Function called outside component initialization");return D}function be(t){j().$$.on_mount.push(t)}function $e(t){j().$$.after_update.push(t)}function xe(t){j().$$.on_destroy.push(t)}function we(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=ht(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function ve(t,e){return j().$$.context.set(t,e),e}function ke(t){return j().$$.context.get(t)}function Ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const M=[],st=[],F=[],X=[],mt=Promise.resolve();let Y=!1;function pt(){Y||(Y=!0,mt.then(gt))}function Ce(){return pt(),mt}function N(t){F.push(t)}function Se(t){X.push(t)}const V=new Set;let z=0;function gt(){const t=D;do{for(;z<M.length;){const e=M[z];z++,R(e),Lt(e.$$)}for(R(null),M.length=0,z=0;st.length;)st.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];V.has(n)||(V.add(n),n())}F.length=0}while(M.length);for(;X.length;)X.pop()();Y=!1,V.clear(),R(t)}function Lt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let A;function et(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function E(t,e,n){t.dispatchEvent(ht(`${e?"intro":"outro"}${n}`))}const H=new Set;let k;function Ne(){k={r:0,c:[],p:k}}function je(){k.r||C(k.c),k=k.p}function yt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if(H.has(t))return;H.add(t),k.c.push(()=>{H.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Ae(t,e,n){let i=e(t,n),r=!1,c,s,l=0;function o(){c&&B(t,c)}function a(){const{delay:_=0,duration:u=300,easing:f=G,tick:h=x,css:p}=i||nt;p&&(c=P(t,0,1,u,_,f,p,l++)),h(0,1);const m=J()+_,y=m+u;s&&s.abort(),r=!0,N(()=>E(t,!0,"start")),s=K(b=>{if(r){if(b>=y)return h(1,0),E(t,!0,"end"),o(),r=!1;if(b>=m){const $=f((b-m)/u);h($,1-$)}}return r})}let d=!1;return{start(){d||(d=!0,B(t),T(i)?(i=i(),et().then(a)):a())},invalidate(){d=!1},end(){r&&(o(),r=!1)}}}function Me(t,e,n){let i=e(t,n),r=!0,c;const s=k;s.r+=1;function l(){const{delay:o=0,duration:a=300,easing:d=G,tick:_=x,css:u}=i||nt;u&&(c=P(t,1,0,a,o,d,u));const f=J()+o,h=f+a;N(()=>E(t,!1,"start")),K(p=>{if(r){if(p>=h)return _(0,1),E(t,!1,"end"),--s.r||C(s.c),!1;if(p>=f){const m=d((p-f)/a);_(1-m,m)}}return r})}return T(i)?et().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(c&&B(t,c),r=!1)}}}function Re(t,e,n,i){let r=e(t,n),c=i?0:1,s=null,l=null,o=null;function a(){o&&B(t,o)}function d(u,f){const h=u.b-c;return f*=Math.abs(h),{a:c,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function _(u){const{delay:f=0,duration:h=300,easing:p=G,tick:m=x,css:y}=r||nt,b={start:J()+f,b:u};u||(b.group=k,k.r+=1),s||l?l=b:(y&&(a(),o=P(t,c,u,h,f,p,y)),u&&m(0,1),s=d(b,h),N(()=>E(t,u,"start")),K($=>{if(l&&$>l.start&&(s=d(l,h),l=null,E(t,s.b,"start"),y&&(a(),o=P(t,c,s.b,s.duration,0,p,r.css))),s){if($>=s.end)m(c=s.b,1-c),E(t,s.b,"end"),l||(s.b?a():--s.group.r||C(s.group.c)),s=null;else if($>=s.start){const O=$-s.start;c=s.a+s.d*p(O/s.duration),m(c,1-c)}}return!!(s||l)}))}return{run(u){T(r)?et().then(()=>{r=r(),_(u)}):_(u)},end(){a(),s=l=null}}}const Pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ft(t,e){zt(t,1,1,()=>{e.delete(t.key)})}function Be(t,e){t.f(),Ft(t,e)}function De(t,e,n,i,r,c,s,l,o,a,d,_){let u=t.length,f=c.length,h=u;const p={};for(;h--;)p[t[h].key]=h;const m=[],y=new Map,b=new Map;for(h=f;h--;){const g=_(r,c,h),w=n(g);let v=s.get(w);v?i&&v.p(g,e):(v=a(w,g),v.c()),y.set(w,m[h]=v),w in p&&b.set(w,Math.abs(h-p[w]))}const $=new Set,O=new Set;function U(g){yt(g,1),g.m(l,d),s.set(g.key,g),d=g.first,f--}for(;u&&f;){const g=m[f-1],w=t[u-1],v=g.key,q=w.key;g===w?(d=g.first,u--,f--):y.has(q)?!s.has(v)||$.has(v)?U(g):O.has(q)?u--:b.get(v)>b.get(q)?(O.add(v),U(g)):($.add(q),u--):(o(w,s),u--)}for(;u--;){const g=t[u];y.has(g.key)||o(g,s)}for(;f;)U(m[f-1]);return m}function Te(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Oe(t){return typeof t=="object"&&t!==null?t:{}}function qe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Le(t){t&&t.c()}function ze(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||N(()=>{const o=c.map(rt).filter(T);s?s.push(...o):C(o),t.$$.on_mount=[]}),l.forEach(N)}function It(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(M.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fe(t,e,n,i,r,c,s,l=[-1]){const o=D;R(t);const a=t.$$={fragment:null,ctx:null,props:c,update:x,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:it(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(_,u,...f)=>{const h=f.length?f[0]:u;return a.ctx&&r(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),d&&Wt(t,_)),u}):[],a.update(),d=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){xt();const _=Rt(e.target);a.fragment&&a.fragment.l(_),_.forEach(jt)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),wt(),gt()}R(o)}class He{$destroy(){It(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ee as $,Oe as A,It as B,bt as C,Ce as D,x as E,ot as F,C as G,T as H,Nt as I,he as J,ce as K,Qt as L,ee as M,Ut as N,Xt as O,Yt as P,Vt as Q,N as R,He as S,Ae as T,Me as U,Kt as V,pe as W,st as X,qe as Y,Se as Z,le as _,re as a,xe as a0,Zt as a1,At as a2,fe as a3,ae as a4,we as a5,gt as a6,te as a7,se as a8,ne as a9,Jt as aa,De as ab,ye as ac,ge as ad,Ft as ae,Be as af,Pe as ag,Re as ah,ke as ai,ie as b,_e as c,je as d,oe as e,yt as f,Ne as g,jt as h,Fe as i,ve as j,$e as k,ft as l,ue as m,Rt as n,be as o,Mt as p,me as q,tt as r,Gt as s,zt as t,Bt as u,de as v,Le as w,ze as x,Ht as y,Te as z};