import LoadingGuard from "@/components/global/LoadingGuard";
import { AboutSection } from "@/components/home/About";
import { ContactSection } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/Projects";
import { TapeSection } from "@/components/home/Tape";
import { TestimonialsSection } from '@/components/home/Testimonials';
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root className='tracking-wider'>
      <LoadingGuard>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </LoadingGuard>
    </ReactLenis>
  );
}
