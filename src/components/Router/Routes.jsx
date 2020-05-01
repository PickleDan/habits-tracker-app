import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import AuthContainer from '../Auth/AuthContainer'
import { Main } from '../Main'
import PrivateRoute from './PrivateRoute'
import { compose } from 'redux'
import { connect } from 'react-redux'

const Routes = ({ isLoggedIn, token }) => {
    return (
        <BrowserRouter>
            <Route path="/login" component={AuthContainer} />
            <PrivateRoute restricted={isLoggedIn} component={Main} path="/" />
        </BrowserRouter>
    )
}

let mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
    }
}

export default compose(connect(mapStateToProps, {}))(Routes)
