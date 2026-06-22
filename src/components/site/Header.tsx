import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary shadow-soft">
              <HeartPulse className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight">
              MediCare<span className="text-primary"> Clinic</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/40 transition-colors"
                activeProps={{ className: "text-primary bg-accent/60" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="gradient-primary shadow-soft hover:opacity-95">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-lg hover:bg-accent/50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-1 pt-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/40"
                  activeProps={{ className: "text-primary bg-accent/60" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-2 gradient-primary">
                <Link to="/appointment" onClick={() => setOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}