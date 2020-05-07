import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import HabitNameStyles from './HabitName.module.scss'
import { ClickAwayListener } from '@material-ui/core'
import cn from 'classnames'
import Modal from 'react-modal'

const HabitName = ({
    habit,
    modalIsOpen,
    setModalToDeleteHabit,
    fetchDeleteHabit,
    fetchHabits,
}) => {
    const onClickAway = () => {
        setEditingMode(false)
    }

    const onDelete = async (id, e) => {
        e.preventDefault()
        await fetchDeleteHabit({ id })
        await fetchHabits()
        setModalToDeleteHabit(false)
    }

    const [inputState, setInputState] = useState(habit.name)
    const [editingMode, setEditingMode] = useState(false)
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconCheck}
                icon={faCheck}
                // onClick={(e) =>
                //     handleAcceptIcon({ name: inputState, id: habit.id })
                // }
            />
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconDeny}
                icon={faTimes}
            />
        </>
    )
    const deleteHabit = (
        <FontAwesomeIcon
            className={HabitNameStyles.deleteHabit}
            icon={faTrash}
            onClick={() => setModalToDeleteHabit(true)}
        />
    )
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
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalToDeleteHabit(false)}
                style={customModalStyles}
            >
                <p className="modal-alert">Вы точно хотите удалить привычку?</p>
                <div className="modal-buttons">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setModalToDeleteHabit(false)
                        }}
                    >
                        Отменить
                    </button>
                    <button onClick={(e) => onDelete(habit.id, e)}>
                        Удалить
                    </button>
                </div>
            </Modal>
            <ClickAwayListener onClickAway={onClickAway}>
                <th
                    className={HabitNameStyles.nameTh}
                    onClick={() => setEditingMode(true)}
                >
                    <form className={HabitNameStyles.habitNameForm}>
                        {editingMode && deleteHabit}
                        <input
                            className="habit-name-input"
                            value={inputState}
                            onChange={(e) => setInputState(e.target.value)}
                        />

                        <div className={cn(HabitNameStyles.habitNameButtons)}>
                            {editingMode && icons}
                        </div>
                    </form>
                </th>
            </ClickAwayListener>
        </>
    )
}

export { HabitName, HabitNameStyles }
