import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { MainTable } from './MainTable'
import { fetchHabits } from '../../redux/habits/habitsRequests'
import { fetchCreateHabit } from '../../redux/addHabit/addHabitRequests'
import {
    setHabitMeasureInput,
    setHabitNameInput,
    setModalToAddHabit,
    setNewHabitError,
    setNewHabitSuccess,
} from '../../redux/addHabit/addHabitActions'

const MainTableContainer = ({
    weekDays,
    habitsData,
    fetchHabits,
    fetchCreateHabit,
    modalToAddHabitIsOpen,
    setModalToAddHabit,
    habitNameInEditing,
    habitMeasureInEditing,
    setHabitNameInput,
    setHabitMeasureInput,
    isSuccessAdded,
    isErrorAdded,
    setNewHabitSuccess,
    setNewHabitError,
}) => {
    useEffect(() => {
        fetchHabits()
    }, [])

    return (
        <MainTable
            {...{
                weekDays,
                habitsData,
                modalToAddHabitIsOpen,
                setModalToAddHabit,
                habitNameInEditing,
                habitMeasureInEditing,
                setHabitNameInput,
                setHabitMeasureInput,
                fetchCreateHabit,
                fetchHabits,
                isSuccessAdded,
                isErrorAdded,
                setNewHabitSuccess,
                setNewHabitError,
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        habitsData: state.habitsData,
        modalToAddHabitIsOpen: state.addHabit.isOpen,
        habitNameInEditing: state.addHabit.habitName,
        habitMeasureInEditing: state.addHabit.habitMeasure,
        isSuccessAdded: state.addHabit.isSuccess,
        isErrorAdded: state.addHabit.isError,
    }
}

export default compose(
    connect(mapStateToProps, {
        fetchHabits,
        fetchCreateHabit,
        setModalToAddHabit,
        setHabitNameInput,
        setHabitMeasureInput,
        setNewHabitSuccess,
        setNewHabitError,
    })
)(MainTableContainer)
