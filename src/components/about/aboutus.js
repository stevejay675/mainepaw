// src/components/about/AboutUs.js
"use client";
import React from "react";
import Image from "next/image"; // Next.js image import
import "./aboutus.css"; // Import CSS for About Us section

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={`images/cats/about.jpg`}
          width={400}
          height={500} 
          alt="About Us"
           className="about-image" />
        </div>

        {/* Title and Paragraph on the right */}
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
          At MainePaw, we believe that finding the perfect feline companion should be a delightful and trustworthy experience. Our mission is to connect you with the most majestic and affectionate Maine Coon kittens, raised with love and care, ensuring they grow into healthy, well-socialized companions.
          </p>
          <p>
          We partner with top breeders and delivery systems worldwide to ensure your new kitten arrives safely and promptly, no matter where you are. With our global reach and reliable delivery services, we cater to cat lovers across the USA, UK (England, London, Scotland), and Australia.
          </p>
          <p>
          With years of experience in kitten care and adoption, we provide personalized support throughout the adoption process, ensuring you receive a happy, healthy Maine Coon kitten. At MainePaw, we are committed to bringing you the joy of feline companionship and making your adoption journey seamless and stress-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
