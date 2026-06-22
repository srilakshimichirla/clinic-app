import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, GraduationCap, CalendarCheck } from "lucide-react";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import doc4 from "@/assets/doctor-4.jpg";
import { Reveal } from "@/components/site/Reveal";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — MediCare Clinic" },
      { name: "description", content: "Meet our team of experienced, board-certified doctors specializing in family medicine, cardiology, pediatrics, and more." },
      { property: "og:title", content: "Our Doctors — MediCare Clinic" },
      { property: "og:description", content: "Experienced specialists ready to care for you." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    name: "Dr.Vijay ",
    qualification: "MD, MBBS, FACP",
    specialty: "General Physician & Family Medicine",
    experience: "18 years",
    schedule: "Mon – Fri, 9:00 AM – 5:00 PM",
    img: doc1,
  },
  {
    name: "Dr. Eshika Chauhan",
    qualification: "MD, DM Cardiology",
    specialty: "Cardiologist",
    experience: "14 years",
    schedule: "Mon, Wed, Fri, 10:00 AM – 4:00 PM",
    img: doc2,
  },
  {
    name: "Dr. Rohit Krishna",
    qualification: "MD, FACC",
    specialty: "Senior Cardiologist",
    experience: "25 years",
    schedule: "Tue – Sat, 8:00 AM – 2:00 PM",
    img: doc3,
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MD Pediatrics, FAAP",
    specialty: "Pediatrician",
    experience: "12 years",
    schedule: "Mon – Sat, 11:00 AM – 6:00 PM",
    img: doc4,
  },
];

function DoctorsPage() {
  return (
    <>
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Doctors</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Meet our expert medical team</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Board-certified, deeply experienced, and genuinely passionate about your health.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <Card className="hover-lift overflow-hidden h-full border-border/60">
                <div className="relative aspect-[4/5] overflow-hidden bg-accent">
                  <img src={d.img} alt={d.name} width={640} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">{d.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{d.specialty}</p>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2"><GraduationCap className="h-4 w-4 mt-0.5 text-primary shrink-0" />{d.qualification}</div>
                    <div className="flex items-start gap-2"><Award className="h-4 w-4 mt-0.5 text-primary shrink-0" />{d.experience} of experience</div>
                    <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />{d.schedule}</div>
                  </div>
                  <Button asChild className="w-full mt-5 gradient-primary">
                    <Link to="/appointment"><CalendarCheck className="mr-2 h-4 w-4" /> Book Appointment</Link>
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