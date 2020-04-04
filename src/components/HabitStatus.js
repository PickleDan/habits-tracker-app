import React from "react";
import GreenMark from "./statusMarks/GreenMark";
import RedMark from "./statusMarks/RedMark";
import NeutralMark from "./statusMarks/NeutralMark";

const Status = {
    DONE: "DONE",
    FAILED: "FAILED",
    NEUTRAL: "NEUTRAL",
    NOT_SPECIFIED: "NOT_SPECIFIED"
};

const habitStatusComponents = {
    [Status.DONE]: GreenMark,
    [Status.FAILED]: RedMark,
    [Status.NEUTRAL]: NeutralMark,
    [Status.NOT_SPECIFIED]: () => null
};

const getHabitStatusComponent = status =>
    habitStatusComponents[status] ||
    habitStatusComponents[Status.NOT_SPECIFIED];

const HabitStatus = ({ habit, onClickCell, onDoubleClickCell, dayName }) => {
    const { status: habitStatus } = habit.stats[dayName];
    const { dayPotential } = habit.stats[dayName];

    const StatusComponent = getHabitStatusComponent(habitStatus);

    return (
        <div
            onClick={e => onClickCell(habit, dayName, dayPotential, e)}
            onContextMenu={e => onClickCell(habit, dayName, dayPotential, e)}
            onDoubleClick={() =>
                onDoubleClickCell(habit, dayName, dayPotential)
            }
            className="habit-status-container"
        >
            <StatusComponent />
        </div>
    );
};

export { HabitStatus, Status };
