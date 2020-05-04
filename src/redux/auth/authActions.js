import { reduxTypes } from '../../constants'

export const setLogin = (login) => {
    return {
        type: reduxTypes.SET_AUTH_LOGIN,
        payload: {
            login,
        },
    }
}

export const setPassword = (password) => {
    return {
        type: reduxTypes.SET_AUTH_PASSWORD,
        payload: {
            password,
        },
    }
}

export const setAuthToken = (token) => {
    localStorage.setItem('token', token)
    return {
        type: reduxTypes.SET_AUTH_TOKEN,
        payload: {
            token,
        },
    }
}

export const setLoggedIn = (isLoggedIn) => {
    return {
        type: reduxTypes.SET_AUTH_LOGGED_IN,
        payload: {
            isLoggedIn,
        },
    }
}

export const setIsError = (isError) => {
    return {
        type: reduxTypes.SET_AUTH_ERROR,
        payload: {
            isError,
        },
    }
}
