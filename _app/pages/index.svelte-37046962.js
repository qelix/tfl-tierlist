var ut=Object.defineProperty,_t=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable;var Ie=(s,e,t)=>e in s?ut(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,pe=(s,e)=>{for(var t in e||(e={}))mt.call(e,t)&&Ie(s,t,e[t]);if(we)for(var t of we(e))pt.call(e,t)&&Ie(s,t,e[t]);return s},de=(s,e)=>_t(s,ht(e));import{a4 as ge,S as J,i as Q,s as Z,e as v,t as $,c as k,a as E,h as F,d as m,b as p,a5 as fe,g as w,N as g,j as M,k as N,m as P,H as q,J as le,a6 as Te,X as j,f as ae,v as be,r as De,U as Se,a7 as dt,a8 as gt,a9 as vt,aa as kt,ab as bt,G as ne,ac as ye,ad as _e,ae as Ee,a1 as he,af as ie,ag as nt,ah as ue,w as G,x as W,y as H,q as S,o as O,B as Y,n as B,p as U,K as ve,l as R,ai as st,aj as yt,ak as Et,al as wt,am as It,T as Tt,an as Dt,O as it,ao as Le,ap as St,I as Lt,aq as Ot,Q as Oe}from"../chunks/vendor-9656f187.js";import{l as te,f as se,a as Nt}from"../chunks/store-03b80e1c.js";import{b as Pt}from"../chunks/paths-4b3c6e7e.js";class Vt{constructor(e){Object.assign(this,e)}get localName(){return this.name[ge(te)]}get localForm(){var e;return(e=this.form)==null?void 0:e[ge(te)]}get localNotes(){var e;return(e=this.notes)==null?void 0:e[ge(te)]}}function Ne(s){let e,t=z[s[1]][s[2]]+"",l,n;return{c(){e=v("span"),l=$(t),this.h()},l(i){e=k(i,"SPAN",{class:!0});var r=E(e);l=F(r,t),r.forEach(m),this.h()},h(){p(e,"class",n=fe(s[1])+" svelte-1k8dmpb")},m(i,r){w(i,e,r),g(e,l)},p(i,r){r&6&&t!==(t=z[i[1]][i[2]]+"")&&M(l,t),r&2&&n!==(n=fe(i[1])+" svelte-1k8dmpb")&&p(e,"class",n)},d(i){i&&m(e)}}}function Ct(s){let e,t,l=z[s[0]][s[2]]+"",n,i,r,a=s[1]&&Ne(s);return{c(){e=v("div"),t=v("span"),n=$(l),r=N(),a&&a.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var c=E(e);t=k(c,"SPAN",{class:!0});var f=E(t);n=F(f,l),f.forEach(m),r=P(c),a&&a.l(c),c.forEach(m),this.h()},h(){p(t,"class",i=fe(s[0])+" svelte-1k8dmpb"),p(e,"class","svelte-1k8dmpb")},m(o,c){w(o,e,c),g(e,t),g(t,n),g(e,r),a&&a.m(e,null)},p(o,[c]){c&5&&l!==(l=z[o[0]][o[2]]+"")&&M(n,l),c&1&&i!==(i=fe(o[0])+" svelte-1k8dmpb")&&p(t,"class",i),o[1]?a?a.p(o,c):(a=Ne(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:q,o:q,d(o){o&&m(e),a&&a.d()}}}const z={normal:{de:"Normal",en:"Normal"},fire:{de:"Feuer",en:"Fire"},water:{de:"Wasser",en:"Water"},electric:{de:"Elektro",en:"Electric"},grass:{de:"Pflanze",en:"Grass"},ice:{de:"Eis",en:"Ice"},fighting:{de:"Kampf",en:"Fighting"},poison:{de:"Gift",en:"Poison"},ground:{de:"Boden",en:"Ground"},flying:{de:"Flug",en:"Flying"},psychic:{de:"Psycho",en:"Psychic"},bug:{de:"K\xE4fer",en:"Bug"},rock:{de:"Gestein",en:"Rock"},ghost:{de:"Geist",en:"Ghost"},dragon:{de:"Drache",en:"Dragon"},dark:{de:"Unlicht",en:"Dark"},steel:{de:"Stahl",en:"Steel"},fairy:{de:"Fee",en:"Fairy"},salt:{de:"Salz",en:"Salt"}};function At(s,e,t){let l;le(s,te,r=>t(2,l=r));let{type1:n}=e,{type2:i=null}=e;return s.$$set=r=>{"type1"in r&&t(0,n=r.type1),"type2"in r&&t(1,i=r.type2)},[n,i,l]}class $t extends J{constructor(e){super();Q(this,e,At,Ct,Z,{type1:0,type2:1})}}function Ft(s){let e;return{c(){e=$(s[5])},l(t){e=F(t,s[5])},m(t,l){w(t,e,l)},p:q,d(t){t&&m(e)}}}function jt(s){let e,t;return{c(){e=v("span"),t=$(s[4]),this.h()},l(l){e=k(l,"SPAN",{class:!0});var n=E(e);t=F(n,s[4]),n.forEach(m),this.h()},h(){p(e,"class","small-text svelte-68ekx0")},m(l,n){w(l,e,n),g(e,t)},p:q,d(l){l&&m(e)}}}function Rt(s){let e,t,l,n,i=s[5]&&Ft(s),r=s[4]&&jt(s);return{c(){e=v("div"),i&&i.c(),t=N(),r&&r.c(),l=N(),n=v("div"),this.h()},l(a){e=k(a,"DIV",{class:!0});var o=E(e);i&&i.l(o),t=P(o),r&&r.l(o),l=P(o),n=k(o,"DIV",{class:!0}),E(n).forEach(m),o.forEach(m),this.h()},h(){p(n,"class","arrow svelte-68ekx0"),p(e,"class","tooltip svelte-68ekx0"),j(e,"animate",s[2]),ae(e,"width",s[6],!1),ae(e,"--background-color",s[7],!1),ae(e,"transform",s[3],!1)},m(a,o){w(a,e,o),i&&i.m(e,null),g(e,t),r&&r.m(e,null),g(e,l),g(e,n),s[11](n),s[12](e)},p(a,[o]){a[5]&&i.p(a,o),a[4]&&r.p(a,o),o&4&&j(e,"animate",a[2]),o&8&&ae(e,"transform",a[3],!1)},i:q,o:q,d(a){a&&m(e),i&&i.d(),r&&r.d(),s[11](null),s[12](null)}}}const ot="tooltipDiv",rt="arrowDiv",ce="15px";function Mt(s,e,t){let l,n,i=!1,r,a;be(()=>{setTimeout(()=>t(2,i=!0),0)});let{tooltipProps:o}=e,{placement:c=null}=e;const{subTitle:f,title:h,width:u="8rem",backgroundColor:_="var(--bg-color-highlighted)"}=o;function b(y){Se[y?"unshift":"push"](()=>{a=y,t(1,a)})}function d(y){Se[y?"unshift":"push"](()=>{r=y,t(0,r)})}return s.$$set=y=>{"tooltipProps"in y&&t(8,o=y.tooltipProps),"placement"in y&&t(9,c=y.placement)},s.$$.update=()=>{s.$$.dirty&1&&De(ot,r),s.$$.dirty&2&&De(rt,a),s.$$.dirty&512&&t(10,l=c==null?void 0:c.split("-")[0]),s.$$.dirty&1024&&t(3,n=l&&{left:`translateX(-${ce})`,right:`translateX(${ce})`,top:`translateY(-${ce})`,bottom:`translateY(${ce})`}[l])},[r,a,i,n,f,h,u,_,o,c,l,b,d]}class qt extends J{constructor(e){super();Q(this,e,Mt,Rt,Z,{tooltipProps:8,placement:9})}get tooltipProps(){return this.$$.ctx[8]}set tooltipProps(e){this.$$set({tooltipProps:e}),Te()}get placement(){return this.$$.ctx[9]}set placement(e){this.$$set({placement:e}),Te()}}function me(s,e){let t;function l(){t=new qt({props:{tooltipProps:e},target:s});const i=t.$$.context.get(ot),r=t.$$.context.get(rt);dt(s,i,{middleware:[gt(-5),vt({allowedPlacements:["bottom","top"]}),kt({padding:5}),bt({element:r})]}).then(({x:a,y:o,placement:c,middlewareData:f})=>{Object.assign(i.style,{left:`${a}px`,top:`${o}px`});const{x:h,y:u}=f.arrow,_={top:"bottom",right:"left",bottom:"top",left:"right"}[c.split("-")[0]];Object.assign(r.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:"",right:"",bottom:"",[_]:"-4px"}),t.$set({placement:c})})}function n(){t.$destroy()}return s.addEventListener("mouseover",l),s.addEventListener("mouseout",n),s.addEventListener("focus",l),s.addEventListener("blur",n),{destroy(){s.removeEventListener("mouseover",l),s.removeEventListener("mouseout",n),s.removeEventListener("focus",l),s.removeEventListener("blur",n)}}}function Pe(s,e,t){const l=s.slice();return l[12]=e[t],l}function Ve(s,e,t){const l=s.slice();return l[15]=e[t],l}function Ce(s){let e,t,l,n,i,r=s[3][s[15][0]]+"",a,o,c,f=s[15][1]+"",h;return{c(){e=v("div"),t=v("div"),n=N(),i=v("div"),a=$(r),o=N(),c=v("div"),h=$(f),this.h()},l(u){e=k(u,"DIV",{class:!0});var _=E(e);t=k(_,"DIV",{class:!0,style:!0}),E(t).forEach(m),n=P(_),i=k(_,"DIV",{class:!0});var b=E(i);a=F(b,r),b.forEach(m),o=P(_),c=k(_,"DIV",{class:!0});var d=E(c);h=F(d,f),d.forEach(m),_.forEach(m),this.h()},h(){p(t,"class","stat-bar svelte-naz13o"),p(t,"style",l=s[4](s[15][1])),p(i,"class","stat-label svelte-naz13o"),p(c,"class","stat-number svelte-naz13o"),p(e,"class","stat svelte-naz13o")},m(u,_){w(u,e,_),g(e,t),g(e,n),g(e,i),g(i,a),g(e,o),g(e,c),g(c,h)},p(u,_){_&1&&l!==(l=u[4](u[15][1]))&&p(t,"style",l),_&1&&r!==(r=u[3][u[15][0]]+"")&&M(a,r),_&1&&f!==(f=u[15][1]+"")&&M(h,f)},d(u){u&&m(e)}}}function Ae(s){let e,t=s[12][s[2]].name+"",l,n,i,r,a;return{c(){e=v("div"),l=$(t),n=N(),this.h()},l(o){e=k(o,"DIV",{class:!0});var c=E(e);l=F(c,t),n=P(c),c.forEach(m),this.h()},h(){p(e,"class","ability svelte-naz13o")},m(o,c){w(o,e,c),g(e,l),g(e,n),r||(a=[ne(e,"click",ye(s[5])),_e(i=me.call(null,e,{subTitle:s[12][s[2]].description||$e,width:"20rem"}))],r=!0)},p(o,c){s=o,c&6&&t!==(t=s[12][s[2]].name+"")&&M(l,t),i&&Ee(i.update)&&c&6&&i.update.call(null,{subTitle:s[12][s[2]].description||$e,width:"20rem"})},d(o){o&&m(e),r=!1,he(a)}}}function Bt(s){let e,t,l,n=Object.entries(s[0]),i=[];for(let o=0;o<n.length;o+=1)i[o]=Ce(Ve(s,n,o));let r=s[1],a=[];for(let o=0;o<r.length;o+=1)a[o]=Ae(Pe(s,r,o));return{c(){e=v("div");for(let o=0;o<i.length;o+=1)i[o].c();t=N(),l=v("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var c=E(e);for(let h=0;h<i.length;h+=1)i[h].l(c);t=P(c),l=k(c,"DIV",{class:!0});var f=E(l);for(let h=0;h<a.length;h+=1)a[h].l(f);f.forEach(m),c.forEach(m),this.h()},h(){p(l,"class","abilities svelte-naz13o"),p(e,"class","details")},m(o,c){w(o,e,c);for(let f=0;f<i.length;f+=1)i[f].m(e,null);g(e,t),g(e,l);for(let f=0;f<a.length;f+=1)a[f].m(l,null)},p(o,[c]){if(c&25){n=Object.entries(o[0]);let f;for(f=0;f<n.length;f+=1){const h=Ve(o,n,f);i[f]?i[f].p(h,c):(i[f]=Ce(h),i[f].c(),i[f].m(e,t))}for(;f<i.length;f+=1)i[f].d(1);i.length=n.length}if(c&6){r=o[1];let f;for(f=0;f<r.length;f+=1){const h=Pe(o,r,f);a[f]?a[f].p(h,c):(a[f]=Ae(h),a[f].c(),a[f].m(l,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=r.length}},i:q,o:q,d(o){o&&m(e),ie(i,o),ie(a,o)}}}const $e="PokeAPI g\xF6nnt nicht. Beschwert euch bei denen.",Ut=200;function at(s){return s/Ut*100}function zt(s){return Math.max(0,100-at(s))}function Gt(s,e,t){let l,n;le(s,te,d=>t(2,n=d));let{stats:i}=e,{abilities:r}=e;const a={hp:"HP",atk:"Atk",def:"Def",spatk:"SpA",spdef:"SpD",spd:"Spe"},o=[245,83,83],c=[20,195,142],f=[254,177,57],h=[48,170,221];function u(d){const y=at(d);return`right: ${zt(d)}%;
				background-color: ${_(y)};
				`}function _(d){const y=Object.keys(l),C=Math.min(y.length-2,y.reduce((oe,re)=>oe+(d>=parseInt(re)?1:0),-1)),A=parseInt(y[C]),K=parseInt(y[C+1])-A,V=100/K,T=(d-A)*V/100,L=Object.values(l)[C],I=Object.values(l)[C+1],D=L[0]*(1-T)+I[0]*T,x=L[1]*(1-T)+I[1]*T,ee=L[2]*(1-T)+I[2]*T;return`rgb(${D}, ${x}, ${ee})`}function b(d){nt.call(this,s,d)}return s.$$set=d=>{"stats"in d&&t(0,i=d.stats),"abilities"in d&&t(1,r=d.abilities)},l={0:o,20:o,30:f,60:c,100:h},[i,r,n,a,u,b]}class Wt extends J{constructor(e){super();Q(this,e,Gt,Bt,Z,{stats:0,abilities:1})}}function Fe(s){let e,t,l=s[0].team&&je(s),n=s[0].notes&&!Be&&Re(s);return{c(){e=v("div"),l&&l.c(),t=N(),n&&n.c(),this.h()},l(i){e=k(i,"DIV",{class:!0});var r=E(e);l&&l.l(r),t=P(r),n&&n.l(r),r.forEach(m),this.h()},h(){p(e,"class","notes-container svelte-fi5prn")},m(i,r){w(i,e,r),l&&l.m(e,null),g(e,t),n&&n.m(e,null)},p(i,r){i[0].team?l?l.p(i,r):(l=je(i),l.c(),l.m(e,t)):l&&(l.d(1),l=null),i[0].notes&&!Be?n?n.p(i,r):(n=Re(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&m(e),l&&l.d(),n&&n.d()}}}function je(s){let e,t,l,n,i,r,a,o,c,f,h,u,_,b;return{c(){e=v("div"),t=v("picture"),l=v("source"),i=N(),r=v("source"),o=N(),c=v("img"),this.h()},l(d){e=k(d,"DIV",{class:!0});var y=E(e);t=k(y,"PICTURE",{class:!0});var C=E(t);l=k(C,"SOURCE",{srcset:!0,type:!0}),i=P(C),r=k(C,"SOURCE",{srcset:!0,type:!0}),o=P(C),c=k(C,"IMG",{src:!0,alt:!0,decoding:!0,loading:!0,class:!0}),C.forEach(m),y.forEach(m),this.h()},h(){p(l,"srcset",n=s[5](s[0].team.logo.avif)),p(l,"type","image/avif"),p(r,"srcset",a=s[5](s[0].team.logo.webp)),p(r,"type","image/webp"),ue(c.src,f=s[5](s[0].team.logo.png))||p(c,"src",f),p(c,"alt",h="Logo von "+s[0].team.player),p(c,"decoding","async"),p(c,"loading","lazy"),p(c,"class","svelte-fi5prn"),p(t,"class","svelte-fi5prn"),p(e,"class","pokemon-team svelte-fi5prn")},m(d,y){w(d,e,y),g(e,t),g(t,l),g(t,i),g(t,r),g(t,o),g(t,c),_||(b=[_e(u=me.call(null,e,{title:s[0].team.name,subTitle:s[0].team.player})),ne(e,"click",ye(s[4]))],_=!0)},p(d,y){y&1&&n!==(n=d[5](d[0].team.logo.avif))&&p(l,"srcset",n),y&1&&a!==(a=d[5](d[0].team.logo.webp))&&p(r,"srcset",a),y&1&&!ue(c.src,f=d[5](d[0].team.logo.png))&&p(c,"src",f),y&1&&h!==(h="Logo von "+d[0].team.player)&&p(c,"alt",h),u&&Ee(u.update)&&y&1&&u.update.call(null,{title:d[0].team.name,subTitle:d[0].team.player})},d(d){d&&m(e),_=!1,he(b)}}}function Re(s){let e,t,l,n;return{c(){e=v("div"),this.h()},l(i){e=k(i,"DIV",{class:!0}),E(e).forEach(m),this.h()},h(){p(e,"class","pokemon-note svelte-fi5prn")},m(i,r){w(i,e,r),l||(n=[_e(t=me.call(null,e,{backgroundColor:"var(--warning",subTitle:s[2].localNotes})),ne(e,"click",ye(s[7]))],l=!0)},p(i,r){t&&Ee(t.update)&&r&4&&t.update.call(null,{backgroundColor:"var(--warning",subTitle:i[2].localNotes})},d(i){i&&m(e),l=!1,he(n)}}}function Me(s){let e,t,l;return t=new $t({props:{type1:s[0].typing[0],type2:s[0].typing[1]}}),{c(){e=v("div"),G(t.$$.fragment),this.h()},l(n){e=k(n,"DIV",{class:!0});var i=E(e);W(t.$$.fragment,i),i.forEach(m),this.h()},h(){p(e,"class","pokemon-typing"),j(e,"tiny",s[1])},m(n,i){w(n,e,i),H(t,e,null),l=!0},p(n,i){const r={};i&1&&(r.type1=n[0].typing[0]),i&1&&(r.type2=n[0].typing[1]),t.$set(r),i&2&&j(e,"tiny",n[1])},i(n){l||(S(t.$$.fragment,n),l=!0)},o(n){O(t.$$.fragment,n),l=!1},d(n){n&&m(e),Y(t)}}}function qe(s){let e,t,l;return t=new Wt({props:{stats:s[2].baseStats,abilities:s[2].abilities}}),{c(){e=v("div"),G(t.$$.fragment),this.h()},l(n){e=k(n,"DIV",{class:!0});var i=E(e);W(t.$$.fragment,i),i.forEach(m),this.h()},h(){p(e,"class","pokemon-stats")},m(n,i){w(n,e,i),H(t,e,null),l=!0},p(n,i){const r={};i&4&&(r.stats=n[2].baseStats),i&4&&(r.abilities=n[2].abilities),t.$set(r)},i(n){l||(S(t.$$.fragment,n),l=!0)},o(n){O(t.$$.fragment,n),l=!1},d(n){n&&m(e),Y(t)}}}function Ht(s){let e,t,l,n,i,r,a,o,c,f=s[2].localName+"",h,u,_,b=(s[2].localForm||"")+"",d,y,C,A,X,K,V=!s[1]&&Fe(s),T=!s[1]&&Me(s),L=s[1]&&qe(s);return{c(){e=v("div"),V&&V.c(),t=N(),l=v("div"),n=v("img"),a=N(),o=v("div"),c=v("div"),h=$(f),u=N(),_=v("div"),d=$(b),y=N(),T&&T.c(),C=N(),L&&L.c(),this.h()},l(I){e=k(I,"DIV",{class:!0});var D=E(e);V&&V.l(D),t=P(D),l=k(D,"DIV",{class:!0});var x=E(l);n=k(x,"IMG",{src:!0,alt:!0,crossorigin:!0,loading:!0,class:!0}),a=P(x),o=k(x,"DIV",{class:!0});var ee=E(o);c=k(ee,"DIV",{class:!0});var oe=E(c);h=F(oe,f),oe.forEach(m),u=P(ee),_=k(ee,"DIV",{class:!0});var re=E(_);d=F(re,b),re.forEach(m),ee.forEach(m),x.forEach(m),y=P(D),T&&T.l(D),C=P(D),L&&L.l(D),D.forEach(m),this.h()},h(){ue(n.src,i=s[0].imageUrl)||p(n,"src",i),p(n,"alt",r=s[2].localName),p(n,"crossorigin","anonymous"),p(n,"loading","lazy"),p(n,"class","svelte-fi5prn"),j(n,"tiny",s[1]),p(c,"class","name"),p(_,"class","form secondary svelte-fi5prn"),p(o,"class","pokemon-name svelte-fi5prn"),j(o,"tiny",s[1]),p(l,"class","pokemon-main svelte-fi5prn"),j(l,"tiny",s[1]),p(e,"class","pokemon svelte-fi5prn")},m(I,D){w(I,e,D),V&&V.m(e,null),g(e,t),g(e,l),g(l,n),g(l,a),g(l,o),g(o,c),g(c,h),g(o,u),g(o,_),g(_,d),g(e,y),T&&T.m(e,null),g(e,C),L&&L.m(e,null),A=!0,X||(K=ne(e,"click",s[3]),X=!0)},p(I,[D]){I[1]?V&&(V.d(1),V=null):V?V.p(I,D):(V=Fe(I),V.c(),V.m(e,t)),(!A||D&1&&!ue(n.src,i=I[0].imageUrl))&&p(n,"src",i),(!A||D&4&&r!==(r=I[2].localName))&&p(n,"alt",r),D&2&&j(n,"tiny",I[1]),(!A||D&4)&&f!==(f=I[2].localName+"")&&M(h,f),(!A||D&4)&&b!==(b=(I[2].localForm||"")+"")&&M(d,b),D&2&&j(o,"tiny",I[1]),D&2&&j(l,"tiny",I[1]),I[1]?T&&(B(),O(T,1,1,()=>{T=null}),U()):T?(T.p(I,D),D&2&&S(T,1)):(T=Me(I),T.c(),S(T,1),T.m(e,C)),I[1]?L?(L.p(I,D),D&2&&S(L,1)):(L=qe(I),L.c(),S(L,1),L.m(e,null)):L&&(B(),O(L,1,1,()=>{L=null}),U())},i(I){A||(S(T),S(L),A=!0)},o(I){O(T),O(L),A=!1},d(I){I&&m(e),V&&V.d(),T&&T.d(),L&&L.d(),X=!1,K()}}}let Be=!1;function Yt(s,e,t){let l,n,i;le(s,se,u=>t(8,n=u)),le(s,Nt,u=>t(6,i=u));let{pokemon:r}=e,a=!1;const o=()=>t(1,a=!a),c=()=>{window.history.pushState(null,"",new URL(window.location.href)),ve(se,n=l.team.name,n)},f=u=>Pt+"/logos/"+u;function h(u){nt.call(this,s,u)}return s.$$set=u=>{"pokemon"in u&&t(0,r=u.pokemon)},s.$$.update=()=>{s.$$.dirty&64&&t(1,a=i),s.$$.dirty&1&&t(2,l=new Vt(r))},[r,a,l,o,c,f,i,h]}class ct extends J{constructor(e){super();Q(this,e,Yt,Ht,Z,{pokemon:0})}}function Ue(s,e,t){const l=s.slice();return l[8]=e[t],l}function ze(s,e,t){const l=s.slice();return l[11]=e[t],l}function Ge(s,e,t){const l=s.slice();return l[8]=e[t],l}function We(s,e,t){const l=s.slice();return l[11]=e[t],l}function He(s){let e,t=s[4](s[0])+"",l,n,i,r,a,o;const c=[Kt,Xt],f=[];function h(u,_){return u[0].rank===1?0:1}return r=h(s),a=f[r]=c[r](s),{c(){e=v("p"),l=$(t),n=N(),i=v("div"),a.c(),this.h()},l(u){e=k(u,"P",{class:!0});var _=E(e);l=F(_,t),_.forEach(m),n=P(u),i=k(u,"DIV",{class:!0});var b=E(i);a.l(b),b.forEach(m),this.h()},h(){p(e,"class","tier-subtitle secondary svelte-1ojnhyq"),p(i,"class","svelte-1ojnhyq")},m(u,_){w(u,e,_),g(e,l),w(u,n,_),w(u,i,_),f[r].m(i,null),o=!0},p(u,_){(!o||_&1)&&t!==(t=u[4](u[0])+"")&&M(l,t);let b=r;r=h(u),r===b?f[r].p(u,_):(B(),O(f[b],1,1,()=>{f[b]=null}),U(),a=f[r],a?a.p(u,_):(a=f[r]=c[r](u),a.c()),S(a,1),a.m(i,null))},i(u){o||(S(a),o=!0)},o(u){O(a),o=!1},d(u){u&&m(e),u&&m(n),u&&m(i),f[r].d()}}}function Xt(s){let e=[],t=new Map,l,n,i,r=s[0].pokemon;const a=c=>c[11].id;for(let c=0;c<r.length;c+=1){let f=ze(s,r,c),h=a(f);t.set(h,e[c]=Ye(h,f))}let o=s[2]>0&&Xe(s);return{c(){for(let c=0;c<e.length;c+=1)e[c].c();l=N(),o&&o.c(),n=R()},l(c){for(let f=0;f<e.length;f+=1)e[f].l(c);l=P(c),o&&o.l(c),n=R()},m(c,f){for(let h=0;h<e.length;h+=1)e[h].m(c,f);w(c,l,f),o&&o.m(c,f),w(c,n,f),i=!0},p(c,f){f&1&&(r=c[0].pokemon,B(),e=st(e,f,a,1,c,r,t,l.parentNode,wt,Ye,l,ze),U()),c[2]>0?o?o.p(c,f):(o=Xe(c),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i(c){if(!i){for(let f=0;f<r.length;f+=1)S(e[f]);i=!0}},o(c){for(let f=0;f<e.length;f+=1)O(e[f]);i=!1},d(c){for(let f=0;f<e.length;f+=1)e[f].d(c);c&&m(l),o&&o.d(c),c&&m(n)}}}function Kt(s){let e=[],t=new Map,l,n,i,r=s[0].pokemon;const a=c=>c[11].id;for(let c=0;c<r.length;c+=1){let f=We(s,r,c),h=a(f);t.set(h,e[c]=Je(h,f))}let o=s[2]>0&&Qe(s);return{c(){for(let c=0;c<e.length;c+=1)e[c].c();l=N(),o&&o.c(),n=R()},l(c){for(let f=0;f<e.length;f+=1)e[f].l(c);l=P(c),o&&o.l(c),n=R()},m(c,f){for(let h=0;h<e.length;h+=1)e[h].m(c,f);w(c,l,f),o&&o.m(c,f),w(c,n,f),i=!0},p(c,f){if(f&1){r=c[0].pokemon,B();for(let h=0;h<e.length;h+=1)e[h].r();e=st(e,f,a,1,c,r,t,l.parentNode,It,Je,l,We);for(let h=0;h<e.length;h+=1)e[h].a();U()}c[2]>0?o?o.p(c,f):(o=Qe(c),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i(c){if(!i){for(let f=0;f<r.length;f+=1)S(e[f]);i=!0}},o(c){for(let f=0;f<e.length;f+=1)O(e[f]);i=!1},d(c){for(let f=0;f<e.length;f+=1)e[f].d(c);c&&m(l),o&&o.d(c),c&&m(n)}}}function Ye(s,e){let t,l,n;return l=new ct({props:{pokemon:e[11]}}),{key:s,first:null,c(){t=v("div"),G(l.$$.fragment),this.h()},l(i){t=k(i,"DIV",{class:!0});var r=E(t);W(l.$$.fragment,r),r.forEach(m),this.h()},h(){p(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(i,r){w(i,t,r),H(l,t,null),n=!0},p(i,r){e=i;const a={};r&1&&(a.pokemon=e[11]),l.$set(a)},i(i){n||(S(l.$$.fragment,i),n=!0)},o(i){O(l.$$.fragment,i),n=!1},d(i){i&&m(t),Y(l)}}}function Xe(s){let e,t=Array(s[2]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ke(Ue(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=R()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=R()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);w(n,e,i)},p(n,i){if(i&4){const r=t.length;t=Array(n[2]);let a;for(a=r;a<t.length;a+=1)Ue(n,t,a),l[a]||(l[a]=Ke(),l[a].c(),l[a].m(e.parentNode,e));for(a=t.length;a<r;a+=1)l[a].d(1);l.length=t.length}},d(n){ie(l,n),n&&m(e)}}}function Ke(s){let e;return{c(){e=v("div"),this.h()},l(t){e=k(t,"DIV",{class:!0}),E(e).forEach(m),this.h()},h(){p(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){w(t,e,l)},d(t){t&&m(e)}}}function Je(s,e){let t,l,n,i=q,r;return l=new ct({props:{pokemon:e[11]}}),{key:s,first:null,c(){t=v("div"),G(l.$$.fragment),this.h()},l(a){t=k(a,"DIV",{class:!0});var o=E(t);W(l.$$.fragment,o),o.forEach(m),this.h()},h(){p(t,"class","pokemon-animation-wrapper svelte-1ojnhyq"),this.first=t},m(a,o){w(a,t,o),H(l,t,null),r=!0},p(a,o){e=a;const c={};o&1&&(c.pokemon=e[11]),l.$set(c)},r(){n=t.getBoundingClientRect()},f(){yt(t),i()},a(){i(),i=Et(t,n,Dt,{duration:1e3,easing:Tt})},i(a){r||(S(l.$$.fragment,a),r=!0)},o(a){O(l.$$.fragment,a),r=!1},d(a){a&&m(t),Y(l)}}}function Qe(s){let e,t=Array(s[2]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ze(Ge(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=R()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=R()},m(n,i){for(let r=0;r<l.length;r+=1)l[r].m(n,i);w(n,e,i)},p(n,i){if(i&4){const r=t.length;t=Array(n[2]);let a;for(a=r;a<t.length;a+=1)Ge(n,t,a),l[a]||(l[a]=Ze(),l[a].c(),l[a].m(e.parentNode,e));for(a=t.length;a<r;a+=1)l[a].d(1);l.length=t.length}},d(n){ie(l,n),n&&m(e)}}}function Ze(s){let e;return{c(){e=v("div"),this.h()},l(t){e=k(t,"DIV",{class:!0}),E(e).forEach(m),this.h()},h(){p(e,"class","pokemon-animation-wrapper svelte-1ojnhyq")},m(t,l){w(t,e,l)},d(t){t&&m(e)}}}function Jt(s){let e,t,l=s[0].name+"",n,i,r,a,o,c,f,h=s[0].pokemon.length>0&&He(s);return{c(){e=v("div"),t=v("h2"),n=$(l),i=N(),r=v("span"),a=$(s[3]),c=N(),h&&h.c(),this.h()},l(u){e=k(u,"DIV",{class:!0});var _=E(e);t=k(_,"H2",{id:!0,class:!0});var b=E(t);n=F(b,l),i=P(b),r=k(b,"SPAN",{class:!0});var d=E(r);a=F(d,s[3]),d.forEach(m),b.forEach(m),c=P(_),h&&h.l(_),_.forEach(m),this.h()},h(){p(r,"class","emptyText svelte-1ojnhyq"),p(t,"id",o=s[0].name),p(t,"class","svelte-1ojnhyq"),j(t,"empty",s[1]),p(e,"class","tier svelte-1ojnhyq")},m(u,_){w(u,e,_),g(e,t),g(t,n),g(t,i),g(t,r),g(r,a),g(e,c),h&&h.m(e,null),f=!0},p(u,[_]){(!f||_&1)&&l!==(l=u[0].name+"")&&M(n,l),(!f||_&8)&&M(a,u[3]),(!f||_&1&&o!==(o=u[0].name))&&p(t,"id",o),_&2&&j(t,"empty",u[1]),u[0].pokemon.length>0?h?(h.p(u,_),_&1&&S(h,1)):(h=He(u),h.c(),S(h,1),h.m(e,null)):h&&(B(),O(h,1,1,()=>{h=null}),U())},i(u){f||(S(h),f=!0)},o(u){O(h),f=!1},d(u){u&&m(e),h&&h.d()}}}const Qt=150;function Zt(s,e,t){let l,n,i,r,{tier:a}=e;const o=Math.floor(Math.random()*a.subtitles.length),c=h=>h.subtitles[o]||"";let f;return be(()=>{t(5,f=window.innerWidth),window.addEventListener("resize",()=>{t(5,f=window.innerWidth)})}),s.$$set=h=>{"tier"in h&&t(0,a=h.tier)},s.$$.update=()=>{s.$$.dirty&1&&t(1,l=a.pokemon.length===0),s.$$.dirty&3&&t(3,n=l?a.emptyText:""),s.$$.dirty&32&&t(6,i=Math.floor(f/Qt)),s.$$.dirty&65&&t(2,r=Math.max(i-a.pokemon.length,0))},[a,l,r,n,c,f,i]}class ft extends J{constructor(e){super();Q(this,e,Zt,Jt,Z,{tier:0})}}const{window:ke}=St;function xe(s){let e,t,l,n,i,r,a;return t=new Lt({props:{icon:Ot}}),{c(){e=v("button"),G(t.$$.fragment),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var c=E(e);W(t.$$.fragment,c),c.forEach(m),this.h()},h(){p(e,"class","scroll-to-top-button svelte-21sr9b")},m(o,c){w(o,e,c),H(t,e,null),i=!0,r||(a=[ne(e,"click",s[2]),_e(l=me.call(null,e,{title:"Zur\xFCck nach oben"}))],r=!0)},p:q,i(o){i||(S(t.$$.fragment,o),it(()=>{n||(n=Le(e,Oe,{y:100,duration:300},!0)),n.run(1)}),i=!0)},o(o){O(t.$$.fragment,o),n||(n=Le(e,Oe,{y:100,duration:300},!1)),n.run(0),i=!1},d(o){o&&m(e),Y(t),o&&n&&n.end(),r=!1,he(a)}}}function xt(s){let e=!1,t=()=>{e=!1},l,n,i,r,a;it(s[3]);let o=s[1]>s[0]&&xe(s);return{c(){o&&o.c(),n=R()},l(c){o&&o.l(c),n=R()},m(c,f){o&&o.m(c,f),w(c,n,f),i=!0,r||(a=ne(ke,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),s[3]()}),r=!0)},p(c,[f]){f&2&&!e&&(e=!0,clearTimeout(l),scrollTo(ke.pageXOffset,c[1]),l=setTimeout(t,100)),c[1]>c[0]?o?(o.p(c,f),f&3&&S(o,1)):(o=xe(c),o.c(),S(o,1),o.m(n.parentNode,n)):o&&(B(),O(o,1,1,()=>{o=null}),U())},i(c){i||(S(o),i=!0)},o(c){O(o),i=!1},d(c){o&&o.d(c),c&&m(n),r=!1,a()}}}function el(s,e,t){let l,{threshold:n=500}=e;const i=()=>{window.scroll({top:0,behavior:"smooth"})};function r(){t(1,l=ke.pageYOffset)}return s.$$set=a=>{"threshold"in a&&t(0,n=a.threshold)},[n,l,i,r]}class tl extends J{constructor(e){super();Q(this,e,el,xt,Z,{threshold:0})}}function et(s,e,t){const l=s.slice();return l[10]=e[t],l}function ll(s){let e,t,l=s[2],n=[];for(let r=0;r<l.length;r+=1)n[r]=tt(et(s,l,r));const i=r=>O(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=R()},l(r){for(let a=0;a<n.length;a+=1)n[a].l(r);e=R()},m(r,a){for(let o=0;o<n.length;o+=1)n[o].m(r,a);w(r,e,a),t=!0},p(r,a){if(a&4){l=r[2];let o;for(o=0;o<l.length;o+=1){const c=et(r,l,o);n[o]?(n[o].p(c,a),S(n[o],1)):(n[o]=tt(c),n[o].c(),S(n[o],1),n[o].m(e.parentNode,e))}for(B(),o=l.length;o<n.length;o+=1)i(o);U()}},i(r){if(!t){for(let a=0;a<l.length;a+=1)S(n[a]);t=!0}},o(r){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)O(n[a]);t=!1},d(r){ie(n,r),r&&m(e)}}}function nl(s){let e,t;return e=new ft({props:{tier:{name:s[1].name,emptyText:"",rank:1,subtitles:[s[1].player],pokemon:s[0].flatMap(lt).filter(s[8])}}}),{c(){G(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){H(e,l,n),t=!0},p(l,n){const i={};n&3&&(i.tier={name:l[1].name,emptyText:"",rank:1,subtitles:[l[1].player],pokemon:l[0].flatMap(lt).filter(l[8])}),e.$set(i)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function tt(s){let e,t;return e=new ft({props:{tier:s[10]}}),{c(){G(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,n){H(e,l,n),t=!0},p(l,n){const i={};n&4&&(i.tier=l[10]),e.$set(i)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function sl(s){let e,t,l,n,i,r,a,o;const c=[nl,ll],f=[];function h(u,_){return u[1]?0:1}return n=h(s),i=f[n]=c[n](s),a=new tl({}),{c(){e=v("h1"),t=$("Tierlist f\xFCr TFL Season 3"),l=N(),i.c(),r=N(),G(a.$$.fragment),this.h()},l(u){e=k(u,"H1",{class:!0});var _=E(e);t=F(_,"Tierlist f\xFCr TFL Season 3"),_.forEach(m),l=P(u),i.l(u),r=P(u),W(a.$$.fragment,u),this.h()},h(){p(e,"class","svelte-1rptoyp")},m(u,_){w(u,e,_),g(e,t),w(u,l,_),f[n].m(u,_),w(u,r,_),H(a,u,_),o=!0},p(u,[_]){let b=n;n=h(u),n===b?f[n].p(u,_):(B(),O(f[b],1,1,()=>{f[b]=null}),U(),i=f[n],i?i.p(u,_):(i=f[n]=c[n](u),i.c()),S(i,1),i.m(r.parentNode,r))},i(u){o||(S(i),S(a.$$.fragment,u),o=!0)},o(u){O(i),O(a.$$.fragment,u),o=!1},d(u){u&&m(e),u&&m(l),f[n].d(u),u&&m(r),Y(a,u)}}}const lt=s=>s.pokemon;function il(s,e,t){let l,n,i,r;le(s,se,_=>t(6,i=_)),le(s,te,_=>t(7,r=_));let{tierlist:a}=e,{teams:o}=e,{initialFilter:c}=e,f;ve(se,i=c||"",i),be(()=>{window.addEventListener("popstate",()=>{ve(se,i=c||"",i)})});const h=(_,b)=>{var d,y,C,A,X,K,V,T,L,I;return[(d=_.form)==null?void 0:d.de,(y=_.form)==null?void 0:y.en,_.name.de,_.name.en,(C=z[_.typing[0]])==null?void 0:C.de,(A=z[_.typing[0]])==null?void 0:A.en,(K=z[(X=_.typing)==null?void 0:X[1]])==null?void 0:K.de,(T=z[(V=_.typing)==null?void 0:V[1]])==null?void 0:T.en,(L=_.team)==null?void 0:L.name,(I=_.team)==null?void 0:I.player].some(D=>D==null?void 0:D.toLowerCase().includes(b.toLowerCase()))},u=_=>f.pokemon.includes(_.id);return s.$$set=_=>{"tierlist"in _&&t(0,a=_.tierlist),"teams"in _&&t(3,o=_.teams),"initialFilter"in _&&t(4,c=_.initialFilter)},s.$$.update=()=>{s.$$.dirty&72&&t(1,f=o.map(_=>_.name).includes(i)?o.find(_=>_.name===i):void 0),s.$$.dirty&129&&t(5,l=a.map(_=>de(pe({},_),{pokemon:_.pokemon.sort((b,d)=>b.name[r].localeCompare(d.name[r]))}))),s.$$.dirty&96&&t(2,n=l.map(_=>de(pe({},_),{pokemon:_.pokemon.filter(b=>h(b,i))})))},[a,f,n,o,c,l,i,r,u]}class fl extends J{constructor(e){super();Q(this,e,il,sl,Z,{tierlist:0,teams:3,initialFilter:4})}}export{fl as default};
