import React, { useState } from 'react'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HabitMeasureStyles from './HabitMeasure.module.scss'
import { ClickAwayListener } from '@material-ui/core'
import cn from 'classnames'
import cloneObject from '../../../utils/cloneObject'

const HabitMeasure = ({ habit, habitsData, setHabits, fetchUpdateHabit }) => {
    const [editingMode, setEditingMode] = useState(false)
    const onClickAway = () => {
        setEditingMode(false)
    }
    console.log('habit', habit)
    const onHabitNameChange = (e) => {
        const clonedHabitsData = cloneObject(habitsData)
        clonedHabitsData.habits.forEach((habitFromState) => {
            if (habitFromState.id === habit.id) {
                habitFromState.description = e.target.value
                setHabits(clonedHabitsData)
            }
        })
    }

    const handleAcceptIcon = () => {
        fetchUpdateHabit({
            id: habit.id,
            name: habit.name,
            description: habit.description,
        })
    }

    const handleBlur = () => {
        fetchUpdateHabit({
            id: habit.id,
            name: habit.name,
            description: habit.description,
        })
    }

    const handleDenyIcon = () => {
        const clonedHabitsData = cloneObject(habitsData)
        clonedHabitsData.habits.forEach((habitFromState) => {
            if (habitFromState.id === habit.id) {
                habitFromState.description = ''
                setHabits(clonedHabitsData)
            }
        })
    }

    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconCheck}
                icon={faCheck}
                onClick={handleAcceptIcon}
                size="2x"
            />
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconDeny}
                icon={faTimes}
                onClick={handleDenyIcon}
                size="2x"
            />
        </>
    )
    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <th
                className={HabitMeasureStyles.measureTh}
                key={habit.id}
                onClick={() => setEditingMode(true)}
            >
                <form className={HabitMeasureStyles.habitMeasuringForm}>
                    <input
                        className="measuring-value-input"
                        value={habit.description}
                        onBlur={handleBlur}
                        spellCheck="false"
                        onChange={(e) => onHabitNameChange(e)}
                    />
                    <div
                        className={cn(HabitMeasureStyles.habitMeasuringButtons)}
                    >
                        {editingMode && icons}
                    </div>
                </form>
            </th>
        </ClickAwayListener>
    )
}

export { HabitMeasure }
