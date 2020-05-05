import { reduxTypes } from '../../constants'

const initialState = {
    day_potential: [],
    habits: [],
}

export const habitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_HABITS:
            return {
                ...state,
                habits: action.payload.habits.habits,
                day_potential: action.payload.habits.day_potential,
            }

        default:
            return state
    }
}
