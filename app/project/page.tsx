import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SetLoading } from "@/components/SetLoading";
import Projects from "@/components/Projects";

export default function page() {
  return (
    <section>
      <SetLoading value={false} />
      <Navbar />
      <div className="mt-[6.25rem] animation-left">
        <Projects />
      </div>
      <Footer />
    </section>
  );
}
