import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">LATER IS TOO LATE</h3>
          <p className="text-sm opacity-80">
            Say No to Obesity Now — An Erasmus+ KA210-SCH project bringing together schools from France, Türkiye, Romania, and Malta.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About the Project</Link></li>
            <li><Link to="/partners" className="hover:opacity-100 transition-opacity">Our Partners</Link></li>
            <li><Link to="/mobilities" className="hover:opacity-100 transition-opacity">Mobilities</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Project Info</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Project Code: 2024-2-FR01-KA210-SCH-000279027</li>
            <li>Duration: March 2025 – July 2026</li>
            <li>Funded by the European Union</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
        <p>
          Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
        </p>
        <p className="mt-2">© 2025 LATER IS TOO LATE: SAY NO TO OBESITY NOW</p>
      </div>
    </div>
  </footer>
);

export default Footer;
