import React, { useState, useEffect } from 'react';
import { Phone, Droplets, ClipboardCheck, Search, Ruler, Wrench, PaintBucket, CheckCircle } from 'lucide-react';
import Head from 'next/head';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);

  const metrics = [
    {
      value: "1000+",
      label: "VANCOUVER HOMES RESTORED"
    },
    {
      value: "30min",
      label: "GREATER VANCOUVER RESPONSE"
    },
    {
      value: "24/7",
      label: "VANCOUVER EMERGENCY SERVICE"
    },
    {
      value: "100%",
      label: "CUSTOMER SATISFACTION"
    }
  ];

  const processSteps = [
    {
      id: 1,
      icon: Phone,
      phase: "EMERGENCY RESPONSE",
      title: "Rapid Vancouver Response",
      description: "24/7 emergency water damage response across Greater Vancouver",
      timing: "30-minute response time",
      primaryPoints: [
        "Vancouver emergency team dispatch",
        "Water damage assessment",
        "Immediate safety protocols"
      ],
      details: [
        "Greater Vancouver area coverage",
        "Water damage classification",
        "Vancouver building code compliance",
        "Insurance provider coordination",
        "Digital damage documentation",
        "Emergency electrical assessment",
        "Initial water extraction"
      ],
      schema: {
        "@type": "Service",
        "name": "Emergency Water Damage Response Vancouver",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Vancouver Flood Restoration by Felicita Holdings"
        },
        "areaServed": "Greater Vancouver"
      }
    },
    {
      id: 2,
      icon: Droplets,
      phase: "WATER MITIGATION",
      title: "Advanced Drying Systems",
      description: "Industrial dehumidification for Vancouver&apos;s climate",
      timing: "5-10 days process",
      primaryPoints: [
        "Climate-specific drying protocols",
        "Vancouver humidity control",
        "Environmental monitoring"
      ],
      details: [
        "Vancouver weather adaptations",
        "Coastal humidity management",
        "Daily moisture documentation",
        "Temperature optimization",
        "Equipment placement strategy",
        "Progress tracking system",
        "Timeline projections"
      ]
    },
    {
      id: 3,
      icon: Search,
      phase: "DAMAGE EVALUATION",
      title: "Vancouver Property Analysis",
      description: "Comprehensive Vancouver building inspection",
      timing: "1-2 weeks assessment",
      primaryPoints: [
        "Vancouver building standards",
        "Local material assessment",
        "Structural evaluation"
      ],
      details: [
        "Vancouver construction analysis",
        "Local building code review",
        "Strata property considerations",
        "Rain exposure assessment",
        "Vancouver electrical codes",
        "Plumbing system review",
        "Heat system evaluation",
        "Insulation assessment",
        "Vapor barrier inspection"
      ]
    },
    {
      id: 4,
      icon: ClipboardCheck,
      phase: "INSURANCE PROCESS",
      title: "BC Insurance Management",
      description: "Expert handling of Vancouver insurance claims",
      timing: "2-3 weeks process",
      primaryPoints: [
        "BC insurance documentation",
        "Local coverage verification",
        "Vancouver cost assessment"
      ],
      details: [
        "Vancouver pricing standards",
        "Local material specifications",
        "BC building requirements",
        "Municipal permit review",
        "Vancouver restoration codes",
        "Additional coverage needs",
        "Local price verification",
        "Insurance adjuster liaison",
        "Supplemental documentation"
      ]
    },
    {
      id: 5,
      icon: Ruler,
      phase: "MATERIAL PLANNING",
      title: "Vancouver Materials",
      description: "Local supplier coordination and material selection",
      timing: "2-3 weeks selection",
      primaryPoints: [
        "Vancouver supplier network",
        "Local material sourcing",
        "BC code compliance"
      ],
      details: [
        "Local vendor coordination",
        "Vancouver stock verification",
        "Delivery scheduling",
        "Vancouver pricing review",
        "Quality standards check",
        "Style matching service",
        "Installation planning",
        "Material coordination",
        "On-site storage solutions"
      ]
    },
    {
      id: 6,
      icon: Wrench,
      phase: "SITE PREPARATION",
      title: "Property Preparation",
      description: "Vancouver demolition and site prep protocols",
      timing: "1-2 weeks preparation",
      primaryPoints: [
        "Vancouver safety standards",
        "Local disposal protocols",
        "Site containment"
      ],
      details: [
        "Vancouver work permits",
        "Content protection plan",
        "Material removal process",
        "Fixture preservation",
        "Vancouver disposal rules",
        "Surface preparation",
        "Waste management",
        "Environmental compliance",
        "Site treatment protocols"
      ]
    },
    {
      id: 7,
      icon: Wrench,
      phase: "RESTORATION",
      title: "Vancouver Rebuilding",
      description: "Expert restoration following Vancouver standards",
      timing: "4-8 weeks process",
      primaryPoints: [
        "Vancouver code compliance",
        "Local system integration",
        "Quality restoration"
      ],
      details: [
        "Vancouver framing specs",
        "Local material installation",
        "BC plumbing codes",
        "Vancouver electrical",
        "HVAC integration",
        "Insulation standards",
        "Interior finishing",
        "Custom installations",
        "Local inspections"
      ]
    },
    {
      id: 8,
      icon: PaintBucket,
      phase: "FINISHING",
      title: "Detail Completion",
      description: "Vancouver&apos;s premium finishing services",
      timing: "2-3 weeks finishing",
      primaryPoints: [
        "Local style matching",
        "Vancouver finishes",
        "Quality detailing"
      ],
      details: [
        "Vancouver textures",
        "Local paint selection",
        "Custom trim work",
        "Floor refinishing",
        "Hardware installation",
        "Fixture mounting",
        "Detail cleaning",
        "Final touches",
        "Quality assurance"
      ]
    },
    {
      id: 9,
      icon: CheckCircle,
      phase: "FINAL STEPS",
      title: "Project Completion",
      description: "Final Vancouver inspection and verification",
      timing: "1 week completion",
      primaryPoints: [
        "Vancouver inspection",
        "System certification",
        "Final documentation"
      ],
      details: [
        "Municipal inspection",
        "Client review process",
        "Completion checklist",
        "Final site cleaning",
        "Warranty registration",
        "Maintenance guides",
        "Project documentation",
        "Insurance completion",
        "Final approval"
      ]
    }
  ];

  const handleStepHover = (index: number) => {
    setActiveStep(index);
  };

  const handleStepLeave = () => {
    setActiveStep(null);
  };

  const toggleDetails = (index: number) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Vancouver Water Damage Restoration Process",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Vancouver Flood Restoration by Felicita Holdings",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "828 Cardero St",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "postalCode": "V6G 2G5",
                "addressCountry": "CA"
              }
            },
            "serviceType": "Water Damage Restoration",
            "areaServed": {
              "@type": "City",
              "name": "Vancouver"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Damage Restoration Services",
              "itemListElement": processSteps.map((step, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": step.title,
                  "description": step.description
                }
              }))
            }
          })}
        </script>
      </Head>

      <div className="w-full">
        {/* Metrics Section */}
        <div className="w-full bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">      
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-2">VANCOUVER RESTORATION METRICS</h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-white"></div>
                <p className="text-stone-300 mx-4">Greater Vancouver&apos;s Trusted Restoration Team</p>
                <div className="h-px w-12 bg-white"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#7A2230]">
                    <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="h-px w-12 bg-white mb-4 group-hover:w-16 transition-all duration-300"></div>
                    <div className="text-sm text-stone-300 tracking-wider">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline Section */}
        <section className="py-16 px-5 bg-[#F5F4F0]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 text-[#1C1917]">VANCOUVER RESTORATION PROCESS</h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-[#8B2635]"></div>
                <p className="mx-4 text-[#44403C]">Professional Vancouver Restoration Timeline</p>
                <div className="h-px w-12 bg-[#8B2635]"></div>
              </div>
              <p className="mt-6 text-lg text-[#44403C] max-w-3xl mx-auto">
                Our Vancouver restoration process is adapted to local building codes and climate conditions. 
                While we provide rapid emergency response, full restoration typically takes 4-12 weeks, 
                ensuring compliance with BC building standards and Vancouver&apos;s unique requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={step.id}
                    className={`
                      relative p-6 rounded-xl transition-all duration-300 
                      ${isActive ? 'bg-white shadow-lg scale-105' : 'bg-transparent hover:bg-white/50'}
                      cursor-pointer group
                    `}
                    onMouseEnter={() => handleStepHover(index)}
                    onMouseLeave={handleStepLeave}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B2635] opacity-5 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          ${isActive ? 'bg-[#8B2635] text-white' : 'bg-[#8B2635]/10 text-[#8B2635]'}
                          transition-all duration-300
                        `}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center">
                            <span className="text-sm font-bold text-[#8B2635]">PHASE {step.id}</span>
                          </div>
                          <h3 className="font-bold text-[#1C1917]">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-[#44403C] mb-4">{step.description}</p>
                      
                      <div className={`
                        space-y-2 overflow-hidden transition-all duration-300
                        ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        <div className="text-sm font-medium text-[#8B2635] mb-2">{step.timing}</div>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#44403C]">
                              <div className="w-1 h-1 rounded-full bg-[#8B2635] mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StepsSection;