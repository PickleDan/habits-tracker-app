import { reduxTypes } from '../../constants'

export const setHabits = (habits) => {
    return {
        type: reduxTypes.SET_HABITS,
        payload: {
            habits,
        },
    }
}
