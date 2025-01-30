import React, { useState, useEffect } from 'react';
import { Phone, Droplets, ClipboardCheck, Search, Ruler, Wrench, PaintBucket, CheckCircle } from 'lucide-react';

// Utility function for conditional class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);

  const metrics = [
    {
      value: "500+",
      label: "PROPERTIES RESTORED"
    },
    {
      value: "60min",
      label: "RESPONSE TIME"
    },
    {
      value: "24/7",
      label: "EMERGENCY SERVICE"
    },
    {
      value: "100%",
      label: "SATISFACTION RATE"
    }
  ];

  const processSteps = [
    {
      id: 1,
      icon: Phone,
      phase: "EMERGENCY PHASE",
      title: "Initial Response",
      description: "24/7 emergency response and water extraction services",
      timing: "Within hours of contact",
      primaryPoints: [
        "Rapid emergency team deployment",
        "Water source identification",
        "Initial safety assessment"
      ],
      details: [
        "Complete property access coordination",
        "Water classification (clean/gray/black)",
        "Immediate safety hazard identification",
        "Initial insurance contact",
        "Preliminary damage documentation",
        "Emergency power assessment",
        "Initial extraction equipment setup"
      ]
    },
    {
      id: 2,
      icon: Droplets,
      phase: "MITIGATION PHASE",
      title: "Professional Drying",
      description: "Industrial-grade drying process with advanced monitoring",
      timing: "Minimum 7-14 days",
      primaryPoints: [
        "Industrial dehumidifier deployment",
        "Strategic air mover placement",
        "Daily moisture tracking"
      ],
      details: [
        "Custom drying plan development",
        "Moisture mapping creation",
        "Daily moisture readings at marked points",
        "Temperature and humidity monitoring",
        "Equipment adjustment as needed",
        "Daily progress documentation",
        "Drying time estimates based on materials"
      ]
    },
    {
      id: 3,
      icon: Search,
      phase: "ASSESSMENT PHASE",
      title: "Damage Analysis",
      description: "Comprehensive evaluation of all affected areas and materials",
      timing: "Throughout drying (1-2 weeks)",
      primaryPoints: [
        "Structural assessment",
        "Material damage evaluation",
        "Hidden damage investigation"
      ],
      details: [
        "Floor system evaluation (all layers)",
        "Wall cavity inspection",
        "Cabinet and millwork assessment",
        "Ceiling and support evaluation",
        "Electrical system inspection",
        "Plumbing system assessment",
        "HVAC system evaluation",
        "Insulation condition check",
        "Moisture barrier inspection"
      ]
    },
    {
      id: 4,
      icon: ClipboardCheck,
      phase: "DOCUMENTATION PHASE",
      title: "Insurance Coordination",
      description: "Detailed claims management and scope development",
      timing: "2-3 weeks for initial process",
      primaryPoints: [
        "Complete damage documentation",
        "Coverage verification",
        "Estimate development"
      ],
      details: [
        "Detailed photo documentation",
        "Moisture reading logs",
        "Line-item damage scope",
        "Material replacement specifications",
        "Code upgrade requirements",
        "Additional damage documentation",
        "Price verification process",
        "Adjuster coordination",
        "Supplemental claim preparation"
      ]
    },
    {
      id: 5,
      icon: Ruler,
      phase: "PLANNING PHASE",
      title: "Material Selection",
      description: "Comprehensive selection of replacement materials and finishes",
      timing: "2-4 weeks for selections",
      primaryPoints: [
        "Flooring selection process",
        "Cabinet specifications",
        "Finish material choices"
      ],
      details: [
        "Sample procurement and review",
        "Material availability verification",
        "Lead time assessment",
        "Budget consideration for each item",
        "Material grade selection",
        "Color and style matching",
        "Installation requirement review",
        "Material ordering coordination",
        "Storage and delivery planning"
      ]
    },
    {
      id: 6,
      icon: Wrench,
      phase: "DEMOLITION PHASE",
      title: "Removal & Preparation",
      description: "Systematic demolition and site preparation",
      timing: "1-3 weeks based on scope",
      primaryPoints: [
        "Containment setup",
        "Systematic material removal",
        "Site preparation"
      ],
      details: [
        "Work area isolation",
        "Furniture and content protection",
        "Floor covering removal",
        "Cabinet and fixture removal",
        "Drywall and insulation removal",
        "Subfloor inspection and removal",
        "Surface preparation",
        "Debris removal and sorting",
        "Anti-microbial treatment"
      ]
    },
    {
      id: 7,
      icon: Wrench,
      phase: "RECONSTRUCTION PHASE",
      title: "Rebuilding Process",
      description: "Comprehensive reconstruction of affected areas",
      timing: "4-12 weeks depending on scope",
      primaryPoints: [
        "Structural repairs",
        "System restoration",
        "Surface reconstruction"
      ],
      details: [
        "Framing repairs or replacement",
        "Subfloor installation",
        "Plumbing system repairs",
        "Electrical system restoration",
        "HVAC system repairs",
        "Insulation installation",
        "Drywall installation",
        "Cabinet installation",
        "Door and trim installation",
        "Initial systems testing"
      ]
    },
    {
      id: 8,
      icon: PaintBucket,
      phase: "FINISHING PHASE",
      title: "Detail Work",
      description: "Fine detail completion and finishing work",
      timing: "2-4 weeks for completion",
      primaryPoints: [
        "Surface finishing",
        "Paint application",
        "Final detailing"
      ],
      details: [
        "Wall texturing",
        "Primary paint coating",
        "Trim installation and finishing",
        "Floor finishing",
        "Cabinet hardware installation",
        "Fixture installation",
        "Detail cleaning",
        "Touch-up work",
        "Final adjustments"
      ]
    },
    {
      id: 9,
      icon: CheckCircle,
      phase: "COMPLETION PHASE",
      title: "Final Inspection",
      description: "Quality assurance and project completion",
      timing: "1-2 weeks for final process",
      primaryPoints: [
        "Quality control inspection",
        "Systems verification",
        "Project documentation"
      ],
      details: [
        "Detailed inspection process",
        "Client walkthrough",
        "Punch list completion",
        "Final cleaning",
        "Warranty documentation",
        "Maintenance instructions",
        "Final photographs",
        "Insurance paperwork completion",
        "Project closeout documents"
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
    <div className="w-full">
      {/* Metrics Section */}
      <div className="w-full bg-gradient-to-b from-[#8B2635] to-[#6B1D29] py-20">      
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">BY THE NUMBERS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-white"></div>
              <p className="text-stone-300 mx-4">Fast Response, Reliable Results</p>
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
            <h2 className="text-4xl font-bold mb-2 text-[#1C1917]">RESTORATION PROCESS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-[#8B2635]"></div>
              <p className="mx-4 text-[#44403C]">Professional Restoration Timeline</p>
              <div className="h-px w-12 bg-[#8B2635]"></div>
            </div>
            <p className="mt-6 text-lg text-[#44403C] max-w-3xl mx-auto">
              While we respond quickly to emergencies, quality restoration requires proper time 
              and attention to detail. Our comprehensive process typically spans 6 weeks to 6 months, 
              ensuring every aspect is handled with precision and care.
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
                          <span className="text-sm font-bold text-[#8B2635]">STEP {step.id}</span>
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
  );
};

export default StepsSection;