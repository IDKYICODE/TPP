import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import img from "../assets/Image.svg"

const testimonials = [
  {
    name: "Terry Dokidis",
    rating: 5,
    review:
      "FreshMart has transformed my grocery routine. The quality is unmatched, and the virtual cart feature is a game-changer. Highly recommended!",
  },
  {
    name: "Nolan Franci",
    rating: 4.5,
    review:
      "The real-time inventory is a lifesaver. Knowing what’s in stock makes my shopping quick and efficient. FreshMart has made grocery shopping stress-free.",
  },
  {
    name: "Kaylynn Culhane",
    rating: 4.5,
    review:
      "I love the personalized recommendations! FreshMart understands my preferences, and the promo alerts ensure I never miss a good deal. Fantastic service!",
  },
  {
    name: "Kaylynn Newman",
    rating: 4.5,
    review:
      "I love the personalized recommendations! FreshMart understands my preferences, and the promo alerts ensure I never miss a good deal. Fantastic service!",
  },
];



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const TestimonialCard = ({ name, rating, review }) => {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 flex flex-col items-center text-center transition-opacity duration-300 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'
                }`}>
        <div className="rounded-full p-4 mb-4"><img src={img} alt={name} /></div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex justify-center my-2 text-yellow-500">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <FaStar key={index} />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt />}
        </div>
        <p className="text-gray-600">{review}</p>
      </div>
    );
  };
  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTransitioning(false);
    }, 300); // Match the duration of the transition
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTransitioning(false);
    }, 300); // Match the duration of the transition
  };
  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + 3).concat(
    testimonials.slice(0, Math.max(0, 3 - (testimonials.length - currentIndex)))
  );

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-[#7B1816] mb-4">
        Customers Speak, Telengana Spicy Pickles Listens.
      </h2>
      <p className="text-gray-600 mb-8">
        Discover what our valued customers have to say about their FreshMart experiences.
        Read testimonials that reflect the satisfaction and delight of those who have chosen FreshMart for their grocery needs.
      </p>
      {/* <div className="flex justify-center gap-6">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div> */}
      <div className="flex justify-center gap-6 relative">
        {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-[#7B1816] hover:text-white" onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        <button className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-[#7B1816] hover:text-white" onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;