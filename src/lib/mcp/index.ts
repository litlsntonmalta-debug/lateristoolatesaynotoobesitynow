import { defineMcp } from "@lovable.dev/mcp-js";
import getProjectInfo from "./tools/get-project-info";
import listPartners from "./tools/list-partners";
import listMobilities from "./tools/list-mobilities";
import listTimeline from "./tools/list-timeline";

export default defineMcp({
  name: "later-is-too-late-mcp",
  title: "LATER IS TOO LATE — Erasmus+ project MCP",
  version: "0.1.0",
  instructions:
    "Public read-only tools describing the Erasmus+ KA210 project 'LATER IS TOO LATE: SAY NO TO OBESITY NOW'. Use get_project_info for a general overview, list_partners for the four partner schools, list_mobilities for the LTTA mobilities, and list_timeline for the chronological milestones.",
  tools: [getProjectInfo, listPartners, listMobilities, listTimeline],
});
