import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Home,
  Building,
  Check,
  Hammer,
  Ruler,
  PaintBucket,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const StructuralRepairVancouver = () => {
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
    damageExtent: "",
    serviceType: "Structural Repair Services",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch(
        "/api/structural-repair-services-in-vancouver",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            customerType,
          }),
        }
      );

      if (response.ok) {
        // Try to add lead to Monday.com CRM if you use it
        try {
          const newLead = {
            name: formData.name,
            date_Mjj7SnLm: new Date().toISOString(),
            lead_status: "New Lead",
            status_1_Mjj7KSmv: "Structural Repair Vancouver Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}, customer type: ${customerType}, business type: ${formData.businessType}, property size: ${formData.propertySize}, damage extent: ${formData.damageExtent}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Structural Repair",
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
          damageExtent: "",
          serviceType: "Structural Repair Services",
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

  const repairFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description:
        "Fully certified Vancouver structural repair specialists with comprehensive insurance",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description:
        "Quick assessment and repairs to secure your Vancouver property after water damage",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Complete Service",
      description:
        "From assessment to reconstruction - we handle every aspect of structural repair",
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Quality Workmanship",
      description: "Premium materials and master craftsmen for lasting repairs",
    },
  ];

  const serviceFeatures = [
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Foundation & Structural Repairs",
      description:
        "Expert repairs to structural components and foundations damaged by water, including wall reinforcement, joist replacement, and concrete repairs throughout Vancouver.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Subfloor & Framing Restoration",
      description:
        "Comprehensive restoration of water-damaged framing, subfloors, and load-bearing elements using industry-leading techniques and materials.",
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Complete Finishing Services",
      description:
        "Professional drywall, painting, flooring, and trim work to restore your Vancouver property to its pre-damage condition or better.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preventative Reinforcement",
      description:
        "Structural improvements that protect your property from future water damage, specially designed for Vancouver's unique climate conditions.",
    },
  ];

  const damageExtentOptions = [
    "Minor - Small affected area",
    "Moderate - One room/area affected",
    "Significant - Multiple areas affected",
    "Severe - Extensive structural damage",
    "Unknown - Needs assessment",
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Repair Services Vancouver",
    serviceType: "Structural Repair",
    provider: {
      "@type": "LocalBusiness",
      name: "Vancouver Flood Restoration by Felicita Holdings",
      telephone: "+17786546742",
      email: "office@vancouverflood.com",
      url: "https://vancouverflood.com/structural-repair-services-in-vancouver",
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
      "Professional structural repair services in Vancouver. Expert restoration of water-damaged structural elements, framing, foundation repairs, and complete finishing.",
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
        name: "How long do structural repairs typically take after water damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline for structural repairs varies based on the extent of damage, but typically ranges from 1-2 weeks for minor repairs to 4-8 weeks for major structural restoration. Our Vancouver team works efficiently to minimize disruption while ensuring quality and code compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with insurance companies for structural repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work directly with all major insurance companies in British Columbia. We help manage your claim by providing detailed documentation, including structural engineering reports when needed, and can bill your insurance provider directly in most cases.",
        },
      },
      {
        "@type": "Question",
        name: "What signs indicate my property needs structural repairs after water damage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Warning signs include sagging or sloping floors, cracks in walls or ceilings, doors or windows that stick, visible wood rot, musty odors, or visible water stains. If you've experienced flooding or significant water damage, a professional structural assessment is recommended even if damage isn't immediately visible.",
        },
      },
      {
        "@type": "Question",
        name: "Are permits required for structural repairs in Vancouver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most structural repairs in Vancouver require building permits. Our team handles the entire permitting process, ensuring all work meets or exceeds Vancouver building codes and passes required inspections. This documentation is also valuable for insurance purposes and future property sales.",
        },
      },
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vancouver Flood Restoration - Structural Repair Services",
    image: "https://vancouverflood.com/photos/homepage/2.jpg",
    telephone: "+17786546742",
    email: "office@vancouverflood.com",
    url: "https://vancouverflood.com/structural-repair-services-in-vancouver",
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
          Structural Repair Services Vancouver | Water Damage Restoration
        </title>
        <meta
          name="description"
          content="Professional structural repair services in Vancouver after water damage. Expert foundation, framing, and structural restoration. Licensed contractors and guaranteed workmanship."
        />
        <meta
          name="keywords"
          content="structural repair vancouver, water damage structural repairs, foundation repair vancouver, structural restoration vancouver, framing repair vancouver, water damage contractors vancouver"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Structural Repair Services Vancouver | Water Damage Restoration"
        />
        <meta
          property="og:description"
          content="Professional structural repair services in Vancouver after water damage. Expert foundation, framing, and structural restoration."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/structural-repair-services-in-vancouver"
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
          content="Structural Repair Services Vancouver | Water Damage Restoration"
        />
        <meta
          name="twitter:description"
          content="Professional structural repair services in Vancouver after water damage. Expert foundation, framing, and structural restoration."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vancouverflood.com/structural-repair-services-in-vancouver"
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
                  Licensed Structural Repair Experts in Vancouver
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1C1917]">
                  Vancouver
                  <span className="block text-[#8B2635]">
                    Structural Repair
                  </span>
                  Services
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Professional structural repair and reconstruction services
                  after water damage. Our licensed Vancouver contractors restore
                  your property&apos;s structural integrity with quality
                  workmanship and materials.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleEmergencyCall}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Get Expert Assessment</span>
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
                    Vancouver&apos;s trusted structural repair specialists
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/2.jpg"
                    alt="Structural Repair Services in Vancouver"
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
                Why Choose Our Structural Repair Services
              </h2>
              <p className="text-lg text-[#44403C]">
                Vancouver&apos;s premier structural restoration specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairFeatures.map((feature, index) => (
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

        {/* Service Features */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Structural Repair Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Comprehensive structural solutions for Vancouver properties
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

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Structural Repair Timeline
              </h2>
              <p className="text-lg text-[#44403C]">
                Clear, systematic approach to restoring your Vancouver property
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#8B2635]/20 hidden md:block"></div>

              <div className="space-y-12 relative">
                {/* Assessment Phase */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-[#8B2635] text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Phase 1
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#1C1917]">
                      Structural Assessment
                    </h3>
                    <p className="text-[#44403C] mb-8 md:mb-0">
                      Comprehensive evaluation of water damage to your
                      property&apos;s structural elements. We identify all
                      affected areas and develop a detailed repair plan.
                    </p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B2635] border-4 border-white"></div>
                    <div className="bg-[#F5F4F0] p-5 rounded-xl ml-8">
                      <ul className="space-y-2">
                        {[
                          "Detailed inspection of all structural elements",
                          "Moisture level assessment",
                          "Structural engineer consultation if needed",
                          "Damage documentation for insurance",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:hidden bg-[#F5F4F0] p-5 rounded-xl">
                    <ul className="space-y-2">
                      {[
                        "Detailed inspection of all structural elements",
                        "Moisture level assessment",
                        "Structural engineer consultation if needed",
                        "Damage documentation for insurance",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Demolition & Preparation */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block relative order-1">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B2635] border-4 border-white"></div>
                    <div className="bg-[#F5F4F0] p-5 rounded-xl mr-8">
                      <ul className="space-y-2">
                        {[
                          "Removal of damaged structural elements",
                          "Proper disposal of all materials",
                          "Site preparation and cleaning",
                          "Obtaining necessary permits",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <div className="bg-[#8B2635] text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Phase 2
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#1C1917]">
                      Demolition & Preparation
                    </h3>
                    <p className="text-[#44403C] mb-8 md:mb-0">
                      Safe removal of damaged structural components and
                      preparation of the site for reconstruction. All work is
                      performed to Vancouver building codes.
                    </p>
                  </div>
                  <div className="md:hidden bg-[#F5F4F0] p-5 rounded-xl">
                    <ul className="space-y-2">
                      {[
                        "Removal of damaged structural elements",
                        "Proper disposal of all materials",
                        "Site preparation and cleaning",
                        "Obtaining necessary permits",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Structural Rebuilding */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-[#8B2635] text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Phase 3
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#1C1917]">
                      Structural Rebuilding
                    </h3>
                    <p className="text-[#44403C] mb-8 md:mb-0">
                      Professional reconstruction of all structural elements
                      using premium materials and techniques. We ensure proper
                      load distribution and structural integrity.
                    </p>
                  </div>
                  <div className="hidden md:block relative">
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B2635] border-4 border-white"></div>
                    <div className="bg-[#F5F4F0] p-5 rounded-xl ml-8">
                      <ul className="space-y-2">
                        {[
                          "Foundation repairs and reinforcement",
                          "Framing and subfloor reconstruction",
                          "Joist and beam replacement",
                          "Structural reinforcement",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:hidden bg-[#F5F4F0] p-5 rounded-xl">
                    <ul className="space-y-2">
                      {[
                        "Foundation repairs and reinforcement",
                        "Framing and subfloor reconstruction",
                        "Joist and beam replacement",
                        "Structural reinforcement",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Finishing & Quality Assurance */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block relative order-1">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#8B2635] border-4 border-white"></div>
                    <div className="bg-[#F5F4F0] p-5 rounded-xl mr-8">
                      <ul className="space-y-2">
                        {[
                          "Drywall installation and finishing",
                          "Painting and trim work",
                          "Flooring installation",
                          "Final inspection and client walkthrough",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:order-2">
                    <div className="bg-[#8B2635] text-white inline-block px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Phase 4
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#1C1917]">
                      Finishing & Quality Assurance
                    </h3>
                    <p className="text-[#44403C] mb-8 md:mb-0">
                      Complete finishing of all repaired areas to restore
                      appearance and functionality. Final inspections ensure
                      quality and compliance with building codes.
                    </p>
                  </div>
                  <div className="md:hidden bg-[#F5F4F0] p-5 rounded-xl">
                    <ul className="space-y-2">
                      {[
                        "Drywall installation and finishing",
                        "Painting and trim work",
                        "Flooring installation",
                        "Final inspection and client walkthrough",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                Common questions about our structural repair services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How long do structural repairs typically take after water
                  damage?
                </h3>
                <p className="text-[#44403C]">
                  The timeline for structural repairs varies based on the extent
                  of damage, but typically ranges from 1-2 weeks for minor
                  repairs to 4-8 weeks for major structural restoration. Our
                  Vancouver team works efficiently to minimize disruption while
                  ensuring quality and code compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Do you work with insurance companies for structural repairs?
                </h3>
                <p className="text-[#44403C]">
                  Yes, we work directly with all major insurance companies in
                  British Columbia. We help manage your claim by providing
                  detailed documentation, including structural engineering
                  reports when needed, and can bill your insurance provider
                  directly in most cases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  What signs indicate my property needs structural repairs after
                  water damage?
                </h3>
                <p className="text-[#44403C]">
                  Warning signs include sagging or sloping floors, cracks in
                  walls or ceilings, doors or windows that stick, visible wood
                  rot, musty odors, or visible water stains. If you&apos;ve
                  experienced flooding or significant water damage, a
                  professional structural assessment is recommended even if
                  damage isn&apos;t immediately visible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Are permits required for structural repairs in Vancouver?
                </h3>
                <p className="text-[#44403C]">
                  Yes, most structural repairs in Vancouver require building
                  permits. Our team handles the entire permitting process,
                  ensuring all work meets or exceeds Vancouver building codes
                  and passes required inspections. This documentation is also
                  valuable for insurance purposes and future property sales.
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
                We Serve All Vancouver Properties
              </h2>
              <p className="text-lg text-[#44403C]">
                Specialized structural repair solutions for every property type
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
                    "Condos and apartment buildings",
                    "Townhouses and multi-family units",
                    "Heritage homes with specialized restoration needs",
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
                      Request Structural Repair Services
                    </h2>
                    <p className="text-[#44403C]">
                      Expert assessment • Licensed contractors • Vancouver-wide
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

                    <div>
                      <label
                        htmlFor="damageExtent"
                        className="block text-sm font-medium text-[#1C1917] mb-2"
                      >
                        Extent of Damage
                      </label>
                      <select
                        id="damageExtent"
                        name="damageExtent"
                        value={formData.damageExtent}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      >
                        <option value="">Select damage extent</option>
                        {damageExtentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
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
                        Describe Your Structural Repair Needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        placeholder="Please describe the structural damage and your repair needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Request Structural Assessment
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
              Vancouver&apos;s Trusted Structural Repair Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional structural restoration services by licensed
              contractors. Quality workmanship and guaranteed results.
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
                Request Assessment
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

export default StructuralRepairVancouver;
