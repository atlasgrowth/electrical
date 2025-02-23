import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ServicesOverview } from "@/components/services-overview";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ServicesOverview />
      <Reviews />
    </main>
  );
}
