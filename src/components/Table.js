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

const cloneObject = obj => JSON.parse(JSON.stringify(obj));

const replaceById = (collection, replacement) =>
  collection.map(replacable => {
    if (replacable.id === replacement.id) {
      return replacement;
    }
    return replacable;
  });

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    const { habits } = props;
    this.state = { habits };
  }

  render() {
    const { habits } = this.state;
    const listOfHabitsNames = habits.map(habit => (
      <td key={habit.id}>{habit.name}</td>
    ));

    const listOfMeasureValue = habits.map(habit => (
      <td key={habit.id}>{habit.measuringValue}</td>
    ));

    const handleStatusChange = (habit, dayOrderNumber) => {
      console.log(habit);
      console.log(dayOrderNumber);
      const updatedHabit = cloneObject(habit);
      updatedHabit.stats[dayOrderNumber] = { status: Status.DONE };

      const { habits } = this.state;
      const updatedHabits = replaceById(habits, updatedHabit);

      this.setState({ habits: updatedHabits });
    };

    const { weekDays } = this.props;

    return (
      <div className="table-wrapper container">
        <table className="table table-bordered">
          <thead>
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
          </thead>
          <tbody>
            {weekDays.map((day, dayOrderNumber) => (
              <tr className="status-cell" key={day.toString()}>
                <th scope="row">{day.format("DD.MM.YY dd")}</th>
                {habits.map(habit => (
                  <td key={habit.id}>
                    <HabitStatus
                      onClickCell={handleStatusChange}
                      dayOrderNumber={dayOrderNumber}
                      habit={habit}
                    />
                  </td>
                ))}
                <td>8</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
