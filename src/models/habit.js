import cloneObject from "../utils/cloneObject";
import replaceById from "../utils/replaceById";

const createHabit = ({ id, name, measuringValue, stats = [] }) => ({
    id,
    name,
    measuringValue,
    stats
});

const updateHabit = (habits, habit, habitChanges) => {
    // const { name, measuringValue } = habitChanges;
    // if (name.length < 3 || name.length > 100) {
    //   throw ValidationError();
    // }

    const updatedHabit = { ...cloneObject(habit), ...habitChanges };
    const updatedHabits = replaceById(habits, updatedHabit);

    return updatedHabits;
};

const Habit = {
    createHabit,
    updateHabit
};

export { Habit };
