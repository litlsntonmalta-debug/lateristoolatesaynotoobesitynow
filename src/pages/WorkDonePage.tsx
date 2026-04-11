import { BookOpen, Utensils, Dumbbell, Brain, Leaf, Gamepad2 } from "lucide-react";

const workItems = [
  {
    icon: BookOpen,
    title: "Obesity Awareness Education",
    desc: "Students learned about BMI calculation, diseases caused by obesity, and prevention strategies through expert seminars and student presentations.",
  },
  {
    icon: Utensils,
    title: "Healthy Nutrition Workshops",
    desc: "Hands-on cooking workshops with healthy local dishes, school canteen menu analysis, label reading sessions, and healthy shopping education.",
  },
  {
    icon: Dumbbell,
    title: "Physical Activity Programs",
    desc: "Introduction to bocce, orienteering, curling, bowling, yoga, dance, and Zumba. Weekly exercise programs created for students.",
  },
  {
    icon: Brain,
    title: "Mental Health & Wellbeing",
    desc: "Seminars on emotional hunger, fatphobia, bullying, and the psychology of nutrition. Drama performances addressing unhealthy vs healthy living.",
  },
  {
    icon: Leaf,
    title: "Green Kitchen & Zero Waste",
    desc: "Teaching carbon footprint awareness, zero waste kitchen strategies, and sustainable food practices across partner schools.",
  },
  {
    icon: Gamepad2,
    title: "Digital & Creative Outputs",
    desc: "E-book development, Healthy Living Dictionary creation, Kahoot games, web 2.0 tools training, and Ebru art workshops.",
  },
];

const WorkDonePage = () => (
  <section className="section-padding bg-section-alt">
    <div className="container mx-auto px-4 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">Work Done</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Key activities and outputs produced throughout the project.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workItems.map((item) => (
          <div key={item.title} className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Expected Outcomes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { pct: "80%", label: "of participants adopting healthy eating habits" },
            { pct: "70%", label: "engaging in regular exercise 3x per week" },
            { pct: "75%", label: "consuming recommended daily water intake" },
            { pct: "85%", label: "understanding Green Kitchen & zero waste" },
          ].map((o) => (
            <div key={o.label} className="flex items-center gap-4 bg-card rounded-lg p-5 border border-border">
              <span className="text-2xl font-heading font-bold text-primary">{o.pct}</span>
              <span className="text-sm text-muted-foreground">{o.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkDonePage;
