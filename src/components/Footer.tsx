import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-[#8B2635] to-[#6B1D29] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Vancouver&apos;s Water Damage Experts
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Your trusted partner in flood and water damage restoration across
              the Lower Mainland. Our professional response team is available
              24/7 to protect your property with advanced equipment and proven
              restoration techniques.
            </p>
            <div className="text-stone-400 text-sm">
              <p>Locally owned and operated in Vancouver</p>
              <p className="flex items-center gap-2 text-white mt-2">
                <a
                  href="https://www.felicita.group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-stone-300 transition-colors duration-300"
                >
                  A Felicita Group Company{" "}
                  <ExternalLink size={14} className="ml-1" />
                </a>
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
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                <Link href="/water-damage-restoration-vancouver">
                  Water Damage Restoration
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                <Link href="/basement-flood-recovery">
                  Basement Flood Recovery
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                <Link href="/storm-damage-repair">Storm Damage Repair</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                <Link href="/mold-remediation-services-in-vancouver">
                  Mold Remediation
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">
                <Link href="/emergency-services">Emergency Services</Link>
              </li>
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
                <p className="mt-2 text-white font-semibold">
                  Emergency Response Within 1 Hour
                </p>
              </div>
              <div className="pt-4 border-t border-stone-700">
                <a
                  href="tel:+17786546742"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Phone size={16} />
                  <p>+1 778-654-6742</p>
                </a>
                <a
                  href="mailto:office@vancouverflood.com"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Mail size={16} />
                  <p>office@vancouverflood.com</p>
                </a>
                <a
                  href="https://maps.google.com/?q=828+Cardero+St,+Vancouver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <MapPin size={16} />
                  <p>828 Cardero St, Vancouver</p>
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://facebook.com/felicitaholdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com/felicitaholdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://instagram.com/felicitaholdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-700 hover:bg-white hover:text-[#8B2635] transition-all duration-300 rounded-lg"
                  aria-label="Instagram"
                >
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
              <p>
                © {new Date().getFullYear()} Vancouver Flood Restoration. ALL
                RIGHTS RESERVED
              </p>
            </div>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-300"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-300"
              >
                TERMS & CONDITIONS
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
