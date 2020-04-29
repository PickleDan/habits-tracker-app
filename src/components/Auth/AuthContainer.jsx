import React from 'react'
import { Auth } from './Auth'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setLogin, setPassword } from '../../redux/auth/authActions'
import { fetchAuth } from '../../redux/auth/authRequests'

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        password: state.auth.password,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

export const AuthContainer = compose(
    connect(mapStateToProps, {
        setLogin,
        setPassword,
        fetchAuth,
    })
)(({ login, password, setLogin, setPassword, fetchAuth, isLoggedIn }) => {
    return (
        <Auth
            {...{
                login,
                password,
                isLoggedIn,
                setLogin,
                setPassword,
                fetchAuth,
            }}
        />
    )
})

export default AuthContainer
