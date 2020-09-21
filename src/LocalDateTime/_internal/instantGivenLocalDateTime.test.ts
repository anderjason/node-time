import { Test } from "@anderjason/tests";
import { LocalDateTime } from "..";
import { Instant } from "@anderjason/time";
import { AbstractDateTime } from "../../AbstractDateTime";
import { AbstractDate } from "../../AbstractDate";
import { AbstractTime } from "../../AbstractTime";
import { TimeZone } from "../../TimeZone";
import { instantGivenLocalDateTime } from "./instantGivenLocalDateTime";

Test.define("instantGivenLocalDateTime returns the expected results", () => {
  const timeZone = new TimeZone("America/Los_Angeles");
  const localDateTime = new LocalDateTime({
    timeZone,
    abstractDateTime: new AbstractDateTime({
      abstractDate: new AbstractDate({
        calendarYear: 2020,
        calendarMonth: 4,
        calendarDay: 15,
      }),
      abstractTime: new AbstractTime({
        hours24: 15,
        minutes: 15,
        seconds: 30,
      }),
    }),
  });

  const actual = instantGivenLocalDateTime(localDateTime);
  const expected = Instant.givenEpochMilliseconds(1586988930000);

  Test.assert(actual.isEqual(expected));
});
