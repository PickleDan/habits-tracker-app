import { reduxTypes } from '../../constants'

const initialState = {
    isOpen: false,
    isSuccess: false,
    isError: false,
    habitName: '',
    habitMeasure: '',
}

export const addHabitReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_ADD_HABIT_MODAL:
            return {
                ...state,
                isOpen: action.payload.isOpen,
            }
        case reduxTypes.SET_HABIT_NAME_INPUT:
            return {
                ...state,
                habitName: action.payload.habitName,
            }
        case reduxTypes.SET_HABIT_MEASURE_INPUT:
            return {
                ...state,
                habitMeasure: action.payload.habitMeasure,
            }
        case reduxTypes.SET_NEW_HABIT_SUCCESS:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
            }
        case reduxTypes.SET_NEW_HABIT_ERROR:
            return {
                ...state,
                isError: action.payload.isError,
            }
        default:
            return state
    }
}
