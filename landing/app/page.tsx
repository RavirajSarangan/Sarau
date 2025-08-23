import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <Features />
        <Courses />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
