import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoSrc from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[hsl(220,18%,6%)] border-t border-white/[0.08]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

      {/* Main row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Brand */}
        <div>
          <img src={logoSrc} alt="Zarghoon Construction" className="h-10 w-auto mb-3" />
          <p className="text-[13px] text-white/50 leading-relaxed max-w-[220px]">
            Building roads that connect communities across Pakistan since 1991.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Pages</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Projects", "Equipment", "Contact"].map((l) => (
                <Link
                  key={l}
                  to={`/${l.toLowerCase()}`}
                  className="text-[13px] text-white/60 hover:text-primary transition-colors duration-200"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Services</h4>
            <div className="flex flex-col gap-2 text-[13px] text-white/60">
              <span>Highway Construction</span>
              <span>Asphalt Paving</span>
              <span>Bridge Construction</span>
              <span>Road Maintenance</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">Contact</h4>
          <div className="flex flex-col gap-2.5">
            <a href="tel:+922134978326" className="flex items-center gap-2.5 text-[13px] text-white/65 hover:text-primary transition-colors duration-200 group">
              <Phone size={13} className="text-primary shrink-0" />
              +9221-34978326
            </a>
            <a href="mailto:Info@zarghoon.pk" className="flex items-center gap-2.5 text-[13px] text-white/65 hover:text-primary transition-colors duration-200">
              <Mail size={13} className="text-primary shrink-0" />
              Info@zarghoon.pk
            </a>
            <span className="flex items-start gap-2.5 text-[13px] text-white/65">
              <MapPin size={13} className="text-primary shrink-0 mt-[2px]" />
              <span className="leading-snug">
                <span className="font-semibold">Head Office:</span> B-97, Block 4-A, Gulshan-e-Iqbal, Karachi.
                <br />
                <span className="font-semibold">Regional Office:</span> House #198, Phase 1, Shahbaz Town, Quetta.
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-white/30">
          © {new Date().getFullYear()} Zarghoon Construction. All rights reserved.
        </p>
        <p className="text-[12px] text-white/20">Karachi · Est. 1991</p>
      </div>
    </div>
  </footer>
);

export default Footer;
