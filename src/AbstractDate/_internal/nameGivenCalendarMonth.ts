import { CalendarMonthFormat } from "..";

const names = [
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

export function nameGivenCalendarMonth(
  calendarMonth: number,
  format: CalendarMonthFormat
): string {
  const index = calendarMonth - 1;
  if (index < 0 || index > 11) {
    throw new Error("Invalid calendar month");
  }

  switch (format) {
    case "January":
      return names[index];
    case "Jan":
      return names[index].slice(0, 3);
    default:
      throw new Error("Unsupported format");
  }
}
