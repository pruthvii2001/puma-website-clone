function scrollCarousel(direction) {
  const container = document.getElementById("carousel");
  const scrollAmount = 300;

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Select all slide elements
// const slides = document.querySelectorAll('.slide');

// // Detect mobile viewport
// const isMobile = window.innerWidth <= 768;

// // Set base rotation for each card initially
// slides.forEach((slide, i) => {
//   let baseAngle = isMobile ? i * 10 : (i * 10) - 10;
//   gsap.set(slide, {
//     rotation: baseAngle,
//     transformOrigin: "0% 2300px",
//   });
// });

// // Define scroll rotation speed
// const speed = 30;

// Create ScrollTrigger animation
// ScrollTrigger.create({
//   trigger: '.scroller',
//   start: "top top",
//   end: "bottom bottom",
//   scrub: true, 
//   onUpdate: self => {
//     slides.forEach((slide, i) => {
//       let baseAngle = isMobile ? i * 10 : (i * 10) - 10;
//       let rotation = baseAngle - self.progress * speed;
//       gsap.to(slide, {
//         rotation: rotation,
//         overwrite: "auto",
//         transformOrigin: "0% 2300px",
//         ease: "none"
//       });
//     });
//   }
// });









