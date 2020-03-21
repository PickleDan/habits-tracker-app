import React from "react";

const HabitNames = ({
  habit,
  inputState,
  inputHabitNameHandler,
  habitInputOnEnterPress
}) => {
  return (
    <td>
      <input
        className="habit-name-input"
        value={habit.name}
        onChange={e => inputHabitNameHandler(e, habit)}
      ></input>
    </td>
  );
};

export default HabitNames;
