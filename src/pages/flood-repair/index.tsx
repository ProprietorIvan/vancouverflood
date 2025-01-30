import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, Droplets, Clock, Shield, ArrowRight, AlertTriangle, CheckCircle2, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

const FloodRepair = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    emergency: '',
  });

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (833) 324-2818';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "60-Minute Response",
      description: "Fast emergency response across Brooklyn"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "20+ Years Experience",
      description: "Trusted flood restoration experts"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Advanced Equipment",
      description: "Professional-grade water extraction"
    }
  ];

  const benefits = [
    {
      title: "Respect & Customer Satisfaction",
      description: "Your satisfaction is our top priority. We focus on meeting your needs with exceptional service."
    },
    {
      title: "Transparent Pricing",
      description: "High-quality services at competitive rates with no hidden costs."
    },
    {
      title: "Professional Expertise",
      description: "Our skilled team delivers reliable repairs with a commitment to excellence."
    },
    {
      title: "Client-First Approach",
      description: "We enhance your property's value through meticulous repair and restoration."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation transparent />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
        <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Flood Response
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
              Emergency
              <span className="block text-[#8B2635]">Water Removal</span>
            </h1>
            <p className="text-xl text-[#44403C] max-w-2xl mx-auto">
              When disaster strikes, every minute counts. Our expert team arrives within 60 minutes to prevent further damage.
            </p>
          </div>

          {/* Emergency Call Button */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-6 rounded-full text-2xl font-bold hover:bg-[#7A2230] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-8 h-8" />
              <span>+1 (833) 324-2818</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-[#44403C] text-lg">
              Immediate Response • Free Estimates • Licensed & Insured
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#44403C]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Brooklyn&apos;s Most Trusted Flood Repair Experts</h2>
            <p className="text-lg text-[#44403C] leading-relaxed">
              When your property faces flood damage, you need a reliable partner for quick and effective repairs. Our team is dedicated to minimizing further damage and promptly starting the repair and reconstruction process. With over 20 years of experience in flood damage repair and property restoration, you can trust us to bring your home back to its original condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-stone-50 rounded-xl">
                <div className="flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-[#8B2635]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-[#44403C]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Form Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              Emergency Service Request
            </div>
            <h2 className="text-3xl font-bold mb-4">Get Immediate Assistance</h2>
            <p className="text-lg text-[#44403C]">
              For fastest service call: <span className="font-semibold">+1 (833) 324-2818</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1C1917] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1C1917] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#1C1917] mb-2">
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="emergency" className="block text-sm font-medium text-[#1C1917] mb-2">
                Describe Your Emergency
              </label>
              <textarea
                id="emergency"
                name="emergency"
                value={formData.emergency}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
            >
              Submit Emergency Request
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t Let Water Damage Spread
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Get a detailed flood damage restoration plan that ensures your property is clean, dry, and restored to its best condition.
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call For Immediate Help</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Post-Water Damage Repair Services</h2>
            <p className="text-lg text-[#44403C]">Expert restoration services to rebuild and protect your property</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/7.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Drywall Repair & Replacement</h3>
                <p className="text-[#44403C] mb-4">Expert restoration of water-damaged walls and ceilings, including insulation replacement and structural repairs.</p>
                <Link 
                  href="/services/drywall" 
                  className="text-[#8B2635] font-medium hover:text-[#7A2230] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/4.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Flooring Restoration</h3>
                <p className="text-[#44403C] mb-4">Complete repair and replacement of water-damaged floors, including hardwood, carpet, tile, and subfloor restoration.</p>
                <Link 
                  href="/services/flooring" 
                  className="text-[#8B2635] font-medium hover:text-[#7A2230] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-[url('/photos/homepage/5.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Mold Prevention & Removal</h3>
                <p className="text-[#44403C] mb-4">Professional remediation and preventive treatment to ensure your space stays mold-free after water damage repairs.</p>
                <Link 
                  href="/services/mold" 
                  className="text-[#8B2635] font-medium hover:text-[#7A2230] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-[#8B2635] font-semibold hover:text-[#7A2230] transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloodRepair;