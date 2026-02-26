export default function Crowdfunding() {
    return (
        <section id="crowdfunding" className="py-32 md:py-48 px-6 bg-white border-t border-neutral-100">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-24">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-8 inline-block">
                        Community Support
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#1a1a1a] mb-8">
                        Fund the <span className="italic font-light">Archive</span>
                    </h2>
                    <p className="text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
                        High-resolution digitization is expensive and time-consuming. We rely on the local community to fund the scanners, hosting, and historians required to make this public.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-24">
                    <div className="flex justify-between text-xs tracking-widest uppercase mb-4 text-[#1a1a1a] font-medium">
                        <span>Progress</span>
                        <span>68% Funded</span>
                    </div>
                    <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1a1a1a] w-[68%] transition-all duration-1000 ease-out"></div>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-400 mt-4">
                        <span>Goal: 40,000 PLN</span>
                        <span>Raised: 27,200 PLN</span>
                    </div>
                </div>

                {/* Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {/* Tier 1 */}
                    <div className="border border-neutral-200 p-8 rounded-2xl hover:border-neutral-400 transition-colors flex flex-col justify-between">
                        <div>
                            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2 tracking-tight">Supporter</h3>
                            <p className="text-[#1a1a1a] font-medium tracking-widest text-xs uppercase mb-6">50 PLN</p>
                            <p className="text-sm text-neutral-500 leading-relaxed font-light mb-8">
                                Gain early access to the digitized database before public launch, plus a digital high-res map of your choice.
                            </p>
                        </div>
                        <button className="w-full border border-neutral-300 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-neutral-50 transition-colors">
                            Pledge 50 PLN
                        </button>
                    </div>

                    {/* Tier 2 */}
                    <div className="bg-[#1a1a1a] text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-serif text-2xl tracking-tight">Patron</h3>
                                <span className="text-[10px] tracking-widest uppercase bg-white/10 px-2 py-1 rounded border border-white/20">Popular</span>
                            </div>
                            <p className="text-white font-medium tracking-widest text-xs uppercase mb-6">250 PLN</p>
                            <p className="text-sm text-neutral-300 leading-relaxed font-light mb-8">
                                Your name immortalized in the archive's digital cornerstone, early access, and a physical printed copy of a historic map.
                            </p>
                        </div>
                        <button className="w-full bg-white text-[#1a1a1a] py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors">
                            Pledge 250 PLN
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
