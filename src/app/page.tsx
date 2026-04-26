import Link from "next/link";
import {
  Droplets,
  Mail,
  Sprout,
  Share2,
  Smartphone,
  CalendarCheck,
  Wheat,
  ArrowRight,
} from "lucide-react";

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#e8ede8]/90 backdrop-blur border-b border-stone-200">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <span className="text-base font-bold text-green-800 tracking-tight">
          inyour.garden
        </span>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm text-stone-600 hover:text-stone-900 transition-colors hidden sm:block">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-stone-600 hover:text-stone-900 transition-colors hidden sm:block">
            Pricing
          </Link>
          <Link
            href="https://demo.inyour.garden"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors hidden sm:block"
          >
            Demo
          </Link>
          <Link
            href="#contact"
            className="rounded-lg bg-green-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-800 transition-colors"
          >
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 mb-6">
        <Sprout size={13} className="text-green-600" />
        <span className="text-xs font-medium text-green-700">Personal garden dashboard</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight tracking-tight mb-5">
        Know what's in<br className="hidden sm:block" /> your garden.
      </h1>
      <p className="text-lg text-stone-600 max-w-xl mx-auto mb-8 leading-relaxed">
        A personal dashboard that tracks what needs watering, what's ready to harvest,
        and what needs attention — with a daily digest delivered every morning.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="https://demo.inyour.garden"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
        >
          Explore a live demo
          <ArrowRight size={15} />
        </Link>
        <Link
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}

// ── Value props ───────────────────────────────────────────────────────────────

function ValueProps() {
  const props = [
    {
      icon: <Droplets size={18} className="text-blue-500" />,
      title: "Schedules that think for themselves",
      body: "Per-plant watering and fertilizer schedules. Rain-aware: if enough has fallen, alerts back off automatically so you're never chasing stale reminders.",
    },
    {
      icon: <Mail size={18} className="text-green-600" />,
      title: "Your morning briefing",
      body: "A daily digest at 8am covers what's due to be watered, what needs fertilizing, and any plants flagged for attention. Plan your morning before you're outside.",
    },
    {
      icon: <Share2 size={18} className="text-stone-500" />,
      title: "Share your garden, effortlessly",
      body: "Every instance comes with a public page friends and family can bookmark. They see what's growing, what's been harvested, what's new — without you sending a single photo.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-5xl px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {props.map((p) => (
          <div key={p.title} className="rounded-xl border border-stone-200 bg-white px-5 py-5 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-center">
              {p.icon}
            </div>
            <p className="text-sm font-semibold text-stone-800">{p.title}</p>
            <p className="text-sm text-stone-500 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Digest feature ────────────────────────────────────────────────────────────

function DigestFeature() {
  return (
    <section className="bg-green-800 py-16 px-6">
      <div className="mx-auto max-w-3xl text-center space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-green-700/50 px-3 py-1">
          <Mail size={13} className="text-green-300" />
          <span className="text-xs font-medium text-green-200">Daily digest</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          Every morning at 8am,<br className="hidden sm:block" /> your garden sends you a report.
        </h2>
        <p className="text-green-200 text-base leading-relaxed max-w-xl mx-auto">
          What's due to be watered. What needs fertilizing. Any plants flagged for
          attention. All in one email, specific to your garden and your schedule.
          Weather-aware: if significant rain has fallen or is on the way, your
          watering alerts adjust automatically.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
          {[
            { icon: <Droplets size={14} />, label: "Watering alerts" },
            { icon: <CalendarCheck size={14} />, label: "Fertilizer reminders" },
            { icon: <Sprout size={14} />, label: "Plant health flags" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-lg bg-green-700/40 border border-green-600/50 px-4 py-3">
              <span className="text-green-300">{icon}</span>
              <span className="text-sm font-medium text-green-100">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Public page feature ───────────────────────────────────────────────────────

function PublicPageFeature() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-xl border border-stone-200 bg-white px-8 py-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1">
            <Share2 size={13} className="text-stone-500" />
            <span className="text-xs font-medium text-stone-600">Public sharing</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-900 leading-snug">
            Your garden, always up to date — for anyone you want to share it with.
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            Every inyour.garden instance has a public-facing page showing your plants,
            recent harvests, and what's happening in the garden. Share the link once.
            Friends and family can check in anytime without asking you.
          </p>
        </div>
        <div className="rounded-xl border border-dashed border-stone-200 bg-stone-50 h-48 flex items-center justify-center">
          <p className="text-xs text-stone-400">Screenshot coming soon</p>
        </div>
      </div>
    </section>
  );
}

// ── Feature list ──────────────────────────────────────────────────────────────

function FeatureList() {
  const features = [
    { icon: <Droplets size={15} className="text-blue-500" />, label: "Per-plant watering schedules with rain suppression" },
    { icon: <CalendarCheck size={15} className="text-green-600" />, label: "Fertilizer scheduling with timing controls" },
    { icon: <Wheat size={15} className="text-amber-500" />, label: "Harvest log with monthly summary" },
    { icon: <Sprout size={15} className="text-green-500" />, label: "Plant health journal with photo support" },
    { icon: <Sprout size={15} className="text-lime-600" />, label: "Seed start tracking" },
    { icon: <Share2 size={15} className="text-stone-500" />, label: "Public sharing page" },
    { icon: <Smartphone size={15} className="text-stone-600" />, label: "Installs as a native app on iOS" },
    { icon: <Mail size={15} className="text-green-700" />, label: "Daily email digest" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-xl border border-stone-200 bg-white px-8 py-8">
        <h2 className="text-lg font-semibold text-stone-800 mb-6">Everything included</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-sm text-stone-600">
              <span className="shrink-0">{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── PWA ───────────────────────────────────────────────────────────────────────

function PWASection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-xl border border-stone-200 bg-white px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0">
          <Smartphone size={22} className="text-green-700" />
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-semibold text-stone-800">Lives on your phone like a native app</p>
          <p className="text-sm text-stone-500 leading-relaxed">
            inyour.garden installs directly to your iOS home screen — no App Store, no updates to manage.
            It opens instantly and works on any device with a browser.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Demo CTA ──────────────────────────────────────────────────────────────────

function DemoCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-xl bg-stone-900 px-8 py-10 text-center space-y-4">
        <p className="text-xl font-bold text-white">See a real garden in action.</p>
        <p className="text-stone-400 text-sm">
          The demo is fully interactive — click around, mark plants as watered, explore the dashboard.
        </p>
        <Link
          href="https://demo.inyour.garden"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
        >
          Explore the demo
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 pb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-stone-900">Simple, transparent pricing</h2>
        <p className="text-stone-500 text-sm mt-2">
          We configure everything and hand it off running. You don't touch the infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* Hosted */}
        <div className="rounded-xl border-2 border-green-200 bg-white px-6 py-6 space-y-4">
          <div>
            <p className="text-sm font-bold text-green-800 uppercase tracking-wider">Hosted</p>
            <p className="text-stone-500 text-xs mt-1">We handle everything</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-stone-900">$TK <span className="text-sm font-normal text-stone-400">setup</span></p>
            <p className="text-sm text-stone-500 mt-0.5">+ $TK/mo hosting</p>
          </div>
          <ul className="space-y-2 text-sm text-stone-600">
            {[
              "Full setup and configuration",
              "Your own infrastructure",
              "You own your data",
              "Technical support included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="block w-full text-center rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Self-hosted */}
        <div className="rounded-xl border border-stone-200 bg-white px-6 py-6 space-y-4">
          <div>
            <p className="text-sm font-bold text-stone-600 uppercase tracking-wider">Self-hosted</p>
            <p className="text-stone-500 text-xs mt-1">You run it yourself</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-stone-900">$TK <span className="text-sm font-normal text-stone-400">setup</span></p>
            <p className="text-sm text-stone-500 mt-0.5">No monthly fee</p>
          </div>
          <ul className="space-y-2 text-sm text-stone-600">
            {[
              "Full setup and configuration",
              "Deploy to your own infrastructure",
              "You own your data",
              "Best-effort technical support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-stone-400 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="block w-full text-center rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-16">
      <div className="rounded-xl border border-stone-200 bg-white px-8 py-8 max-w-lg mx-auto text-center space-y-4">
        <h2 className="text-xl font-bold text-stone-900">Get in touch</h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          Have a question or ready to get started? Send us a message and we'll get back to you shortly.
        </p>
        <a
          href="mailto:hello@inyour.garden"
          className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
        >
          <Mail size={15} />
          hello@inyour.garden
        </a>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm font-bold text-green-800">inyour.garden</span>
        <div className="flex items-center gap-5 text-xs text-stone-400">
          <Link href="https://demo.inyour.garden" className="hover:text-stone-600 transition-colors">Demo</Link>
          <Link href="#pricing" className="hover:text-stone-600 transition-colors">Pricing</Link>
          <Link href="#contact" className="hover:text-stone-600 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <DigestFeature />
        <PublicPageFeature />
        <FeatureList />
        <PWASection />
        <DemoCTA />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
