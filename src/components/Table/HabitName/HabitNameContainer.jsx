import React from 'react'
import { HabitName } from './HabitName'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
    fetchHabits,
    fetchUpdateHabit,
} from '../../../redux/habits/habitsRequests'
import { setModalToDeleteHabit } from '../../../redux/deleteHabit/deleteHabitActions'
import { fetchDeleteHabit } from '../../../redux/deleteHabit/deleteHabitRequests'
import { setHabits } from '../../../redux/habits/habitsActions'

const HabitNameContainer = ({
    habit,
    modalIsOpen,
    setModalToDeleteHabit,
    fetchDeleteHabit,
    fetchHabits,
    setEditingHabitNameInput,
    habitsData,
    setHabits,
    fetchUpdateHabit,
}) => {
    return (
        <HabitName
            {...{
                habit,
                modalIsOpen,
                setModalToDeleteHabit,
                fetchDeleteHabit,
                fetchHabits,
                setEditingHabitNameInput,
                habitsData,
                setHabits,
                fetchUpdateHabit,
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        modalIsOpen: state.deleteHabit.modalIsOpen,
        habitsData: state.habitsData,
    }
}
export default compose(
    connect(mapStateToProps, {
        fetchHabits,
        setModalToDeleteHabit,
        fetchDeleteHabit,
        setHabits,
        fetchUpdateHabit,
    })
)(HabitNameContainer)
