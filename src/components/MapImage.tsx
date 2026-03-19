"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface MapImageProps {
    src: string;
    alt: string;
}

export default function MapImage({ src, alt }: MapImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {/* Loading Skeleton */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-neutral-200 lofi-grain transition-opacity duration-500 z-0 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <div className="absolute inset-0 bg-neutral-300/30 animate-pulse mix-blend-multiply"></div>
                <Loader2 className="w-6 h-6 text-neutral-500 animate-spin mb-4 relative z-10" />
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest relative z-10">Wczytywanie mapy</span>
            </div>

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-700 relative z-10 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                loading="lazy"
            />
        </>
    );
}
