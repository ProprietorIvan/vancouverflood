import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

interface ContactButtonProps {
  textToCopy: string;
  displayText: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  textToCopy,
  displayText,
  href,
  icon,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <a
      href={href}
      onClick={handleCopy}
      className={`relative flex items-center gap-3 w-full transition-colors ${className}`}
    >
      {icon}
      <div className="flex-1 min-w-0">
        <span className="block font-medium truncate">{displayText}</span>
      </div>
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#8B2635] text-white text-xs">
          Copied!
        </div>
      )}
    </a>
  );
};

const Navigation: React.FC<NavigationProps> = ({ showActions = true }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomepage = router.pathname === "/" || router.pathname === "";

  const phoneNumber = "+1 778-654-6742";
  const phoneNumberClean = "+17786546742";
  const email = "office@vancouverflood.com";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    if (!isHomepage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomepage]);

  const navLinks = isHomepage
    ? [{ text: "Services", url: "/services" }]
    : [
        { text: "Home", url: "/" },
        { text: "Services", url: "/services" },
      ];

  const navClasses = isHomepage
    ? "w-full z-50 absolute top-0 left-0 bg-transparent"
    : `w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-[#8B2635] shadow-lg" : "bg-white"
      }`;

  return (
    <nav className={navClasses}>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="relative h-20 w-72">
              <Image
                src="/logo1.png"
                alt="Vancouver Flood Restoration"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`absolute right-4 p-2 transition-colors ${
              isScrolled && !isHomepage
                ? "text-white hover:text-stone-200"
                : "text-[#1C1917] hover:text-[#8B2635]"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white">
            <div className="px-4 py-3 bg-[#F5F4F0] space-y-2">
              <ContactButton
                textToCopy={phoneNumber}
                displayText={phoneNumber}
                href={`tel:${phoneNumberClean}`}
                icon={
                  <div className="flex items-center justify-center w-10 h-10 bg-[#8B2635] rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                }
                className="text-[#1C1917] hover:text-[#8B2635]"
              />
              <ContactButton
                textToCopy={email}
                displayText={email}
                href={`mailto:${email}`}
                icon={
                  <div className="flex items-center justify-center w-10 h-10 bg-[#8B2635] rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                }
                className="text-[#1C1917] hover:text-[#8B2635]"
              />
            </div>
            <div className="border-t border-stone-100">
              {navLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="block px-4 py-3 text-[#1C1917] hover:bg-[#F5F4F0]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="relative h-24 w-96">
              <Image
                src="/logo1.png"
                alt="Vancouver Flood Restoration"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links and Contact */}
          <div className="flex-1 flex items-center justify-end gap-12 pr-8">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`text-base font-medium transition-colors ${
                  isHomepage
                    ? "text-white hover:text-[#8B2635]"
                    : isScrolled
                    ? "text-white hover:text-stone-200"
                    : "text-[#1C1917] hover:text-[#8B2635]"
                }`}
              >
                {link.text}
              </Link>
            ))}

            <div className="flex items-center gap-8 pl-8 border-l border-stone-200">
              <ContactButton
                textToCopy={phoneNumber}
                displayText={phoneNumber}
                href={`tel:${phoneNumberClean}`}
                icon={<Phone className="w-5 h-5" />}
                className={
                  isHomepage
                    ? "text-white hover:text-[#8B2635]"
                    : isScrolled
                    ? "text-white hover:text-stone-200"
                    : "text-[#1C1917] hover:text-[#8B2635]"
                }
              />
              <ContactButton
                textToCopy={email}
                displayText={email}
                href={`mailto:${email}`}
                icon={<Mail className="w-5 h-5" />}
                className={
                  isHomepage
                    ? "text-white hover:text-[#8B2635]"
                    : isScrolled
                    ? "text-white hover:text-stone-200"
                    : "text-[#1C1917] hover:text-[#8B2635]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
