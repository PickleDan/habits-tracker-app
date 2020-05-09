import React from 'react'
import { HabitMeasure } from './HabitMeasure'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    fetchHabits,
    fetchUpdateHabit,
} from '../../../redux/habits/habitsRequests'
import { setHabits } from '../../../redux/habits/habitsActions'

const HabitMeasureContainer = ({
    habit,
    habitsData,
    fetchHabits,
    setHabits,
    fetchUpdateHabit,
}) => {
    return (
        <HabitMeasure
            {...{ habit, habitsData, fetchHabits, setHabits, fetchUpdateHabit }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        habitsData: state.habitsData,
    }
}
export default compose(
    connect(mapStateToProps, {
        fetchHabits,
        setHabits,
        fetchUpdateHabit,
    })
)(HabitMeasureContainer)
