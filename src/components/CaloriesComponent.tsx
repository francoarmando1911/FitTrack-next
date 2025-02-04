import React from 'react'
import { Dispatch } from 'react'
import { Activity } from '@/types'
import { categories } from '@/data/categories'
import { ActivityActions, ActivityState } from '@/reducers/activity-reducers'


type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state: ActivityState
}

export default function CaloriesComponent() {
  return (
    <div className='min-h-screen pt-5 bg-gradient-to-b from-rose-500  to-orange-600'>
      <div className='conatainer mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-autp bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6'>
          <div className='text-center space-y-2 py-6'>
            <h1 className='text-4xl font-bold text-black tracking-tight'>Contador de calorías</h1>
          </div>


        </div>
      </div>
    </div>
  )
}
