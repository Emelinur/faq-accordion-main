const button=document.querySelectorAll("#button");

button.forEach((btn)=>{
  btn.addEventListener("click",()=>{
const currentIcon = btn.querySelector(".plus") || btn.querySelector(".minus");
    currentIcon.classList.toggle("plus");
    currentIcon.classList.toggle("minus");
  })
})