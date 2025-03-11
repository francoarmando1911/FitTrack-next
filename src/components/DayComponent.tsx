"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface Exercise {
  name: string;
  reps: string;
  weight: string;
  series: string;
}

interface DailyRoutineProps {
  day: string;
}

const DayComponent: React.FC<DailyRoutineProps> = ({ day }) => {
  const [exercises, setExercises] = useState<Exercise[]>(() => {
    const storedExercises = localStorage.getItem(day);
    return storedExercises ? JSON.parse(storedExercises) : [];
  });

  const [exerciseName, setExerciseName] = useState<string>("");
  const [exerciseReps, setExerciseReps] = useState<string>("");
  const [exerciseWeight, setExerciseWeight] = useState<string>("");
  const [exerciseSeries, setExerciseSeries] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window !== "undefined") {
      const storedExercises = localStorage.getItem(day);
      if (storedExercises) {
        setExercises(JSON.parse(storedExercises));
      }
    }
  }, [day]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(day, JSON.stringify(exercises));
    }
  }, [exercises, day]);

  const addOrUpdateExercise = () => {
    if (exerciseName && exerciseReps && exerciseWeight && exerciseSeries) {
      const newExercise: Exercise = {
        name: exerciseName,
        reps: exerciseReps,
        weight: exerciseWeight,
        series: exerciseSeries,
      };

      if (editIndex !== null) {
        setExercises((prev) =>
          prev.map((exercise, index) =>
            index === editIndex ? newExercise : exercise
          )
        );
        setEditIndex(null);
      } else {
        setExercises((prev) => [...prev, newExercise]);
      }

      setExerciseName("");
      setExerciseReps("");
      setExerciseWeight("");
      setExerciseSeries("");
    }
  };

  const removeExercise = (index: number) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  const editExercise = (index: number) => {
    const exerciseToEdit = exercises[index];
    setExerciseName(exerciseToEdit.name);
    setExerciseReps(exerciseToEdit.reps);
    setExerciseWeight(exerciseToEdit.weight);
    setExerciseSeries(exerciseToEdit.series);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen pt-5 bg-gradient-to-b from-rose-500 to-orange-600">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <div className="text-center space-y-2 py-6">
            <h2 className="text-4xl font-bold text-black tracking-tight">{`${day}`}</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <Drawer>
              <DrawerTrigger className="bg-white rounded-xl p-4 sm:p-6 md:p-10 text-center shadow-md">
                Registrar Ejercicio
              </DrawerTrigger>
              <DrawerContent className="p-6">
                <DrawerHeader>
                  <DrawerTitle>Registrar ejercicio</DrawerTitle>
                  <DrawerDescription>Registre cada ejercicio de su rutina</DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    placeholder="Nombre del ejercicio"
                    className="border rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Repeticiones"
                    value={exerciseReps}
                    onChange={(e) => setExerciseReps(e.target.value)}
                    className="border rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Peso"
                    value={exerciseWeight}
                    onChange={(e) => setExerciseWeight(e.target.value)}
                    className="border rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Series"
                    value={exerciseSeries}
                    onChange={(e) => setExerciseSeries(e.target.value)}
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <DrawerFooter className="mt-4 flex gap-2">
                  <Button type="submit" className="w-full" onClick={addOrUpdateExercise}>
                    Registrar
                  </Button>
                  <DrawerClose className="w-full">
                    <Button variant="outline" className="w-full">Cancelar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

  
          <ul className="mt-6 space-y-3">
            {exercises.map((exercise, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
              >
                <div>
                  <p className="font-semibold">{exercise.name}</p>
                  <p className="text-sm text-gray-600">
                    {exercise.reps} reps - {exercise.weight} kg - {exercise.series} series
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => editExercise(index)}
                    className="bg-yellow-400 px-3 py-1 rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => removeExercise(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DayComponent;



