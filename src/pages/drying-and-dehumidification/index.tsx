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
  Check,
} from "lucide-react";
import Image from "next/image";

const DryingAndDehumidification = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    serviceType: "Structural Drying & Dehumidification",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch("/api/drying-and-dehumidification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Try to add lead to Monday.com CRM if you use it (similar to your drywall page)
        try {
          const newLead = {
            name: formData.name,
            date_Mjj7SnLm: new Date().toISOString(),
            lead_status: "New Lead",
            status_1_Mjj7KSmv: "Drying & Dehumidification Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Drying & Dehumidification",
            status_1_Mjj7Dz0C: "No Payment Due",
            status_1_Mjj7nPIN: "Not Insurance",
          };

          fetch("/api/monday", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newLead),
          });
        } catch (e) {
          console.warn("Error with Monday.com integration:", e);
        }

        // Show success message and reset form
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
          serviceType: "Structural Drying & Dehumidification",
        });
      } else {
        throw new Error("Failed to submit service request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your request. Please try again or call us directly."
      );
    }
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
      title: "24/7 Fast Response",
      description: "Emergency service throughout Greater Vancouver",
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      title: "Industrial Equipment",
      description: "Commercial-grade drying systems for quick results",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Insurance Assistance",
      description: "We help with documentation for your insurance claim",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Mold Prevention",
      description: "Thorough moisture removal to prevent future issues",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Fan className="w-6 h-6" />,
      title: "High-Volume Air Movers",
      description:
        "Strategic placement of professional air movers ensures maximum airflow and accelerated evaporation in Vancouver&apos;s humid climate.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "LGR Dehumidifiers",
      description:
        "Our low-grain refrigerant dehumidifiers extract moisture from materials and air, perfect for Vancouver&apos;s wet conditions.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Moisture Monitoring",
      description:
        "Regular measurements with specialized meters to track drying progress and ensure complete moisture removal.",
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Environmental Control",
      description:
        "Temperature and humidity management for optimal drying conditions, especially important in Vancouver&apos;s climate.",
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
      email: "office@vancouverflood.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "828 Cardero St",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V6G 2G5",
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

  // FAQ Schema data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does professional structural drying take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most standard structural drying projects in Vancouver take between 3-5 days, depending on the extent of water damage, the materials affected, and current weather conditions. Our industrial equipment accelerates this process significantly compared to consumer-grade solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Why is professional dehumidification necessary after water damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional dehumidification is essential because excess moisture that isn't properly removed can lead to mold growth within 24-48 hours, structural damage, and health issues. Vancouver's humidity makes professional-grade equipment particularly important for complete drying.",
        },
      },
      {
        "@type": "Question",
        name: "Does insurance cover structural drying services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most insurance policies in British Columbia cover water damage restoration including structural drying when it's the result of a sudden, unexpected event. We work directly with insurance companies to document the process and provide detailed moisture readings to support your claim.",
        },
      },
      {
        "@type": "Question",
        name: "How do you detect hidden moisture in walls and floors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use advanced technology including thermal imaging cameras, penetrating moisture meters, and non-invasive infrared equipment to detect moisture that's invisible to the naked eye. This precision equipment allows us to identify problem areas without unnecessary demolition.",
        },
      },
    ],
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
          name="keywords"
          content="structural drying vancouver, dehumidification services vancouver, water damage drying, professional moisture removal, commercial dehumidifiers vancouver, flood drying services"
        />

        {/* Open Graph */}
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
        <meta
          property="og:image"
          content="https://vancouverflood.com/photos/homepage/8.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Structural Drying & Dehumidification Services Vancouver"
        />
        <meta
          name="twitter:description"
          content="Professional structural drying services in Vancouver. Commercial-grade equipment and experienced technicians. Available 24/7."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/8.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vancouverflood.com/drying-and-dehumidification"
        />

        {/* Schema.org data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                  Vancouver
                  <span className="block text-[#8B2635]">
                    Structural Drying
                  </span>
                  Specialists
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Fast, effective structural drying services throughout Greater
                  Vancouver. Our professional-grade equipment and trained
                  technicians restore your property quickly after water damage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleEmergencyCall}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Emergency Response</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() =>
                      copyToClipboard("office@vancouverflood.com", false)
                    }
                    className="group flex items-center justify-center gap-2 bg-white border-2 border-[#1C1917] text-[#1C1917] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{copiedEmail ? "Email Copied!" : "Email Us"}</span>
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
                  <span>
                    Vancouver&apos;s trusted flood restoration experts
                  </span>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Why Choose Felicita Holdings
              </h2>
              <p className="text-lg text-[#44403C]">
                Vancouver&apos;s premier water damage restoration company
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#F5F4F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
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
                Our Vancouver Drying Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Comprehensive structural drying solutions for Vancouver&apos;s
                climate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F5F4F0] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
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

        {/* FAQ Section */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#44403C]">
                Everything you need to know about our structural drying services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How long does professional structural drying take?
                </h3>
                <p className="text-[#44403C]">
                  Most standard structural drying projects in Vancouver take
                  between 3-5 days, depending on the extent of water damage, the
                  materials affected, and current weather conditions. Our
                  industrial equipment accelerates this process significantly
                  compared to consumer-grade solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Why is professional dehumidification necessary after water
                  damage?
                </h3>
                <p className="text-[#44403C]">
                  Professional dehumidification is essential because excess
                  moisture that isn&apos;t properly removed can lead to mold
                  growth within 24-48 hours, structural damage, and health
                  issues. Vancouver&apos;s humidity makes professional-grade
                  equipment particularly important for complete drying.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Does insurance cover structural drying services?
                </h3>
                <p className="text-[#44403C]">
                  Most insurance policies in British Columbia cover water damage
                  restoration including structural drying when it&apos;s the
                  result of a sudden, unexpected event. We work directly with
                  insurance companies to document the process and provide
                  detailed moisture readings to support your claim.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How do you detect hidden moisture in walls and floors?
                </h3>
                <p className="text-[#44403C]">
                  We use advanced technology including thermal imaging cameras,
                  penetrating moisture meters, and non-invasive infrared
                  equipment to detect moisture that&apos;s invisible to the
                  naked eye. This precision equipment allows us to identify
                  problem areas without unnecessary demolition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white" id="contactform">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F5F4F0] rounded-2xl shadow-xl p-8">
              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#1C1917] mb-4">
                      Request Drying Services
                    </h2>
                    <p className="text-[#44403C]">
                      24/7 emergency response • Industrial equipment • Serving
                      all Vancouver
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
                        Property Address *
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
                        Describe Your Situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        placeholder="Please describe the water damage situation and any specific needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Request Drying Services
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
                </>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-[#8B2635] to-[#7A2230] text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Vancouver&apos;s Trusted Structural Drying Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Fast, effective water damage restoration across Greater Vancouver.
              Our 24/7 emergency response team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmergencyCall}
                className="group flex items-center justify-center gap-2 bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now: 778-654-6742</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const contactform = document.querySelector("#contactform");
                  if (contactform) {
                    contactform.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                Request Service
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Success message component after form submission
const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (show: boolean) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-[#1C1917]">Request Received</h3>

      <div className="space-y-2 text-center">
        <p className="text-[#44403C]">We&apos;ll get back to you shortly</p>
        <p className="text-gray-500 text-sm">
          A confirmation has been sent to {email}
        </p>
      </div>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 bg-[#8B2635] text-white px-8 py-3 rounded-full hover:bg-[#7A2230]"
      >
        Done
      </button>
    </div>
  );
};

export default DryingAndDehumidification;
