gsap.from("#header", {
  opacity: 0,
  y: -100,
  duration: 1,
  clearProps: "transform",
});

gsap.from(".frame-corner-top-left", {
  opacity: 0,
  y: -50,
  x: -50,
  duration: 1.25,
});
gsap.from(".frame-corner-top-right", {
  opacity: 0,
  y: -50,
  x: 50,
  duration: 1.25,
});
gsap.from(".frame-corner-bottom-left", {
  opacity: 0,
  y: 50,
  x: -50,
  duration: 1.25,
});
gsap.from(".frame-corner-bottom-right", {
  opacity: 0,
  y: 50,
  x: 50,
  duration: 1.25,
});
gsap.from(".frame-side-left", {
  opacity: 0,
  x: -200,
  duration: 1.25,
});
gsap.from(".frame-side-right", {
  opacity: 0,
  x: 200,
  duration: 1.25,
});
gsap.from("#content p", {
  opacity: 0,
  duration: 1,
  y: 10,
  delay: 1,
});
