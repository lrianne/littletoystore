//Landing Page Intro Animation
TweenMax.staggerFrom(".landing > .img", 1, {
    opacity:0,
    y: "110%",
    ease: Expo.easeInOut,
    delay: .5,
  },
  0.4
);

gsap.from(".section1-label",{
    opacity: 0,
    y: -50,
    delay: 4.5
});

//Media Queries
function intro_anim(screen) {
  if (screen.matches) {
    TweenMax.to(".landing", 2, {
      opacity: "40%",
      y: "0",
      ease: Expo.easeInOut,
      delay: 4,
    });
  } else {
    TweenMax.to(".landing", 2, {
      scale: "1.5",
      x: "60%",
      y: "5%",
      ease: Expo.easeInOut,
      delay: 3,
    });
  }
}

var maxMedia = window.matchMedia("(max-width: 1024px)") // Media Query Object
intro_anim(maxMedia);
//Adding a listener to change the way the landing intro animation works according to the screen size. 
maxMedia.addEventListener("change", function() { 
  intro_anim(maxMedia);
});