import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target, Award, Users, Sparkles, ShieldCheck, HandHeart } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import { Reveal } from "@/components/site/Reveal";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MediCare Clinic" },
      { name: "description", content: "Learn about MediCare Clinic's story, mission, vision, and the team of expert doctors dedicated to your family's health." },
      { property: "og:title", content: "About Us — MediCare Clinic" },
      { property: "og:description", content: "Our story, mission, vision, and team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: HandHeart, title: "Compassion", desc: "We treat every patient like family — with empathy and respect." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent care you can always trust." },
  { icon: Sparkles, title: "Excellence", desc: "We pursue the highest standards in everything we do." },
  { icon: Users, title: "Community", desc: "Building healthier communities, one patient at a time." },
];

const timeline = [
  { year: "2001", title: "Founded", desc: "MediCare Clinic opens with 3 doctors and a vision." },
  { year: "2008", title: "First expansion", desc: "Added pediatrics and cardiology specialties." },
  { year: "2014", title: "Modern facility", desc: "New 25,000 sq ft state-of-the-art building." },
  { year: "2019", title: "Online care", desc: "Launched telemedicine and digital records." },
  { year: "2024", title: "50,000 patients", desc: "Crossed a major milestone serving our community." },
];

const team = [
  { name: "Dr. Vijay", role: "Chief Medical Officer", img: doc1 },
  { name: "Dr. Eshika Chauhan", role: "Head of Cardiology", img: doc2 },
  { name: "Dr. Rohit Krishna", role: "Senior Cardiologist", img: doc3 },
  { name: "Dr. Priya Sharma", role: "Lead Pediatrician", img: doc4 },
];

function AboutPage() {
  return (
    <>
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About MediCare</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Caring for our community since 2001</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              We blend medical expertise with genuine human care to deliver healthcare that feels personal — because it should be.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <img src={clinicImg} alt="Clinic interior" width={1280} height={800} loading="lazy" className="rounded-3xl shadow-elegant w-full" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our story</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              MediCare Clinic was founded with a simple but powerful belief: world-class healthcare should be accessible, personal, and human. What started as a small practice with three doctors has grown into a trusted institution serving tens of thousands of families.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, our multidisciplinary team continues the same mission — to provide compassionate, evidence-based care in a welcoming environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver exceptional, compassionate healthcare that improves the quality of life for every patient we serve." },
            { icon: Eye, title: "Our Vision", text: "To be the most trusted family healthcare provider — known for excellence, innovation, and a deeply human approach." },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <Card className="hover-lift h-full">
                <CardContent className="p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary shadow-soft">
                    <m.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{m.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our core values</h2>
          <p className="mt-4 text-muted-foreground">The principles that guide every interaction.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <Card className="hover-lift text-center h-full">
                <CardContent className="p-7">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-5 font-semibold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3 text-center">
          {[
            { icon: Award, value: "25+", label: "Years of Experience" },
            { icon: Users, value: "50K+", label: "Patients Served" },
            { icon: Heart, value: "120+", label: "Expert Doctors" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <s.icon className="mx-auto h-10 w-10 text-primary" />
              <div className="mt-4 text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our journey</h2>
          <p className="mt-4 text-muted-foreground">Two decades of growth, learning, and serving our community.</p>
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="pl-12 md:pl-0 md:px-8 [direction:ltr]">
                    <Card className="hover-lift">
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-lg">{t.year}</div>
                        <h4 className="mt-1 font-semibold">{t.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full gradient-primary text-primary-foreground text-xs font-bold shadow-soft [direction:ltr]">
                    {i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet our leadership team</h2>
          <p className="mt-4 text-muted-foreground">Experienced doctors leading with vision and heart.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <Card className="hover-lift overflow-hidden">
                <img src={m.img} alt={m.name} width={640} height={768} loading="lazy" className="w-full h-64 object-cover" />
                <CardContent className="p-5 text-center">
                  <h4 className="font-semibold">{m.name}</h4>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
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