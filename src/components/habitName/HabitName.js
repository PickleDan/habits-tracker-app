import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import HabitNameStyles from "./HabitName.module.scss";
import cn from "classnames";

const HabitName = ({
    habit,
    handleHabitNameOnClick,
    editingMode,
    onBlurHabitName,
    handleHabitNameOnChange,
    inputState
}) => {
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconCheck}
                icon={faCheck}
            />
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconDeny}
                icon={faTimes}
            />
        </>
    );
    return (
        <td>
            <form className={HabitNameStyles.habitNameForm}>
                <input
                    className="habit-name-input"
                    value={inputState[habit.id - 1]}
                    onChange={e => handleHabitNameOnChange(e, habit)}
                    onClick={() => handleHabitNameOnClick(habit)}
                    onBlur={onBlurHabitName}
                ></input>

                <div className={cn(HabitNameStyles.habitNameButtons)}>
                    {editingMode[habit.id - 1] ? icons : undefined}
                </div>
            </form>
        </td>
    );
};

export { HabitName, HabitNameStyles };
