var ee=Object.defineProperty,te=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var q=(n,e,l)=>e in n?ee(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,A=(n,e)=>{for(var l in e||(e={}))ne.call(e,l)&&q(n,l,e[l]);if(V)for(var l of V(e))se.call(e,l)&&q(n,l,e[l]);return n},K=(n,e)=>te(n,le(e));import{S as Q,i as X,s as Y,e as b,t as I,c as y,a as E,h as S,d,b as g,L as B,g as D,J as v,j as G,k as F,m as P,K as H,q as C,w as ae,x as ie,M,y as oe,o as T,B as re,p as Z,N as $,l as O,O as fe,n as x}from"../chunks/vendor-9fef9dc4.js";function R(n){let e,l=n[3][n[1]][n[2].toLowerCase()]+"",i,o;return{c(){e=b("span"),i=I(l),this.h()},l(s){e=y(s,"SPAN",{class:!0});var p=E(e);i=S(p,l),p.forEach(d),this.h()},h(){g(e,"class",o=B(n[1])+" svelte-135i2fi")},m(s,p){D(s,e,p),v(e,i)},p(s,p){p&6&&l!==(l=s[3][s[1]][s[2].toLowerCase()]+"")&&G(i,l),p&2&&o!==(o=B(s[1])+" svelte-135i2fi")&&g(e,"class",o)},d(s){s&&d(e)}}}function ce(n){let e,l,i=n[3][n[0]][n[2].toLowerCase()]+"",o,s,p,r=n[1]&&R(n);return{c(){e=b("div"),l=b("span"),o=I(i),p=F(),r&&r.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var m=E(e);l=y(m,"SPAN",{class:!0});var k=E(l);o=S(k,i),k.forEach(d),p=P(m),r&&r.l(m),m.forEach(d),this.h()},h(){g(l,"class",s=B(n[0])+" svelte-135i2fi"),g(e,"class","svelte-135i2fi")},m(u,m){D(u,e,m),v(e,l),v(l,o),v(e,p),r&&r.m(e,null)},p(u,[m]){m&5&&i!==(i=u[3][u[0]][u[2].toLowerCase()]+"")&&G(o,i),m&1&&s!==(s=B(u[0])+" svelte-135i2fi")&&g(l,"class",s),u[1]?r?r.p(u,m):(r=R(u),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:H,o:H,d(u){u&&d(e),r&&r.d()}}}function ue(n,e,l){let{type1:i}=e,{type2:o=null}=e,{language:s=N.DE}=e;const p={normal:{de:"Normal",en:"Normal"},fire:{de:"Feuer",en:"Fire"},water:{de:"Wasser",en:"Water"},electric:{de:"Elektro",en:"Electric"},grass:{de:"Pflanze",en:"Grass"},ice:{de:"Eis",en:"Ice"},fighting:{de:"Kampf",en:"Fighting"},poison:{de:"Gift",en:"Poison"},ground:{de:"Boden",en:"Ground"},flying:{de:"Flug",en:"Flying"},psychic:{de:"Psycho",en:"Psychic"},bug:{de:"K\xE4fer",en:"Bug"},rock:{de:"Gestein",en:"Rock"},ghost:{de:"Geist",en:"Ghost"},dragon:{de:"Drache",en:"Dragon"},dark:{de:"Unlicht",en:"Dark"},steel:{de:"Stahl",en:"Steel"},fairy:{de:"Fee",en:"Fairy"}};return n.$$set=r=>{"type1"in r&&l(0,i=r.type1),"type2"in r&&l(1,o=r.type2),"language"in r&&l(2,s=r.language)},[i,o,s,p]}class _e extends Q{constructor(e){super();X(this,e,ue,ce,Y,{type1:0,type2:1,language:2})}}function W(n,e,l){const i=n.slice();return i[4]=e[l],i}function j(n,e,l){const i=n.slice();return i[7]=e[l],i}function he(n){let e,l=n[7].name.en+"",i;return{c(){e=b("p"),i=I(l)},l(o){e=y(o,"P",{});var s=E(e);i=S(s,l),s.forEach(d)},m(o,s){D(o,e,s),v(e,i)},p(o,s){s&2&&l!==(l=o[7].name.en+"")&&G(i,l)},d(o){o&&d(e)}}}function pe(n){let e,l=n[7].name.de+"",i;return{c(){e=b("p"),i=I(l)},l(o){e=y(o,"P",{});var s=E(e);i=S(s,l),s.forEach(d)},m(o,s){D(o,e,s),v(e,i)},p(o,s){s&2&&l!==(l=o[7].name.de+"")&&G(i,l)},d(o){o&&d(e)}}}function z(n){let e,l,i,o,s,p,r,u,m,k,h;function w(t,f){return t[0]==N.DE?pe:he}let a=w(n),_=a(n);return u=new _e({props:{type1:n[7].typing[0],type2:n[7].typing[1],language:n[0]}}),{c(){e=b("a"),l=b("div"),i=b("img"),s=F(),p=b("div"),_.c(),r=F(),ae(u.$$.fragment),m=F(),this.h()},l(t){e=y(t,"A",{href:!0,target:!0,class:!0});var f=E(e);l=y(f,"DIV",{class:!0});var c=E(l);i=y(c,"IMG",{src:!0,alt:!0,class:!0}),s=P(c),p=y(c,"DIV",{class:!0});var L=E(p);_.l(L),L.forEach(d),r=P(c),ie(u.$$.fragment,c),c.forEach(d),m=P(f),f.forEach(d),this.h()},h(){M(i.src,o=n[7].imageUrl)||g(i,"src",o),g(i,"alt","pokemon.name.en"),g(i,"class","svelte-1lbinwi"),g(p,"class","pokemon-info svelte-1lbinwi"),g(l,"class","pokemon svelte-1lbinwi"),g(e,"href",k=n[7].pokemonDbUrl),g(e,"target","_blank"),g(e,"class","svelte-1lbinwi")},m(t,f){D(t,e,f),v(e,l),v(l,i),v(l,s),v(l,p),_.m(p,null),v(l,r),oe(u,l,null),v(e,m),h=!0},p(t,f){(!h||f&2&&!M(i.src,o=t[7].imageUrl))&&g(i,"src",o),a===(a=w(t))&&_?_.p(t,f):(_.d(1),_=a(t),_&&(_.c(),_.m(p,null)));const c={};f&2&&(c.type1=t[7].typing[0]),f&2&&(c.type2=t[7].typing[1]),f&1&&(c.language=t[0]),u.$set(c),(!h||f&2&&k!==(k=t[7].pokemonDbUrl))&&g(e,"href",k)},i(t){h||(C(u.$$.fragment,t),h=!0)},o(t){T(u.$$.fragment,t),h=!1},d(t){t&&d(e),_.d(),re(u)}}}function J(n){let e,l,i=n[4].name+"",o,s,p,r,u,m,k=n[4].pokemon,h=[];for(let a=0;a<k.length;a+=1)h[a]=z(j(n,k,a));const w=a=>T(h[a],1,1,()=>{h[a]=null});return{c(){e=b("div"),l=b("h2"),o=I(i),p=F(),r=b("div");for(let a=0;a<h.length;a+=1)h[a].c();u=F(),this.h()},l(a){e=y(a,"DIV",{class:!0});var _=E(e);l=y(_,"H2",{id:!0,class:!0});var t=E(l);o=S(t,i),t.forEach(d),p=P(_),r=y(_,"DIV",{class:!0});var f=E(r);for(let c=0;c<h.length;c+=1)h[c].l(f);f.forEach(d),u=P(_),_.forEach(d),this.h()},h(){g(l,"id",s=n[4].name),g(l,"class","svelte-1lbinwi"),g(r,"class","svelte-1lbinwi"),g(e,"class","tier svelte-1lbinwi")},m(a,_){D(a,e,_),v(e,l),v(l,o),v(e,p),v(e,r);for(let t=0;t<h.length;t+=1)h[t].m(r,null);v(e,u),m=!0},p(a,_){if((!m||_&2)&&i!==(i=a[4].name+"")&&G(o,i),(!m||_&2&&s!==(s=a[4].name))&&g(l,"id",s),_&3){k=a[4].pokemon;let t;for(t=0;t<k.length;t+=1){const f=j(a,k,t);h[t]?(h[t].p(f,_),C(h[t],1)):(h[t]=z(f),h[t].c(),C(h[t],1),h[t].m(r,null))}for(x(),t=k.length;t<h.length;t+=1)w(t);Z()}},i(a){if(!m){for(let _=0;_<k.length;_+=1)C(h[_]);m=!0}},o(a){h=h.filter(Boolean);for(let _=0;_<h.length;_+=1)T(h[_]);m=!1},d(a){a&&d(e),$(h,a)}}}function me(n){let e,l,i,o,s,p,r,u,m,k,h,w=n[1],a=[];for(let t=0;t<w.length;t+=1)a[t]=J(W(n,w,t));const _=t=>T(a[t],1,1,()=>{a[t]=null});return{c(){e=b("div"),l=b("button"),i=I(n[0]),o=F(),s=b("h1"),p=I("Tierlist f\xFCr TFL Season 3"),r=F();for(let t=0;t<a.length;t+=1)a[t].c();u=O(),this.h()},l(t){e=y(t,"DIV",{class:!0});var f=E(e);l=y(f,"BUTTON",{class:!0});var c=E(l);i=S(c,n[0]),c.forEach(d),f.forEach(d),o=P(t),s=y(t,"H1",{class:!0});var L=E(s);p=S(L,"Tierlist f\xFCr TFL Season 3"),L.forEach(d),r=P(t);for(let U=0;U<a.length;U+=1)a[U].l(t);u=O(),this.h()},h(){g(l,"class","svelte-1lbinwi"),g(e,"class","top-bar svelte-1lbinwi"),g(s,"class","svelte-1lbinwi")},m(t,f){D(t,e,f),v(e,l),v(l,i),D(t,o,f),D(t,s,f),v(s,p),D(t,r,f);for(let c=0;c<a.length;c+=1)a[c].m(t,f);D(t,u,f),m=!0,k||(h=fe(l,"click",n[2]),k=!0)},p(t,[f]){if((!m||f&1)&&G(i,t[0]),f&3){w=t[1];let c;for(c=0;c<w.length;c+=1){const L=W(t,w,c);a[c]?(a[c].p(L,f),C(a[c],1)):(a[c]=J(L),a[c].c(),C(a[c],1),a[c].m(u.parentNode,u))}for(x(),c=w.length;c<a.length;c+=1)_(c);Z()}},i(t){if(!m){for(let f=0;f<w.length;f+=1)C(a[f]);m=!0}},o(t){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)T(a[f]);m=!1},d(t){t&&d(e),t&&d(o),t&&d(s),t&&d(r),$(a,t),t&&d(u),k=!1,h()}}}var N;(function(n){n.DE="DE",n.EN="EN"})(N||(N={}));function de(n,e,l){let i,{tierlist:o}=e,s=N.DE;const p=()=>{l(0,s=s==N.DE?N.EN:N.DE)};return n.$$set=r=>{"tierlist"in r&&l(3,o=r.tierlist)},n.$$.update=()=>{n.$$.dirty&9&&l(1,i=o.map(r=>K(A({},r),{pokemon:r.pokemon.sort((u,m)=>u.name[s.toLowerCase()].localeCompare(m.name[s.toLowerCase()]))})))},[s,i,p,o]}class ke extends Q{constructor(e){super();X(this,e,de,me,Y,{tierlist:3})}}export{N as Language,ke as default};
