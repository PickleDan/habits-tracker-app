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
        MONDAY: { status: Status.DONE, dayPotential: 4 },
        TUESDAY: { status: Status.DONE, dayPotential: 6 },
        WEDNESDAY: { status: Status.NOT_SPECIFIED, dayPotential: 8 },
        THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" }
    }
});

const GYM_HABIT = Habit.createHabit({
    id: 2,
    name: "Спортзал",
    measuringValue: "3р/нед",
    stats: {
        MONDAY: { status: Status.FAILED, dayPotential: "" },
        TUESDAY: { status: Status.DONE, dayPotential: "" },
        WEDNESDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" }
    }
});

const EARLY_RISE_HABIT = Habit.createHabit({
    id: 3,
    name: "Ранний подъем",
    measuringValue: "6:30",
    stats: {
        MONDAY: { status: Status.DONE, dayPotential: "" },
        TUESDAY: { status: Status.FAILED, dayPotential: "" },
        WEDNESDAY: { status: Status.NEUTRAL, dayPotential: "" },
        THURSDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        FRIDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SATURDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" },
        SUNDAY: { status: Status.NOT_SPECIFIED, dayPotential: "" }
    }
});

const HABITS = [READING_HABIT, GYM_HABIT, EARLY_RISE_HABIT];
export { HABITS };
