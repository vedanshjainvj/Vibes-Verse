// Imports of react
import React from 'react';
// Importing react parallax for parallax effect
import { Parallax } from 'react-parallax';

const Parallaxx = () => {
  return (
    <div className='flex items-center justify-center my-16'>
      <Parallax  strength={600} bgImage="https://64.media.tumblr.com/f393eddc42dc756924038293abcbe54c/a55e4b333cef2d05-e1/s1280x1920/d168644037b0de4f0647d2aad280faf65a415768.gif" className="parallax-container relative h-[80vh] w-3/4 flex justify-center items-center par-box">
        <div className="content">
          <div className="text-6xl font-extrabold text-op">FEEL THE VIBES !!!</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxx;
