"use client";

import { useId, useState, type FormEvent } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contact, socials } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClasses =
  "w-full rounded-lg border border-border-strong bg-bg px-3 py-2.5 text-[0.95rem] text-fg placeholder:text-fg-4 transition-colors duration-200 focus:border-accent/50 focus-visible:outline-none";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const baseId = useId();
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const messageId = `${baseId}-message`;
  const emailErrorId = `${baseId}-email-error`;

  const submitting = status === "submitting";

  function validateEmail(value: string): boolean {
    if (value.length === 0) {
      setEmailError(null);
      return false;
    }
    if (!EMAIL_RE.test(value)) {
      setEmailError("Enter a valid email address.");
      return false;
    }
    setEmailError(null);
    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (!validateEmail(email)) {
      if (email.length === 0) setEmailError("Enter a valid email address.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setEmailError(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left — pitch + direct lines */}
        <div className="flex flex-col">
          <SectionHeading kicker={contact.kicker} title={contact.heading} />

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-fg-3">
              {contact.blurb}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={`mailto:${contact.email}`} variant="primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </Button>
              <a
                href={`mailto:${contact.email}`}
                className="select-all font-mono text-sm text-fg-2 transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-white/[0.02] text-fg-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — form card */}
        <Reveal delay={0.1}>
          <form
            noValidate
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="rounded-2xl border border-border-strong bg-surface p-6 transition-all duration-200 md:p-8"
          >
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={nameId} className="text-sm font-medium text-fg-2">
                  Name
                </label>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  disabled={submitting}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={emailId} className="text-sm font-medium text-fg-2">
                  Email
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  disabled={submitting}
                  aria-invalid={emailError ? true : undefined}
                  aria-describedby={emailError ? emailErrorId : undefined}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => validateEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={`${inputClasses} ${emailError ? "border-danger/60 focus:border-danger/60" : ""}`}
                />
                {emailError && (
                  <p
                    id={emailErrorId}
                    role="alert"
                    className="flex items-center gap-1.5 text-xs text-danger"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {emailError}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor={messageId} className="text-sm font-medium text-fg-2">
                  Message
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={4}
                  value={message}
                  disabled={submitting}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project…"
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={submitting}
                className="w-full sm:w-auto"
              >
                {submitting ? (
                  "Sending…"
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send message
                  </>
                )}
              </Button>

              {/* Status region */}
              <div aria-live="polite" className="min-h-[1.25rem]">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-success">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thanks — your message is on its way. I&apos;ll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-danger">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong sending that. Please try again, or email me
                    directly.
                  </p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
