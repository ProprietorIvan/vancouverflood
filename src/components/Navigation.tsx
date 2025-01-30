import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({ currentPage, showActions = true, transparent }: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'Services', url: '/services' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className={`relative ${
      transparent 
        ? 'bg-transparent !absolute left-0 top-0 w-full z-50' 
        : 'bg-[#F5F4F0]'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-40 md:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-64 sm:w-80 md:w-48 h-20 sm:h-24 md:h-16">
              <Image 
                src="/logo1.png"
                alt='Brooklyn Flood Restoration'
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className='flex items-center gap-8'>
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url)
                  }}
                  className={`text-base font-medium hover:text-[#8B2635] transition-colors ${
                    transparent ? 'text-white hover:text-[#8B2635]' : 'text-stone-900'
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-black/5 transition-colors"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-stone-900'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${transparent ? 'stroke-white' : 'stroke-stone-900'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-stone-900 hover:bg-stone-100 rounded-xl transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;