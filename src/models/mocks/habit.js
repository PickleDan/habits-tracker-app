import { createHabit } from "../habit";

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

const READING_HABIT = createHabit({
  name: "Чтение",
  measuringValue: "Каждый день",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: "" },
    { status: "" }
  ]
});

const GYM_HABIT = createHabit({
  name: "Спортзал",
  measuringValue: "3р/нед",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.DONE },
    { status: Status.NOT_SPECIFIED },
    { status: "" },
    { status: "" }
  ]
});

const EARLY_RISE_HABIT = createHabit({
  name: "Ранний подъем",
  measuringValue: "6:30",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: "" },
    { status: "" }
  ]
});

// const PUSHUPS_HABIT = createHabit({
//   name: "Отжимания",
//   measuringValue: "40раз",
//   stats: [
//     { status: Status.DONE },
//     { status: Status.FAILED },
//     { status: Status.FAILED },
//     { status: Status.DONE },
//     { status: Status.DONE },
//     { status: "" },
//     { status: "" }
//   ]
// });

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT];
export { HABITS };
