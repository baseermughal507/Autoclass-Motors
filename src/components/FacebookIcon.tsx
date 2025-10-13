import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FacebookIcon = () => {
  return (
    <div className="w-12 h-12"> {/* size of icon */}
      <DotLottieReact
        src="https://lottie.host/d952e6ad-b883-4d2c-b538-74e8daae36f4/9N1wGul3Ux.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }} // fill the box
      />
    </div>
  );
};

export default FacebookIcon;
