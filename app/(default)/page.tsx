export const metadata = {
  title: "Russu Iulia - Portfolio",
  description: "FullStack Developer",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Testimonials />
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Cta />
    </>
  );
}
