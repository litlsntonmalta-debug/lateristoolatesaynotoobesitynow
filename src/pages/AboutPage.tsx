import aboutImg from "@/assets/about-img.jpg";

const AboutPage = () => (
  <>
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 text-center">About the Project</h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
          LATER IS TOO LATE: SAY NO TO OBESITY NOW is an Erasmus+ KA210-SCH small-scale partnership in school education.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Why This Project?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Obesity and overweight have emerged as one of the most critical issues facing our world today. Statistics from 2019 estimate that over 150 million children worldwide are obese — a number projected to rise to 206 million by 2030. Without intervention, overweight children are likely to carry this burden into adolescence and adulthood.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All four partner countries rank among those with the highest obesity rates in Europe. This project presents an opportunity to educate students about obesity, its root causes, associated diseases, and strategies for prevention — while fostering cultural exchange and European citizenship.
            </p>
          </div>
          <img src={aboutImg} alt="Students in a healthy cooking workshop" className="rounded-lg shadow-md w-full" loading="lazy" width={800} height={600} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">🎯 Objectives</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>• Over 80% of participants to adopt healthy eating habits</li>
              <li>• Over 70% to engage in regular exercise at least 3 times a week</li>
              <li>• Over 75% to consume the recommended daily water intake</li>
              <li>• Over 60% to reduce fast food and processed food consumption</li>
              <li>• Over 85% to understand Green Kitchen and zero waste concepts</li>
              <li>• Encourage inclusive approaches instead of bullying towards overweight individuals</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">📋 Project Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Project Code</span><span className="font-medium text-foreground">2024-2-FR01-KA210-SCH-000279027</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Acronym</span><span className="font-medium text-foreground">LITLSNTON</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="font-medium text-foreground">March 2025 – July 2026 (16 months)</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Budget</span><span className="font-medium text-foreground">€60,000</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Programme</span><span className="font-medium text-foreground">Erasmus+ KA210-SCH</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">National Agency</span><span className="font-medium text-foreground">FR01 - Agence Erasmus+ France</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">🌍 Topics & Priorities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Priorities</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Inclusion and diversity in all fields of education</li>
                <li>• Development of key competences (School Education)</li>
                <li>• Common values, civic engagement and participation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Topics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Green skills</li>
                <li>• Inclusion of marginalised young people</li>
                <li>• Digital skills and competences</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card rounded-lg p-8 border border-border">
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">👥 Target Groups</h3>
          <p className="text-muted-foreground leading-relaxed">
            The project targets approximately 300 students aged 13–18, with around 35% struggling with weight issues and 65% leading a sedentary lifestyle. The project also engages physical education teachers, science and biology teachers, art and music educators, and parents — all of whom play crucial roles in shaping lifelong healthy habits.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
