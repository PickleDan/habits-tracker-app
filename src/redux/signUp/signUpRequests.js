import { fetchSignUpApi } from '../../api'
import {
    setLoginError,
    setMailError,
    setPasswordError,
    setSuccess,
} from './signUpActions'

export const fetchSignUp = () => {
    return async (dispatch, getState) => {
        try {
            const {
                mail,
                login,
                name,
                passwordFirstTime,
                passwordSecondTime,
            } = getState().signUp
            const result = await fetchSignUpApi({
                mail,
                login,
                name,
                passwordFirstTime,
                passwordSecondTime,
            })
            const signUpInfo = await result.json()
            console.log('signUpInfo', signUpInfo)
            if (result.status === 201) {
                dispatch(setSuccess())
            }
            if (result.status === 422) {
                // console.log('TEST', signUpInfo.email[0])
                if (signUpInfo.email[0] === 'invalid email format') {
                    dispatch(setMailError(true))
                }
                if (signUpInfo.login[0] === 'is already taken') {
                    dispatch(setLoginError(true))
                }
                if (
                    signUpInfo.password_confirmation[0] ===
                    `doesn't match Password`
                ) {
                    dispatch(setPasswordError(true))
                }
            }

            console.log('fetchSignUp > ', result)
        } catch (e) {}
    }
}
