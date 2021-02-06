export const getDaysInMonth = (month: number, year: number): Array<Number> => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return [...Array(daysInMonth).keys()].map((day) => day + 1);
};
