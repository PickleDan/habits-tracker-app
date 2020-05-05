import React from 'react'
import GreenMark from '../statusMarks/GreenMark'
import RedMark from '../statusMarks/RedMark'
import NeutralMark from '../statusMarks/NeutralMark'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    fetchHabits,
    fetchUpdateHabitStat,
} from '../../../../redux/habits/habitsRequests'
import { DateUtils } from '../../../../utils/date'
import moment from 'moment'

const weekDays = DateUtils.getWeekDays(moment())
const dateFrom = weekDays[0].format('YYYY-MM-DD')
const dateTo = weekDays[6].format('YYYY-MM-DD')

const habitStatusComponents = {
    1: GreenMark,
    2: RedMark,
    3: NeutralMark,
    4: () => null,
}

let timer = null

const getHabitStatusComponent = (status) =>
    habitStatusComponents[status] || habitStatusComponents[4]

const HabitStatus = ({ habit, date, fetchUpdateHabitStat, fetchHabits }) => {
    const formattedDate = date.format('YYYY-MM-DD')
    const status = habit.stats.map((stat) => {
        if (stat.date === formattedDate) return stat.status
    })

    const filteredStatus = status.filter((el) => el !== undefined)

    const StatusComponent = getHabitStatusComponent(...filteredStatus)

    const onOnceClickOnCell = async (habit, date) => {
        const habitId = habit.id
        const clickDate = date.format('YYYY-MM-DD')
        const status = 1

        await fetchUpdateHabitStat({ date: clickDate, status, habitId })
        await fetchHabits({ dateFrom, dateTo })
    }

    const onDoubleClickOnCell = async (habit, date) => {
        const habitId = habit.id
        const clickDate = date.format('YYYY-MM-DD')
        const status = 2

        await fetchUpdateHabitStat({ date: clickDate, status, habitId })
        await fetchHabits({ dateFrom, dateTo })
    }

    const onContextMenuClickOnCell = async (habit, date, e) => {
        const habitId = habit.id
        const clickDate = date.format('YYYY-MM-DD')
        const status = 0

        e.preventDefault()
        await fetchUpdateHabitStat({ date: clickDate, status, habitId })
        await fetchHabits({ dateFrom, dateTo })
    }

    const onLongClickOnCell = async (habit, date) => {
        timer = setTimeout(async () => {
            const habitId = habit.id
            const clickDate = date.format('YYYY-MM-DD')
            const status = 3

            await fetchUpdateHabitStat({ date: clickDate, status, habitId })
            await fetchHabits({ dateFrom, dateTo })
        }, 700)
    }

    return (
        <div
            onClick={() => onOnceClickOnCell(habit, date)}
            onDoubleClick={() => onDoubleClickOnCell(habit, date)}
            onContextMenu={(e) => onContextMenuClickOnCell(habit, date, e)}
            onMouseDown={() => onLongClickOnCell(habit, date)}
            onMouseUp={() => clearTimeout(timer)}
            className="habit-status-container"
        >
            <StatusComponent />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        habitsData: state.habitsData,
    }
}

export default compose(
    connect(mapStateToProps, { fetchUpdateHabitStat, fetchHabits })
)(HabitStatus)
