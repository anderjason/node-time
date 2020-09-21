import { Test } from "@anderjason/tests";
import { AbstractDate } from "../AbstractDate";
import { AbstractTime } from "../AbstractTime";
import { AbstractDateTime } from "../AbstractDateTime";

const abstractDateTime = new AbstractDateTime({
  abstractDate: new AbstractDate({
    calendarMonth: 4,
    calendarDay: 15,
    calendarYear: 2020,
  }),
  abstractTime: new AbstractTime({
    hours24: 15,
    minutes: 31,
    seconds: 20,
  }),
});

Test.define(
  "AbstractDateTime can return a string in date at time format",
  () => {
    const actual = abstractDateTime.toString(
      "date at time",
      "January 1, 2020",
      "0:00 AM"
    );
    const expected = "April 15, 2020 at 3:31 PM";

    Test.assert(actual === expected);
  }
);

Test.define(
  "AbstractDateTime can return a string in time on date format",
  () => {
    const actual = abstractDateTime.toString(
      "time on date",
      "January 1",
      "00:00"
    );
    const expected = "15:31 on April 15";

    Test.assert(actual === expected);
  }
);

Test.define("AbstractDateTime can return a string in date time format", () => {
  const actual = abstractDateTime.toString(
    "date time",
    "2020-01-01",
    "00:00:00"
  );
  const expected = "2020-04-15 15:31:20";

  Test.assert(actual === expected, actual);
});

Test.define("AbstractDateTime can return a string in date-time format", () => {
  const actual = abstractDateTime.toString("date-time", "20200101", "000000");
  const expected = "20200415-153120";

  Test.assert(actual === expected);
});

Test.define("AbstractDateTime can return a string in datetime format", () => {
  const actual = abstractDateTime.toString("datetime", "20200101", "000000");
  const expected = "20200415153120";

  Test.assert(actual === expected);
});
