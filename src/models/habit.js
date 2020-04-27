const createHabit = ({
  id,
  name,
  measuringValue,
  stats = [],
  dayPotentialValue
}) => ({
  id,
  name,
  measuringValue,
  stats,
  dayPotentialValue
});

export { createHabit };
