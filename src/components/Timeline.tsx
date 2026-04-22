import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, MapPin, CheckCircle2, Clock, ChevronDown, ChevronUp } from "lucide-react";
import imgKickoff from "@/assets/timeline/kickoff.jpg";
import imgLogoContest from "@/assets/timeline/logo-contest.jpg";
import imgFacebook from "@/assets/timeline/facebook.png";
import imgInstagram from "@/assets/timeline/instagram.png";
import imgPreparatory from "@/assets/timeline/preparatory.png";
import imgLtta1 from "@/assets/timeline/ltta1-adana.jpg";
import imgPostLtta1 from "@/assets/timeline/post-ltta1.jpg";
import imgLtta2 from "@/assets/timeline/ltta2-malta.jpg";
import imgLtta3 from "@/assets/timeline/ltta3-france.jpg";
import imgFinalReport from "@/assets/timeline/final-report.jpg";
import logoRomania from "@/assets/logo-romania.png";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  location?: string;
  type: "milestone" | "mobility" | "activity" | "output";
  status: "completed" | "upcoming";
  details?: string[];
  images?: { src: string; alt: string; contain?: boolean }[];
}

const events: TimelineEvent[] = [
  {
    date: "March 2025",
    title: "Project Kick-off",
    description: "Official start of the Erasmus+ KA210-SCH project. Planning phase begins with all four partner schools.",
    type: "milestone",
    status: "completed",
    images: [{ src: imgKickoff, alt: "Project kick-off meeting with partner schools" }],
  },
  {
    date: "March – May 2025",
    title: "Needs Analysis & Surveys",
    description: "Baseline surveys on students' eating habits, physical activity levels, and obesity awareness across all partner schools.",
    type: "activity",
    status: "completed",
    details: [
      "Student lifestyle questionnaires distributed",
      "BMI awareness assessments conducted",
      "School canteen menu analysis initiated",
    ],
  },
  {
    date: "April – June 2025",
    title: "Logo & Visual Identity Contest",
    description: "Students from all four countries designed project logos. Winning design selected through online voting.",
    type: "activity",
    status: "completed",
    details: [
      "Logo design competition launched",
      "Online voting across partner schools",
      "Winning logo adopted for all project materials",
    ],
    images: [{ src: imgLogoContest, alt: "Winning project logo - Later is too late: Say no to obesity now", contain: true }],
  },
  {
    date: "May 2025",
    title: "Project Website & Social Media Launch",
    description: "Official project website and Facebook page created to disseminate activities and results.",
    type: "output",
    status: "completed",
    images: [
      { src: imgFacebook, alt: "Project Facebook page", contain: true },
      { src: imgInstagram, alt: "Project Instagram page", contain: true },
    ],
  },
  {
    date: "June – August 2025",
    title: "Preparatory Activities for LTTA 1",
    description: "Student presentations on traditional sports, healthy recipes, and country profiles prepared for the first mobility.",
    type: "activity",
    status: "completed",
    details: [
      "Country presentation materials created",
      "Research on bocce, orienteering, and curling",
      "Healthy recipe collections compiled",
    ],
    images: [{ src: imgPreparatory, alt: "Online preparatory meeting between partner schools", contain: true }],
  },
  {
    date: "27 Sep – 3 Oct 2025",
    title: "LTTA 1 — Adana, Türkiye",
    description: "First Learning, Teaching & Training Activity hosted by Mehmet Özoncel Anadolu Lisesi.",
    location: "Adana, Türkiye",
    type: "mobility",
    status: "completed",
    details: [
      "Opening ceremony with national anthems",
      "Nutrition seminar by Ms. Fulin Ürün",
      "Bocce, orienteering & curling workshops",
      "Ebru (marbling) art workshop",
      "Drama: \"The Recess Revolution\"",
      "Walk & environmental clean-up",
      "Adana city tour & traditional kebap dinner",
    ],
    images: [{ src: imgLtta1, alt: "Group photo from LTTA 1 in Adana, Türkiye - bocce activity" }],
  },
  {
    date: "October – November 2025",
    title: "Post-LTTA 1 Dissemination",
    description: "Results and experiences from Türkiye mobility shared across partner schools through presentations and social media.",
    type: "activity",
    status: "completed",
    images: [{ src: imgPostLtta1, alt: "Press coverage of LTTA 1 in local newspaper Güney Gündemi", contain: true }],
  },
  {
    date: "18 – 21 Nov 2025",
    title: "LTTA 2 — Paola, Malta",
    description: "Second mobility hosted by Alternative Learning Programme (ALP), focusing on sustainability and emotional wellbeing.",
    location: "Paola, Malta",
    type: "mobility",
    status: "completed",
    details: [
      "Neolithic Temples visit",
      "Zero Waste & Green Kitchen workshops",
      "Carbon footprint awareness session",
      "Talk on emotional hunger, fatphobia & bullying",
      "E-book & Healthy Living Dictionary work",
      "Healthy Shopping & Reading Labels session",
      "Three Cities Walk, Mdina Treasure Hunt",
      "Certificate Awarding Ceremony",
    ],
    images: [{ src: imgLtta2, alt: "Group photo from LTTA 2 at the Neolithic Temples in Malta" }],
  },
  {
    date: "December 2025 – February 2026",
    title: "E-book & Dictionary Development",
    description: "Collaborative work on the Healthy Living E-book and multilingual Healthy Living Dictionary continues across all schools.",
    type: "output",
    status: "upcoming",
    details: [
      "Chapters drafted by each partner school",
      "Healthy Living Dictionary entries compiled in 4 languages",
      "Web 2.0 tools training for digital content",
    ],
  },
  {
    date: "Spring 2026",
    title: "LTTA 3 — Bastia, France",
    description: "Third mobility hosted by Lycée Paul Vincensini. Drama performances, Zumba, yoga, and project evaluation.",
    location: "Bastia, Corsica, France",
    type: "mobility",
    status: "upcoming",
    details: [
      "Drama performances: unhealthy vs healthy living",
      "French education system presentation",
      "Zumba, dance & yoga sessions",
      "Project evaluation & dissemination",
    ],
  },
  {
    date: "Spring/Summer 2026",
    title: "LTTA 4 — Bacău, Romania",
    description: "Fourth mobility hosted by Palatul Copiilor, focusing on diet types, traditional games, and cooking competitions.",
    location: "Bacău, Romania",
    type: "mobility",
    status: "upcoming",
    details: [
      "Presentations on different diet types",
      "Traditional games & sports from each country",
      "Healthy meals & desserts showcase",
      "Healthy snack cooking competition",
      "Web 2.0 nutrition games",
    ],
  },
  {
    date: "July 2026",
    title: "Project Completion & Final Report",
    description: "Submission of final report to the French National Agency. All outputs published and disseminated.",
    type: "milestone",
    status: "upcoming",
    details: [
      "Final report submitted to NA",
      "E-book and Dictionary published online",
      "Impact assessment surveys completed",
      "Sustainability plan shared with partner schools",
    ],
  },
];

const typeColors: Record<string, string> = {
  milestone: "bg-primary text-primary-foreground",
  mobility: "bg-secondary text-secondary-foreground",
  activity: "bg-accent text-accent-foreground",
  output: "bg-muted text-muted-foreground",
};

const typeLabels: Record<string, string> = {
  milestone: "Milestone",
  mobility: "Mobility",
  activity: "Activity",
  output: "Output",
};

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
          Project Timeline
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6 text-lg">
          March 2025 – July 2026
        </p>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(typeLabels).map(([key, label]) => (
            <span key={key} className={cn("text-xs font-medium px-3 py-1 rounded-full", typeColors[key])}>
              {label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              const expanded = expandedIndex === i;

              return (
                <div
                  key={i}
                  className={cn(
                    "relative flex items-start gap-4 md:gap-0",
                    "md:justify-between"
                  )}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-10">
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 border-background",
                        event.status === "completed" ? "bg-primary" : "bg-muted-foreground/40"
                      )}
                    />
                  </div>

                  {/* Card - mobile always right, desktop alternating */}
                  <div
                    className={cn(
                      "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                      isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                    )}
                  >
                    <div
                      className={cn(
                        "bg-card border border-border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow",
                        event.status === "upcoming" && "opacity-80"
                      )}
                      onClick={() => event.details && toggle(i)}
                    >
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", typeColors[event.type])}>
                          {typeLabels[event.type]}
                        </span>
                        {event.status === "completed" ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        ) : (
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                        <Calendar className="h-3 w-3" /> {event.date}
                      </p>
                      <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">{event.title}</h3>
                      {event.location && (
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3" /> {event.location}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{event.description}</p>

                      {event.details && (
                        <div className="mt-2">
                          <button className="text-xs text-primary font-medium flex items-center gap-1">
                            {expanded ? "Less" : "Details"}
                            {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                          </button>
                          {expanded && (
                            <ul className="mt-2 space-y-1">
                              {event.details.map((d, j) => (
                                <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                  <span className="text-primary mt-0.5">✓</span> {d}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
