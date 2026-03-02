"use client";

import { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

const SlotText = ({ text }: { text: string }) => {
    return (
        <span className="flex">
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className="relative overflow-hidden inline-flex"
                >
                    <span
                        className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                        style={{ transitionDelay: `${index * 30}ms` }}
                    >
                        {/* Front face letter */}
                        <span>{char === " " ? "\u00A0" : char}</span>
                        {/* Hover reveal letter (the "next" slot) */}
                        <span className="absolute top-full left-0">{char === " " ? "\u00A0" : char}</span>
                    </span>
                </span>
            ))}
        </span>
    );
};

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={`fixed top-6 left-0 right-0 z-[70] px-6 pointer-events-none transition-colors duration-500 ${isOpen ? 'text-white' : 'text-[#1a1a1a] delay-[500ms]'}`}>
                <div className={`max-w-6xl mx-auto pointer-events-auto backdrop-blur-xl border shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-full px-8 py-4 flex justify-between items-center transition-all duration-300 ${isOpen ? 'bg-transparent border-transparent backdrop-blur-none shadow-none' : 'bg-white/60 border-neutral-200 delay-[500ms]'}`}>
                    <Link
                        href="/"
                        className="font-serif text-2xl tracking-tighter relative z-[70]"
                        onClick={() => setIsOpen(false)}
                    >
                        Ostrzółka
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-sm uppercase tracking-widest font-medium relative z-[70] hover:opacity-70 transition-opacity flex items-center group"
                    >
                        <SlotText text={isOpen ? "Zamknij" : "Menu"} />
                    </button>
                </div>
            </nav>

            <MegaMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}
