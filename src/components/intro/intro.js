// src/components/intro/intro.js
"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { motion } from "framer-motion";
import "./intro.css";

// Image imports for Next.js (from the public directory)
const introData = [
  {
    image: "cats/cat1.jpg", // Image path inside the public folder
    title: "Maine Coon Kittens",
    description: "Discover our adorable Maine Coon kittens, known for their playful and loving nature.",
  },
  {
    image: "cats/cat2.jpg", // Image path inside the public folder
    title: "Fluffy Companions",
    description: "Our fluffy kittens are ready to join your family, bringing joy and companionship.",
  },
  {
    image: "cats/cat14.jpg", // Image path inside the public folder
    title: "Nurturing Love & Care",
    description: "We raise our kittens with love and care to ensure they grow into healthy, happy pets.",
  },
];

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-title">
          <h2>Meet Your Maine Coon</h2>
        </div>
        <div className="intro-grid">
          {introData.map((item, index) => (
            <motion.div
              key={index}
              className="intro-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={`images/${item.image}`}
                alt={item.title}
                width={400}
                height={300}
                className="intro-image"
              />
              <h3 className="intro-card-title">{item.title}</h3>
              <p className="intro-card-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
