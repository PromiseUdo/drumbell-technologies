"use client";
import Banner from "@/components/Banner";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  GradientCircleMd,
  GradientCircleTop,
} from "@/components/GradientCircle";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Methods from "@/components/Methods";
import Pricing from "@/components/Pricing";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterExt from "@/components/FooterExt";
import About from "@/components/About";
export default function Home() {
  const [mode, setMode] = useState(true);
  return (
    <div className={`page  ${!mode && "light"} dark`}>
      <Banner />
      <Navbar mode={mode} setMode={setMode} />
      <main className="main">
        <GradientCircleTop />
        <GradientCircleMd />
        <Intro />
        <About mode={mode} />
        <Services />
        <Methods />
        <Pricing />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FooterExt />
    </div>
  );
}
