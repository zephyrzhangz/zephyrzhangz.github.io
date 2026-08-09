const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatMonthYear = (date: string) => {
  const [year, month] = date.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

export const formatDayMonth = (date: string) => {
  const [, month, day] = date.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]}`;
};
