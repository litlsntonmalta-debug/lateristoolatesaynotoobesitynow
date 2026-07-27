// Project Repository data — editable single source of truth.
// Add/edit/remove entries here; the Repository page rebuilds automatically.

import imgKickoff from "@/assets/timeline/kickoff.jpg";
import imgLogoContest from "@/assets/timeline/logo-contest.jpg";
import imgFacebook from "@/assets/timeline/facebook.png";
import imgInstagram from "@/assets/timeline/instagram.png";
import imgPreparatory from "@/assets/timeline/preparatory.png";
import imgLtta1 from "@/assets/timeline/ltta1-adana.jpg";
import imgPostLtta1 from "@/assets/timeline/post-ltta1.jpg";
import imgLtta2 from "@/assets/timeline/ltta2-malta.jpg";
import imgLtta3 from "@/assets/timeline/ltta3-france.jpg";
import imgLtta4 from "@/assets/timeline/ltta4-romania.jpg";
import imgFinalReport from "@/assets/timeline/final-report.jpg";
import logoMalta from "@/assets/logo-malta.png";
import logoTurkey from "@/assets/logo-turkey.png";
import logoRomania from "@/assets/logo-romania.png";
import logoFrance from "@/assets/logo-france.png";

export type MediaItem = { src: string; alt: string; caption?: string; contain?: boolean };

export type RepoEntry = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  partner?: string;
  images?: MediaItem[];
  documents?: { name: string; url?: string; type?: string }[];
  externalLink?: string;
  cover?: string;
};

export const projectOverview = {
  title: "LATER IS TOO LATE: SAY NO TO OBESITY NOW",
  programme: "Erasmus+ KA210-SCH — Small-scale partnerships in school education",
  code: "2024-2-FR01-KA210-SCH-000279027",
  duration: "March 2025 – July 2026",
  coordinator: "Lycée Technique Paul Vincensini (Bastia, Corsica — France)",
  partners: [
    { name: "Lycée Technique Paul Vincensini", country: "France", role: "Coordinator", logo: logoFrance },
    { name: "Mehmet Özöncel Anadolu Lisesi", country: "Türkiye", role: "Partner", logo: logoTurkey },
    { name: "Alternative Learning Programme (ALP Paola)", country: "Malta", role: "Partner", logo: logoMalta },
    { name: "Palatul Copiilor Bacău", country: "Romania", role: "Partner", logo: logoRomania },
  ],
  countries: ["France", "Türkiye", "Malta", "Romania"],
  mobilityCount: 4,
  description:
    "A transnational Erasmus+ small-scale partnership addressing childhood and adolescent obesity through education, healthy nutrition, physical activity, and intercultural cooperation between four partner schools.",
};

export const educationalOutputs: RepoEntry[] = [
  {
    id: "eo-logo",
    title: "Project Logo & Visual Identity",
    description: "Winning project logo selected through a student contest across all four partner schools.",
    date: "June 2025",
    partner: "All partners",
    cover: imgLogoContest,
    images: [{ src: imgLogoContest, alt: "Project logo", contain: true }],
  },
  {
    id: "eo-website",
    title: "Project Website & Social Media",
    description: "Public website, Facebook and Instagram pages disseminating project activities and results.",
    date: "May 2025",
    partner: "Türkiye (lead)",
    images: [
      { src: imgFacebook, alt: "Facebook page", contain: true },
      { src: imgInstagram, alt: "Instagram page", contain: true },
    ],
    externalLink: "https://lateristoolatesaynotoobesitynow.lovable.app",
  },
  {
    id: "eo-ebook",
    title: "Healthy Living E-book",
    description: "Collaborative multi-chapter e-book with contributions from all partner schools on nutrition, exercise, and wellbeing.",
    date: "In progress — 2026",
    partner: "All partners",
  },
  {
    id: "eo-dictionary",
    title: "Healthy Living Dictionary",
    description: "Multilingual glossary of health, nutrition and physical-activity terms in French, Turkish, Romanian, Maltese and English.",
    date: "In progress — 2026",
    partner: "All partners",
  },
  {
    id: "eo-kahoot",
    title: "Kahoot! & Web 2.0 Learning Games",
    description: "Interactive quizzes and games on nutrition, BMI, and healthy habits used in classrooms across partner schools.",
    date: "2025 – 2026",
    partner: "All partners",
  },
];

export type Mobility = {
  id: string;
  number: string;
  title: string;
  host: string;
  location: string;
  dates: string;
  participants: string;
  summary: string;
  cover: string;
  programme: { name: string; type?: string }[];
  learningActivities: RepoEntry[];
  documentation: RepoEntry[];
  gallery: MediaItem[];
  certificates: RepoEntry[];
  stats?: { label: string; value: string }[];
};

export const mobilities: Mobility[] = [
  {
    id: "ltta1",
    number: "LTTA 1",
    title: "LTTA 1 — Adana, Türkiye",
    host: "Mehmet Özöncel Anadolu Lisesi",
    location: "Adana, Türkiye",
    dates: "27 September – 3 October 2025",
    participants: "24 students & 8 teachers from 4 countries",
    summary:
      "First mobility focusing on healthy eating, traditional Turkish sports (bocce, orienteering, curling), Ebru art, and environmental awareness.",
    cover: imgLtta1,
    programme: [
      { name: "Finalised Agenda — LTTA 1 Adana", type: "PDF" },
      { name: "Weekly Timetable", type: "PDF" },
    ],
    learningActivities: [
      { id: "l1a1", title: "Nutrition Seminar by Ms. Fulin Ürün", description: "Expert seminar on balanced nutrition and BMI awareness.", date: "28 Sep 2025", images: [{ src: imgLtta1, alt: "Seminar" }] },
      { id: "l1a2", title: "Bocce, Orienteering & Curling Workshop", description: "Traditional and adapted sports introduced to students.", date: "29 Sep 2025", images: [{ src: imgLtta1, alt: "Bocce activity" }] },
      { id: "l1a3", title: "Ebru (Marbling) Art Workshop", description: "Cultural art workshop combining creativity and mindfulness." },
      { id: "l1a4", title: "Drama: The Recess Revolution", description: "Student drama contrasting unhealthy vs healthy school breaks." },
      { id: "l1a5", title: "Walk & Environmental Clean-up", description: "Physical activity combined with environmental responsibility." },
    ],
    documentation: [
      { id: "l1d1", title: "Opening Ceremony Programme", type: "PDF" as any, documents: [{ name: "Opening Ceremony.pdf", type: "PDF" }] },
      { id: "l1d2", title: "Country Presentations", documents: [{ name: "France.pptx", type: "PPTX" }, { name: "Türkiye.pptx", type: "PPTX" }, { name: "Malta.pptx", type: "PPTX" }, { name: "Romania.pptx", type: "PPTX" }] },
      { id: "l1d3", title: "Evaluation Worksheets", documents: [{ name: "Student Evaluation.docx", type: "DOCX" }] },
    ],
    gallery: [
      { src: imgLtta1, alt: "Bocce group photo, Adana", caption: "Bocce activity — Adana" },
      { src: imgPostLtta1, alt: "Local press coverage", caption: "Local press — Güney Gündemi" },
    ],
    certificates: [
      { id: "l1c1", title: "Certificates of Attendance — LTTA 1", description: "Signed by the host institution for all participants." },
    ],
    stats: [
      { label: "Students", value: "24" },
      { label: "Teachers", value: "8" },
      { label: "Workshops", value: "6" },
      { label: "Days", value: "7" },
    ],
  },
  {
    id: "ltta2",
    number: "LTTA 2",
    title: "LTTA 2 — Paola, Malta",
    host: "Alternative Learning Programme (ALP Paola)",
    location: "Paola, Malta",
    dates: "18 – 21 November 2025",
    participants: "24 students & 8 teachers from 4 countries",
    summary:
      "Second mobility focused on sustainability, Green Kitchen practices, emotional wellbeing, and Maltese cultural heritage.",
    cover: imgLtta2,
    programme: [
      { name: "Finalised Agenda — LTTA 2 Malta", type: "PDF" },
    ],
    learningActivities: [
      { id: "l2a1", title: "Zero Waste & Green Kitchen Workshop", description: "Sustainable food practices and food-waste reduction." },
      { id: "l2a2", title: "Carbon Footprint Awareness Session", description: "Measuring and reducing individual carbon footprints." },
      { id: "l2a3", title: "Emotional Hunger, Fatphobia & Bullying Talk", description: "Psychology of eating and wellbeing." },
      { id: "l2a4", title: "Healthy Shopping & Label Reading", description: "Practical session on reading food labels." },
      { id: "l2a5", title: "Neolithic Temples & Three Cities Walk", description: "Cultural walk combining heritage and physical activity." },
    ],
    documentation: [
      { id: "l2d1", title: "Green Kitchen Handbook", documents: [{ name: "Green-Kitchen.pdf", type: "PDF" }] },
      { id: "l2d2", title: "Wellbeing Presentation", documents: [{ name: "Wellbeing.pptx", type: "PPTX" }] },
    ],
    gallery: [{ src: imgLtta2, alt: "Group photo, Malta", caption: "Neolithic Temples visit" }],
    certificates: [{ id: "l2c1", title: "Certificate Awarding Ceremony — LTTA 2" }],
    stats: [
      { label: "Students", value: "24" },
      { label: "Teachers", value: "8" },
      { label: "Workshops", value: "5" },
      { label: "Days", value: "4" },
    ],
  },
  {
    id: "ltta3",
    number: "LTTA 3",
    title: "LTTA 3 — Bastia, France",
    host: "Lycée Technique Paul Vincensini",
    location: "Bastia, Corsica, France",
    dates: "Spring 2026",
    participants: "24 students & 8 teachers from 4 countries",
    summary:
      "Third mobility hosted by the coordinating school. Drama, dance, yoga and Mediterranean diet workshops with project evaluation.",
    cover: imgLtta3,
    programme: [{ name: "Draft Agenda — LTTA 3 Bastia", type: "PDF" }],
    learningActivities: [
      { id: "l3a1", title: "Drama Performances — Unhealthy vs Healthy Living", description: "Student-led performances on lifestyle choices." },
      { id: "l3a2", title: "Zumba, Dance & Yoga Sessions", description: "Movement-based wellbeing workshops." },
      { id: "l3a3", title: "Mediterranean Diet Workshop", description: "Cooking and tasting session on Mediterranean cuisine." },
      { id: "l3a4", title: "French Education System Presentation", description: "Introduction to the host country's schooling context." },
    ],
    documentation: [{ id: "l3d1", title: "Mediterranean Diet Booklet", documents: [{ name: "Med-Diet.pdf", type: "PDF" }] }],
    gallery: [{ src: imgLtta3, alt: "Bastia group photo", caption: "Bastia — project banners" }],
    certificates: [{ id: "l3c1", title: "Certificates of Attendance — LTTA 3" }],
  },
  {
    id: "ltta4",
    number: "LTTA 4",
    title: "LTTA 4 — Bacău, Romania",
    host: "Palatul Copiilor Bacău",
    location: "Bacău, Romania",
    dates: "Spring/Summer 2026",
    participants: "24 students & 8 teachers from 4 countries",
    summary:
      "Fourth and final mobility focusing on diet types, traditional games, cooking competitions, and project dissemination.",
    cover: imgLtta4,
    programme: [{ name: "Draft Agenda — LTTA 4 Bacău", type: "PDF" }],
    learningActivities: [
      { id: "l4a1", title: "Presentations on Different Diet Types", description: "Vegetarian, Mediterranean, DASH, and more." },
      { id: "l4a2", title: "Traditional Games & Sports Showcase", description: "Games from each partner country." },
      { id: "l4a3", title: "Healthy Snack Cooking Competition", description: "Team-based healthy cooking contest." },
      { id: "l4a4", title: "Web 2.0 Nutrition Games", description: "Digital learning games for younger audiences." },
    ],
    documentation: [{ id: "l4d1", title: "Final Dissemination Plan", documents: [{ name: "Dissemination-Plan.pdf", type: "PDF" }] }],
    gallery: [{ src: imgLtta4, alt: "Bacău group photo", caption: "Bacău — partner schools together" }],
    certificates: [{ id: "l4c1", title: "Certificates of Attendance — LTTA 4" }],
  },
];

export const dissemination = {
  online: [
    { id: "d-fb", title: "Facebook Project Page", description: "Official Facebook page with regular updates, photos and event announcements.", date: "May 2025 – ongoing", images: [{ src: imgFacebook, alt: "Facebook", contain: true }], externalLink: "https://www.facebook.com/profile.php?id=61575040831325" },
    { id: "d-ig", title: "Instagram Project Page", description: "Instagram profile sharing visual highlights of activities and mobilities.", date: "May 2025 – ongoing", images: [{ src: imgInstagram, alt: "Instagram", contain: true }] },
    { id: "d-web", title: "Project Website Articles", description: "Articles published on this website covering activities, mobilities and outputs.", date: "2025 – 2026", externalLink: "https://lateristoolatesaynotoobesitynow.lovable.app" },
    { id: "d-etw", title: "eTwinning Space", description: "Shared eTwinning workspace used by teachers to co-plan activities and exchange materials." },
  ] as RepoEntry[],
  printed: [
    { id: "p-banner", title: "Project Banner — Later is Too Late", description: "Roll-up banner used during all mobilities and local events.", images: [{ src: imgLtta4, alt: "Banner in use, Bacău" }] },
    { id: "p-poster", title: "Awareness Posters", description: "Posters displayed in partner schools promoting healthy eating and physical activity." },
    { id: "p-flyer", title: "Event Flyers & Invitations", description: "Printed invitations for opening ceremonies and public events." },
  ] as RepoEntry[],
  visibility: [
    { id: "v-brand", title: "Erasmus+ Co-funded Branding", description: "Erasmus+ logo and EU disclaimer applied consistently on all outputs, presentations and printed materials." },
    { id: "v-boards", title: "Information Boards in Partner Schools", description: "Dedicated Erasmus+ boards in each partner school." },
    { id: "v-event", title: "Event Branding & Displays", description: "Branded backdrops, signage and materials during LTTA opening and closing ceremonies." },
  ] as RepoEntry[],
  media: [
    { id: "m-press", title: "Local Press Coverage — Güney Gündemi (TR)", description: "Article covering LTTA 1 activities in Adana.", images: [{ src: imgPostLtta1, alt: "Press coverage" }] },
    { id: "m-interview", title: "Student & Teacher Interviews", description: "Short interviews with participants after each mobility." },
  ] as RepoEntry[],
  supporting: [
    { id: "s-cert", title: "Attendance Certificates Templates", description: "Templates used to issue attendance certificates for each mobility." },
    { id: "s-evprog", title: "Event Programmes", description: "Printed programmes distributed at opening and closing ceremonies." },
  ] as RepoEntry[],
};

// Evidence matrix — auto-navigation targets by section id.
export const evidenceMatrix: {
  category: string;
  evidence: string;
  mobility: string;
  target: string; // css id on the page
}[] = [
  { category: "Educational Output", evidence: "Project Logo & Visual Identity", mobility: "—", target: "eo-logo" },
  { category: "Educational Output", evidence: "Project Website & Social Media", mobility: "—", target: "eo-website" },
  { category: "Educational Output", evidence: "Healthy Living E-book", mobility: "—", target: "eo-ebook" },
  { category: "Educational Output", evidence: "Healthy Living Dictionary", mobility: "—", target: "eo-dictionary" },
  { category: "Mobility", evidence: "LTTA 1 Programme & Activities", mobility: "LTTA 1", target: "mob-ltta1" },
  { category: "Mobility", evidence: "LTTA 2 Programme & Activities", mobility: "LTTA 2", target: "mob-ltta2" },
  { category: "Mobility", evidence: "LTTA 3 Programme & Activities", mobility: "LTTA 3", target: "mob-ltta3" },
  { category: "Mobility", evidence: "LTTA 4 Programme & Activities", mobility: "LTTA 4", target: "mob-ltta4" },
  { category: "Dissemination", evidence: "Facebook Page", mobility: "All", target: "diss-online" },
  { category: "Dissemination", evidence: "Instagram Page", mobility: "All", target: "diss-online" },
  { category: "Dissemination", evidence: "Press Coverage — Adana", mobility: "LTTA 1", target: "diss-media" },
  { category: "Visibility", evidence: "Erasmus+ Branding & Boards", mobility: "All", target: "diss-visibility" },
  { category: "Printed", evidence: "Project Banner", mobility: "All", target: "diss-printed" },
  { category: "Certificates", evidence: "Attendance Certificates — LTTA 1", mobility: "LTTA 1", target: "mob-ltta1" },
  { category: "Certificates", evidence: "Attendance Certificates — LTTA 2", mobility: "LTTA 2", target: "mob-ltta2" },
];
