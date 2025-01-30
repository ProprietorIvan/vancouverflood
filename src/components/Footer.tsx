import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-[#8B2635] to-[#6B1D29] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Brooklyn&apos;s Water Damage Experts
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Your trusted partner in flood and water damage restoration across Brooklyn. Our rapid response team is available 24/7 to protect your property from water damage, with cutting-edge equipment and proven restoration techniques.
            </p>
            <div className="text-stone-400 text-sm">
              <p>Locally owned and operated in Brooklyn</p>
              <p className="flex items-center gap-2 text-white mt-2">
                Licensed & Insured in New York State
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              OUR <span className="text-white">SERVICES</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <ul className="space-y-3 text-stone-300">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Water Damage Restoration</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Basement Flood Recovery</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Storm Damage Repair</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Mold Remediation</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Emergency Services</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              GET IN <span className="text-white">TOUCH</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <div className="text-stone-300 space-y-4">
              <div>
                <p className="font-semibold mb-2">Available:</p>
                <p className="text-white font-semibold">24 Hours a Day</p>
                <p className="text-white font-semibold">7 Days a Week</p>
                <p className="text-white font-semibold">365 Days a Year</p>
                <p className="mt-2 text-white font-semibold">Emergency Response Within 60 Minutes</p>
              </div>
              <div className="pt-4 border-t border-stone-700">
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                  <Phone size={16} />
                  <p>+1 (833) 324-2818</p>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                  <Mail size={16} />
                  <p>office@floodbrooklyn.com</p>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <MapPin size={16} />
                  <p>Brooklyn, NY</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Brooklyn Flood Restoration. ALL RIGHTS RESERVED</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors duration-300">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors duration-300">TERMS & CONDITIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;