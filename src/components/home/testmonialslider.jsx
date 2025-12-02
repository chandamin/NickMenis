import React, { useState } from "react";
import icon1 from "../../assets/icon-1.png";

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
    {
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum...",
      name: "Name",
      role: "Designation",
      img: "/profile1.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="custom-testimonial-main">
      <div className="custom-testimonial-inner">
        <div className="custom-testimonial-flex">

          <h2 className="test-title">Our Testimonial</h2>
          <p className="test-subtitle">
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at its layout.
          </p>

          <div className="testimonial-slider-container">

            <button className="slide-arrow left" onClick={prevSlide}>‹</button>

            <div
              className="testimonial-slider"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "0.5s ease"
              }}
            >
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="stars">★★★★★</div>
                  <p className="test-text">{item.text}</p>

                  <div className="test-user">
                    <img src={icon1} alt="" />
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <button className="slide-arrow right" onClick={nextSlide}>›</button>
          </div>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? "dot active" : "dot"}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
