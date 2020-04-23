import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import HabitNameStyles from "./HabitName.module.scss";
import { ClickAwayListener } from "@material-ui/core";
import cn from "classnames";
const HabitName = ({ habit, handleAcceptIcon, onDeleteHabit }) => {
    const onClickAway = () => {
        setEditingMode(false);
    };
    const [inputState, setInputState] = useState(habit.name);
    const [editingMode, setEditingMode] = useState(false);
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconCheck}
                icon={faCheck}
                onClick={(e) =>
                    handleAcceptIcon({ name: inputState, id: habit.id })
                }
            />
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconDeny}
                icon={faTimes}
            />
        </>
    );
    console.log(habit);
    const deleteHabit = (
        <FontAwesomeIcon
            className={HabitNameStyles.deleteHabit}
            icon={faTrash}
            onClick={() => onDeleteHabit(habit)}
        />
    );

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <th className={HabitNameStyles.nameTh} onClick={() => setEditingMode(true)}>
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
    );
};

export { HabitName, HabitNameStyles };
