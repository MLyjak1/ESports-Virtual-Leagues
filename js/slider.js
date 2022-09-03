document.addEventListener("DOMContentLoaded", () => {
   
   const slideInfo = document.querySelectorAll(".slide-info");
   const slidesContainer = document.querySelector(".slides-container");
   const infiteInfo = document.querySelectorAll(".invite-info")
   const nextBtn = document.querySelector(".next-btn");
   const prevBtn = document.querySelector(".prev-btn");


   let numberOfImages = slideInfo.length;
   let slideWidth = slideInfo[0].clientWidth;

   // slidesContainer.style.height = `${infiteInfo[0].clientHeight}px`
   let currentSlide = 0;

   // Set up the slider

   function init() {

      slideInfo.forEach((img, i) => {
         img.style.left = i * 100 + "%";
      });

      slideInfo[0].classList.add("active");

   }

   init();

   // Next Button

   nextBtn.addEventListener("click", () => {
      if (currentSlide >= numberOfImages - 1) {
         goToSlide(0);
         return;
      }
      currentSlide++;
      goToSlide(currentSlide);
   });

   // Previous Button

   prevBtn.addEventListener("click", () => {

      if (currentSlide <= 0) {
         goToSlide(numberOfImages - 1);
         return;
      }
      currentSlide--;
      goToSlide(currentSlide);
   });

   // Go To Slide
   function goToSlide(slideNumber) {
      // slidesContainer.style.height = `${infiteInfo[slideNumber].clientHeight}px`
      slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
      currentSlide = slideNumber;
      setActiveClass();
   }

   // Set Active Class

   function setActiveClass() {

      let currentActive = document.querySelector(".slide-info.active");
      currentActive.classList.remove("active");
      slideInfo[currentSlide].classList.add("active");
   }
})