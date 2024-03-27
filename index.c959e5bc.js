document.querySelector(".time_button_calculator").addEventListener("click",(function(){let t=parseInt(document.getElementById("start-timer").value),e=Math.floor(t/86400),o=Math.floor(t%86400/3600),c=Math.floor(t%3600/60),l=t%60;document.querySelector(".time_calc_time").textContent=` ${e}дн   ${o}:${c}:${l}`}));
//# sourceMappingURL=index.c959e5bc.js.map
