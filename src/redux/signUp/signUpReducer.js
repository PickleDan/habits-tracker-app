import { reduxTypes } from '../../constants'

const initialState = {
    mail: '',
    login: '',
    name: '',
    passwordFirstTime: '',
    passwordSecondTime: '',
    mailError: false,
    loginError: false,
    passwordError: false,
    success: false,
}

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.SET_SIGN_UP_MAIL: {
            return {
                ...state,
                mail: action.payload.mail,
            }
        }
        case reduxTypes.SET_SIGN_UP_LOGIN: {
            return {
                ...state,
                login: action.payload.login,
            }
        }
        case reduxTypes.SET_SIGN_UP_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        case reduxTypes.SET_SIGN_UP_PASSWORD_FIRST_TIME: {
            return {
                ...state,
                passwordFirstTime: action.payload.passwordFirstTime,
            }
        }
        case reduxTypes.SET_SIGN_UP_PASSWORD_SECOND_TIME: {
            return {
                ...state,
                passwordSecondTime: action.payload.passwordSecondTime,
            }
        }
        case reduxTypes.SET_SIGN_UP_MAIL_ERROR: {
            return {
                ...state,
                mailError: action.payload.mailError,
            }
        }
        case reduxTypes.SET_SIGN_UP_LOGIN_ERROR: {
            return {
                ...state,
                loginError: action.payload.loginError,
            }
        }
        case reduxTypes.SET_SIGN_UP_PASSWORD_ERROR: {
            return {
                ...state,
                passwordError: action.payload.passwordError,
            }
        }
        case reduxTypes.SET_SIGN_UP_SUCCESS: {
            return {
                ...state,
                success: action.payload.success,
            }
        }
        default:
            return state
    }
}
