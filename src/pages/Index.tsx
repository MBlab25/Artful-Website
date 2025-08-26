import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="pt-16"> {/* Account for fixed header */}
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
