import React from 'react';

interface CardProps {
    imageSrc: string;
}

const ClothsCard: React.FC<CardProps> = ({ imageSrc }) => {
    return (
        <div className="w-[206px] h-[233px] relative overflow-hidden group hover:scale-110 shadow-md hover:shadow-lg 
        transition-all duration-500 ease-in-out">
            {/* Card Image */}
            <img
                src={imageSrc}
                alt="Card Image"
                width={206}
                height={233}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center 
             justify-center opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out">
                <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    Cloths Card
                </h3>
            </div>
        </div>
    );
};

export default ClothsCard;