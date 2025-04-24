jQuery(document).ready(function ($) {});
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      const sections = gsap.utils.toArray(".ja-content-container > section");
      const menuLinks = gsap.utils.toArray(".ja-sidebar-menu-list > li > a");

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          markers: false,
          onEnter: () => scaleLink(i),
          onEnterBack: () => scaleLink(i),
        });
      });

      function scaleLink(activeSection) {
        menuLinks.forEach((link, i) => {
          if (i === activeSection) {
            gsap.to(link, {
              scale: 1.3,
              opacity: 1, // Optional: highlight color
              duration: 0.3,
              ease: "power3.out",
            });
          } else {
            gsap.to(link, {
              scale: 1,
              opacity: 0.7,
              duration: 0.3,
              ease: "power3.out",
            });
          }
        });
      }
    },
  });
});
