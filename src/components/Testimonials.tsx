import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import {
  Phone,
  Mail,
  ArrowRight,
  Fan,
  Droplets,
  ThermometerSnowflake,
  Timer,
  Gauge,
  CheckCircle2,
  Star,
  AlertTriangle,
  Clock,
  Banknote,
} from "lucide-react";
import Image from "next/image";

const DryingAndDehumidification = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+17786546742";
  };

  const copyToClipboard = async (text: string, isPhone: boolean) => {
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

  const emergencyBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Emergency service in Greater Vancouver",
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      title: "Professional Equipment",
      description: "Commercial-grade drying systems",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Insurance Assistance",
      description: "Help with insurance documentation",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Mold Prevention",
      description: "Thorough moisture removal",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Fan className="w-6 h-6" />,
      title: "Air Movement Systems",
      description:
        "Professional air movers positioned for optimal drying effectiveness.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Dehumidification",
      description:
        "Commercial dehumidifiers to extract moisture from materials and air.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Progress Monitoring",
      description: "Regular moisture measurements to ensure proper drying.",
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Climate Control",
      description: "Temperature management for efficient drying conditions.",
    },
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Drying & Dehumidification Vancouver",
    provider: {
      "@type": "LocalBusiness",
      name: "Vancouver Flood Restoration by Felicita Holdings",
      telephone: "+17786546742",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
    description:
      "Professional structural drying and dehumidification services in Vancouver. 24/7 emergency response with commercial-grade equipment.",
    serviceType: "Water Damage Restoration",
    areaServed: {
      "@type": "City",
      name: "Vancouver",
    },
  };

  return (
    <>
      <Head>
        <title>
          Structural Drying & Dehumidification Vancouver | Professional Water
          Damage Services
        </title>
        <meta
          name="description"
          content="Professional structural drying & dehumidification in Vancouver. Commercial-grade equipment and experienced technicians. Available 24/7 for emergencies."
        />
        <meta
          property="og:title"
          content="Structural Drying & Dehumidification Services Vancouver"
        />
        <meta
          property="og:description"
          content="Professional structural drying services in Vancouver. Commercial-grade equipment and experienced technicians. Available 24/7."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/drying-and-dehumidification"
        />
        <link
          rel="canonical"
          href="https://vancouverflood.com/drying-and-dehumidification"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
          <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center py-16">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1C1917]">
                  Professional
                  <span className="block text-[#8B2635]">
                    Structural Drying
                  </span>
                  Services
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  We provide professional structural drying services in
                  Vancouver using commercial-grade equipment. Available 24/7 for
                  water damage emergencies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleEmergencyCall}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() =>
                      copyToClipboard("office@vancouverflood.com", false)
                    }
                    className="group flex items-center justify-center gap-2 bg-white border-2 border-[#1C1917] text-[#1C1917] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get Quote</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-[#44403C]">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#8B2635] text-[#8B2635]"
                      />
                    ))}
                  </div>
                  <span>Trusted by Vancouver property owners</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/8.jpg"
                    alt="Professional Structural Drying Equipment Vancouver"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyBenefits.map((benefit, index) => (
                <div key={index} className="bg-[#F5F4F0] p-6 rounded-xl">
                  <div className="text-[#8B2635] mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#44403C]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Service Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Professional structural drying solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="bg-[#F5F4F0] p-8 rounded-xl">
                  <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#1C1917]">
                    {feature.title}
                  </h3>
                  <p className="text-[#44403C] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#1C1917] mb-4">
                  Request Service
                </h2>
                <p className="text-[#44403C]">
                  Professional response • Commercial equipment • Available 24/7
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1C1917] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#1C1917] mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1C1917] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[#1C1917] mb-2"
                  >
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1C1917] mb-2"
                  >
                    Service Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                    placeholder="Please describe your situation..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Submit Request
                </button>

                <p className="text-center text-sm text-[#44403C]">
                  For immediate assistance, call{" "}
                  <button
                    onClick={handleEmergencyCall}
                    className="text-[#8B2635] font-medium hover:underline"
                  >
                    +1 778-654-6742
                  </button>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DryingAndDehumidification;
