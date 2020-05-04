import React from 'react'
import { Header } from './Header'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAuthToken, setLoggedIn } from '../../redux/auth/authActions'

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

const HeaderContainer = (props) => {
    return <Header {...props} />
}

export default compose(
    connect(mapStateToProps, {
        setAuthToken,
        setLoggedIn,
    })
)(HeaderContainer)
