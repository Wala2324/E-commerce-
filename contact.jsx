import { useState } from 'react';

import Navbar from '../component/navbar'
import Footer from '../component/footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
        <Navbar />
      {/* Parallax Hero Section */}
      <div className="relative h-[20vh] flex items-center justify-center bg-fixed bg-center bg-contain" 
           style={{backgroundImage: "url('/1920x300.svg')"}}>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 shadow-lg my-10">
        <h2 className="text-2xl mb-8">Write something</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-2">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">Your Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-gray-600 mb-2">Company (optional)</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 mb-2">Something write*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="save-info"
              className="mr-2"
            />
            <label htmlFor="save-info" className="text-gray-600">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-8 rounded-md hover:bg-red-600 transition-colors inline-block"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.0557236276307!2d11.97183037680761!3d57.70779694774928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a2e8b4d8ab%3A0x4019078290e7ae0!2sStockholmsgatan%2C%20G%C3%B6teborg%2C%20Sweden!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;