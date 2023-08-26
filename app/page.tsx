import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollTo from "@/components/ScrollTo";
import SessionTitle from "@/components/SessionTitle";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="mt-[6.25rem] animation-left">
        <Profile />
        <About />
        <section className="mt-vh160px" id="projects">
          <SessionTitle title="Projetos" subtitle="olhe meus" />
          <Projects />
        </section>
        <Contact />
        <Footer />
      </div>
      <ScrollTo />
    </section>
  );
}
