import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const initialPositions = [
    {
      id: 1,
      x: 0,
      y: 0,
      rotate: 95,
      zIndex: 1,
      color: "bg-[#4B244A]", // Deep Plum
      image: false, // No image for this card
    },
    {
      id: 2,
      x: 10,
      y: 10,
      rotate: 85,
      zIndex: 2,
      color: "bg-[#C48A91]", // Dusty Rose
      image: false, // No image for this card
    },
    {
      id: 3,
      x: 20,
      y: 20,
      rotate: 10,
      zIndex: 3,
      color: "bg-[#FAF3E0]", // Ivory Cream
      image: false, // Image for this card
    },
  ];

  const [positions, setPositions] = useState(initialPositions);
  const containerRef = useRef(null);

  const handleDragEnd = (id) => {
    setPositions((prevPositions) =>
      prevPositions.map((card) =>
        card.id === id
          ? { ...card, x: 0, y: 0 } // Reset to original position
          : card
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#2C3E50] to-[#4B244A] px-6 sm:px-8 lg:px-12 xl:px-24 py-10 md:pb-[20%]">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#FAF3E0] text-center mb-12">
        About Us
      </h1>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-12 md:mt-[10%]">
        {/* Stacked Cards */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[90%] h-80 sm:h-[24rem] md:w-[350px] lg:w-[400px] xl:w-[500px] lg:h-[400px] xl:h-[500px] flex mb-10 lg:mb-0"
        >
          {positions.map((card) => (
            <motion.div
              key={card.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.5}
              whileDrag={{ scale: 1.1, zIndex: 100 }}
              animate={{
                x: card.x,
                y: card.y,
                rotate: card.rotate,
                zIndex: card.zIndex,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
              onDragEnd={() => handleDragEnd(card.id)}
              className={`absolute top-0 left-0 w-full h-full ${card.color} rounded-xl shadow-lg`}
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Text Content */}
        <div className="w-full max-w-lg text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FAF3E0]">
            Hello! I’m Kalai
          </h2>
          <p className="mt-4 text-[#FAF3E0] text-base sm:text-lg leading-relaxed">
            Welcome to [Your Team Name or Business Name]! We are a team of
            passionate wedding photographers who specialize in capturing the
            love, joy, and magic of your special day. With diverse talents and a
            shared vision, we work seamlessly together to document every moment
            – from candid smiles to heartfelt vows and everything in between.
            Our approach combines artistic storytelling with attention to
            detail, ensuring that no precious memory goes unnoticed.
          </p>
          <p className="mt-4 text-[#FAF3E0] text-base sm:text-lg leading-relaxed">
            Based in [Your Location], we’ve had the privilege of working with
            amazing couples across [Areas You Serve], crafting timeless images
            that you’ll treasure for a lifetime. Let us be a part of your
            journey and turn your most cherished moments into lasting memories.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#C48A91] text-white font-semibold rounded-md hover:bg-[#800000] transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
