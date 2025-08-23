import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,theme(colors.brand/12),transparent),radial-gradient(60%_60%_at_90%_10%,theme(colors.brand/8),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="size-2 rounded-full bg-brand inline-block" />
            Learn from experts, anytime
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Upgrade your skills with world‑class online courses
          </h1>
          <p className="text-base md:text-lg text-muted max-w-prose">
            Join thousands of learners advancing their careers with guided, hands‑on lessons,
            projects, and certification paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#" className="px-5 py-3 rounded-md bg-brand text-brand-foreground text-sm md:text-base font-medium text-center">
              Get Started
            </Link>
            <Link href="#courses" className="px-5 py-3 rounded-md border border-border text-sm md:text-base font-medium text-center hover:bg-surface">
              Browse Courses
            </Link>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div>
              <div className="text-2xl font-semibold">50k+</div>
              <div className="text-xs text-muted">Active Students</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-semibold">1.5k+</div>
              <div className="text-xs text-muted">Video Lessons</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-semibold">4.8/5</div>
              <div className="text-xs text-muted">Average Rating</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand/15 via-brand/10 to-transparent">
            <Image
              src="/images/hero-illustration.svg"
              alt="Students studying online"
              fill
              className="object-contain p-6 md:p-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;