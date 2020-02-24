const SUNDAY_CORRECT_ORDER_NUMBER = 7;
const getDay = date => {
  const weekDayNumber = date.getDay();
  const isSunday = weekDayNumber === 0;

  return isSunday ? SUNDAY_CORRECT_ORDER_NUMBER : weekDayNumber;
};

const MONDAY_ORDER_NUMBER = 1;
function getMonday(todayDate) {
  const clonedTodayDate = new Date(todayDate);
  const dayOrderNumber = getDay(clonedTodayDate);

  if (dayOrderNumber === MONDAY_ORDER_NUMBER) {
    return clonedTodayDate;
  }

  const lastMondayMonthDay = clonedTodayDate.getDate() - dayOrderNumber + 1;
  const lastMondayDate = new Date(clonedTodayDate.setDate(lastMondayMonthDay));

  return lastMondayDate;
}

const getWeekDays = todayDate =>
  new Array(7).fill(null).map((v, dayOrderNumber) => {
    const mondayDate = getMonday(todayDate);
    const mondayMonthDay = mondayDate.getDate();

    return new Date(mondayDate.setDate(mondayMonthDay + dayOrderNumber));
  });

const DateUtils = {
  getMonday,
  getWeekDays
};

export { DateUtils };
