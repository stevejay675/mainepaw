// src/components/services/services.js
"use client";
import React from "react";
import "./services.css"; // Import the CSS file for services
import { FaCogs, FaShippingFast, FaHeadphones } from "react-icons/fa"; // Import some icons
import { motion } from "framer-motion"; // Import framer-motion for animations

const Services = () => {
  const servicesData = [
    {
      icon: <FaCogs />,
      title: "Custom Solutions",
      description: "Tailored adoption solutions to meet your specific needs, including advice on selecting the perfect Maine Coon kitten for your home.",
    },
    {
      icon: <FaHeadphones />,
      title: "Professional Support",
      description: "Expert support available 24/7 to assist you with any questions about caring for your new kitten or the adoption process.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "We offer prompt delivery services for kitten supplies and accessories to ensure you are fully prepared for your new furry friend.",
    },
  ];
  
  

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Why choose Us</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
