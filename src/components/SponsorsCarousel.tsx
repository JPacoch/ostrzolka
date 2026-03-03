"use client";

import Image from "next/image";

export default function SponsorsCarousel() {
    const baseLogos = [
        "/logo_BRM.svg",
        "/logo_SIMPLE.svg",
        "/logo_NIECIEKAWE.svg",
    ];

    const logos = Array(4).fill(baseLogos).flat();

    return (
        <section className="w-full bg-[#f8f9fa] border-t border-neutral-200 py-16 md:py-24 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                <h3 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] tracking-tight">
                    Wspierają nas
                </h3>
            </div>

            {/* Marquee Wrapper */}
            <div className="relative w-full flex overflow-hidden group">
                {/* Left/Right Fade masks for smooth entrance/exit */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>

                {/* The infinite sliding track - contains TWO identical sets of logos to loop seamlessly */}
                <div className="flex w-max animate-slide group-hover:[animation-play-state:paused] will-change-transform">
                    {/* First Set */}
                    <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12">
                        {logos.map((src, index) => (
                            <div key={`set1-${index}`} className="relative h-52 md:h-56 w-52 md:w-58 flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={src}
                                    fill
                                    alt={`Sponsor Logo ${index + 1}`}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Set (identical duplicate for seamless infinite loop) */}
                    <div className="flex gap-16 md:gap-24 items-center px-8 md:px-12">
                        {logos.map((src, index) => (
                            <div key={`set2-${index}`} className="relative h-52 md:h-56 w-52 md:w-58 flex-shrink-0 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={src}
                                    fill
                                    alt={`Sponsor Logo ${index + 1}`}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
