// SplashFillWithWaveProgress.tsx
import React, { useEffect, useRef, useState } from "react";

interface SplashProps {
  imageSrc: string;
  duration?: number; // ms for the main fill & progress
  size?: number; // px (square)
  onFinish?: () => void;
  bgColor?: string;
  accentColor?: string;
}

export default function SplashFillWithWaveProgress({
  imageSrc,
  duration = 2000,
  size = 208,
  onFinish,
  bgColor = "#ebf1ff",
  accentColor = "#000000",
}: SplashProps) {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);
  const idRef = useRef(`splash-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setAnimate(true);
      const t = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 120);
      return () => clearTimeout(t);
    }

    const start = setTimeout(() => setAnimate(true), 50);
    const hide = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, duration + 420);

    return () => {
      clearTimeout(start);
      clearTimeout(hide);
    };
  }, [duration, onFinish]);

  if (!visible) return null;

  const sizePx = `${size}px`;
  const uid = idRef.current;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bgColor,
        zIndex: 60,
      }}
    >
      <style>{`
        /* scoped styles using unique id ${uid} */
        .${uid} .reveal-rect {
          transform-box: fill-box;
          transform-origin: 50% 100%;
          transform: translateY(100%);
          transition: transform ${duration}ms cubic-bezier(.22,.9,.3,1);
        }
        .${uid}.is-animated .reveal-rect {
          transform: translateY(0%);
        }

        /* progress fill scales horizontally (left->right) */
        .${uid} .prog-fill {
          transform-origin: 0 50%;
          transform: scaleX(0);
          transition: transform ${duration}ms cubic-bezier(.22,.9,.3,1);
        }
        .${uid}.is-animated .prog-fill {
          transform: scaleX(1);
        }

        /* moving wave(s) inside prog-fill for fluid leading edge */
        .${uid} .wave {
          animation: ${uid}-wave-move 1200ms linear infinite;
        }
        .${uid} .wave-2 {
          animation: ${uid}-wave-move 1800ms linear infinite;
          opacity: 0.85;
        }
        @keyframes ${uid}-wave-move {
          0% { transform: translateX(-25%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(25%); }
        }

        /* slight vertical wobble to simulate liquid surface */
        .${uid} .wave-sine {
          animation: ${uid}-wave-sine 1400ms ease-in-out infinite;
        }
        @keyframes ${uid}-wave-sine {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        {/* Logo with vertical (bottom->top) fill */}
        <div style={{ width: sizePx, height: sizePx }}>
          <svg
            className={`${uid} ${animate ? "is-animated" : ""}`}
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Loading logo"
          >
            <defs>
              <mask id={`${uid}-mask`}>
                <rect x="0" y="0" width="100" height="100" fill="black" />
                {/* reveal rect anchored bottom (we animate translateY on it) */}
                <rect className="reveal-rect" x="0" y="0" width="100" height="100" fill="white" />
              </mask>
            </defs>

            {/* faded base logo */}
            <image
              href={imageSrc}
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
              style={{ opacity: 0.28 }}
            />

            {/* coloured logo revealed by mask */}
            <g mask={`url(#${uid}-mask)`}>
              <image
                href={imageSrc}
                x="0"
                y="0"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>

        {/* Horizontal progress bar with waves */}
        <div style={{ width: Math.min(size, 320), maxWidth: "90vw" }}>
          <svg
            width="100%"
            height="18"
            viewBox="0 0 100 18"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className={uid}
          >
            <defs>
              {/* rounded background */}
              <clipPath id={`${uid}-clip`}>
                <rect x="0" y="0" width="100" height="18" rx="9" ry="9" />
              </clipPath>
            </defs>

            {/* background track */}
            <rect x="0" y="0" width="100" height="18" rx="9" ry="9" fill="rgba(255,255,255,0.06)" />

            {/* prog-fill group -> scales X from 0 to 1 */}
            <g className="prog-fill" clipPath={`url(#${uid}-clip)`}>
              {/* solid fill base */}
              <rect x="0" y="0" width="100" height="18" rx="9" ry="9" fill={accentColor} />

              {/* moving waves overlay (two paths for parallax) */}
              <g transform="translate(0,0)" style={{ mixBlendMode: "screen" }}>
                <g className="wave wave-sine" transform="translate(-25,0)">
                  <path
                    d="M0 10 C8 6, 18 12, 30 10 C42 8, 54 14, 66 10 C78 6, 90 12, 100 10 L100 18 L0 18 Z"
                    fill="rgba(255,255,255,0.18)"
                    transform="scale(1,1)"
                    />
                </g>
                <g className="wave-2 wave-sine" transform="translate(-40,0)" opacity="0.6">
                  <path
                    d="M0 11 C10 8, 22 14, 34 11 C46 8, 58 15, 70 11 C82 7, 92 14, 100 11 L100 18 L0 18 Z"
                    fill="rgba(255,255,255,0.12)"
                    />
                </g>
              </g>

              {/* subtle gloss */}
              <rect x="0" y="0" width="100" height="18" rx="9" ry="9" fill="url(#grad)" opacity="0.06" />
              <defs>
                <linearGradient id={`${uid}-grad`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>

        {/* Labels */}
        <div style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.94)" }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Loading</div>
          <div style={{ fontSize: 13, opacity: 0.8, marginTop: 6 }}>Pouring assets…</div>
        </div>
      </div>
    </div>
  );
}
