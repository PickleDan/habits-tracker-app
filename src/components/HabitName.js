import React from "react";

const HabitNames = ({
  habit,
  inputHabitNameHandler,
  habitInputOnEnterPress
}) => {
  return (
    <td>
      <input
        className="habit-name-input"
        value={habit.name}
        onChange={e => inputHabitNameHandler(e, habit)}
        onKeyPress={e => habitInputOnEnterPress(e)}
      ></input>
    </td>
  );
};

export default HabitNames;
