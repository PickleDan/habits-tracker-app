import React from 'react'
import GreenMark from '../statusMarks/GreenMark'
import RedMark from '../statusMarks/RedMark'
import NeutralMark from '../statusMarks/NeutralMark'

const Status = {
    DONE: 'DONE',
    FAILED: 'FAILED',
    NEUTRAL: 'NEUTRAL',
    NOT_SPECIFIED: 'NOT_SPECIFIED',
}

const habitStatusComponents = {
    1: GreenMark,
    2: RedMark,
    3: NeutralMark,
    4: () => null,
}

const getHabitStatusComponent = (status) =>
    habitStatusComponents[status] || habitStatusComponents[4]

const HabitStatus = ({ habit, date }) => {
    const formattedDate = date.format('YYYY-MM-DD')
    const status = habit.stats.map((stat) => {
        if (stat.date === formattedDate) return stat.status
    })

    const filteredStatus = status.filter((el) => el !== undefined)

    const StatusComponent = getHabitStatusComponent(...filteredStatus)

    console.log(StatusComponent)

    return (
        <div
            // onClick={(e) => onClickCell(habit, dayName, dayPotential, e)}
            // onContextMenu={(e) => onClickCell(habit, dayName, dayPotential, e)}
            // onDoubleClick={() =>
            //     onDoubleClickCell(habit, dayName, dayPotential)
            // }
            className="habit-status-container"
        >
            <StatusComponent />
        </div>
    )
}

export { HabitStatus, Status }
