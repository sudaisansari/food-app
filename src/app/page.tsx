import Services from "@/components/widgets/Services";
import Hero from "@/components/widgets/Hero";
import { InfiniteMovingCardsDemo } from "@/components/widgets/ServicesMoving";
import DealsandSig from "@/components/widgets/DealsandSig";

export default function Home() {
  return (
   <main>
    <Hero />
    <InfiniteMovingCardsDemo />
    <DealsandSig />
   </main>
  )
}