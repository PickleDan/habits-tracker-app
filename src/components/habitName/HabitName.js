import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import HabitNameStyles from "./HabitName.module.scss";
import cn from "classnames";
import { ClickAwayListener } from "@material-ui/core";
const HabitName = ({
    habit,
    handleHabitNameOnClick,
    editingMode,
    handleHabitNameOnChange,
    inputState,
    handleAcceptIcon
}) => {
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconCheck}
                icon={faCheck}
                onClick={e => handleAcceptIcon(habit)}
            />
            <FontAwesomeIcon
                className={HabitNameStyles.habitNameIconDeny}
                icon={faTimes}
            />
        </>
    );

    return (
        <td onClick={() => handleHabitNameOnClick(habit)}>
            <form className={HabitNameStyles.habitNameForm}>
                <input
                    className="habit-name-input"
                    value={inputState[habit.id - 1]}
                    onChange={e => handleHabitNameOnChange(e, habit)}
                ></input>

                <div className={cn(HabitNameStyles.habitNameButtons)}>
                    {editingMode[habit.id - 1] ? icons : null}
                </div>
            </form>
        </td>
    );
};

export { HabitName, HabitNameStyles };
