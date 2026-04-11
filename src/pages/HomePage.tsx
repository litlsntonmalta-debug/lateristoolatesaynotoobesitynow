import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Globe, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Students collaborating on healthy living" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-warm-orange font-heading font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-up">
            Erasmus+ KA210-SCH Project
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Later is Too Late:<br />
            <span className="text-warm-orange">Say No to Obesity Now</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/85 text-lg md:text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A partnership of schools from France, Türkiye, Romania and Malta — empowering young people to embrace healthy lifestyles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-base px-8">
              <Link to="/about">Discover the Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8">
              <Link to="/partners">Meet Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4", label: "Partner Countries", icon: Globe },
              { number: "300+", label: "Students Involved", icon: Users },
              { number: "4", label: "Learning Mobilities", icon: BookOpen },
              { number: "16", label: "Months of Activities", icon: Heart },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <p className="text-3xl md:text-4xl font-heading font-bold">{stat.number}</p>
                <p className="text-sm opacity-80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission preview */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Obesity is not merely a cosmetic concern — it is a chronic medical condition affecting over 150 million children worldwide. Our Erasmus+ project brings together educators and students from four European countries to combat this crisis through education, cultural exchange, and practical healthy living activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Healthy Eating", desc: "Teaching balanced nutrition and the benefits of fruit, vegetables, and water consumption." },
              { title: "Active Living", desc: "Encouraging regular physical activity through sports like bocce, orienteering, yoga, and outdoor activities." },
              { title: "Mental Wellbeing", desc: "Addressing fatphobia, bullying, emotional hunger, and building self-esteem." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">Our Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { country: "🇫🇷 France", school: "Lycée Paul Vincensini", city: "Bastia, Corsica", role: "Coordinator" },
              { country: "🇹🇷 Türkiye", school: "Mehmet Özoncel Anadolu Lisesi", city: "Adana" },
              { country: "🇷🇴 Romania", school: "Palatul Copiilor", city: "Bacău" },
              { country: "🇲🇹 Malta", school: "Alternative Learning Programme", city: "Paola" },
            ].map((p) => (
              <div key={p.country} className="bg-card rounded-lg p-6 border border-border shadow-sm text-left">
                <p className="text-2xl mb-2">{p.country}</p>
                <h3 className="font-heading font-semibold text-foreground">{p.school}</h3>
                <p className="text-sm text-muted-foreground">{p.city}</p>
                {p.role && <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{p.role}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
