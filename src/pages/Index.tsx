<div style="display: flex; align-items: center; font-family: Arial, sans-serif;">
  <!-- Logo Icon -->
  <div style="margin-right: 10px;">
    <span style="font-size: 48px; font-weight: bold; color: #0D1B2A;">A</span>
    <span style="font-size: 48px; font-weight: bold; color: #1D7CEB; position: relative; left: -20px;">A</span>
  </div>
  
  <!-- Text -->
  <div>
    <div style="font-size: 24px; font-weight: bold; color: #0D1B2A;">ARTFUL ADVISORS</div>
    <div style="font-size: 14px; letter-spacing: 2px; color: #0D1B2A;">CONSULTING</div>
  </div>
</div>
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
