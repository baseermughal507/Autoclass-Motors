import { useState, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface LazyVideoPlayerProps {
  src: string;
  priority?: boolean;
  containerClassName?: string;
  videoClassName?: string;
}

const LazyVideoPlayer = ({ 
  src, 
  priority = false, 
  containerClassName = "w-full h-full relative",
  videoClassName = "w-full h-full object-cover"
}: LazyVideoPlayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" } // trigger loading before it fully enters viewport
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Check readyState for race conditions
  useEffect(() => {
    if (isIntersecting && videoRef.current) {
      if (videoRef.current.readyState >= 2) {
        setIsReady(true);
      }
      
      // If it's not priority, we must manually trigger play when it intersects
      if (!priority) {
        videoRef.current.play().catch(e => console.error("Autoplay prevented:", e));
      }
    }
  }, [isIntersecting, priority]);

  return (
    <div ref={wrapperRef} className={`flex items-center justify-center bg-black/30 overflow-hidden ${containerClassName}`}>
      {/* Loading State */}
      {!isReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <Loader2 className="w-8 h-8 animate-spin text-white/50 mb-2" />
        </div>
      )}

      {/* Video ALWAYS rendered to bypass aggressive download extensions like IDM/VLC. 
          Uses preload="none" for non-priority videos to save bandwidth until scrolled into view. */}
      <video
        ref={videoRef}
        src={src}
        autoPlay={priority}
        preload={priority ? "auto" : "none"}
        loop
        muted
        playsInline
        onLoadedData={() => setIsReady(true)}
        className={`transition-opacity duration-700 ease-in-out absolute inset-0 ${isReady ? "opacity-100" : "opacity-0"} ${videoClassName}`}
      />
    </div>
  );
};

export default LazyVideoPlayer;
