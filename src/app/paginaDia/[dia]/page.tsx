// app/paginaDia/[day]/page.tsx
"use client";

import DayComponent from "@/components/DayComponent";

interface PageProps {
  params: {
    day: string;
  };
}

const PaginaDia = ({ params }: PageProps) => {
  // Renderizamos directamente el componente sin estado extra
  return <DayComponent day={params.day} />;
};

export default PaginaDia;
