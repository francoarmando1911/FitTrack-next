import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-6xl">FitTrack app 2025</h1>

      <div className="text-center mt-10">
        <Link href="/paginaDia" className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-800 text-white text-sm sm:text-base rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400">
          Dias
        </Link>
      </div>
    </div>
  );
}
