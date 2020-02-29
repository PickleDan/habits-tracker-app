import React from "react";
import GreenMark from "./StatusMarks/GreenMark";
import RedMark from "./StatusMarks/RedMark";
import NeutralMark from "./StatusMarks/NeutralMark";

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

export default function Table({ HABITS }) {
  function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  function getDayFromMonday(num) {
    const date = new Date();
    return new Date(date.setDate(monday.getDate() + num));
  }

  const monday = getMonday(new Date());
  const tuesday = getDayFromMonday(1);
  const wednesday = getDayFromMonday(2);
  const thursday = getDayFromMonday(3);
  const friday = getDayFromMonday(4);
  const saturday = getDayFromMonday(5);
  const sunday = getDayFromMonday(6);

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
        {[monday, tuesday, wednesday, thursday, friday, saturday, sunday].map(
          (day, dayOrderNumber) => (
            <tr className="status-cell">
              <th scope="row">{day.toLocaleDateString()}</th>
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
          )
        )}
      </table>
    </div>
  );
}
