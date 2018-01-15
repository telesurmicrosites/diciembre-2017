// document is ready
$(document).ready(function() {

   var dot = document.getElementsByClassName('dot');
   var loader = document.getElementById('loader');
   var loaderWrapper = document.getElementsByClassName('loader_wrapper');
   var overlayBg = document.getElementsByClassName('overlay');
   var particlesBg = document.getElementsByClassName('particles');
   var heroLogo = document.getElementsByClassName('logo');
   var heroHashtag = document.getElementsByClassName('hashtag');
   var heroTitle = document.getElementsByClassName('title');
   var heroSplitTitle = new SplitText(heroTitle, {type: 'words'});
   var heroYear = document.getElementsByClassName('year');
   var heroShare = document.getElementsByClassName('share__list');

   // loader Animation
   var tlLoader = new TimelineMax({repeat: 3, onComplete: loadIntro})
            .staggerFromTo(dot, 0.3, {y: 0, autoAlpha: 0}, {y: 20, autoAlpha: 1, ease: Back.easeInOut}, 0.05)
            .fromTo(loader, 0.3, {autoAlpha: 1, scale: 1.3}, {autoAlpha: 0, scale: 1, ease: Power0.easeNone}, 0.9);

   // Intro Animation
   var tlIntro = new TimelineMax({paused: true})
         .to(loaderWrapper, 0.25, {autoAlpha: 0})
         .staggerFrom(heroSplitTitle.words, 0.5, {autoAlpha: 0, ease: Power0.easeIn}, 0.25)
         .from(heroYear, 0.5, {autoAlpha: 0, bottom: -20, ease: Power0.easeIn}, '-=0.5')
         .from(overlayBg, 0.5, {autoAlpha: 0})
         .from(particlesBg, 0.5, {autoAlpha: 0}, '-=0.5')
         .from(heroLogo, 0.5, {autoAlpha: 0, x: -20})
         .from(heroHashtag, 0.5, {autoAlpha: 0, x: -20}, '-=0.5')
         .from(heroShare, 0.5, {autoAlpha: 0, x: 20})
         .to('body', 1, {className: '-=overlay__off'});

      function loadIntro() {

         tlIntro.play();
      }


   // ScrollMagic

   // controller
   var controller = new ScrollMagic.Controller();

   // animation item #1
   var itemBg1 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(1)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(1)").height()
      })
      .setClassToggle("body", "red")
      .addIndicators()
      .addTo(controller);

   var itemCard1 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(1)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(1)").height()
      })
      .setClassToggle(".grid__item:nth-child(1)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #2
   var itemBg2 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(2)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(2)").height()
      })
      .setClassToggle("body", "amber")
      .addIndicators()
      .addTo(controller);

   var itemCard2 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(2)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(2)").height()
      })
      .setClassToggle(".grid__item:nth-child(2)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #3
   var itemBg3 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(3)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(3)").height()
      })
      .setClassToggle("body", "green")
      .addIndicators()
      .addTo(controller);

   var itemCard3 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(3)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(3)").height()
      })
      .setClassToggle(".grid__item:nth-child(3)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #4
   var itemCard4 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(4)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(4)").height()
      })
      .setClassToggle(".grid__item:nth-child(4)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #5
   var itemBg5 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(5)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(5)").height()
      })
      .setClassToggle("body", "blue")
      .addIndicators()
      .addTo(controller);

   var itemCard5 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(5)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(5)").height()
      })
      .setClassToggle(".grid__item:nth-child(5)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #6
   var itemBg6 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(6)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(6)").height()
      })
      .setClassToggle("body", "red")
      .addIndicators()
      .addTo(controller);

   var itemCard6 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(6)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(6)").height()
      })
      .setClassToggle(".grid__item:nth-child(6)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #7
   var itemBg7 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(7)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(7)").height()
      })
      .setClassToggle("body", "amber")
      .addIndicators()
      .addTo(controller);

   var itemCard7 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(7)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(7)").height()
      })
      .setClassToggle(".grid__item:nth-child(7)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #8
   var itemBg8 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(8)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(8)").height()
      })
      .setClassToggle("body", "green")
      .addIndicators()
      .addTo(controller);

   var itemCard8 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(8)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(8)").height()
      })
      .setClassToggle(".grid__item:nth-child(8)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #9
   var itemBg9 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(9)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(9)").height()
      })
      .setClassToggle("body", "indigo")
      .addIndicators()
      .addTo(controller);

   var itemCard9 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(9)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(9)").height()
      })
      .setClassToggle(".grid__item:nth-child(9)", "is-visible")
      .addIndicators()
      .addTo(controller);

   // animation item #10
   var itemBg10 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(10)",
      triggerHook: 0.8,
      duration: $(".grid__item:nth-child(10)").height()
      })
      .setClassToggle("body", "blue")
      .addIndicators()
      .addTo(controller);

   var itemCard10 = new ScrollMagic.Scene({
      triggerElement: ".grid__item:nth-child(10)",
      triggerHook: 0.6,
      duration: $(".grid__item:nth-child(10)").height()
      })
      .setClassToggle(".grid__item:nth-child(10)", "is-visible")
      .addIndicators()
      .addTo(controller);




   // Particles
   particlesJS('particles-js', {
      "particles": {
         "number": {
            "value": 3,
            "density": {
               "enable": true,
               "value_area": 300
            }
         },
         "color": {
            "value": "#FFF"
         },
         "shape": {
            "type": "polygon",
            "stroke": {
               "width": 0,
               "color": "#000000"
            },
            "polygon": {
               "nb_sides": 4
            },
            "image": {
               "src": "",
               "width": 50,
               "height": 50
            }
         },
         "opacity": {
            "value": 0.25,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
            }
         },
         "size": {
            "value": 10,
            "random": false,
            "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
            }
         },
         "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#212121",
            "opacity": 0.4,
            "width": 1
         },
         "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
            }
         }
      },
      "interactivity": {
         "detect_on": "canvas",
         "events": {
            "onhover": {
               "enable": false,
               "mode": "bubble"
            },
            "onclick": {
               "enable": false,
               "mode": "push"
            },
            "resize": true
         },
         "modes": {
            "grab": {
               "distance": 400,
               "line_linked": {
                  "opacity": 1
               }
            },
            "bubble": {
               "distance": 121.81158184520176,
               "size": 12,
               "duration": 3.5,
               "opacity": 8,
               "speed": 3
            },
            "repulse": {
               "distance": 16.241544246026905,
               "duration": 0.4
            },
            "push": {
               "particles_nb": 4
            },
            "remove": {
               "particles_nb": 2
            }
         }
      },
      "retina_detect": true
   });

   // Refresh Page on Top
   $(window).on('beforeunload', function() {

      $(window).scrollTop(0);

   });

});
