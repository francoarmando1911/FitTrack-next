"use client";

import React from "react";

export default function ResumeCaloriesComponent() {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-rose-600 min-h-screen flex flex-col items-center justify-center py-10">
            <h2 className="text-4xl font-black text-white text-center mb-10">
                Resumen de Calorías
            </h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 w-full max-w-4xl">
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
    );
}
