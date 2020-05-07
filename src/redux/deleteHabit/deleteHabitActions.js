import { reduxTypes } from '../../constants'

export const setModalToDeleteHabit = (modalIsOpen) => {
    return {
        type: reduxTypes.SET_DELETE_HABIT_MODAL,
        payload: {
            modalIsOpen,
        },
    }
}
export const setSuccessDeleting = (isSuccess) => {
    return {
        type: reduxTypes.SET_DELETE_SUCCESS,
        payload: {
            isSuccess,
        },
    }
}
