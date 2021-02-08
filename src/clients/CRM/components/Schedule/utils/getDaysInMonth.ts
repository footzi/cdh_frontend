export const getDaysInMonth = (month: number, year: number): Array<number> => {
  const daysInMonth = new Date(year, month, 0).getDate();
  return [...Array(daysInMonth).keys()].map((day) => day + 1);
};
