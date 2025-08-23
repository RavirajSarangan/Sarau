import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-brand text-brand-foreground p-8 md:p-12">
          <div className="absolute -top-16 -right-16 size-64 rounded-full bg-white/10" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl tracking-tight">Ready to start learning?</h3>
              <p className="mt-2 text-white/90">Join now and get access to all courses with a single subscription.</p>
            </div>
            <div className="flex md:justify-end">
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link href="#" className="px-5 py-3 rounded-md bg-white text-foreground text-center font-medium">Start free trial</Link>
                <Link href="#courses" className="px-5 py-3 rounded-md border border-white/40 text-center">Browse courses</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}