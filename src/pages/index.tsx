import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import { Droplets, Phone, Mail, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation showActions={false} />

      {/* Hero Section - Mobile First */}
      <section className="relative bg-gradient-to-b from-stone-100 to-[#F5F4F0] overflow-hidden">
        <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Serving Brooklyn Since 2022
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display text-[#1C1917]">
                Brooklyn&apos;s
                <span className="block text-[#8B2635]">Flood Restoration</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 max-w-lg">
                Where Brooklyn grit meets modern restoration techniques. Protecting your homes and businesses with local expertise.
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
                  <span>Get Estimate</span>
                </button>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex">
                  <Droplets className="w-6 h-6 text-[#8B2635]" />
                  <span className="ml-2 text-[#44403C] font-medium">Local Brooklyn Team</span>
                </div>
                <div className="h-8 w-px bg-stone-300" />
                <p className="text-[#44403C]">
                  <span className="font-semibold">100+</span> Properties Restored
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] w-full">
                {/* Main image */}
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Professional Flood Restoration in Brooklyn"
                  fill
                  priority
                  className="rounded-3xl object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 500px, 600px"
                />
                
                {/* Industrial-style overlays */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#F5F4F0] via-transparent to-[#F5F4F0] opacity-20" />
                <div className="absolute inset-0 rounded-3xl mix-blend-multiply bg-stone-200 opacity-10" />
                
                {/* Vintage texture */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-5" />
                </div>
                
                {/* Industrial frame */}
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
            Flood Emergency? We&apos;re Here 24/7
          </h2>
          <p className="text-stone-300 mb-12 text-lg max-w-2xl mx-auto">
            Brooklyn&apos;s rising force in water damage restoration. Fast response, tough solutions.
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
  );
};

export default Home;