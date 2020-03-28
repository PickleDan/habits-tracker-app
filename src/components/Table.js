import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import { HabitStatus } from "./HabitStatus";
import { Status } from "./HabitStatus";
import cloneObject from "../utils/cloneObject";
import replaceById from "../utils/replaceById";
import { HabitName } from "./habitName/HabitName";
import { HabitMeasure } from "./habitMeasure/HabitMeasure";
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
    console.log(weekDays);

    const [habitsState, setHabitsState] = useState(habits);

    const [inputHabitNameState, setInputHabitNameState] = useState(
        habitsState.map(habit => habit.name)
    );

    const [inputHabitMeasureState, setInputHabitMeasureState] = useState(
        habitsState.map(habit => habit.measuringValue)
    );

    const [inputDayPotentialState, setInputDayPotentialState] = useState([
        4,
        6,
        1,
        5,
        7,
        8,
        6
    ]);

    const [editingNameMode, setEditingNameMode] = useState(
        habitsState.map(() => false)
    );

    const [editingMeasureMode, setEditingMeasureMode] = useState(
        habitsState.map(() => false)
    );

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

    const inputDayPotentialHandler = (e, dayOrderNumber) => {
        const inputValue = e.target.value;
        if (parseInt(inputValue) > 10 || parseInt(inputValue) <= 0) {
            alert("Вы ввели недопустимое значение, введите число от 1 до 10");
        } else {
            const cloneDayPotentialState = [...inputDayPotentialState];
            cloneDayPotentialState[dayOrderNumber] = e.target.value;
            setInputDayPotentialState(cloneDayPotentialState);
        }
    };

    const handleHabitNameOnClick = habit => {
        const clonedEditingMode = [...editingNameMode];
        clonedEditingMode[habit.id - 1] = true;
        setEditingNameMode(clonedEditingMode);
    };

    const onBlurHabitName = () =>
        setEditingNameMode(editingNameMode.map(() => false));

    const handleHabitNameOnChange = (e, habit) => {
        const updatedHabitNameInput = inputHabitNameState.map(
            (name, nameId) => {
                return habit.id - 1 === nameId ? e.target.value : name;
            }
        );
        setInputHabitNameState([updatedHabitNameInput]);
    };

    const handleHabitMeasuringOnClick = habit => {
        const clonedEditingMode = [...editingMeasureMode];
        clonedEditingMode[habit.id - 1] = true;
        setEditingMeasureMode(clonedEditingMode);
    };

    const onBlurHabitMeasuring = () =>
        setEditingMeasureMode(editingMeasureMode.map(() => false));

    const handleHabitMeasureOnChange = (e, habit) => {
        const updatedHabitMeasureInput = inputHabitMeasureState.map(
            (measure, measureId) => {
                return habit.id - 1 === measureId ? e.target.value : measure;
            }
        );
        setInputHabitMeasureState(updatedHabitMeasureInput);
    };

    const listOfHabitsNames = habits.map(habit => {
        return (
            <HabitName
                key={habit.id}
                habit={habit}
                handleHabitNameOnClick={handleHabitNameOnClick}
                editingMode={editingNameMode}
                onBlurHabitName={onBlurHabitName}
                handleHabitNameOnChange={handleHabitNameOnChange}
                inputState={inputHabitNameState}
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
            handleHabitMeasuringOnClick={handleHabitMeasuringOnClick}
            onBlurHabitMeasuring={onBlurHabitMeasuring}
            editingMode={editingMeasureMode}
            setEditingMode={setEditingMeasureMode}
            handleHabitMeasureOnChange={handleHabitMeasureOnChange}
            inputState={inputHabitMeasureState}
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
                                        inputDayPotentialState[dayOrderNumber]
                                    }
                                    onChange={e =>
                                        inputDayPotentialHandler(
                                            e,
                                            dayOrderNumber
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
