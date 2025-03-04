import React from "react";
import {
  Droplets,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Navigation from "@/components/Navigation";
import StepsSection from "@/components/StepsSection";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>
          Vancouver Flood Restoration & Water Damage Repair | 24/7 Emergency
          Service | Felicita Holdings
        </title>
        <meta
          name="description"
          content="Vancouver's #1 flood restoration & water damage repair with 24/7 emergency service. 30-minute response time, IICRC certified experts, 100% satisfaction guaranteed. Serving Greater Vancouver since 1995."
        />
        <meta
          name="keywords"
          content="vancouver flood restoration, water damage vancouver, emergency flood repair vancouver, basement flooding vancouver, flood cleanup vancouver, water damage restoration vancouver, mold remediation vancouver, burst pipe repair vancouver, sewage cleanup vancouver, flood damage assessment"
        />
        <meta name="author" content="Felicita Holdings" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#8B2635" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vancouver Flood Restoration by Felicita Holdings",
            image: "https://vancouverflood.com/logo.png",
            description:
              "Professional flood and water damage restoration services in Vancouver",
            priceRange: "$$",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 49.2827,
                longitude: -123.1207,
              },
              geoRadius: "50000",
            },
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
            url: "https://vancouverflood.com",
            telephone: "+17786546742",
            email: "info@vancouverflood.com",
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
              "https://facebook.com/felicitaholdings",
              "https://instagram.com/felicitaholdings",
              "https://linkedin.com/company/felicita-holdings",
              "https://twitter.com/felicitaholdings",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Water Damage Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Water Damage Restoration",
                    description:
                      "24/7 emergency response to water damage incidents in Vancouver homes and businesses.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Flood Cleanup",
                    description:
                      "Professional flood cleanup services for Vancouver residential and commercial properties.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Basement Flood Repair",
                    description:
                      "Specialized basement flooding remediation and repair services.",
                  },
                },
              ],
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "David Chen",
              },
              reviewBody:
                "Felicita Holdings responded within 20 minutes when our basement flooded. Their team was professional, thorough, and restored our home completely. Highly recommended!",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "109",
            },
          })}
        </script>

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Water Damage Restoration",
            provider: {
              "@type": "LocalBusiness",
              name: "Vancouver Flood Restoration by Felicita Holdings",
            },
            areaServed: {
              "@type": "City",
              name: "Vancouver",
              sameAs: "https://en.wikipedia.org/wiki/Vancouver",
            },
            description:
              "Professional emergency water damage restoration and flood repair services in Vancouver and surrounding areas, available 24/7.",
            serviceOutput:
              "Restored and dried property free from water damage and potential mold growth",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              availabilityStarts: "2020-01-01T00:00",
              availabilityEnds: "2030-01-01T00:00",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "CAD",
                description:
                  "Emergency service fees vary based on damage assessment",
              },
            },
          })}
        </script>

        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How quickly can you respond to a water emergency in Vancouver?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our emergency response team arrives at Vancouver locations within 30 minutes of your call, 24 hours a day, 7 days a week, including holidays.",
                },
              },
              {
                "@type": "Question",
                name: "What areas in Vancouver do you service for water damage restoration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We service all of Vancouver and the Greater Vancouver area, including West Vancouver, North Vancouver, Burnaby, Richmond, New Westminster, Coquitlam, Port Coquitlam, Port Moody, Surrey, and Delta.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with insurance for flood damage in Vancouver?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we work directly with all major insurance providers in British Columbia and can help manage your claim from start to finish, minimizing your stress during the restoration process.",
                },
              },
            ],
          })}
        </script>

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vancouver Flood Restoration & Water Damage Repair | 24/7 Emergency Service"
        />
        <meta
          property="og:description"
          content="Vancouver's trusted water damage restoration experts. 30-minute response, IICRC certified technicians, and 100% satisfaction guarantee. Available 24/7 for emergencies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vancouverflood.com" />
        <meta
          property="og:image"
          content="https://vancouverflood.com/og-image.jpg"
        />
        <meta property="og:site_name" content="Vancouver Flood Restoration" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@felicitaholdings" />
        <meta
          name="twitter:title"
          content="Vancouver Flood Restoration & Water Damage Repair | 24/7 Emergency Service"
        />
        <meta
          name="twitter:description"
          content="Vancouver's trusted water damage restoration experts. 30-minute response, IICRC certified technicians, and 100% satisfaction guarantee. Available 24/7 for emergencies."
        />
        <meta
          name="twitter:image"
          content="https://vancouverflood.com/twitter-card-image.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vancouverflood.com" />

        {/* Alternate language versions if applicable */}
        <link
          rel="alternate"
          href="https://vancouverflood.com"
          hrefLang="en-ca"
        />
        <link
          rel="alternate"
          href="https://vancouverflood.com/fr"
          hrefLang="fr-ca"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section
          className="relative min-h-[90vh] flex items-center"
          id="emergency-water-damage-service"
        >
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/2.jpg"
              alt="Vancouver Water Damage Restoration Service"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative w-full">
            <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 flex justify-end">
              <div className="max-w-2xl text-right">
                <span className="inline-block px-4 py-2 rounded-full bg-[#8B2635] text-white text-sm font-medium mb-4">
                  24/7 Emergency Water Damage Service
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Vancouver&apos;s Premier{" "}
                  <span className="text-[#F5F4F0]">Flood Restoration</span> &{" "}
                  <span className="text-[#F5F4F0]">Water Damage</span> Experts
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  30-Minute Response Time | Licensed & Insured | 100%
                  Satisfaction Guaranteed
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-end">
                  <a
                    href="tel:+17786546742"
                    className="flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#7A1F2E] transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call (778) 654-6742</span>
                  </a>
                  <button
                    onClick={() =>
                      handleNavigation("/flood-repair-services-in-vancouver")
                    }
                    className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#F0F0E8] transition-colors duration-300"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3 justify-end">
                    <span className="text-white text-lg font-medium">
                      4.9/5 Rating (109+ Reviews)
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-[#FFD700] text-[#FFD700]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-base">
                    Trusted by 1,000+ Vancouver homeowners & businesses since
                    1995
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16 bg-white" id="water-damage-services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vancouver Water Damage Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive flood restoration and water damage repair services
                for Vancouver homes and businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#F5F4F0] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#8B2635] rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  30-Minute Emergency Response
                </h3>
                <p className="text-gray-700">
                  Our Vancouver-based emergency response team arrives within 30
                  minutes to minimize water damage and start immediate
                  restoration.
                </p>
              </div>

              <div className="bg-[#F5F4F0] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#8B2635] rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  IICRC Certified Technicians
                </h3>
                <p className="text-gray-700">
                  Our Vancouver flood restoration experts are fully certified,
                  licensed, and insured for all water damage repairs.
                </p>
              </div>

              <div className="bg-[#F5F4F0] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#8B2635] rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-gray-700">
                  Vancouver&apos;s most trusted water damage repair service with
                  hundreds of 5-star reviews from satisfied customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main>
          <ComparisonSection />
          <StepsSection />

          {/* Service Areas Section */}
          <section className="py-16 bg-[#F5F4F0]" id="vancouver-service-areas">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Water Damage Restoration Throughout Vancouver
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We provide flood restoration and water damage repair services
                  throughout Vancouver and surrounding areas
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Downtown Vancouver",
                  "West Vancouver",
                  "North Vancouver",
                  "Burnaby",
                  "Richmond",
                  "Surrey",
                  "Coquitlam",
                  "Port Coquitlam",
                  "New Westminster",
                  "Delta",
                  "Langley",
                  "White Rock",
                ].map((area) => (
                  <div key={area} className="bg-white p-4 rounded-lg">
                    <Link
                      href={`/water-damage-restoration-${area
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-[#8B2635]"
                    >
                      <h3 className="text-lg font-medium">
                        {area} Water Damage Restoration
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />
          <FAQ />

          {/* CTA Section */}
          <section
            className="relative py-24 overflow-hidden"
            id="emergency-flood-response"
          >
            <div className="absolute inset-0 bg-[#8B2635]">
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] opacity-20" />
              <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vancouver Water Emergency? We&apos;re Here 24/7
              </h2>
              <p className="text-stone-300 mb-6 text-lg max-w-2xl mx-auto">
                Vancouver&apos;s trusted name in water damage restoration. Rapid
                response, lasting solutions.
              </p>
              <p className="text-white text-2xl font-bold mb-8">
                (778) 654-6742
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+17786546742"
                  className="group flex items-center justify-center gap-2 bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => handleNavigation("/contact-us")}
                  className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Request Service</span>
                </button>
              </div>
            </div>
          </section>

          {/* SEO optimization handled through structured data and main UI components */}
        </main>

        {/* No footer here - using app-level footer component */}
      </div>
    </>
  );
};

export default Home;
