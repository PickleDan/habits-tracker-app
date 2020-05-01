import { reduxTypes } from '../../constants'

export const setMail = (mail) => {
    return {
        type: reduxTypes.SET_SIGN_UP_MAIL,
        payload: {
            mail,
        },
    }
}
export const setLoginSignUp = (login) => {
    return {
        type: reduxTypes.SET_SIGN_UP_LOGIN,
        payload: {
            login,
        },
    }
}
export const setName = (name) => {
    return {
        type: reduxTypes.SET_SIGN_UP_NAME,
        payload: {
            name,
        },
    }
}
export const setPasswordFirstTime = (password) => {
    return {
        type: reduxTypes.SET_SIGN_UP_PASSWORD_FIRST_TIME,
        payload: {
            passwordFirstTime: password,
        },
    }
}
export const setPasswordSecondTime = (password) => {
    return {
        type: reduxTypes.SET_SIGN_UP_PASSWORD_SECOND_TIME,
        payload: {
            passwordSecondTime: password,
        },
    }
}
export const setMailError = (error) => {
    return {
        type: reduxTypes.SET_SIGN_UP_MAIL_ERROR,
        payload: {
            mailError: error,
        },
    }
}
export const setLoginError = (error) => {
    return {
        type: reduxTypes.SET_SIGN_UP_LOGIN_ERROR,
        payload: {
            loginError: error,
        },
    }
}
export const setPasswordError = (error) => {
    return {
        type: reduxTypes.SET_SIGN_UP_PASSWORD_ERROR,
        payload: {
            passwordError: error,
        },
    }
}
export const setSuccess = () => {
    return {
        type: reduxTypes.SET_SIGN_UP_SUCCESS,
        payload: {
            success: true,
        },
    }
}
