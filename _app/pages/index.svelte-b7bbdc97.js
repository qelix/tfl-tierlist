var Xe=Object.defineProperty,Ze=Object.defineProperties;var xe=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var Ee=(r,e,t)=>e in r?Xe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,he=(r,e)=>{for(var t in e||(e={}))et.call(e,t)&&Ee(r,t,e[t]);if(ye)for(var t of ye(e))tt.call(e,t)&&Ee(r,t,e[t]);return r},me=(r,e)=>Ze(r,xe(e));import{a1 as de,S as te,i as le,s as se,e as b,t as $,c as y,a as w,h as R,d as m,b as d,a2 as ce,g as I,N as g,j as M,k as V,m as F,H as Q,J as oe,a3 as _e,a4 as ue,G as z,a5 as ve,q as E,O as re,a6 as Y,Q as J,n as U,o as T,p as B,a7 as lt,w as X,x as Z,a8 as G,y as x,B as ee,K as pe,v as Ke,l as H,a9 as Ye,aa as st,ab as nt,ac as it,ad as ot,T as rt,ae as at,af as ft,I as ct,ag as ut}from"../chunks/vendor-ac6a09c9.js";import{l as ne,f as ie,a as _t}from"../chunks/store-70ed4e7a.js";import{b as ht}from"../chunks/paths-4b3c6e7e.js";class mt{constructor(e){Object.assign(this,e)}get localName(){return this.name[de(ne)]}get localForm(){var e;return(e=this.form)==null?void 0:e[de(ne)]}get localNotes(){var e;return(e=this.notes)==null?void 0:e[de(ne)]}}function we(r){let e,t=K[r[1]][r[2]]+"",l,s;return{c(){e=b("span"),l=$(t),this.h()},l(n){e=y(n,"SPAN",{class:!0});var o=w(e);l=R(o,t),o.forEach(m),this.h()},h(){d(e,"class",s=ce(r[1])+" svelte-1k8dmpb")},m(n,o){I(n,e,o),g(e,l)},p(n,o){o&6&&t!==(t=K[n[1]][n[2]]+"")&&M(l,t),o&2&&s!==(s=ce(n[1])+" svelte-1k8dmpb")&&d(e,"class",s)},d(n){n&&m(e)}}}function dt(r){let e,t,l=K[r[0]][r[2]]+"",s,n,o,c=r[1]&&we(r);return{c(){e=b("div"),t=b("span"),s=$(l),o=V(),c&&c.c(),this.h()},l(f){e=y(f,"DIV",{class:!0});var a=w(e);t=y(a,"SPAN",{class:!0});var i=w(t);s=R(i,l),i.forEach(m),o=F(a),c&&c.l(a),a.forEach(m),this.h()},h(){d(t,"class",n=ce(r[0])+" svelte-1k8dmpb"),d(e,"class","svelte-1k8dmpb")},m(f,a){I(f,e,a),g(e,t),g(t,s),g(e,o),c&&c.m(e,null)},p(f,[a]){a&5&&l!==(l=K[f[0]][f[2]]+"")&&M(s,l),a&1&&n!==(n=ce(f[0])+" svelte-1k8dmpb")&&d(t,"class",n),f[1]?c?c.p(f,a):(c=we(f),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i:Q,o:Q,d(f){f&&m(e),c&&c.d()}}}const K={normal:{de:"Normal",en:"Normal"},fire:{de:"Feuer",en:"Fire"},water:{de:"Wasser",en:"Water"},electric:{de:"Elektro",en:"Electric"},grass:{de:"Pflanze",en:"Grass"},ice:{de:"Eis",en:"Ice"},fighting:{de:"Kampf",en:"Fighting"},poison:{de:"Gift",en:"Poison"},ground:{de:"Boden",en:"Ground"},flying:{de:"Flug",en:"Flying"},psychic:{de:"Psycho",en:"Psychic"},bug:{de:"K\xE4fer",en:"Bug"},rock:{de:"Gestein",en:"Rock"},ghost:{de:"Geist",en:"Ghost"},dragon:{de:"Drache",en:"Dragon"},dark:{de:"Unlicht",en:"Dark"},steel:{de:"Stahl",en:"Steel"},fairy:{de:"Fee",en:"Fairy"},salt:{de:"Salz",en:"Salt"}};function pt(r,e,t){let l;oe(r,ne,o=>t(2,l=o));let{type1:s}=e,{type2:n=null}=e;return r.$$set=o=>{"type1"in o&&t(0,s=o.type1),"type2"in o&&t(1,n=o.type2)},[s,n,l]}class gt extends te{constructor(e){super();le(this,e,pt,dt,se,{type1:0,type2:1})}}function Ie(r,e,t){const l=r.slice();return l[10]=e[t],l}function Se(r){let e,t,l,s,n,o=r[1][r[10][0]]+"",c,f,a,i=r[10][1]+"",u,_;return{c(){e=b("div"),t=b("div"),s=V(),n=b("div"),c=$(o),f=V(),a=b("div"),u=$(i),_=V(),this.h()},l(h){e=y(h,"DIV",{class:!0});var p=w(e);t=y(p,"DIV",{class:!0,style:!0}),w(t).forEach(m),s=F(p),n=y(p,"DIV",{class:!0});var v=w(n);c=R(v,o),v.forEach(m),f=F(p),a=y(p,"DIV",{class:!0});var k=w(a);u=R(k,i),k.forEach(m),_=F(p),p.forEach(m),this.h()},h(){d(t,"class","stat-bar svelte-5xq0us"),d(t,"style",l=r[2](r[10][1])),d(n,"class","stat-label svelte-5xq0us"),d(a,"class","stat-number svelte-5xq0us"),d(e,"class","stat svelte-5xq0us")},m(h,p){I(h,e,p),g(e,t),g(e,s),g(e,n),g(n,c),g(e,f),g(e,a),g(a,u),g(e,_)},p(h,p){p&1&&l!==(l=h[2](h[10][1]))&&d(t,"style",l),p&1&&o!==(o=h[1][h[10][0]]+"")&&M(c,o),p&1&&i!==(i=h[10][1]+"")&&M(u,i)},d(h){h&&m(e)}}}function vt(r){let e,t=Object.entries(r[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=Se(Ie(r,t,s));return{c(){e=b("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);for(let o=0;o<l.length;o+=1)l[o].l(n);n.forEach(m),this.h()},h(){d(e,"class","details")},m(s,n){I(s,e,n);for(let o=0;o<l.length;o+=1)l[o].m(e,null)},p(s,[n]){if(n&7){t=Object.entries(s[0]);let o;for(o=0;o<t.length;o+=1){const c=Ie(s,t,o);l[o]?l[o].p(c,n):(l[o]=Se(c),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},i:Q,o:Q,d(s){s&&m(e),_e(l,s)}}}const kt=200;function Je(r){return r/kt*100}function bt(r){return Math.max(0,100-Je(r))}function yt(r,e,t){let l,{stats:s}=e,{abilities:n}=e;const o={hp:"HP",atk:"Atk",def:"Def",spatk:"SpA",spdef:"SpD",spd:"Spe"},c=[245,83,83],f=[20,195,142],a=[254,177,57],i=[48,170,221];function u(h){const p=Je(h);return`right: ${bt(h)}%;
				background-color: ${_(p)};
				`}function _(h){const p=Object.keys(l),v=Math.min(p.length-2,p.reduce((S,D)=>S+(h>=parseInt(D)?1:0),-1)),k=parseInt(p[v]),A=parseInt(p[v+1])-k,P=100/A,C=(h-k)*P/100,W=Object.values(l)[v],j=Object.values(l)[v+1],q=W[0]*(1-C)+j[0]*C,N=W[1]*(1-C)+j[1]*C,O=W[2]*(1-C)+j[2]*C;return`rgb(${q}, ${N}, ${O})`}return r.$$set=h=>{"stats"in h&&t(0,s=h.stats),"abilities"in h&&t(3,n=h.abilities)},l={0:c,20:c,30:a,60:f,100:i},[s,o,u,n]}class Et extends te{constructor(e){super();le(this,e,yt,vt,se,{stats:0,abilities:3})}}function De(r){let e,t,l=r[0].team&&Te(r),s=r[0].notes&&!r[1]&&qe(r);return{c(){e=b("div"),l&&l.c(),t=V(),s&&s.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var o=w(e);l&&l.l(o),t=F(o),s&&s.l(o),o.forEach(m),this.h()},h(){d(e,"class","notes-container svelte-rlasqj")},m(n,o){I(n,e,o),l&&l.m(e,null),g(e,t),s&&s.m(e,null)},p(n,o){n[0].team?l?l.p(n,o):(l=Te(n),l.c(),l.m(e,t)):l&&(l.d(1),l=null),n[0].notes&&!n[1]?s?(s.p(n,o),o&3&&E(s,1)):(s=qe(n),s.c(),E(s,1),s.m(e,null)):s&&(U(),T(s,1,1,()=>{s=null}),B())},d(n){n&&m(e),l&&l.d(),s&&s.d()}}}function Te(r){let e,t,l,s,n,o,c,f,a,i,u,_,h,p,v=r[2]&&je(r);return{c(){e=b("div"),t=b("picture"),l=b("source"),n=V(),o=b("source"),f=V(),a=b("img"),_=V(),v&&v.c(),this.h()},l(k){e=y(k,"DIV",{class:!0});var L=w(e);t=y(L,"PICTURE",{});var A=w(t);l=y(A,"SOURCE",{srcset:!0,type:!0}),n=F(A),o=y(A,"SOURCE",{srcset:!0,type:!0}),f=F(A),a=y(A,"IMG",{src:!0,alt:!0,decoding:!0,loading:!0,class:!0}),A.forEach(m),_=F(L),v&&v.l(L),L.forEach(m),this.h()},h(){d(l,"srcset",s=r[10](r[0].team.logo.avif)),d(l,"type","image/avif"),d(o,"srcset",c=r[10](r[0].team.logo.webp)),d(o,"type","image/webp"),ue(a.src,i=r[10](r[0].team.logo.png))||d(a,"src",i),d(a,"alt",u="Logo von "+r[0].team.player),d(a,"decoding","async"),d(a,"loading","lazy"),d(a,"class","svelte-rlasqj"),d(e,"class","pokemon-team")},m(k,L){I(k,e,L),g(e,t),g(t,l),g(t,n),g(t,o),g(t,f),g(t,a),g(e,_),v&&v.m(e,null),h||(p=[z(e,"mouseover",r[6]),z(e,"focus",r[6]),z(e,"mouseout",r[7]),z(e,"blur",r[7]),z(e,"click",ve(r[9]))],h=!0)},p(k,L){L&1&&s!==(s=k[10](k[0].team.logo.avif))&&d(l,"srcset",s),L&1&&c!==(c=k[10](k[0].team.logo.webp))&&d(o,"srcset",c),L&1&&!ue(a.src,i=k[10](k[0].team.logo.png))&&d(a,"src",i),L&1&&u!==(u="Logo von "+k[0].team.player)&&d(a,"alt",u),k[2]?v?(v.p(k,L),L&4&&E(v,1)):(v=je(k),v.c(),E(v,1),v.m(e,null)):v&&(U(),T(v,1,1,()=>{v=null}),B())},d(k){k&&m(e),v&&v.d(),h=!1,lt(p)}}}function je(r){let e,t=r[0].team.name+"",l,s,n,o=r[0].team.player+"",c,f,a;return{c(){e=b("span"),l=$(t),s=V(),n=b("span"),c=$(o),this.h()},l(i){e=y(i,"SPAN",{class:!0});var u=w(e);l=R(u,t),s=F(u),n=y(u,"SPAN",{class:!0});var _=w(n);c=R(_,o),_.forEach(m),u.forEach(m),this.h()},h(){d(n,"class","player svelte-rlasqj"),d(e,"class","tooltip svelte-rlasqj")},m(i,u){I(i,e,u),g(e,l),g(e,s),g(e,n),g(n,c),a=!0},p(i,u){(!a||u&1)&&t!==(t=i[0].team.name+"")&&M(l,t),(!a||u&1)&&o!==(o=i[0].team.player+"")&&M(c,o)},i(i){a||(i&&re(()=>{f||(f=Y(e,J,{y:15,duration:100},!0)),f.run(1)}),a=!0)},o(i){i&&(f||(f=Y(e,J,{y:15,duration:100},!1)),f.run(0)),a=!1},d(i){i&&m(e),i&&f&&f.end()}}}function qe(r){let e,t,l,s,n;return{c(){e=b("div"),this.h()},l(o){e=y(o,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){d(e,"class","pokemon-note svelte-rlasqj")},m(o,c){I(o,e,c),l=!0,s||(n=z(e,"click",ve(r[5])),s=!0)},p:Q,i(o){l||(o&&re(()=>{t||(t=Y(e,J,{y:-10,duration:300},!0)),t.run(1)}),l=!0)},o(o){o&&(t||(t=Y(e,J,{y:-10,duration:300},!1)),t.run(0)),l=!1},d(o){o&&m(e),o&&t&&t.end(),s=!1,n()}}}function Ne(r){let e,t=(r[4].localNotes||"")+"",l,s,n,o,c;return{c(){e=b("div"),l=$(t),this.h()},l(f){e=y(f,"DIV",{class:!0});var a=w(e);l=R(a,t),a.forEach(m),this.h()},h(){d(e,"class","modal svelte-rlasqj")},m(f,a){I(f,e,a),g(e,l),n=!0,o||(c=z(e,"click",ve(r[5])),o=!0)},p(f,a){(!n||a&16)&&t!==(t=(f[4].localNotes||"")+"")&&M(l,t)},i(f){n||(re(()=>{s||(s=Y(e,J,{y:50,duration:300},!0)),s.run(1)}),n=!0)},o(f){s||(s=Y(e,J,{y:50,duration:300},!1)),s.run(0),n=!1},d(f){f&&m(e),f&&s&&s.end(),o=!1,c()}}}function Oe(r){let e,t,l;return t=new gt({props:{type1:r[0].typing[0],type2:r[0].typing[1]}}),{c(){e=b("div"),X(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);Z(t.$$.fragment,n),n.forEach(m),this.h()},h(){d(e,"class","pokemon-typing"),G(e,"tiny",r[3])},m(s,n){I(s,e,n),x(t,e,null),l=!0},p(s,n){const o={};n&1&&(o.type1=s[0].typing[0]),n&1&&(o.type2=s[0].typing[1]),t.$set(o),n&8&&G(e,"tiny",s[3])},i(s){l||(E(t.$$.fragment,s),l=!0)},o(s){T(t.$$.fragment,s),l=!1},d(s){s&&m(e),ee(t)}}}function Ve(r){let e,t,l;return t=new Et({props:{stats:r[4].baseStats,abilities:r[4].abilities}}),{c(){e=b("div"),X(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var n=w(e);Z(t.$$.fragment,n),n.forEach(m),this.h()},h(){d(e,"class","pokemon-stats svelte-rlasqj")},m(s,n){I(s,e,n),x(t,e,null),l=!0},p(s,n){const o={};n&16&&(o.stats=s[4].baseStats),n&16&&(o.abilities=s[4].abilities),t.$set(o)},i(s){l||(E(t.$$.fragment,s),l=!0)},o(s){T(t.$$.fragment,s),l=!1},d(s){s&&m(e),ee(t)}}}function wt(r){let e,t,l,s,n,o,c,f,a,i,u=r[4].localName+"",_,h,p,v=(r[4].localForm||"")+"",k,L,A,P,C,W,j=!r[3]&&De(r),q=r[1]&&Ne(r),N=!r[3]&&Oe(r),O=r[3]&&Ve(r);return{c(){e=b("div"),j&&j.c(),t=V(),q&&q.c(),l=V(),s=b("div"),n=b("img"),f=V(),a=b("div"),i=b("div"),_=$(u),h=V(),p=b("div"),k=$(v),L=V(),N&&N.c(),A=V(),O&&O.c(),this.h()},l(S){e=y(S,"DIV",{class:!0});var D=w(e);j&&j.l(D),t=F(D),q&&q.l(D),l=F(D),s=y(D,"DIV",{class:!0});var ae=w(s);n=y(ae,"IMG",{src:!0,alt:!0,crossorigin:!0,loading:!0,class:!0}),f=F(ae),a=y(ae,"DIV",{class:!0});var fe=w(a);i=y(fe,"DIV",{class:!0});var ke=w(i);_=R(ke,u),ke.forEach(m),h=F(fe),p=y(fe,"DIV",{class:!0});var be=w(p);k=R(be,v),be.forEach(m),fe.forEach(m),ae.forEach(m),L=F(D),N&&N.l(D),A=F(D),O&&O.l(D),D.forEach(m),this.h()},h(){ue(n.src,o=r[0].imageUrl)||d(n,"src",o),d(n,"alt",c=r[4].localName),d(n,"crossorigin","anonymous"),d(n,"loading","lazy"),d(n,"class","svelte-rlasqj"),G(n,"tiny",r[3]),d(i,"class","name"),d(p,"class","form secondary svelte-rlasqj"),d(a,"class","pokemon-name svelte-rlasqj"),G(a,"tiny",r[3]),d(s,"class","pokemon-main svelte-rlasqj"),G(s,"tiny",r[3]),d(e,"class","pokemon svelte-rlasqj")},m(S,D){I(S,e,D),j&&j.m(e,null),g(e,t),q&&q.m(e,null),g(e,l),g(e,s),g(s,n),g(s,f),g(s,a),g(a,i),g(i,_),g(a,h),g(a,p),g(p,k),g(e,L),N&&N.m(e,null),g(e,A),O&&O.m(e,null),P=!0,C||(W=z(e,"click",r[8]),C=!0)},p(S,[D]){S[3]?j&&(j.d(1),j=null):j?j.p(S,D):(j=De(S),j.c(),j.m(e,t)),S[1]?q?(q.p(S,D),D&2&&E(q,1)):(q=Ne(S),q.c(),E(q,1),q.m(e,l)):q&&(U(),T(q,1,1,()=>{q=null}),B()),(!P||D&1&&!ue(n.src,o=S[0].imageUrl))&&d(n,"src",o),(!P||D&16&&c!==(c=S[4].localName))&&d(n,"alt",c),D&8&&G(n,"tiny",S[3]),(!P||D&16)&&u!==(u=S[4].localName+"")&&M(_,u),(!P||D&16)&&v!==(v=(S[4].localForm||"")+"")&&M(k,v),D&8&&G(a,"tiny",S[3]),D&8&&G(s,"tiny",S[3]),S[3]?N&&(U(),T(N,1,1,()=>{N=null}),B()):N?(N.p(S,D),D&8&&E(N,1)):(N=Oe(S),N.c(),E(N,1),N.m(e,A)),S[3]?O?(O.p(S,D),D&8&&E(O,1)):(O=Ve(S),O.c(),E(O,1),O.m(e,null)):O&&(U(),T(O,1,1,()=>{O=null}),B())},i(S){P||(E(q),E(N),E(O),P=!0)},o(S){T(q),T(N),T(O),P=!1},d(S){S&&m(e),j&&j.d(),q&&q.d(),N&&N.d(),O&&O.d(),C=!1,W()}}}function It(r,e,t){let l,s,n;oe(r,ie,k=>t(12,s=k)),oe(r,_t,k=>t(11,n=k));let{pokemon:o}=e,c=!1,f=!1,a=!1;const i=()=>{t(1,c=!c)},u=()=>{t(2,f=!0)},_=()=>{t(2,f=!1)},h=()=>t(3,a=!a),p=()=>{window.history.pushState(null,"",new URL(window.location.href)),pe(ie,s=l.team.name,s)},v=k=>ht+"/logos/"+k;return r.$$set=k=>{"pokemon"in k&&t(0,o=k.pokemon)},r.$$.update=()=>{r.$$.dirty&2048&&t(3,a=n),r.$$.dirty&1&&t(4,l=new mt(o))},[o,c,f,a,l,i,u,_,h,p,v,n]}class Qe extends te{constructor(e){super();le(this,e,It,wt,se,{pokemon:0})}}function Fe(r,e,t){const l=r.slice();return l[8]=e[t],l}function Le(r,e,t){const l=r.slice();return l[11]=e[t],l}function Ae(r,e,t){const l=r.slice();return l[8]=e[t],l}function Pe(r,e,t){const l=r.slice();return l[11]=e[t],l}function Ce(r){let e,t=r[4](r[0])+"",l,s,n,o,c,f;const a=[Dt,St],i=[];function u(_,h){return _[0].rank===1?0:1}return o=u(r),c=i[o]=a[o](r),{c(){e=b("p"),l=$(t),s=V(),n=b("div"),c.c(),this.h()},l(_){e=y(_,"P",{class:!0});var h=w(e);l=R(h,t),h.forEach(m),s=F(_),n=y(_,"DIV",{class:!0});var p=w(n);c.l(p),p.forEach(m),this.h()},h(){d(e,"class","tier-subtitle secondary svelte-1ojnhyq"),d(n,"class","svelte-1ojnhyq")},m(_,h){I(_,e,h),g(e,l),I(_,s,h),I(_,n,h),i[o].m(n,null),f=!0},p(_,h){(!f||h&1)&&t!==(t=_[4](_[0])+"")&&M(l,t);let p=o;o=u(_),o===p?i[o].p(_,h):(U(),T(i[p],1,1,()=>{i[p]=null}),B(),c=i[o],c?c.p(_,h):(c=i[o]=a[o](_),c.c()),E(c,1),c.m(n,null))},i(_){f||(E(c),f=!0)},o(_){T(c),f=!1},d(_){_&&m(e),_&&m(s),_&&m(n),i[o].d()}}}function St(r){let e=[],t=new Map,l,s,n,o=r[0].pokemon;const c=a=>a[11].id;for(let a=0;a<o.length;a+=1){let i=Le(r,o,a),u=c(i);t.set(u,e[a]=$e(u,i))}let f=r[2]>0&&Re(r);return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=V(),f&&f.c(),s=H()},l(a){for(let i=0;i<e.length;i+=1)e[i].l(a);l=F(a),f&&f.l(a),s=H()},m(a,i){for(let u=0;u<e.length;u+=1)e[u].m(a,i);I(a,l,i),f&&f.m(a,i),I(a,s,i),n=!0},p(a,i){i&1&&(o=a[0].pokemon,U(),e=Ye(e,i,c,1,a,o,t,l.parentNode,it,$e,l,Le),B()),a[2]>0?f?f.p(a,i):(f=Re(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){if(!n){for(let i=0;i<o.length;i+=1)E(e[i]);n=!0}},o(a){for(let i=0;i<e.length;i+=1)T(e[i]);n=!1},d(a){for(let i=0;i<e.length;i+=1)e[i].d(a);a&&m(l),f&&f.d(a),a&&m(s)}}}function Dt(r){let e=[],t=new Map,l,s,n,o=r[0].pokemon;const c=a=>a[11].id;for(let a=0;a<o.length;a+=1){let i=Pe(r,o,a),u=c(i);t.set(u,e[a]=Ue(u,i))}let f=r[2]>0&&Be(r);return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=V(),f&&f.c(),s=H()},l(a){for(let i=0;i<e.length;i+=1)e[i].l(a);l=F(a),f&&f.l(a),s=H()},m(a,i){for(let u=0;u<e.length;u+=1)e[u].m(a,i);I(a,l,i),f&&f.m(a,i),I(a,s,i),n=!0},p(a,i){if(i&1){o=a[0].pokemon,U();for(let u=0;u<e.length;u+=1)e[u].r();e=Ye(e,i,c,1,a,o,t,l.parentNode,ot,Ue,l,Pe);for(let u=0;u<e.length;u+=1)e[u].a();B()}a[2]>0?f?f.p(a,i):(f=Be(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){if(!n){for(let i=0;i<o.length;i+=1)E(e[i]);n=!0}},o(a){for(let i=0;i<e.length;i+=1)T(e[i]);n=!1},d(a){for(let i=0;i<e.length;i+=1)e[i].d(a);a&&m(l),f&&f.d(a),a&&m(s)}}}function $e(r,e){let t,l,s;return l=new Qe({props:{pokemon:e[11]}}),{key:r,first:null,c(){t=b("div"),X(l.$$.fragment),this.h()},l(n){t=y(n,"DIV",{class:!0});var o=w(t);Z(l.$$.fragment,o),o.forEach(m),this.h()},h(){d(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(n,o){I(n,t,o),x(l,t,null),s=!0},p(n,o){e=n;const c={};o&1&&(c.pokemon=e[11]),l.$set(c)},i(n){s||(E(l.$$.fragment,n),s=!0)},o(n){T(l.$$.fragment,n),s=!1},d(n){n&&m(t),ee(l)}}}function Re(r){let e,t=Array(r[2]),l=[];for(let s=0;s<t.length;s+=1)l[s]=Me(Fe(r,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=H()},l(s){for(let n=0;n<l.length;n+=1)l[n].l(s);e=H()},m(s,n){for(let o=0;o<l.length;o+=1)l[o].m(s,n);I(s,e,n)},p(s,n){if(n&4){const o=t.length;t=Array(s[2]);let c;for(c=o;c<t.length;c+=1)Fe(s,t,c),l[c]||(l[c]=Me(),l[c].c(),l[c].m(e.parentNode,e));for(c=t.length;c<o;c+=1)l[c].d(1);l.length=t.length}},d(s){_e(l,s),s&&m(e)}}}function Me(r){let e;return{c(){e=b("div"),this.h()},l(t){e=y(t,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){d(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){I(t,e,l)},d(t){t&&m(e)}}}function Ue(r,e){let t,l,s,n=Q,o;return l=new Qe({props:{pokemon:e[11]}}),{key:r,first:null,c(){t=b("div"),X(l.$$.fragment),this.h()},l(c){t=y(c,"DIV",{class:!0});var f=w(t);Z(l.$$.fragment,f),f.forEach(m),this.h()},h(){d(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(c,f){I(c,t,f),x(l,t,null),o=!0},p(c,f){e=c;const a={};f&1&&(a.pokemon=e[11]),l.$set(a)},r(){s=t.getBoundingClientRect()},f(){st(t),n()},a(){n(),n=nt(t,s,at,{duration:1e3,easing:rt})},i(c){o||(E(l.$$.fragment,c),o=!0)},o(c){T(l.$$.fragment,c),o=!1},d(c){c&&m(t),ee(l)}}}function Be(r){let e,t=Array(r[2]),l=[];for(let s=0;s<t.length;s+=1)l[s]=Ge(Ae(r,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=H()},l(s){for(let n=0;n<l.length;n+=1)l[n].l(s);e=H()},m(s,n){for(let o=0;o<l.length;o+=1)l[o].m(s,n);I(s,e,n)},p(s,n){if(n&4){const o=t.length;t=Array(s[2]);let c;for(c=o;c<t.length;c+=1)Ae(s,t,c),l[c]||(l[c]=Ge(),l[c].c(),l[c].m(e.parentNode,e));for(c=t.length;c<o;c+=1)l[c].d(1);l.length=t.length}},d(s){_e(l,s),s&&m(e)}}}function Ge(r){let e;return{c(){e=b("div"),this.h()},l(t){e=y(t,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){d(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){I(t,e,l)},d(t){t&&m(e)}}}function Tt(r){let e,t,l=r[0].name+"",s,n,o,c,f,a,i,u=r[0].pokemon.length>0&&Ce(r);return{c(){e=b("div"),t=b("h2"),s=$(l),n=V(),o=b("span"),c=$(r[3]),a=V(),u&&u.c(),this.h()},l(_){e=y(_,"DIV",{class:!0});var h=w(e);t=y(h,"H2",{id:!0,class:!0});var p=w(t);s=R(p,l),n=F(p),o=y(p,"SPAN",{class:!0});var v=w(o);c=R(v,r[3]),v.forEach(m),p.forEach(m),a=F(h),u&&u.l(h),h.forEach(m),this.h()},h(){d(o,"class","emptyText svelte-1ojnhyq"),d(t,"id",f=r[0].name),d(t,"class","svelte-1ojnhyq"),G(t,"empty",r[1]),d(e,"class","tier svelte-1ojnhyq")},m(_,h){I(_,e,h),g(e,t),g(t,s),g(t,n),g(t,o),g(o,c),g(e,a),u&&u.m(e,null),i=!0},p(_,[h]){(!i||h&1)&&l!==(l=_[0].name+"")&&M(s,l),(!i||h&8)&&M(c,_[3]),(!i||h&1&&f!==(f=_[0].name))&&d(t,"id",f),h&2&&G(t,"empty",_[1]),_[0].pokemon.length>0?u?(u.p(_,h),h&1&&E(u,1)):(u=Ce(_),u.c(),E(u,1),u.m(e,null)):u&&(U(),T(u,1,1,()=>{u=null}),B())},i(_){i||(E(u),i=!0)},o(_){T(u),i=!1},d(_){_&&m(e),u&&u.d()}}}const jt=150;function qt(r,e,t){let l,s,n,o,{tier:c}=e;const f=Math.floor(Math.random()*c.subtitles.length),a=u=>u.subtitles[f]||"";let i;return Ke(()=>{t(5,i=window.innerWidth),window.addEventListener("resize",()=>{t(5,i=window.innerWidth)})}),r.$$set=u=>{"tier"in u&&t(0,c=u.tier)},r.$$.update=()=>{r.$$.dirty&1&&t(1,l=c.pokemon.length===0),r.$$.dirty&3&&t(3,s=l?c.emptyText:""),r.$$.dirty&32&&t(6,n=Math.floor(i/jt)),r.$$.dirty&65&&t(2,o=Math.max(n-c.pokemon.length,0))},[c,l,o,s,a,i,n]}class Nt extends te{constructor(e){super();le(this,e,qt,Tt,se,{tier:0})}}const{window:ge}=ft;function ze(r){let e,t,l,s,n,o;return t=new ct({props:{icon:ut}}),{c(){e=b("button"),X(t.$$.fragment),this.h()},l(c){e=y(c,"BUTTON",{class:!0});var f=w(e);Z(t.$$.fragment,f),f.forEach(m),this.h()},h(){d(e,"class","scroll-to-top-button svelte-21sr9b")},m(c,f){I(c,e,f),x(t,e,null),s=!0,n||(o=z(e,"click",r[2]),n=!0)},p:Q,i(c){s||(E(t.$$.fragment,c),re(()=>{l||(l=Y(e,J,{y:100,duration:300},!0)),l.run(1)}),s=!0)},o(c){T(t.$$.fragment,c),l||(l=Y(e,J,{y:100,duration:300},!1)),l.run(0),s=!1},d(c){c&&m(e),ee(t),c&&l&&l.end(),n=!1,o()}}}function Ot(r){let e=!1,t=()=>{e=!1},l,s,n,o,c;re(r[3]);let f=r[1]>r[0]&&ze(r);return{c(){f&&f.c(),s=H()},l(a){f&&f.l(a),s=H()},m(a,i){f&&f.m(a,i),I(a,s,i),n=!0,o||(c=z(ge,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),r[3]()}),o=!0)},p(a,[i]){i&2&&!e&&(e=!0,clearTimeout(l),scrollTo(ge.pageXOffset,a[1]),l=setTimeout(t,100)),a[1]>a[0]?f?(f.p(a,i),i&3&&E(f,1)):(f=ze(a),f.c(),E(f,1),f.m(s.parentNode,s)):f&&(U(),T(f,1,1,()=>{f=null}),B())},i(a){n||(E(f),n=!0)},o(a){T(f),n=!1},d(a){f&&f.d(a),a&&m(s),o=!1,c()}}}function Vt(r,e,t){let l,{threshold:s=500}=e;const n=()=>{window.scroll({top:0,behavior:"smooth"})};function o(){t(1,l=ge.pageYOffset)}return r.$$set=c=>{"threshold"in c&&t(0,s=c.threshold)},[s,l,n,o]}class Ft extends te{constructor(e){super();le(this,e,Vt,Ot,se,{threshold:0})}}function He(r,e,t){const l=r.slice();return l[7]=e[t],l}function We(r){let e,t;return e=new Nt({props:{tier:r[7]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,s){x(e,l,s),t=!0},p(l,s){const n={};s&1&&(n.tier=l[7]),e.$set(n)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Lt(r){let e,t,l,s,n,o,c=r[0],f=[];for(let i=0;i<c.length;i+=1)f[i]=We(He(r,c,i));const a=i=>T(f[i],1,1,()=>{f[i]=null});return n=new Ft({}),{c(){e=b("h1"),t=$("Tierlist f\xFCr TFL Season 3"),l=V();for(let i=0;i<f.length;i+=1)f[i].c();s=V(),X(n.$$.fragment),this.h()},l(i){e=y(i,"H1",{class:!0});var u=w(e);t=R(u,"Tierlist f\xFCr TFL Season 3"),u.forEach(m),l=F(i);for(let _=0;_<f.length;_+=1)f[_].l(i);s=F(i),Z(n.$$.fragment,i),this.h()},h(){d(e,"class","svelte-1rptoyp")},m(i,u){I(i,e,u),g(e,t),I(i,l,u);for(let _=0;_<f.length;_+=1)f[_].m(i,u);I(i,s,u),x(n,i,u),o=!0},p(i,[u]){if(u&1){c=i[0];let _;for(_=0;_<c.length;_+=1){const h=He(i,c,_);f[_]?(f[_].p(h,u),E(f[_],1)):(f[_]=We(h),f[_].c(),E(f[_],1),f[_].m(s.parentNode,s))}for(U(),_=c.length;_<f.length;_+=1)a(_);B()}},i(i){if(!o){for(let u=0;u<c.length;u+=1)E(f[u]);E(n.$$.fragment,i),o=!0}},o(i){f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)T(f[u]);T(n.$$.fragment,i),o=!1},d(i){i&&m(e),i&&m(l),_e(f,i),i&&m(s),ee(n,i)}}}function At(r,e,t){let l,s,n,o;oe(r,ie,i=>t(4,n=i)),oe(r,ne,i=>t(5,o=i));let{tierlist:c}=e,{initialFilter:f}=e;pe(ie,n=f||"",n),Ke(()=>{window.addEventListener("popstate",()=>{pe(ie,n=f||"",n)})});const a=(i,u)=>{var _,h,p,v,k,L,A,P,C,W;return[(_=i.form)==null?void 0:_.de,(h=i.form)==null?void 0:h.en,i.name.de,i.name.en,(p=K[i.typing[0]])==null?void 0:p.de,(v=K[i.typing[0]])==null?void 0:v.en,(L=K[(k=i.typing)==null?void 0:k[1]])==null?void 0:L.de,(P=K[(A=i.typing)==null?void 0:A[1]])==null?void 0:P.en,(C=i.team)==null?void 0:C.name,(W=i.team)==null?void 0:W.player].some(j=>j==null?void 0:j.toLowerCase().includes(u.toLowerCase()))};return r.$$set=i=>{"tierlist"in i&&t(1,c=i.tierlist),"initialFilter"in i&&t(2,f=i.initialFilter)},r.$$.update=()=>{r.$$.dirty&34&&t(3,l=c.map(i=>me(he({},i),{pokemon:i.pokemon.sort((u,_)=>u.name[o].localeCompare(_.name[o]))}))),r.$$.dirty&24&&t(0,s=l.map(i=>me(he({},i),{pokemon:i.pokemon.filter(u=>a(u,n))})))},[s,c,f,l,n,o]}class Mt extends te{constructor(e){super();le(this,e,At,Lt,se,{tierlist:1,initialFilter:2})}}export{Mt as default};
