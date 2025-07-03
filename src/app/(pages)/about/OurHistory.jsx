'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { historyData } from '../../data/Data';

const OurHistory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 4; // Number of images to show at once

  // Flatten all gallery images into a single array for the slider
  const allImages = historyData.gallery.flatMap(column => column.images);

  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev + slidesPerView >= allImages.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev - 1 < 0 ? allImages.length - slidesPerView : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index * slidesPerView);
  };

  const visibleImages = allImages.slice(
    currentSlide,
    currentSlide + slidesPerView
  );

  // Handle case when we reach the end
  if (visibleImages.length < slidesPerView) {
    const needed = slidesPerView - visibleImages.length;
    visibleImages.push(...allImages.slice(0, needed));
  }

  return (
    <section className="lg:mt-50 max-md:-mt-6">
      {/* Our Story Section */}
      <div className="mt-0 md:-mt-8 max-md:px-8 pb-8 text-center">
        <h2 className="text-3xl font-bold text-[#F4CE14] uppercase relative mb-8">
          {historyData.story.title}
          <span className="hidden xl:block">
            <span className="absolute top-9 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F4CE14] rounded-[50%]"></span>
            <span className="absolute top-11 left-1/2 -translate-x-1/2 w-36 h-1 bg-[#F4CE14] rounded-[50%]"></span>
          </span>
        </h2>
        <p className="text-gray-800 leading-relaxed mx-32 max-md:mx-1 max-md:text-left">
          {historyData.story.content}
        </p>
      </div>

      {/* Gallery Slider Section */}
      <div className="relative mb-18 px-12 max-md:px-18">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
          aria-label="Previous images"
        >
          <FaChevronLeft className="text-black text-xl" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
          aria-label="Next images"
        >
          <FaChevronRight className="text-black text-xl" />
        </button>

        {/* Images Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => (
            <div 
              key={`img-${index}`}
              className="relative overflow-hidden rounded-md hover:scale-105 transition-transform duration-300"
              style={{ width: '350px', height: '350px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale-[60%] hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(allImages.length / slidesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index * slidesPerView ? 'bg-[#495E57]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurHistory;