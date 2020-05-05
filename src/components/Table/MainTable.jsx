import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { HabitName } from './HabitName/HabitName'
import { HabitMeasure } from './HabitMeasure/HabitMeasure'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import { Container, Table } from 'react-bootstrap'
import StatRowContainer from './StatRow/StatRowContainer'

moment.locale('ru')

export const MainTable = ({ weekDays, habitsData }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [deleteModalWarning, setDeleteModalWarning] = useState({
        isOpen: false,
        removableHabit: {},
    })

    const listOfHabitsNames = habitsData.habits.map((habit) => {
        return <HabitName key={habit.id} habit={habit} />
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
                    <button>Удалить</button>
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
                            <span className="inputSignUp">
                                Введите название привычки:
                            </span>
                            <input minLength="3" />
                        </div>

                        <div className="modal-inputs-item">
                            <span className="inputSignUp">
                                Введите норму привычки:
                            </span>
                            <input minLength="3" />
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button>Отменить</button>
                        <button>Сохранить</button>
                    </div>
                </form>
            </Modal>
            <FontAwesomeIcon
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
                        <StatRowContainer
                            day={day}
                            dayOrderNumber={dayOrderNumber}
                        />
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
