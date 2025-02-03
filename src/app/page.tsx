import FooterComponent from "@/components/FooterComponent"
import Link from "next/link"

export default function FitTracker() {

  const weekDays = [
    { day: "Lunes", color: "default", link: "/paginaDia/[day]" },
    { day: "Martes", color: "default", link: "/paginaDia/Martes" },
    { day: "Miércoles", color: "default", link: "/paginaDia/Miercoles" },
    { day: "Jueves", color: "default", link: "/paginaDia/Jueves" },
    { day: "Viernes", color: "default", link: "/paginaDia/Viernes" },
    { day: "Sábado", color: "default", link: "/paginaDia/Sabado" },
  ]

  return (
    <>
      <div className="min-h-screen pt-5 bg-gradient-to-b from-rose-500 to-orange-600">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
            <div className="text-center space-y-2 py-6">
              <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-2">
                <span className="w-8 h-8 text-gray-800">🏋️‍♂️</span>
                FitTrack
                <span className="w-8 h-8 text-gray-800">💪🏼</span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <span className="w-5 h-5 text-gray-800">📅</span>
                <span className="text-lg">Seleccionar día</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {weekDays.map((item) => (
                  <Link href={`/paginaDia/${item.day}`} key={item.day}>
                    <button
                      className="w-full h-16 text-lg bg-slate-300 hover:bg-rose-500 rounded-xl transition-all ease-in-out transform hover:scale-105"
                    >
                      {item.day}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg mt-5">
            <div className="text-center space-y-2 py-6">
              <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-2">
                <span className="w-8 h-8 text-gray-800">🍏</span>
                Registrar calorías
              </h1>
              <div className="flex pt-3 items-center justify-center gap-2 text-gray-800">
                <Link href="/paginaCalorias" className="inline-block px-6 py-2 bg-slate-300 hover:bg-rose-500 rounded-xl transition-all ease-in-out transform hover:scale-105 text-sm sm:text-base shadow-md focus:outline-none focus:ring-2">
                  Registrar
                </Link>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <FooterComponent />
    </>
  )
}
