"use client";

import { useReducer } from "react";
import CaloriesComponent from "@/components/CaloriesComponent";
import { activityReducer, initialState } from "@/reducers/activity-reducers";

export default function Page() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <div>
      <CaloriesComponent dispatch={dispatch} state={state} />
    </div>
  );
}
