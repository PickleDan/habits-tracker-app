import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import HabitNameStyles from "./HabitName.module.scss";

const HabitName = ({
    habit,
    inputState,
    handleHabitNameOnChange,
    handleHabitNameOnClick
}) => {
    return (
        <td>
            <form className={HabitNameStyles.habitNameForm}>
                <input
                    className="habit-name-input"
                    value={habit.name}
                    onChange={e => handleHabitNameOnChange(e, habit)}
                    onClick={e => handleHabitNameOnClick(e, "habitName")}
                ></input>
                <div
                    className={` ${HabitNameStyles.habitNameButtons}, ${HabitNameStyles.habitNameButtonsHidden}`}
                >
                    <FontAwesomeIcon
                        className={HabitNameStyles.habitNameIconCheck}
                        icon={faCheck}
                    />
                    <FontAwesomeIcon
                        className={HabitNameStyles.habitNameIconDeny}
                        icon={faTimes}
                    />
                </div>
            </form>
        </td>
    );
};

export { HabitName, HabitNameStyles };
