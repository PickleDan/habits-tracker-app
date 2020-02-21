import React from "react";
import moment from "moment";
import "moment/locale/ru";

import GreenMark from "./StatusMarks/GreenMark";
import RedMark from "./StatusMarks/RedMark";
import NeutralMark from "./StatusMarks/NeutralMark";
import daysOfWeek from "./DaysOfWeek";

moment.locale("ru");

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

export default function Table({ HABITS }) {
  const listOfHabitsNames = HABITS.map(habit => <td>{habit.name}</td>);

  const listOfMeasureValue = HABITS.map(habit => (
    <td>{habit.measuringValue}</td>
  ));

  return (
    <div className="table-wrapper container">
      <table className="table table-bordered">
        <tr>
          <th>Навык</th>
          {listOfHabitsNames}
          <td>Потенциал дня</td>
        </tr>
        <tr>
          <th>Норма</th>
          {listOfMeasureValue}
          <td>1...10</td>
        </tr>
        {daysOfWeek.map((day, dayOrderNumber) => (
          <tr className="status-cell">
            <th scope="row">
              {moment(day, "DD.MM.YYYY").format("DD.MM.YY dd")}
            </th>
            {HABITS.map(habit => (
              <td>
                {habit.stats[dayOrderNumber].status === Status.DONE ? (
                  <GreenMark />
                ) : habit.stats[dayOrderNumber].status === Status.FAILED ? (
                  <RedMark />
                ) : (
                  <NeutralMark />
                )}
              </td>
            ))}
            <td>8</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
