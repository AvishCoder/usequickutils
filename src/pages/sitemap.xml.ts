import type { APIRoute } from "astro";
import { ALL_TOOLS } from "~/tools";

const STATIC_PAGES = [
  { loc: "", priority: "1.0" },
  { loc: "privacy-policy", priority: "0.6" },
  { loc: "terms-and-conditions", priority: "0.6" },
  { loc: "about", priority: "0.5" },
  { loc: "contact", priority: "0.5" },
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.origin ?? "https://usequickutils.com";
  const urls = [
    ...STATIC_PAGES.map(
      (p) => `
  <url>
    <loc>${base}/${p.loc}</loc>
    <priority>${p.priority}</priority>
  </url>`
    ),
    ...ALL_TOOLS.map(
      (t) => `
  <url>
    <loc>${base}/${t.slug}/</loc>
    <priority>0.9</priority>
  </url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
