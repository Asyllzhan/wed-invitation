"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <style>{`
        @keyframes note-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-4px) scale(1.1); }
        }
        @keyframes pulse-out {
          0%   { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes pulse-out-2 {
          0%   { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .note-playing {
          animation: note-bounce 1.8s ease-in-out infinite;
        }
        .pulse-ring-1 {
          animation: pulse-out 1.8s ease-out infinite;
        }
        .pulse-ring-2 {
          animation: pulse-out-2 1.8s ease-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="fixed top-6 right-6 z-[100]">
        <audio ref={audioRef} loop src="/mus3.mp3" />

        <button
          onClick={togglePlay}
          className="relative w-14 h-14 flex items-center justify-center rounded-full"
          style={{
            background: "rgba(241, 216, 170, 0.15)",
            border: "1.5px solid #ffffff",
            backdropFilter: "blur(10px)",
            boxShadow: isPlaying
              ? "0 0 20px rgba(121, 118, 112, 0.3)"
              : "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          {/* Кольцо 1 */}
          {isPlaying && (
            <div
              className="pulse-ring-1 absolute inset-0 rounded-full"
              style={{ border: "1.5px solid #ffffff" }} /*b68b3c*/
            />
          )}

          {/* Кольцо 2 */}
          {isPlaying && (
            <div
              className="pulse-ring-2 absolute inset-0 rounded-full"
              style={{ border: "1px solid #ffffff" }}
            />
          )}

          {/* Нота или пауза */}
          {isPlaying ? (
            <span
              className="note-playing relative z-10 select-none"
              style={{
                fontSize: "26px",
                color: "#ffffff",
                lineHeight: 1,
                fontFamily: "serif",
                textShadow: "0 0 12px rgba(182,139,60,0.6)",
              }}
            >
              ♪
            </span>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#ffffff"
              className="relative z-10"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}