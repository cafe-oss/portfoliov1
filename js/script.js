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
              opacity: 0.5,
              duration: 0.3,
              ease: "power3.out",
            });
          }
        });
      }

      const ja_h1 = $(".ja-sidebar-header > h1");
      if (ja_h1.length != 0) {
        gsap.from(ja_h1, {
          opacity: 0,
          x: "-100%",
          duration: 1,
          ease: "power2.out",
        });
      }

      const ja_h2 = $(".ja-sidebar-header > h2");
      if (ja_h2.length != 0) {
        gsap.from(ja_h2, {
          opacity: 0,
          x: "-100%",
          duration: 1,
          delay: 0.1,
          ease: "power2.out",
        });
      }

      const ja_p = $(".ja-sidebar-header > p");
      if (ja_p.length != 0) {
        gsap.from(ja_p, {
          opacity: 0,
          x: "-100%",
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        });
      }

      const ja_img = $(".ja-about img");
      if (ja_img.length != 0) {
        gsap.from(ja_img, {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.to(ja_img, {
          opacity: 1,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
        });
      }
    },
  });
});
