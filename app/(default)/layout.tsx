"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>
      <meta name="description" content="Fullstack developer, projects, and work experience." />
      <meta property="og:title" content="My Portfolio - Russu Iulia" />
      <meta property="og:description" content="Fullstack developer, projects, and work experience." />
      <meta property="og:image" content="https://russuiulia.vercel.app/ogimage.png" />
      <meta property="og:url" content="https://russuiulia.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="My Portfolio - Russu Iulia" />
      <meta name="twitter:description" content="Fullstack developer, projects, and work experience." />
      <meta name="twitter:image" content="https://russuiulia.vercel.app/ogimage.png" />
      <Footer />
    </>
  );
}
