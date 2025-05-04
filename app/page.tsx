// app/page.tsx
import Navbar from"@/components/landingPage/Navbar"
import HeroSection from '@/components/landingPage/HeroSection';
import Footer from "@/components/landingPage/Footer"
import TrustedSection from "@/components/landingPage/TrustedSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#161616]">
      <Navbar />
      <HeroSection />
      <TrustedSection/>
      <Footer/>
    </main>
  );
}
