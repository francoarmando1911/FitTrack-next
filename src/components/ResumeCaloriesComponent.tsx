"use client";

import React, { useMemo } from "react";
import { Activity } from "@/types";

type CalorieTrackerProps = {
    activities: Activity[];
};

export default function ResumeCaloriesComponent({ activities }: CalorieTrackerProps) {
    // Calcular calorías consumidas y quemadas
    const caloriesConsumed = useMemo(
        () => (activities ?? []).reduce((total, activity) => (activity.category === 1 ? total + activity.calories : total), 0),
        [activities]
    );

    const caloriesBurned = useMemo(
        () => (activities ?? []).reduce((total, activity) => (activity.category === 2 ? total + activity.calories : total), 0),
        [activities]
    );

    return (
        <section className="bg-gray-800 min-h-screen flex items-center justify-center px-4 py-10">
            <div className="container mx-auto max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-black text-rose-600 text-center mb-10 pt-10">
                    Resumen de Calorías
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Tarjeta de Calorías Consumidas */}
                    <div className="bg-white text-center p-6 rounded-lg shadow-lg">
                        <p className="text-xl font-bold text-gray-800">Calorías Consumidas</p>
                        <span className="block text-6xl font-black text-orange-500">
                            {caloriesConsumed.toLocaleString()}
                        </span>
                        <p className="text-gray-600 text-lg">en alimentos</p>
                    </div>

                    {/* Tarjeta de Calorías Quemadas */}
                    <div className="bg-white text-center p-6 rounded-lg shadow-lg">
                        <p className="text-xl font-bold text-gray-800">Calorías Quemadas</p>
                        <span className="block text-6xl font-black text-orange-500">
                            {caloriesBurned.toLocaleString()}
                        </span>
                        <p className="text-gray-600 text-lg">en ejercicio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
