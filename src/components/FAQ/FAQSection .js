'use client';

import React, { useState } from 'react';
import './faq.css'; // Custom CSS for styling

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'What services do you offer?', answer: 'We specialize in the sale and adoption of Maine Coon kittens, ensuring they are healthy, socialized, and ready to join your family.' },
    { question: 'How can I adopt a kitten?', answer: 'You can adopt directly through our online platform or by contacting us via email, Telegram, or Facebook Messenger for assistance.' },
    { question: 'Do you offer delivery services?', answer: 'Yes, we offer safe and reliable delivery for your kittens both nationwide and internationally. Delivery times may vary depending on your location.' },
    { question: 'Can I track the delivery of my kitten?', answer: 'Yes, once your kitten is shipped, you will receive a tracking number via email to monitor their journey home.' },
    { question: 'Do you offer any health guarantees for the kittens?', answer: 'All of our Maine Coon kittens come with a health guarantee and a veterinary certificate to ensure their well-being.' },
    { question: 'How can I contact customer support?', answer: 'You can reach our support team through email, Telegram, or Messenger using the floating icon at the bottom right of the page.' },
    { question: 'What are your payment options?', answer: 'We accept all major credit cards, PayPal, cashapp, zelle, Gift Card and bank transfers to make the adoption process as easy as possible.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
