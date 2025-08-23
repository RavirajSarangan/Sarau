export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="size-9 rounded-md bg-brand text-brand-foreground grid place-items-center font-semibold">E</div>
              <span className="font-heading text-xl">EduPro</span>
            </div>
            <p className="text-sm text-muted mt-3">High‑quality online courses to help you upgrade your skills.</p>
          </div>
          <nav className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <div className="text-sm font-medium mb-3">Product</div>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#courses" className="hover:text-foreground">Courses</a></li>
                <li><a href="#testimonials" className="hover:text-foreground">Testimonials</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium mb-3">Company</div>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div>
            <div className="text-sm font-medium mb-3">Stay in the loop</div>
            <form className="flex gap-2">
              <input type="email" required placeholder="Your email" className="flex-1 rounded-md border border-border bg-white dark:bg-background/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/40" />
              <button className="px-4 py-2 text-sm rounded-md bg-brand text-brand-foreground">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-xs text-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} EduPro. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}