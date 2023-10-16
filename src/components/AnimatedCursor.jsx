import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function AnimateCursor() {
  return (
      <AnimatedCursor innerSize={15} className='mix-blend-difference'
      outerSize={12}
      color='255,255,255'
      outerAlpha={0.9}
      innerScale={0.9}
      outerScale={5}
      showSystemCursor={false} />
  );
}