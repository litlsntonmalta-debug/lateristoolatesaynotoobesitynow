import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import projectLogo from "@/assets/project-logo.png";
import erasmusOfficialLogo from "@/assets/erasmus-official-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Partners", path: "/partners" },
  { label: "Work Done", path: "/work-done" },
  { label: "Timeline", path: "/timeline" },
  { label: "Mobilities & Meetings", path: "/mobilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Repository", path: "/repository" },
  { label: "European Dishes Ebook", path: "/european-dishes-ebook" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={projectLogo}
            alt="Later is Too Late — Say No to Obesity Now project logo"
            className="h-10 md:h-12 w-auto shrink-0"
            width={1024}
            height={1024}
          />
          <span className="hidden sm:inline text-base md:text-lg font-heading font-bold text-gradient truncate">
            LATER IS TOO LATE
          </span>
          <span className="hidden md:flex items-center pl-3 ml-1 border-l border-border h-10 shrink-0">
            <img
              src={erasmusOfficialLogo}
              alt="Erasmus+ — Co-funded by the European Union"
              className="h-8 lg:h-9 w-auto"
              width={1376}
              height={768}
              loading="lazy"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
