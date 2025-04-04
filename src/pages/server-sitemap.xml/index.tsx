import { GetServerSideProps } from "next";

// This component doesn't need to render anything
export default function ServerSitemap() {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create sitemap XML manually rather than relying on library types
  ctx.res.setHeader("Content-Type", "application/xml");

  // Generate the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${generateSitemapItems()}
  </urlset>`;

  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};

function generateSitemapItems() {
  const now = new Date().toISOString();

  // Define your URLs
  const urls = [
    // Service Areas
    { url: "/water-damage-restoration-burnaby", priority: 0.8 },
    { url: "/water-damage-restoration-north-vancouver", priority: 0.8 },
    { url: "/water-damage-restoration-west-vancouver", priority: 0.8 },
    { url: "/water-damage-restoration-richmond", priority: 0.8 },
    { url: "/water-damage-restoration-surrey", priority: 0.8 },
    { url: "/water-damage-restoration-coquitlam", priority: 0.8 },
    { url: "/water-damage-restoration-port-coquitlam", priority: 0.8 },
    { url: "/water-damage-restoration-new-westminster", priority: 0.8 },
    { url: "/water-damage-restoration-delta", priority: 0.8 },
    { url: "/water-damage-restoration-langley", priority: 0.8 },
    { url: "/water-damage-restoration-white-rock", priority: 0.8 },
    { url: "/water-damage-restoration-downtown-vancouver", priority: 0.8 },

    // Service specific pages
    { url: "/basement-flood-recovery", priority: 0.8 },
    { url: "/storm-damage-repair", priority: 0.8 },
    { url: "/emergency-services", priority: 0.9 },
  ];

  return urls
    .map(
      (entry) => `
    <url>
      <loc>https://vancouverflood.com${entry.url}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${entry.priority}</priority>
    </url>
  `
    )
    .join("");
}
