import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/equipment", label: "Equipment" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(220,18%,9%)] border-b border-white/[0.12] shadow-[0_4px_32px_-4px_rgba(0,0,0,0.9)]"
            : "bg-[hsl(220,18%,9%)] border-b border-white/[0.08]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[68px] px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={logoSrc}
              alt="Zarghoon Construction"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2.5 rounded-xl text-[14px] font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? "text-white bg-white/[0.1]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-3 bottom-1 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 36 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+922134978326"
              className="hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 hover:border-primary/60 bg-white/[0.05] hover:bg-white/[0.09] text-[13px] font-semibold text-white/85 hover:text-white transition-all duration-200"
            >
              <Phone size={13} className="text-primary" />
              +9221-34978326
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-[13px] font-bold text-white tracking-wide shadow-[0_0_24px_-4px_hsl(122,47%,40%,0.55)] hover:shadow-[0_0_32px_-4px_hsl(122,47%,40%,0.75)] transition-all duration-300"
            >
              Get a Quote
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.97 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="lg:hidden bg-[hsl(220,18%,9%)] border-b border-white/[0.12] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.9)]"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                      active
                        ? "text-primary bg-primary/10 border border-primary/25"
                        : "text-white/80 hover:text-white hover:bg-white/[0.07]"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={15} className={active ? "text-primary" : "text-white/30"} />
                  </Link>
                );
              })}
            </div>

            {/* Bottom contact + CTA */}
            <div className="mx-4 my-3 h-px bg-white/[0.1]" />
            <div className="px-4 pb-5 flex flex-col gap-2.5">
              <div className="flex gap-2">
                <a
                  href="tel:+922134978326"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-white/[0.05] text-[13px] font-semibold text-white/80 hover:text-white hover:border-primary/50 transition-all"
                >
                  <Phone size={13} className="text-primary" /> +9221-34978326
                </a>
                <a
                  href="mailto:Info@zarghoon.pk"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-white/[0.05] text-[13px] font-semibold text-white/80 hover:text-white hover:border-primary/50 transition-all"
                >
                  <Mail size={13} className="text-primary" /> Email Us
                </a>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-[14px] font-bold text-white tracking-wide transition-all duration-200"
              >
                Get a Quote <ChevronRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
