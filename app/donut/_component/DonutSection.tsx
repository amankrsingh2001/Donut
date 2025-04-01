"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap"

const DonutSection = () => {

  const [step, setStep] = useState(1);


  const blueBerryText = useRef(null);
  const blueBerryDonut = useRef(null);
  const greenAppleDonut = useRef(null);
  const greenContainer = useRef(null);
  const appleGreenRefText = useRef(null)
  const bananaRef = useRef(null)
  const bananaContainer = useRef(null)
  const caramelTextRef = useRef(null)


  const timeline = useRef(gsap.timeline({ paused: true }));
  
  
  useEffect(() => {
    const tl = gsap.timeline({ paused: true })
      .addLabel('step1')
      .to(blueBerryText.current, { y: 700 }, 'a')
      .to(blueBerryDonut.current, { y: -510, rotate: 180, scale: 0.4 }, 'a')
      .to(greenAppleDonut.current, { top: "50%", scale: 1, rotate: 180 }, 'a')
      .to(greenContainer.current, { scale: 20, duration: 0.8 }, 'a')
      .to(appleGreenRefText.current, { scale: 1, top: "30%" }, 'a')
      .to(".leaf1", { rotate: 45 }, 'a')
      .to(".leaf2", { rotate: 45 }, 'a')
      .to(".leaf3", { rotate: 45 }, 'a')
      .to(".leaf4", { rotate: 45 }, 'a')
      .to(bananaRef.current, { top: "105%" }, 'a')
      .addLabel('step2')
      .to(blueBerryDonut.current, { y: -580, rotate: 180, scale: 0.4 }, 'b')
      .to(greenAppleDonut.current, { y: -510, rotate: 180, scale: 0.4 }, 'b')
      .to(bananaRef.current, { scale: 1, top: "50%", rotate: 120 }, 'b')
      .to(appleGreenRefText.current, { y: 700 }, 'b')
      .to(bananaContainer.current, { scale: 20, duration: 0.8 }, 'b')
      .to(caramelTextRef.current, { scale: 1, top: "30%" }, 'b')
      .to(".leaf1", { rotate: 180 }, 'b')
      .to(".leaf2", { rotate: 180 }, 'b')
      .to(".leaf3", { rotate: 180 }, 'b')
      .to(".leaf4", { rotate: 180 }, 'b')
      .addLabel('step3');

    timeline.current = tl;
  }, []);


  const handlePrevious = () => {
    if (step > 1) {
      const targetLabel = step === 3 ? 'step2' : 'step1';
      timeline.current.tweenTo(targetLabel);
      setStep(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      const targetLabel = step === 1 ? 'step2' : 'step3';
      timeline.current.tweenTo(targetLabel);
      setStep(prev => prev + 1);
    }
  };


  return (
    <div className="h-screen bg-custom-radial from-[#e0b8ff] to-[#744eb2] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative">
        <div ref={greenContainer} className="absolute  rounded-full size-40 scale-0 left-1/2 -translate-x-1/2  bg-greenApple-radial -top-24"/>

        <div ref={bananaContainer} className="absolute  rounded-full size-40 scale-0 left-1/2 -translate-x-1/2  bg-bananaContainer-radial -top-24"/>

{/* blue berry text */}
      <h1 ref={blueBerryText} className="font-Anton text-[15vw] w-full text-center uppercase text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        Blue Berry
      </h1>
      {/* apple text */}
      <h2 ref={appleGreenRefText} className="font-Anton text-[15vw] w-full text-center uppercase text-white absolute scale-0 -top-64 left-1/2 -translate-x-1/2">
       Green Apple
      </h2>
    {/* banana text */}
      <h2 ref={caramelTextRef} className="font-Anton text-[15vw] w-full text-center uppercase text-white absolute scale-0 -top-64 left-1/2 -translate-x-1/2">
       Caramel
      </h2>
      {/* blue berry */}
      <img ref={blueBerryDonut} width={800} height={800} src="/Rectangle1.png" alt="Blue Berry Dognut" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
    {/* green apple */}
      <img ref={greenAppleDonut} width={800} height={800} src="/greenApple.png" alt="Blue Berry Dognut" className="absolute rotate-0 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] top-[104%]"/>
    {/* caramel donut */}

    <img ref={bananaRef} width={800} height={800} src="/BananaDonut.png" alt="Blue Berry Dognut" className="absolute rotate-0 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] top-[120%]"/>


      <Image width={200} height={200} src={'/leaf.png'} alt="leaf" className="absolute top-[5%] left-[15%] leaf1"/>
      <Image width={128} height={224} src={'/leaf1.png'} alt="leaf" className="absolute top-[5%] right-[15%] leaf2"/>

      <Image width={200} height={200} src={'/leaf.png'} alt="leaf" className="absolute bottom-[5%] right-[15%] rotate-[180deg] leaf3"/>
      <Image width={128} height={224} src={'/leaf1.png'} alt="leaf" className="absolute bottom-[5%] left-[15%] rotate-[180deg] leaf4"/>


      {/* Swipe Animation */}

    <div  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-white flex justify-between">
    <ChevronLeft className="size-12 cursor-pointer" onClick={handlePrevious}/>
    <ChevronRight className="size-12 cursor-pointer"  onClick={handleNext} />
    </div>
      </div>

     
    </div>
  );
};

export default DonutSection;
