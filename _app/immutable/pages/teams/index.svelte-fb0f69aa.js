import{S as I,i as w,s as B,l as p,r as C,a as T,m as d,n as g,u as D,h as f,c as b,p as v,b as h,I as k,f as _,d as S,t as y,a8 as V,w as q,x as H,y as L,B as P,g as j}from"../../chunks/index-7ce7c74a.js";import{T as z}from"../../chunks/team-e0431e55.js";import"../../chunks/paths-1c47712a.js";import"../../chunks/sprites-e8bb8e9f.js";import"../../chunks/index-4916a16a.js";function $(m,a,n){const r=m.slice();return r[1]=a[n],r[3]=n,r}function x(m){let a,n,r,l;return n=new z({props:{team:m[1],reverseLogoPosition:m[3]%2===1}}),{c(){a=p("div"),q(n.$$.fragment),r=T(),this.h()},l(o){a=d(o,"DIV",{class:!0});var c=g(a);H(n.$$.fragment,c),r=b(c),c.forEach(f),this.h()},h(){v(a,"class","team")},m(o,c){h(o,a,c),L(n,a,null),k(a,r),l=!0},p(o,c){const t={};c&1&&(t.team=o[1]),n.$set(t)},i(o){l||(_(n.$$.fragment,o),l=!0)},o(o){y(n.$$.fragment,o),l=!1},d(o){o&&f(a),P(n)}}}function A(m){let a,n,r,l,o,c=m[0],t=[];for(let e=0;e<c.length;e+=1)t[e]=x($(m,c,e));const E=e=>y(t[e],1,1,()=>{t[e]=null});return{c(){a=p("h1"),n=C("Teams"),r=T(),l=p("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){a=d(e,"H1",{class:!0});var i=g(a);n=D(i,"Teams"),i.forEach(f),r=b(e),l=d(e,"DIV",{class:!0});var s=g(l);for(let u=0;u<t.length;u+=1)t[u].l(s);s.forEach(f),this.h()},h(){v(a,"class","svelte-1f035m8"),v(l,"class","container svelte-1f035m8")},m(e,i){h(e,a,i),k(a,n),h(e,r,i),h(e,l,i);for(let s=0;s<t.length;s+=1)t[s].m(l,null);o=!0},p(e,[i]){if(i&1){c=e[0];let s;for(s=0;s<c.length;s+=1){const u=$(e,c,s);t[s]?(t[s].p(u,i),_(t[s],1)):(t[s]=x(u),t[s].c(),_(t[s],1),t[s].m(l,null))}for(j(),s=c.length;s<t.length;s+=1)E(s);S()}},i(e){if(!o){for(let i=0;i<c.length;i+=1)_(t[i]);o=!0}},o(e){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)y(t[i]);o=!1},d(e){e&&f(a),e&&f(r),e&&f(l),V(t,e)}}}function F(m,a,n){let{teams:r}=a;return m.$$set=l=>{"teams"in l&&n(0,r=l.teams)},m.$$.update=()=>{m.$$.dirty&1&&n(0,r=r.sort((l,o)=>l.name.localeCompare(o.name)))},[r]}class O extends I{constructor(a){super(),w(this,a,F,A,B,{teams:0})}}export{O as default};
