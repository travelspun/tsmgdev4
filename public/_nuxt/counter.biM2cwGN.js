import{j as m,f,k as b,r as x,o as _,c as h,a as o,d as n,t as C,u as l,b as a,w as r,p as v,e as g,g as w}from"./entry.mkRIDPev.js";import{_ as d}from"./_plugin-vue_export-helper.x3n3nnut.js";const k=m("counter",{state:()=>({counter:0})}),y=t=>(v("data-v-3e648771"),t=t(),g(),t),S={class:"counter-example-box w-75"},B=y(()=>o("div",{class:"counter-example-box__header border-b-4 border-blue-600 mb-4 text-center"},[o("h4",{class:"text-h4 font-weight-bold py-4"}," Increment, Decrement and Reset Button Example ")],-1)),I={class:"d-flex flex-row justify-space-evenly align-center py-5"},E={class:"text-h5 mr-5 font-weight-bold"},N=f({__name:"CounterExample",setup(t){const e=k(),c=b(()=>e.counter),i=()=>e.counter++,p=()=>e.counter--,u=e.$reset.bind(e);return($,R)=>{const s=x("v-btn");return _(),h("div",S,[B,o("div",I,[o("p",E,[n(" Count: "),o("span",null,C(l(c)),1)]),a(s,{class:"ma-2 bg-primary font-weight-bold",variant:"tonal",onClick:i},{default:r(()=>[n(" increment ")]),_:1}),a(s,{class:"ma-2 bg-primary font-weight-bold",variant:"tonal",onClick:p},{default:r(()=>[n(" decrement ")]),_:1}),a(s,{class:"ma-2 bg-primary font-weight-bold",variant:"tonal",onClick:l(u)},{default:r(()=>[n(" reset ")]),_:1},8,["onClick"])])])}}}),V=d(N,[["__scopeId","data-v-3e648771"]]),j={};function D(t,e){const c=V;return _(),w(c)}const z=d(j,[["render",D]]);export{z as default};
