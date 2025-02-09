import { ChevronRight, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string, isPhone: boolean) => {
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

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />

      <section className="px-4 sm:px-6 pt-32 pb-16 sm:py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-[#1C1917]">
            24/7 Emergency Response
          </h3>
          <p className="text-lg sm:text-xl text-[#44403C] mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Vancouvers trusted flood and water damage restoration experts.
            Contact us for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg px-4">
            <button
              onClick={() => copyToClipboard("+1 778-654-6742", true)}
              className={`flex items-center justify-center px-6 sm:px-8 py-4 rounded-full transition-all duration-200 group ${
                copiedPhone
                  ? "bg-[#27AE60] text-white scale-95"
                  : "bg-[#8B2635] text-white hover:bg-[#7A2230]"
              }`}
            >
              {copiedPhone ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-in fade-in duration-200" />
              ) : (
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              )}
              <span>{copiedPhone ? "Copied!" : "+1 778-654-6742"}</span>
              {!copiedPhone && (
                <Copy className="w-4 h-4 sm:w-5 sm:h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              )}
            </button>

            <button
              onClick={() =>
                copyToClipboard("office@vancouverflood.com", false)
              }
              className={`flex items-center justify-center px-6 sm:px-8 py-4 rounded-full transition-all duration-200 group ${
                copiedEmail
                  ? "bg-[#27AE60] text-white scale-95"
                  : "bg-white text-[#1C1917] hover:bg-stone-50 border border-[#1C1917]"
              }`}
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-in fade-in duration-200" />
              ) : (
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              )}
              <span className="hidden sm:inline">
                {copiedEmail ? "Copied!" : "office@vancouverflood.com"}
              </span>
              <span className="sm:hidden">
                {copiedEmail ? "Copied!" : "Email Us"}
              </span>
              {!copiedEmail && (
                <Copy className="w-4 h-4 sm:w-5 sm:h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
