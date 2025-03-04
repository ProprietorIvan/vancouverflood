import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>
          Privacy Policy | Vancouver Flood Restoration | Felicita Holdings
        </title>
        <meta
          name="description"
          content="Learn about how Vancouver Flood Restoration collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security."
        />
        <link rel="canonical" href="https://vancouverflood.com/privacy" />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={true} />

        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-[#8B2635]">
            Privacy Policy
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p>Last Updated: March 4, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                At Vancouver Flood Restoration, operated by Felicita Holdings
                (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we respect
                your privacy and are committed to protecting your personal data.
                This privacy policy will inform you how we look after your
                personal data when you visit our website and tell you about your
                privacy rights and how the law protects you.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of
                personal data about you as follows:
              </p>
              <ul>
                <li>
                  <strong>Identity Data</strong> includes first name, last name,
                  title.
                </li>
                <li>
                  <strong>Contact Data</strong> includes billing address,
                  delivery address, email address and telephone numbers.
                </li>
                <li>
                  <strong>Service Data</strong> includes details about your
                  property, the type of water damage experienced, and
                  restoration services required.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you
                  use our website and services.
                </li>
              </ul>

              <h2>3. How We Collect Your Personal Data</h2>
              <p>
                We use different methods to collect data from and about you
                including through:
              </p>
              <ul>
                <li>
                  <strong>Direct interactions.</strong> You may give us your
                  Identity and Contact Data by filling in forms or by
                  corresponding with us by phone, email, or otherwise.
                </li>
                <li>
                  <strong>Automated technologies or interactions.</strong> As
                  you interact with our website, we may automatically collect
                  Technical Data about your equipment, browsing actions, and
                  patterns.
                </li>
                <li>
                  <strong>Third parties or publicly available sources.</strong>{" "}
                  We may receive personal data about you from various third
                  parties and public sources such as analytics providers,
                  advertising networks, and search information providers.
                </li>
              </ul>

              <h2>4. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul>
                <li>To register you as a new customer.</li>
                <li>To process and deliver our services.</li>
                <li>To manage our relationship with you.</li>
                <li>
                  To improve our website, products/services, marketing, or
                  customer relationships.
                </li>
                <li>
                  To make suggestions and recommendations to you about services
                  that may be of interest to you.
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used, or
                accessed in an unauthorized way, altered, or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors, and other third parties who have
                a business need to know.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary
                to fulfill the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>

              <h2>7. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>

              <h2>8. Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of
                our website. This helps us to provide you with a good experience
                when you browse our website and also allows us to improve our
                site.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the &quot;Last Updated&quot; date at the
                top of this privacy policy.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
              </p>
              <p>
                Email: privacy@vancouverflood.com
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

export default PrivacyPolicy;
