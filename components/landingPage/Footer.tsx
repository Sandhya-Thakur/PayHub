// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: '#a9a9a9' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-black">PayHub</h2>
            <p className="text-gray-800">
              2021 © PayHub All rights reserved.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-800 hover:text-black">Home</Link></li>
              <li><Link href="/pricing" className="text-gray-800 hover:text-black">Pricing</Link></li>
              <li><Link href="/about" className="text-gray-800 hover:text-black">About us</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-black">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <ul className="space-y-3">
              <li><Link href="https://facebook.com" className="text-gray-800 hover:text-black">Facebook</Link></li>
              <li><Link href="https://instagram.com" className="text-gray-800 hover:text-black">Instagram</Link></li>
              <li><Link href="https://twitter.com" className="text-gray-800 hover:text-black">Twitter</Link></li>
              <li><Link href="https://linkedin.com" className="text-gray-800 hover:text-black">Linkedin</Link></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-800 hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-800 hover:text-black">Terms Of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Dark Bottom Bar */}
      <div className="h-4 bg-gray-800 mt-12"></div>
    </footer>
  );
};

export default Footer;