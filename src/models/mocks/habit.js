import { createHabit } from "../habit";

const Status = {
  DONE: "DONE",
  FAILED: "FAILED",
  NEUTRAL: "NEUTRAL",
  NOT_SPECIFIED: "NOT_SPECIFIED"
};

const READING_HABIT = createHabit({
  id: 1,
  name: "Чтение",
  measuringValue: "Каждый день",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.NEUTRAL },
    { status: Status.NEUTRAL }
  ]
});

const GYM_HABIT = createHabit({
  id: 2,
  name: "Спортзал",
  measuringValue: "3р/нед",
  stats: [
    { status: Status.DONE },
    { status: Status.FAILED },
    { status: Status.FAILED },
    { status: Status.DONE },
    { status: Status.NOT_SPECIFIED },
    { status: Status.NOT_SPECIFIED },
    { status: Status.NOT_SPECIFIED }
  ]
});

const EARLY_RISE_HABIT = createHabit({
  id: 3,
  name: "Ранний подъем",
  measuringValue: "6:30",
  stats: [
    { dayName: "MONDAY", status: Status.DONE },
    { dayName: "TUESDAY", status: Status.FAILED },
    { dayName: "WEDNESDAY", status: Status.FAILED },
    { dayName: "THURSDAY", status: Status.FAILED },
    { dayName: "FRIDAY", status: Status.FAILED },
    { dayName: "SATURDAY", status: Status.NOT_SPECIFIED },
    { dayName: "SUNDAY", status: Status.NOT_SPECIFIED }
  ]
});

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT];
export { HABITS };
