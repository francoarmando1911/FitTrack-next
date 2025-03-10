"use client";

import React, { FormEvent, useEffect, useState } from 'react'
import { ChangeEvent } from "react";
import { Dispatch } from 'react'
import { v4 as uuidv4} from "uuid"
import { Activity } from '@/types'
import { categories } from '@/data/categories'
import { ActivityActions, ActivityState } from '@/reducers/activity-reducers'




type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

const initialState : Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export default function CaloriesComponent({dispatch, state} : FormProps) {

  const [activity, setActivity] = useState<Activity>(initialState)

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.find(
        (stateActivity) => stateActivity.id === state.activeId
      );

      if (selectedActivity) {
        setActivity(selectedActivity);
      }
    }
  }, [state.activeId, state.activities]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedActivities = localStorage.getItem("activities");
      if (storedActivities) {
        dispatch({
          type: "save-activity",
          payload: { newActivity: JSON.parse(storedActivities) },
        });
      }
    }
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? Number(e.target.value) || 0 : e.target.value
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({type: 'save-activity', payload: {newActivity: activity}})

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-500 to-orange-600 px-4 py-10">
      <div className="container mx-auto max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
          Contador de Calorías
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category" className="block text-lg font-semibold text-gray-700">
              Categoría:
            </label>
            <select
              id="category"
              value={activity.category}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-rose-500 focus:border-rose-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
              Actividad:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ej. Comidas, Ejercicios"
              value={activity.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <div>
            <label htmlFor="calories" className="block text-lg font-semibold text-gray-700">
              Calorías consumidas:
            </label>
            <input
              id="calories"
              type="number"
              placeholder="Ej. 300 - 500"
              value={activity.calories}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isValidActivity()}
          >
            Guardar Actividad
          </button>
        </form>
      </div>
    </div>
  );
}
