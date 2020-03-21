import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Style from "./habitName.module.scss";

const HabitNames = ({
    habit,
    inputState,
    inputHabitNameHandler,
    habitInputOnEnterPress
}) => {
    return (
        <td>
            <form className={Style.habitNameForm}>
                <input
                    className="habit-name-input"
                    value={habit.name}
                    onChange={e => inputHabitNameHandler(e, habit)}
                ></input>
                <div className={Style.habitNameButtons}>
                    <FontAwesomeIcon
                        className={Style.habitNameIconCheck}
                        icon={faCheck}
                    />
                    <FontAwesomeIcon
                        className={Style.habitNameIconDeny}
                        icon={faTimes}
                    />
                </div>
            </form>
        </td>
    );
};

export default HabitNames;
