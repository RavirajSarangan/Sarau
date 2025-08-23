import Image from "next/image";

export default function BrandStrip() {
  return (
    <section aria-label="Partners" className="py-10 md:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-xs uppercase tracking-wider text-muted mb-6">Trusted by teams worldwide</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex justify-center">
              <Image src={`/logos/logo${i}.svg`} alt={`Partner ${i}`} width={120} height={32} className="opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}