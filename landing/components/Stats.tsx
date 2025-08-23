export default function Stats() {
  const stats = [
    { label: "Students", value: "50k+" },
    { label: "Courses", value: "1.2k+" },
    { label: "Instructors", value: "300+" },
    { label: "Countries", value: "80+" },
  ];

  return (
    <section aria-label="Platform stats" className="py-10 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="text-xs text-muted mt-1 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}