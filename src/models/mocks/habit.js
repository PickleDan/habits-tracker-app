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
    { status: Status.DONE },
    { status: Status.DONE }
  ]
});

const GYM_HABIT = createHabit({
  name: "Спортзал",
  measuringValue: "3р/нед",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.NOT_SPECIFIED },
    { status: Status.NOT_SPECIFIED },
    { status: Status.DONE },
    { status: Status.DONE }
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
    { status: Status.DONE },
    { status: Status.DONE }
  ]
});

const PUSHUPS_HABIT = createHabit({
  name: "Отжимания",
  measuringValue: "40раз",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.DONE },
    { status: Status.DONE },
    { status: Status.DONE },
    { status: Status.DONE }
  ]
});

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT, PUSHUPS_HABIT];
export { HABITS };
