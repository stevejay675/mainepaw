"use client";

import React, { useState } from "react";
import "./blog.css";
import { FaCalendarAlt, FaUser, FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TelegramChatWidget from "@/components/widget/TelegramChatWidget";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";

const blogs = [
  {
    id: 1,
    title: "Essential Kitty Care Tips",
    date: "October 1, 2024",
    author: "Emma Taylor",
    image: "/images/cats/b1.jpg",
    description: "Discover essential care tips to ensure your kitty stays healthy and happy.",
    fullText:
      "Taking care of your kitty involves a balanced diet, regular vet visits, and a lot of affection. Make sure your kitty gets plenty of playtime, a clean litter box, and a comfortable sleeping area. Groom your cat regularly to avoid fur matting, and keep an eye on its health for any changes.",
    views: "2K",
  },
  {
    id: 2,
    title: "Choosing the Best Cat Toys for Your Kitty",
    date: "September 28, 2024",
    author: "John Doe",
    image: "/images/cats/b2.jpg",
    description: "Find out which toys your kitty will love the most and why play is essential.",
    fullText:
      "Cats love interactive toys, especially those that mimic their natural hunting instincts. Feather toys, laser pointers, and even DIY options like cardboard boxes can keep your cat entertained for hours. Rotate toys regularly to keep your kitty engaged and mentally stimulated.",
    views: "1.5K",
  },
  {
    id: 3,
    title: "Top Kitty Grooming Products",
    date: "September 25, 2024",
    author: "Sarah Smith",
    image: "/images/cats/b3.webp",
    description: "A guide to the best grooming products for keeping your kitty's fur shiny and healthy.",
    fullText:
      "Brushing your kitty regularly prevents hairballs and keeps its coat shiny and healthy. Look for grooming tools like slicker brushes and deshedding tools. Cat-friendly shampoos are also important, especially for long-haired breeds that might need a little extra care.",
    views: "1.2K",
  },
  {
    id: 4,
    title: "How to Create the Perfect Kitty Space",
    date: "September 20, 2024",
    author: "James Green",
    image: "/images/cats/b4.jpg",
    description: "Learn how to design the perfect home environment for your kitty.",
    fullText:
      "Creating a kitty-friendly space includes comfy bedding, designated play areas, and high perches for your cat to observe the world. Consider investing in scratching posts and cozy hideouts where your cat can feel safe and relaxed. The more stimulating the environment, the happier your kitty will be.",
    views: "1.4K",
  },
  {
    id: 5,
    title: "Healthy Diet Tips for Your Kitty",
    date: "September 15, 2024",
    author: "Emily White",
    image: "/images/cats/b5.png",
    description: "Explore the best dietary practices for ensuring your kitty’s health.",
    fullText:
      "A balanced diet is crucial for your kitty's health. Ensure that the food is high in protein and includes essential vitamins and minerals. Wet food is important for hydration, while dry food can support dental health. Always provide fresh water and consult your vet for specific dietary needs.",
    views: "1K",
  },
  {
    id: 6,
    title: "Are Automated Kitty Feeders Worth It?",
    date: "September 10, 2024",
    author: "Mike Brown",
    image: "/images/cats/b6.webp",
    description: "Find out if investing in an automated feeder is the right choice for you and your kitty.",
    fullText:
      "Automated feeders offer convenience, especially if you're away from home often. They help manage portion control and ensure your kitty is fed on a regular schedule. However, make sure the feeder is reliable and easy to clean. It's always good to test it while you're home to ensure it works correctly.",
    views: "1.8K",
  },
  {
    id: 7,
    title: "Kitty Health Checkups: What You Need to Know",
    date: "September 5, 2024",
    author: "Laura Green",
    image: "/images/cats/b7.jpeg",
    description: "Learn what to expect during your kitty’s vet visits and how to prepare.",
    fullText:
      "Regular vet checkups are essential for your kitty's health. These visits help identify any health issues early on and ensure your cat is up-to-date on vaccinations. Before going, make sure your cat is comfortable in its carrier and bring a list of any concerns you might have about your kitty's behavior or health.",
    views: "1.7K",
  },
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-page">
      <Navbar />
      <header className="blog-header">
        <h1 data-aos="fade-down">Our Latest Kitty Blogs</h1>
        <p data-aos="fade-up">Your go-to resource for everything kitty-related.</p>
      </header>

      <section className="blog-container">
        {blogs.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => handleBlogClick(blog)}
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <div className="blog-meta">
                <FaCalendarAlt /> <span>{blog.date}</span>
                <FaUser /> <span>{blog.author}</span>
                <FaEye /> <span>{blog.views}</span>
              </div>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </section>

      {selectedBlog && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>{selectedBlog.title}</h2>
            <p><strong>{selectedBlog.date}</strong> by {selectedBlog.author}</p>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="popup-image" />
            <p className="full-text">{selectedBlog.fullText}</p>
          </div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPage;
