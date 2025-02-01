import React, { useState } from "react";
import "../styles.css";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
  const handlePriv = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        -{testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePriv}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Testimonials;
