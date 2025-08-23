import Image from "next/image";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
  );
}

export default function Courses() {
  const courses = [
    { id: 1, title: "UI/UX Design Foundations", author: "Jane Cooper", rating: 4.8, price: "$49", image: "/images/course-1.svg" },
    { id: 2, title: "Modern JavaScript Mastery", author: "Cody Fisher", rating: 4.7, price: "$59", image: "/images/course-2.svg" },
    { id: 3, title: "Data Analysis with Python", author: "Leslie Alexander", rating: 4.9, price: "$69", image: "/images/course-3.svg" },
    { id: 4, title: "Digital Marketing Essentials", author: "Robert Fox", rating: 4.6, price: "$39", image: "/images/course-4.svg" },
    { id: 5, title: "Project Management Basics", author: "Guy Hawkins", rating: 4.5, price: "$45", image: "/images/course-5.svg" },
    { id: 6, title: "Intro to Machine Learning", author: "Jacob Jones", rating: 4.8, price: "$79", image: "/images/course-6.svg" },
  ];

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight mb-3">Popular Courses</h2>
            <p className="text-muted">Curated by experts to help you reach your goals.</p>
          </div>
          <a href="#" className="hidden md:inline-flex px-4 py-2 text-sm rounded-md border border-border hover:bg-surface">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((c) => (
            <article key={c.id} className="rounded-xl border border-border overflow-hidden bg-white dark:bg-surface">
              <div className="relative h-40">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 text-xs bg-brand text-brand-foreground px-2 py-1 rounded">Best Seller</div>
              </div>
              <div className="p-4">
                <h3 className="font-medium leading-snug">{c.title}</h3>
                <div className="text-sm text-muted mt-1">{c.author}</div>
                <div className="flex items-center justify-between mt-3">
                  <div className="inline-flex items-center gap-1 text-amber-500">
                    <Star /><span className="text-sm text-foreground/90">{c.rating}</span>
                  </div>
                  <div className="text-sm font-semibold">{c.price}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}