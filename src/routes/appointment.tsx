import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — MediCare Clinic" },
      { name: "description", content: "Book an appointment online with MediCare Clinic. Choose your doctor, date, and time." },
      { property: "og:title", content: "Book Appointment — MediCare Clinic" },
      { property: "og:description", content: "Easy online appointment booking." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().max(1000).optional(),
});

const doctors = [
  "Dr. Vijay — General Physician",
  "Dr. Eshika Chauhan — Cardiologist",
  "Dr. Rohit Krishna — Senior Cardiologist",
  "Dr. Priya Sharma — Pediatrician",
];

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", email: "", doctor: "", date: "", time: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      toast.error("Please fix the form errors");
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Appointment request received!");
  };

  return (
    <>
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Book an Appointment</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Schedule your visit</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick your doctor and preferred time — we'll confirm your appointment within a few hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        {submitted ? (
          <Reveal>
            <Card className="shadow-elegant border-success/30">
              <CardContent className="p-10 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15">
                  <CheckCircle2 className="h-9 w-9 text-success" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">Appointment request received!</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you, {form.name}. We've received your request for {form.date} at {form.time}. Our team will call {form.phone} shortly to confirm.
                </p>
                <Button className="mt-6 gradient-primary" onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", doctor: "", date: "", time: "", message: "" }); }}>
                  Book another appointment
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ) : (
          <Reveal>
            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Patient Name" error={errors.name}>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
                    </Field>
                    <Field label="Phone Number" error={errors.phone}>
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 555 123 4567" />
                    </Field>
                  </div>
                  <Field label="Email Address" error={errors.email}>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </Field>
                  <Field label="Select Doctor" error={errors.doctor}>
                    <Select value={form.doctor} onValueChange={(v) => setForm({ ...form, doctor: v })}>
                      <SelectTrigger><SelectValue placeholder="Choose a doctor" /></SelectTrigger>
                      <SelectContent>
                        {doctors.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Appointment Date" error={errors.date}>
                      <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </Field>
                    <Field label="Appointment Time" error={errors.time}>
                      <Input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
                    </Field>
                  </div>
                  <Field label="Message (optional)">
                    <Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Briefly describe your concern…" />
                  </Field>
                  <Button type="submit" size="lg" className="gradient-primary mt-2">
                    <CalendarCheck className="mr-2 h-5 w-5" /> Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        )}
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}