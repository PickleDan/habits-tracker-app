import { Habit } from "../habit";

const Status = {
    DONE: "DONE",
    FAILED: "FAILED",
    NEUTRAL: "NEUTRAL",
    NOT_SPECIFIED: "NOT_SPECIFIED"
};

const READING_HABIT = Habit.createHabit({
    id: 1,
    name: "Отслеживание привычек",
    measuringValue: "Каждый день",
    stats: {
        MONDAY: { status: Status.DONE },
        TUESDAY: { status: Status.DONE },
        WEDNESDAY: { status: Status.NOT_SPECIFIED },
        THURSDAY: { status: Status.NOT_SPECIFIED },
        FRIDAY: { status: Status.NOT_SPECIFIED },
        SATURDAY: { status: Status.NOT_SPECIFIED },
        SUNDAY: { status: Status.NOT_SPECIFIED }
    }
});

const GYM_HABIT = Habit.createHabit({
    id: 2,
    name: "Спортзал",
    measuringValue: "3р/нед",
    stats: {
        MONDAY: { status: Status.FAILED },
        TUESDAY: { status: Status.DONE },
        WEDNESDAY: { status: Status.NOT_SPECIFIED },
        THURSDAY: { status: Status.NOT_SPECIFIED },
        FRIDAY: { status: Status.NOT_SPECIFIED },
        SATURDAY: { status: Status.NOT_SPECIFIED },
        SUNDAY: { status: Status.NOT_SPECIFIED }
    }
});

const EARLY_RISE_HABIT = Habit.createHabit({
    id: 3,
    name: "Ранний подъем",
    measuringValue: "6:30",
    stats: {
        MONDAY: { status: Status.DONE },
        TUESDAY: { status: Status.FAILED },
        WEDNESDAY: { status: Status.NEUTRAL },
        THURSDAY: { status: Status.NOT_SPECIFIED },
        FRIDAY: { status: Status.NOT_SPECIFIED },
        SATURDAY: { status: Status.NOT_SPECIFIED },
        SUNDAY: { status: Status.NOT_SPECIFIED }
    }
});

const NEW_ONE = Habit.createHabit({
    id: 4,
    name: "test",
    measuringValue: "pass/fail",
    stats: {
        MONDAY: { status: Status.DONE },
        TUESDAY: { status: Status.DONE },
        WEDNESDAY: { status: Status.DONE },
        THURSDAY: { status: Status.DONE },
        FRIDAY: { status: Status.NOT_SPECIFIED },
        SATURDAY: { status: Status.NEUTRAL },
        SUNDAY: { status: Status.NOT_SPECIFIED }
    }
});

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT, NEW_ONE];
export { HABITS };
