import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface ArticleCardProps {
  imageSrc: string;
  altText: string;
  badgeText?: string;
  tags?: string[];
  title: string;
  description: string;
  date: string;
  comments: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  altText,
  badgeText = "",
  tags = [],
  title,
  description,
  date,
  comments,
}) => {
  return (
    <div className="w-[348px]  bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300 transform transition duration-500 ease-in-out hover:scale-110">
      <div className="relative w-full h-[220px]">
        <Image
          src={imageSrc}
          alt={altText}
          width={500} 
          height={220} 
          className="w-full h-full rounded-md"
        />

        {badgeText && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
            {badgeText}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow px-4 py-6">
        {/* Tags */}
        <div className="text-sm text-gray-500 space-x-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Meta Information */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-6">
          <div className="flex items-center space-x-2">
            <span>📅</span>
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>💬</span>
            <span>{comments} comments</span>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="self-start text-blue-500 font-semibold text-sm flex gap-2 items-center justify-center hover:underline ">
          Learn More <FaChevronRight size={16} />
        </button>
      </div>
    </div >
  );
};

export default ArticleCard;
