import { gsap } from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);




let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {

  let mainTL = gsap.timeline({id:"main"});
  //let PERC = {num:0};

  //let PERC_num = document.querySelector("#percentage_txt tspan");
 // console.log(PERC_num);

  //function percentHandler(){
  
   // PERC_num.textContent=PERC.num;
  
  //}

  function init(){
    //***********  logoTL init ****************
    gsap.set(["#vw-logo", "#barbie-logo"], {scale:0, transformOrigin:"center center", y:334});
    gsap.set("#background", {fill:"#000000"});
    gsap.set("#vw", {fill:"#000000"});
    gsap.set("#vw-back", {fill:"#fff"});
    gsap.set("#vw-petals", {fill:"none", drawSVG:false});
   
    //*********** frameTL init ****************
gsap.set("#spedometer", {display:"none"});
gsap.set("#fuel-gauge", {display:"none"});
gsap.set("#rpm", {display:"none"});
gsap.set("#date-time", {display:"none"});
gsap.set("#odometer", {display:"none"});
gsap.set("#music", {display:"none"});
gsap.set("#call-ken-button", {display:"none"});
gsap.set("#prndl", {display:"none"});
gsap.set("#gps-button", {display:"none"});
gsap.set("#temperature", {display:"none"});
gsap.set("#weather", {display:"none"});

    //*********** pinkFillTL init ****************

    //*********** detailsTL init ****************

    //*********** fmotionTL init ****************


  }

  //Nested Timelines
  //***********  logoTL  ****************
  function logoTL(){
    let tl = gsap.timeline();
    tl.to("#vw-logo", {scale:3, duration:1, ease:"back.out"})
    .to("#barbie-logo", {scale:6, duration:2, ease:"elastic.out"}, "barbie")
    .to("#vw", {fill:"#ff0099", duration:1}, "barbie")
    .to("#vw-back", {fill:"#63e3fa", duration:1}, "barbie")
    .to("#background", {fill:"#003559", duration:1}, "barbie")
    .to("#vw-logo", {y:65, scale:1, duration:1}, "barbie")
    .to("#vw-petals", {display:"block", duration:2, fill:"#f0ee4f", drawSVG:true, ease:"power1.out"}, "flower")
    .to("#barbie-logo", {scale:1, duration:1, y:8 }, "flower+=0.5")

    ;
    return tl;
  }

  //*********** frameTL ****************
  function frameTL(){
    let tl = gsap.timeline();

    return tl;
  }
  //*********** pinkFillTL ****************
  function pinkFillTL(){
    let tl = gsap.timeline();

    return tl;
  }
  //*********** detailsTL ****************
  function detailsTL(){
    let tl = gsap.timeline();

    return tl;
  }
  //*********** motionTL ****************
  function motionTL(){
    let tl = gsap.timeline();

    return tl;
  }


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
  gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
//  mainTL.add(fadeInTL())
mainTL.add(logoTL())
.add(frameTL())
.add(pinkFillTL())
.add(detailsTL())
.add(motionTL())

;//tl END
 




});
