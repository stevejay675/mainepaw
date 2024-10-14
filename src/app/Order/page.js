// pages/order.js
import React from 'react';
import Image from 'next/image';
import './order.css'; // Import the global CSS file
import Newsletter from '@/components/newsletter/newsletter';
import Footer from '@/components/footer/Footer';
import ContactSection from '@/components/contact/contact';

const Order = () => {
  return (
    <>
      <div className="order-container">
        <section className="order-section">
          <ContactSection />
          <h1>How to Order</h1>
          <p>Ordering your Maine Coon kitten from MainePaw is simple, safe, and reliable. Follow these easy steps:</p>
          <ul className="order-steps">
            <li>Fill out the contact form with the kitten or breed preferences you want or</li>
            <li>1. Click on the floating message icon at the bottom right.</li>
            <li>2. Choose your preferred messaging platform (Telegram, Messenger, or Email).</li>
            <li>3. Message us with your kitten preference, along with your delivery details.</li>
            <li>4. Our team will confirm the order and arrange safe, secure delivery of your new companion.</li>
          </ul>
        </section>

        <section className="order-section">
          <h2>Our Categories</h2>
          <div className="product-grid">
            <div className="product">
              <Image src="/images/cats/cat1.jpg" alt="Maine Coon Kitten 1" width={200} height={150} />
              <h3>Maine Coon Kittens</h3>
              <p>We offer a range of adorable Maine Coon kittens, bred with love and care. Each kitten is vaccinated, healthy, and ready to find its forever home. Our kittens are known for their gentle, friendly personalities and majestic appearance.</p>
            </div>
            <div className="product">
              <Image src="/images/cats/cat.webp" alt="Kitten Care" width={200} height={150} />
              <h3>Kitten Care Packages</h3>
              <p>Ensure your new furry friend starts life in the best possible way with our kitten care packages. From high-quality food to grooming essentials, we provide everything you need to keep your Maine Coon kitten healthy and happy.</p>
            </div>
            <div className="product">
              <Image src="/images/cats/acc.jpg" alt="Kitten Accessories" width={200} height={150} />
              <h3>Kitten Accessories</h3>
              <p>We offer a wide selection of accessories to make your Maine Coon kitten feel right at home. From cozy beds to engaging toys, our accessories are designed to cater to your kitten's comfort and play needs.</p>
            </div>
          </div>
        </section>

        <section className="order-section">
          <h2>Why Choose MainePaw?</h2>
          <p>
            At MainePaw, we take pride in breeding and delivering healthy, well-socialized Maine Coon kittens to families across the globe. 
            Our focus is on the health, happiness, and longevity of each kitten, ensuring they are raised in a loving environment.
          </p>
          <p>
            With years of experience and dedication, we ensure every kitten meets the highest standards of care before becoming part of your family. 
            We also offer expert guidance and support to help you welcome your new companion.
          </p>
        </section>

        <section className="order-section">
          <h2>Payment Methods</h2>
          <p>We accept a variety of payment methods for your convenience:</p>
          <div className="payment-methods">
            <Image src="/images/paypal.png" alt="PayPal" width={60} height={60} />
            <Image src="/images/bank.jpg" alt="Bank Transfer" width={60} height={60} />
            <Image src="/images/btc.png" alt="Bitcoin" width={60} height={60} />
          </div>
        </section>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Order;
