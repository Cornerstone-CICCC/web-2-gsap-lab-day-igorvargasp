gsap.registerPlugin(ScrollTrigger);

const section1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
});

section1Timeline.from(".section1 h1 span:first-child", {
  x: -200,
  opacity: 0,
  duration: 1
}, 0);


section1Timeline.from(".section1 h1 span:last-child", {
  x: 200,
  opacity: 0,
  duration: 1
}, 0);


section1Timeline.from(".section1 p", {
  y: 100,
  rotation: 90,
  opacity: 0,
  transformOrigin: "left bottom",
  duration: 1
}, 0.5);


section1Timeline.from(".section1 img", {
  y: 200,
  opacity: 0,
  duration: 1
}, 0.5);

const section2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
});

section2Timeline.from(".section2 h2 span", {
  y: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1
}, 0);

section2Timeline.from(".section2 p", {
  scale: 0,
  opacity: 0,
  duration: 1
}, 0.5);

const horizontalScroll = gsap.to(".horizontal-sections", {
  x: () => -(document.querySelector(".horizontal-sections").scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: () => `+=${document.querySelector(".horizontal-sections").scrollWidth - window.innerWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

const section3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "left center",
    end: "right center",
    containerAnimation: horizontalScroll,
    scrub: 1,
    pin: false 
  }
});


gsap.set(".section3 p", { opacity: 1, y: 0 });

section3Timeline.from(".section3 h2", {
  x: -200,
  scale: 2,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
}, 0);

section3Timeline.from(".section3 p span", {
  y: 80,
  opacity: 0,
  backgroundColor: "white",
  color: "black",
  padding: "6px 10px",
  borderRadius: "6px",
  stagger: 0.25,
  duration: 1,
  ease: "power3.out"
}, 0.3);


gsap.from(".section4 .portfolio-item", {
  x: 200,
  opacity: 0,
  stagger: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4",
    start: "left center",
    end: "right center",
    containerAnimation: horizontalScroll,
    scrub: 1
  }
});

const contactHeading = document.querySelector(".section5 h2");
const letters = contactHeading.textContent.split("");

contactHeading.innerHTML = letters
  .map(l => (l === " " ? "<span>&nbsp;</span>" : `<span>${l}</span>`))
  .join("");


const section5Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
});

section5Timeline.from(".section5", {
  backgroundPositionX: "150%", 
  duration: 1.5,
  ease: "power2.out"
}, 0);

section5Timeline.from(".section5 h2 span", {
  y: -150,
  rotation: -45,
  opacity: 0,
  stagger: 0.1,
  ease: "back.out(1.7)",
  duration: 1
}, 0.05);

section5Timeline.from(".section5 p", {
  y: 100,
  opacity: 0,
  duration: 1
}, 0.5);

section5Timeline.from(".section5 .contact-btn", {
  scale: 0,
  opacity: 0,
  ease: "back.out(1.7)",
  duration: 1
}, 0.7);


