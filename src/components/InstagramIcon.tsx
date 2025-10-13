import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const InstagramIcon = () => {
  return (
    <div className="w-12 h-12"> {/* size of icon */}
      <DotLottieReact
        src="https://lottie.host/5bb53545-5db9-4898-ae89-b321b3091a88/p6GGQVGbNn.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }} // makes it fill the box
      />
    </div>
  );
};

export default InstagramIcon;
