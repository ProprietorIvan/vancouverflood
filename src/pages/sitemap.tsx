import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const Sitemap = () => {
  const siteData = {
    mainPages: [
      { url: "/", title: "Home" },
      { url: "/services", title: "Water Damage Services" },
      { url: "/contact-us", title: "Contact Us" },
      { url: "/about-us", title: "About Us" },
      { url: "/testimonials", title: "Customer Testimonials" },
    ],
    servicePages: [
      {
        url: "/flood-repair-services-in-vancouver",
        title: "Flood Repair Services",
      },
      {
        url: "/flood-restoration-burnaby",
        title: "Flood Restoration in Burnaby",
      },
      {
        url: "/mold-remediation-services-in-vancouver",
        title: "Mold Remediation Services",
      },
      {
        url: "/structural-repair-services-in-vancouver",
        title: "Structural Repair Services",
      },
      { url: "/water-extraction", title: "Water Extraction Services" },
      {
        url: "/drying-and-dehumidification",
        title: "Drying and Dehumidification",
      },
    ],
    serviceAreas: [
      {
        url: "/water-damage-restoration-downtown-vancouver",
        title: "Downtown Vancouver",
      },
      {
        url: "/water-damage-restoration-west-vancouver",
        title: "West Vancouver",
      },
      {
        url: "/water-damage-restoration-north-vancouver",
        title: "North Vancouver",
      },
      { url: "/water-damage-restoration-burnaby", title: "Burnaby" },
      { url: "/water-damage-restoration-richmond", title: "Richmond" },
      { url: "/water-damage-restoration-surrey", title: "Surrey" },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Site Map | Vancouver Flood Restoration | Felicita Holdings
        </title>
        <meta
          name="description"
          content="Browse the complete list of pages on Vancouver Flood Restoration website. Find information about our water damage services and service areas."
        />
        <link rel="canonical" href="https://vancouverflood.com/sitemap" />
      </Head>

      <div className="min-h-screen bg-[#F5F4F0]">
        <Navigation showActions={true} />

        <main className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-12">Site Map</h1>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#8B2635]">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {siteData.mainPages.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="text-gray-800 hover:text-[#8B2635] hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#8B2635]">
                Our Services
              </h2>
              <ul className="space-y-3">
                {siteData.servicePages.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="text-gray-800 hover:text-[#8B2635] hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#8B2635]">
                Service Areas
              </h2>
              <ul className="space-y-3">
                {siteData.serviceAreas.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="text-gray-800 hover:text-[#8B2635] hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sitemap;
