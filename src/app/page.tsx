import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ArchiveGrid from "@/components/ArchiveGrid";
import Crowdfunding from "@/components/Crowdfunding";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <ArchiveGrid />
        {/* <Crowdfunding /> */}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
