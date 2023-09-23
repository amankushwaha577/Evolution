"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Amrit",
    designation: "CEO, Paras Tierea",
    message:
      "Great experience with EvolutionNova.",
  },
  {
    id: 2,
    name: "Bhagwat",
    designation: "Manager, Paras Tierea",
    message:
      "Superb Great experience with EvolutionNova",
  },
  {
    id: 3,
    name: "Ankit",
    designation: "Chief Manager, Paras Tierea",
    message:
      "Cool",
  },
  {
    id: 3,
    name: "Rajesh",
    designation: "CTO, PQR Ltd.",
    message:
      "Amazing, Good Application with amazing feature",
  },
  {
    id: 3,
    name: "Anugrah",
    designation: "CTO, PQR Ltd.",
    message:
      "Superb Great experience with EvolutionNova",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">{testimonial.message}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
