'use client';
import React from 'react';
import Image from 'next/image';
import { historyData } from '../../data/Data';

const OurHistory = () => {
  return (
    <section className="lg:mt-50 max-md:-mt-6">
      {/* Our Story Section */}
      <div className="mt-0 md:-mt-8 max-md:px-8 pb-8 text-center">
        <h2 className="text-3xl font-bold text-purple-600 uppercase relative mb-8">
          {historyData.story.title}
          <span className="hidden xl:block">
            <span className="absolute top-9 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-600 rounded-[50%]"></span>
            <span className="absolute top-11 left-1/2 -translate-x-1/2 w-36 h-1 bg-purple-600 rounded-[50%]"></span>
          </span>
        </h2>
        <p className="text-gray-800 leading-relaxed mx-32 max-md:mx-1 max-md:text-left">
          {historyData.story.content}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid mb-18 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:px-8">
        {historyData.gallery.map((column) => (
          <div 
            key={`col-${column.col}`} 
            className={`flex flex-col gap-4 ${
              column.col === 2 ? '-ml-0' : 
              column.col === 3 ? 'mr-0' : 
              column.col === 4 ? 'ml-0' : ''
            }`}
          >
            {column.images.map((image, idx) => (
              <div 
                key={`img-${column.col}-${idx}`}
                className="relative overflow-hidden rounded-md hover:scale-105 transition-transform duration-300"
                style={{ width: `${image.width}px`, height: `${image.width}px` }}
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
        ))}
      </div>
    </section>
  );
};

export default OurHistory;