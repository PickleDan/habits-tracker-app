import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import { HabitStatus } from "./HabitStatus";
import { Status } from "./HabitStatus";
import cloneObject from "../utils/cloneObject";
import replaceById from "../utils/replaceById";
import { HabitName, HabitNameStyles } from "./habitName/HabitName";
import { HabitMeasure, HabitMeasureStyles } from "./habitMeasure/HabitMeasure";
import { Habit } from "../models/habit";

moment.locale("ru");

const dayNumberToDayName = {
    0: "MONDAY",
    1: "TUESDAY",
    2: "WEDNESDAY",
    3: "THURSDAY",
    4: "FRIDAY",
    5: "SATURDAY",
    6: "SUNDAY"
};

const Table = ({ habits, weekDays }) => {
    const [habitsState, setHabitsState] = useState(habits);

    const [inputState, setInputState] = useState({ input: "" });

    const oneClickCellHandler = (habit, dayName, dayPotential, e) => {
        e.preventDefault();
        const updatedHabit = cloneObject(habit);
        if (e.type === "click") {
            if (e.ctrlKey) {
                console.log("Click+ctrl");
                updatedHabit.stats[dayName] = {
                    status: Status.NEUTRAL,
                    dayPotential
                };
            } else {
                updatedHabit.stats[dayName] = {
                    status: Status.DONE,
                    dayPotential
                };
            }
        } else if (e.type === "contextmenu") {
            updatedHabit.stats[dayName] = {
                status: Status.NOT_SPECIFIED,
                dayPotential
            };
        }

        const updatedHabits = replaceById(habitsState, updatedHabit);
        setHabitsState(updatedHabits);
    };

    const doubleClickCellHandler = (habit, dayName, dayPotential) => {
        const updatedHabit = cloneObject(habit);
        updatedHabit.stats[dayName] = {
            status: Status.FAILED,
            dayPotential
        };

        const updatedHabits = replaceById(habitsState, updatedHabit);

        setHabitsState(updatedHabits);
    };

    const inputDayPotentialHandler = (
        e,
        habitWithDayPotentialData,
        dayName
    ) => {
        const inputValue = e.target.value;

        if (parseInt(inputValue) > 10 || parseInt(inputValue) <= 0) {
            alert("Вы ввели недопустимое значение, введите число от 1 до 10");
        } else {
            const updatedHabit = cloneObject(habitWithDayPotentialData);
            updatedHabit.stats[dayName].dayPotential = inputValue;

            const { habits } = this.state;
            const updatedHabits = replaceById(habits, updatedHabit);

            this.setState({ habits: updatedHabits });
        }
    };

    const handleHabitNameAndMeasuringOnClick = (e, inputType) => {
        const nameInputButtons = e.target.nextSibling;
        console.log("it's input target", e.target);
        console.log("it's buttons target", nameInputButtons);

        inputType === "habitName"
            ? nameInputButtons.classList.add(`${HabitNameStyles.buttonsShow}`)
            : nameInputButtons.classList.add(
                  `${HabitMeasureStyles.buttonsShow}`
              );
    };

    const handleHabitNameOnChange = (e, habit) => {
        this.setState({ inputState: e.target.value });
    };

    const handleMeasuringValueChange = (e, habit) => {
        const { habits } = this.state;
        const measuringValue = e.target.value;
        const updatedHabits = Habit.updateHabit(habits, habit, {
            measuringValue
        });
        this.setState({ habits: updatedHabits });
    };

    const listOfHabitsNames = habits.map(habit => {
        return (
            <HabitName
                key={habit.id}
                habit={habit}
                inputState={inputState}
                handleHabitNameOnChange={handleHabitNameOnChange}
                handleHabitNameOnClick={handleHabitNameAndMeasuringOnClick}
            />
        );
    });
    // input -> enter was pressed -> updateHabit
    //                                   |--> success
    //                                   |--> validation failed
    const listOfMeasureValue = habits.map(habit => (
        <HabitMeasure
            key={habit.id}
            habit={habit}
            onMeasuringValueChange={handleMeasuringValueChange}
            handleHabitMeasuringOnClick={handleHabitNameAndMeasuringOnClick}
        />
    ));

    return (
        <div className="table-wrapper container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Навык</th>
                        {listOfHabitsNames}
                        <td>Потенциал дня</td>
                    </tr>
                    <tr>
                        <th>Норма</th>
                        {listOfMeasureValue}
                        <td>1...10</td>
                    </tr>
                </thead>
                <tbody>
                    {weekDays.map((day, dayOrderNumber) => (
                        <tr className="status-cell" key={day.toString()}>
                            <th scope="row">{day.format("DD.MM.YY dd")}</th>
                            {habitsState.map(habit => (
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
                            <td>
                                <input
                                    type="number"
                                    className="day-patential-input"
                                    value={
                                        habits[0].stats[
                                            dayNumberToDayName[dayOrderNumber]
                                        ].dayPotential
                                    }
                                    onChange={e =>
                                        inputDayPotentialHandler(
                                            e,
                                            habits[0],
                                            dayNumberToDayName[dayOrderNumber]
                                        )
                                    }
                                ></input>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
