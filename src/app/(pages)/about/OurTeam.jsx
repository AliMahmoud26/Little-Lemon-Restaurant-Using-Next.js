'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { teamMembers } from '../../data/Data';

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + membersPerPage >= teamMembers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? teamMembers.length - membersPerPage : prevIndex - 1
    );
  };

  const visibleMembers = teamMembers.slice(
    currentIndex, 
    currentIndex + membersPerPage
  );

  // If we're at the end and don't have enough members to fill the page
  if (visibleMembers.length < membersPerPage) {
    const needed = membersPerPage - visibleMembers.length;
    visibleMembers.push(...teamMembers.slice(0, needed));
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#EDEFEE] relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-12">
          Meet Our Team
        </h1>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
            aria-label="Previous team members"
          >
            <FaChevronLeft className="text-black text-xl" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-[#F4CE14] p-2 rounded-full z-10 hover:bg-[#e6c213] transition-colors"
            aria-label="Next team members"
          >
            <FaChevronRight className="text-black text-xl" />
          </button>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {visibleMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-[#a9c8be] p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-[#495E57] font-medium">{member.position}</p>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#F4CE14] text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 mb-3">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="bg-[#F4CE14] text-black px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(teamMembers.length / membersPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * membersPerPage)}
              className={`w-3 h-3 rounded-full ${currentIndex === index * membersPerPage ? 'bg-[#495E57]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;