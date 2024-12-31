import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CornerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger / Close Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[100] w-14 h-14 bg-[#C48A91] rounded-[20%] shadow-lg flex justify-center items-center focus:outline-none"
      >
        <motion.div
          className="relative w-20 h-20 flex justify-center items-center"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {/* Top Line */}
          <motion.div
            className="absolute w-10 h-1 bg-[#FAF3E0] rounded"
            initial={{ rotate: 0, top: "35%" }}
            animate={
              isOpen ? { rotate: 45, top: "50%" } : { rotate: 0, top: "35%" }
            }
            transition={{ duration: 0.3 }}
          />
          {/* Middle Line */}
          <motion.div
            className="absolute w-10 h-1 bg-[#FAF3E0] rounded"
            initial={{ opacity: 1 }}
            animate={
              isOpen ? { rotate: -45, opacity: 0 } : { rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
          />
          {/* Bottom Line */}
          <motion.div
            className="absolute w-10 h-1 bg-[#FAF3E0] rounded"
            initial={{ rotate: 0, bottom: "35%" }}
            animate={
              isOpen
                ? { rotate: -45, bottom: "50%" }
                : { rotate: 0, bottom: "35%" }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Circular Overlay */}
      <motion.div
        className="fixed top-4 right-4 w-14 h-14 bg-[#4B244A] rounded-full z-30"
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 150 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      {/* Fullscreen Menu Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 bg-[#4B244A] flex flex-col justify-center items-center text-[#FAF3E0] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Navigation Links */}
            <div className="flex flex-col space-y-8 text-4xl font-bold uppercase text-center">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.1, color: "#C48A91" }}
                className="hover:text-[#C48A91]"
              >
                home.
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.1, color: "#C48A91" }}
                className="hover:text-[#C48A91]"
              >
                about.
              </motion.a>
              <motion.a
                href="#blog"
                whileHover={{ scale: 1.1, color: "#C48A91" }}
                className="hover:text-[#C48A91]"
              >
                gallery.
              </motion.a>
              <motion.a
                href="#careers"
                whileHover={{ scale: 1.1, color: "#C48A91" }}
                className="hover:text-[#C48A91]"
              >
                contact.
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="absolute bottom-16 flex space-x-6 text-2xl">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#C48A91" }}
                className="hover:opacity-80"
              ></motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#C48A91" }}
                className="hover:opacity-80"
              ></motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#C48A91" }}
                className="hover:opacity-80"
              ></motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, color: "#C48A91" }}
                className="hover:opacity-80"
              ></motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CornerNav;
