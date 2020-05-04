import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { MainTable } from './MainTable'
import { fetchHabits } from '../../redux/habits/habitsRequests'

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        habitsData: state.habitsData,
    }
}

const MainTableContainer = (props) => {
    return <MainTable {...props} />
}

export default compose(connect(mapStateToProps, { fetchHabits }))(
    MainTableContainer
)
