document.addEventListener("DOMContentLoaded", () => {
  // Force top of page on reload
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  // Image slideshow
  document.querySelectorAll(".slider").forEach((slider) => {
    const slidesContainer = slider.querySelector(".slides");
    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".slideNext");
    const prevBtn = slider.querySelector(".slidePrev");

    let currentIndex = 0;

    function updateSlidePosition() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });

    updateSlidePosition();
  });

  // Hero Animation
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  function showSlide(next) {
    if (next === current) return;

    slides.forEach((slide, index) => {
      slide.classList.remove("active", "previous");
      slide.style.zIndex = "0";
    });

    slides[current].classList.add("previous");
    slides[current].style.zIndex = "1";

    slides[next].classList.add("active");
    slides[next].style.zIndex = "2";

    current = next;
  }

  slides.forEach((slide, index) => {
    slide.classList.remove("active", "previous");
    if (index === 0) {
      slide.classList.add("active");
      slide.style.zIndex = "2";
    } else {
      slide.style.zIndex = "0";
    }
  });

  setInterval(() => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }, 4000);
});
