import React from 'react';
import Image from 'next/image';


interface ProductCardProps {
  imageSrc: string;
  productName: string;
  department: string;
  originalPrice: number;
  salePrice?: number;
  colors?: string[];
}

const ProductCard = ({ 
  imageSrc, 
  productName, 
  department, 
  originalPrice, 
  salePrice, 
  colors = ['#23A6F0', '#23856D', '#E77C40', '#252B42']  // Default colors
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center max-w-xs">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full aspect-[3/4] mb-6">
        <Image
          src={imageSrc}
          alt={productName}
          className="object-cover"
          width={239}
          height={427}
        //   sizes="(max-width: 768px) 100vw, 300px"
        //   priority
        />
      </div>

      {/* Product information */}
      <div className="flex flex-col items-center space-y-2.5 text-center">
        <h3 className="text-base font-bold text-[#252B42]">
          {productName}
        </h3>
        
        <p className="text-sm font-bold text-[#737373]">
          {department}
        </p>
        
        {/* Price section */}
        <div className="flex items-center space-x-2">
          <span className={`text-base font-bold ${salePrice ? 'text-[#737373] line-through' : 'text-[#252B42]'}`}>
            ${originalPrice.toFixed(2)}
          </span>
          
          {salePrice && (
            <span className="text-base font-bold text-[#23856D]">
              ${salePrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Color options */}
        {colors && (
          <div className="flex space-x-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full cursor-pointer hover:ring-2 hover:ring-offset-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;