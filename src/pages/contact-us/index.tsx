import React, { useState, useEffect } from "react";
import { Phone, Mail, Clock, MapPin, Send, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Head from "next/head";

const ContactUs = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "General Inquiry",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Try to add lead to Monday.com CRM if you use it
        try {
          const newLead = {
            name: formData.name,
            date_Mjj7SnLm: new Date().toISOString(),
            lead_status: "New Lead",
            status_1_Mjj7KSmv: "Contact Form",
            text_Mjj7Hg3c: `message: ${formData.message}, service: ${formData.service}`,
            numbers_Mjj7fpib: 0,
            lead_phone: formData.phone,
            lead_email: formData.email,
            status_1_Mjj77YUc: "General Inquiry",
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
          email: "",
          phone: "",
          message: "",
          service: "General Inquiry",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your message. Please try again or call us directly."
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (778) 654-6742",
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        copyToClipboard("+1 (778) 654-6742", true);
      },
    },
    {
      icon: Mail,
      title: "Email",
      content: "office@vancouverflood.com",
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        copyToClipboard("office@vancouverflood.com", false);
      },
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Emergency Service",
      onClick: undefined,
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Greater Vancouver Area",
      onClick: undefined,
    },
  ];

  // Schema.org LocalBusiness structured data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vancouver Flood Restoration by Felicita Holdings",
    image: "https://vancouverflood.com/photos/homepage/2.jpg",
    telephone: "+17786546742",
    email: "office@vancouverflood.com",
    url: "https://vancouverflood.com/contact-us",
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
    sameAs: [
      "https://www.facebook.com/felicitaholdings",
      "https://www.instagram.com/felicitaholdings",
    ],
  };

  return (
    <>
      <Head>
        <title>
          Contact Us | Vancouver Flood Restoration & Water Damage Services
        </title>
        <meta
          name="description"
          content="Contact Vancouver Flood Restoration for 24/7 emergency water damage services. Reach our expert team for flood restoration, water extraction and drying throughout Greater Vancouver."
        />
        <meta
          name="keywords"
          content="contact vancouver flood restoration, water damage services vancouver, flood emergency contact, vancouver water damage help, flood restoration contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Us | Vancouver Flood Restoration & Water Damage Services"
        />
        <meta
          property="og:description"
          content="Contact Vancouver Flood Restoration for 24/7 emergency water damage services. Reach our expert team for flood restoration, water extraction and drying throughout Greater Vancouver."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://vancouverflood.com/contact-us"
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
          content="Contact Us | Vancouver Flood Restoration & Water Damage Services"
        />
        <meta
          name="twitter:description"
          content="Contact Vancouver Flood Restoration for 24/7 emergency water damage services. Reach our expert team for flood restoration, water extraction and drying throughout Greater Vancouver."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/photos/homepage/2.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vancouverflood.com/contact-us" />

        {/* Schema.org data */}
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
        <section className="relative bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto">
              24/7 Emergency Water Damage Services in Vancouver
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="max-w-7xl mx-auto px-4 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                onClick={item.onClick}
                className={`
                  bg-white rounded-xl shadow-xl p-6 text-center 
                  transform hover:-translate-y-1 transition-all duration-300
                  ${item.onClick ? "cursor-pointer hover:shadow-2xl" : ""}
                `}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B2635]/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-[#8B2635]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1C1917] mb-2">
                  {item.title}
                </h3>
                {(copiedPhone && item.title === "Phone") ||
                (copiedEmail && item.title === "Email") ? (
                  <div className="flex items-center justify-center gap-2 text-[#27AE60]">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <p
                    className={`${
                      item.onClick ? "text-[#8B2635]" : "text-[#44403C]"
                    }`}
                  >
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          <div className="bg-white rounded-xl shadow-xl p-8">
            {showSuccess ? (
              <SuccessMessage
                setShowSuccess={setShowSuccess}
                email={formData.email}
              />
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#1C1917] mb-4">
                    Send Us a Message
                  </h2>
                  <div className="flex justify-center items-center gap-4">
                    <div className="h-px w-12 bg-[#8B2635]" />
                    <p className="text-[#44403C]">How can we help you today?</p>
                    <div className="h-px w-12 bg-[#8B2635]" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1C1917] mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1C1917] mb-1"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1C1917] mb-1"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#1C1917] mb-1"
                    >
                      Service Inquiry
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Flood Restoration">
                        Flood Restoration
                      </option>
                      <option value="Water Damage Repair">
                        Water Damage Repair
                      </option>
                      <option value="Structural Drying">
                        Structural Drying
                      </option>
                      <option value="Mold Remediation">Mold Remediation</option>
                      <option value="Insurance Claim">
                        Insurance Claim Assistance
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1C1917] mb-1"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-[#8B2635] transition-colors"
                      required
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#8B2635] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7A2230] transition-all duration-300 group"
                    >
                      <Send className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>

        {/* Map & Areas We Serve Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1917] mb-6">
                Service Areas
              </h2>
              <p className="text-[#44403C] mb-6">
                We provide 24/7 emergency flood and water damage restoration
                services throughout Greater Vancouver, including:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {[
                    "Vancouver",
                    "Burnaby",
                    "Richmond",
                    "Surrey",
                    "North Vancouver",
                    "West Vancouver",
                    "Coquitlam",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8B2635]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-2">
                  {[
                    "Port Coquitlam",
                    "Port Moody",
                    "New Westminster",
                    "Delta",
                    "White Rock",
                    "Langley",
                    "Maple Ridge",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8B2635]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-[#44403C]">
                Don&apos;t see your area listed? Contact us anyway - we likely
                serve your location too!
              </p>
            </div>

            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              {/* Replace with your actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167064.68146977114!2d-123.22407039143263!3d49.2576507608491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1667332456721!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vancouver service area map"
                aria-label="Map showing our service areas in Greater Vancouver"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const SuccessMessage = ({
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
      <h3 className="text-2xl font-medium text-[#1C1917]">
        Message Sent Successfully!
      </h3>

      <div className="space-y-2 text-center">
        <p className="text-[#44403C]">
          Thank you for contacting us. We&apos;ll get back to you shortly.
        </p>
        {email && (
          <p className="text-gray-500 text-sm">
            A confirmation has been sent to {email}
          </p>
        )}
      </div>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 bg-[#8B2635] text-white px-8 py-3 rounded-full hover:bg-[#7A2230]"
      >
        Send Another Message
      </button>
    </div>
  );
};

export default ContactUs;
