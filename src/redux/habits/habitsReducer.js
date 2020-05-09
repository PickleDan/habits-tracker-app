import { reduxTypes } from '../../constants'

const initialState = {
    day_potential: [],
    habits: [],
    isUpdateSuccess: false,
}

export const habitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_HABITS:
            return {
                ...state,
                habits: action.payload.habits.habits,
                day_potential: action.payload.habits.day_potential,
            }
        case reduxTypes.SET_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdateSuccess: action.payload.isUpdateSuccess,
            }
        default:
            return state
    }
}
