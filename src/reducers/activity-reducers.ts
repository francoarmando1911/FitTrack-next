import { Activity } from "../types";

export type ActivityActions =
    | { type: 'save-activity', payload: { newActivity: Activity } }
    | { type: 'save-activeId', payload: { id: Activity['id'] } }
    | { type: 'delete-activity', payload: { id: Activity['id'] } };

export type ActivityState = {
    activities: Activity[];
    activeId: Activity['id'];
};

const localStorageActivities = (): Activity[] => {
    if (typeof window === "undefined") return [];

    try {
        const activities = localStorage.getItem("activities");
        return activities ? JSON.parse(activities) : [];
    } catch (error) {
        console.error("Error al recuperar actividades desde localStorage:", error);
        return [];
    }
};

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: "",
};

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
): ActivityState => {
    if (action.type === 'save-activity') {
        let updatedActivities: Activity[] = [];
        const newActivity = {
            ...action.payload.newActivity,
            id: action.payload.newActivity.id || crypto.randomUUID() 
        };

        if (state.activeId) {
            updatedActivities = state.activities.map(activity =>
                activity.id === state.activeId ? newActivity : activity
            );
        } else {
            updatedActivities = [...state.activities, newActivity];
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        };
    }

    if (action.type === 'save-activeId') {
        return {
            ...state,
            activeId: action.payload.id
        };
    }

    if (action.type === 'delete-activity') {
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        };
    }

    return state;
};
