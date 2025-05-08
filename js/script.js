jQuery(document).ready(function ($) {
  function loadInstagramSVG() {
    fetch("assets/svg/github.svg")
      .then((response) => {
        return response.text();
      })
      .then((svg) => {
        document.getElementById("ja-github-icon").innerHTML = svg;
      });
  }
  loadInstagramSVG();

  function loadLinkedInSVG() {
    fetch("assets/svg/linkedin.svg")
      .then((response) => {
        return response.text();
      })
      .then((svg) => {
        document.getElementById("ja-linkedin-icon").innerHTML = svg;
      });
  }
  loadLinkedInSVG();

  function loadbuttonInSVG() {
    fetch("assets/svg/button.svg")
      .then((response) => {
        return response.text();
      })
      .then((svg) => {
        $(".ja-card-link").each(function () {
          $(this).html(svg);
        });
      });
  }
  loadbuttonInSVG();
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

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

      let ja_h1 = SplitText.create(".ja-sidebar-header > h1", {
        type: "chars",
      });
      if (ja_h1.length != 0) {
        gsap.from(ja_h1.chars, {
          y: 20,
          autoAlpha: 0,
          stagger: 0.03,
        });
      }

      let ja_h2 = SplitText.create(".ja-sidebar-header > h2", {
        type: "chars",
      });
      if (ja_h2.length != 0) {
        gsap.from(ja_h2.chars, {
          y: 20,
          delay: 0.1,
          autoAlpha: 0,
          stagger: 0.03,
        });
      }

      let ja_p = SplitText.create(".ja-sidebar-header > p", {
        type: "chars",
      });
      if (ja_p.length != 0) {
        gsap.from(ja_p.chars, {
          y: 20,
          delay: 0.1,
          autoAlpha: 0,
          stagger: 0.03,
        });
      }

      const ja_social_links = $(".ja-sidebar-social-links > ul");
      if (ja_social_links != 0) {
        gsap.from(ja_social_links, {
          opacity: 0,
          y: "100%",
          duration: 1,
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
          duration: 2,
          delay: 0.1,
          ease: "power3.out",
        });
      }

      const cards_wrappers = gsap.utils.toArray(
        ".ja-experience .ja-card-wrapper"
      );
      const cards = gsap.utils.toArray(".ja-experience .ja-card-wrapper > div");

      cards_wrappers.forEach((wrapper, i) => {
        const card = cards[i];
        let scale = 1,
          rotation = 0;
        if (i !== cards.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotation = -10;
        }
        gsap.to(card, {
          scale: scale,
          rotationX: rotation,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top " + (200 + 40 * i),
            end: "bottom 550",
            endTrigger: ".ja-card-container",
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            id: i + 1,

            onEnter: () => wrapper.classList.add("active-bg"),
            onLeaveBack: () => wrapper.classList.remove("active-bg"),
          },
        });
      });
    },
  });
});
