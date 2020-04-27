import React from "react";
import GreenMark from "./StatusMarks/GreenMark";
import RedMark from "./StatusMarks/RedMark";
import NeutralMark from "./StatusMarks/NeutralMark";

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
  habitStatusComponents[status] || habitStatusComponents[Status.NOT_SPECIFIED];

const HabitStatus = ({
  habit,
  dayOrderNumber,
  onClickCell,
  onDoubleClickCell,
  dayName
}) => {
  const { status: habitStatus } = habit.stats[dayName];
  const { dayPotential } = habit.stats[dayName];

  const StatusComponent = getHabitStatusComponent(habitStatus);

  return (
    <div
      onClick={e => onClickCell(habit, dayName, dayPotential, e)}
      onDoubleClick={() => onDoubleClickCell(habit, dayName, dayPotential)}
      className="habit-status-container"
    >
      <StatusComponent />
    </div>
  );
};

export { HabitStatus, Status };
