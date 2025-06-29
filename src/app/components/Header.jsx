'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const handleReservationClick = () => {
    router.push('/reservation');
  };

  return (
    <div>
      <Navbar />
      {/* Background Section */}
      <section className="relative min-h-[70vh] w-full lg:px-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/restaurant-1.jpg"
            alt="Restaurant background"
            fill
            className="object-cover"
            quality={80}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text contrast */}
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto flex h-full items-center justify-between px-4 py-16 md:px-6">
          <div className="max-w-lg text-white pt-16">
            <h1 className="lg:text-5xl font-bold text-[#F4CE14] md:text-4xl">Little Lemon</h1>
            <h4 className="my-5 text-2xl md:text-2xl font-bold">Chicago</h4>
            <p className="lg:text-[1rem] my-6 md:my-4 md:text-sm">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <button
              className="rounded cursor-pointer bg-[#F4CE14] px-4 py-2 mt-4 font-bold text-[#222] text-xl transition-colors duration-300 hover:bg-[#e6c213]"
              onClick={handleReservationClick}
            >
              Reserve Table
            </button>
          </div>
          
          <div className="hidden lg:block  w-[300px] h-[250px]">
            <Image
              src="/restauranfood.jpg"
              alt="Restaurant interior"
              width={300}
              height={250}
              className="rounded-xl object-cover mt-12"
              quality={80}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;