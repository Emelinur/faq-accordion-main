const button=document.querySelectorAll("#button");
const allParagraphs=document.querySelectorAll("p");
 allParagraphs.forEach((e)=>{
   e.style.display="none"
  })
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("aria-controls");
    const targetParagraph = document.getElementById(targetId);
    const currentIcon = btn.querySelector(".faq-icon");
    
    if (targetParagraph.style.display === "block") {
      targetParagraph.style.display = "none";
      currentIcon.classList.replace("minus", "plus");
      return;
    }

    button.forEach((otherBtn) => {
      const otherId = otherBtn.getAttribute("aria-controls");
      document.getElementById(otherId).style.display = "none";
      
      const otherIcon = otherBtn.querySelector(".faq-icon");
      otherIcon.classList.add("plus");
      otherIcon.classList.remove("minus");
    });

    targetParagraph.style.display = "block";
    currentIcon.classList.replace("plus", "minus");
  });
});