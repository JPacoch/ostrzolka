export interface BibliographyEntry {
    source: string;
    comment?: string;
}

export interface DocumentRecord {
    id: string;
    address: string;
    name?: string;
    year: string;
    architect?: string;
    style?: string;
    usage?: string;
    description: string;
    tags: string[];
    bibliography: BibliographyEntry[];
}

export const MOCK_DOCUMENTS: DocumentRecord[] = [
    {
        id: "doc-01",
        address: "ul. Gdańska 24",
        name: "Kamienica Pod Lwem",
        year: "1905",
        architect: "Józef Święcicki",
        style: "Secesja",
        usage: "Mieszkalno-usługowy",
        description: "Zabytkowa kamienica w sercu miasta. Detailed blueprints charting the early 20th-century expansion of the city limits, featuring original street names and property bounds. Zbudowana dla lokalnego kupca, posiada bogato zdobioną fasadę z charakterystycznym motywem lwa nad głównym portalem.",
        tags: ["Kamienica", "Zabytkowe"],
        bibliography: [
            { source: "Archiwum Państwowe, Akta Nadzoru Budowlanego, sygn. 124", comment: "Projekt zatwierdzony w maju 1904 r." },
            { source: "Gazeta Ostrzółkowska, 1905, nr 45", comment: "Wzmianka o ukończeniu budowy." }
        ]
    },
    {
        id: "doc-02",
        address: "Zarządzenie Wojewody",
        year: "1928",
        usage: "Dokument",
        description: "Official provincial decree detailing the administrative incorporation of the surrounding agricultural lands into the urban grid.",
        tags: ["Legal", "Decree"],
        bibliography: [
            { source: "Dziennik Urzędowy Województwa, 1928, nr 12" }
        ]
    },
    {
        id: "doc-03",
        address: "Plac Ratuszowy 1",
        name: "Ratusz Główny",
        year: "1895",
        architect: "Fritz W. Meyer",
        style: "Neogotyk",
        usage: "Użyteczności publicznej",
        description: "Original scaled architectural drawings for the main city hall including cross-sections of the clock tower and assembly chambers. Zbudowany z czerwonej cegły, obecnie siedziba zarządu miasta.",
        tags: ["Architecture", "Archived"],
        bibliography: [
            { source: "Teka architektoniczna Myera, Zbiory Specjalne Biblioteki" },
            { source: "Kronika Ostrzółki, tom II, s. 45-48", comment: "Szczegółowy opis ceremonii otwarcia." }
        ]
    },
    {
        id: "doc-04",
        address: "ul. Długa 12",
        year: "1912",
        usage: "Handlowy",
        description: "Ledger containing the tax records of local merchants, artisans, and trade guilds operating within the market square.",
        tags: ["Ledger", "Economic"],
        bibliography: [
            { source: "Archiwum Skarbowe, księga 12" }
        ]
    },
    {
        id: "doc-05",
        address: "ul. Trójcy Świętej 5",
        name: "Kościół Św. Trójcy",
        year: "1880-1910",
        style: "Neobarok",
        usage: "Sakralny",
        description: "Parish chronicle detailing births, marriages, and significant local events recorded by the residing clergy. Świątynia ufundowana przez lokalną arystokrację, znana ze wspaniałych polichromii ściennych.",
        tags: ["Parish Records", "Archived"],
        bibliography: [
            { source: "Księgi Parafialne Św. Trójcy, t. I-III" },
            { source: "Przewodnik, 1922", comment: "Wpis na temat zabytkowego ołtarza." }
        ]
    }
];
