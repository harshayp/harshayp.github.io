import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Linkedin from "@/components/Linkedin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills />
      <Linkedin />
      <Footer />
    </div>
  );
}
