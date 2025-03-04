import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>
          Terms & Conditions | Vancouver Flood Restoration | Felicita Holdings
        </title>
        <meta
          name="description"
          content="Review the terms and conditions for Vancouver Flood Restoration services. Learn about our service agreements, warranties, and legal policies."
        />
        <link rel="canonical" href="https://vancouverflood.com/terms" />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={true} />

        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-[#8B2635]">
            Terms & Conditions
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p>Last Updated: March 4, 2025</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use
                of the Vancouver Flood Restoration website and services operated
                by Felicita Holdings (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;). By accessing our website or using our
                services, you agree to be bound by these Terms. If you disagree
                with any part of the terms, you may not access our services.
              </p>

              <h2>2. Services</h2>
              <p>
                Vancouver Flood Restoration provides water damage restoration,
                flood cleanup, basement flood repair, mold remediation, and
                related services to residential and commercial properties in
                Vancouver and the surrounding areas.
              </p>
              <p>
                The specific services to be provided will be outlined in a
                separate Service Agreement, which will be provided after our
                initial assessment of your property.
              </p>

              <h2>3. Service Estimates</h2>
              <p>
                Estimates provided for our services are based on our
                professional assessment of the work required. However, actual
                costs may vary based on unforeseen conditions discovered during
                the restoration process. We will communicate any significant
                changes in scope or cost as soon as they are identified.
              </p>

              <h2>4. Service Scheduling and Access</h2>
              <p>
                By scheduling our services, you agree to provide our technicians
                with necessary access to your property. You understand that
                authorized representatives must be present at the beginning and
                end of service appointments.
              </p>

              <h2>5. Payment Terms</h2>
              <p>
                Payment for our services is due as specified in your Service
                Agreement. We accept various payment methods including credit
                cards, debit cards, checks, and bank transfers. For
                insurance-covered work, we will work directly with your
                insurance company when possible, but you remain ultimately
                responsible for any costs not covered by insurance.
              </p>

              <h2>6. Warranties</h2>
              <p>
                We warrant our workmanship for a period of one (1) year from the
                date of completion. This warranty covers defects in workmanship
                but does not cover damages caused by future water intrusion,
                natural disasters, or normal wear and tear. Equipment and
                materials may be covered by separate manufacturer warranties.
              </p>

              <h2>7. Insurance and Liability</h2>
              <p>
                We maintain proper licensing and insurance for all our
                operations. While we exercise due care in performing our
                services, we are not liable for pre-existing conditions,
                unavoidable damage that may occur during necessary restoration
                procedures, or issues arising from undetected conditions that
                reasonable inspection would not discover.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                The content on our website, including text, graphics, logos,
                images, and software, is the property of Vancouver Flood
                Restoration and is protected by copyright and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works from this content without our express written
                consent.
              </p>

              <h2>9. Website Use and Online Content</h2>
              <p>
                Our website is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. We do not warrant that the website will
                be uninterrupted or error-free. We reserve the right to modify
                or discontinue any aspect of our website at any time.
              </p>

              <h2>10. Reviews and Testimonials</h2>
              <p>
                By submitting reviews, comments, or testimonials about our
                services, you grant us the right to use, reproduce, modify, and
                display such content for marketing and promotional purposes. We
                reserve the right to remove any content that we deem
                inappropriate or not aligned with our values.
              </p>

              <h2>11. Termination of Services</h2>
              <p>
                We reserve the right to refuse or terminate service at our
                discretion, particularly in cases where safety concerns exist,
                access is inadequate, or payment terms are not met. You may
                terminate services as specified in your Service Agreement,
                though cancellation fees may apply for scheduled appointments.
              </p>

              <h2>12. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall
                first be addressed through good-faith negotiation. If a
                resolution cannot be reached, disputes will be resolved through
                binding arbitration in Vancouver, British Columbia, in
                accordance with the laws of British Columbia and Canada.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting to our website. Your
                continued use of our services following the posting of revised
                Terms means you accept and agree to the changes.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <p>
                Email: info@vancouverflood.com
                <br />
                Phone: +1 778-654-6742
                <br />
                Address: 828 Cardero St, Vancouver, BC V6G 2G5
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TermsAndConditions;
