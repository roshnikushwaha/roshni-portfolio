"use client";

import AboutImage from "./AboutImage";
// import AboutContent from "./AboutContent";
import StatsCards from "./StatsCards";
// import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#030712] overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h4 className="text-blue-400 uppercase tracking-[6px] mb-4">
            About Me
          </h4>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Know Me Better
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AboutImage />
           </div>

        {/* Stats */}
        <div className="mt-20">
          <StatsCards />
        </div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24" />
        {/* Timeline */}
        <div className="mt-24">
          {/* <JourneyTimeline /> */}
        </div>
        </div>
    </section>
  );
}