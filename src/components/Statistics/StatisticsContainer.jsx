import React from 'react'
import Statistics from './Statistics'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchHabits } from '../../redux/habits/habitsRequests'

const StatisticsContainer = ({ fetchHabits, habitsData }) => {
    return <Statistics {...{ fetchHabits, habitsData }} />
}

const mapStateToProps = (state) => {
    return {
        habitsData: state.habitsData,
    }
}
export default compose(
    connect(mapStateToProps, {
        fetchHabits,
    })
)(StatisticsContainer)
