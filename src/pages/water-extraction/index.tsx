import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import {
  Phone,
  Mail,
  ArrowRight,
  Droplets,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Home,
  Building,
  Check,
  ThermometerSnowflake,
  Fan,
  Gauge,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

const WaterExtractionVancouver = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [customerType, setCustomerType] = useState<
    "homeowner" | "business" | null
  >(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    businessType: "",
    propertySize: "",
    waterDepth: "",
    emergencyLevel: "",
    serviceType: "Water Extraction Vancouver",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch("/api/water-extraction", {
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
            status_1_Mjj7KSmv: "Water Extraction Vancouver Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}, customer type: ${customerType}, business type: ${formData.businessType}, property size: ${formData.propertySize}, water depth: ${formData.waterDepth}, emergency level: ${formData.emergencyLevel}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Water Extraction",
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
          waterDepth: "",
          emergencyLevel: "",
          serviceType: "Water Extraction Vancouver",
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

  const waterExtractionFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Response",
      description:
        "60-minute response time to any Vancouver location, even at night",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Powerful Extraction Systems",
      description:
        "Industrial-grade truck-mounted equipment for complete water removal",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IICRC Certified Technicians",
      description:
        "Professionally trained and certified water extraction specialists",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Mold Prevention Expertise",
      description: "Comprehensive moisture removal to prevent future issues",
    },
  ];

  const extractionProcess = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Emergency Response",
      description:
        "Our teams arrive anywhere in Vancouver within 60 minutes, equipped with commercial-grade water extraction equipment.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Professional Water Extraction",
      description:
        "Powerful truck-mounted systems remove all standing water quickly, even from hard-to-reach areas like basements and crawlspaces.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Moisture Detection & Monitoring",
      description:
        "Advanced technology identifies hidden moisture in walls, under floors, and within your Vancouver property's structure.",
    },
    {
      icon: <Fan className="w-6 h-6" />,
      title: "Complete Drying & Dehumidification",
      description:
        "Industrial air movers and dehumidifiers create optimal drying conditions, removing all remaining moisture.",
    },
  ];

  const waterDepthOptions = [
    "Surface water only",
    "Less than 1 inch",
    "1-6 inches",
    "6-12 inches",
    "Over 1 foot",
    "Unknown/Not sure",
  ];

  const emergencyLevelOptions = [
    "Emergency - Water actively rising",
    "Urgent - Standing water present",
    "Standard - Water has receded",
    "Assessment needed",
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Extraction Services Vancouver",
    serviceType: "Water Extraction",
    provider: {
      "@type": "LocalBusiness",
      name: "Vancouver Flood Restoration by Felicita Holdings",
      telephone: "+17786546742",
      email: "office@vancouverflood.com",
      url: "https://vancouverflood.com/water-extraction",
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
      "Professional water extraction services in Vancouver. 24/7 emergency response with powerful truck-mounted equipment for fast and complete water removal.",
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
        name: "How quickly can you respond to a water extraction emergency in Vancouver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We guarantee a 60-minute response time to any water extraction emergency throughout the Vancouver area, 24 hours a day, 7 days a week. Our teams are strategically positioned throughout Greater Vancouver to provide the fastest possible emergency response.",
        },
      },
      {
        "@type": "Question",
        name: "What type of equipment do you use for water extraction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use commercial-grade truck-mounted extraction units capable of removing over 200 gallons of water per minute. These powerful systems can extract water from carpets, hardwood floors, tile, and even concrete, while our specialized tools access water in wall cavities, crawlspaces, and other hard-to-reach areas.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with insurance for water extraction in Vancouver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work directly with all major insurance companies in British Columbia and can bill them directly in most cases. Our detailed documentation includes moisture readings, photos, and extraction reports to support your claim. We also provide assistance with the claims process to make it as smooth as possible.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if water isn't extracted quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water left standing for even 24-48 hours can lead to serious issues including: structural damage to floors, walls and foundations; mold growth which begins within 24-72 hours; damage to electrical systems; and deterioration of furniture, carpets and personal belongings. Fast, professional water extraction is essential to prevent these secondary damages.",
        },
      },
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vancouver Flood Restoration - Water Extraction Services",
    image: "https://vancouverflood.com/photos/homepage/2.jpg",
    telephone: "+17786546742",
    email: "office@vancouverflood.com",
    url: "https://vancouverflood.com/water-extraction",
    address: {
      "@type": "PostalAddress",
      streetAddress: "828 Cardero St",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6G 2G5",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.2827,
      longitude: -123.1207,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Vancouver",
    },
    sameAs: [
      "https://www.facebook.com/felicitaholdings",
      "https://www.instagram.com/felicitaholdings",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Water Extraction Vancouver | 24/7 Emergency Flood Cleanup Services
        </title>
        <meta
          name="description"
          content="Professional water extraction services in Vancouver. 60-minute response time, powerful truck-mounted equipment, and certified technicians. Available 24/7 for emergencies."
        />
        <meta
          name="keywords"
          content="water extraction vancouver, water removal vancouver, flood cleanup vancouver, emergency water extraction, basement flooding vancouver, commercial water extraction vancouver, residential water extraction"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Water Extraction Vancouver | 24/7 Emergency Flood Cleanup Services"
        />
        <meta
          property="og:description"
          content="Professional water extraction services in Vancouver. 60-minute response time, powerful truck-mounted equipment, and certified technicians."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/water-extraction"
        />
        <meta
          property="og:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Water Extraction Vancouver | 24/7 Emergency Flood Cleanup Services"
        />
        <meta
          name="twitter:description"
          content="Professional water extraction services in Vancouver. 60-minute response time, powerful truck-mounted equipment, and certified technicians."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vancouverflood.com/water-extraction"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Location Specific Meta Tags */}
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Vancouver" />
        <meta name="geo.position" content="49.2827;-123.1207" />
        <meta name="ICBM" content="49.2827, -123.1207" />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
          <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center py-16">
              <div>
                <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  60-Minute Emergency Response in Vancouver
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1C1917]">
                  Professional
                  <span className="block text-[#8B2635]">Water Extraction</span>
                  Vancouver
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Fast, powerful water extraction services throughout Vancouver.
                  Our emergency teams use industrial-grade equipment to quickly
                  remove water from your home or business after flooding, burst
                  pipes, or water damage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleEmergencyCall}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>24/7 Emergency Response</span>
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
                  <span>Vancouver&apos;s trusted water extraction experts</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/2.jpg"
                    alt="Water Extraction Services in Vancouver"
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

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Fast, Professional Water Extraction
              </h2>
              <p className="text-lg text-[#44403C]">
                Vancouver&apos;s premier emergency water removal service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {waterExtractionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F5F4F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                    {feature.title}
                  </h3>
                  <p className="text-[#44403C]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Water Extraction Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Comprehensive solutions for any water emergency in Vancouver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {extractionProcess.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-[#8B2635] mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#1C1917]">
                    {step.title}
                  </h3>
                  <p className="text-[#44403C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Water Damage Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                We Handle All Types of Water Emergencies
              </h2>
              <p className="text-lg text-[#44403C]">
                Specialized extraction solutions for every water situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Clean Water */}
              <div className="bg-[#F5F4F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917]">
                  Clean Water Extraction (Category 1)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Burst water pipes",
                    "Overflow from sinks",
                    "Broken supply lines",
                    "Rainwater intrusion",
                    "Melting snow or ice",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gray Water */}
              <div className="bg-[#F5F4F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917]">
                  Gray Water Extraction (Category 2)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Washing machine overflow",
                    "Dishwasher discharge",
                    "Toilet overflow (urine only)",
                    "Aquarium leaks",
                    "Waterbed leaks",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Black Water */}
              <div className="bg-[#F5F4F0] p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917]">
                  Black Water Extraction (Category 3)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Sewage backups",
                    "Toilet overflow with feces",
                    "Flooding from rivers/streams",
                    "Ground surface water",
                    "Seawater intrusion",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#44403C]">
                Common questions about our water extraction services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How quickly can you respond to a water extraction emergency in
                  Vancouver?
                </h3>
                <p className="text-[#44403C]">
                  We guarantee a 60-minute response time to any water extraction
                  emergency throughout the Vancouver area, 24 hours a day, 7
                  days a week. Our teams are strategically positioned throughout
                  Greater Vancouver to provide the fastest possible emergency
                  response.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  What type of equipment do you use for water extraction?
                </h3>
                <p className="text-[#44403C]">
                  We use commercial-grade truck-mounted extraction units capable
                  of removing over 200 gallons of water per minute. These
                  powerful systems can extract water from carpets, hardwood
                  floors, tile, and even concrete, while our specialized tools
                  access water in wall cavities, crawlspaces, and other
                  hard-to-reach areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Do you work with insurance for water extraction in Vancouver?
                </h3>
                <p className="text-[#44403C]">
                  Yes, we work directly with all major insurance companies in
                  British Columbia and can bill them directly in most cases. Our
                  detailed documentation includes moisture readings, photos, and
                  extraction reports to support your claim. We also provide
                  assistance with the claims process to make it as smooth as
                  possible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  What happens if water isn&apos;t extracted quickly?
                </h3>
                <p className="text-[#44403C]">
                  Water left standing for even 24-48 hours can lead to serious
                  issues including: structural damage to floors, walls and
                  foundations; mold growth which begins within 24-72 hours;
                  damage to electrical systems; and deterioration of furniture,
                  carpets and personal belongings. Fast, professional water
                  extraction is essential to prevent these secondary damages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                We Extract Water From All Vancouver Properties
              </h2>
              <p className="text-lg text-[#44403C]">
                Specialized extraction equipment for every property type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5F4F0] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#8B2635]">
                    <Home className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Residential Properties</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Single family homes throughout Vancouver",
                    "Basements and crawlspaces",
                    "Condos and apartment buildings",
                    "Townhouses and multi-family units",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635] shrink-0 mt-0.5" />
                      <span className="text-[#44403C]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F4F0] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#8B2635]">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Commercial Properties</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Retail stores and shopping centers",
                    "Office buildings and professional spaces",
                    "Restaurants and hospitality venues",
                    "Warehouses and industrial facilities",
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

        {/* Contact Form */}
        <section className="py-16 bg-[#F5F4F0]" id="contact-form">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#1C1917] mb-4">
                      Request Emergency Water Extraction
                    </h2>
                    <p className="text-[#44403C]">
                      24/7 response • 60-minute arrival time • Vancouver-wide
                      service
                    </p>
                  </div>

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
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#1C1917] mb-2"
                        >
                          Your Name *
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
                          Phone Number *
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
                        Email Address *
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
                        Property Address in Vancouver *
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="waterDepth"
                          className="block text-sm font-medium text-[#1C1917] mb-2"
                        >
                          Water Depth
                        </label>
                        <select
                          id="waterDepth"
                          name="waterDepth"
                          value={formData.waterDepth}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        >
                          <option value="">Select water depth</option>
                          {waterDepthOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="emergencyLevel"
                          className="block text-sm font-medium text-[#1C1917] mb-2"
                        >
                          Emergency Level
                        </label>
                        <select
                          id="emergencyLevel"
                          name="emergencyLevel"
                          value={formData.emergencyLevel}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        >
                          <option value="">Select emergency level</option>
                          {emergencyLevelOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Business-specific fields */}
                    {customerType === "business" && (
                      <div className="space-y-6">
                        <div>
                          <label
                            htmlFor="businessType"
                            className="block text-sm font-medium text-[#1C1917] mb-2"
                          >
                            Business Type
                          </label>
                          <select
                            id="businessType"
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
                          <label
                            htmlFor="propertySize"
                            className="block text-sm font-medium text-[#1C1917] mb-2"
                          >
                            Property Size (sq ft) - Approximate
                          </label>
                          <input
                            type="number"
                            id="propertySize"
                            name="propertySize"
                            value={formData.propertySize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#1C1917] mb-2"
                      >
                        Describe Your Water Emergency
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        placeholder="Please provide details about the water damage situation..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Request Water Extraction
                    </button>

                    <p className="text-center text-sm text-[#44403C]">
                      For immediate assistance, call{" "}
                      <button
                        type="button"
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
              Vancouver&apos;s Trusted Water Extraction Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Fast, professional water extraction services throughout Vancouver.
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

export default WaterExtractionVancouver;
