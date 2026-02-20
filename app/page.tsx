const stats = [
  { value: "60%", label: "of agency calls go unanswered" },
  { value: "4–6 days", label: "average response time to inquiries" },
  { value: "100+", label: "calls to arrange a single viewing" },
];

const features = [
  {
    title: "Instant Lead Qualification",
    description:
      "Missed calls redirect to WhatsApp. Orianna qualifies prospects instantly — answering property questions, collecting requirements, and scheduling viewings. Around the clock.",
  },
  {
    title: "Every Channel, One Pipeline",
    description:
      "Phone, WhatsApp, email, SMS, Instagram — all inbound channels converge into one intelligent system. No lead slips through the cracks.",
  },
  {
    title: "Back-Office on Autopilot",
    description:
      "CRM updates, calendar management, follow-up sequences, and priority escalation — handled automatically. Your agents close deals, not spreadsheets.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Redirect your phone line to Orianna. Setup takes 10 minutes — no code, no integration headaches.",
  },
  {
    number: "02",
    title: "Qualify",
    description:
      "Orianna engages every caller via WhatsApp — answering questions, collecting requirements, and scheduling viewings instantly.",
  },
  {
    number: "03",
    title: "Close",
    description:
      "Your agents receive pre-qualified leads with full context. Focus on what matters — closing deals.",
  },
];

const benefits = [
  {
    title: "Zero lost leads",
    description:
      "Every inbound call gets an instant response, 24/7. No voicemail, no hold time, no missed opportunities.",
  },
  {
    title: "Live in 10 minutes",
    description:
      "No code. No integration project. Redirect your phone line and Orianna starts qualifying leads immediately.",
  },
  {
    title: "Agents sell, not chase",
    description:
      "Orianna filters hundreds of daily inquiries so your team only handles the leads worth pursuing.",
  },
];

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "10 minutes. Connect your phone line, set up WhatsApp Business redirection, and Orianna is live. No code required, no technical integration.",
  },
  {
    question: "Does Orianna send messages autonomously?",
    answer:
      "Orianna engages leads via WhatsApp following your agency's guidelines and tone. You maintain full visibility and control through the dashboard — every conversation is logged and reviewable.",
  },
  {
    question: "When does Orianna add the most value?",
    answer:
      "Orianna excels at handling high-volume inbound inquiries — property questions, viewing requests, and initial qualification. It's most impactful for agencies receiving 50+ calls per day where leads are being lost to slow response times.",
  },
  {
    question: "What channels does Orianna support?",
    answer:
      "Today, Orianna focuses on WhatsApp-based lead qualification via phone redirection — the fastest, cheapest, and most effective entry point. Multi-channel support (email, SMS, voice AI) is on our roadmap.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      {/* ── Nav ── */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <span className="text-lg font-semibold tracking-tight">Orianna</span>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            How it works
          </a>
          <a href="#faq" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-sm text-text-secondary transition-colors hover:text-text-primary md:block">
            Sign in
          </a>
          <a
            href="#contact"
            className="rounded-full bg-btn px-4 py-2 text-sm font-medium text-btn-text transition-colors hover:bg-btn/90"
          >
            Book a demo
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center md:pt-32 lg:px-8">
        <p className="stagger-1 animate-fade-in-up text-sm font-medium text-accent">
          AI-powered lead qualification for real estate
        </p>

        <h1 className="stagger-2 animate-fade-in-up mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Never miss a lead again.
        </h1>

        <p className="stagger-3 animate-fade-in-up mx-auto mt-6 max-w-xl text-lg text-text-secondary">
          Orianna answers your inbound calls via WhatsApp — qualifying
          leads, booking viewings, and updating your CRM. 24/7.
        </p>

        <div className="stagger-4 animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-btn px-6 py-3 text-sm font-medium text-btn-text transition-colors hover:bg-btn/90"
          >
            Book a demo
          </a>
          <a
            href="#how-it-works"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-text-secondary hover:text-text-primary"
          >
            See how it works
          </a>
        </div>

        {/* Trust */}
        <div className="stagger-5 animate-fade-in mt-16 flex items-center justify-center gap-2 text-sm text-text-secondary/60">
          <span>Backed by</span>
          <span className="font-medium text-text-secondary">HEC Paris</span>
          <span>·</span>
          <span className="font-medium text-text-secondary">Station F</span>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-10 text-center${
                i > 0 ? " border-t border-border md:border-l md:border-t-0" : ""
              }`}
            >
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent">Capabilities</p>
          <h2 className="mt-2 max-w-lg text-3xl font-bold tracking-tight md:text-4xl">
            Your AI operating system for real estate
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-canvas p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent">How it works</p>
          <h2 className="mt-2 max-w-md text-3xl font-bold tracking-tight md:text-4xl">
            From missed call to qualified lead in minutes
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-xl border border-border bg-surface p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Orianna ── */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent">Why Orianna</p>
          <h2 className="mt-2 max-w-md text-3xl font-bold tracking-tight md:text-4xl">
            Boost revenue. Cut friction.
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title}>
                <h3 className="text-base font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-sm font-medium text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Common questions
          </h2>

          <div className="mt-10 divide-y divide-border rounded-xl border border-border">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-medium">{faq.question}</span>
                  <span className="faq-icon ml-4 shrink-0 text-lg text-text-secondary">+</span>
                </summary>
                <div className="faq-answer px-6 pb-4">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="bg-surface py-24">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stop losing leads to{" "}
            <span className="text-accent">slow response times.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join real estate agencies using Orianna to convert more inquiries
            into viewings and signed deals.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-lg bg-btn px-8 py-3.5 text-sm font-medium text-btn-text transition-colors hover:bg-btn/90"
          >
            Book a demo
          </a>
          <p className="mt-6 text-xs text-text-secondary/60">
            Backed by HEC Paris &amp; Station F
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8">
          <span className="text-sm font-semibold text-text-secondary">Orianna</span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary">
              Privacy
            </a>
            <a href="#" className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary">
              Terms
            </a>
            <a href="#" className="text-xs text-text-secondary/60 transition-colors hover:text-text-secondary">
              Legal
            </a>
          </div>
          <span className="text-xs text-text-secondary/60">
            &copy; {new Date().getFullYear()} Orianna
          </span>
        </div>
      </footer>
    </div>
  );
}
