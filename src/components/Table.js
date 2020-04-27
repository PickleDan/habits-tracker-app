import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { HabitStatus } from "./HabitStatus";
import { Status } from "./HabitStatus";
import cloneObject from "../utils/cloneObject";

moment.locale("ru");

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

    const greenAndNeutralMarksHandler = (habit, dayOrderNumber, e) => {
      const updatedHabit = cloneObject(habit);
      if (e.ctrlKey) {
        updatedHabit.stats[dayOrderNumber] = { status: Status.NEUTRAL };
      } else {
        updatedHabit.stats[dayOrderNumber] = {
          status: Status.DONE
        };
      }

      const { habits } = this.state;
      const updatedHabits = replaceById(habits, updatedHabit);

      this.setState({ habits: updatedHabits });
    };

    const redMarkHandler = (habit, dayOrderNumber) => {
      const updatedHabit = cloneObject(habit);
      updatedHabit.stats[dayOrderNumber] = { status: Status.FAILED };

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
                      onClickCell={greenAndNeutralMarksHandler}
                      onDoubleClickCell={redMarkHandler}
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
