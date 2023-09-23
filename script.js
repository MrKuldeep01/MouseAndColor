let rect = document.getElementById("box");
let head=document.getElementById("head");
rect.addEventListener("mousemove", (details) => {
  let rectLoc = rect.getBoundingClientRect();
  let inRectLoc = details.clientX - rectLoc.left;
  const midP = rectLoc.width / 2;
  //   console.log(midP);
  if (inRectLoc < midP) {
    let red = gsap.utils.mapRange(0, midP, 255, 0, inRectLoc);
      gsap.to(rect, {
      backgroundColor: `rgb(${red},0,0)`,
      ease: Power4,
    }),
    gsap.to(head,{
        color:`rgb(${red},0,0)`,
    });
    
    // rect.style.background = "linear-gradient(to right,red,blue";
    // console.log("at left");
} else {
    // rect.style.background = "linear-gradient(to right ,blue,red";
    let blue = gsap.utils.mapRange(midP,rectLoc.width, 0, 255, inRectLoc);
      gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blue})`,
      ease: Power4,
    }),
    gsap.to(head,{
        color:`rgb(0,0,${blue})`,
    });
    
  }
});

rect.addEventListener("mouseleave",()=>[
    gsap.to(rect,{
        backgroundColor:"white"
    }),
    gsap.to(head,{
        color:`black`,
    })
]);