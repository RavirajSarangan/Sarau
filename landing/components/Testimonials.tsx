function Stars() {
  return (
    <div className="text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="inline-block mr-1" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const items = [
    { name: "Courtney Henry", role: "Product Designer", quote: "The lessons are concise and practical. I landed my dream job after completing two courses!" },
    { name: "Arlene McCoy", role: "Frontend Engineer", quote: "I love the hands‑on projects. They helped me build a strong portfolio quickly." },
    { name: "Albert Flores", role: "Marketer", quote: "The quality is top‑notch and the community is super supportive." },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-3">Loved by thousands of learners</h2>
          <p className="text-muted">Hear what our community says about learning with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-border p-6 bg-surface/50">
              <Stars />
              <blockquote className="mt-3 text-sm text-foreground/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand text-brand-foreground grid place-items-center text-sm font-medium">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium leading-tight">{t.name}</div>
                  <div className="text-xs text-muted leading-tight">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}