import React from "react";
import { IoIosCheckmark } from "react-icons/io";

// Define the types for the card props
type Feature = {
  text: string;
  isAvailable: boolean;
};

type CardProps = {
  title: string;
  description: string;
  price: string;
  priceUnit: string;
  billingCycle: string;
  features: Feature[];
  buttonText: string;
  isHighlighted?: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  priceUnit,
  billingCycle,
  features,
  buttonText,
  isHighlighted,
}) => {
  return (
    <div
      className={`${
        isHighlighted ? "bg-myDark text-white" : "bg-white text-myDark"
      } flex flex-col justify-evenly w-[327px] h-[700px] border ${
        isHighlighted ? "border-myBlue" : "border-gray-200"
      } rounded-md shadow-lg transform transition duration-500 hover:scale-105`}
    >
      <h3 className="text-center font-bold text-[24px]">{title}</h3>
      <h5 className="text-center font-medium text-[14px]">{description}</h5>
      <div className="flex justify-center items-end space-x-2">
        <h2 className="text-center font-bold text-[40px] text-myBlue">{price}</h2>
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[24px] text-myBlue">{priceUnit}</h3>
          <h5 className="text-[14px] text-myGrey">{billingCycle}</h5>
        </div>
      </div>
      <div className="flex flex-col space-y-3 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 text-[14px] font-medium"
          >
            <IoIosCheckmark
              className={`w-6 h-6 rounded-full ${
                feature.isAvailable ? "bg-[#2DC071] text-white" : "bg-gray-300 text-gray-500"
              }`}
            />
            <span className={feature.isAvailable ? "" : "text-gray-400"}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      <button
        className={`w-[246px] h-[52px] rounded-md mx-auto mt-6 ${
          isHighlighted ? "bg-myBlue text-white" : "bg-myBlue text-white"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Create the CardsSection component to display all three cards
const CardsSection: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "FREE",
      description: "Organize across all apps by hand",
      price: "0",
      priceUnit: "$",
      billingCycle: "Per Month",
      features: [
        { text: "Unlimited product updates", isAvailable: true },
        { text: "1GB Cloud storage", isAvailable: false },
        { text: "Email and community support", isAvailable: false },
      ],
      buttonText: "Try for free",
    },
    {
      title: "STANDARD",
      description: "Organize across all apps by hand",
      price: "9.99",
      priceUnit: "$",
      billingCycle: "Per Month",
      features: [
        { text: "Unlimited product updates", isAvailable: true },
        { text: "Unlimited product updates", isAvailable: true },
        { text: "1GB Cloud storage", isAvailable: true },
        { text: "Email and community support", isAvailable: false },
      ],
      buttonText: "Try for free",
      isHighlighted: true,
    },
    {
      title: "PREMIUM",
      description: "Organize across all apps by hand",
      price: "19.99",
      priceUnit: "$",
      billingCycle: "Per Month",
      features: [
        { text: "Unlimited product updates", isAvailable: true },
        { text: "1GB Cloud storage", isAvailable: true },
        { text: "Email and community support", isAvailable: true },
      ],
      buttonText: "Try for free",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 px-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsSection;
