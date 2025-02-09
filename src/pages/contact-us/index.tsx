import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Send, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    if (!mounted) return;
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (833) 324-2818",
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        copyToClipboard("+1 (833) 324-2818", true);
      }
    },
    {
      icon: Mail,
      title: "Email",
      content: "office@floodbrooklyn.com",
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        copyToClipboard("office@floodbrooklyn.com", false);
      }
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Sun: 7AM - 9PM",
      onClick: undefined
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "All Brooklyn Neighborhoods",
      onClick: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto">
            Let us help you with your next project
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className={`
                bg-white rounded-xl shadow-xl p-6 text-center 
                transform hover:-translate-y-1 transition-all duration-300
                ${item.onClick ? 'cursor-pointer hover:shadow-2xl' : ''}
              `}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B2635]/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-[#8B2635]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1C1917] mb-2">{item.title}</h3>
              {(copiedPhone && item.title === "Phone") || (copiedEmail && item.title === "Email") ? (
                <div className="flex items-center justify-center gap-2 text-[#27AE60]">
                  <span>Copied!</span>
                  <Check className="w-5 h-5" />
                </div>
              ) : (
                <p className={`${item.onClick ? 'text-[#8B2635]' : 'text-[#44403C]'}`}>
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1C1917] mb-4">
              Send Us a Message
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-12 bg-[#8B2635]" />
              <p className="text-[#44403C]">How can we help you today?</p>
              <div className="h-px w-12 bg-[#8B2635]" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1C1917] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C1917] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1C1917] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1C1917] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                required
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A2230] transition-all duration-300 group"
              >
                <Send className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;