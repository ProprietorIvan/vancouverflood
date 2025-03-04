import React, { useState, useEffect } from "react";
import { Check, Phone, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Head from "next/head";

interface ServiceDetail {
  title: string;
  points: string[];
}

interface Service {
  title: string;
  description: string;
  details: ServiceDetail[];
  image: string;
  orientation: "left" | "right";
  url: string;
  schema: any;
}

const ComparisonSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services: Service[] = [
    {
      title: "Flood Restoration",
      description:
        "Professional flood damage restoration services in Vancouver, offering comprehensive recovery solutions for residential and commercial properties affected by flooding.",
      details: [
        {
          title: "Our Vancouver Restoration Process:",
          points: [
            "Complete property damage assessment",
            "Professional water damage mitigation",
            "Structural integrity evaluation",
            "Full restoration and reconstruction",
          ],
        },
      ],
      image: "/photos/homepage/2.jpg",
      orientation: "right",
      url: "/flood-repair-services-in-vancouver",
      schema: {
        "@type": "Service",
        name: "Flood Restoration Vancouver",
        provider: {
          "@type": "LocalBusiness",
          name: "Vancouver Flood Restoration by Felicita Holdings",
        },
      },
    },
    {
      title: "Water Extraction",
      description:
        "Emergency water extraction services in Vancouver utilizing advanced equipment for immediate water removal and damage prevention.",
      details: [
        {
          title: "Our Vancouver Process Includes:",
          points: [
            "24/7 emergency water removal",
            "High-powered extraction equipment",
            "Basement flood pumping",
            "Surface water elimination",
          ],
        },
      ],
      image: "/photos/homepage/3.jpg",
      orientation: "left",
      url: "/water-extraction",
      schema: {
        "@type": "Service",
        name: "Water Extraction Vancouver",
        provider: {
          "@type": "LocalBusiness",
          name: "Vancouver Flood Restoration by Felicita Holdings",
        },
      },
    },
    {
      title: "Drying and Dehumidification",
      description:
        "Professional structural drying and dehumidification services in Vancouver, preventing secondary damage and ensuring complete moisture removal.",
      details: [
        {
          title: "Complete Vancouver Drying Process:",
          points: [
            "Industrial dehumidification systems",
            "Strategic air movement planning",
            "Moisture content monitoring",
            "Temperature-controlled drying",
          ],
        },
      ],
      image: "/photos/homepage/4.jpg",
      orientation: "right",
      url: "/drying-and-dehumidification",
      schema: {
        "@type": "Service",
        name: "Structural Drying Services Vancouver",
      },
    },
    {
      title: "Structural Repair",
      description:
        "Expert structural repair services in Vancouver for water-damaged buildings, ensuring safe and complete restoration of affected areas.",
      details: [
        {
          title: "Vancouver Repair Services Include:",
          points: [
            "Comprehensive structural assessment",
            "Foundation repair solutions",
            "Load-bearing wall restoration",
            "Complete structural reinforcement",
          ],
        },
      ],
      image: "/photos/homepage/7.jpg",
      orientation: "left",
      url: "/structural-repair-services-in-vancouver",
      schema: {
        "@type": "Service",
        name: "Structural Repair Vancouver",
      },
    },
    {
      title: "Mold Remediation",
      description:
        "Professional mold removal and remediation services in Vancouver, addressing water damage-related mold growth with comprehensive solutions.",
      details: [
        {
          title: "Vancouver Treatment Process:",
          points: [
            "Professional mold inspection",
            "Complete containment protocols",
            "Safe mold removal procedures",
            "Prevention and protection measures",
          ],
        },
      ],
      image: "/photos/homepage/5.jpg",
      orientation: "right",
      url: "/mold-remediation-services-in-vancouver",
      schema: {
        "@type": "Service",
        name: "Mold Remediation Services Vancouver",
      },
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
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: service.schema,
            })),
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
                  copiedPhone ? "text-[#27AE60]" : "text-white"
                }`}
                style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}
              >
                {copiedPhone ? (
                  <div className="flex items-center justify-center gap-4">
                    <span>Copied!</span>
                    <Check className="w-8 h-8 md:w-12 md:h-12 animate-in fade-in duration-200" />
                  </div>
                ) : (
                  "+1 778-654-6742"
                )}
              </div>
            </button>
          )}

          <h2 className="text-xl md:text-2xl text-stone-300 text-center mb-6">
            90-Minute Response Time • All Vancouver Areas
          </h2>

          {mounted && (
            <div className="flex justify-center">
              <button
                onClick={() =>
                  copyToClipboard("office@vancouverflood.com", false)
                }
                className={`${
                  copiedEmail
                    ? "bg-[#27AE60] text-white scale-95"
                    : "bg-white text-[#8B2635] hover:bg-stone-100"
                } px-8 py-2 font-medium rounded-full transition-all duration-300 flex items-center gap-2`}
              >
                {copiedEmail ? (
                  <>
                    <span>Copied!</span>
                    <Check className="w-5 h-5 animate-in fade-in duration-200" />
                  </>
                ) : (
                  "Email Us"
                )}
              </button>
            </div>
          )}
        </div>

        {/* Services Section */}
        <section className="py-16 px-5 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold mb-6 text-[#1C1917]">
                Our Vancouver Restoration Process
              </h1>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="h-px w-16 bg-[#8B2635]" />
                <p className="text-lg text-[#44403C]">
                  Professional Water Damage Solutions
                </p>
                <div className="h-px w-16 bg-[#8B2635]" />
              </div>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    service.orientation === "left"
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } gap-8`}
                >
                  <div className="w-full md:w-1/2">
                    <a
                      href={service.url}
                      className="block cursor-pointer group"
                    >
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
                    <h2 className="text-3xl font-bold mb-4 text-[#1C1917]">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#44403C] mb-6">
                      {service.description}
                    </p>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      {service.details.map((detail, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-[#1C1917] mb-4">
                            {detail.title}
                          </h3>
                          <ul className="space-y-3">
                            {detail.points.map((point, pointIdx) => (
                              <li
                                key={pointIdx}
                                className="flex items-start gap-3"
                              >
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
