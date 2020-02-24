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

const HabitStatus = ({ habitStatus, onClick }) => {
  const StatusComponent = getHabitStatusComponent(habitStatus);

  return (
    <div className="habit-status-container" onClick={onClick}>
      <StatusComponent />
    </div>
  );
};

export default HabitStatus;
