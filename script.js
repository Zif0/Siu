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

    // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.querySelector(".mobileOverlay");

  function toggleMobileMenu() {
    navMenu.classList.toggle("showMenu");
    overlay.classList.toggle("showOverlay");
    hamburger.classList.toggle("active");
  }

  hamburger.addEventListener("click", toggleMobileMenu);
  overlay.addEventListener("click", toggleMobileMenu);

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("showMenu");
      overlay.classList.remove("showOverlay");
      hamburger.classList.remove("active");
    });
  });
});