import Services from "@/components/widgets/Services";
import Hero from "@/components/widgets/Hero";
import { InfiniteMovingCardsDemo } from "@/components/widgets/ServicesMoving";

export default function Home() {
  return (
   <main>
    <Hero />
    <Services />
    <InfiniteMovingCardsDemo />
   </main>
  )
}