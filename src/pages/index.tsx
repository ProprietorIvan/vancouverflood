import React from "react";
import { Droplets, Phone, Mail, ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Navigation from "@/components/Navigation";
import StepsSection from "@/components/StepsSection";

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>
          Vancouver Flood Restoration & Emergency Water Damage Repair | Felicita
          Holdings
        </title>
        <meta
          name="description"
          content="24/7 emergency flood & water damage restoration in Vancouver. Local experts serving Greater Vancouver area since 1995. Fast response, professional service by Felicita Holdings."
        />
        <meta
          name="keywords"
          content="vancouver flood restoration, water damage vancouver, emergency flood repair vancouver, basement flooding vancouver, flood cleanup vancouver, water damage restoration vancouver"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vancouver Flood Restoration & Emergency Water Damage Repair"
        />
        <meta
          property="og:description"
          content="24/7 emergency flood & water damage restoration in Vancouver. Professional service by Felicita Holdings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vancouverflood.com" />
        <meta
          property="og:image"
          content="https://vancouverflood.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vancouver Flood Restoration & Emergency Water Damage Repair"
        />
        <meta
          name="twitter:description"
          content="24/7 emergency flood & water damage restoration in Vancouver. Professional service by Felicita Holdings."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vancouverflood.com" />

        {/* Location Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vancouver Flood Restoration by Felicita Holdings",
            image: "https://vancouverflood.com/logo.png",
            description:
              "Professional flood and water damage restoration services in Vancouver",
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
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: [
              "https://facebook.com/felicitaholdings",
              "https://instagram.com/felicitaholdings",
            ],
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/2.jpg"
              alt="Professional Flood Restoration in Vancouver"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Vancouver&apos;s Premier Flood Response Team
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                24/7 Emergency Water Damage Solutions
              </p>
              <button
                onClick={() =>
                  handleNavigation("/flood-repair-services-in-vancouver")
                }
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium mb-8 hover:bg-[#8B2635] hover:text-white transition-colors duration-300"
              >
                Get Emergency Service
              </button>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#8B2635] text-[#8B2635]"
                    />
                  ))}
                </div>
                <span className="text-white text-lg">
                  1000+ Properties Restored
                </span>
              </div>
            </div>
          </div>
        </section>

        <main>
          <ComparisonSection />
          <StepsSection />
          <Testimonials />
          <FAQ />

          {/* CTA Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[#8B2635]">
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:32px_32px] opacity-20" />
              <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Water Emergency? We&apos;re Here 24/7
              </h2>
              <p className="text-stone-300 mb-12 text-lg max-w-2xl mx-auto">
                Vancouver&apos;s trusted name in water damage restoration. Rapid
                response, lasting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    handleNavigation("/flood-repair-services-in-vancouver")
                  }
                  className="group flex items-center justify-center gap-2 bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleNavigation("/contact-us")}
                  className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
