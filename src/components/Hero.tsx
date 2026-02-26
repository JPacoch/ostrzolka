"use client";

import ThreeBackground from "./ThreeBackground";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden w-full pt-20">
            {/* Particle Network Background */}
            <ThreeBackground />

            {/* Added text-center to the container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center pb-24 lg:pb-32 text-center">

                {/* Removed the grid to allow vertical stacking for centering */}
                <div className="flex flex-col items-center gap-8 lg:gap-12">

                    {/* Main Title */}
                    <div className="w-full">
                        <h1 className="font-serif text-[4.5rem] md:text-8xl lg:text-[11rem] leading-[0.85] tracking-tighter text-[#1a1a1a]">
                            Ostrzółka
                        </h1>
                    </div>

                    {/* Intro Text & CTA */}
                    <div className="max-w-xl flex flex-col items-center">
                        {/* Centered the decorative line */}
                        <div className="w-12 h-[1px] bg-neutral-300 mb-8" />

                        <p className="text-sm md:text-base text-neutral-500 mb-10 leading-[1.8] font-light">
                            Utrzymujemy ukryte historie Bydgoszczy. Napędzany przez społeczność projekt digitalizacji i archiwizacji historycznej wiedzy o mieście.
                        </p>

                        <Link
                            href="explore"
                            className="group inline-flex items-center gap-4 bg-transparent border border-neutral-300 rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-500 ease-out"
                            onMouseEnter={() => typeof window !== 'undefined' && window.dispatchEvent(new Event("explore-enter"))}
                            onMouseLeave={() => typeof window !== 'undefined' && window.dispatchEvent(new Event("explore-leave"))}
                        >
                            Do Archiwum
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
