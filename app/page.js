// app/page.js or src/app/page.jsx

import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  if (!personalData?.devUsername) {
    console.warn("Missing devUsername in personalData");
    return [];
  }

  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`,
    { cache: "no-store" } // Optional: Avoid stale fetches
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const data = await res.json();
  return data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);
}

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}
