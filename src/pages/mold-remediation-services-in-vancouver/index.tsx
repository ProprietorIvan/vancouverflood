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
  Shield,
  Microscope,
  Wind,
  Home,
  Building,
  Check,
  SprayCan,
  Droplets,
  Scan,
} from "lucide-react";
import Image from "next/image";

const MoldRemediationVancouver = () => {
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
    moldExtent: "",
    hasHealthIssues: "",
    serviceType: "Mold Remediation Services",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // First API call to your email service
      const response = await fetch(
        "/api/mold-remediation-services-in-vancouver",
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
            status_1_Mjj7KSmv: "Mold Remediation Vancouver Form",
            text_Mjj7Hg3c: `service details: ${formData.message}, service type: ${formData.serviceType}, customer type: ${customerType}, business type: ${formData.businessType}, property size: ${formData.propertySize}, mold extent: ${formData.moldExtent}, health issues: ${formData.hasHealthIssues}`,
            numbers_Mjj7fpib: 0,
            job_location_mkm418ra: formData.address,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "Mold Remediation",
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
          moldExtent: "",
          hasHealthIssues: "",
          serviceType: "Mold Remediation Services",
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

  const remedationFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Specialists",
      description:
        "IICRC certified mold remediation experts serving Vancouver with proper protocols",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Scientific Approach",
      description:
        "Lab testing and comprehensive mold assessment with detailed reports",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Health-Focused",
      description:
        "Safe remediation procedures that protect your family's health and wellness",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guaranteed Results",
      description:
        "Complete mold removal with post-remediation verification and testing",
    },
  ];

  const serviceSteps = [
    {
      icon: <Scan className="w-6 h-6" />,
      title: "Comprehensive Inspection",
      description:
        "Thorough assessment of your Vancouver property using advanced moisture meters, thermal imaging, and air quality testing to identify all mold sources and affected areas.",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Lab Testing & Analysis",
      description:
        "Professional sampling and laboratory analysis to identify mold types and concentrations, ensuring targeted remediation strategies for your specific situation.",
    },
    {
      icon: <SprayCan className="w-6 h-6" />,
      title: "Complete Mold Removal",
      description:
        "Safe containment and removal of all mold-infested materials using HEPA filtration, negative air pressure, and industry-best practices to prevent cross-contamination.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Prevention & Protection",
      description:
        "Application of antimicrobial treatments, addressing moisture sources, and implementing strategies to prevent future mold growth in your Vancouver property.",
    },
  ];

  const moldExtentOptions = [
    "Visible mold in one small area",
    "Visible mold in multiple areas",
    "Hidden mold suspected (musty odors)",
    "Extensive mold growth",
    "Past flooding or water damage",
    "Not sure - need assessment",
  ];

  const healthIssueOptions = [
    "No health concerns reported",
    "Mild respiratory symptoms",
    "Allergic reactions",
    "Asthma or breathing difficulties",
    "Other health concerns",
    "Prefer not to say",
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mold Remediation Services Vancouver",
    serviceType: "Mold Removal and Remediation",
    provider: {
      "@type": "LocalBusiness",
      name: "Vancouver Flood Restoration by Felicita Holdings",
      telephone: "+17786546742",
      email: "office@vancouverflood.com",
      url: "https://vancouverflood.com/mold-remediation-services-in-vancouver",
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
      "Professional mold remediation services in Vancouver. Certified specialists, comprehensive testing, complete mold removal and prevention, with guaranteed results.",
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
        name: "How do I know if I have mold in my Vancouver home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs of mold include visible growth (often appearing as black, green, or white spots), musty odors, water stains, peeling wallpaper, warping walls, recent water damage, and allergic symptoms when in the home. Vancouver's humid climate makes homes particularly susceptible to mold growth, especially in poorly ventilated areas.",
        },
      },
      {
        "@type": "Question",
        name: "Is black mold dangerous in Vancouver homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the term 'black mold' often refers to Stachybotrys chartarum, which can produce mycotoxins, all types of mold can potentially cause health issues, particularly for those with allergies, asthma, or compromised immune systems. Vancouver's climate can support many mold types, and professional testing is recommended to identify specific species and appropriate remediation methods.",
        },
      },
      {
        "@type": "Question",
        name: "How long does professional mold remediation take in Vancouver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The duration depends on the extent of mold growth, affected materials, and the size of the contaminated area. Small remediation projects might take 1-3 days, while larger projects can take 1-2 weeks. Vancouver's humidity levels can also affect drying times. Our team works efficiently while ensuring thoroughness and following proper containment protocols.",
        },
      },
      {
        "@type": "Question",
        name: "Does insurance cover mold remediation in Vancouver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Insurance coverage varies by policy. Generally, if mold results from a sudden, covered water damage event (like a burst pipe), remediation may be covered. However, mold from long-term humidity issues or maintenance problems is typically not covered. We can help you understand your policy and provide documentation to support your claim with British Columbia insurance providers.",
        },
      },
    ],
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vancouver Flood Restoration - Mold Remediation Services",
    image: "https://vancouverflood.com/photos/homepage/2.jpg",
    telephone: "+17786546742",
    email: "office@vancouverflood.com",
    url: "https://vancouverflood.com/mold-remediation-services-in-vancouver",
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

  // Medical Web Page Schema
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    about: {
      "@type": "MedicalCondition",
      name: "Mold Exposure",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Mold Remediation",
      },
    },
    mainContentOfPage:
      "Information about professional mold remediation services in Vancouver, including health impacts of mold, remediation processes, and prevention strategies.",
    lastReviewed: new Date().toISOString().split("T")[0],
  };

  return (
    <>
      <Head>
        <title>
          Mold Remediation Services Vancouver | Professional Mold Removal
        </title>
        <meta
          name="description"
          content="Professional mold remediation in Vancouver by certified specialists. Comprehensive mold testing, removal, and prevention with guaranteed results. Health-focused approach."
        />
        <meta
          name="keywords"
          content="mold remediation vancouver, mold removal services vancouver, black mold removal vancouver, mold testing vancouver, mold inspection vancouver, certified mold removal, toxic mold vancouver"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mold Remediation Services Vancouver | Professional Mold Removal"
        />
        <meta
          property="og:description"
          content="Professional mold remediation in Vancouver by certified specialists. Comprehensive mold testing, removal, and prevention with guaranteed results."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/mold-remediation-services-in-vancouver"
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
          content="Mold Remediation Services Vancouver | Professional Mold Removal"
        />
        <meta
          name="twitter:description"
          content="Professional mold remediation in Vancouver by certified specialists. Comprehensive mold testing, removal, and prevention with guaranteed results."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://vancouverflood.com/mold-remediation-services-in-vancouver"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalWebPageSchema),
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
                  Certified Mold Remediation Specialists in Vancouver
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1C1917]">
                  Vancouver
                  <span className="block text-[#8B2635]">Mold Remediation</span>
                  Services
                </h1>

                <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                  Professional mold removal and remediation services for
                  Vancouver homes and businesses. Our certified specialists
                  eliminate mold at its source with health-focused, guaranteed
                  remediation solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleEmergencyCall}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Request Mold Inspection</span>
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
                  <span>Vancouver&apos;s trusted mold remediation experts</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/photos/homepage/2.jpg"
                    alt="Professional Mold Remediation Services in Vancouver"
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
                Expert Mold Remediation You Can Trust
              </h2>
              <p className="text-lg text-[#44403C]">
                Vancouver&apos;s leading mold remediation service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {remedationFeatures.map((feature, index) => (
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

        {/* Health Impact Section */}
        <section className="py-16 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Understanding Mold Health Impacts
              </h2>
              <p className="text-lg text-[#44403C]">
                Why professional remediation is essential for your wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1C1917] border-b border-[#8B2635]/20 pb-2">
                    Common Health Symptoms
                  </h3>
                  <ul className="space-y-2 mt-4">
                    {[
                      "Respiratory issues and coughing",
                      "Nasal and sinus congestion",
                      "Eye irritation",
                      "Throat irritation",
                      "Skin irritation",
                      "Headaches",
                      "Fatigue",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                        <span className="text-[#44403C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-[#1C1917] border-b border-[#8B2635]/20 pb-2">
                    At-Risk Groups
                  </h3>
                  <ul className="space-y-2 mt-4">
                    {[
                      "Children and infants",
                      "Elderly individuals",
                      "Individuals with asthma",
                      "People with allergies",
                      "Those with compromised immune systems",
                      "Individuals with existing respiratory conditions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#8B2635] mt-0.5 shrink-0" />
                        <span className="text-[#44403C]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">
                  Vancouver&apos;s Mold Risk Factors
                </h3>
                <p className="text-[#44403C] mb-6">
                  Vancouver&apos;s climate creates ideal conditions for mold
                  growth. Our professional remediation addresses these specific
                  challenges:
                </p>
                <ul className="space-y-4">
                  {[
                    "High humidity levels year-round that promote mold growth",
                    "Significant annual rainfall creating moisture problems",
                    "Temperature fluctuations causing condensation issues",
                    "Older buildings with inadequate ventilation systems",
                    "Basement and crawlspace dampness common in Vancouver homes",
                    "Vancouver-specific building materials that are susceptible to mold",
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

        {/* Service Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">
                Our Comprehensive Mold Remediation Process
              </h2>
              <p className="text-lg text-[#44403C]">
                Scientific approach to mold removal and prevention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#F5F4F0] p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
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
                Common questions about our mold remediation services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How do I know if I have mold in my Vancouver home?
                </h3>
                <p className="text-[#44403C]">
                  Common signs of mold include visible growth (often appearing
                  as black, green, or white spots), musty odors, water stains,
                  peeling wallpaper, warping walls, recent water damage, and
                  allergic symptoms when in the home. Vancouver&apos;s humid
                  climate makes homes particularly susceptible to mold growth,
                  especially in poorly ventilated areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Is black mold dangerous in Vancouver homes?
                </h3>
                <p className="text-[#44403C]">
                  While the term &apos;black mold&apos; often refers to
                  Stachybotrys chartarum, which can produce mycotoxins, all
                  types of mold can potentially cause health issues,
                  particularly for those with allergies, asthma, or compromised
                  immune systems. Vancouver&apos;s climate can support many mold
                  types, and professional testing is recommended to identify
                  specific species and appropriate remediation methods.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  How long does professional mold remediation take in Vancouver?
                </h3>
                <p className="text-[#44403C]">
                  The duration depends on the extent of mold growth, affected
                  materials, and the size of the contaminated area. Small
                  remediation projects might take 1-3 days, while larger
                  projects can take 1-2 weeks. Vancouver&apos;s humidity levels
                  can also affect drying times. Our team works efficiently while
                  ensuring thoroughness and following proper containment
                  protocols.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917]">
                  Does insurance cover mold remediation in Vancouver?
                </h3>
                <p className="text-[#44403C]">
                  Insurance coverage varies by policy. Generally, if mold
                  results from a sudden, covered water damage event (like a
                  burst pipe), remediation may be covered. However, mold from
                  long-term humidity issues or maintenance problems is typically
                  not covered. We can help you understand your policy and
                  provide documentation to support your claim with British
                  Columbia insurance providers.
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
                Specialized mold remediation solutions for every property type
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
                    "Basement suites and garden-level apartments",
                    "Heritage homes with specialized needs",
                    "Rental properties and vacation homes",
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
                    "Office buildings and professional spaces",
                    "Retail stores and shopping centers",
                    "Restaurants and food service facilities",
                    "Healthcare facilities and clinics",
                    "Schools and educational institutions",
                    "Hotels and hospitality venues",
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
                      Request Mold Remediation Services
                    </h2>
                    <p className="text-[#44403C]">
                      Expert assessment • Certified specialists • Vancouver-wide
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
                        htmlFor="moldExtent"
                        className="block text-sm font-medium text-[#1C1917] mb-2"
                      >
                        Mold Extent
                      </label>
                      <select
                        id="moldExtent"
                        name="moldExtent"
                        value={formData.moldExtent}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      >
                        <option value="">Select mold extent</option>
                        {moldExtentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="hasHealthIssues"
                        className="block text-sm font-medium text-[#1C1917] mb-2"
                      >
                        Health Concerns
                      </label>
                      <select
                        id="hasHealthIssues"
                        name="hasHealthIssues"
                        value={formData.hasHealthIssues}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                      >
                        <option value="">Select health concerns</option>
                        {healthIssueOptions.map((option) => (
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
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
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
                        Describe Your Mold Situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-[#8B2635] focus:border-transparent"
                        placeholder="Please describe the mold issue, location, and any concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#8B2635] text-white py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Request Mold Assessment
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
              Vancouver&apos;s Trusted Mold Remediation Experts
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional mold removal and remediation by certified
              specialists. Health-focused approach with guaranteed results.
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
                Schedule Assessment
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

export default MoldRemediationVancouver;
