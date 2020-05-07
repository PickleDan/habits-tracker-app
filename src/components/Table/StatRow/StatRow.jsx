import React from 'react'
import HabitStatus from './HabitsStatus/HabitStatus'

const StatRow = ({ day, habitsData }) => {
    const dayPotentialFinder = (day, habitsData) =>
        habitsData.day_potential.filter(
            (potential) => potential.date === day.format('YYYY-MM-DD')
        )

    const foundDayPotential = dayPotentialFinder(day, habitsData)

    const dayPotential =
        foundDayPotential[0] !== undefined ? foundDayPotential[0].status : ''

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
                    value={dayPotential}
                    onChange={() => {}}
                />
            </th>
        </tr>
    )
}

export default StatRow
