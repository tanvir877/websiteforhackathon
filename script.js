var video1 = document.querySelector("#video1")
var playbtn = document.querySelector("#play")
video1.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})