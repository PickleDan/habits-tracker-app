import React from "react";

const HabitMeasure = ({
  habit,
  inputMeasuringValueHandler,
  habitInputOnEnterPress
}) => {
  return (
    <td key={habit.id}>
      <input
        className="measuring-value-input"
        value={habit.measuringValue}
        onChange={e => inputMeasuringValueHandler(e, habit)}
        onKeyPress={e => habitInputOnEnterPress(e)}
        spellCheck="false"
      ></input>
    </td>
  );
};

export default HabitMeasure;
