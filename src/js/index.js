let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


    // .to('.content-images', 2, {opacity: 0}, "-=5");
timeline
.fromTo('.dev', {opacity: 0}, {opacity:1, duration: 2} )
.fromTo('.button', 2, {y: -200}, {y:0, duration:3}, '-=2')
.fromTo('.main-title', {opacity: 0}, {opacity:1, duration: 6} )
.to('.eu', 13, {y:-50})
.to('.piramide',13, {x:-50}, '-=13')
.to('.content', 3, {top: '0%'}, '-=3')
.fromTo('.content-images', {opacity:0}, {opacity: 1, duration: 2})
.fromTo('.text1', {x: 2000}, {x:0, duration:3} )
.fromTo('.text2', 3,{x: -2000}, {x:0, duration:3}, '-=1')
.fromTo('.bottom', {opacity:0}, {opacity: 1, duration: 2})

let scene = new ScrollMagic.Scene({
    triggerElement: 'section', 
    duration: '200%',
    triggerHook: 0, // 0 no topo da imagem, 0.5 no meio da imagem e 1 na base da imagem
})

.setTween(timeline)
.setPin('section')
.addTo(controller);

