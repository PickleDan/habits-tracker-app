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

const dayNumberToDayName = {
  0: "MONDAY",
  1: "TUESDAY",
  2: "WEDNESDAY",
  3: "THURSDAY",
  4: "FRIDAY",
  5: "SATURDAY",
  6: "SUNDAY"
};
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

    const greenAndNeutralMarksHandler = (habit, dayName, dayPotential, e) => {
      const updatedHabit = cloneObject(habit);
      if (e.ctrlKey) {
        updatedHabit.stats[dayName] = { status: Status.NEUTRAL, dayPotential };
      } else {
        updatedHabit.stats[dayName] = {
          status: Status.DONE,
          dayPotential
        };
      }

      const { habits } = this.state;
      const updatedHabits = replaceById(habits, updatedHabit);

      this.setState({ habits: updatedHabits });
    };

    const redMarkHandler = (habit, dayName, dayPotential) => {
      const updatedHabit = cloneObject(habit);
      updatedHabit.stats[dayName] = { status: Status.FAILED, dayPotential };

      const { habits } = this.state;
      const updatedHabits = replaceById(habits, updatedHabit);

      this.setState({ habits: updatedHabits });
    };

    const inputDayPotentialHandler = (
      e,
      habitWithDayPotentialData,
      dayName
    ) => {
      const inputValue = e.target.value;

      if (parseInt(inputValue) > 10 || parseInt(inputValue) <= 0) {
        alert("Вы ввели недопустимое значение, введите число от 1 до 10");
      } else {
        const updatedHabit = cloneObject(habitWithDayPotentialData);

        updatedHabit.stats[dayName].dayPotential = inputValue;

        const updatedHabits = replaceById(habits, updatedHabit);

        this.setState({ habits: updatedHabits });
      }
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
                      dayName={dayNumberToDayName[dayOrderNumber]}
                      habit={habit}
                    />
                  </td>
                ))}
                <td>
                  <input
                    type="number"
                    className="day-patential-input"
                    value={
                      habits[0].stats[dayNumberToDayName[dayOrderNumber]]
                        .dayPotential
                    }
                    onChange={e =>
                      inputDayPotentialHandler(
                        e,
                        habits[0],
                        dayNumberToDayName[dayOrderNumber]
                      )
                    }
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
