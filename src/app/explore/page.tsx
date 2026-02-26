"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock Data
const MOCK_DOCUMENTS = [
    {
        id: "doc-01",
        title: "Miejski Plan Zagospodarowania z 1923 r.",
        description: "Detailed blueprints charting the early 20th-century expansion of the city limits, featuring original street names and property bounds.",
        tags: ["Cadastral Maps", "Archived"],
        date: "1923",
    },
    {
        id: "doc-02",
        title: "Zarządzenie Wojewody o Wcieleniu Ziem",
        description: "Official provincial decree detailing the administrative incorporation of the surrounding agricultural lands into the urban grid.",
        tags: ["Legal", "Decree"],
        date: "1928",
    },
    {
        id: "doc-03",
        title: "Korespondencja Burmistrza ws. Budowy Wodociągów",
        description: "A collection of 15 handwritten letters from the mayor negotiating the construction of the central municipal waterworks system.",
        tags: ["Internal", "Letters"],
        date: "1931",
    },
    {
        id: "doc-04",
        title: "Projekt Architektoniczny Ratusza Głównego",
        description: "Original scaled architectural drawings for the main city hall including cross-sections of the clock tower and assembly chambers.",
        tags: ["Architecture", "Archived"],
        date: "1895",
    },
    {
        id: "doc-05",
        title: "Rejestr Podatkowy Kupców i Rzemieślników",
        description: "Ledger containing the tax records of local merchants, artisans, and trade guilds operating within the market square.",
        tags: ["Ledger", "Economic"],
        date: "1912",
    },
    {
        id: "doc-06",
        title: "Kronika Parafialna Kościoła Św. Trójcy",
        description: "Parish chronicle detailing births, marriages, and significant local events recorded by the residing clergy.",
        tags: ["Parish Records", "Archived"],
        date: "1880-1910",
    },
    {
        id: "doc-07",
        title: "Głos Ostrzółki - Wydanie Specjalne",
        description: "Typeset newspaper broadside announcing the arrival of the first electric tram line connecting the eastern districts.",
        tags: ["Press", "Public"],
        date: "1905",
    },
    {
        id: "doc-08",
        title: "Raport Sanitarnego Inspektora Miejskiego",
        description: "A comprehensive health and sanitation report surveying the living conditions in the riverside tenement blocks.",
        tags: ["Internal", "Health"],
        date: "1921",
    },
    {
        id: "doc-09",
        title: "Zezwolenia Budowlane dla Cechu Rzeźników",
        description: "Permit applications and signed authorizations for the reconstruction of the slaughterhouse district after the great fire.",
        tags: ["Legal", "Permits"],
        date: "1878",
    },
    {
        id: "doc-10",
        title: "Testament Hrabiego Włodzimierza",
        description: "Probated will and testament endowing the city with the western forests to be preserved as a public park.",
        tags: ["Legal", "Testament"],
        date: "1901",
    },
];

export default function DocumentExplorer() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState("Wszystkie dokumenty");
    const [perPage, setPerPage] = useState(10);
    const [perPageOpen, setPerPageOpen] = useState(false);

    const collections = ["Wszystkie dokumenty", "Ale", "Fajne", "Kolekcje", "To", "Są"];
    const perPageOptions = [10, 25, 50];

    return (
        <div className="min-h-screen bg-[#f3f4f6] pt-32 pb-24 px-6 relative">
            {/* Background Texture matching main page lo-fi bento */}
            <div className="absolute inset-0 lofi-grain z-0 pointer-events-none opacity-50"></div>

            <div className="max-w-4xl mx-auto relative z-10 w-full">

                {/* Header Area */}
                <div className="mb-12">
                    <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-[#1a1a1a] mb-4">
                        Wyszukiwarka <span className="italic font-light text-neutral-500">Ostrzółka</span>
                    </h1>
                    <p className="text-sm text-neutral-500 max-w-lg leading-relaxed font-light">
                        Przeszukaj naszą bazę coś tam ten.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">

                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Wpisz adres lub frazę"
                            className="w-full bg-white border border-neutral-200 rounded-full pl-12 pr-6 py-4 text-sm outline-none focus:border-[#1a1a1a] transition-colors shadow-sm text-[#1a1a1a]"
                        />
                    </div>

                    <div className="relative shrink-0">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full md:w-auto flex items-center justify-between gap-3 bg-white border border-neutral-200 rounded-full px-6 py-4 text-sm hover:border-[#1a1a1a] transition-colors shadow-sm text-[#1a1a1a]"
                        >
                            <span className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-neutral-400" />
                                {selectedCollection}
                            </span>
                            <ChevronDown className={cn("w-4 h-4 text-neutral-400 transition-transform", dropdownOpen && "rotate-180")} />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full left-0 right-0 md:right-auto md:w-56 mt-2 bg-white border border-neutral-200 rounded-2xl shadow-lg overflow-hidden z-20">
                                {collections.map(col => (
                                    <button
                                        key={col}
                                        onClick={() => {
                                            setSelectedCollection(col);
                                            setDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-6 py-3 text-sm text-[#1a1a1a] hover:bg-neutral-50 transition-colors first:pt-4 last:pb-4"
                                    >
                                        {col}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Document List */}
                <div className="flex flex-col gap-6 mb-16">
                    {MOCK_DOCUMENTS.map((doc) => (
                        <div
                            key={doc.id}
                            className="bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                        >
                            {/* Internal lo-fi texture for cards */}
                            <div className="absolute inset-0 lofi-grain opacity-20 pointer-events-none z-0"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 mb-4">
                                    <h2 className="font-serif text-2xl text-[#1a1a1a] tracking-tight group-hover:text-neutral-600 transition-colors">
                                        {doc.title}
                                    </h2>
                                    <span className="shrink-0 text-xs font-medium text-neutral-400 border border-neutral-200 rounded-full px-3 py-1">
                                        {doc.date}
                                    </span>
                                </div>

                                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-8 max-w-2xl">
                                    {doc.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {doc.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="inline-block px-3 py-1 bg-[#1a1a1a] text-[#f3efe6] rounded-full text-[10px] tracking-widest font-bold uppercase"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-neutral-200 pt-8 mt-8">

                    <div className="relative">
                        <button
                            onClick={() => setPerPageOpen(!perPageOpen)}
                            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-[#1a1a1a] transition-colors"
                        >
                            <span>{perPage} na stronę</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {perPageOpen && (
                            <div className="absolute bottom-full left-0 mb-2 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden min-w-[120px] z-20">
                                {perPageOptions.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => {
                                            setPerPage(opt);
                                            setPerPageOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-3 text-sm text-[#1a1a1a] hover:bg-neutral-50 transition-colors"
                                    >
                                        {opt} na stronę
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 text-neutral-400 hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-colors disabled:opacity-50 disabled:pointer-events-none">
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-8 h-8 flex items-center justify-center bg-[#1a1a1a] text-white rounded-full font-medium">1</span>
                            <span className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#1a1a1a] transition-colors cursor-pointer">2</span>
                            <span className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-[#1a1a1a] transition-colors cursor-pointer">3</span>
                        </div>

                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}
