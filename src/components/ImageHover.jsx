// Imports of react
import React, { useEffect } from "react";
// Importing Gsap for hover effect
import gsap from "gsap";

const Element = ({ imgSrc, title, year }) => {
  return (
    <div className="elements">
      <img src={imgSrc} alt={title} className="image" />
      <h1>{title}</h1>
      <h5>{year}</h5>
    </div>
  );
};

const ImageHover = () => {
  const data = [
    {
      imgSrc: "https://i.ibb.co/LpQwLHW/mt01.png",
      title: "MOTIVATION",
      year: "STAY MOTIVATED",
    },
    {
      imgSrc: "https://i.ibb.co/h8QwhN9/fc01.png",
      title: "FACTS",
      year: "AMAZING FACTS",
    },
    {
      imgSrc: "https://i.ibb.co/n6WhmPg/q01.png",
      title: "QUOTES",
      year: "FAMOUS QUOTES",
    },
    {
      imgSrc: "https://i.ibb.co/jwYbBn7/gk01.png",
      title: "DAILY GK",
      year: "ABSOLUTE KNOWLEDGE",
    },
    {
      imgSrc: "https://i.ibb.co/xSMddMy/C1.png",
      title: "SHORT STORIES",
      year: "MORAL LESSONS",
      
    },
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(".elements");

    elements.forEach((elem) => {
      let rotate = 0;
      let diff = 0;

      elem.addEventListener("mouseleave", (e) => {
        const img = elem.querySelector(".image");
        gsap.to(img, {
          opacity: 0,
          zIndex: 0,
          ease: "power3",
        });
      });

      elem.addEventListener("mouseenter", (e) => {
        const img = elem.querySelector(".image");
        gsap.to(img, {
          opacity: 1,
          zIndex: 1,
          ease: "power3",
        });
      });

      elem.addEventListener("mousemove", (e) => {
        const img = elem.querySelector(".image");
        const pos = e.clientY - elem.getBoundingClientRect().top;
        diff = e.clientX - rotate;
        rotate = e.clientX;
        const value = gsap.utils.clamp(-20, 20, diff * 0.5);
        gsap.to(img, {
          top: pos,
          left: e.clientX,
          rotate: value,
        });
      });
    });
  }, []);

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      <h1 className="heading-main text-center mb-10 xl:text-[5vw] md:text-[5vw] sm:text-[10vw] sm:max-text-[7vw]">
              OUR <span className="span-feedback"> Content</span>
            </h1>
      <div id="secondPage">
        {data.map((item, index) => (
          <Element key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ImageHover;


