"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (imageLoaded) {
            setTimeout(() => onFinish(), 2000); 
        }
    }, [imageLoaded, onFinish]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-red-500 transition-opacity duration-500">
            <Image
                src="/FitTrack.png"
                alt="FitTrack Logo"
                width={150}
                height={150}
                onLoad={() => setImageLoaded(true)}
                className="animate-fadeIn"
            />
        </div>
    );
}
