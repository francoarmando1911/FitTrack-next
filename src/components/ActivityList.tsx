"use client";

import React from 'react'
import { Activity } from '@/types'
import { categories } from '@/data/categories';
import { ActivityActions } from '@/reducers/activity-reducers'
import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { XCircleIcon } from 'lucide-react';

type ActivityListProps = {
    activities: Activity[],
    dispatch: React.Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch }: ActivityListProps) {

    const getCategoryName = (categoryId: number) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : "Desconocido";
    };

    const isEmptyActivities = activities.length === 0;

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-600 to-rose-500 px-4 py-10'>
            <div className='container mx-auto max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8'>
                <h1 className='text-center text-3xl font-extrabold text-gray-900 tracking-tight mb-6'>Comida y Actividades</h1>

                {isEmptyActivities ? (
                    <p className='text-center my-5'>No hay actividades agregadas aún</p>
                ) : (
                    activities.map(activity => (
                        <div key={activity.id} className='px-5 py-10 bg-white mt-5 flex justify-between'>
                            <div className='space-y-2 relative'>
                                <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                                    {getCategoryName(activity.category)}
                                </p>
                                <p className='text-2xl font-bold pt-5'>{activity.name}</p>
                                <p className='font-black text-4xl text-lime-500'>
                                    {activity.calories} {''}
                                    <span>Calorias</span>
                                </p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <button 
                                    onClick={() => dispatch({type: 'save-activeId', payload: {id: activity.id}})}
                                >
                                    <PencilSquareIcon
                                        className='h-8 w-8 text-gray-800'
                                    />
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'delete-activity', payload: {id: activity.id} })}
                                >
                                    <XCircleIcon
                                        className='h-8 w-8 text-red-500'
                                    />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
