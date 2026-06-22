import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";

export function AppointmentCTA() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-14 shadow-elegant">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-12 -bottom-16 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] items-center">
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to take care of your health?
            </h2>
            <p className="mt-3 text-primary-foreground/85 text-base md:text-lg max-w-xl">
              Book a consultation with our experienced doctors today — fast, easy, and online.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90 shadow-soft">
            <Link to="/appointment">
              <CalendarCheck className="mr-2 h-5 w-5" /> Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}