import moment from "moment";

const getWeekDays = todayDate =>
  new Array(7).fill(null).map((v, dayOrderNumber) => {
    return moment(todayDate).isoWeekday(dayOrderNumber + 1);
  });

const DateUtils = {
  getWeekDays
};

export { DateUtils };
