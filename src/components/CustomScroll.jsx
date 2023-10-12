import React, { useEffect, useState } from 'react';

const CustomScroll = () => {
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const newProgressHeight = (scrollY / totalHeight) * 100;
      setProgressHeight(newProgressHeight);
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  const progressBarStyle = {
    height: `${progressHeight}%`,
  };

  return (
    <div className="scroll-effect">
      <div id="progressbar" style={progressBarStyle}></div>
      <div id="scrollpath"></div>
    </div>
  );
};

export default CustomScroll;
