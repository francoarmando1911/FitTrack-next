import React from 'react'

export default function DayComponent() {








  
  return (
    <>

      <div className='min-h-screen pt-5 bg-gradient-to-b from-rose-500 to-orange-600'>
        <div className='container mx-auto px-4 py-8'>

          <div className='max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg'>
            <div className='container mx-auto mt-5 px-4'>
              <div className="text-center space-y-2 py-6">
                <h2 className='text-4xl font-bold tracking-tight flex items-center justify-center gap-2'>Dia</h2>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <div className='flex flex-col md:flex-row md:spacee-x-2 w-full'>
                    <input
                    type="text"
                    placeholder='Nombre del ejercicio'
                    //value={ejercicioNombre}
                    //onChange={(e) => setExerciceName(e.target.value)}
                    className='border p-2 mb-2 md:mb-0 md:flex-1'
                    />


                  </div>
                </div>

              </div>


            </div>
          </div>

        </div>
      </div>
    </>

  )
}
