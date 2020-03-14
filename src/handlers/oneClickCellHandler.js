import { Status } from "../components/HabitStatus";
import cloneObject from "../utils/cloneObject";
import replaceById from "../utils/replaceById";

const oneClickCellHandler = (habit, dayName, dayPotential, e) => {
  const updatedHabit = cloneObject(habit);
  if (e.type === "click") {
    if (e.ctrlKey) {
      updatedHabit.stats[dayName] = {
        status: Status.NEUTRAL,
        dayPotential
      };
    } else {
      updatedHabit.stats[dayName] = {
        status: Status.DONE,
        dayPotential
      };
    }
  } else if (e.type === "contextmenu") {
    e.preventDefault();
    updatedHabit.stats[dayName] = {
      status: Status.NOT_SPECIFIED,
      dayPotential
    };
  }

  const { habits } = this.state;
  const updatedHabits = replaceById(habits, updatedHabit);

  this.setState({ habits: updatedHabits });
};

export default oneClickCellHandler;
