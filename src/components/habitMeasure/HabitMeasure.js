import React from "react";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HabitMeasureStyles from "./HabitMeasure.module.scss";

const HabitMeasure = ({
    habit,
    onMeasuringValueChange,
    handleHabitMeasuringOnClick
}) => {
    return (
        <td key={habit.id}>
            <form className={HabitMeasureStyles.habitMeasuringForm}>
                <input
                    className="measuring-value-input"
                    value={habit.measuringValue}
                    spellCheck="false"
                    onClick={e =>
                        handleHabitMeasuringOnClick(e, "habitMeasuring")
                    }
                ></input>
                <div
                    className={` ${HabitMeasureStyles.habitMeasuringButtons}, ${HabitMeasureStyles.habitMeasuringButtonsHidden}`}
                >
                    <FontAwesomeIcon
                        className={HabitMeasureStyles.habitMeasuringIconCheck}
                        icon={faCheck}
                    />
                    <FontAwesomeIcon
                        className={HabitMeasureStyles.habitMeasuringIconDeny}
                        icon={faTimes}
                    />
                </div>
            </form>
        </td>
    );
};

export { HabitMeasure, HabitMeasureStyles };
