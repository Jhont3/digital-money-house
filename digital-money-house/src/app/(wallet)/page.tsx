import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="h-auto bg-bgHeroMobile md:bg-bgHeroTablet lg:bg-bgHeroDesktop bg-no-repeat bg-cover">
      <Hero/>
    </main>
  );
}
