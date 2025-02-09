import React from "react";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

const FAQ = () => {
  const faqData = [
    {
      question: "How quickly can you respond to a flood emergency?",
      answer:
        "We guarantee a 1-hour response time for emergencies throughout the Lower Mainland. Our rapid response team is available 24/7, equipped with commercial-grade water extraction and drying equipment to begin mitigation immediately.",
    },
    {
      question: "What should I do while waiting for your team to arrive?",
      answer:
        "If safe, locate and turn off the main water supply if flooding is from a pipe burst. Move valuable items to higher ground and avoid any standing water due to potential electrical hazards. Document the damage with photos if possible, but prioritize your safety first. For strata properties, notify your property manager immediately.",
    },
    {
      question: "Do you work with insurance companies?",
      answer:
        "Yes, we work directly with all major insurance providers in BC, including ICBC and private insurers. We provide comprehensive documentation, detailed reports, and can guide you through the claims process. Our team understands BC insurance requirements and ensures proper documentation for maximum coverage.",
    },
    {
      question: "How do you prevent mold in Vancouvers humid climate?",
      answer:
        "We use industrial dehumidifiers and specialized air movers designed for Vancouvers coastal climate to thoroughly dry affected areas within 48-72 hours - the critical window for preventing mold growth. We also apply professional antimicrobial treatments and perform humidity testing to ensure moisture levels meet BC building standards.",
    },
    {
      question: "How long does the restoration process take?",
      answer:
        "The timeline varies based on damage extent and local building requirements. Typically: Water extraction takes 2-4 hours, drying takes 3-5 days (accounting for Vancouver's humidity), and full restoration can take 1-2 weeks for standard projects. We provide a detailed timeline after our initial assessment.",
    },
    {
      question: "What areas of the Lower Mainland do you serve?",
      answer:
        "We serve all Lower Mainland communities including Vancouver, Burnaby, Richmond, North Vancouver, West Vancouver, Surrey, New Westminster, and beyond. Our teams are strategically positioned throughout the region to ensure prompt response to any location.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <section className="py-16 px-5" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight text-[#1C1917]">
                Frequently Asked Questions
              </h3>
              <p className="text-lg mt-4 text-[#44403C]">
                Learn about our Vancouver flood restoration services
              </p>
            </div>

            <div className="w-full md:w-1/2 max-w-xl mx-auto">
              <div className="grid divide-y divide-stone-200">
                {faqData.map((faq, index) => (
                  <div className="py-5" key={index}>
                    <details className="group">
                      <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none text-[#1C1917]">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <ArrowRight className="h-5 w-5 text-[#8B2635]" />
                        </span>
                      </summary>
                      <p className="text-[#44403C] mt-3 group-open:animate-fadeIn">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
