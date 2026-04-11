const partners = [
  {
    country: "🇫🇷 France",
    name: "Lycée Technique Paul Vincensini",
    city: "Bastia, Corsica",
    role: "Coordinator",
    website: "https://montesoro.net/fr",
    type: "Vocational Training (secondary level)",
    description:
      "Part of the Cité Scientifique, Technologique et Professionnelle de Montesoro — the biggest high school campus on the island of Corsica. Spread over 7 hectares with 1,900 students, 240 teachers, and 30 different training courses. The school focuses on science & environment (E3D sustainability label), multilingualism, digital education, and equal opportunities.",
    students: "15–19 years old",
  },
  {
    country: "🇹🇷 Türkiye",
    name: "Mehmet Özoncel Anadolu Lisesi",
    city: "Adana",
    website: "",
    type: "General education (secondary level)",
    description:
      'A prestigious public high school in Çukurova, Adana, offering a 4-year education program for students aged 14–18. Holds the titles of "Nutrition Friendly School" and "White Flag" under the "Clean School, Healthy School" initiative. Active in eTwinning with National and European Quality Labels, and holder of the eTwinning school label.',
    students: "14–18 years old",
  },
  {
    country: "🇷🇴 Romania",
    name: "Palatul Copiilor (Children's Palace)",
    city: "Bacău",
    website: "http://www.palatulcopiilor.com",
    type: "General education (secondary level)",
    description:
      "An educational institution for students' free time, with 70 years of history. Pupils attend after their compulsory school program to enhance skills in artistic, technical, or sport fields. Has branches across Bacău County with 44 teachers. Experienced in five European projects (Comenius and Erasmus+) since 2013, with multiple eTwinning quality labels. Reconfirmed as eTwinning school 2024–2025 and European Blue School since December 2023.",
    students: "5–19 years old",
  },
  {
    country: "🇲🇹 Malta",
    name: "Alternative Learning Programme (ALP)",
    city: "Paola",
    website: "http://alp.skola.edu.mt",
    type: "Vocational Training (secondary level)",
    description:
      "A state school welcoming pupils aged 15–17 who have not fitted into the mainstream system and are at risk of becoming early school leavers. Provides vocational and applied subject training with hands-on work. Facilities include specialised workshops, a gym, library, and recreational areas. Committed to student wellbeing and healthy eating — only healthy food is sold in the school canteen.",
    students: "15–17 years old",
  },
];

const PartnersPage = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">Our Partners</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Four schools from across Europe, united by a shared commitment to combating childhood obesity and promoting healthy lifestyles.
      </p>

      <div className="space-y-8">
        {partners.map((p) => (
          <div key={p.name} className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-3xl">{p.country.split(" ")[0]}</span>
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground">{p.name}</h2>
                  <p className="text-sm text-muted-foreground">{p.city} · {p.type}</p>
                </div>
                {p.role && <span className="ml-auto text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">{p.role}</span>}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-muted-foreground">Students: <span className="font-medium text-foreground">{p.students}</span></span>
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersPage;
