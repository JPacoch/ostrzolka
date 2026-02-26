import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <div className="max-w-6xl mx-auto pointer-events-auto backdrop-blur-xl bg-white/60 border border-neutral-200 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-full px-8 py-4 flex justify-between items-center transition-all duration-300">
                <Link href="/" className="font-serif text-2xl tracking-tighter text-[#1a1a1a]">
                    Ostrzółka
                </Link>
                <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase font-medium text-neutral-600">
                    <Link href="#mission" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full">Nasz Cel</Link>
                    <Link href="#archive" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full">Baza</Link>
                    <Link href="#about" className="hover:text-black transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] auto after:bg-black after:transition-all hover:after:w-full">O nas</Link>
                </div>
                <button className="md:hidden text-sm uppercase tracking-widest text-[#1a1a1a]">Menu</button>
            </div>
        </nav>
    );
}
