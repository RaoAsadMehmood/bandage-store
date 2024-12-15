import React from 'react';

interface CardProps {
    imageSrc: string;
}

const CLothsCard: React.FC<CardProps> = ({ imageSrc }) => {
    return (
        <div className="w-[206px] h-[233px] relative overflow-hidden hover:scale-110 active:scale-100 shadow-md hover:shadow-lg 
        transition-shadow duration-300">
            {/* Card Image */}
            <img
                src={imageSrc}
                alt="Card Image"
                width={206}
                height={233}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center
             justify-center opacity-0 hover:scale-110 active:scale-100  hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-xl">Cloths Card</h3>
            </div>
        </div>
    );
};

export default CLothsCard;