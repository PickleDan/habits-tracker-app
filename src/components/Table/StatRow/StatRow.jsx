import React from 'react'
import { HabitStatus } from '../HabitsStatus/HabitStatus'

const StatRow = ({ day, dayOrderNumber, habitsData }) => {
    return (
        <tr className="status-cell" key={day.toString()}>
            <th scope="row">{day.format('DD.MM')}</th>
            {habitsData.habits.map((habit) => (
                <td key={habit.id}>
                    <HabitStatus
                        // onClickCell={oneClickCellHandler}
                        // onDoubleClickCell={doubleClickCellHandler}
                        habit={habit}
                        date={day}
                    />
                </td>
            ))}
            <th>
                <input
                    type="number"
                    className="day-potential-input"
                    // value={inputDayPotentialState[dayOrderNumber]}
                    // onChange={(e) =>
                    //     inputDayPotentialHandler(e, dayOrderNumber)
                    // }
                />
            </th>
        </tr>
    )
}

export default StatRow
