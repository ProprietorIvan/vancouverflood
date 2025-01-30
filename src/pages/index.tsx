import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import { Droplets, Phone, Mail, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>Vancouver Flood Restoration & Emergency Water Damage Repair | Felicita Holdings</title>
        <meta name="description" content="24/7 emergency flood & water damage restoration in Vancouver. Local experts serving Greater Vancouver area since 1995. Fast response, professional service by Felicita Holdings." />
        <meta name="keywords" content="vancouver flood restoration, water damage vancouver, emergency flood repair vancouver, basement flooding vancouver, flood cleanup vancouver, water damage restoration vancouver" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vancouver Flood Restoration & Emergency Water Damage Repair" />
        <meta property="og:description" content="24/7 emergency flood & water damage restoration in Vancouver. Professional service by Felicita Holdings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vancouverflood.com" />
        <meta property="og:image" content="https://vancouverflood.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vancouver Flood Restoration & Emergency Water Damage Repair" />
        <meta name="twitter:description" content="24/7 emergency flood & water damage restoration in Vancouver. Professional service by Felicita Holdings." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://vancouverflood.com" />
        
        {/* Location Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vancouver Flood Restoration by Felicita Holdings",
            "image": "https://vancouverflood.com/logo.png",
            "description": "Professional flood and water damage restoration services in Vancouver",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "828 Cardero St",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "postalCode": "V6G 2G5",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.2827,
              "longitude": -123.1207
            },
            "url": "https://vancouverflood.com",
            "telephone": "+17786546742",
            "openingHours": "Mo-Su 00:00-23:59",
            "sameAs": [
              "https://facebook.com/felicitaholdings",
              "https://instagram.com/felicitaholdings"
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={false} />

        {/* Hero Section - Mobile First */}
        <section className="relative bg-gradient-to-b from-stone-100 to-[#F5F4F0] overflow-hidden">
          <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          
          <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Serving Vancouver Since 1995
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display text-[#1C1917]">
                  Vancouver&apos;s
                  <span className="block text-[#8B2635]">Flood Specialists</span>
                </h1>
                <p className="text-xl text-[#44403C] mb-8 max-w-lg">
                  Where West Coast expertise meets advanced restoration technology. Protecting homes and businesses across Greater Vancouver.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleNavigation('/flood-repair')}
                    className="group flex items-center justify-center gap-2 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>24/7 Emergency</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="group flex items-center justify-center gap-2 bg-white border-2 border-[#1C1917] text-[#1C1917] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Free Quote</span>
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className="flex">
                    <Droplets className="w-6 h-6 text-[#8B2635]" />
                    <span className="ml-2 text-[#44403C] font-medium">Vancouver-Based Team</span>
                  </div>
                  <div className="h-8 w-px bg-stone-300" />
                  <p className="text-[#44403C]">
                    <span className="font-semibold">1000+</span> Properties Restored
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] w-full">
                  <Image
                    src="/photos/homepage/1.jpg"
                    alt="Professional Flood Restoration in Vancouver"
                    fill
                    priority
                    className="rounded-3xl object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 500px, 600px"
                  />
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#F5F4F0] via-transparent to-[#F5F4F0] opacity-20" />
                  <div className="absolute inset-0 rounded-3xl mix-blend-multiply bg-stone-200 opacity-10" />
                  
                  <div className="absolute inset-0 rounded-3xl">
                    <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
                  <div className="absolute inset-0 border-2 border-[#8B2635]/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComparisonSection />
        <StepsSection />
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
              Vancouver&apos;s trusted name in water damage restoration. Rapid response, lasting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigation('/flood-repair')}
                className="group flex items-center justify-center gap-2 bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;