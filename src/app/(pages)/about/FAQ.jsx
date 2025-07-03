'use client';
import React, { useState } from 'react';
import Contact from './Contact';
import { restaurantFAQs } from '../../data/Data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="pt-8 -mb-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form Section */}
          <div className="lg:w-1/2">
            <Contact />
          </div>

          {/* FAQ Section */}
          <div className="lg:order-1 w-4xl max-md:w-full mt-5">
            <h2 className="text-3xl font-bold text-[#444] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {restaurantFAQs.map((faq) => {
                const { id, question, answer } = faq;
                const isOpen = openId === id;

                return (
                  <div 
                    key={id}
                    className="border border-[#a9c8be] rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <button
                      className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
                      onClick={() => setOpenId(isOpen ? null : id)}
                      aria-expanded={isOpen}
                    >
                      <h4 className="text-lg font-medium text-[#333]">{question}</h4>
                      <span className="text-[#495E57] text-xl">
                        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-[#a9c8be] max-w-150">
                        <p className="text-gray-700">{answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;