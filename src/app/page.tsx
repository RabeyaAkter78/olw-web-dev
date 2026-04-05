import Faq from "@/components/HomePage/Faq";
import GeetingStartedEasy from "@/components/HomePage/GeetingStartedEasy";
import Hero from "@/components/HomePage/Hero";
import MarqueeComponent from "@/components/HomePage/MarqueeComponent";
import OurService from "@/components/HomePage/OurService";
import Pricing from "@/components/HomePage/Pricing";
import Review from "@/components/HomePage/Review";
import Tools from "@/components/HomePage/Tools";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <MarqueeComponent></MarqueeComponent>
      <OurService></OurService>
      <Pricing></Pricing>
      <Tools></Tools>
      <GeetingStartedEasy></GeetingStartedEasy>
      <WhyChooseUs></WhyChooseUs>
      <Review></Review>
      <Faq></Faq>
    </main>
  );
}
