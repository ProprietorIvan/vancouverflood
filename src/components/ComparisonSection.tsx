import React, { useState, useEffect } from 'react';
import { Check, Phone, Mail, ArrowRight, Droplets } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

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
  schema: any;
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
      description: "Swift water removal services utilizing industry-leading equipment for immediate flood response across Greater Vancouver.",
      details: [
        {
          title: "Our Vancouver Process Includes:",
          points: [
            "24/7 emergency response across Vancouver",
            "Advanced flood water extraction",
            "Industrial-grade pumping systems",
            "Complete water removal service"
          ]
        }
      ],
      image: "/photos/homepage/2.jpg",
      orientation: "right",
      url: "flood-repair",
      schema: {
        "@type": "Service",
        "name": "Emergency Water Extraction Vancouver",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Vancouver Flood Restoration by Felicita Holdings"
        },
        "areaServed": {
          "@type": "City",
          "name": "Vancouver"
        }
      }
    },
    {
      title: "Structural Drying & Dehumidification",
      description: "Commercial-grade drying solutions to protect Vancouver properties from moisture damage and mold growth.",
      details: [
        {
          title: "Complete Vancouver Drying Process:",
          points: [
            "High-capacity air movement systems",
            "Commercial dehumidification equipment",
            "Advanced moisture monitoring",
            "Comprehensive structure drying"
          ]
        }
      ],
      image: "/photos/homepage/3.jpg",
      orientation: "left",
      url: "/services/structural-drying",
      schema: {
        "@type": "Service",
        "name": "Structural Drying Vancouver",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Vancouver Flood Restoration by Felicita Holdings"
        }
      }
    },
    {
      title: "Floor & Carpet Restoration",
      description: "Expert flooring restoration services for Vancouver homes and businesses affected by water damage.",
      details: [
        {
          title: "Vancouver Restoration Services Include:",
          points: [
            "Complete hardwood restoration",
            "Professional carpet cleaning/replacement",
            "Subfloor damage repair",
            "Custom tile restoration"
          ]
        }
      ],
      image: "/photos/homepage/4.jpg",
      orientation: "right",
      url: "/services/flooring",
      schema: {
        "@type": "Service",
        "name": "Floor & Carpet Water Damage Restoration Vancouver"
      }
    },
    {
      title: "Drywall & Paint Services",
      description: "Professional wall restoration and painting services for Vancouver's water-damaged properties.",
      details: [
        {
          title: "Complete Wall Restoration:",
          points: [
            "Water-damaged drywall removal",
            "Professional installation",
            "Vancouver texture matching",
            "Full interior repainting"
          ]
        }
      ],
      image: "/photos/homepage/7.jpg",
      orientation: "left",
      url: "/services/drywall",
      schema: {
        "@type": "Service",
        "name": "Drywall Water Damage Repair Vancouver"
      }
    },
    {
      title: "Mold Remediation",
      description: "Vancouver's trusted mold removal and prevention services for water-damaged properties.",
      details: [
        {
          title: "Vancouver Treatment Process:",
          points: [
            "Certified mold remediation",
            "Professional anti-microbial application",
            "Vancouver air quality testing",
            "Long-term prevention strategies"
          ]
        }
      ],
      image: "/photos/homepage/5.jpg",
      orientation: "right",
      url: "/services/mold",
      schema: {
        "@type": "Service",
        "name": "Mold Remediation Services Vancouver"
      }
    },
    {
      title: "Kitchen & Bath Restoration",
      description: "Expert restoration services for water-damaged kitchens and bathrooms in Vancouver properties.",
      details: [
        {
          title: "Vancouver Restoration Services:",
          points: [
            "Custom cabinet restoration",
            "Countertop repair services",
            "Complete plumbing inspection",
            "High-end fixture replacement"
          ]
        }
      ],
      image: "/photos/homepage/6.jpg",
      orientation: "left",
      url: "/services/kitchen-bath",
      schema: {
        "@type": "Service",
        "name": "Kitchen & Bathroom Water Damage Restoration Vancouver"
      }
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
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": service.schema
            }))
          })}
        </script>
      </Head>
      
      <div>
        {/* Contact Banner */}
        <div className="bg-gradient-to-b from-[#8B2635] to-[#6B1D29] w-full p-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Vancouver&apos;s 24/7 Emergency Flood Response Team
          </h1>
          
          <div className="flex justify-center">
            <Phone className="w-16 h-16 mb-6 text-white" />
          </div>
          
          {mounted && (
            <button
              onClick={() => copyToClipboard("+1 778-654-6742", true)}
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
                  '+1 778-654-6742'
                )}
              </div>
            </button>
          )}

          <h2 className="text-xl md:text-2xl text-stone-300 text-center mb-6">
            30-Minute Response Time • All Vancouver Areas
          </h2>

          {mounted && (
            <div className="flex justify-center">
              <button 
                onClick={() => copyToClipboard("info@vancouverflood.com", false)}
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
              <h1 className="text-5xl font-bold mb-6 text-[#1C1917]">Our Vancouver Restoration Process</h1>
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
                          alt={`${service.title} in Vancouver`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xl font-semibold bg-[#8B2635]/90 px-6 py-3 rounded-full">
                            View Vancouver Service Details
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
    </>
  );
};

export default ComparisonSection;