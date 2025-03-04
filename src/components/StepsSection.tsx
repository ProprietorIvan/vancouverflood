import React, { useState, useEffect } from "react";
import {
  Phone,
  Droplets,
  ClipboardCheck,
  Search,
  Ruler,
  Wrench,
  PaintBucket,
  CheckCircle,
} from "lucide-react";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);

  const metrics = [
    {
      value: "1000+",
      label: "VANCOUVER PROPERTIES RESTORED",
    },
    {
      value: "90min",
      label: "VANCOUVER RESPONSE TIME",
    },
    {
      value: "24/7",
      label: "GREATER VANCOUVER SERVICE",
    },
    {
      value: "100%",
      label: "SATISFACTION GUARANTEE",
    },
  ];

  const processSteps = [
    {
      id: 1,
      icon: Phone,
      phase: "EMERGENCY RESPONSE",
      title: "Emergency Contact",
      description: "90-minute response time across Greater Vancouver",
      timing: "Immediate Response",
      primaryPoints: [
        "Vancouver-wide emergency service",
        "Rapid team deployment",
        "Initial damage assessment",
      ],
      details: [
        "24/7 Vancouver emergency response",
        "Initial water damage assessment",
        "Safety hazard identification",
        "Property access coordination",
        "Insurance company notification",
        "Emergency power arrangements",
        "Initial equipment deployment",
      ],
    },
    {
      id: 2,
      icon: Droplets,
      phase: "WATER REMOVAL",
      title: "Water Extraction",
      description: "Professional water removal across Vancouver properties",
      timing: "First 24-48 hours",
      primaryPoints: [
        "Industrial water extraction",
        "Basement flood pumping",
        "Surface water removal",
      ],
      details: [
        "High-powered extraction equipment",
        "Basement water removal",
        "Carpet and pad extraction",
        "Standing water elimination",
        "Water migration tracking",
        "Content protection",
        "Initial sanitization application",
      ],
    },
    {
      id: 3,
      icon: Search,
      phase: "DRYING PROCESS",
      title: "Structural Drying",
      description: "Vancouver's comprehensive drying solutions",
      timing: "3-7 days typical",
      primaryPoints: [
        "Industrial dehumidification",
        "Strategic drying plan",
        "Daily moisture monitoring",
      ],
      details: [
        "Commercial dehumidifier placement",
        "Air movement system setup",
        "Vancouver climate considerations",
        "Temperature control measures",
        "Humidity regulation",
        "Progress documentation",
        "Equipment adjustment protocols",
      ],
    },
    {
      id: 4,
      icon: ClipboardCheck,
      phase: "ASSESSMENT",
      title: "Damage Evaluation",
      description: "Detailed Vancouver property assessment",
      timing: "Throughout drying process",
      primaryPoints: [
        "Structural inspection",
        "Material testing",
        "Damage documentation",
      ],
      details: [
        "Vancouver building code review",
        "Structural integrity checks",
        "Hidden damage investigation",
        "Moisture mapping creation",
        "Photo documentation",
        "Material salvage assessment",
        "Restoration plan development",
      ],
    },
    {
      id: 5,
      icon: Wrench,
      phase: "DEMOLITION",
      title: "Controlled Demolition",
      description: "Professional removal of damaged materials",
      timing: "1-2 weeks typically",
      primaryPoints: [
        "Contaminated material removal",
        "Structural clearing",
        "Site preparation",
      ],
      details: [
        "Safe material disposal",
        "Vancouver disposal regulations",
        "Contamination containment",
        "Affected area isolation",
        "Environmental protection",
        "HVAC protection",
        "Content removal coordination",
      ],
    },
    {
      id: 6,
      icon: Ruler,
      phase: "RECONSTRUCTION",
      title: "Structural Repair",
      description: "Vancouver code-compliant rebuilding",
      timing: "2-6 weeks based on scope",
      primaryPoints: [
        "Vancouver code compliance",
        "Structural restoration",
        "System reconstruction",
      ],
      details: [
        "Building permit coordination",
        "Vancouver inspection scheduling",
        "Structural repairs",
        "Electrical system restoration",
        "Plumbing system repairs",
        "HVAC reconstruction",
        "Insulation replacement",
      ],
    },
    {
      id: 7,
      icon: PaintBucket,
      phase: "FINISHING",
      title: "Property Restoration",
      description: "Complete Vancouver property restoration",
      timing: "1-3 weeks final phase",
      primaryPoints: [
        "Surface finishing",
        "Paint application",
        "Final detailing",
      ],
      details: [
        "Wall texturing",
        "Vancouver color matching",
        "Trim installation",
        "Floor finishing",
        "Cabinet restoration",
        "Fixture installation",
        "Final cleaning",
      ],
    },
    {
      id: 8,
      icon: CheckCircle,
      phase: "COMPLETION",
      title: "Final Inspection",
      description: "Comprehensive quality assurance",
      timing: "1 week final process",
      primaryPoints: [
        "Vancouver code verification",
        "Quality inspection",
        "Client approval",
      ],
      details: [
        "Final Vancouver inspection",
        "System testing",
        "Client walkthrough",
        "Warranty documentation",
        "Maintenance instructions",
        "Project documentation",
        "Insurance paperwork completion",
      ],
    },
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
    <div className="w-full">
      {/* Metrics Section */}
      <div className="w-full bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">
              VANCOUVER&apos;S TRUSTED RESTORATION TEAM
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-white"></div>
              <p className="text-stone-300 mx-4">
                Greater Vancouver&apos;s Emergency Response Experts
              </p>
              <div className="h-px w-12 bg-white"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#7A2230]">
                  <div className="text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="h-px w-12 bg-white mb-4 group-hover:w-16 transition-all duration-300"></div>
                  <div className="text-sm text-stone-300 tracking-wider">
                    {metric.label}
                  </div>
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
            <h2 className="text-4xl font-bold mb-2 text-[#1C1917]">
              VANCOUVER RESTORATION PROCESS
            </h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#8B2635]"></div>
              <p className="mx-4 text-[#44403C]">
                Professional Vancouver Water Damage Timeline
              </p>
              <div className="h-px w-12 bg-[#8B2635]"></div>
            </div>
            <p className="mt-6 text-lg text-[#44403C] max-w-3xl mx-auto">
              Our Vancouver restoration process is carefully designed to address
              the unique challenges of the Lower Mainland climate. While we
              provide immediate emergency response, a thorough restoration
              typically takes 2-8 weeks, ensuring your property is properly
              restored to pre-loss condition.
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
                    ${
                      isActive
                        ? "bg-white shadow-lg scale-105"
                        : "bg-transparent hover:bg-white/50"
                    }
                    cursor-pointer group
                  `}
                  onMouseEnter={() => handleStepHover(index)}
                  onMouseLeave={handleStepLeave}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B2635] opacity-5 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`
                        w-12 h-12 rounded-full flex items-center justify-center
                        ${
                          isActive
                            ? "bg-[#8B2635] text-white"
                            : "bg-[#8B2635]/10 text-[#8B2635]"
                        }
                        transition-all duration-300
                      `}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-[#8B2635]">
                            PHASE {step.id}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#1C1917]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#44403C] mb-4">{step.description}</p>

                    <div
                      className={`
                      space-y-2 overflow-hidden transition-all duration-300
                      ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}
                    >
                      <div className="text-sm font-medium text-[#8B2635] mb-2">
                        {step.timing}
                      </div>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-[#44403C]"
                          >
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
  );
};

export default StepsSection;
