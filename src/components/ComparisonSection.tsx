import React, { useState, useEffect } from 'react';
import { Check, Phone, Mail, ArrowRight, Droplets } from 'lucide-react';
import Image from 'next/image';

interface ServiceDetail {
  title: string;
  points: string[];
}

interface Service {
  title: string;
  description: string;
  details: ServiceDetail[];
  image: string;
  orientation: 'left' | 'right';
  url: string;
}

const ComparisonSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services: Service[] = [
    {
      title: "Emergency Water Extraction",
      description: "Rapid water removal services with state-of-the-art equipment for immediate flood response.",
      details: [
        {
          title: "Our Process Includes:",
          points: [
            "Immediate emergency response",
            "Flood water removal",
            "Advanced pumping equipment",
            "Standing water elimination"
          ]
        }
      ],
      image: "/photos/homepage/2.jpg",
      orientation: "right",
      url: "flood-repair"
    },
    {
      title: "Structural Drying & Dehumidification",
      description: "Professional-grade drying solutions to prevent long-term structural damage.",
      details: [
        {
          title: "Complete Drying Process:",
          points: [
            "Industrial air movers",
            "Professional dehumidifiers",
            "Moisture tracking",
            "Complete dry-out service"
          ]
        }
      ],
      image: "/photos/homepage/3.jpg",
      orientation: "left",
      url: "/services/structural-drying"
    },
    {
      title: "Floor & Carpet Restoration",
      description: "Comprehensive flooring restoration services for all types of water-damaged surfaces.",
      details: [
        {
          title: "Restoration Services Include:",
          points: [
            "Hardwood floor repair/replacement",
            "Carpet cleaning/replacement",
            "Subfloor repair",
            "Tile restoration"
          ]
        }
      ],
      image: "/photos/homepage/4.jpg",
      orientation: "right",
      url: "/services/flooring"
    },
    {
      title: "Drywall & Paint Services",
      description: "Expert wall restoration and painting services to restore your space.",
      details: [
        {
          title: "Complete Wall Restoration:",
          points: [
            "Water-damaged wall removal",
            "New drywall installation",
            "Texture matching",
            "Complete repainting"
          ]
        }
      ],
      image: "/photos/homepage/7.jpg",
      orientation: "left",
      url: "/services/drywall"
    },
    {
      title: "Mold Remediation",
      description: "Professional mold removal and prevention services to ensure a healthy environment.",
      details: [
        {
          title: "Our Treatment Process:",
          points: [
            "Professional mold removal",
            "Anti-microbial treatment",
            "Air quality testing",
            "Prevention protocols"
          ]
        }
      ],
      image: "/photos/homepage/5.jpg",
      orientation: "right",
      url: "/services/mold"
    },
    {
      title: "Kitchen & Bath Restoration",
      description: "Specialized restoration services for water-damaged kitchens and bathrooms.",
      details: [
        {
          title: "Restoration Services:",
          points: [
            "Cabinet repair/replacement",
            "Countertop restoration",
            "Plumbing inspection/repair",
            "Fixture replacement"
          ]
        }
      ],
      image: "/photos/homepage/6.jpg",
      orientation: "left",
      url: "/services/kitchen-bath"
    }
  ];

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

  return (
    <div>
      {/* Contact Banner */}
      <div className="bg-gradient-to-b from-[#8B2635] to-[#6B1D29] w-full p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Brooklyn&apos;s 24/7 Emergency Flood Response Team
        </h1>
        
        <div className="flex justify-center">
          <Phone className="w-16 h-16 mb-6 text-white" />
        </div>
        
        {mounted && (
          <button
            onClick={() => copyToClipboard("+1 (833) 324-2818", true)}
            className="w-full text-center transition-transform duration-200"
          >
            <div 
              className={`text-4xl md:text-6xl font-black tracking-wider mb-8 text-center transition-colors duration-200 ${
                copiedPhone ? 'text-[#27AE60]' : 'text-white'
              }`}
              style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}
            >
              {copiedPhone ? (
                <div className="flex items-center justify-center gap-4">
                  <span>Copied!</span>
                  <Check className="w-8 h-8 md:w-12 md:h-12 animate-in fade-in duration-200" />
                </div>
              ) : (
                '+1 (833) 324-2818'
              )}
            </div>
          </button>
        )}

        <h2 className="text-xl md:text-2xl text-stone-300 text-center mb-6">
          60-Minute Response Time • All Brooklyn Neighborhoods
        </h2>

        {mounted && (
          <div className="flex justify-center">
            <button 
              onClick={() => copyToClipboard("office@floodbrooklyn.com", false)}
              className={`${
                copiedEmail 
                  ? 'bg-[#27AE60] text-white scale-95' 
                  : 'bg-white text-[#8B2635] hover:bg-stone-100'
              } px-8 py-2 font-medium rounded-full transition-all duration-300 flex items-center gap-2`}
            >
              {copiedEmail ? (
                <>
                  <span>Copied!</span>
                  <Check className="w-5 h-5 animate-in fade-in duration-200" />
                </>
              ) : (
                'Email Us'
              )}
            </button>
          </div>
        )}
      </div>

      {/* Services Section */}
      <section className="py-16 px-5 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 text-[#1C1917]">Our Restoration Process</h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#8B2635]" />
              <p className="text-lg text-[#44403C]">Professional Water Damage Solutions</p>
              <div className="h-px w-16 bg-[#8B2635]" />
            </div>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  service.orientation === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <a href={service.url} className="block cursor-pointer group">
                    <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xl font-semibold bg-[#8B2635]/90 px-6 py-3 rounded-full">
                          View Service Details
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4 text-[#1C1917]">{service.title}</h2>
                  <p className="text-lg text-[#44403C] mb-6">{service.description}</p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    {service.details.map((detail, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-[#1C1917] mb-4">{detail.title}</h3>
                        <ul className="space-y-3">
                          {detail.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-[#8B2635] flex-shrink-0 mt-1" />
                              <span className="text-[#44403C]">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={service.url}
                    className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A2230] transition-all duration-300 group mt-6"
                  >
                    Book Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonSection;