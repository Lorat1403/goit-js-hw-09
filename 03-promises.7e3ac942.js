!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");function c(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n&&t({position:e,delay:o}),i({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(r.delay.value),n=Number(r.step.value),t=Number(r.amount.value),a=1;a<=t;a++){c(a,o+a*n-n).then((function(e){var o=e.position,n=e.delay;i.Notify.success("Fulfilled promise ".concat(o," in ").concat(n,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),i.Notify.failure("Rejected promise ".concat(o," in ").concat(n,"ms"))}))}r.reset()}))}();
//# sourceMappingURL=03-promises.7e3ac942.js.map
