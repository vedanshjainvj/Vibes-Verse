// Imports of react
import React from "react";
// Importing Framer Motion Library for animations
import { motion } from "framer-motion";
// Importing components from folder structure
import Apps from "./Apps";
import Footer from "./Footer";
import Stats from "./Stats";
import Accordian from "./Accordian";
import ImageHover from "./ImageHover";
import Herogif from "../assets/herogiffy.gif";
import Internstats from "./Internstats";

const Hero = () => {
  return (
    <>
      <div className="flex w-full items-center hero-container">
        <motion.div
          initial={{ opacity: 0, x: "-500" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="left-hero flex flex-col pl-[7vw] gap-2 w-2/5 items-start justify-center heading-div"
        >
          <motion.h1
            initial={{ opacity: 0, x: "100" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="leading-[10vw] text-[11vw]"
          >
            VIBES VERSE
          </motion.h1>

          <p className="pl-3 w-[31vw] text-[1.3vw]">
            Welcome To The Multi-Verse of Amazing, High Quality Content. We
            Thrive To Create Content That Resonates With Our Audience.
          </p>
          <div className="btn flex items-center">
            <button className="py-[0.8vw] px-[1.5vw] text-lg text-white">
              Follow us
            </button>
            <a href="https://www.instagram.com/">
              <img
                src="https://img.freepik.com/premium-vector/neon-instagram-logo-vector_742443-26.jpg"
                className="w-[5vw]"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "500" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-3/5 flex justify-center box-border items-start"
        >
          <img className="w-[80vh] opacity-90 vibesimg" src={Herogif}></img>
        </motion.div>
      </div>

      <ImageHover></ImageHover>
      <Internstats></Internstats>
      <Stats></Stats>
      <Apps></Apps>
      <Accordian></Accordian>
      <Footer></Footer>
    </>
  );
};

export default Hero;
