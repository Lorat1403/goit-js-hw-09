const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body;let a;t.addEventListener("click",(()=>{a=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.0a9ea214.js.map
