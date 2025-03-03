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
  AlertTriangle,
  Clock,
  Shield,
  Home,
  Building,
  Check,
  ThermometerSnowflake,
  Fan,
} from "lucide-react";
import Image from "next/image";

const FloodRestorationBurnaby = () => {
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
    serviceType: "Flood Restoration Burnaby",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch("/api/flood-restoration-burnaby", {
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
            status_1_Mjj7KSmv: "Flood Restoration Burnaby Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}, customer type: ${customerType}, business type: ${formData.businessType}, property size: ${formData.propertySize}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Flood Restoration",
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
          serviceType: "Flood Restoration Burnaby",
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

  const emergencyBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "60-Minute Response",
      description:
        "Fast emergency service throughout Burnaby and Metro Vancouver",
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6" />,
      title: "Complete Restoration",
      description: "From water extraction to rebuilding - we handle every step",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Specialists",
      description:
        "Direct billing and claim assistance for most major providers",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Mold Prevention",
      description: "Antimicrobial treatments and complete moisture removal",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Emergency Water Extraction",
      description:
        "Powerful truck-mounted extraction systems remove standing water quickly from your Burnaby property.",
    },
    {
      icon: <Fan className="w-6 h-6" />,
      title: "Structural Drying",
      description:
        "Commercial-grade air movers and dehumidifiers completely dry your structure, preventing mold and structural damage.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sanitization & Deodorization",
      description:
        "IICRC-certified technicians thoroughly clean and sanitize affected areas, eliminating odors and harmful contaminants.",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Complete Restoration",
      description:
        "Full rebuilding services including drywall, flooring, painting and more to return your Burnaby property to pre-loss condition.",
    },
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flood Restoration Burnaby",
    serviceType: "Water Damage Restoration",
    provider: {
      "@type": "LocalBusiness",
      name: "Vancouver Flood Restoration by Felicita Holdings",
      telephone: "+17786546742",
      email: "office@vancouverflood.com",
      url: "https://vancouverflood.com/flood-restoration-burnaby",
      address: {
        "@type": "PostalAddress",
        streetAddress: "828 Cardero St",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V6G 2G5",
        addressCountry: "CA",
      },
      areaServed: {
        "@type": "City",
        name: "Burnaby",
      },
    },
    description:
      "Professional flood restoration services in Burnaby. 24/7 emergency response, water extraction, drying, and complete restoration services.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "City",
        name: "Burnaby",
      },
    },
  };

  // FAQ Schema data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you respond to a flood emergency in Burnaby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a 60-minute emergency response time throughout Burnaby and surrounding Metro Vancouver areas. Our technicians are available 24/7, including holidays and weekends, to respond to any water damage emergency.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with insurance companies for flood damage in Burnaby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work directly with all major insurance companies in British Columbia. We can help manage your claim from start to finish, providing detailed documentation, photos, and moisture readings to support your claim. We also offer direct billing to most insurance providers.",
        },
      },
      {
        "@type": "Question",
        name: "What areas of Burnaby do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide flood restoration services to all Burnaby neighborhoods including Metrotown, Brentwood, Lougheed, Edmonds, Highgate, Burnaby Heights, Capitol Hill, and all surrounding areas. We also serve neighboring communities in Metro Vancouver.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do immediately after discovering water damage in my Burnaby home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First, ensure your safety by turning off electricity if water is near electrical outlets or appliances. Then call our emergency line at 778-654-6742 for immediate assistance. If safe to do so, try to stop the water source and remove valuable items from affected areas. Our team will arrive quickly to begin professional extraction and drying.",
        },
      },
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vancouver Flood Restoration - Burnaby Services",
    image: "https://vancouverflood.com/photos/homepage/2.jpg",
    telephone: "+17786546742",
    email: "office@vancouverflood.com",
    url: "https://vancouverflood.com/flood-restoration-burnaby",
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
      latitude: 49.2488,
      longitude: -122.9805,
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
      name: "Burnaby",
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
          Flood Restoration Burnaby | 24/7 Emergency Water Damage Services
        </title>
        <meta
          name="description"
          content="Professional flood restoration in Burnaby. 60-minute emergency response, water damage cleanup, extraction, and complete restoration. Serving all Burnaby neighborhoods."
        />
        <meta
          name="keywords"
          content="flood restoration burnaby, water damage burnaby, emergency flood services burnaby, water extraction burnaby, flood cleanup burnaby, water damage repair burnaby, basement flood burnaby"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Flood Restoration Burnaby | 24/7 Emergency Water Damage Services"
        />
        <meta
          property="og:description"
          content="Professional flood restoration in Burnaby. 60-minute emergency response, water damage cleanup, extraction, and complete restoration."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/flood-restoration-burnaby"
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
          content="Flood Restoration Burnaby | 24/7 Emergency Water Damage Services"
        />
        <meta
          name="twitter:description"
          content="Professional flood restoration in Burnaby. 60-minute emergency response, water damage cleanup, extraction, and complete restoration."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vancouverflood.com/flood-restoration-burnaby"
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
        <meta name="geo.placename" content="Burnaby" />
        <meta name="geo.position" content="49.2488;-122.9805" />
        <meta name="ICBM" content="49.2488, -122.9805" />
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
                  60-Minute Emergency Response in Burnaby
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1C1917]">
                  Burnaby
                  <span className="block text-[#8B2635]">
                    Flood Restoration
                  </span>
                  Specialists
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Fast, professional flood restoration services throughout
                  Burnaby. Our emergency response team provides water damage
                  cleanup, extraction, and complete restoration to get your
                  property back to normal quickly.
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
                  <span>Burnaby&apos;s trusted flood restoration experts</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/2.jpg"
                    alt="Flood Restoration Services in Burnaby"
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
                Why Choose Our Burnaby Flood Services
              </h2>
              <p className="text-lg text-[#44403C]">
                Burnaby&apos;s premier water damage restoration company
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

        {/* Service Features */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Burnaby Flood Restoration Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Comprehensive flood damage solutions for Burnaby properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
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

        {/* Burnaby Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Serving All Burnaby Neighborhoods
              </h2>
              <p className="text-lg text-[#44403C]">
                Fast emergency response throughout the entire Burnaby area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F5F4F0] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917] border-b border-[#8B2635]/20 pb-2">
                  North Burnaby
                </h3>
                <ul className="space-y-2">
                  {[
                    "Burnaby Heights",
                    "Capitol Hill",
                    "Westridge",
                    "Parkcrest",
                    "Willingdon Heights",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F4F0] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917] border-b border-[#8B2635]/20 pb-2">
                  Central Burnaby
                </h3>
                <ul className="space-y-2">
                  {[
                    "Metrotown",
                    "Brentwood",
                    "Deer Lake",
                    "Burnaby Lake",
                    "Central Park",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F4F0] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-[#1C1917] border-b border-[#8B2635]/20 pb-2">
                  South Burnaby
                </h3>
                <ul className="space-y-2">
                  {[
                    "Edmonds",
                    "Highgate",
                    "Big Bend",
                    "Fraser Foreshore",
                    "South Slope",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>{area}</span>
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
                Common questions about our Burnaby flood restoration services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How quickly can you respond to a flood emergency in Burnaby?
                </h3>
                <p className="text-[#44403C]">
                  We offer a 60-minute emergency response time throughout
                  Burnaby and surrounding Metro Vancouver areas. Our technicians
                  are available 24/7, including holidays and weekends, to
                  respond to any water damage emergency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Do you work with insurance companies for flood damage in
                  Burnaby?
                </h3>
                <p className="text-[#44403C]">
                  Yes, we work directly with all major insurance companies in
                  British Columbia. We can help manage your claim from start to
                  finish, providing detailed documentation, photos, and moisture
                  readings to support your claim. We also offer direct billing
                  to most insurance providers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  What areas of Burnaby do you serve?
                </h3>
                <p className="text-[#44403C]">
                  We provide flood restoration services to all Burnaby
                  neighborhoods including Metrotown, Brentwood, Lougheed,
                  Edmonds, Highgate, Burnaby Heights, Capitol Hill, and all
                  surrounding areas. We also serve neighboring communities in
                  Metro Vancouver.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  What should I do immediately after discovering water damage in
                  my Burnaby home?
                </h3>
                <p className="text-[#44403C]">
                  First, ensure your safety by turning off electricity if water
                  is near electrical outlets or appliances. Then call our
                  emergency line at 778-654-6742 for immediate assistance. If
                  safe to do so, try to stop the water source and remove
                  valuable items from affected areas. Our team will arrive
                  quickly to begin professional extraction and drying.
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
                We Serve All Burnaby Properties
              </h2>
              <p className="text-lg text-[#44403C]">
                Specialized flood restoration solutions for every property type
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
                    "Single family homes in Burnaby neighborhoods",
                    "Basement apartments and garden suites",
                    "Burnaby condos and apartment buildings",
                    "Townhouses and multi-family residences",
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
                    "Retail spaces and shopping centers in Burnaby",
                    "Office buildings and commercial spaces",
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
                      Request Burnaby Flood Services
                    </h2>
                    <p className="text-[#44403C]">
                      24/7 emergency response • 60-minute arrival time • Serving
                      all Burnaby
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
                        Property Address in Burnaby *
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
                        Describe Your Flood Situation
                      </label>
                      <textarea
                        id="message"
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
                      className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Request Flood Restoration
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
              Burnaby&apos;s Trusted Flood Restoration Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Fast, professional water damage restoration across Burnaby and
              Metro Vancouver. Our 24/7 emergency response team is ready to
              help.
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

export default FloodRestorationBurnaby;
