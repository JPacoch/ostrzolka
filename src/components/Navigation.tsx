"use client";

import { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

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
                        className="text-sm uppercase tracking-widest font-medium relative z-[70] hover:opacity-70 transition-opacity"
                    >
                        {isOpen ? "Zamknij" : "Menu"}
                    </button>
                </div>
            </nav>

            <MegaMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}
