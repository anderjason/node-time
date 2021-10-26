import { Test } from "@anderjason/tests";
import { Instant } from "@anderjason/time";
import { localDateTimeOfInstant } from "./localDateTimeOfInstant";
import { TimeZone } from "../../TimeZone";

Test.define("localDateTimeOfInstant returns the expected result", () => {
  const instant = Instant.givenEpochMilliseconds(1600659206000);
  const timeZone = new TimeZone("America/Los_Angeles");
  const localDateTime = localDateTimeOfInstant(instant, timeZone);

  const { abstractDate, abstractTime } = localDateTime.abstractDateTime;
  const { calendarYear, calendarMonth, calendarDay } = abstractDate;
  const { hours24, minutes, seconds } = abstractTime;

  Test.assert(calendarYear === 2020, "calendarYear is 2020");
  Test.assert(calendarMonth === 9, "calendarMonth is 9");
  Test.assert(calendarDay === 20, "calendarDay is 20");

  Test.assert(hours24 === 20, "hours24 is 20");
  Test.assert(minutes === 33, "minutes is 33");
  Test.assert(seconds === 26, "seconds is 26");
});
