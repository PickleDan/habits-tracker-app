import { reduxTypes } from '../../constants'
import { checkToken } from '../../utils/checkToken'

const initialState = {
    login: '',
    password: '',
    token: localStorage.getItem('token'),
    isLoggedIn: localStorage.getItem('token'),
    isError: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_AUTH_LOGIN:
            return {
                ...state,
                login: action.payload.login,
            }
        case reduxTypes.SET_AUTH_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
            }
        case reduxTypes.SET_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload.token,
            }
        case reduxTypes.SET_AUTH_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            }
        case reduxTypes.SET_AUTH_ERROR:
            return {
                ...state,
                isError: action.payload.isError,
            }
        default:
            return state
    }
}
