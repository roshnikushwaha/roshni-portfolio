"use client";

import Background from "./Background";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Background />

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <HeroText />


        </div>

      </div>

    </section>
  );
}