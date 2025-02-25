const scrool = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function video1animation(){
    var video1 = document.querySelector("#video1")
var playbtn = document.querySelector("#play")
video1.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
video1.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
})
video1.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-100,
        top:dets.y-130
    })
})
}
video1animation()

function loadinganimation() {
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        duration:1,
        delay:0.4,
        stagger:0.3
    })



    
gsap.from("#page1 #video1",{
    scale:0.8,
    opacity:0,
    duration:0.7,
    delay:1.4,
})
}

loadinganimation()
