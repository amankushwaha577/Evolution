import BannerSection from "@/components/homepage/HomeBanner";
import Image from "next/image";

export const metadata = {
  title: "EvolutionNova",
};

export default function Home() {
  return (
    <div>
      <BannerSection />
    </div>
  );
}
