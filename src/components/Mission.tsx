export default function Mission() {
    return (
        <section id="about" className="py-32 md:py-48 px-6 bg-white border-t border-neutral-100">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8 font-medium">
                    Ostrzółka
                </span>

                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight text-[#1a1a1a] max-w-4xl mx-auto mb-16">
                    "Kocham <span className="italic font-light">Ostrzółkę</span>. I taki mam cel właśnie"
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto mt-8 border-t border-neutral-200 pt-16">
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-[#1a1a1a]">01. Gromadzenie danych</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Zbieramy dane zewsząd, taka jest Ostrzółka.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-[#1a1a1a]">02. Digitlaizacja</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Mikołaj wprowadza dane z palca, do dużo pracy.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xs uppercase tracking-widest font-semibold mb-4 text-[#1a1a1a]">03. Archiwizacja</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed font-light">
                            Bardzo lubię postgres, jest lepszy niż mysql.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
