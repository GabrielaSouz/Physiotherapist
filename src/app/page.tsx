import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import HowItWorksTest from "@/components/HowItWorksTest";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAF9]">
      <Header />
      <Hero />
      <Steps />
      <HowItWorksTest />
      <Treatments />
      <About />
      <Testimonials />
      <Contact />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}
