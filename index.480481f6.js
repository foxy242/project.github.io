const t=document.getElementById("one_input"),e=document.getElementById("two_input"),n=document.getElementById("three_input"),a=document.getElementById("time_result");function i(){const i=parseFloat(t.value),o=parseFloat(e.value),u=parseFloat(n.value);if(isNaN(i)&&isNaN(o)&&isNaN(u))a.textContent="не вказано";else{const t=Math.max(i,o,u);a.textContent=`Найбільше число яке ви ввели - ${t} `}}t.addEventListener("input",i),e.addEventListener("input",i),n.addEventListener("input",i);
//# sourceMappingURL=index.480481f6.js.map