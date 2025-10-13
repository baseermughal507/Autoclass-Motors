// CarIcon.tsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CarIcon = ({ size = "w-48 h-48" }: { size?: string }) => {
  return (
    <div className={`${size} mx-auto`}>
      <DotLottieReact
        src="https://lottie.host/22edc28c-df1a-4904-acc0-0da14e5c0904/dgcMFi4iFw.lottie"
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CarIcon;
