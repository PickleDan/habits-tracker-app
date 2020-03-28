import React from "react";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitMeasureStyles from "./HabitMeasure.module.scss";
import cn from "classnames";

const HabitMeasure = ({
    habit,
    handleHabitMeasuringOnClick,
    onBlurHabitMeasuring,
    editingMode,
    handleHabitMeasureOnChange,
    inputState
}) => {
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconCheck}
                icon={faCheck}
            />
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconDeny}
                icon={faTimes}
            />
        </>
    );
    return (
        <td key={habit.id}>
            <form className={HabitMeasureStyles.habitMeasuringForm}>
                <input
                    className="measuring-value-input"
                    value={inputState[habit.id - 1]}
                    spellCheck="false"
                    onClick={() => handleHabitMeasuringOnClick(habit)}
                    onChange={e => handleHabitMeasureOnChange(e, habit)}
                    onBlur={onBlurHabitMeasuring}
                ></input>
                <div className={cn(HabitMeasureStyles.habitMeasuringButtons)}>
                    {editingMode[habit.id - 1] ? icons : undefined}
                </div>
            </form>
        </td>
    );
};

export { HabitMeasure, HabitMeasureStyles };