import { fetchAuthApi } from '../../api'
import { setAuthToken, setIsError, setLoggedIn } from './authActions'

export const fetchAuth = () => {
    return async (dispatch, getState) => {
        try {
            const { login, password } = getState().auth
            const result = await fetchAuthApi(login, password)
            if (result.status === 200) {
                const token = await result.json()
                dispatch(setAuthToken(token.token))
                dispatch(setLoggedIn(true))
            } else {
                dispatch(setIsError(true))
            }
        } catch (e) {
            dispatch(setIsError(true))
        }
    }
}
