"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center felx-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <RecentProjects />
        <TechStack/>
        <Experience />

        <Footer />
      </div>
    </main>
  );
};
