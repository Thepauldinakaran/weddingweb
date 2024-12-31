import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  const [shuffledImages, setShuffledImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...shuffledImages]
        .map((img) => ({ img, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ img }) => img);
      setShuffledImages(shuffled);
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffledImages]);

  return (
    <div className="flex flex-col lg:flex-row flex-1 items-center justify-between w-full h-screen p-3 md:p-8 bg-gradient-to-b from-[#2C3E50] to-[#4B244A]">
      <div className="absolute top-4 px-4 left-4">
        <h1 className="text-[45px] font-bold text-[#C5A880]">STudiO PicK</h1>
      </div>
      <div className="w-full pt-[20%] mt-[20%] lg:w-1/2 lg:mt-0 max-w-2xl text-center lg:p-10">
        <h4 className="text-[#C5A880] font-medium text-2xl">
          "Your Love, Our Lens"
        </h4>
        <h1 className="text-2xl lg:text-6xl mt-5 font-extrabold leading-tight text-[#FAF3E0]">
          "Celebrating love one click at a time"
        </h1>
        <p className="text-[#FAF3E0] mt-5">
          "Transforming the happiest moments of your life into memories that
          last forever."
        </p>
        <button className="rounded cursor-pointer bg-[#C48A91] px-6 py-3 mt-6 font-semibold text-white transition hover:shadow-lg hover:bg-[#800000]">
          Book Now
        </button>
      </div>

      {/* Right Grid of Images */}
      <motion.div
        className="top-[69%] left-0 pb-[10%] pr-2 pl-2 md:top-[60%] sm:left-0 w-full lg:w-1/2 grid grid-cols-4 gap-4 md:pt-[10%] md:pr-8 md:pl-8"
        style={{
          transform: "rotate(4deg)",
          transformOrigin: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {shuffledImages.map((image, index) => (
            <motion.div
              key={image}
              layout
              className="aspect-square overflow-hidden rounded-lg bg-[#333333]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Hero;
