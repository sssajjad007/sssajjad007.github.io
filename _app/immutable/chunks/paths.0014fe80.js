import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function d(o,l=b){let n;const i=new Set;function c(t){if(h(o,t)&&(o=t,n)){const r=!e.length;for(const s of i)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){c(t(o))}function _(t,r=b){const s=[t,r];return i.add(s),i.size===1&&(n=l(c,f)||b),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:c,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_19cucfo)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_19cucfo)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
