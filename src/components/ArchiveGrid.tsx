export default function ArchiveGrid() {
    return (
        <section id="archive" className="py-32 px-4 md:px-8 bg-[#f3f4f6]">
            <div className="max-w-6xl mx-auto filter grayscale">

                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#1a1a1a] mb-4">
                            Baza <span className="italic font-light text-neutral-500">Ostrzółka</span>
                        </h2>
                        <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
                            Opis tej bazy jest doprawdy fascynujący! Opis tej bazy jest doprawdy fascynujący! Opis tej bazy jest doprawdy fascynujący!                        </p>
                    </div>
                    <button className="text-xs uppercase tracking-[0.2em] font-medium border-b border-[#1a1a1a] pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors cursor-pointer w-fit">
                        Przejdź do Archiwum
                    </button>
                </div>

                {/* Soft Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">

                    {/* Main Map Card */}
                    <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-neutral-100 pb-8 hover:-translate-y-1">
                        <div className="z-10 relative pointer-events-none">
                            <span className="inline-block px-3 py-1 bg-[#151515] text-[#f3efe6] rounded-full text-[10px] tracking-widest font-bold mb-4 uppercase">
                                Kolekcja 1
                            </span>
                            <h3 className="font-serif text-3xl text-[#151515] font-medium tracking-tight mb-2">Ulubione Budynki Mikołaja</h3>
                            <p className="text-sm text-[#151515]/70 max-w-[200px]">Bardzo lubię te budynki - Mikołaj.</p>
                        </div>
                        {/* Lo-fi print background simulation */}
                        <div className="absolute inset-0 bg-[#f3efe6] mix-blend-multiply opacity-50 z-0 pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 top-[20%] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 brightness-90 sepia-[0.3] opacity-60 mix-blend-darken group-hover:scale-105 transition-transform duration-700 ease-out z-0"></div>
                        <div className="absolute inset-0 lofi-grain z-0"></div>
                    </div>

                    {/* Portrait Card */}
                    <div className="md:row-span-2 bg-white rounded-[2rem] p-6 shadow-sm relative overflow-hidden text-[#151515] group border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-end">
                        <div className="z-10 relative">
                            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[#f3efe6] rounded-full text-[10px] tracking-widest font-bold mb-4 uppercase border border-white/20">
                                Kolekcja 2
                            </span>
                            <h3 className="text-xl font-serif font-medium leading-tight">Miejsca <br /> Rurzne</h3>
                            <p className="text-xs text-neutral-500 mt-2">Bottom text xD</p>
                        </div>
                        <div className="absolute inset-0 bg-[#f3efe6] mix-blend-multiply opacity-50 z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444858345149-8ff40887589b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-200 brightness-75 opacity-70 mix-blend-darken group-hover:scale-105 transition-transform duration-700 z-0"></div>
                        <div className="absolute inset-0 lofi-grain z-0"></div>
                    </div>

                    {/* Small Stat Card */}
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-all hover:-translate-y-1 border border-neutral-100">
                        <span className="text-5xl font-serif text-[#1a1a1a] mb-2 font-medium tracking-tighter">2,137</span>
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold text-center">Miejsc i budynki</span>
                    </div>

                    {/* Letter Card */}
                    <div className="md:col-span-2 bg-white rounded-[2rem] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between relative overflow-hidden hover:shadow-md transition-all group hover:-translate-y-1">
                        <div className="z-10 relative">
                            <span className="inline-block px-3 py-1 bg-black backdrop-blur-md text-[#f3efe6] rounded-full text-[10px] tracking-widest font-bold mb-4 uppercase border border-white/20">
                                Order 66
                            </span>
                            <h3 className="font-serif text-2xl text-[#1a1a1a] tracking-tight mb-2">Najfajniejsze kamienice</h3>
                            <p className="text-xs text-neutral-400">Ktoś tu kiedyś coś napisze</p>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-left grayscale contrast-150 brightness-110 opacity-30 mix-blend-multiply group-hover:opacity-50 transition-all duration-500 z-0"></div>
                        <div className="absolute inset-0 lofi-grain z-0"></div>
                    </div>

                    {/* Audio Records */}
                    <div className="bg-[#151515] rounded-[2rem] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden group">
                        <div className="z-10 relative">
                            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[#f3efe6] rounded-full text-[10px] tracking-widest font-bold mb-4 uppercase border border-white/20">
                                Kolekcja 67
                            </span>
                            <p className="font-serif text-xl tracking-tight text-white mb-1">Szkoły</p>
                            <p className="text-xs text-neutral-400">Licea i podstawówki</p>
                        </div>
                        <div className="absolute inset-0 lofi-grain opacity-30 z-0"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
