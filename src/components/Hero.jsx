import React from "react";
// import TypingAnimation from './TypingAnimation';
import { motion } from "framer-motion";
import CarouselSlider from "./CarouselSlider";
import Parallaxx from "./Parallaxx";
import Footer from "./Footer";
import Stats from "./Stats";
import Accordian from "./Accordian";
import ImageHover from "./ImageHover";

const Hero = () => {
  return (
    <>
      <div className="flex w-full items-center hero-container">
        <div className="left-hero flex flex-col pl-[7vw] gap-2 w-2/5 items-start justify-center heading-div">
          <h1 className="leading-[10vw]">
            VIBES VERSE
          </h1>
         
          <p className="pl-3">
            Welcome To The Multi-Verse of Amazing, High Quality Content. We
            Thrive To Create Content That Resonates With Our Audience.
          </p>
          <div className="btn">
            <button>Follow us</button>
            <a href="https://www.instagram.com/">
              <img
                src="https://img.freepik.com/premium-vector/neon-instagram-logo-vector_742443-26.jpg" className="w-[5vw]"/>
            </a>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-start">
          <img className="w-[70%] opacity-90 vibesimg" src="https://i.pinimg.com/originals/c3/c5/7b/c3c57b1be20d08918a63d016c1d8c3b6.gif"></img>
        </div>
      </div>
      <ImageHover></ImageHover>
      <Stats></Stats>
      <Parallaxx></Parallaxx>
      <CarouselSlider></CarouselSlider>
      <Accordian></Accordian>
      <Footer></Footer>
    </>
  );
};

export default Hero;
