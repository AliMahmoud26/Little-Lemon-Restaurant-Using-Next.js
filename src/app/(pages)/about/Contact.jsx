import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg w-xl max-md:w-full">
      <h3 className="text-3xl font-bold text-[#444] mb-2">Send Us a Message</h3>
      <p className="text-gray-600 mb-6">Please fill in the form below to get in touch with us</p>
      
      <form className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="first-name" 
              id="first-name" 
              placeholder='First name'
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
              required
            />
          </div>
          <div>
            <input 
              type="text" 
              name="last-name" 
              id="last-name" 
              placeholder='Last name'
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
              required
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email address'
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              name="phone-number" 
              id="phone-number" 
              placeholder='Phone Number'
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Message'
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
            required
          ></textarea>
        </div>

        {/* Footer */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="terms" 
              id="terms" 
              className="mr-2 h-4 w-4 text-[#F4CE14] focus:ring-[#F4CE14] border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I've read and agree with <span className="text-[#495E57] font-medium underline cursor-pointer">Terms and Service</span> and <span className="text-[#495E57] font-medium underline cursor-pointer">Privacy Policy</span>
            </label>
          </div>
          <button 
            type="submit"
            className="bg-[#F4CE14] w-40 hover:bg-[#e6c213] text-black font-bold p-2 mt-2 rounded-md transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;