import React, { useState } from "react";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitMeasureStyles from "./HabitMeasure.module.scss";
import { ClickAwayListener } from "@material-ui/core";
import cn from "classnames";

const HabitMeasure = ({ habit, handleAcceptIcon }) => {
    const [inputState, setInputState] = useState(habit.measuringValue);
    const [editingMode, setEditingMode] = useState(false);
    const onClickAway = () => {
        setEditingMode(false);
    };
    const icons = (
        <>
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconCheck}
                icon={faCheck}
                onClick={(e) =>
                    handleAcceptIcon({ id: habit.id, measure: inputState })
                }
            />
            <FontAwesomeIcon
                className={HabitMeasureStyles.habitMeasuringIconDeny}
                icon={faTimes}
            />
        </>
    );
    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <th key={habit.id} onClick={() => setEditingMode(true)}>
                <form className={HabitMeasureStyles.habitMeasuringForm}>
                    <input
                        className="measuring-value-input"
                        value={inputState}
                        spellCheck="false"
                        onChange={(e) => setInputState(e.target.value)}
                    ></input>
                    <div
                        className={cn(HabitMeasureStyles.habitMeasuringButtons)}
                    >
                        {editingMode && icons}
                    </div>
                </form>
            </th>
        </ClickAwayListener>
    );
};

export { HabitMeasure, HabitMeasureStyles };
