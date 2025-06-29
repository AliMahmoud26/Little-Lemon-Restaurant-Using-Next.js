'use client';
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { testimonials } from '../data/Data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - testimonialsPerPage : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex, 
    currentIndex + testimonialsPerPage
  );

  // If we're at the end and don't have enough testimonials to fill the page
  if (visibleTestimonials.length < testimonialsPerPage) {
    const needed = testimonialsPerPage - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, needed));
  }

  return (
    <section className="py-22 px-4 md:px-8 lg:px-16 bg-[#EDEFEE] relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#222] mb-12">
          Testimonials
        </h1>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft className="text-black text-xl cursor-pointer" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
            aria-label="Next testimonials"
          >
            <FaChevronRight className="text-black text-xl cursor-pointer" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#a9c8be] p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100px, 100px"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#F4CE14] text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index * testimonialsPerPage ? 'bg-[#495E57]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;