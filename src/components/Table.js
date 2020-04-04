import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import { HabitStatus } from "./HabitStatus";
import { Status } from "./HabitStatus";
import cloneObject from "../utils/cloneObject";
import replaceById from "../utils/replaceById";
import { HabitName } from "./habitName/HabitName";
import { HabitMeasure } from "./habitMeasure/HabitMeasure";
import { ClickAwayListener } from "@material-ui/core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";

moment.locale("ru");

const dayNumberToDayName = {
    0: "MONDAY",
    1: "TUESDAY",
    2: "WEDNESDAY",
    3: "THURSDAY",
    4: "FRIDAY",
    5: "SATURDAY",
    6: "SUNDAY",
};
const Table = ({ habits, weekDays }) => {
    const [habitsState, setHabitsState] = useState(habits);

    // const [inputHabitNameState, setInputHabitNameState] = useState(
    //     habitsState.map(habit => habit.name)
    // );

    const [inputHabitMeasureState, setInputHabitMeasureState] = useState(
        habitsState.map((habit) => habit.measuringValue)
    );

    // useEffect(() => {
    //     setInputHabitNameState(habitsState.map(habit => habit.name));
    //     setInputHabitMeasureState(habitsState.map(habit => habit.measuringValue));
    // }, [habitsState])

    const [inputDayPotentialState, setInputDayPotentialState] = useState([
        4,
        6,
        1,
        5,
        7,
        8,
        6,
    ]);

    const [editingNameMode, setEditingNameMode] = useState(
        habitsState.map(() => false)
    );

    const [editingMeasureMode, setEditingMeasureMode] = useState(
        habitsState.map(() => false)
    );

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [newHabitAdding, setNewHabitAdding] = useState({
        id: habitsState.length + 1,
        name: "",
        measuringValue: "",
        stats: {
            MONDAY: { status: Status.NOT_SPECIFIED },
            TUESDAY: { status: Status.NOT_SPECIFIED },
            WEDNESDAY: { status: Status.NOT_SPECIFIED },
            THURSDAY: { status: Status.NOT_SPECIFIED },
            FRIDAY: { status: Status.NOT_SPECIFIED },
            SATURDAY: { status: Status.NOT_SPECIFIED },
            SUNDAY: { status: Status.NOT_SPECIFIED },
        },
    });

    const oneClickCellHandler = (habit, dayName, dayPotential, e) => {
        e.preventDefault();
        const updatedHabit = cloneObject(habit);
        if (e.type === "click") {
            if (e.ctrlKey) {
                console.log("Click+ctrl");
                updatedHabit.stats[dayName] = {
                    status: Status.NEUTRAL,
                    dayPotential,
                };
            } else {
                updatedHabit.stats[dayName] = {
                    status: Status.DONE,
                    dayPotential,
                };
            }
        } else if (e.type === "contextmenu") {
            updatedHabit.stats[dayName] = {
                status: Status.NOT_SPECIFIED,
                dayPotential,
            };
        }
        const updatedHabits = replaceById(habitsState, updatedHabit);
        setHabitsState(updatedHabits);
    };

    const doubleClickCellHandler = (habit, dayName, dayPotential) => {
        const updatedHabit = cloneObject(habit);
        updatedHabit.stats[dayName] = {
            status: Status.FAILED,
            dayPotential,
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

    const handleHabitNameOnClick = (habit) => {
        const clonedEditingMode = [...editingNameMode];
        clonedEditingMode[habit.id - 1] = true;

        setEditingNameMode(clonedEditingMode);
    };

    const onClickAwayHabitName = () =>
        setEditingNameMode(editingNameMode.map(() => false));

    const handleHabitMeasuringOnClick = (habit) => {
        const clonedEditingMode = [...editingMeasureMode];
        clonedEditingMode[habit.id - 1] = true;
        setEditingMeasureMode(clonedEditingMode);
    };

    const handleHabitMeasureOnChange = (e, habit) => {
        const updatedHabitMeasureInput = inputHabitMeasureState.map(
            (measure, measureId) => {
                return habit.id - 1 === measureId ? e.target.value : measure;
            }
        );
        setInputHabitMeasureState(updatedHabitMeasureInput);
    };

    const handleNameAcceptIcon = (newHabit) => {
        if (newHabit.length > 25 || newHabit.length < 3) {
            alert(
                "Вы ввели недопустимое значение, количество символов не должно превышать 25 и быть меньше 3. Ваши данные НЕ сохранятся."
            );
        } else {
            const updatedHabits = replaceById(habitsState, newHabit);
            setHabitsState(updatedHabits);
            alert("Вы успешно сохранили название привычки!");
            onClickAwayHabitName(); //Doesn't work, find out why so}
        }
    };

    const handleMeasureAcceptIcon = (newHabit) => {
        console.log("new habbit is come", newHabit);
        if (newHabit.name.length > 25 || newHabit.name.length < 3) {
            alert(
                "Вы ввели недопустимое значение, количество символов не должно превышать 25 и быть меньше 3. Ваши данные НЕ сохранятся."
            );
        } else {
            const updatedHabits = replaceById(habitsState, newHabit);
            setHabitsState(updatedHabits);
            alert("Вы успешно сохранили меру привычки!");
            onClickAwayHabitName(); //Doesn't work, find out why so}
        }
    };

    const handlePlusIconClick = () => setModalIsOpen(true);

    const onChangeHabitNameModal = (e) => {
        const inputValue = e.target.value;
        const clonedHabit = cloneObject(newHabitAdding);
        clonedHabit.name = inputValue;
        setNewHabitAdding(clonedHabit);
    };

    const onChangeHabitMeasureModal = (e) => {
        const inputValue = e.target.value;
        const clonedHabit = cloneObject(newHabitAdding);
        clonedHabit.measuringValue = inputValue;
        setNewHabitAdding(clonedHabit);
    };

    const saveNewHabit = (e) => {
        e.preventDefault();
        const clonedHabits = cloneObject(habitsState);
        clonedHabits.push(newHabitAdding);
        setHabitsState(clonedHabits);
        setModalIsOpen(false);
    };

    const onClickCancelModal = (e) => {
        e.preventDefault();
        setModalIsOpen(false);
    };

    console.log({ habitsState });
    const listOfHabitsNames = habitsState.map((habit) => {
        return (
            <HabitName
                key={habit.id}
                habit={habit}
                handleHabitNameOnClick={handleHabitNameOnClick}
                editingMode={editingNameMode}
                habitsState={habitsState}
                handleAcceptIcon={handleNameAcceptIcon}
            />
        );
    });

    const listOfMeasureValue = habitsState.map((habit) => (
        <HabitMeasure
            key={habit.id}
            habit={habit}
            handleHabitMeasuringOnClick={handleHabitMeasuringOnClick}
            editingMode={editingMeasureMode}
            handleHabitMeasureOnChange={handleHabitMeasureOnChange}
            inputState={inputHabitMeasureState}
            handleAcceptIcon={handleMeasureAcceptIcon}
        />
    ));

    const customModalStyles = {
        content: {
            backgroundColor: "#2364aa",
            color: "#fff",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
        },
    };
    Modal.setAppElement("#root");
    return (
        <div className="table-wrapper container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customModalStyles}
            >
                <h2 className="modal-title">Введите данные о привычке</h2>
                <form>
                    <div className="modal-inputs">
                        <div className="modal-inputs-item">
                            <input
                                onChange={(e) => onChangeHabitNameModal(e)}
                                placeholder="Введите название новой привычки"
                            />
                        </div>

                        <div className="modal-inputs-item">
                            <input
                                onChange={(e) => onChangeHabitMeasureModal(e)}
                                placeholder="Введите норму привычки"
                            ></input>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={(e) => onClickCancelModal(e)}>
                            Отменить
                        </button>
                        <button onClick={(e) => saveNewHabit(e)}>
                            Сохранить
                        </button>
                    </div>
                </form>
            </Modal>
            <FontAwesomeIcon
                onClick={() => handlePlusIconClick()}
                size="2x"
                icon={faPlusCircle}
                className="plusIcon"
            />
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
                            {habitsState.map((habit) => (
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
                                    onChange={(e) =>
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
