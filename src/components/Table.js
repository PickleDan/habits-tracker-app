import React from "react";
import moment from "moment";
import GreenMark from "./StatusMarks/GreenMark";
import RedMark from "./StatusMarks/RedMark";
import NeutralMark from "./StatusMarks/NeutralMark";

export default function Table() {
  const habitsNamesHead = [
    "Навык",
    "Отслеживание привычки",
    "Чтение книги",
    "Спортзал",
    "Ранний подъем",
    "Потенциал дня"
  ];

  const measureValueHead = [
    "Норма",
    "Ежедневно",
    "30мин/день",
    "3р/нед",
    "6:30",
    "1...10"
  ];

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

  const listOfHabitsNames = habitsNamesHead.map(habitName => (
    <td>{habitName}</td>
  ));

  const listOfMeasureValue = measureValueHead.map(measure => (
    <td>{measure}</td>
  ));

  return (
    <div className="table-wrapper container">
      <table className="table table-bordered">
        <tr>{listOfHabitsNames}</tr>
        <tr>{listOfMeasureValue}</tr>
        <tr className="status-cell">
          <th scope="row">{monday.toLocaleDateString()}</th>
          <GreenMark />
          <GreenMark />
          <GreenMark />
          <GreenMark />
          <td>8</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{tuesday.toLocaleDateString()}</th>
          <GreenMark />
          <GreenMark />
          <NeutralMark />
          <RedMark />
          <td>6</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{wednesday.toLocaleDateString()}</th>
          <GreenMark />
          <GreenMark />
          <NeutralMark />
          <GreenMark />
          <td>5</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{thursday.toLocaleDateString()}</th>
          <GreenMark />
          <RedMark />
          <GreenMark />
          <GreenMark />
          <td>7</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{friday.toLocaleDateString()}</th>
          <GreenMark />
          <RedMark />
          <NeutralMark />
          <GreenMark />
          <td>5</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{saturday.toLocaleDateString()}</th>
          <GreenMark />
          <GreenMark />
          <GreenMark />
          <GreenMark />
          <td>9</td>
        </tr>
        <tr className="status-cell">
          <th scope="row">{sunday.toLocaleDateString()}</th>
          <GreenMark />
          <GreenMark />
          <NeutralMark />
          <GreenMark />
          <td>8</td>
        </tr>
      </table>
    </div>
  );
}
