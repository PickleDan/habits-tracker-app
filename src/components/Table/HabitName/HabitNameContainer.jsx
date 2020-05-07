import React from 'react'
import { HabitName } from './HabitName'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { fetchHabits } from '../../../redux/habits/habitsRequests'
import { setModalToDeleteHabit } from '../../../redux/deleteHabit/deleteHabitActions'
import { fetchDeleteHabit } from '../../../redux/deleteHabit/deleteHabitRequests'

const HabitNameContainer = ({
    habit,
    modalIsOpen,
    setModalToDeleteHabit,
    fetchDeleteHabit,
    fetchHabits,
}) => {
    return (
        <HabitName
            {...{
                habit,
                modalIsOpen,
                setModalToDeleteHabit,
                fetchDeleteHabit,
                fetchHabits,
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.deleteHabit.modalIsOpen,
    }
}
export default compose(
    connect(mapStateToProps, {
        fetchHabits,
        setModalToDeleteHabit,
        fetchDeleteHabit,
    })
)(HabitNameContainer)
