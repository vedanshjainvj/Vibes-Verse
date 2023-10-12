import React from "react";
import AnimatedCursor from "react-animated-cursor"


export default function AnimateCursor() {
  return (
      <AnimatedCursor innerSize={15}
      outerSize={12}
      color='255, 253, 208'
      outerAlpha={0.9}
      innerScale={0.9}
      outerScale={5}
      showSystemCursor={false} />
  );
}