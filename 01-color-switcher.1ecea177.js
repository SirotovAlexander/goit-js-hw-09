const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");t.addEventListener("click",(function(r){r.target===e?(e.disabled=!0,o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)):r.target===a&&(e.disabled=!1,clearInterval(o))}));let o=null;
//# sourceMappingURL=01-color-switcher.1ecea177.js.map