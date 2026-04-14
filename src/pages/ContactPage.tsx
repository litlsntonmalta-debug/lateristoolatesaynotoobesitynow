import { MapPin, Globe, Facebook } from "lucide-react";
import logoFrance from "@/assets/logo-france.png";
import logoTurkey from "@/assets/logo-turkey.png";
import logoRomania from "@/assets/logo-romania.png";
import logoMalta from "@/assets/logo-malta.png";

const ContactPage = () => (
  <section className="section-padding">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">Contact Us</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
        Get in touch with the project coordinators or partner schools.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold text-foreground">Project Coordinator</h2>
          <div className="bg-card rounded-lg p-6 border border-border space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoFrance} alt="Lycée Paul Vincensini logo" className="h-12 w-12 object-contain rounded bg-background" />
              <h3 className="font-heading font-semibold text-foreground">Lycée Technique Paul Vincensini</h3>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Bastia, Corsica, France</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Globe className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <a href="https://montesoro.net/fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                montesoro.net
              </a>
            </div>
          </div>

          <h3 className="font-heading font-semibold text-foreground">Follow the Project</h3>
          <a
            href="https://www.facebook.com/share/1BGbyTAwg1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Facebook className="h-4 w-4" />
            Follow us on Facebook
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Partner Schools</h2>
          <div className="space-y-4">
            {[
              { logo: logoTurkey, name: "Mehmet Özoncel Anadolu Lisesi", city: "Adana, Türkiye" },
              { logo: logoRomania, name: "Palatul Copiilor", city: "Bacău, Romania" },
              { logo: logoMalta, name: "Alternative Learning Programme", city: "Paola, Malta" },
            ].map((s) => (
              <div key={s.name} className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                <img src={s.logo} alt={`${s.name} logo`} className="h-10 w-10 object-contain rounded bg-background" />
                <div>
                  <p className="font-medium text-foreground text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
