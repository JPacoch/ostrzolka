import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-100 pt-20 px-6 sm:px-12     overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-24">

                {/* Left Side: Tagline */}
                <div className="max-w-md">
                    <p className="font-sans text-3xl md:text-1xl text-[#1a1a1a] leading-tight font-medium mb-50">
                        Wirtualne archiwum bydgoskiej historii.
                    </p>
                    <p className="font-sans text-1xl md:text-xs text-neutral-400 leading-tight font-medium mb-2">
                        Napisz do nas
                    </p>
                    <p className="font-sans text-1xl md:text-1xl text-neutral-400 leading-tight font-medium mb-2">
                        ostrzolkabydgoszcz@gmail.com
                    </p>
                </div>

                {/* Right Side: Navigation & Socials */}
                <div className="flex flex-col sm:flex-row gap-12 sm:gap-44">
                    <div className="flex flex-col space-y-4 text-sm text-[#1a1a1a] font-medium tracking-wide">
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5 font-bold">Social Media</span>
                        <a href="#" className="group flex items-center w-fit hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">
                            Instagram
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                        <a href="#" className="group flex items-center w-fit hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">
                            Facebook
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                        <span className="text-neutral-500 font-normal mt-auto pt-4">Bydgoszcz—Polska</span>
                    </div>

                    <div className="flex flex-col space-y-4 text-sm text-[#1a1a1a] font-medium tracking-wide">
                        <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5 font-bold">Menu</span>
                        <Link href="/about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full w-fit">Nasz cel</Link>
                        <Link href="/about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full w-fit">Archiwum</Link>
                        <Link href="/about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full w-fit">O nas</Link>
                        <Link href="/about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full w-fit mb-30">Kontakt</Link>
                        <span className="text-neutral-500 font-normal mt-auto pt-4">&copy; {new Date().getFullYear()} Ostrzółka</span>
                    </div>
                </div>

            </div>

            {/* Bottom Section: Massive Brand Name */}
            {/* Bottom Section: Massive Brand Name */}
            <div className="w-full flex justify-center items-end mt-auto border-t border-neutral-100 overflow-hidden">
                <h2 className="font-serif text-[clamp(4rem,18.5vw,25rem)] leading-[0.99] tracking-tight text-[#1a1a1a] whitespace-nowrap select-none translate-y-[14%]">
                    Ostrzółka
                </h2>
            </div>
        </footer>
    );
}
