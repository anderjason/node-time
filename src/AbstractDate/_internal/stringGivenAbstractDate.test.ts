import { Test } from "@anderjason/tests";
import { AbstractDate, DateStringFormat } from "..";
import { stringGivenAbstractDate } from "./stringGivenAbstractDate";

function testString(
  format: DateStringFormat,
  calendarMonth: number,
  calendarDay: number,
  calendarYear: number,
  expected: string
): void {
  const actual = stringGivenAbstractDate(
    new AbstractDate({
      calendarYear,
      calendarMonth,
      calendarDay,
    }),
    format
  );
  Test.assert(expected === actual, actual);
}

Test.define("stringGivenAbstractDate handles January 1, 2020", () => {
  const format = "January 1, 2020";

  testString(format, 1, 1, 2020, "January 1, 2020");
  testString(format, 12, 31, 2020, "December 31, 2020");
});

Test.define("stringGivenAbstractDate handles January 1", () => {
  const format = "January 1";

  testString(format, 1, 1, 2020, "January 1");
  testString(format, 12, 31, 2020, "December 31");
});

Test.define("stringGivenAbstractDate handles Jan 1 2020", () => {
  const format = "Jan 1 2020";

  testString(format, 1, 1, 2020, "Jan 1 2020");
  testString(format, 12, 31, 2020, "Dec 31 2020");
});

Test.define("stringGivenAbstractDate handles Jan 01 2020", () => {
  const format = "Jan 01 2020";

  testString(format, 1, 1, 2020, "Jan 01 2020");
  testString(format, 12, 31, 2020, "Dec 31 2020");
});

Test.define("stringGivenAbstractDate handles Jan 1", () => {
  const format = "Jan 1";

  testString(format, 1, 1, 2020, "Jan 1");
  testString(format, 12, 31, 2020, "Dec 31");
});

Test.define("stringGivenAbstractDate handles Jan 01", () => {
  const format = "Jan 01";

  testString(format, 1, 1, 2020, "Jan 01");
  testString(format, 12, 31, 2020, "Dec 31");
});

Test.define("stringGivenAbstractDate handles 2020-01-01", () => {
  const format = "2020-01-01";

  testString(format, 1, 1, 2020, "2020-01-01");
  testString(format, 12, 31, 2020, "2020-12-31");
});

Test.define("stringGivenAbstractDate handles 20200101", () => {
  const format = "20200101";

  testString(format, 1, 1, 2020, "20200101");
  testString(format, 12, 31, 2020, "20201231");
});
