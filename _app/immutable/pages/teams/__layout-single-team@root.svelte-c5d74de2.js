import{S as b,i as v,s as w,N,w as c,a as h,l as k,x as _,c as A,m as I,n as E,h as i,y as p,b as u,O as L,P as S,Q as T,f as m,t as $,B as g,r as q,u as y,E as B}from"../../chunks/index-cd411dc4.js";import{N as C,L as M}from"../../chunks/navbar-cbcaf8e7.js";import{d as O}from"../../chunks/baseline-arrow-back-51f093c8.js";import{I as P}from"../../chunks/sprites-f9e5c6f3.js";import"../../chunks/tooltip-0e141dfe.js";import"../../chunks/index-7be4c444.js";function Q(f){let e,n,a;return e=new P({props:{inline:!0,icon:O}}),{c(){c(e.$$.fragment),n=q(`
		Alle Teams`)},l(t){_(e.$$.fragment,t),n=y(t,`
		Alle Teams`)},m(t,o){p(e,t,o),u(t,n,o),a=!0},p:B,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){g(e,t),t&&i(n)}}}function j(f){let e,n;return e=new M({props:{href:"/teams",$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){c(e.$$.fragment)},l(a){_(e.$$.fragment,a)},m(a,t){p(e,a,t),n=!0},p(a,t){const o={};t&2&&(o.$$scope={dirty:t,ctx:a}),e.$set(o)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){$(e.$$.fragment,a),n=!1},d(a){g(e,a)}}}function z(f){let e,n,a,t;e=new C({props:{$$slots:{default:[j]},$$scope:{ctx:f}}});const o=f[0].default,r=N(o,f,f[1],null);return{c(){c(e.$$.fragment),n=h(),a=k("main"),r&&r.c()},l(s){_(e.$$.fragment,s),n=A(s),a=I(s,"MAIN",{});var l=E(a);r&&r.l(l),l.forEach(i)},m(s,l){p(e,s,l),u(s,n,l),u(s,a,l),r&&r.m(a,null),t=!0},p(s,[l]){const d={};l&2&&(d.$$scope={dirty:l,ctx:s}),e.$set(d),r&&r.p&&(!t||l&2)&&L(r,o,s,s[1],t?T(o,s[1],l,null):S(s[1]),null)},i(s){t||(m(e.$$.fragment,s),m(r,s),t=!0)},o(s){$(e.$$.fragment,s),$(r,s),t=!1},d(s){g(e,s),s&&i(n),s&&i(a),r&&r.d(s)}}}function D(f,e,n){let{$$slots:a={},$$scope:t}=e;return f.$$set=o=>{"$$scope"in o&&n(1,t=o.$$scope)},[a,t]}class U extends b{constructor(e){super(),v(this,e,D,z,w,{})}}export{U as default};