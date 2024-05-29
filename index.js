let burger=document.querySelector(".open-menu")
let sidenabar=document.querySelector(".side-nav-bar")
let close_button=document.querySelector(".x-icon i")

burger.addEventListener("click",()=>{
    sidenabar.style.left="0%"
   
})
close_button.addEventListener("click",()=>{
    sidenabar.style.left="-150px"
   
})
