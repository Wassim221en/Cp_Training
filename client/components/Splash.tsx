import React, { useEffect, useState } from "react";

interface SplashProps {
  imageSrc: string;
  duration?: number; // milliseconds
}

export default function Splash({ imageSrc, duration = 5000 }: SplashProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // start animation shortly after mount
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-52 h-52">
          {/* faded base logo */}
          <img src={imageSrc} alt="logo" className="w-52 h-52 object-contain opacity-30" />

          {/* colored logo that slides up to fill */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={imageSrc}
              alt="logo-fill"
              className="w-52 h-52 object-contain"
              style={{
                transform: animate ? "translateY(0%)" : "translateY(100%)",
                transition: `transform ${duration}ms linear`,
              }}
            />
          </div>
        </div>

        {/* thin vertical progress line under logo that fills bottom-to-top */}
        <div className="w-1 h-24 bg-gray-200 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 bottom-0 right-0 bg-green-500"
            style={{
              height: animate ? "100%" : "0%",
              transition: `height ${duration}ms linear`,
            }}
          />
        </div>

        <div className="text-center">
          <div className="text-lg font-semibold text-foreground">Loading</div>
          <div className="text-sm text-muted-foreground mt-1">Please wait...</div>
        </div>
      </div>
    </div>
  );
}
