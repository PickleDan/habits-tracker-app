import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { HabitStatus } from './HabitStatus'
import { Status } from './HabitStatus'
import cloneObject from '../utils/cloneObject'
import replaceById from '../utils/replaceById'
import deleteById from '../utils/deleteById'
import { HabitName } from './HabitName/HabitName'
import { HabitMeasure } from './HabitMeasure/HabitMeasure'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import { Container, Table } from 'react-bootstrap'

moment.locale('ru')

const dayNumberToDayName = {
    0: 'MONDAY',
    1: 'TUESDAY',
    2: 'WEDNESDAY',
    3: 'THURSDAY',
    4: 'FRIDAY',
    5: 'SATURDAY',
    6: 'SUNDAY',
}
const MainTable = ({ habits, weekDays }) => {
    const [habitsState, setHabitsState] = useState(habits)

    const [inputDayPotentialState, setInputDayPotentialState] = useState([
        4,
        6,
        1,
        5,
        7,
        8,
        6,
    ])

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const initNewHabit = {
        id: habitsState.length + 1,
        name: '',
        measuringValue: '',
        stats: {
            MONDAY: { status: Status.NOT_SPECIFIED },
            TUESDAY: { status: Status.NOT_SPECIFIED },
            WEDNESDAY: { status: Status.NOT_SPECIFIED },
            THURSDAY: { status: Status.NOT_SPECIFIED },
            FRIDAY: { status: Status.NOT_SPECIFIED },
            SATURDAY: { status: Status.NOT_SPECIFIED },
            SUNDAY: { status: Status.NOT_SPECIFIED },
        },
    }
    const [newHabitAdding, setNewHabitAdding] = useState(initNewHabit)

    const [deleteModalWarning, setDeleteModalWarning] = useState({
        isOpen: false,
        removableHabit: {},
    })

    useEffect(() => {
        setNewHabitAdding({
            id: habitsState.length + 1,
            ...initNewHabit,
        })
    }, [habitsState])

    const oneClickCellHandler = (habit, dayName, dayPotential, e) => {
        e.preventDefault()
        const updatedHabit = cloneObject(habit)
        if (e.type === 'click') {
            if (e.ctrlKey) {
                console.log('Click+ctrl')
                updatedHabit.stats[dayName] = {
                    status: Status.NEUTRAL,
                    dayPotential,
                }
            } else {
                updatedHabit.stats[dayName] = {
                    status: Status.DONE,
                    dayPotential,
                }
            }
        } else if (e.type === 'contextmenu') {
            updatedHabit.stats[dayName] = {
                status: Status.NOT_SPECIFIED,
                dayPotential,
            }
        }
        const updatedHabits = replaceById(habitsState, updatedHabit)
        setHabitsState(updatedHabits)
    }

    const doubleClickCellHandler = (habit, dayName, dayPotential) => {
        const updatedHabit = cloneObject(habit)
        updatedHabit.stats[dayName] = {
            status: Status.FAILED,
            dayPotential,
        }
        const updatedHabits = replaceById(habitsState, updatedHabit)
        setHabitsState(updatedHabits)
    }

    const inputDayPotentialHandler = (e, dayOrderNumber) => {
        const inputValue = e.target.value
        if (parseInt(inputValue) > 10 || parseInt(inputValue) <= 0) {
            alert('Вы ввели недопустимое значение, введите число от 1 до 10')
        } else {
            const cloneDayPotentialState = [...inputDayPotentialState]
            cloneDayPotentialState[dayOrderNumber] = e.target.value
            setInputDayPotentialState(cloneDayPotentialState)
        }
    }

    const handleNameAcceptIcon = (newHabit) => {
        if (newHabit.name.length > 25 || newHabit.name.length < 3) {
            alert(
                'Вы ввели недопустимое значение, количество символов не должно превышать 25 и быть меньше 3. Ваши данные НЕ сохранятся.'
            )
        } else {
            const updatedHabits = replaceById(habitsState, newHabit)
            setHabitsState(updatedHabits)
            alert('Вы успешно сохранили название привычки!')
        }
    }

    const handleMeasureAcceptIcon = (newHabit) => {
        if (newHabit.measure.length > 25 || newHabit.measure.length < 3) {
            alert(
                'Вы ввели недопустимое значение, количество символов не должно превышать 25 и быть меньше 3. Ваши данные НЕ сохранятся.'
            )
        } else {
            const updatedHabits = replaceById(habitsState, newHabit)
            setHabitsState(updatedHabits)
            alert('Вы успешно сохранили меру привычки!')
        }
    }

    const handleTrashIcon = (removableHabit) =>
        setDeleteModalWarning({
            ...deleteModalWarning,
            removableHabit,
            isOpen: true,
        })

    const deleteHabit = () => {
        const newHabitsState = deleteById(
            habitsState,
            deleteModalWarning.removableHabit
        )
        setHabitsState(newHabitsState)
        setDeleteModalWarning({
            ...deleteModalWarning,
            isOpen: false,
        })
    }

    const handlePlusIconClick = () => setModalIsOpen(true)

    const onChangeHabitNameModal = (e) => {
        const inputValue = e.target.value
        const clonedHabit = cloneObject(newHabitAdding)
        clonedHabit.name = inputValue
        setNewHabitAdding(clonedHabit)
    }

    const onChangeHabitMeasureModal = (e) => {
        const inputValue = e.target.value
        const clonedHabit = cloneObject(newHabitAdding)
        clonedHabit.measuringValue = inputValue
        setNewHabitAdding(clonedHabit)
    }

    const saveNewHabit = (e) => {
        e.preventDefault()
        const clonedHabits = cloneObject(habitsState)
        clonedHabits.push(newHabitAdding)
        setHabitsState(clonedHabits)
        setModalIsOpen(false)
    }

    const onClickCancelModal = (e) => {
        e.preventDefault()
        setModalIsOpen(false)
    }

    console.log({ habitsState })
    const listOfHabitsNames = habitsState.map((habit) => {
        return (
            <HabitName
                key={habit.id}
                habit={habit}
                handleAcceptIcon={handleNameAcceptIcon}
                onDeleteHabit={handleTrashIcon}
            />
        )
    })

    const listOfMeasureValue = habitsState.map((habit) => (
        <HabitMeasure
            key={habit.id}
            habit={habit}
            handleAcceptIcon={handleMeasureAcceptIcon}
        />
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
                isOpen={deleteModalWarning.isOpen}
                onRequestClose={() =>
                    setDeleteModalWarning({
                        ...deleteModalWarning,
                        isOpen: false,
                    })
                }
                style={customModalStyles}
            >
                <p className="modal-alert">Вы точно хотите удалить привычку?</p>
                <div className="modal-buttons">
                    <button
                        onClick={() =>
                            setDeleteModalWarning({
                                ...deleteModalWarning,
                                isOpen: false,
                            })
                        }
                    >
                        Отменить
                    </button>
                    <button onClick={deleteHabit}>Удалить</button>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title">Введите данные о привычке</h2>
                <form>
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <input
                                onChange={(e) => onChangeHabitNameModal(e)}
                                placeholder="Введите название новой привычки"
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <input
                                onChange={(e) => onChangeHabitMeasureModal(e)}
                                placeholder="Введите норму привычки"
                            />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={(e) => onClickCancelModal(e)}>
                            Отменить
                        </button>
                        <button onClick={(e) => saveNewHabit(e)}>
                            Сохранить
                        </button>
                    </div>
                </form>
            </Modal>
            <FontAwesomeIcon
                onClick={() => handlePlusIconClick()}
                size="2x"
                icon={faPlusCircle}
                className="plusIcon"
            />
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
                    {weekDays.map((day, dayOrderNumber) => (
                        <tr className="status-cell" key={day.toString()}>
                            <th scope="row">{day.format('DD.MM')}</th>
                            {habitsState.map((habit) => (
                                <td key={habit.id}>
                                    <HabitStatus
                                        onClickCell={oneClickCellHandler}
                                        onDoubleClickCell={
                                            doubleClickCellHandler
                                        }
                                        dayOrderNumber={dayOrderNumber}
                                        dayName={
                                            dayNumberToDayName[dayOrderNumber]
                                        }
                                        habit={habit}
                                    />
                                </td>
                            ))}
                            <th>
                                <input
                                    type="number"
                                    className="day-patential-input"
                                    value={
                                        inputDayPotentialState[dayOrderNumber]
                                    }
                                    onChange={(e) =>
                                        inputDayPotentialHandler(
                                            e,
                                            dayOrderNumber
                                        )
                                    }
                                />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default MainTable
