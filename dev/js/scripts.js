import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);




let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {

  let mainTL = gsap.timeline({id:"main"});
  // let PERC = {num:0};

  // let PERC_num = document.querySelector("#temp-number");
  // console.log(PERC_num);

  // function percentHandler(){
  //  PERC_num.textContent=PERC.num;
  //  }

  function init(){
    //***********  logoTL init ****************
    gsap.set(["#vw-logo", "#barbie-logo"], {scale:0, transformOrigin:"center center", y:334});
    gsap.set("#background", {fill:"#000000"});
    gsap.set("#vw", {fill:"#000000"});
    gsap.set("#vw-back", {fill:"#fff"});
    gsap.set("#vw-petals", {fill:"none", drawSVG:false});
   
    //*********** frameTL init ****************
    gsap.set(["#speed-petals-frame", "#speed-screen-frame", "#fuel-frame-petals", "#fuel-screen-frame", "#rpm-petals-frame", "#rpm-screen-frame", "#temp-bubble-frame", "#weather-frame", "#music-frame"], {drawSVG:false, alpha:0});
    gsap.set(["#speed-petals-frame", "#fuel-frame-petals", "#rpm-petals-frame"], {transformOrigin:"center center", scale:0});
    gsap.set(["#speed-petals", "#fuel-petals", "#rpm-petals"], {alpha:0});
    gsap.set(["#fuel-1", "#fuel-2","#fuel-3","#fuel-4","#fuel-5","#fuel-6","#fuel-7","#fuel-8"], {scale:0,  transformOrigin:"center center"})
    gsap.set(["#promiscuous", "#glamorous", "#beautiful-girls", "#barbie-girl"], {transformOrigin:"center right", scale:0});
    gsap.set(["#P", "#R", "#N", "#D", "#L"], {alpha:0, transformOrigin:"center center"});
    gsap.set( "#selection-button", {scale:0, transformOrigin:"center center"});

    //*********** pinkFillTL init ****************
    gsap.set(["#weather-bubble", "#temp-bubble", "#music-bubble"], {alpha:0});
    gsap.set(["#cloudy", "#cloud", "#temp", "#music-controls"], {scale:0, transformOrigin:"center center"});
    gsap.set(["#date", "#time"], {scale:0});

    //*********** detailsTL init ****************
    gsap.set("#odometer-frame", {drawSVG:false, alpha:0});
    gsap.set(["#mi", "#miles", "#gps-frame", "#gps", "#phone-frame", "#call-ken", "#full-frame", "#empty-frame", "#mph", "#rpm-number", "#mph-number",  "#gas-tank", "#rpm-figure"], {scale:0, transformOrigin:"center center"});
    gsap.set(["#phone", "#gps-bubble", "#rpm-screen", "#speed-screen", "#fuel-screen"], {alpha:0});
   
    //*********** motionTL init ****************


  }

  //Nested Timelines
  //***********  logoTL  ****************
  function logoTL(){
    let tl = gsap.timeline();
    tl.to("#vw-logo", {scale:3, duration:1, ease:"back.out"})
    .to("#barbie-logo", {scale:6, duration:1, ease:"bounce.out"}, "barbie")
    .to("#vw", {fill:"#ff0099", duration:1}, "barbie")
    .to("#vw-back", {fill:"#63e3fa", duration:1}, "barbie")
    .to("#background", {fill:"#003559", duration:1}, "barbie")
    .to("#vw-logo", {y:65, scale:1, duration:1}, "barbie")
    .to("#vw-petals", {display:"block", duration:2, fill:"#f0ee4f", drawSVG:true, ease:"power1.out"}, "flower")
    .to("#barbie-logo", {scale:1, duration:1, y:8 }, "flower+=0.25")
    ;
    return tl;
  }

  //*********** frameTL ****************
  function frameTL(){
    let tl = gsap.timeline();
    tl.to(["#speed-screen-frame","#fuel-screen-frame", "#rpm-screen-frame", "#weather-frame", "#temp-bubble-frame", "#music-frame" ], {alpha:1})

    .from("#speed-screen-frame", {y:"+=600", duration:1, ease:"back.out"}, "screen")
    .to("#speed-screen-frame", {drawSVG:true, duration:1}, "screen")
    .from("#fuel-screen-frame", {y:"+=600", duration:1, ease:"back.out"}, "screen+=0.25")
    .to("#fuel-screen-frame", {drawSVG:true, duration:1}, "screen+=0.5")
    .from("#rpm-screen-frame", {y:"+=600", duration:1, ease:"back.out"}, "screen+=0.5")
    .to("#rpm-screen-frame", {drawSVG:true, duration:1}, "screen+=0.75")
    .from("#weather-frame", {y:"-=600", duration:1, ease:"back.out"}, "screen+=0.75")
    .to("#weather-frame", {drawSVG:true, duration:1}, "screen+=1")
    .from("#music-frame", {y:"-=600", duration:1, ease:"back.out"}, "screen+=1")
    .to("#music-frame", {drawSVG:true, duration:1}, "screen+=1.25")
    .from("#temp-bubble-frame", {y:"-=600", duration:1, ease:"back.out"}, "screen+=1.25")
    .to("#temp-bubble-frame", {drawSVG:true, duration:1}, "screen+=1.5")

    .to(["#speed-petals-frame", "#fuel-frame-petals", "#rpm-petals-frame"], {scale:1}, "-=1")
    .to(["#speed-petals-frame", "#fuel-frame-petals", "#rpm-petals-frame"], {drawSVG:true, duration:2, ease:"power1.out", alpha:1}, "-=1")

    .to("#P", {scale:1, alpha:1, ease:"power1.out", duration:0.5}, "prndl")
    .to("#R", {scale:1, alpha:1, ease:"power1.out", duration:0.5}, "prndl+=.1")
    .to("#N", {scale:1, alpha:1, ease:"power1.out", duration:0.5}, "prndl+=.2")
    .to("#D", {scale:1, alpha:1, ease:"power1.out", duration:0.5}, "prndl+=.3")
    .to("#L", {scale:1, alpha:1, ease:"power1.out", duration:0.5}, "prndl+=.4")
    .to("#selection-button", {scale:1, ease:"back.out"}, "park")
    .to("#P", {fill:"#ffcce7", scale:1.5, ease:"back.out"}, "park")
    ;

    return tl;
  }

  //*********** pinkFillTL ****************
  function pinkFillTL(){
    let tl = gsap.timeline();
    tl.to("#weather-bubble", {alpha:1, duration:1})
    .to(["#cloud", "#cloudy"], {scale:1, duration:0.5}, "-=0.5")
    .to("#music-bubble", {alpha:1, duration:1}, "-=0.5")
    .to("#music-controls", {scale:1, duration:0.5}, "-=0.5")
    .to("#temp-bubble", {alpha:1, duration:1}, "-=0.5")
    .to(["#temp"], {scale:1, duration:0.5}, "-=0.5")
    .from(["#date", "#time"], {y:900, alpha:1}, "-=1")
    .to(["#date", "#time"], {scale:1, ease:"back.out"}, "-=1")
    ;

    return tl;
  }

  //*********** detailsTL ****************
  function detailsTL(){
    let tl = gsap.timeline();
    tl.to("#odometer-frame", {alpha:1, drawSVG:true, duration:1})
    .to(["#miles", "#mi"], {scale:1, duration:0.5}, "-=0.5")
    .to(["#phone", "#gps-bubble"], {alpha:1, duration:1}, "-=0.5")
    .to(["#call-ken", "#gps"], {scale:1, duration:0.5}, "-=0.5")
    .to("#glamorous", {scale:1, duration:1}, "-=0.5")
    .to(["#fuel-screen", "#speed-screen", "#rpm-screen"], {alpha:1, duration:0.5})
    .to(["#rpm-figure", "#gas-tank", "#mph", "#full-frame", "#empty-frame"], {scale:1, duration:1})
    .to(["#mph-number", "#rpm-number"], {scale:1, duration:0.5})
    ;
    return tl;
  }

  //*********** motionTL ****************
  function motionTL(){
    let tl = gsap.timeline();
    tl.to("#fuel-petals", {alpha:1})
    .to("#fuel-1", {scale:1, duration:0.5, ease:"power1.out"})
    .to("#fuel-2", {scale:1, duration:0.5, ease:"power1.out"})
    .to("#fuel-3", {scale:1, duration:0.5, ease:"power1.out"})
    .to("#fuel-4", {scale:1, duration:0.5, ease:"power1.out"})
    .to("#fuel-5", {scale:1, duration:0.5, ease:"power1.out"})
    .to("#f-forward", {transformOrigin:"center center", alpha:0.8, fill:"#63e3fa", yoyo:true, duration:1, repeat:1}, "glamorous")
    .to("#glamorous", {transformOrigin:"center left", scale:0, duration:0.5}, "glamorous")
    .to("#promiscuous", {scale:1, duration:0.5}, "glamorous+=0.5")
    .to("#f-forward", {transformOrigin:"center center", alpha:0.8, fill:"#63e3fa", yoyo:true, duration:1, repeat:1}, "beautifulGirls")
    .to("#promiscuous", {transformOrigin:"center left", scale:0, duration:0.5}, "beautifulGirls")
    .to("#beautiful-girls", {scale:1, duration:0.5}, "beautifulGirls+=0.5")
    .to("#f-forward", {transformOrigin:"center center", alpha:0.8, fill:"#63e3fa", yoyo:true, duration:1, repeat:1}, "barbieGirl")
    .to("#beautiful-girls", {transformOrigin:"center left", scale:0, duration:0.5}, "barbieGirl")
    .to("#barbie-girl", {scale:1, duration:0.5}, "barbieGirl+=0.5")
    .to("#selection-button", {
      duration:2,
      motionPath:{
        path:"#prndl-arc",
        align:"#prndl-arc",
        alignOrigin:[0.5, 0.5]
      },
      ease:"power4.out"
    }, "gear-change")
    .to("#P", {scale:1, fill:"#63e3fa", ease:"back.out", duration:0.5}, "gear-change")
    .to("#D", {scale:1.5, fill:"#ffcce7", ease:"back.out", duration:0.5}, "-=0.5")
    
    ;
    return tl;
  }


  // function percentHandler(){
  
  //   PERC_num.textContent=PERC.num;
  
  // }



  init();
  gsap.set('#svg-container',{visibility:"visible"});


mainTL.add(logoTL())
.add(frameTL(), "-=2")
.add(pinkFillTL(), "-=1")
.add(detailsTL(), "-=1")
.add(motionTL(), "-=0.5")

;//tl END
 
});
