"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components for React
import { Navigation, Pagination, A11y } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css"; // Import Swiper's basic CSS
import "swiper/css/navigation"; // Import Swiper's navigation module CSS
import "swiper/css/pagination"; // Import Swiper's pagination module CSS
import "./reviews.css"; // Your custom CSS

const reviews = [
  {
    name: "Robert Brown",
    image: "/images/cats/phc1.jpg",
    rating: 5,
    review:
      "Adopting a Maine Coon from MainePaw was a wonderful experience. My kitten is healthy, playful, and has already become part of the family!",
  },
  {
    name: "Jane Smith",
    image: "/images/cats/phc2.webp",
    rating: 4,
    review:
      "I couldn’t be happier with my new Maine Coon. The team at MainePaw was super helpful and made the process easy and smooth.",
  },
  {
    name: "Alice Brown",
    image: "/images/cats/phc3.webp",
    rating: 5,
    review:
      "The customer support was excellent, and my kitten arrived in perfect health. I would highly recommend MainePaw to any cat lover.",
  },
  {
    name: "Michael Johnson",
    image: "/images/cats/phc4.jpeg",
    rating: 5,
    review:
      "The best decision I've ever made. My Maine Coon is everything I hoped for, and the adoption process was seamless.",
  },
  {
    name: "Dean Davis",
    image: "/images/cats/phc6.jpeg",
    rating: 4,
    review:
      "Adopting from MainePaw was a fantastic experience. My kitten is happy and healthy, and the delivery was timely.",
  },
  {
    name: "Emily Wilson",
    image: "/images/cats/phc5.webp",
    rating: 5,
    review:
      "MainePaw exceeded my expectations! My Maine Coon is adorable, and the team provided excellent care and communication throughout the process.",
  },
  {
    name: "Sarah Taylor",
    image: "/images/cats/phc7.jpg",
    rating: 4,
    review:
      "My Maine Coon kitten is a joy! The team was professional and caring, and I’d definitely recommend them to anyone looking to adopt.",
  },
  {
    name: "David Miller",
    image: "/images/cats/phc8.avif",
    rating: 5,
    review:
      "Outstanding service from MainePaw. My kitten is perfect, and they took great care in ensuring a smooth adoption process.",
  },
  {
    name: "Emily White",
    image: "/images/cats/phc9.jpg",
    rating: 5,
    review:
      "MainePaw provided me with the most amazing Maine Coon kitten. The whole experience was professional, and I’m very happy with my new furry friend.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]} // Pass the necessary modules here
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Show 1 slide per view by default
        navigation // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 }, // Show 2 slides on medium screens
          1024: { slidesPerView: 3 }, // Show 3 slides on larger screens
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <img src={review.image} alt={review.name} className="user-image" />
              <h3>{review.name}</h3>
              <div className="stars">
                {Array(review.rating)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
