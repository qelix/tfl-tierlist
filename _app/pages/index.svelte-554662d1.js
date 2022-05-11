var tt=Object.defineProperty,lt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var $e=(n,e,t)=>e in n?tt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fe=(n,e)=>{for(var t in e||(e={}))rt.call(e,t)&&$e(n,t,e[t]);if(we)for(var t of we(e))st.call(e,t)&&$e(n,t,e[t]);return n},ue=(n,e)=>lt(n,nt(e));import{L as ot,D as pe,S as ne,i as re,s as te,e as w,c as $,a as I,d as m,b as p,g as S,M as A,n as j,o as N,p as C,q as y,N as se,O as ae,P as de,Q as at,w as G,x as W,y as z,K as x,B as K,R as it,T as _e,t as B,h as O,U as ie,J as k,j as R,k as L,m as M,V as ce,W as ge,X as oe,Y as ee,Z as H,_ as ct,$ as Ee,v as Ye,l as X,a0 as ve,a1 as Je,a2 as ft,a3 as ut,a4 as _t,a5 as mt,a6 as Qe,a7 as ht,a8 as pt,a9 as dt,aa as gt,ab as vt,ac as Te}from"../chunks/vendor-37050b0a.js";import{b as kt}from"../chunks/paths-4b3c6e7e.js";let Ze="en";Ze=localStorage.getItem("language");const Z=pe(Ze||"en");Z.subscribe(n=>localStorage.setItem("language",n));const bt=()=>{Z.update(n=>n==="de"?"en":"de")};let xe;xe=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");const me=pe(xe),Ne=ot(me,n=>n==="dark",n=>n?"dark":"light");me.subscribe(n=>{document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",n=>{me.set(n.matches?"dark":"light")});const le=pe("");le.subscribe(n=>{const e=new URL(window.location.href);(n==null?void 0:n.length)>0?e.searchParams.set("q",n):e.searchParams.delete("q"),window.history.replaceState(null,"",e.toString())});function yt(n){let e,t;return e=new de({props:{icon:at}}),{c(){G(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,r){z(e,l,r),t=!0},p:x,i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function wt(n){let e,t;return e=new de({props:{icon:it}}),{c(){G(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,r){z(e,l,r),t=!0},p:x,i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function $t(n){let e,t,l,r,s,o;const f=[wt,yt],i=[];function a(c,u){return c[0]?0:1}return t=a(n),l=i[t]=f[t](n),{c(){e=w("button"),l.c(),this.h()},l(c){e=$(c,"BUTTON",{class:!0});var u=I(e);l.l(u),u.forEach(m),this.h()},h(){p(e,"class","svelte-1cwi06j")},m(c,u){S(c,e,u),i[t].m(e,null),r=!0,s||(o=A(e,"click",n[1]),s=!0)},p(c,[u]){let _=t;t=a(c),t===_?i[t].p(c,u):(j(),N(i[_],1,1,()=>{i[_]=null}),C(),l=i[t],l?l.p(c,u):(l=i[t]=f[t](c),l.c()),y(l,1),l.m(e,null))},i(c){r||(y(l),r=!0)},o(c){N(l),r=!1},d(c){c&&m(e),i[t].d(),s=!1,o()}}}function Et(n,e,t){let l;return se(n,Ne,s=>t(0,l=s)),[l,()=>ae(Ne,l=!l,l)]}class Tt extends ne{constructor(e){super();re(this,e,Et,$t,te,{})}}class Nt{constructor(e){Object.assign(this,e)}get localName(){return this.name[_e(Z)]}get localForm(){var e;return(e=this.form)==null?void 0:e[_e(Z)]}get localNotes(){var e;return(e=this.notes)==null?void 0:e[_e(Z)]}}function De(n){let e,t=Q[n[1]][n[2]]+"",l,r;return{c(){e=w("span"),l=B(t),this.h()},l(s){e=$(s,"SPAN",{class:!0});var o=I(e);l=O(o,t),o.forEach(m),this.h()},h(){p(e,"class",r=ie(n[1])+" svelte-1k8dmpb")},m(s,o){S(s,e,o),k(e,l)},p(s,o){o&6&&t!==(t=Q[s[1]][s[2]]+"")&&R(l,t),o&2&&r!==(r=ie(s[1])+" svelte-1k8dmpb")&&p(e,"class",r)},d(s){s&&m(e)}}}function Dt(n){let e,t,l=Q[n[0]][n[2]]+"",r,s,o,f=n[1]&&De(n);return{c(){e=w("div"),t=w("span"),r=B(l),o=L(),f&&f.c(),this.h()},l(i){e=$(i,"DIV",{class:!0});var a=I(e);t=$(a,"SPAN",{class:!0});var c=I(t);r=O(c,l),c.forEach(m),o=M(a),f&&f.l(a),a.forEach(m),this.h()},h(){p(t,"class",s=ie(n[0])+" svelte-1k8dmpb"),p(e,"class","svelte-1k8dmpb")},m(i,a){S(i,e,a),k(e,t),k(t,r),k(e,o),f&&f.m(e,null)},p(i,[a]){a&5&&l!==(l=Q[i[0]][i[2]]+"")&&R(r,l),a&1&&s!==(s=ie(i[0])+" svelte-1k8dmpb")&&p(t,"class",s),i[1]?f?f.p(i,a):(f=De(i),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:x,o:x,d(i){i&&m(e),f&&f.d()}}}const Q={normal:{de:"Normal",en:"Normal"},fire:{de:"Feuer",en:"Fire"},water:{de:"Wasser",en:"Water"},electric:{de:"Elektro",en:"Electric"},grass:{de:"Pflanze",en:"Grass"},ice:{de:"Eis",en:"Ice"},fighting:{de:"Kampf",en:"Fighting"},poison:{de:"Gift",en:"Poison"},ground:{de:"Boden",en:"Ground"},flying:{de:"Flug",en:"Flying"},psychic:{de:"Psycho",en:"Psychic"},bug:{de:"K\xE4fer",en:"Bug"},rock:{de:"Gestein",en:"Rock"},ghost:{de:"Geist",en:"Ghost"},dragon:{de:"Drache",en:"Dragon"},dark:{de:"Unlicht",en:"Dark"},steel:{de:"Stahl",en:"Steel"},fairy:{de:"Fee",en:"Fairy"}};function It(n,e,t){let l;se(n,Z,o=>t(2,l=o));let{type1:r}=e,{type2:s=null}=e;return n.$$set=o=>{"type1"in o&&t(0,r=o.type1),"type2"in o&&t(1,s=o.type2)},[r,s,l]}class St extends ne{constructor(e){super();re(this,e,It,Dt,te,{type1:0,type2:1})}}function Ie(n){let e,t,l,r,s,o,f,i,a,c,u,_,d,E,q,T=n[2]&&Se(n);return{c(){e=w("div"),t=w("picture"),l=w("source"),s=L(),o=w("source"),i=L(),a=w("img"),_=L(),T&&T.c(),this.h()},l(F){e=$(F,"DIV",{class:!0});var D=I(e);t=$(D,"PICTURE",{});var b=I(t);l=$(b,"SOURCE",{srcset:!0,type:!0}),s=M(b),o=$(b,"SOURCE",{srcset:!0,type:!0}),i=M(b),a=$(b,"IMG",{src:!0,alt:!0,decoding:!0,loading:!0,class:!0}),b.forEach(m),_=M(D),T&&T.l(D),D.forEach(m),this.h()},h(){p(l,"srcset",r=n[8](n[0].team.logo.avif)),p(l,"type","image/avif"),p(o,"srcset",f=n[8](n[0].team.logo.webp)),p(o,"type","image/webp"),ce(a.src,c=n[8](n[0].team.logo.png))||p(a,"src",c),p(a,"alt",u="Logo von "+n[0].team.player),p(a,"decoding","async"),p(a,"loading","lazy"),p(a,"class","svelte-18olh32"),p(e,"class","pokemon-team")},m(F,D){S(F,e,D),k(e,t),k(t,l),k(t,s),k(t,o),k(t,i),k(t,a),k(e,_),T&&T.m(e,null),d=!0,E||(q=[A(e,"mouseover",n[5]),A(e,"focus",n[5]),A(e,"mouseout",n[6]),A(e,"blur",n[6]),A(e,"click",ge(n[7]))],E=!0)},p(F,D){(!d||D&1&&r!==(r=F[8](F[0].team.logo.avif)))&&p(l,"srcset",r),(!d||D&1&&f!==(f=F[8](F[0].team.logo.webp)))&&p(o,"srcset",f),(!d||D&1&&!ce(a.src,c=F[8](F[0].team.logo.png)))&&p(a,"src",c),(!d||D&1&&u!==(u="Logo von "+F[0].team.player))&&p(a,"alt",u),F[2]?T?(T.p(F,D),D&4&&y(T,1)):(T=Se(F),T.c(),y(T,1),T.m(e,null)):T&&(j(),N(T,1,1,()=>{T=null}),C())},i(F){d||(y(T),d=!0)},o(F){N(T),d=!1},d(F){F&&m(e),T&&T.d(),E=!1,ct(q)}}}function Se(n){let e,t=n[0].team.name+"",l,r,s,o=n[0].team.player+"",f,i,a;return{c(){e=w("span"),l=B(t),r=L(),s=w("span"),f=B(o),this.h()},l(c){e=$(c,"SPAN",{class:!0});var u=I(e);l=O(u,t),r=M(u),s=$(u,"SPAN",{class:!0});var _=I(s);f=O(_,o),_.forEach(m),u.forEach(m),this.h()},h(){p(s,"class","player svelte-18olh32"),p(e,"class","tooltip svelte-18olh32")},m(c,u){S(c,e,u),k(e,l),k(e,r),k(e,s),k(s,f),a=!0},p(c,u){(!a||u&1)&&t!==(t=c[0].team.name+"")&&R(l,t),(!a||u&1)&&o!==(o=c[0].team.player+"")&&R(f,o)},i(c){a||(oe(()=>{i||(i=ee(e,H,{y:15,duration:100},!0)),i.run(1)}),a=!0)},o(c){i||(i=ee(e,H,{y:15,duration:100},!1)),i.run(0),a=!1},d(c){c&&m(e),c&&i&&i.end()}}}function Fe(n){let e,t,l,r,s;return{c(){e=w("div"),this.h()},l(o){e=$(o,"DIV",{class:!0}),I(e).forEach(m),this.h()},h(){p(e,"class","pokemon-note svelte-18olh32")},m(o,f){S(o,e,f),l=!0,r||(s=A(e,"click",ge(n[4])),r=!0)},p:x,i(o){l||(oe(()=>{t||(t=ee(e,H,{y:-10,duration:300},!0)),t.run(1)}),l=!0)},o(o){t||(t=ee(e,H,{y:-10,duration:300},!1)),t.run(0),l=!1},d(o){o&&m(e),o&&t&&t.end(),r=!1,s()}}}function Pe(n){let e,t=(n[3].localNotes||"")+"",l,r,s,o,f;return{c(){e=w("div"),l=B(t),this.h()},l(i){e=$(i,"DIV",{class:!0});var a=I(e);l=O(a,t),a.forEach(m),this.h()},h(){p(e,"class","modal svelte-18olh32")},m(i,a){S(i,e,a),k(e,l),s=!0,o||(f=A(e,"click",ge(n[4])),o=!0)},p(i,a){(!s||a&8)&&t!==(t=(i[3].localNotes||"")+"")&&R(l,t)},i(i){s||(oe(()=>{r||(r=ee(e,H,{y:50,duration:300},!0)),r.run(1)}),s=!0)},o(i){r||(r=ee(e,H,{y:50,duration:300},!1)),r.run(0),s=!1},d(i){i&&m(e),i&&r&&r.end(),o=!1,f()}}}function Ft(n){let e,t,l,r,s,o,f,i,a,c,u=n[3].localName+"",_,d,E,q=(n[3].localForm||"")+"",T,F,D,b,Y,h,g=n[0].team&&Ie(n),v=n[0].notes&&!n[1]&&Fe(n),V=n[1]&&Pe(n);return b=new St({props:{type1:n[0].typing[0],type2:n[0].typing[1]}}),{c(){e=w("a"),t=w("img"),s=L(),o=w("div"),g&&g.c(),f=L(),v&&v.c(),i=L(),V&&V.c(),a=L(),c=w("div"),_=B(u),d=L(),E=w("div"),T=B(q),F=L(),D=w("div"),G(b.$$.fragment),this.h()},l(U){e=$(U,"A",{class:!0,href:!0,target:!0});var P=I(e);t=$(P,"IMG",{src:!0,alt:!0,crossorigin:!0,loading:!0,class:!0}),s=M(P),o=$(P,"DIV",{class:!0});var J=I(o);g&&g.l(J),f=M(J),v&&v.l(J),J.forEach(m),i=M(P),V&&V.l(P),a=M(P),c=$(P,"DIV",{class:!0});var ke=I(c);_=O(ke,u),ke.forEach(m),d=M(P),E=$(P,"DIV",{class:!0});var be=I(E);T=O(be,q),be.forEach(m),F=M(P),D=$(P,"DIV",{class:!0});var ye=I(D);W(b.$$.fragment,ye),ye.forEach(m),P.forEach(m),this.h()},h(){ce(t.src,l=n[0].imageUrl)||p(t,"src",l),p(t,"alt",r=n[3].localName),p(t,"crossorigin","anonymous"),p(t,"loading","lazy"),p(t,"class","svelte-18olh32"),p(o,"class","notes-container svelte-18olh32"),p(c,"class","pokemon-name"),p(E,"class","pokemon-form secondary svelte-18olh32"),p(D,"class","pokemon-typing svelte-18olh32"),p(e,"class","pokemon svelte-18olh32"),p(e,"href",Y=n[0].pokemonDbUrl),p(e,"target","_blank")},m(U,P){S(U,e,P),k(e,t),k(e,s),k(e,o),g&&g.m(o,null),k(o,f),v&&v.m(o,null),k(e,i),V&&V.m(e,null),k(e,a),k(e,c),k(c,_),k(e,d),k(e,E),k(E,T),k(e,F),k(e,D),z(b,D,null),h=!0},p(U,[P]){(!h||P&1&&!ce(t.src,l=U[0].imageUrl))&&p(t,"src",l),(!h||P&8&&r!==(r=U[3].localName))&&p(t,"alt",r),U[0].team?g?(g.p(U,P),P&1&&y(g,1)):(g=Ie(U),g.c(),y(g,1),g.m(o,f)):g&&(j(),N(g,1,1,()=>{g=null}),C()),U[0].notes&&!U[1]?v?(v.p(U,P),P&3&&y(v,1)):(v=Fe(U),v.c(),y(v,1),v.m(o,null)):v&&(j(),N(v,1,1,()=>{v=null}),C()),U[1]?V?(V.p(U,P),P&2&&y(V,1)):(V=Pe(U),V.c(),y(V,1),V.m(e,a)):V&&(j(),N(V,1,1,()=>{V=null}),C()),(!h||P&8)&&u!==(u=U[3].localName+"")&&R(_,u),(!h||P&8)&&q!==(q=(U[3].localForm||"")+"")&&R(T,q);const J={};P&1&&(J.type1=U[0].typing[0]),P&1&&(J.type2=U[0].typing[1]),b.$set(J),(!h||P&1&&Y!==(Y=U[0].pokemonDbUrl))&&p(e,"href",Y)},i(U){h||(y(g),y(v),y(V),y(b.$$.fragment,U),h=!0)},o(U){N(g),N(v),N(V),N(b.$$.fragment,U),h=!1},d(U){U&&m(e),g&&g.d(),v&&v.d(),V&&V.d(),K(b)}}}function Pt(n,e,t){let l,r;se(n,le,d=>t(9,r=d));let{pokemon:s}=e,o=!1,f=!1;const i=()=>{t(1,o=!o)},a=()=>{t(2,f=!0)},c=()=>{t(2,f=!1)},u=()=>{window.history.pushState(null,"",new URL(window.location.href)),ae(le,r=l.team.name,r)},_=d=>kt+"/logos/"+d;return n.$$set=d=>{"pokemon"in d&&t(0,s=d.pokemon)},n.$$.update=()=>{n.$$.dirty&1&&t(3,l=new Nt(s))},[s,o,f,l,i,a,c,u,_]}class et extends ne{constructor(e){super();re(this,e,Pt,Ft,te,{pokemon:0})}}function Ve(n,e,t){const l=n.slice();return l[8]=e[t],l}function Ue(n,e,t){const l=n.slice();return l[11]=e[t],l}function Le(n,e,t){const l=n.slice();return l[8]=e[t],l}function Me(n,e,t){const l=n.slice();return l[11]=e[t],l}function qe(n){let e,t=n[4](n[0])+"",l,r,s,o,f,i;const a=[Ut,Vt],c=[];function u(_,d){return _[0].rank===1?0:1}return o=u(n),f=c[o]=a[o](n),{c(){e=w("p"),l=B(t),r=L(),s=w("div"),f.c(),this.h()},l(_){e=$(_,"P",{class:!0});var d=I(e);l=O(d,t),d.forEach(m),r=M(_),s=$(_,"DIV",{class:!0});var E=I(s);f.l(E),E.forEach(m),this.h()},h(){p(e,"class","tier-subtitle secondary svelte-1ojnhyq"),p(s,"class","svelte-1ojnhyq")},m(_,d){S(_,e,d),k(e,l),S(_,r,d),S(_,s,d),c[o].m(s,null),i=!0},p(_,d){(!i||d&1)&&t!==(t=_[4](_[0])+"")&&R(l,t);let E=o;o=u(_),o===E?c[o].p(_,d):(j(),N(c[E],1,1,()=>{c[E]=null}),C(),f=c[o],f?f.p(_,d):(f=c[o]=a[o](_),f.c()),y(f,1),f.m(s,null))},i(_){i||(y(f),i=!0)},o(_){N(f),i=!1},d(_){_&&m(e),_&&m(r),_&&m(s),c[o].d()}}}function Vt(n){let e=[],t=new Map,l,r,s,o=n[0].pokemon;const f=a=>a[11].id;for(let a=0;a<o.length;a+=1){let c=Ue(n,o,a),u=f(c);t.set(u,e[a]=Ae(u,c))}let i=n[2]>0&&je(n);return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=L(),i&&i.c(),r=X()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);l=M(a),i&&i.l(a),r=X()},m(a,c){for(let u=0;u<e.length;u+=1)e[u].m(a,c);S(a,l,c),i&&i.m(a,c),S(a,r,c),s=!0},p(a,c){c&1&&(o=a[0].pokemon,j(),e=Je(e,c,f,1,a,o,t,l.parentNode,_t,Ae,l,Ue),C()),a[2]>0?i?i.p(a,c):(i=je(a),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(a){if(!s){for(let c=0;c<o.length;c+=1)y(e[c]);s=!0}},o(a){for(let c=0;c<e.length;c+=1)N(e[c]);s=!1},d(a){for(let c=0;c<e.length;c+=1)e[c].d(a);a&&m(l),i&&i.d(a),a&&m(r)}}}function Ut(n){let e=[],t=new Map,l,r,s,o=n[0].pokemon;const f=a=>a[11].id;for(let a=0;a<o.length;a+=1){let c=Me(n,o,a),u=f(c);t.set(u,e[a]=Be(u,c))}let i=n[2]>0&&Oe(n);return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=L(),i&&i.c(),r=X()},l(a){for(let c=0;c<e.length;c+=1)e[c].l(a);l=M(a),i&&i.l(a),r=X()},m(a,c){for(let u=0;u<e.length;u+=1)e[u].m(a,c);S(a,l,c),i&&i.m(a,c),S(a,r,c),s=!0},p(a,c){if(c&1){o=a[0].pokemon,j();for(let u=0;u<e.length;u+=1)e[u].r();e=Je(e,c,f,1,a,o,t,l.parentNode,mt,Be,l,Me);for(let u=0;u<e.length;u+=1)e[u].a();C()}a[2]>0?i?i.p(a,c):(i=Oe(a),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},i(a){if(!s){for(let c=0;c<o.length;c+=1)y(e[c]);s=!0}},o(a){for(let c=0;c<e.length;c+=1)N(e[c]);s=!1},d(a){for(let c=0;c<e.length;c+=1)e[c].d(a);a&&m(l),i&&i.d(a),a&&m(r)}}}function Ae(n,e){let t,l,r;return l=new et({props:{pokemon:e[11]}}),{key:n,first:null,c(){t=w("div"),G(l.$$.fragment),this.h()},l(s){t=$(s,"DIV",{class:!0});var o=I(t);W(l.$$.fragment,o),o.forEach(m),this.h()},h(){p(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(s,o){S(s,t,o),z(l,t,null),r=!0},p(s,o){e=s;const f={};o&1&&(f.pokemon=e[11]),l.$set(f)},i(s){r||(y(l.$$.fragment,s),r=!0)},o(s){N(l.$$.fragment,s),r=!1},d(s){s&&m(t),K(l)}}}function je(n){let e,t=Array(n[2]),l=[];for(let r=0;r<t.length;r+=1)l[r]=Ce(Ve(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=X()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);e=X()},m(r,s){for(let o=0;o<l.length;o+=1)l[o].m(r,s);S(r,e,s)},p(r,s){if(s&4){const o=t.length;t=Array(r[2]);let f;for(f=o;f<t.length;f+=1)Ve(r,t,f),l[f]||(l[f]=Ce(),l[f].c(),l[f].m(e.parentNode,e));for(f=t.length;f<o;f+=1)l[f].d(1);l.length=t.length}},d(r){ve(l,r),r&&m(e)}}}function Ce(n){let e;return{c(){e=w("div"),this.h()},l(t){e=$(t,"DIV",{class:!0}),I(e).forEach(m),this.h()},h(){p(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){S(t,e,l)},d(t){t&&m(e)}}}function Be(n,e){let t,l,r,s=x,o;return l=new et({props:{pokemon:e[11]}}),{key:n,first:null,c(){t=w("div"),G(l.$$.fragment),this.h()},l(f){t=$(f,"DIV",{class:!0});var i=I(t);W(l.$$.fragment,i),i.forEach(m),this.h()},h(){p(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(f,i){S(f,t,i),z(l,t,null),o=!0},p(f,i){e=f;const a={};i&1&&(a.pokemon=e[11]),l.$set(a)},r(){r=t.getBoundingClientRect()},f(){ft(t),s()},a(){s(),s=ut(t,r,ht,{duration:1e3,easing:Qe})},i(f){o||(y(l.$$.fragment,f),o=!0)},o(f){N(l.$$.fragment,f),o=!1},d(f){f&&m(t),K(l)}}}function Oe(n){let e,t=Array(n[2]),l=[];for(let r=0;r<t.length;r+=1)l[r]=Re(Le(n,t,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=X()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);e=X()},m(r,s){for(let o=0;o<l.length;o+=1)l[o].m(r,s);S(r,e,s)},p(r,s){if(s&4){const o=t.length;t=Array(r[2]);let f;for(f=o;f<t.length;f+=1)Le(r,t,f),l[f]||(l[f]=Re(),l[f].c(),l[f].m(e.parentNode,e));for(f=t.length;f<o;f+=1)l[f].d(1);l.length=t.length}},d(r){ve(l,r),r&&m(e)}}}function Re(n){let e;return{c(){e=w("div"),this.h()},l(t){e=$(t,"DIV",{class:!0}),I(e).forEach(m),this.h()},h(){p(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){S(t,e,l)},d(t){t&&m(e)}}}function Lt(n){let e,t,l=n[0].name+"",r,s,o,f,i,a,c,u=n[0].pokemon.length>0&&qe(n);return{c(){e=w("div"),t=w("h2"),r=B(l),s=L(),o=w("span"),f=B(n[3]),a=L(),u&&u.c(),this.h()},l(_){e=$(_,"DIV",{class:!0});var d=I(e);t=$(d,"H2",{id:!0,class:!0});var E=I(t);r=O(E,l),s=M(E),o=$(E,"SPAN",{class:!0});var q=I(o);f=O(q,n[3]),q.forEach(m),E.forEach(m),a=M(d),u&&u.l(d),d.forEach(m),this.h()},h(){p(o,"class","emptyText svelte-1ojnhyq"),p(t,"id",i=n[0].name),p(t,"class","svelte-1ojnhyq"),Ee(t,"empty",n[1]),p(e,"class","tier svelte-1ojnhyq")},m(_,d){S(_,e,d),k(e,t),k(t,r),k(t,s),k(t,o),k(o,f),k(e,a),u&&u.m(e,null),c=!0},p(_,[d]){(!c||d&1)&&l!==(l=_[0].name+"")&&R(r,l),(!c||d&8)&&R(f,_[3]),(!c||d&1&&i!==(i=_[0].name))&&p(t,"id",i),d&2&&Ee(t,"empty",_[1]),_[0].pokemon.length>0?u?(u.p(_,d),d&1&&y(u,1)):(u=qe(_),u.c(),y(u,1),u.m(e,null)):u&&(j(),N(u,1,1,()=>{u=null}),C())},i(_){c||(y(u),c=!0)},o(_){N(u),c=!1},d(_){_&&m(e),u&&u.d()}}}const Mt=150;function qt(n,e,t){let l,r,s,o,{tier:f}=e;const i=Math.floor(Math.random()*f.subtitles.length),a=u=>u.subtitles[i]||"";let c;return Ye(()=>{t(5,c=window.innerWidth),window.addEventListener("resize",()=>{t(5,c=window.innerWidth)})}),n.$$set=u=>{"tier"in u&&t(0,f=u.tier)},n.$$.update=()=>{n.$$.dirty&1&&t(1,l=f.pokemon.length===0),n.$$.dirty&3&&t(3,r=l?f.emptyText:""),n.$$.dirty&32&&t(6,s=Math.floor(c/Mt)),n.$$.dirty&65&&t(2,o=Math.max(s-f.pokemon.length,0))},[f,l,o,r,a,c,s]}class At extends ne{constructor(e){super();re(this,e,qt,Lt,te,{tier:0})}}function Ge(n){let e,t,l=n[0].toUpperCase()+"",r,s,o,f,i,a;return{c(){e=w("div"),t=w("button"),r=B(l),this.h()},l(c){e=$(c,"DIV",{class:!0});var u=I(e);t=$(u,"BUTTON",{class:!0});var _=I(t);r=O(_,l),_.forEach(m),u.forEach(m),this.h()},h(){p(t,"class","svelte-wvk003"),p(e,"class","svelte-wvk003")},m(c,u){S(c,e,u),k(e,t),k(t,r),f=!0,i||(a=A(t,"click",bt),i=!0)},p(c,u){n=c,(!f||u&1)&&l!==(l=n[0].toUpperCase()+"")&&R(r,l)},i(c){f||(oe(()=>{o&&o.end(1),s=pt(e,H,{duration:We,y:ze,easing:n[1]}),s.start()}),f=!0)},o(c){s&&s.invalidate(),o=dt(e,H,{duration:We,y:-ze,easing:n[1]}),f=!1},d(c){c&&m(e),c&&o&&o.end(),i=!1,a()}}}function jt(n){let e,t=n[0],l,r=Ge(n);return{c(){e=w("div"),r.c(),this.h()},l(s){e=$(s,"DIV",{class:!0});var o=I(e);r.l(o),o.forEach(m),this.h()},h(){p(e,"class","language-button-wrapper svelte-wvk003")},m(s,o){S(s,e,o),r.m(e,null),l=!0},p(s,[o]){o&1&&te(t,t=s[0])?(j(),N(r,1,1,x),C(),r=Ge(s),r.c(),y(r),r.m(e,null)):r.p(s,o)},i(s){l||(y(r),l=!0)},o(s){N(r),l=!1},d(s){s&&m(e),r.d(s)}}}const We=1e3,ze=25;function Ct(n,e,t){let l;return se(n,Z,s=>t(0,l=s)),[l,Qe]}class Bt extends ne{constructor(e){super();re(this,e,Ct,jt,te,{})}}const{window:he}=gt;function Ke(n){let e,t,l,r,s,o;return t=new de({props:{icon:vt}}),{c(){e=w("button"),G(t.$$.fragment),this.h()},l(f){e=$(f,"BUTTON",{class:!0});var i=I(e);W(t.$$.fragment,i),i.forEach(m),this.h()},h(){p(e,"class","scroll-to-top-button svelte-21sr9b")},m(f,i){S(f,e,i),z(t,e,null),r=!0,s||(o=A(e,"click",n[2]),s=!0)},p:x,i(f){r||(y(t.$$.fragment,f),oe(()=>{l||(l=ee(e,H,{y:100,duration:300},!0)),l.run(1)}),r=!0)},o(f){N(t.$$.fragment,f),l||(l=ee(e,H,{y:100,duration:300},!1)),l.run(0),r=!1},d(f){f&&m(e),K(t),f&&l&&l.end(),s=!1,o()}}}function Ot(n){let e=!1,t=()=>{e=!1},l,r,s,o,f;oe(n[3]);let i=n[1]>n[0]&&Ke(n);return{c(){i&&i.c(),r=X()},l(a){i&&i.l(a),r=X()},m(a,c){i&&i.m(a,c),S(a,r,c),s=!0,o||(f=A(he,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),n[3]()}),o=!0)},p(a,[c]){c&2&&!e&&(e=!0,clearTimeout(l),scrollTo(he.pageXOffset,a[1]),l=setTimeout(t,100)),a[1]>a[0]?i?(i.p(a,c),c&3&&y(i,1)):(i=Ke(a),i.c(),y(i,1),i.m(r.parentNode,r)):i&&(j(),N(i,1,1,()=>{i=null}),C())},i(a){s||(y(i),s=!0)},o(a){N(i),s=!1},d(a){i&&i.d(a),a&&m(r),o=!1,f()}}}function Rt(n,e,t){let l,{threshold:r=500}=e;const s=()=>{window.scroll({top:0,behavior:"smooth"})};function o(){t(1,l=he.pageYOffset)}return n.$$set=f=>{"threshold"in f&&t(0,r=f.threshold)},[r,l,s,o]}class Gt extends ne{constructor(e){super();re(this,e,Rt,Ot,te,{threshold:0})}}function He(n,e,t){const l=n.slice();return l[8]=e[t],l}function Xe(n){let e,t;return e=new At({props:{tier:n[8]}}),{c(){G(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,r){z(e,l,r),t=!0},p(l,r){const s={};r&2&&(s.tier=l[8]),e.$set(s)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function Wt(n){let e,t,l,r,s,o,f,i,a,c,u,_,d,E,q,T,F;o=new Tt({}),i=new Bt({});let D=n[1],b=[];for(let h=0;h<D.length;h+=1)b[h]=Xe(He(n,D,h));const Y=h=>N(b[h],1,1,()=>{b[h]=null});return E=new Gt({}),{c(){e=w("div"),t=w("input"),l=L(),r=w("div"),s=L(),G(o.$$.fragment),f=L(),G(i.$$.fragment),a=L(),c=w("h1"),u=B("Tierlist f\xFCr TFL Season 3"),_=L();for(let h=0;h<b.length;h+=1)b[h].c();d=L(),G(E.$$.fragment),this.h()},l(h){e=$(h,"DIV",{class:!0});var g=I(e);t=$(g,"INPUT",{type:!0,placeholder:!0,class:!0}),l=M(g),r=$(g,"DIV",{class:!0}),I(r).forEach(m),s=M(g),W(o.$$.fragment,g),f=M(g),W(i.$$.fragment,g),g.forEach(m),a=M(h),c=$(h,"H1",{class:!0});var v=I(c);u=O(v,"Tierlist f\xFCr TFL Season 3"),v.forEach(m),_=M(h);for(let V=0;V<b.length;V+=1)b[V].l(h);d=M(h),W(E.$$.fragment,h),this.h()},h(){p(t,"type","search"),p(t,"placeholder","Nach Pok\xE9mon, Typen oder Teams filtern"),p(t,"class","svelte-16slp6x"),p(r,"class","spacer svelte-16slp6x"),p(e,"class","top-bar"),p(c,"class","svelte-16slp6x")},m(h,g){S(h,e,g),k(e,t),Te(t,n[0]),k(e,l),k(e,r),k(e,s),z(o,e,null),k(e,f),z(i,e,null),S(h,a,g),S(h,c,g),k(c,u),S(h,_,g);for(let v=0;v<b.length;v+=1)b[v].m(h,g);S(h,d,g),z(E,h,g),q=!0,T||(F=A(t,"input",n[6]),T=!0)},p(h,[g]){if(g&1&&Te(t,h[0]),g&2){D=h[1];let v;for(v=0;v<D.length;v+=1){const V=He(h,D,v);b[v]?(b[v].p(V,g),y(b[v],1)):(b[v]=Xe(V),b[v].c(),y(b[v],1),b[v].m(d.parentNode,d))}for(j(),v=D.length;v<b.length;v+=1)Y(v);C()}},i(h){if(!q){y(o.$$.fragment,h),y(i.$$.fragment,h);for(let g=0;g<D.length;g+=1)y(b[g]);y(E.$$.fragment,h),q=!0}},o(h){N(o.$$.fragment,h),N(i.$$.fragment,h),b=b.filter(Boolean);for(let g=0;g<b.length;g+=1)N(b[g]);N(E.$$.fragment,h),q=!1},d(h){h&&m(e),K(o),K(i),h&&m(a),h&&m(c),h&&m(_),ve(b,h),h&&m(d),K(E,h),T=!1,F()}}}function zt(n,e,t){let l,r,s,o;se(n,le,u=>t(0,s=u)),se(n,Z,u=>t(5,o=u));let{tierlist:f}=e,{initialFilter:i}=e;console.log(i),ae(le,s=i||"",s),Ye(()=>{window.addEventListener("popstate",()=>{ae(le,s=i||"",s)})});const a=(u,_)=>{var d,E,q,T,F,D,b,Y,h,g;return[(d=u.form)==null?void 0:d.de,(E=u.form)==null?void 0:E.en,u.name.de,u.name.en,(q=Q[u.typing[0]])==null?void 0:q.de,(T=Q[u.typing[0]])==null?void 0:T.en,(D=Q[(F=u.typing)==null?void 0:F[1]])==null?void 0:D.de,(Y=Q[(b=u.typing)==null?void 0:b[1]])==null?void 0:Y.en,(h=u.team)==null?void 0:h.name,(g=u.team)==null?void 0:g.player].some(v=>v==null?void 0:v.toLowerCase().includes(_.toLowerCase()))};function c(){s=this.value,le.set(s)}return n.$$set=u=>{"tierlist"in u&&t(2,f=u.tierlist),"initialFilter"in u&&t(3,i=u.initialFilter)},n.$$.update=()=>{n.$$.dirty&36&&t(4,l=f.map(u=>ue(fe({},u),{pokemon:u.pokemon.sort((_,d)=>_.name[o].localeCompare(d.name[o]))}))),n.$$.dirty&17&&t(1,r=l.map(u=>ue(fe({},u),{pokemon:u.pokemon.filter(_=>a(_,s))})))},[s,r,f,i,l,o,c]}class Yt extends ne{constructor(e){super();re(this,e,zt,Wt,te,{tierlist:2,initialFilter:3})}}export{Yt as default};