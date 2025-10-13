import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TikTokIcon = () => {
  return (
    <div className="w-12 h-12"> {/* size of icon */}
      <DotLottieReact
        src="https://lottie.host/470d120e-7dce-4bdd-978a-a318210a9b94/7Rqefd83TU.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }} // makes it fill the box
      />
    </div>
  );
};

export default TikTokIcon;
