function e(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}const t=document.querySelector(".form"),o=document.querySelector('button[type="submit"]');t.addEventListener("submit",(function(n){n.preventDefault();let i=0,l=0;for(let n=0;n<t.amount.value;n+=1)o.disabled=!0,i+=1,l=Number(t.delay.value)+t.step.value*n,e(i,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.d0267f79.js.map