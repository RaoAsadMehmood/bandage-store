import Link from "next/link";
import React, { useState } from "react";

interface Feature {
  id: string;
  text: string;
  isChecked: boolean;
  textColor: string;
}

interface PricingCardProps {
  planName: string;
  cardColor: string;
  price: number;
  textColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, cardColor, price, textColor }) => {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: "1",
      text: "Unlimited product updates",
      isChecked: true,
      textColor: textColor,
    },
    {
      id: "2",
      text: "1GB Cloud storage",
      isChecked: false,
      textColor: textColor,
    },
    {
      id: "3",
      text: "Email and community support",
      isChecked: false,
      textColor: textColor,
    },
    {
      id: "4",
      text: "Unlimited Products update",
      isChecked: false,
      textColor: textColor,
    },
    {
      id: "5",
      text: "Unlimited Products update",
      isChecked: false,
      textColor: textColor,
    },
  ]);

  const toggleFeature = (id: string) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id
          ? { ...feature, isChecked: !feature.isChecked }
          : feature
      )
    );
  };

  return (
    <div
      className="w-[300px] min-h-[600px] px-7 py-8 rounded-lg border border-[#23A6F0] flex flex-col transform transition duration-500 hover:scale-105"
      style={{ backgroundColor: cardColor }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 
          className="text-2xl font-bold mb-2" 
          style={{ color: textColor }}
        >
          {planName}
        </h3>
        <p 
          className="text-sm opacity-70"
          style={{ color: textColor }}
        >
          Organize across all apps by hand
        </p>
      </div>

      {/* Price */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-start">
          <span className="text-[#23A6F0] text-4xl font-bold">{price}</span>
          <div className="flex flex-col items-start ml-1">
            <span className="text-[#23A6F0] text-xl font-bold">$</span>
            <span 
              className="text-sm -mt-1" 
              style={{ color: textColor }}
            >
              Per Month
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow space-y-5 mb-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => toggleFeature(feature.id)}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                feature.isChecked ? "bg-[#2DC071]" : "bg-gray-400"
              }`}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span
              className="text-sm"
              style={{ color: feature.isChecked ? textColor : "gray" }}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link href="" className="mt-auto">
        <button className="w-full bg-[#23A6F0] text-white py-4 hover:bg-[#2d96d3] rounded-lg transition-transform transform hover:translate-y-0 active:translate-y-1 ">
          Try for free
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;