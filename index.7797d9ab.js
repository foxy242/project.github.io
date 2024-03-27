const a=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],n=document.querySelector(".info__scientists");a.forEach((a=>n.innerHTML+=`\n    <li class="info__scientist" data-id="${a.id}">\n        <p class="info__name">${a.name} ${a.surname}</p>\n        <p class="info__lifeYears">${a.born}-${a.dead} years</p>\n    </li>\n`));const e=document.querySelector(".info__prompts");["отримати масив вчених що народилися в 19 ст","Відсортувати вчених по алфавіту","Відсортувати вчених по кількості прожитих років","Знайти вченого який народився найпізніше.","Знайти рік народження Albert Einstein","знайти вчених прізвище яких починається на літеру С","Видалити з масива всіх вчених імя яких починається на A","Знайти вченого який прожив найбільше і вченого який прожив найменьше","Знайти вчених в яких співпадають перші літери імені і прізвища"].forEach(((a,n)=>e.innerHTML+=`\n    <li class="info__prompt">\n        <button class="info__but" data-promptNum="${n}">${a}</button>\n    </li>\n`));const r=e=>{n.innerHTML="",Array.isArray(e)?e.forEach((e=>n.innerHTML+=`\n            <li class="info__scientist" data-id="${e}">\n                <p class="info__name">${a.find((a=>a.id===e)).name} ${a.find((a=>a.id===e)).surname}</p>\n                <p class="info__lifeYears">${a.find((a=>a.id===e)).born}-${a.find((a=>a.id===e)).dead} years</p>\n            </li>\n        `)):n.innerHTML+=`\n            <li class="info__scientist" data-id="${e}">\n                <p class="info__name">${e.name} ${e.surname}</p>\n                <p class="info__lifeYears">${e.born}-${e.dead} years</p>\n            </li>\n        `};e.addEventListener("click",(n=>{switch(n.target.getAttribute("data-promptNum")){case"0":r(a.filter((a=>a.born>1800&&a.born<=1900)).map((a=>a.id)));break;case"1":r(a.sort(((a,n)=>a.name.localeCompare(n.name))).map((a=>a.id)));break;case"2":r(a.sort(((a,n)=>n.dead-n.born-(a.dead-a.born))).map((a=>a.id)));break;case"3":r(a.sort(((a,n)=>n.born-a.born))[0]);break;case"4":r(a.find((a=>"Albert"===a.name&&"Einstein"===a.surname)));break;case"5":r(a.filter((a=>a.surname.startsWith("C"))).map((a=>a.id)));break;case"6":r(a.filter((a=>!a.name.startsWith("A"))).map((a=>a.id)));break;case"7":r([Math.max(...a.map((a=>a.dead-a.born))),Math.min(...a.map((a=>a.dead-a.born)))].map((n=>a.find((a=>a.dead-a.born===n)).id)));break;case"8":r(a.filter((a=>a.name[0]===a.surname[0])).map((a=>a.id)))}}));
//# sourceMappingURL=index.7797d9ab.js.map