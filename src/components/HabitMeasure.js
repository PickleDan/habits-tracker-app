import React from "react";

const HabitMeasure = ({
  habit,
  onMeasuringValueChange,
  onHabitInputEnterPress
}) => {
  return (
    <td key={habit.id}>
      <input
        className="measuring-value-input"
        value={habit.measuringValue}
        onKeyPress={e => onMeasuringValueChange(e, habit)}
        spellCheck="false"
      ></input>
    </td>
  );
};

export default HabitMeasure;
