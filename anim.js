const an = gsap.timeline({defaults: {}})

an.to('.text', {y:'0%', stagger: 0.35, duration:1, ease: "power1.out"})
an.to('.slider', {y:'-100%', delay: 0.5, duration:1, ease: "power1.out"})
an.to(".welcome", {y:"-100%", duration:1, ease: "power1.out"}, "-=1")
an.to(".about-container", {scale:1, duration:0.5, ease: "power1.out"})
an.to(".banner-top-image video", {x:"0%", duration:0.5, ease: "back.out(2)"})
an.fromTo('.banner', {opacity: 0}, {opacity: 1, duration: 1})
an.to('.banner-heading', {x:"0%", duration:1, ease: "back.out"})
an.to(".banner-image", {opacity: 1, duration:1.3, scale:1, ease: "power4.out"})
gsap.to(".about-container-intro-content-1", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-container-intro-content-2", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-container-intro-content-3", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-container-intro-content-4", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-container-intro-content-5", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-edu-name", {opacity: 1, duration:0.5, ease: "power1.out"})
gsap.to(".about-edu-school", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-edu-he", {scale:1, duration:0.5, ease: "back.out(3)"})
gsap.to(".about-edu-bt", {scale:1, duration:0.5, ease: "back.out(3)"})