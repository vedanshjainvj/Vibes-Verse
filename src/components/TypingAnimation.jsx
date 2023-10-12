import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['VIBES VERSE', 'VIBES VERSE', 'VIBES VERSE'],
      typeSpeed: 200, // typing speed in milliseconds
      backSpeed: 250, // backspacing speed in milliseconds
      loop: true, // loop the animation
      showCursor: false, // Show the cursor
     cursorChar: '|' // Customize cursor character
    };
    const newhead = {
      strings: ['Amazing', 'Champ', 'Vedansh'],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed('#typed-heading', options);
    // const newtype = new Typed('#newtype', newhead);

    return () => {
      typed.destroy(); // Clean up Typed.js instance when component unmounts
      // newtype.destroy();
    };
  }, []);

  return (
   <></>
  );
};

export default TypingAnimation;
