import { reduxTypes } from '../../constants'

export const setHabits = (habits) => {
    return {
        type: reduxTypes.SET_HABITS,
        payload: {
            habits,
        },
    }
}

export const setUpdateSuccess = (isUpdateSuccess) => {
    return {
        type: reduxTypes.SET_UPDATE_SUCCESS,
        payload: {
            isUpdateSuccess,
        },
    }
}
