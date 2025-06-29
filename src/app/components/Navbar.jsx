'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../../../public/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/Data';
import Image from 'next/image';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  const toggleNavbar = () => setNavbarVisible(!navbarVisible);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <nav className="py-6 shadow-[0_0.125rem_0.25rem_-0.125rem_rgba(0,0,0,0.4)] lg:px-40">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <span 
            className="text-2xl relative cursor-pointer" 
            onClick={toggleNavbar}
          >
            <FaBars />
          </span>
          <ul 
            className={`fixed ${navbarVisible ? 'top-16' : '-top-full'} right-4 w-[90%] bg-[#a9c8be] shadow-[0_0.125rem_0.25rem_-0.125rem_rgba(0,0,0,0.4)] p-4 md:p-8 flex items-center flex-col gap-6 transition-all duration-300 ease-in-out z-[999] rounded-xl`}
          >
            <span 
              className='self-end mb-2 text-2xl cursor-pointer' 
              onClick={toggleNavbar}
            >
              <FaTimes />
            </span>
            {navLinks.map((link) => (
              <Link 
                href={link.path} 
                key={link.name}
                className="w-full text-center"
                onClick={toggleNavbar}
              >
                <li className="text-xl text-[#222] border-b-2 border-[#495E57] transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:border-[#EDEFEE] py-1">
                  {link.name}
                </li>
              </Link>
            ))}
            {isAuthenticated ? (
              <li 
                onClick={() => {
                  handleLogout();
                  toggleNavbar();
                }}
                className="text-xl text-[#222] border-b-2 border-[#495E57] transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:border-[#EDEFEE] py-1 w-full text-center"
              >
                Logout
              </li>
            ) : (
              <Link 
                href="/login" 
                className="w-full text-center"
                onClick={toggleNavbar}
              >
                <li className="text-xl text-[#222] border-b-2 border-[#495E57] transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:border-[#EDEFEE] py-1">
                  Login
                </li>
              </Link>
            )}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <li className="text-[#495E57] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#F4CE14]">
                {link.name}
              </li>
            </Link>
          ))}
          {isAuthenticated ? (
            <li 
              onClick={handleLogout}
              className="text-[#495E57] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#F4CE14]"
            >
              Logout
            </li>
          ) : (
            <Link href="/login">
              <li className="text-[#495E57] cursor-pointer transition-all duration-300 ease-in-out hover:text-[#F4CE14]">
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;