import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ZoomParallax } from "@/components/sections/zoom-parallax";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <ZoomParallax />
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="about">
          <About />
        </div>
        <Testimonials />
        <CTA />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
