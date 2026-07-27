import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_project_info",
  title: "Get project info",
  description:
    "Return overview of the Erasmus+ project 'LATER IS TOO LATE: SAY NO TO OBESITY NOW', including code, dates, coordinator, aims, and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      title: "LATER IS TOO LATE: SAY NO TO OBESITY NOW",
      programme: "Erasmus+ KA210-SCH Small-scale partnerships in school education",
      project_code: "2024-2-FR01-KA210-SCH-000279027",
      duration: "March 2025 – July 2026",
      coordinator: "Lycée Technique Paul Vincensini (Bastia, Corsica, France)",
      partners: [
        "Lycée Technique Paul Vincensini (France) – Coordinator",
        "Mehmet Özöncel Anadolu Lisesi (Adana, Türkiye)",
        "Palatul Copiilor Bacău (Romania)",
        "Alternative Learning Programme – ALP Paola (Malta)",
      ],
      goals: [
        "Raise awareness of childhood and adolescent obesity",
        "Promote healthy eating habits and balanced nutrition",
        "Encourage regular physical activity and traditional sports",
        "Develop intercultural cooperation between the four partner schools",
      ],
      website: "https://lateristoolatesaynotoobesitynow.lovable.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
