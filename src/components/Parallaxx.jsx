import React from 'react';
import { Parallax } from 'react-parallax';
import videogif from '../assets/videogif.gif';
import {motion} from 'framer-motion'

const Parallaxx = () => {
  return (
    <div className='flex items-center justify-center my-16 '>
      {/* <Parallax strength={900} bgImage="https://media.tenor.com/KFoX5feP-D4AAAAC/smoke-red-screen.gif" className="parallax-container relative h-[50vh] w-1/2 flex justify-center items-center">
        <div className="content">
          <div className="text-content">Play</div>
        </div>
      </Parallax> */}
      <Parallax  strength={600} bgImage="https://i.pinimg.com/originals/00/f7/95/00f795b7d97bf213382e87252f13ce11.gif" className="parallax-container relative h-[80vh] w-3/4 flex justify-center items-center par-box">
        <div className="content">
          <div className="text-content">Play</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxx;
