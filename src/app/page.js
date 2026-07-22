import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import BackToTop from "@/components/common/BackToTop";
import ScrollProgress from "@/components/common/ScrollProgress";

export default function Home() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
       <About />
       <Skills />
       <Experience/>
       <Projects/>
       <Testimonials />
       <Contact />
       <Footer/>
       <BackToTop />
    </>
  );
}