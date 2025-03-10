"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);
    const [isVisible, setIsVisible] = useState(true); // Para manejar el fade-out

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); // Empieza el fade-out
            setTimeout(() => setShowSplash(false), 500); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!showSplash) return <>{children}</>; 

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-red-600 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <SplashScreen onFinish={() => setShowSplash(false)} />
        </div>
    );
}
