import{S as y,i as z,s as A,l as E,r as v,a as S,e as H,m as b,n as d,u as P,h as o,c as q,b as u,P as R,v as N,E as h}from"./chunks/index-8c7a71bd.js";function j(r){let l,t=r[1].frame+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=b(f,"PRE",{});var s=d(l);a=P(s,t),s.forEach(o)},m(f,s){u(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&N(a,t)},d(f){f&&o(l)}}}function w(r){let l,t=r[1].stack+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=b(f,"PRE",{});var s=d(l);a=P(s,t),s.forEach(o)},m(f,s){u(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&N(a,t)},d(f){f&&o(l)}}}function B(r){let l,t,a,f,s=r[1].message+"",c,k,n,p,i=r[1].frame&&j(r),_=r[1].stack&&w(r);return{c(){l=E("h1"),t=v(r[0]),a=S(),f=E("pre"),c=v(s),k=S(),i&&i.c(),n=S(),_&&_.c(),p=H()},l(e){l=b(e,"H1",{});var m=d(l);t=P(m,r[0]),m.forEach(o),a=q(e),f=b(e,"PRE",{});var C=d(f);c=P(C,s),C.forEach(o),k=q(e),i&&i.l(e),n=q(e),_&&_.l(e),p=H()},m(e,m){u(e,l,m),R(l,t),u(e,a,m),u(e,f,m),R(f,c),u(e,k,m),i&&i.m(e,m),u(e,n,m),_&&_.m(e,m),u(e,p,m)},p(e,[m]){m&1&&N(t,e[0]),m&2&&s!==(s=e[1].message+"")&&N(c,s),e[1].frame?i?i.p(e,m):(i=j(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,m):(_=w(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:h,o:h,d(e){e&&o(l),e&&o(a),e&&o(f),e&&o(k),i&&i.d(e),e&&o(n),_&&_.d(e),e&&o(p)}}}function G({error:r,status:l}){return{props:{error:r,status:l}}}function D(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class I extends y{constructor(l){super(),z(this,l,D,B,A,{status:0,error:1})}}export{I as default,G as load};
