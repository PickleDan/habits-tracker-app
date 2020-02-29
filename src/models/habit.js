const createHabit = ({ id, name, measuringValue, stats = [] }) => ({
  id,
  name,
  measuringValue,
  stats
});

export { createHabit };
