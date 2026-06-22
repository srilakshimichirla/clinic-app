import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Baby, HeartPulse, Activity, ShieldCheck, Syringe, Ambulance, FlaskConical, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MediCare Clinic" },
      { name: "description", content: "Comprehensive healthcare services including consultations, pediatrics, cardiology, diabetes care, vaccinations, and emergency care." },
      { property: "og:title", content: "Services — MediCare Clinic" },
      { property: "og:description", content: "Explore our full range of healthcare services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Comprehensive primary care for adults, family medicine, and preventive checkups." },
  { icon: Baby, title: "Pediatrics", desc: "Expert care for infants, children, and adolescents — from wellness visits to vaccinations." },
  { icon: HeartPulse, title: "Cardiology", desc: "Advanced diagnosis and treatment of heart conditions with modern imaging and ECG." },
  { icon: Activity, title: "Diabetes Care", desc: "Personalized diabetes management, monitoring, and lifestyle counseling." },
  { icon: ShieldCheck, title: "Health Checkups", desc: "Full-body preventive screenings tailored to your age, gender, and risk profile." },
  { icon: Syringe, title: "Vaccinations", desc: "Routine and travel vaccinations for all ages, following the latest CDC guidelines." },
  { icon: Ambulance, title: "Emergency Care", desc: "24/7 emergency department with experienced trauma and critical care teams." },
  { icon: FlaskConical, title: "Laboratory Services", desc: "On-site labs for blood tests, urinalysis, biopsies, and rapid results." },
];

function ServicesPage() {
  return (
    <>
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Complete healthcare, all under one roof</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday wellness to specialized care, MediCare offers a full spectrum of medical services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Card className="hover-lift h-full group border-border/60">
                <CardContent className="p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary shadow-soft group-hover:scale-110 transition-transform">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[60px]">{s.desc}</p>
                  <Button asChild variant="ghost" className="mt-4 px-0 hover:bg-transparent text-primary hover:text-primary-glow">
                    <Link to="/appointment">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}