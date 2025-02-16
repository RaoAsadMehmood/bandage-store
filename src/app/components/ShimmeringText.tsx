import React from "react";

const WavyGlowingText: React.FC = () => {
  return (
    <h1 className="text-lg font-bold text-white flex space-x-1">
      {"Follow Us and get a chance to win 80% off".split("").map((char, index) => (
        <span
          key={index}
          className="inline-block glowing-text"
          style={{
            animation: `wave 1s infinite ease-in-out`,
            animationDelay: `${index * 100}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default WavyGlowingText;
