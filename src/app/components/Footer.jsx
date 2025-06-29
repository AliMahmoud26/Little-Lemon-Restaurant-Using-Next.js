'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '../data/Data';

const Footer = () => {
  return (
    <footer className="bg-[#a9c8be] shadow-[0_0.125rem_0.25rem_-0.125rem_rgba(0,0,0,0.4)] lg:px-28 pt-20 pb-8 max-md:px-6 mt-40 max-md:mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Description */}
          <div className="space-y-4">
            <Image 
              src={footerData.description.logo} 
              alt="Little Lemon Logo" 
              width={200} 
              height={50}
              className="w-48"
            />
            <p className="text-gray-700 leading-relaxed">
              {footerData.description.text}
            </p>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Important Links</h2>
            <ul className="space-y-2">
              {footerData.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Contact</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">{footerData.contact.address}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Phone:</p>
                <p className="text-gray-600">{footerData.contact.phone}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Email:</p>
                <p className="text-gray-600">{footerData.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Social Media Links</h2>
            <div className="space-y-2">
              {footerData.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-purple-600 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-300">
          <p className="text-gray-700">
            {footerData.copyright.text}{' '}
            <a 
              href={footerData.copyright.authorUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              {footerData.copyright.author}
            </a>{' '}
            {footerData.copyright.year}, {footerData.copyright.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;