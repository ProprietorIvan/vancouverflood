import React, { useState, useEffect } from "react";
import { Check, Phone, Mail, ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

const Services = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "Flood Restoration",
      description:
        "Professional flood damage restoration services in Vancouver, offering comprehensive recovery solutions for residential and commercial properties affected by flooding.",
      details: [
        "Complete property damage assessment",
        "Professional water damage mitigation",
        "Structural integrity evaluation",
        "Full restoration and reconstruction",
      ],
      image: "/photos/homepage/2.jpg",
      url: "/flood-repair-services-in-vancouver",
    },
    {
      title: "Water Extraction",
      description:
        "Emergency water extraction services in Vancouver utilizing advanced equipment for immediate water removal and damage prevention.",
      details: [
        "24/7 emergency water removal",
        "High-powered extraction equipment",
        "Basement flood pumping",
        "Surface water elimination",
      ],
      image: "/photos/homepage/3.jpg",
      url: "/water-extraction",
    },
    {
      title: "Drying and Dehumidification",
      description:
        "Professional structural drying and dehumidification services in Vancouver, preventing secondary damage and ensuring complete moisture removal.",
      details: [
        "Industrial dehumidification systems",
        "Strategic air movement planning",
        "Moisture content monitoring",
        "Temperature-controlled drying",
      ],
      image: "/photos/homepage/4.jpg",
      url: "/drying-and-dehumidification",
    },
    {
      title: "Structural Repair",
      description:
        "Expert structural repair services in Vancouver for water-damaged buildings, ensuring safe and complete restoration of affected areas.",
      details: [
        "Comprehensive structural assessment",
        "Foundation repair solutions",
        "Load-bearing wall restoration",
        "Complete structural reinforcement",
      ],
      image: "/photos/homepage/7.jpg",
      url: "/structural-repair-services-in-vancouver",
    },
    {
      title: "Mold Remediation",
      description:
        "Professional mold removal and remediation services in Vancouver, addressing water damage-related mold growth with comprehensive solutions.",
      details: [
        "Professional mold inspection",
        "Complete containment protocols",
        "Safe mold removal procedures",
        "Prevention and protection measures",
      ],
      image: "/photos/homepage/5.jpg",
      url: "/mold-remediation-services-in-vancouver",
    },
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
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1C1917] pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vancouver&apos;s 24/7 Emergency
              <br />
              Flood Response Team
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <button
                onClick={() => copyToClipboard("+1 778-654-6742", true)}
                className={`${
                  copiedPhone
                    ? "bg-[#27AE60] scale-95"
                    : "bg-[#8B2635] hover:bg-[#7A2230]"
                } px-8 py-3 rounded-lg transition-all duration-300 group min-w-[240px]`}
              >
                {copiedPhone ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-white font-bold">+1 778-654-6742</div>
                )}
              </button>
              <button
                onClick={() =>
                  copyToClipboard("office@vancouverflood.com", false)
                }
                className={`${
                  copiedEmail
                    ? "bg-[#27AE60] scale-95"
                    : "bg-white hover:bg-stone-100"
                } px-8 py-3 rounded-lg transition-all duration-300 min-w-[240px]`}
              >
                {copiedEmail ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-[#1C1917] font-bold">Email Us</div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-video relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917] group-hover:text-[#8B2635] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#44403C] mb-4">{service.description}</p>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#8B2635] flex-shrink-0 mt-1" />
                        <span className="text-[#44403C]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() =>
                      setExpandedService(
                        expandedService === index ? null : index
                      )
                    }
                    className="text-[#8B2635] hover:text-[#7A2230] transition-colors flex items-center gap-1"
                  >
                    {expandedService === index ? (
                      <>
                        <Minus className="w-4 h-4" />
                        <span>Less Info</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>More Info</span>
                      </>
                    )}
                  </button>

                  <a
                    href={service.url}
                    className="inline-flex items-center gap-1 text-[#8B2635] hover:text-[#7A2230] transition-colors"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
