import { reduxTypes } from '../../constants'

export const setModalToAddHabit = (isOpen) => {
    return {
        type: reduxTypes.SET_ADD_HABIT_MODAL,
        payload: {
            isOpen,
        },
    }
}
export const setHabitNameInput = (habitName) => {
    return {
        type: reduxTypes.SET_HABIT_NAME_INPUT,
        payload: {
            habitName,
        },
    }
}
export const setHabitMeasureInput = (habitMeasure) => {
    return {
        type: reduxTypes.SET_HABIT_MEASURE_INPUT,
        payload: {
            habitMeasure,
        },
    }
}
export const setNewHabitSuccess = (isSuccess) => {
    return {
        type: reduxTypes.SET_NEW_HABIT_SUCCESS,
        payload: {
            isSuccess,
        },
    }
}
export const setNewHabitError = (isError) => {
    return {
        type: reduxTypes.SET_NEW_HABIT_ERROR,
        payload: {
            isError,
        },
    }
}
