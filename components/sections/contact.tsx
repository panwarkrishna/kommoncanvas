"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/constants";
import type { ContactFormErrors, ContactFormState } from "@/types";

const BUDGET_OPTIONS = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+"];

const initialState: ContactFormState = { name: "", email: "", budget: "", message: "" };

function validate(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) {
    errors.email = "Please share an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Tell us a little more about the project (10+ characters).";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    // Simulated network request — wire up to a real endpoint/service when ready.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialState);
  }

  return (
    <section id="contact" className="relative bg-paper py-24 text-ink md:py-32">
      <div className="container-outer">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Get in touch</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
              <RevealText text="Tell us about" />
              <br />
              <RevealText text="your project." />
            </h2>
            <FadeIn delay={0.2} className="mt-6 max-w-sm">
              <p className="text-base leading-relaxed text-muted">
                Prefer email or a call? We&apos;re happy to talk it through before
                anything is official.
              </p>
            </FadeIn>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-ink/80 transition-colors hover:text-lavender-deep"
              >
                <Mail className="h-4 w-4 text-lavender-deep" /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-ink/80 transition-colors hover:text-lavender-deep"
              >
                <Phone className="h-4 w-4 text-lavender-deep" /> {siteConfig.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 text-lavender-deep" /> {siteConfig.location}
              </p>
            </div>

            {/* Google Maps placeholder — swap for a live embed when an API key is configured */}
            <div
              role="img"
              aria-label={`Approximate studio location near ${siteConfig.location}`}
              className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 bg-lavender/15"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(13,13,14,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,14,0.08) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <MapPin className="h-6 w-6 text-lavender-deep" />
                <p className="text-sm font-medium text-ink">{siteConfig.location}</p>
                <p className="text-xs text-muted">Map preview available on request</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-ink/10 bg-white p-8 shadow-sm md:p-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <CheckCircle2 className="h-14 w-14 text-lavender-deep" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">Message sent.</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted">
                      Thanks for reaching out — a member of the {siteConfig.name} team will
                      reply within one business day.
                    </p>
                    <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          value={values.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          hasError={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-2 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          hasError={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          placeholder="jane@company.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                        Estimated budget{" "}
                        <span className="text-muted">(optional)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField("budget", option)}
                            aria-pressed={values.budget === option}
                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300 ${
                              values.budget === option
                                ? "border-lavender-deep bg-lavender text-lavender-foreground"
                                : "border-ink/15 text-muted hover:border-lavender-deep hover:text-lavender-deep"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Project details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        hasError={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        placeholder="What are you building, and what does success look like?"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-xs text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
