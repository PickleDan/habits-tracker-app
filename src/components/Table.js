import React from "react";
import moment from "moment";
import "moment/locale/ru";

import HabitStatus from "./HabitStatus";

moment.locale("ru");

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NEUTRAL: "NEUTRAL",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      READING_HABIT: {
        name: "Чтение",
        measuringValue: "Каждый день",
        stats: [
          { status: Status.DONE },
          { status: Status.FAILED },
          { status: Status.FAILED },
          { status: Status.DONE },
          { status: Status.FAILED },
          { status: Status.NOT_SPECIFIED },
          { status: Status.NOT_SPECIFIED }
        ]
      },
      GYM_HABIT: {
        name: "Спортзал",
        measuringValue: "3р/нед",
        stats: [
          { status: Status.DONE },
          { status: Status.FAILED },
          { status: Status.FAILED },
          { status: Status.DONE },
          { status: Status.NEUTRAL },
          { status: Status.NOT_SPECIFIED },
          { status: Status.NOT_SPECIFIED }
        ]
      },
      EARLY_RISE_HABIT: {
        name: "Ранний подъем",
        measuringValue: "6:30",
        stats: [
          { status: Status.DONE },
          { status: Status.FAILED },
          { status: Status.FAILED },
          { status: Status.FAILED },
          { status: Status.FAILED },
          { status: Status.NOT_SPECIFIED },
          { status: Status.NOT_SPECIFIED }
        ]
      }
    };
  }

  render() {
    const HABITS = [
      this.state.READING_HABIT,
      this.state.GYM_HABIT,
      this.state.EARLY_RISE_HABIT
    ];
    const listOfHabitsNames = HABITS.map(habit => <td>{habit.name}</td>);

    const listOfMeasureValue = HABITS.map(habit => (
      <td>{habit.measuringValue}</td>
    ));

    const { weekDays } = this.props;

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
          {weekDays.map((day, dayOrderNumber) => (
            <tr className="status-cell">
              <th scope="row">{day.format("DD.MM.YY dd")}</th>
              {HABITS.map(habit => (
                <td>
                  <HabitStatus
                    habitStatus={habit.stats[dayOrderNumber].status}
                  />
                </td>
              ))}
              <td>8</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
