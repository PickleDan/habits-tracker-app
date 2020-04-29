import React from 'react'
import { Header } from './Header'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setAuthToken } from '../../redux/auth/authActions'

const mapStateToProps = (state) => {
    return {}
}

const HeaderContainer = (props) => {
    console.log('PROPS', props)
    return <Header {...props} />
}

export default compose(
    connect(mapStateToProps, {
        setAuthToken,
    })
)(HeaderContainer)
