'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './gallery.css';

const ImageGallery = () => {
  const images = [
    '/images/cats/gallery1.jpg',
    '/images/cats/cat17.png',
    '/images/cats/gallery3.webp',
    '/images/cats/gallery4.jpg',
    '/images/cats/gallery5.jpg',
  ];

  return (
    <div className="gallery-container">
      <h2>Our Company Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Image src={src} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
