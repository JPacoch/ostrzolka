import { MOCK_DOCUMENTS } from "@/lib/mock-data";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default async function DocumentDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const doc = MOCK_DOCUMENTS.find(d => d.id === id);
    const currentIndex = MOCK_DOCUMENTS.findIndex(d => d.id === id);

    if (!doc) {
        notFound();
    }

    const prevDoc = currentIndex > 0 ? MOCK_DOCUMENTS[currentIndex - 1] : null;
    const nextDoc = currentIndex < MOCK_DOCUMENTS.length - 1 ? MOCK_DOCUMENTS[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-[#f3f4f6] pt-32 pb-24 px-6 relative">
            <div className="absolute inset-0 lofi-grain z-0 pointer-events-none opacity-50"></div>

            <div className="max-w-5xl mx-auto relative z-10 w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-neutral-100 flex flex-col mt-8">

                {/* Back Button */}
                <Link href="/explore" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#1a1a1a] transition-colors self-start mb-8 font-medium">
                    <ChevronLeft className="w-4 h-4" />
                    Wróć do wyników
                </Link>

                {/* Top Section: Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

                    {/* Left: Metadata */}
                    <div className="flex flex-col">
                        <h1 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#1a1a1a] mb-2 leading-tight">
                            {doc.address}
                        </h1>
                        {doc.name && (
                            <h2 className="text-xl text-neutral-500 font-serif italic mb-8">
                                &quot;{doc.name}&quot;
                            </h2>
                        )}
                        {!doc.name && <div className="mb-8"></div>}

                        <div className="flex flex-col gap-4">
                            {doc.year && (
                                <div className="flex justify-between items-baseline border-b border-neutral-100 pb-3">
                                    <span className="text-sm text-neutral-400 font-medium uppercase tracking-widest">Rok Budowy</span>
                                    <span className="text-sm font-semibold text-[#1a1a1a]">{doc.year}</span>
                                </div>
                            )}
                            {doc.architect && (
                                <div className="flex justify-between items-baseline border-b border-neutral-100 pb-3">
                                    <span className="text-sm text-neutral-400 font-medium uppercase tracking-widest">Architekt</span>
                                    <span className="text-sm font-semibold text-[#1a1a1a]">{doc.architect}</span>
                                </div>
                            )}
                            {doc.style && (
                                <div className="flex justify-between items-baseline border-b border-neutral-100 pb-3">
                                    <span className="text-sm text-neutral-400 font-medium uppercase tracking-widest">Styl Architektoniczny</span>
                                    <span className="text-sm font-semibold text-[#1a1a1a]">{doc.style}</span>
                                </div>
                            )}
                            {doc.usage && (
                                <div className="flex justify-between items-baseline border-b border-neutral-100 pb-3">
                                    <span className="text-sm text-neutral-400 font-medium uppercase tracking-widest">Przeznaczenie</span>
                                    <span className="text-sm font-semibold text-[#1a1a1a]">{doc.usage}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Map Placeholder */}
                    <div className="w-full aspect-[4/3] lg:aspect-square bg-neutral-200 rounded-[1.5rem] relative overflow-hidden flex items-center justify-center lofi-grain grayscale opacity-80">
                        {/* Placeholder for map - could be a static image or actual leaflet/mapbox in future */}
                        <div className="absolute inset-0 bg-neutral-300/50 mix-blend-multiply"></div>
                        <span className="relative z-10 text-neutral-500 font-serif italic text-lg opacity-60 flex flex-col items-center">
                            <span className="w-2 h-2 rounded-full bg-neutral-400 mb-2"></span>
                            Mapa w przygotowaniu
                        </span>
                    </div>
                </div>

                {/* Middle Section: Description */}
                <div className="border-t border-neutral-200 pt-12 mb-12">
                    <h3 className="text-sm text-neutral-400 font-medium uppercase tracking-widest mb-6">Opis Obiektu</h3>
                    <p className="text-neutral-600 leading-relaxed font-light text-lg max-w-3xl whitespace-pre-line">
                        {doc.description}
                    </p>
                </div>

                {/* Bottom Section: Bibliography */}
                <div className="border-t border-neutral-200 pt-12 mb-16">
                    <h3 className="text-sm text-neutral-400 font-medium uppercase tracking-widest mb-6">Wpisy Bibliograficzne</h3>

                    <div className="flex flex-col gap-4">
                        {doc.bibliography.length > 0 ? (
                            doc.bibliography.map((bib, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline gap-2 pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                                    <span className="text-sm font-medium text-[#1a1a1a] flex-1">{bib.source}</span>
                                    {bib.comment && (
                                        <span className="text-xs text-neutral-500 sm:text-right font-light italic max-w-xs">{bib.comment}</span>
                                    )}
                                </div>
                            ))
                        ) : (
                            <span className="text-sm text-neutral-400 italic">Brak wpisów bibliograficznych.</span>
                        )}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-200 pt-8 mt-auto">
                    {prevDoc ? (
                        <Link
                            href={`/explore/${prevDoc.id}`}
                            className="w-full sm:w-auto px-6 py-3 border border-neutral-300 rounded-full text-sm font-medium text-neutral-500 hover:text-[#1a1a1a] hover:border-[#1a1a1a] transition-all text-center flex items-center justify-center gap-2"
                        >
                            &larr; Poprzedni punkt
                        </Link>
                    ) : (
                        <div className="hidden sm:block"></div>
                    )}

                    {nextDoc ? (
                        <Link
                            href={`/explore/${nextDoc.id}`}
                            className="w-full sm:w-auto px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors text-center flex items-center justify-center gap-2"
                        >
                            Następny punkt &rarr;
                        </Link>
                    ) : (
                        <div className="w-full sm:w-auto px-6 py-3 bg-neutral-200 text-neutral-400 rounded-full text-sm font-medium cursor-not-allowed text-center mx-auto sm:ml-auto">
                            Ostatni punkt
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
