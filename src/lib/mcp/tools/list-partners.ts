import { defineTool } from "@lovable.dev/mcp-js";

const partners = [
  {
    country: "France",
    role: "Coordinator",
    school: "Lycée Technique Paul Vincensini",
    city: "Bastia, Corsica",
    website: "https://lycee-paul-vincensini.web.ac-corse.fr/",
  },
  {
    country: "Türkiye",
    role: "Partner",
    school: "Mehmet Özöncel Anadolu Lisesi",
    city: "Adana",
    website:
      "https://www.instagram.com/explore/locations/40157024/mehmet-ozoncel-anadolu-lisesi/",
  },
  {
    country: "Romania",
    role: "Partner",
    school: "Palatul Copiilor Bacău",
    city: "Bacău",
    website: "https://www.palatulcopiilorbacau.ro/",
  },
  {
    country: "Malta",
    role: "Partner",
    school: "Alternative Learning Programme (ALP Paola)",
    city: "Paola",
    website: "https://sites.google.com/view/alppaola/home",
  },
];

export default defineTool({
  name: "list_partners",
  title: "List partner schools",
  description:
    "List the four partner schools taking part in the Erasmus+ project, with country, role, city, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(partners, null, 2) }],
    structuredContent: { partners },
  }),
});
