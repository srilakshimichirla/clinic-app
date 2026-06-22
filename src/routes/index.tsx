import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  Baby,
  HeartPulse,
  Activity,
  ShieldCheck,
  Syringe,
  Ambulance,
  FlaskConical,
  CalendarCheck,
  Phone,
  Star,
  Clock,
  Award,
  Users,
  Smile,
  CheckCircle2,
  Heart,
  BadgeDollarSign,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import { Reveal } from "@/components/site/Reveal";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediCare Clinic — Trusted Healthcare for Your Family" },
      { name: "description", content: "Book appointments online and get expert medical care from experienced doctors at MediCare Clinic." },
      { property: "og:title", content: "MediCare Clinic — Trusted Healthcare for Your Family" },
      { property: "og:description", content: "Expert doctors, modern care, easy online booking." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  { icon: Stethoscope, title: "Expert Doctors", desc: "Board-certified specialists across every major discipline." },
  { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock emergency care when you need it most." },
  { icon: ShieldCheck, title: "Modern Facilities", desc: "State-of-the-art diagnostic and treatment equipment." },
  { icon: Smile, title: "Patient First", desc: "Compassionate, personalized care for every patient." },
];

const services = [
  { icon: Stethoscope, title: "General Consultation" },
  { icon: Baby, title: "Pediatrics" },
  { icon: HeartPulse, title: "Cardiology" },
  { icon: Activity, title: "Diabetes Care" },
  { icon: ShieldCheck, title: "Health Checkups" },
  { icon: Syringe, title: "Vaccinations" },
  { icon: Ambulance, title: "Emergency Care" },
  { icon: FlaskConical, title: "Laboratory Services" },
];

const stats = [
  { value: "50,000+", label: "Patients Served", icon: Users },
  { value: "120+", label: "Expert Doctors", icon: Stethoscope },
  { value: "25+", label: "Years of Experience", icon: Award },
  { value: "98%", label: "Patient Satisfaction", icon: Smile },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Patient", text: "The doctors at MediCare are exceptional — caring, thorough, and truly listen. Best clinic I have ever visited.", rating: 5 },
  { name: "James Carter", role: "Patient", text: "Booking online was effortless and I was seen within minutes. The staff are warm and incredibly professional.", rating: 5 },
  { name: "Aisha Khan", role: "Mother of two", text: "Pediatric care here is wonderful. My kids actually look forward to their visits!", rating: 5 },
];

const whyChooseUs = [
  { icon: Users, title: "Experienced Medical Professionals", desc: "Skilled doctors and healthcare staff providing quality care." },
  { icon: Heart, title: "Patient-Centered Approach", desc: "Personalized treatment plans focused on patient well-being." },
  { icon: ShieldCheck, title: "Modern Medical Facilities", desc: "Advanced equipment and technology for accurate diagnosis and treatment." },
  { icon: CalendarCheck, title: "Easy Appointment Booking", desc: "Convenient online appointment scheduling." },
  { icon: BadgeDollarSign, title: "Affordable Healthcare Services", desc: "Quality medical care at reasonable costs." },
  { icon: Ambulance, title: "Emergency Support", desc: "Quick assistance for urgent healthcare needs." },
  { icon: Star, title: "Trusted by Patients", desc: "Strong reputation for compassionate and reliable healthcare services." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Healthcare professionals at MediCare Clinic"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl text-primary-foreground animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-4 py-1.5 text-sm font-medium border border-background/20">
              <HeartPulse className="h-4 w-4" /> Trusted by 50,000+ families
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Trusted Healthcare for Your Family
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Book appointments online and get expert medical care from experienced doctors.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant text-base h-12 px-6">
                <Link to="/appointment"><CalendarCheck className="mr-2 h-5 w-5" /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/40 bg-background/10 text-primary-foreground backdrop-blur hover:bg-background/20 text-base h-12 px-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <img src={clinicImg} alt="MediCare clinic interior" width={1280} height={800} loading="lazy" className="rounded-3xl shadow-elegant w-full h-auto object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Welcome to MediCare</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Compassionate care, modern medicine</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For over two decades, MediCare Clinic has been a pillar of community health. Our team blends advanced clinical expertise with a personal, family-first approach — so every visit feels like care from someone who truly knows you.
            </p>
            <ul className="mt-6 space-y-3">
              {["Same-day appointments available", "Specialist referrals in-house", "Transparent pricing and billing", "Electronic health records"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 gradient-primary"><Link to="/about">Learn more about us</Link></Button>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Clinic highlights</h2>
            <p className="mt-4 text-muted-foreground">A complete healthcare experience under one roof.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <Card className="hover-lift border-border/60 bg-card h-full">
                  <CardContent className="p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary shadow-soft">
                      <h.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-semibold text-lg">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why choose us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">A clinic built around your wellbeing</h2>
            <p className="mt-4 text-muted-foreground">
              From advanced diagnostics to attentive bedside care, every detail at MediCare is designed for trust, safety, and your peace of mind.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="hover-lift border-border/60 bg-card h-full">
                  <CardContent className="p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary shadow-soft">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 font-semibold text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <s.icon className="mx-auto h-8 w-8 opacity-90" />
                <div className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{s.value}</div>
                <div className="mt-2 text-primary-foreground/85 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What our patients say</h2>
          <p className="mt-4 text-muted-foreground">Real stories from people we have cared for.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <Card className="hover-lift h-full border-border/60">
                <CardContent className="p-7">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full gradient-primary text-primary-foreground font-semibold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-destructive/95 text-destructive-foreground p-8 md:p-12 shadow-elegant grid gap-6 md:grid-cols-[auto_1fr_auto] items-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-background/15">
            <Ambulance className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">24/7 Emergency Care</h3>
            <p className="mt-2 text-destructive-foreground/90">Need urgent medical attention? Our emergency line is always open.</p>
          </div>
          <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-xl bg-background text-destructive font-semibold px-6 py-3 hover:bg-background/90 transition-colors shadow-soft">
            <Phone className="h-5 w-5" /> +1 (555) 123-4567
          </a>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
