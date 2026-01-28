import ServiceSummarySection from "@/components/home/ServiceSummary";
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
import ContactSummarySection from "@/components/home/ContactSummary";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <LoadingGuard>
      <ReactLenis root className='tracking-wider'>
        <Header />
        <HeroSection />
        <ServiceSummarySection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSummarySection />
        <ContactSection />
        <Footer />
      </ReactLenis>
    </LoadingGuard>
  );
}
