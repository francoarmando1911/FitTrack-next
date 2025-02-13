"use client";

import { useReducer, useEffect, useState } from "react";
import CaloriesComponent from "@/components/CaloriesComponent";
import { activityReducer, initialState } from "@/reducers/activity-reducers";
import ResumeCaloriesComponent from "@/components/ResumeCaloriesComponent";
import FooterComponent from "@/components/FooterComponent";
import ActivityList from "@/components/ActivityList";

export default function Page() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("activities", JSON.stringify(state.activities));
    }
  }, [state.activities, isMounted]); 

  if (!isMounted) return null; 

  return (
    <div>
      <CaloriesComponent dispatch={dispatch} state={state} />
      <ResumeCaloriesComponent activities={state.activities || []} />
      <ActivityList activities={state.activities} dispatch={dispatch} />
      <FooterComponent />
    </div>
  );
}
