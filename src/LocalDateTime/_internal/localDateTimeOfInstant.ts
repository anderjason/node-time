import { findTimeZone, getZonedTime } from "timezone-support";
import { LocalDateTime } from "..";
import { Instant } from "@anderjason/time";
import { TimeZone } from "../../TimeZone";
import { AbstractDateTime } from "../../AbstractDateTime";
import { AbstractDate } from "../../AbstractDate";
import { AbstractTime } from "../../AbstractTime";

export function localDateTimeOfInstant(
  instant: Instant,
  timeZone: TimeZone
): LocalDateTime {
  const tz = findTimeZone(timeZone.ianaName);
  const result = getZonedTime(new Date(instant.toEpochMilliseconds()), tz);

  const abstractDateTime = new AbstractDateTime({
    abstractDate: new AbstractDate({
      calendarYear: result.year,
      calendarMonth: result.month,
      calendarDay: result.day,
    }),
    abstractTime: new AbstractTime({
      hours24: result.hours,
      minutes: result.minutes,
      seconds: result.seconds,
      milliseconds: result.milliseconds,
    }),
  });

  return new LocalDateTime({
    timeZone,
    abstractDateTime,
  });
}
