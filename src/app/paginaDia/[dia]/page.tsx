"use client";

import DayComponent from "@/components/DayComponent";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaginaDia = () => {
  const params = useParams();
  const [day, setDay] = useState<string | null>(null);

  useEffect(() => {
    console.log("params.dia:", params?.dia);
    if (params?.dia) {
      const dayParam = Array.isArray(params.dia) ? params.dia[0] : params.dia;
      setDay(dayParam); 
    }
  }, [params?.dia]);

  console.log('Estado de day:', day); 

  if (!day) {
    return <div>Cargando...</div>; 
  }

  return <DayComponent day={day} />;
};

export default PaginaDia;

