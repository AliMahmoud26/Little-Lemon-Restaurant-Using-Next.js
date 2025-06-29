'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from '../data/Data';

const Menu = () => {
  return (
    <section className="py-32 px-4 md:px-8 mt-16 lg:px-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 lg:px-12 md:px-0">
          <h1 className="lg:text-4xl md:text-4xl max-sm:text-3xl font-bold mb-4 md:mb-0">This week's specials!</h1>
          <Link href="/menu">
            <button className="bg-[#F4CE14] hover:bg-[#e6c213] cursor-pointer text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
              Online Menu
            </button>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 justify-items-center mx-12">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="w-full max-w-xs bg-[#a9c8be] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative w-full" style={{ height: item.imageHeight}}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <span className="text-lg font-medium text-[#495E57]">{item.price}</span>
                </div>
                <p className="mb-6 text-gray-700">{item.description}</p>
                <button className="bg-[#F4CE14] hover:bg-[#e6c213] cursor-pointer text-black font-bold py-2 px-4 rounded transition-colors duration-300 w-full">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;