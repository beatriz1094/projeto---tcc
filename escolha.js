document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");


  sliders.forEach(slider => {
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");
    const slides = slider.querySelectorAll(".slide");

    let activeIndex = 0;

    function changeSlide(newIndex) {
      slides[activeIndex].classList.remove("active");
      activeIndex = (newIndex + slides.length) % slides.length;
      slides[activeIndex].classList.add("active");
    }
    prevButton.addEventListener("click", function () {
      changeSlide(activeIndex - 1);
    });

    nextButton.addEventListener("click", function () {
      changeSlide(activeIndex + 1);

      
    });
  });
  
  
});