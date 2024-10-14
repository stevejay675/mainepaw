// src/components/banner/banner.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import "./banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      {/* Background image */}
      <motion.div 
        className="banner-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Text Content */}
      <div className="banner-content">
        {/* Main Heading */}
        <motion.h1 
          className="banner-title"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1.2 }}
        >
          Welcome to MainePaw
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="banner-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Your one-stop kitty cat  addoption center
        </motion.p>

        {/* Call to Action Button */}
        <motion.span
          href="#about"
          className="banner-btn"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
         <Link href='/Order'> Order Now</Link>
        </motion.span>
      </div>
    </div>
  );
};

export default Banner;
