"use client";

import React from "react";

export default function ResumeCaloriesComponent() {
    return (
        <section className="bg-gray-800 min-h-screen flex items-center justify-center px-4 py-10">
            <div className="container mx-auto max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-black text-rose-600 text-center mb-10 pt-10">
                    Resumen de Calorías
                </h2>

                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-5 w-full">
                    <div className="bg-white text-center p-6 rounded-lg shadow-lg w-full md:w-auto">
                        <p className="text-xl font-bold text-gray-800 mb-3">
                            <span className="font-black text-6xl text-orange-500">250 </span>
                            Consumidas en alimentos
                        </p>

                        <p className="text-xl font-bold text-gray-800 mb-3">
                            <span className="font-black text-6xl text-orange-500">250 </span>
                            Quemadas en ejercicio
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

}
