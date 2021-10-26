import { Test } from "@anderjason/tests";
import { AbstractTime, TimeStringFormat } from "..";
import { stringGivenAbstractTime } from "./stringGivenAbstractTime";

function testString(
  format: TimeStringFormat,
  hours24: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
  expected: string
): void {
  const actual = stringGivenAbstractTime(
    new AbstractTime({
      hours24,
      minutes,
      seconds,
      milliseconds,
    }),
    format
  );
  
  Test.assert(
    expected === actual, actual
  );
}

Test.define("stringGivenAbstractTime handles 0000", () => {
  const format = "0000";

  testString(format, 23, 59, 0, 0, "2359");
  testString(format, 5, 6, 7, 8, "0506");
});

Test.define("stringGivenAbstractTime handles 000000", () => {
  const format = "000000";

  testString(format, 23, 59, 0, 0, "235900");
  testString(format, 23, 59, 42, 0, "235942");
  testString(format, 5, 6, 7, 8, "050607");
});

Test.define("stringGivenAbstractTime handles 00:00", () => {
  const format = "00:00";

  testString(format, 23, 59, 0, 0, "23:59");
  testString(format, 23, 59, 42, 0, "23:59");
  testString(format, 5, 6, 7, 8, "05:06");
});

Test.define("stringGivenAbstractTime handles 00:00:??", () => {
  const format = "00:00:??";

  testString(format, 23, 59, 0, 0, "23:59");
  testString(format, 23, 59, 42, 0, "23:59:42");
  testString(format, 5, 6, 7, 8, "05:06:07");
});

Test.define("stringGivenAbstractTime handles 00:00:00", () => {
  const format = "00:00:00";

  testString(format, 23, 59, 0, 0, "23:59:00");
  testString(format, 23, 59, 42, 0, "23:59:42");
  testString(format, 5, 6, 7, 8, "05:06:07");
});

Test.define("stringGivenAbstractTime handles 00:00:00.???", () => {
  const format = "00:00:00.???";

  testString(format, 23, 59, 0, 0, "23:59:00");
  testString(format, 23, 59, 42, 10, "23:59:42.010");
  testString(format, 5, 6, 7, 8, "05:06:07.008");
  testString(format, 5, 6, 7, 567.801, "05:06:07.568");
});

Test.define("stringGivenAbstractTime handles 00:00:00.000", () => {
  const format = "00:00:00.000";

  testString(format, 23, 59, 0, 0, "23:59:00.000");
  testString(format, 23, 59, 42, 10, "23:59:42.010");
  testString(format, 5, 6, 7, 8, "05:06:07.008");
  testString(format, 5, 6, 7, 567.801, "05:06:07.568");
});

Test.define("stringGivenAbstractTime handles 0:00 AM", () => {
  const format = "0:00 AM";

  testString(format, 23, 59, 0, 0, "11:59 PM");
  testString(format, 23, 59, 42, 10, "11:59 PM");
  testString(format, 5, 6, 7, 8, "5:06 AM");
});

Test.define("stringGivenAbstractTime handles 0:00:?? AM", () => {
  const format = "0:00:?? AM";

  testString(format, 23, 59, 0, 0, "11:59 PM");
  testString(format, 23, 59, 42, 10, "11:59:42 PM");
  testString(format, 5, 6, 7, 8, "5:06:07 AM");
});

Test.define("stringGivenAbstractTime handles 0:00:00 AM", () => {
  const format = "0:00:00 AM";

  testString(format, 23, 59, 0, 0, "11:59:00 PM");
  testString(format, 23, 59, 42, 10, "11:59:42 PM");
  testString(format, 5, 6, 7, 8, "5:06:07 AM");
});

Test.define("stringGivenAbstractTime handles 00:00 AM", () => {
  const format = "00:00 AM";

  testString(format, 23, 59, 0, 0, "11:59 PM");
  testString(format, 23, 59, 42, 10, "11:59 PM");
  testString(format, 5, 6, 7, 8, "05:06 AM");
});

Test.define("stringGivenAbstractTime handles 00:00:?? AM", () => {
  const format = "00:00:?? AM";

  testString(format, 23, 59, 0, 0, "11:59 PM");
  testString(format, 23, 59, 42, 10, "11:59:42 PM");
  testString(format, 5, 6, 7, 8, "05:06:07 AM");
});
Test.define("stringGivenAbstractTime handles 00:00:00 AM", () => {
  const format = "00:00:00 AM";

  testString(format, 23, 59, 0, 0, "11:59:00 PM");
  testString(format, 23, 59, 42, 10, "11:59:42 PM");
  testString(format, 5, 6, 7, 8, "05:06:07 AM");
});
