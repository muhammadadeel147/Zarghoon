import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoSrc from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-[hsl(210,40%,96%)] border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10">

      {/* Main row — 2-col on mobile, 3-col on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">

        {/* Brand — full width on mobile */}
        <div className="col-span-2 md:col-span-1 flex items-center gap-3 md:block">
          <img src={logoSrc} alt="Zarghoon Construction" className="h-8 sm:h-10 w-auto shrink-0" />
          <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed md:mt-3 md:max-w-[220px]">
            Building roads that connect communities across Pakistan since 1991.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 sm:mb-3">Pages</h4>
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {[
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Projects", path: "/projects" },
              { label: "Equipment", path: "/equipment" },
              { label: "ISO Certification", path: "/iso-certification" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.path}
                className="text-[12px] sm:text-[13px] text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 sm:mb-3">Contact</h4>
          <div className="flex flex-col gap-2">
            <a href="tel:+922134978326" className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-600 hover:text-primary transition-colors duration-200">
              <Phone size={12} className="text-primary shrink-0" />
              +9221-34978326
            </a>
            <a href="mailto:Info@zarghoon.pk" className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-600 hover:text-primary transition-colors duration-200">
              <Mail size={12} className="text-primary shrink-0" />
              Info@zarghoon.pk
            </a>
            <span className="flex items-start gap-2.5 text-[13px] text-gray-600">
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
      <div className="mt-6 pt-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-1.5">
        <p className="text-[11px] text-gray-400">
          © {new Date().getFullYear()} Zarghoon Construction. All rights reserved.
        </p>
        <p className="text-[11px] text-gray-300">Karachi · Est. 1991</p>
      </div>
    </div>
  </footer>
);

export default Footer;
