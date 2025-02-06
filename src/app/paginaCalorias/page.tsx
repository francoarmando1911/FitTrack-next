"use client";

import { useReducer } from "react";
import CaloriesComponent from "@/components/CaloriesComponent";
import { activityReducer, initialState } from "@/reducers/activity-reducers";
import ResumeCaloriesComponent from "@/components/ResumeCaloriesComponent";
import FooterComponent from "@/components/FooterComponent";
import ActivityList from "@/components/ActivityList";

export default function Page() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <div>
      <CaloriesComponent dispatch={dispatch} state={state} />
      <ResumeCaloriesComponent activities={state.activities || []} />
      <ActivityList/>
      <FooterComponent/>
    </div>
  );
}
