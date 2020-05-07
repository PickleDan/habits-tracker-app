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
import { setSuccessDeleting } from '../../redux/deleteHabit/deleteHabitActions'

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
    isSuccessDeleting,
    isErrorAdded,
    setNewHabitSuccess,
    setNewHabitError,
    setSuccessDeleting,
}) => {
    useEffect(() => {
        fetchHabits()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setSuccessDeleting(false)
        }, 2000)
    }, [isSuccessDeleting])
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
                isSuccessDeleting,
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
        isSuccessDeleting: state.deleteHabit.isSuccess,
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
        setSuccessDeleting,
    })
)(MainTableContainer)
