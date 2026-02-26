import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ArchiveGrid from "@/components/ArchiveGrid";
import Crowdfunding from "@/components/Crowdfunding";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <ArchiveGrid />
      {/* <Crowdfunding /> */}
    </main>
  );
}
