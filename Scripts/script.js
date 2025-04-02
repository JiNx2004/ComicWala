const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.1,
});

gsap.registerPlugin(ScrollTrigger);

// Ensure ScrollTrigger updates with Locomotive Scroll
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// Wait for Locomotive Scroll to finish before refreshing ScrollTrigger
gsap.delayedCall(1, () => {
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();
});

// Enhanced animations for page1
gsap.from("#page1", {
  opacity: 0,
  y: 100,
  scale: 0.9,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from("#page1 #elems div", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
});

gsap.from("#nav", {
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power2.out",
  delay: 0.5,
});

// Cool animations for pages 2 to 5
gsap.utils
  .toArray(["#page2", "#page3", "#page4", "#page5", "#page7","#page8"])
  .forEach((page, index) => {
    gsap.from(page, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: page,
        scroller: "#main",
        start: "top 75%",
        end: "bottom 50%",
        toggleActions: "play none none reset",
      },
    });
  });

// Parallax effect on images
gsap.utils
  .toArray(
    "#page1 img, #page2 img, #page3 img, #page4 img, #page7 img,#page8 img"
  )
  .forEach((img) => {
    gsap.from(img, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        scroller: "#main",
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none reset",
      },
    });
  });

// Button hover effect
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
});


const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
});






function redirectToStreamlit1() {
  window.open("https://a0c54a390330ed1ea1.gradio.live", "_blank");
}

function redirectToStreamlit2() {
  window.open("https://81051429544bca01ee.gradio.live", "_blank"); //enter the gradio link generated using colab
}

