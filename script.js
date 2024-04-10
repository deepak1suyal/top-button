const t=document.querySelector(".top");
window.addEventListener("scroll",()=>{
    var y= window.scrollY;
    console.log(y);
    if(y>409)
    t.classList.add("active");
else   t.classList.remove("active");
})