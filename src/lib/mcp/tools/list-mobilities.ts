import { defineTool } from "@lovable.dev/mcp-js";

const mobilities = [
  {
    number: "LTTA 1",
    host_country: "Türkiye",
    host_city: "Adana",
    host_school: "Mehmet Özöncel Anadolu Lisesi",
    theme: "Healthy eating & traditional sports",
  },
  {
    number: "LTTA 2",
    host_country: "Malta",
    host_city: "Paola",
    host_school: "ALP Paola",
    theme: "Physical activity & wellbeing",
  },
  {
    number: "LTTA 3",
    host_country: "France",
    host_city: "Bastia, Corsica",
    host_school: "Lycée Technique Paul Vincensini",
    theme: "Mediterranean diet & lifestyle",
  },
  {
    number: "LTTA 4",
    host_country: "Romania",
    host_city: "Bacău",
    host_school: "Palatul Copiilor Bacău",
    theme: "Dissemination & project closure",
  },
];

export default defineTool({
  name: "list_mobilities",
  title: "List mobilities & meetings",
  description:
    "List the project's Learning, Teaching and Training Activities (LTTAs) in chronological order, with host country, city, school, and theme.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(mobilities, null, 2) }],
    structuredContent: { mobilities },
  }),
});
