import React, { useEffect, useState } from 'react'
import HabitStatus from './HabitsStatus/HabitStatus'

const StatRow = ({ day, habitsData, fetchUpdateDayPotential, fetchHabits }) => {
    const [input, setInput] = useState(5)

    const inputInit = habitsData.day_potential.find((el) => {
        if (el.date === day.format('YYYY-MM-DD')) return el.status
    })

    useEffect(() => {
        setInput(inputInit && inputInit.status)
    }, [habitsData])

    const onBlurInput = async () => {
        await fetchUpdateDayPotential({
            date: day.format('YYYY-MM-DD'),
            status: input,
        })
        await fetchHabits()
    }

    return (
        <tr className="status-cell" key={day.toString()}>
            <th scope="row">{day.format('DD.MM')}</th>
            {habitsData.habits.map((habit) => (
                <td key={habit.id}>
                    <HabitStatus habit={habit} date={day} />
                </td>
            ))}
            <th>
                <input
                    type="number"
                    className="day-potential-input"
                    value={input}
                    maxLength={1}
                    onChange={(e) => setInput(e.target.value)}
                    onBlur={onBlurInput}
                />
            </th>
        </tr>
    )
}

export default StatRow
