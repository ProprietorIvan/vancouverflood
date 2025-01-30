import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "How quickly can you respond to a flood emergency?",
      answer: "We guarantee a 60-minute response time for emergencies across Brooklyn. Our rapid response team is available 24/7, fully equipped with industrial-grade water extraction and drying equipment to begin mitigation immediately."
    },
    {
      question: "What should I do while waiting for your team to arrive?",
      answer: "If safe to do so, turn off the main water supply if the flooding is from a pipe burst. Move valuable items to higher ground and avoid entering standing water due to electrical hazards. Document the damage with photos if possible, but your safety comes first."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with all major insurance companies in Brooklyn. We document everything thoroughly, provide detailed reports, and can help guide you through the claims process. We understand how to properly document water damage to ensure maximum coverage."
    },
    {
      question: "How do you prevent mold after water damage?",
      answer: "We use industrial dehumidifiers and air movers to thoroughly dry affected areas within 48-72 hours - the critical window for preventing mold growth. We also apply antimicrobial treatments when necessary and can perform testing to ensure moisture levels are back to normal."
    },
    {
      question: "How long does the restoration process take?",
      answer: "The timeline varies depending on the extent of water damage, but typically: Water extraction takes 2-4 hours, drying takes 2-3 days, and full restoration can take 5-7 days for standard projects. We&apos;ll provide you with a detailed timeline after our initial assessment."
    },
    {
      question: "What areas of Brooklyn do you serve?",
      answer: "We serve all Brooklyn neighborhoods including Williamsburg, DUMBO, Park Slope, Bedford-Stuyvesant, Crown Heights, and beyond. Our multiple teams are strategically positioned throughout Brooklyn to ensure rapid response anywhere in the borough."
    }
  ];

  return (
    <section className="py-16 px-5" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight text-[#1C1917]">
              Common Questions
            </h3>
            <p className="text-lg mt-4 text-[#44403C]">
              Get answers about our flood restoration process
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
  );
};

export default FAQ;