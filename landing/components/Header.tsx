"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="size-9 rounded-md bg-brand text-brand-foreground grid place-items-center font-semibold">E</div>
            <span className="font-heading text-xl">EduPro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="#courses" className="hover:text-foreground transition-colors">Courses</Link>
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</Link>
            <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="#" className="px-4 py-2 text-sm rounded-md border border-border hover:bg-surface transition-colors">Sign in</Link>
            <Link href="#" className="px-4 py-2 text-sm rounded-md bg-brand text-brand-foreground hover:opacity-90 transition-opacity">Get Started</Link>
          </div>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center size-10 rounded-md border border-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <Link href="#" className="px-3 py-2 rounded-md hover:bg-surface">Home</Link>
              <Link href="#courses" className="px-3 py-2 rounded-md hover:bg-surface">Courses</Link>
              <Link href="#features" className="px-3 py-2 rounded-md hover:bg-surface">Features</Link>
              <Link href="#testimonials" className="px-3 py-2 rounded-md hover:bg-surface">Testimonials</Link>
              <Link href="#about" className="px-3 py-2 rounded-md hover:bg-surface">About</Link>
              <div className="h-px bg-border my-2" />
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="px-3 py-2 text-center rounded-md border border-border">Sign in</Link>
                <Link href="#" className="px-3 py-2 text-center rounded-md bg-brand text-brand-foreground">Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;