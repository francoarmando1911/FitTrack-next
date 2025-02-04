import { Activity } from "@/types";

export type ActivityActions = |
{type: 'save-activity', payload: {newActivity: Activity} } |
{ type: 'save-activeId', payload: { id: Activity['id'] } } |
{ type: 'delete-activity', payload: { id: Activity['id'] } } 

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities): []
}

export const initialState : ActivityState = {
    activities : localStorageActivities(),
    activeId : ''
}

