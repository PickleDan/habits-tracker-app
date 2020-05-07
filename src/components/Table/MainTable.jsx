import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { HabitMeasure } from './HabitMeasure/HabitMeasure'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import { Container, Table } from 'react-bootstrap'
import StatRowContainer from './StatRow/StatRowContainer'
import HabitNameContainer from './HabitName/HabitNameContainer'

moment.locale('ru')

export const MainTable = ({
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
    isSuccessDeleting,
    setNewHabitError,
}) => {
    const onSubmitHabitSaving = async (name, description, e) => {
        e.preventDefault()
        await fetchCreateHabit({ name, description })
        await fetchHabits()
    }

    console.log('isSuccessDeleting', isSuccessDeleting)

    const listOfHabitsNames = habitsData.habits.map((habit) => {
        return <HabitNameContainer key={habit.id} habit={habit} />
    })

    const listOfMeasureValue = habitsData.habits.map((habit) => (
        <HabitMeasure key={habit.id} habit={habit} />
    ))

    const customModalStyles = {
        content: {
            backgroundColor: '#508be7',
            color: '#fff',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
        },
    }
    Modal.setAppElement('#root')

    return (
        <Container fluid className="table-wrapper">
            <Modal
                isOpen={modalToAddHabitIsOpen}
                onRequestClose={() => setModalToAddHabit(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title">Введите данные о привычке</h2>
                {isErrorAdded ? (
                    <h6 className="modal-habit-error">
                        Ошибка при добавлении новой привычки.
                    </h6>
                ) : null}
                {isSuccessAdded ? (
                    <h6 className="modal-habit-added">
                        Вы успешно добавили новую привычку!
                    </h6>
                ) : null}
                <form
                    onSubmit={(e) =>
                        onSubmitHabitSaving(
                            habitNameInEditing,
                            habitMeasureInEditing,
                            e
                        )
                    }
                >
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите название привычки:
                            </span>
                            <input
                                minLength="3"
                                value={habitNameInEditing}
                                onChange={(e) => {
                                    setHabitNameInput(e.target.value)
                                    setNewHabitSuccess(false)
                                    setNewHabitError(false)
                                }}
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите норму привычки:
                            </span>
                            <input
                                minLength="3"
                                value={habitMeasureInEditing}
                                onChange={(e) => {
                                    setHabitMeasureInput(e.target.value)
                                    setNewHabitSuccess(false)
                                    setNewHabitError(false)
                                }}
                            />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                setModalToAddHabit(false)
                            }}
                        >
                            Отменить
                        </button>
                        <button>Сохранить</button>
                    </div>
                </form>
            </Modal>
            <FontAwesomeIcon
                size="2x"
                icon={faPlusCircle}
                className="plusIcon"
                onClick={() => setModalToAddHabit(true)}
            />
            {isSuccessDeleting ? (
                <h6 className="habit-is-deleted">
                    Вы успешно удалили привычку
                </h6>
            ) : null}
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th className="thStyle">Навык</th>

                        {listOfHabitsNames}

                        <th className="thStyle">Потенциал дня</th>
                    </tr>

                    <tr>
                        <th className="thStyle">Норма</th>
                        {listOfMeasureValue}
                        <th className="thStyle">1...10</th>
                    </tr>
                </thead>
                <tbody>
                    {weekDays.map((day, index) => (
                        <StatRowContainer key={index} day={day} />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
