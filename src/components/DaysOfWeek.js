function getMonday(d) {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function getDayFromMonday(num) {
  const date = new Date();
  return new Date(date.setDate(monday.getDate() + num));
}

const monday = getMonday(new Date());

let currentDay = new Date().getDay(); // сб: 6, вс: 0
if (currentDay === 0) currentDay = 7;

const daysOfWeek = [monday];
for (let i = 1; i < currentDay; i++) {
  daysOfWeek.push(getDayFromMonday(i));
}

export default daysOfWeek;
