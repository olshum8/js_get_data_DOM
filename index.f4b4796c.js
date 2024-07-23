var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0;t.forEach(function(t){n+=parseInt(t.textContent.replace(/,/g,""),10)});var r=n/t.length;e.textContent=n.toLocaleString("en-US"),o.textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.f4b4796c.js.map
