import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold text-gradient mb-4">ZARGHOON</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Building roads that connect the future. Excellence in civil road construction since 1998.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Projects", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Highway Construction</span>
            <span>Asphalt Paving</span>
            <span>Bridge Construction</span>
            <span>Road Maintenance</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>info@zarghoon.com</span>
            <span>+1 (555) 123-4567</span>
            <span>123 Construction Ave</span>
          </div>
        </div>
      </div>
      <div className="glow-line mb-8" />
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zarghoon Construction. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
