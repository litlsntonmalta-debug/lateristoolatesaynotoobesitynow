import { defineTool } from "@lovable.dev/mcp-js";

const timeline = [
  { date: "March 2025", type: "Milestone", title: "Project kick-off" },
  { date: "April 2025", type: "Activity", title: "Logo and Visual Identity contest" },
  { date: "April 2025", type: "Output", title: "Project website and social media launch" },
  { date: "May 2025", type: "Activity", title: "Preparatory activities for LTTA 1" },
  { date: "October 2025", type: "Mobility", title: "LTTA 1 – Adana, Türkiye" },
  { date: "November 2025", type: "Activity", title: "Post-LTTA 1 dissemination" },
  { date: "February 2026", type: "Mobility", title: "LTTA 2 – Paola, Malta" },
  { date: "April 2026", type: "Mobility", title: "LTTA 3 – Bastia, Corsica (France)" },
  { date: "May 2026", type: "Mobility", title: "LTTA 4 – Bacău, Romania" },
  { date: "July 2026", type: "Milestone", title: "Project completion & final report" },
];

export default defineTool({
  name: "list_timeline",
  title: "List project timeline",
  description:
    "Return the chronological project timeline from March 2025 to July 2026, with date, type (Milestone/Mobility/Activity/Output), and title.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(timeline, null, 2) }],
    structuredContent: { timeline },
  }),
});
