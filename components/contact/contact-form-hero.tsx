"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { RevealText } from "@/components/animations/reveal-text";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StillLife } from "@/components/ui/artwork";
import type { ContactFormErrors, ContactFormState } from "@/types";

const INTEREST_OPTIONS = ["Branding", "Packaging", "Collaterals", "Other"];

const initialState: ContactFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  interests: [],
};

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

export function ContactFormHero() {
  const [values, setValues] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function updateField<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (key !== "interests" && errors[key as Exclude<keyof ContactFormState, "interests">]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function toggleInterest(option: string) {
    setValues((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((i) => i !== option)
        : [...prev.interests, option],
    }));
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
    <section className="relative bg-ink pb-20 pt-32 text-ink-foreground md:pt-40">
      <div className="container-outer grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            <RevealText text="Want to make your" />
            <br />
            <RevealText text="brand" delay={0.15} />{" "}
            <span className="font-accent font-normal">
              <RevealText text="memorable?" delay={0.25} />
            </span>
          </h1>

          <FadeIn direction="scale" delay={0.3} className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <StillLife theme="slate" className="h-full w-full grayscale contrast-125" rounded="rounded-none" />
          </FadeIn>
        </div>

        <FadeIn direction="right" delay={0.15}>
          <div className="relative rounded-3xl bg-ink-elevated p-8 md:p-10">
            <span
              className="absolute right-8 top-8 hidden h-2.5 w-2.5 rounded-full bg-lavender sm:block"
              aria-hidden="true"
            />
            <p className="max-w-sm text-lg leading-snug text-ink-foreground/90">
              Fill the form below, and we&apos;ll set up a brief call to explore how
              we can help you!
            </p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[20rem] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 className="h-14 w-14 text-lavender" />
                  </motion.div>
                  <h2 className="mt-6 font-display text-2xl font-semibold">Message sent.</h2>
                  <p className="mt-2 max-w-sm text-sm text-muted-invert">
                    Thanks for reaching out — we&apos;ll reply within one business day
                    to set up a call.
                  </p>
                  <Button variant="outline-invert" className="mt-8" onClick={() => setStatus("idle")}>
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
                  className="mt-6 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-name" className="sr-only">
                        Your name
                      </label>
                      <Input
                        id="cf-name"
                        autoComplete="name"
                        placeholder="Your name"
                        value={values.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        hasError={Boolean(errors.name)}
                        className="border-ink-foreground/15 bg-ink text-ink-foreground placeholder:text-muted-invert"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-company" className="sr-only">
                        Company name
                      </label>
                      <Input
                        id="cf-company"
                        autoComplete="organization"
                        placeholder="Company name"
                        value={values.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="border-ink-foreground/15 bg-ink text-ink-foreground placeholder:text-muted-invert"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="cf-email" className="sr-only">
                        Email ID
                      </label>
                      <Input
                        id="cf-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email ID"
                        value={values.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        hasError={Boolean(errors.email)}
                        className="border-ink-foreground/15 bg-ink text-ink-foreground placeholder:text-muted-invert"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className="sr-only">
                        Phone Number
                      </label>
                      <Input
                        id="cf-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="border-ink-foreground/15 bg-ink text-ink-foreground placeholder:text-muted-invert"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="sr-only">
                      Tell us about the project
                    </label>
                    <Textarea
                      id="cf-message"
                      placeholder="Tell us about the project"
                      value={values.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      hasError={Boolean(errors.message)}
                      className="min-h-28 border-ink-foreground/15 bg-ink text-ink-foreground placeholder:text-muted-invert"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <fieldset className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
                    <legend className="sr-only">What do you need?</legend>
                    {INTEREST_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 text-sm text-ink-foreground/80"
                      >
                        <input
                          type="checkbox"
                          checked={values.interests.includes(option)}
                          onChange={() => toggleInterest(option)}
                          className="h-3.5 w-3.5 accent-lavender"
                        />
                        {option}
                      </label>
                    ))}
                  </fieldset>

                  <Button
                    type="submit"
                    variant="lavender"
                    size="lg"
                    disabled={status === "submitting"}
                    className="mt-2 w-full"
                  >
                    {status === "submitting" ? "Sending…" : "Book a Call"}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
