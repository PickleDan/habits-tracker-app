import React from 'react'
import { Header } from './Header'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAuthToken, setLoggedIn } from '../../redux/auth/authActions'

const mapStateToProps = (state) => {}

const HeaderContainer = (props) => {
    console.log('PROPS', props)
    return <Header {...props} />
}

export default compose(
    connect(mapStateToProps, {
        setAuthToken,
        setLoggedIn,
    })
)(HeaderContainer)
