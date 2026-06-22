import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MediCare Clinic" },
      { name: "description", content: "Get in touch with MediCare Clinic. Find our address, phone, email, working hours, and contact form." },
      { property: "og:title", content: "Contact — MediCare Clinic" },
      { property: "og:description", content: "Reach out — we're here to help." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="gradient-soft py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">We're here to help</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Questions, feedback, or need urgent care? Reach us any time — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: "Address", text: "123 Wellness Avenue, Health District, NY 10001" },
            { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
            { icon: Mail, title: "Email", text: "care@medicareclinic.com" },
            { icon: Clock, title: "Hours", text: "Mon–Sat: 8AM–8PM\nSun: 9AM–2PM" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Card className="hover-lift h-full">
                <CardContent className="p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary shadow-soft">
                    <c.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">{c.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="shadow-elegant h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">We typically reply within 24 hours.</p>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-1.5">
                    <Label>Your Name</Label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Email</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Message</Label>
                    <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" className="gradient-primary"><Send className="mr-2 h-4 w-4" />Send Message</Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center gap-3">
                  <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] text-white px-4 py-2.5 text-sm font-medium hover:opacity-90">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                  <div className="flex gap-2 ml-auto">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary hover:gradient-primary hover:text-primary-foreground transition-colors">
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="shadow-elegant overflow-hidden h-full">
              <iframe
                title="MediCare Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422975529207!2d-73.98823!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU1LjciTiA3M8KwNTknMTcuNiJX!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}