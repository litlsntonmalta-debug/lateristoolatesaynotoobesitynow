import { MapPin, Calendar } from "lucide-react";

const mobilities = [
  {
    id: "LTTA 1",
    title: "LTTA 1 — Adana, Türkiye",
    dates: "27 September – 3 October 2025",
    host: "Mehmet Özoncel Anadolu Lisesi",
    location: "Adana, Türkiye",
    participants: "2 teachers from each partner country",
    focus: "Obesity awareness, BMI, nutrition seminars, outdoor sports (bocce, orienteering, curling), healthy cooking buffets, cultural city tours.",
    highlights: [
      "Opening ceremony with national anthems & school music performance",
      "Seminar by nutritionist Ms. Fulin Ürün on obesity prevention",
      "Student presentations on curling, bowling, bocce, and orienteering",
      "Ebru (marbling) art workshop with Art Teacher Mrs. Nezihe Coşar",
      "Drama performance: \"The Recess Revolution\"",
      "Orienteering training with an expert",
      "Walk & environmental clean-up activity",
      "Adana city tour: Stone Bridge, Sabancı Mosque, Seyhan Dam",
      "Traditional Adana Kebap dinner 🍖",
    ],
  },
  {
    id: "LTTA 2",
    title: "LTTA 2 — Paola, Malta",
    dates: "18 – 21 November 2025",
    host: "Alternative Learning Programme (ALP)",
    location: "Paola, Malta",
    participants: "2 teachers and 5 students from each country",
    focus: "Healthy lifestyles, environmental awareness (zero waste, green kitchen, carbon footprint), emotional hunger, fatphobia, and bullying.",
    highlights: [
      "Neolithic Temples visit",
      "Zero Waste in the Kitchen & Waste Prevention Strategies",
      "Green Kitchen & Carbon Footprint workshop",
      "Educational talk on emotional hunger, fatphobia and bullying (psychologist)",
      "E-book development and Healthy Living Dictionary work",
      "Healthy Shopping & Reading Labels session",
      "Cultural activities: Three Cities Walk, St. John Cathedral, Malta Experience, Domus Romana, Mdina Treasure Hunt",
      "Certificate Awarding Ceremony",
    ],
  },
  {
    id: "LTTA 3",
    title: "LTTA 3 — Bacău, Romania",
    dates: "2026 (Dates TBC)",
    host: "Palatul Copiilor",
    location: "Bacău, Romania",
    participants: "2 teachers and 5 students from each country",
    focus: "Different diet types, traditional games & sports, healthy meals & desserts, cooking competition, web 2.0 nutrition games.",
    highlights: [
      "Student presentations on different diet types",
      "Traditional games and sports from each country",
      "Healthy meals and desserts showcase",
      "Healthy snack cooking competition",
      "Web 2.0 tools for nutrition-related games",
    ],
  },
  {
    id: "LTTA 4",
    title: "LTTA 4 — Bastia, France",
    dates: "2026 (Dates TBC)",
    host: "Lycée Paul Vincensini",
    location: "Bastia, Corsica, France",
    participants: "2 teachers and 4–5 students from each country",
    focus: "Drama performances on healthy/unhealthy living, French education system, Zumba, dance, and yoga.",
    highlights: [
      "Drama performances on unhealthy vs healthy living (each partner)",
      "Information session on the French education system",
      "Presentations on Zumba, various dances, and yoga",
      "Final project evaluation and dissemination",
    ],
  },
];

const MobilitiesPage = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">Mobilities & Meetings</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Four Learning, Teaching and Training Activities (LTTAs) across four European countries.
      </p>

      <div className="space-y-8">
        {mobilities.map((m, i) => (
          <div key={m.id} className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">{m.title}</h2>
              <div className="flex flex-wrap gap-4 mt-2 text-primary-foreground/85 text-sm">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {m.dates}</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {m.location}</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Host:</strong> {m.host}</p>
              <p className="text-sm text-muted-foreground mb-1"><strong className="text-foreground">Participants:</strong> {m.participants}</p>
              <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Focus:</strong> {m.focus}</p>
              <h4 className="font-heading font-semibold text-foreground mb-2">Highlights</h4>
              <ul className="grid md:grid-cols-2 gap-2">
                {m.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MobilitiesPage;
