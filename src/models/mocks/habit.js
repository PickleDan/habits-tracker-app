import { createHabit } from "../habit";

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NEUTRAL: "NEUTRAL",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

// const READING_HABIT = createHabit({
//   id: 1,
//   name: "Чтение",
//   measuringValue: "Каждый день",
//   stats: [
//     { status: Status.DONE },
//     { status: Status.DONE },
//     { status: Status.NOT_SPECIFIED },
//     { status: Status.NOT_SPECIFIED },
//     { status: Status.NOT_SPECIFIED },
//     { status: Status.NOT_SPECIFIED },
//     { status: Status.NOT_SPECIFIED }
//   ]
// });

const READING_HABIT = createHabit({
  id: 1,
  name: "Чтение",
  measuringValue: "Каждый день",
  stats: {
    MONDAY: { status: Status.DONE, dayPotential: 4 },
    TUESDAY: { status: Status.DONE, dayPotential: 6 },
    WEDNESDAY: { status: Status.NOT_SPECIFIED, dayPotential: 8 },
    THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: 9 },
    FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: null }
  }
});

const GYM_HABIT = createHabit({
  id: 2,
  name: "Спортзал",
  measuringValue: "3р/нед",
  stats: {
    MONDAY: { status: Status.FAILED, dayPotential: 4 },
    TUESDAY: { status: Status.DONE, dayPotential: 6 },
    WEDNESDAY: { status: Status.NOT_SPECIFIED, dayPotential: 8 },
    THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: 9 },
    FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: null }
  }
});

const EARLY_RISE_HABIT = createHabit({
  id: 3,
  name: "Ранний подъем",
  measuringValue: "6:30",
  stats: {
    MONDAY: { status: Status.DONE, dayPotential: 4 },
    TUESDAY: { status: Status.FAILED, dayPotential: 6 },
    WEDNESDAY: { status: Status.NEUTRAL, dayPotential: 8 },
    THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: 9 },
    FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: null },
    SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: null }
  }
});

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT];
export { HABITS };
