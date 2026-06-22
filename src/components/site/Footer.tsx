import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, HeartPulse, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary">
                <HeartPulse className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">MediCare Clinic</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Compassionate, expert healthcare for every member of your family — backed by experienced doctors and modern facilities.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-primary-glow">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-glow">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-primary-glow">Our Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-primary-glow">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>General Consultation</li>
              <li>Pediatrics</li>
              <li>Cardiology</li>
              <li>Diabetes Care</li>
              <li>Emergency Care</li>
              <li>Laboratory Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />123 Wellness Avenue, Health District, NY 10001</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />+1 (555) 123-4567</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />care@medicareclinic.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} MediCare Clinic. All rights reserved.</p>
          <p>Caring for your health, every day.</p>
        </div>
      </div>
    </footer>
  );
}