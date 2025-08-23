import { ReactNode } from "react";

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <div className="size-10 rounded-md bg-brand/10 text-brand grid place-items-center">
      {children}
    </div>
  );
}

export default function Features() {
  const items = [
    {
      title: "Expert Mentors",
      desc: "Learn from industry leaders with years of real‑world experience.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/></svg>
      ),
    },
    {
      title: "Hands‑on Projects",
      desc: "Build real projects to master concepts and showcase your skills.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a2 2 0 0 1 2-2h12v14H6a2 2 0 0 1-2-2V7Zm4 0h8v4H8V7Z" fill="currentColor"/></svg>
      ),
    },
    {
      title: "Certificates",
      desc: "Earn shareable certificates to boost your professional profile.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12v10H6V3Zm0 12 6 3 6-3v4H6v-4Z" fill="currentColor"/></svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-3">Learn smarter with powerful features</h2>
          <p className="text-muted">Everything you need to stay motivated and achieve your goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-border p-6 bg-surface/50">
              <IconWrap>{f.icon}</IconWrap>
              <div className="mt-4 font-medium">{f.title}</div>
              <div className="text-sm text-muted mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}