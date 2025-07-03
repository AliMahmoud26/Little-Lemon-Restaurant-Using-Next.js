'use client';
import React from 'react';
import Image from 'next/image';
import AboutImg1 from '../../../public/restauranfood.jpg';
import AboutImg2 from '../../../public/food1.avif';

const About = () => {
  return (
    <section className="py-20 px-4 max-md:px-8 lg:px-16 my-24 max-md:my-12 mx-40 max-sm:mx-2 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text Content */}
        <div className="text-[#495E57]">
          <h1 className="max-md:text-4xl lg:text-5xl font-bold text-[#F4CE14]">Little Lemon</h1>
          <span className="text-2xl md:text-3xl block mt-2">Chicago</span>
          <p className="mt-8 md:mt-12 leading-relaxed text-lg">
            Welcome to our family-owned Mediterranean restaurant, a place where tradition and innovation come together to create an unforgettable dining experience. Our story began with a simple yet profound dream: to share the rich heritage of Mediterranean cuisine with our community. Inspired by recipes passed down through generations, we've taken the flavors of our roots and infused them with a modern twist to appeal to today's adventurous food lovers. From the very beginning, our focus has been on crafting dishes that reflect the warmth and authenticity of our culture.
          </p>
        </div>

        {/* Images - Hidden on medium and smaller screens */}
        <div className="hidden lg:block relative h-[450px] w-[300px] ml-32">
          {/* First Image (bottom) */}
          <div className="absolute top-32 left-0 w-[300px] h-[450px]">
            <Image
              src={AboutImg1}
              alt="Restaurant food"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 1024px) 300px, 300px"
            />
          </div>
          
          {/* Second Image (top) */}
          <div className="absolute top-0 right-[-12rem] w-[300px] h-[450px]">
            <Image
              src={AboutImg2}
              alt="Mediterranean cuisine"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 1024px) 300px, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;