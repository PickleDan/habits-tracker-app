import React from 'react'
import { Auth } from './Auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setIsError, setLogin, setPassword } from '../../redux/auth/authActions'
import { fetchAuth } from '../../redux/auth/authRequests'
import { fetchSignUp } from '../../redux/signUp/signUpRequests'
import {
    setLoginError,
    setLoginSignUp,
    setMail,
    setMailError,
    setName,
    setPasswordError,
    setPasswordFirstTime,
    setPasswordSecondTime,
} from '../../redux/signUp/signUpActions'

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        password: state.auth.password,
        isLoggedIn: state.auth.isLoggedIn,
        isError: state.auth.isError,
        mailError: state.signUp.mailError,
        loginError: state.signUp.loginError,
        passwordError: state.signUp.passwordError,
        success: state.signUp.success,
    }
}

export const AuthContainer = compose(
    connect(mapStateToProps, {
        setLogin,
        setPassword,
        setIsError,
        fetchAuth,
        fetchSignUp,
        setMail,
        setLoginSignUp,
        setName,
        setPasswordFirstTime,
        setPasswordSecondTime,
        setMailError,
        setLoginError,
        setPasswordError,
    })
)(
    ({
        login,
        password,
        isError,
        mailError,
        loginError,
        passwordError,
        success,
        setLogin,
        setPassword,
        setIsError,
        fetchAuth,
        isLoggedIn,
        fetchSignUp,
        setMail,
        setLoginSignUp,
        setName,
        setPasswordFirstTime,
        setPasswordSecondTime,
        setMailError,
        setLoginError,
        setPasswordError,
    }) => {
        return (
            <Auth
                {...{
                    login,
                    password,
                    isError,
                    mailError,
                    loginError,
                    passwordError,
                    success,
                    isLoggedIn,
                    setLogin,
                    setPassword,
                    setIsError,
                    fetchAuth,
                    fetchSignUp,
                    setMail,
                    setLoginSignUp,
                    setName,
                    setPasswordFirstTime,
                    setPasswordSecondTime,
                    setMailError,
                    setLoginError,
                    setPasswordError,
                }}
            />
        )
    }
)

export default AuthContainer
