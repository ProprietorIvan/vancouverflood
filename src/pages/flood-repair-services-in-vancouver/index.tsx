import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Droplets,
  ThermometerSnowflake,
  Timer,
  Gauge,
  CheckCircle2,
  ShieldCheck,
  Home,
  Building,
  Check,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Testimonials from "@/components/Testimonials";

const FloodRepairServices = () => {
  const [customerType, setCustomerType] = useState<
    "homeowner" | "business" | null
  >(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    businessType: "",
    propertySize: "",
    serviceType: "Flood Repair Services",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch("/api/flood-repair-services-in-vancouver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          customerType,
        }),
      });

      if (response.ok) {
        // Try to add lead to Monday.com CRM if you use it
        try {
          const newLead = {
            name: formData.name,
            date_Mjj7SnLm: new Date().toISOString(),
            lead_status: "New Lead",
            status_1_Mjj7KSmv: "Flood Repair Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}, customer type: ${customerType}, business type: ${formData.businessType}, property size: ${formData.propertySize}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Flood Repair",
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
          businessType: "",
          propertySize: "",
          serviceType: "Flood Repair Services",
        });
        setCustomerType(null);
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

  const handleEmergencyCall = () => {
    window.location.href = "tel:+17786546742";
  };

  const floodRepairFeatures = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Extraction",
      description:
        "Powerful industrial equipment removes standing water quickly from your Vancouver property",
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      title: "Structural Drying",
      description:
        "Advanced dehumidifiers and air movers designed for Vancouver&apos;s climate conditions",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Moisture Detection",
      description:
        "Thermal imaging and moisture meters find hidden water in walls, ceilings, and floors",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Mold Prevention",
      description:
        "Specialized treatments prevent mold growth common in Vancouver&apos;s humid environment",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Emergency Response",
      description:
        "Vancouver-based team arrives within 60 minutes with full extraction equipment",
    },
    {
      number: "02",
      title: "Water Removal & Drying",
      description:
        "Complete water extraction and strategic drying system setup",
    },
    {
      number: "03",
      title: "Damage Assessment",
      description:
        "Detailed inspection with moisture mapping and documentation for insurance",
    },
    {
      number: "04",
      title: "Restoration & Repairs",
      description:
        "Full restoration of damaged areas with quality materials and workmanship",
    },
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flood Repair Services Vancouver",
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
      "Professional flood repair and water damage restoration services in Vancouver. 24/7 emergency response with commercial-grade equipment.",
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
          Flood Repair Services Vancouver | Emergency Water Damage Restoration
        </title>
        <meta
          name="description"
          content="Professional flood repair services in Vancouver. 24/7 emergency water damage restoration, extraction, drying, and repairs. Local experts serving since 1995."
        />
        <meta
          property="og:title"
          content="Flood Repair Services Vancouver | Emergency Water Damage Restoration"
        />
        <meta
          property="og:description"
          content="Professional flood repair services in Vancouver. 24/7 emergency water damage restoration, extraction, drying, and repairs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/flood-repair-services-in-vancouver"
        />
        <link
          rel="canonical"
          href="https://vancouverflood.com/flood-repair-services-in-vancouver"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
          <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row gap-12 items-center py-16">
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  24/7 Emergency Response in Vancouver
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                  Vancouver
                  <span className="block text-[#8B2635]">Flood Repair</span>
                  Specialists
                </h1>
                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Fast, professional flood repair and water damage restoration
                  throughout Greater Vancouver. Our emergency response team
                  stops water damage in its tracks, prevents mold, and restores
                  your property quickly.
                </p>

                <button
                  onClick={handleEmergencyCall}
                  className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Emergency Flood Response</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/2.jpg"
                    alt="Vancouver Flood Repair Services"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Complete Flood Repair Services
              </h2>
              <p className="text-lg text-[#44403C]">
                Professional solutions for any water damage emergency in
                Vancouver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {floodRepairFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-stone-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#44403C]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Flood Repair Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Fast, systematic approach to water damage restoration in
                Vancouver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-6xl font-bold text-[#8B2635]/10 absolute -top-4 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-[#44403C] relative z-10">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Types of Properties We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                We Serve All Vancouver Properties
              </h2>
              <p className="text-lg text-[#44403C]">
                Specialized flood repair solutions for every property type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#8B2635]">
                    <Home className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Residential Properties</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Single family homes in Vancouver neighborhoods",
                    "Basement apartments and garden suites",
                    "Multi-family buildings and townhouses",
                    "High-rise condominium units",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635] shrink-0 mt-0.5" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#8B2635]">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Commercial Properties</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Retail spaces and shopping centers",
                    "Office buildings and professional spaces",
                    "Restaurants and hospitality venues",
                    "Industrial facilities and warehouses",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635] shrink-0 mt-0.5" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Setup Image Section */}
        <section className="py-20 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">
                  Why We&apos;re Vancouver&apos;s First Choice
                </h2>
                <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                  Our professional-grade equipment and expert team respond
                  quickly to minimize damage and restore your property faster.
                  We understand Vancouver&apos;s unique climate challenges and
                  provide solutions that prevent mold growth and secondary
                  damage.
                </p>
                <ul className="space-y-4">
                  {[
                    "24/7 Emergency response throughout Vancouver",
                    "Detailed documentation for insurance claims",
                    "Complete restoration from extraction to repairs",
                    "Local team familiar with Vancouver building codes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                      <span className="text-[#44403C] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Vancouver Flood Damage Restoration"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-white" id="contact-form">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">
                Request Emergency Flood Repair
              </h2>
              <p className="text-lg text-[#44403C]">
                Fast response • Vancouver-wide service • Available 24/7
              </p>
            </div>

            <div className="bg-[#F5F4F0] rounded-2xl shadow-lg p-8">
              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Type Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setCustomerType("homeowner")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        customerType === "homeowner"
                          ? "border-[#8B2635] bg-[#8B2635]/5"
                          : "border-stone-200 hover:border-[#8B2635]"
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "homeowner"
                            ? "text-[#8B2635]"
                            : "text-[#1C1917]"
                        }`}
                      >
                        Homeowner
                      </h3>
                      <p className="text-sm text-[#44403C]">
                        Residential property
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomerType("business")}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        customerType === "business"
                          ? "border-[#8B2635] bg-[#8B2635]/5"
                          : "border-stone-200 hover:border-[#8B2635]"
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "business"
                            ? "text-[#8B2635]"
                            : "text-[#1C1917]"
                        }`}
                      >
                        Business
                      </h3>
                      <p className="text-sm text-[#44403C]">
                        Commercial property
                      </p>
                    </button>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Property Address in Vancouver *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Business-specific fields */}
                  {customerType === "business" && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        >
                          <option value="">Select business type</option>
                          <option value="retail">Retail</option>
                          <option value="office">Office</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">
                          Property Size (sq ft) - Approximate
                        </label>
                        <input
                          type="number"
                          name="propertySize"
                          value={formData.propertySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">
                      Describe Your Flood Situation
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      placeholder="Please describe the water damage situation and your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8B2635] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#7A2230] transition-colors duration-300"
                  >
                    Request Emergency Flood Repair
                  </button>

                  <p className="text-sm text-[#44403C] text-center">
                    For immediate assistance, call us directly at +1 (778)
                    654-6742
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-[#8B2635]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Vancouver&apos;s Trusted Flood Repair Experts
            </h2>
            <p className="text-xl mb-8 text-stone-200">
              Professional water damage restoration services across Greater
              Vancouver
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Call 778-654-6742</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
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

export default FloodRepairServices;
