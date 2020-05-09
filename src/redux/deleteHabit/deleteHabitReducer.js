import { reduxTypes } from '../../constants'

const initialState = {
    modalIsOpen: false,
    isSuccess: false,
}

export const deleteHabitReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_DELETE_HABIT_MODAL:
            return {
                ...state,
                modalIsOpen: action.payload.modalIsOpen,
            }
        case reduxTypes.SET_DELETE_SUCCESS:
            return {
                ...state,
                isSuccess: action.payload.isSuccess,
            }

        default:
            return state
    }
}
