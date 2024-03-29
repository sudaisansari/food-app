import Hero from "@/components/widgets/Hero";
import { InfiniteMovingCardsDemo } from "@/components/widgets/ServicesMoving";
import DealsandSig from "@/components/widgets/DealsandSig";
import { GetInTouch } from "@/components/widgets/GetInTouch";

export default function Home() {
  return (
   <main>
    <Hero />
    <InfiniteMovingCardsDemo />
    <DealsandSig />
    <GetInTouch />
   </main>
  )
}