import { findTimeZone, getUnixTime } from "timezone-support";
import { LocalDateTime } from "..";
import { Instant } from "@anderjason/time";

export function instantGivenLocalDateTime(
  localDateTime: LocalDateTime
): Instant {
  const { abstractDateTime, timeZone } = localDateTime;

  const tz = findTimeZone(timeZone.ianaName);

  const { abstractDate, abstractTime } = abstractDateTime;
  const { calendarYear, calendarMonth, calendarDay } = abstractDate;
  const { hours24, minutes, seconds, milliseconds } = abstractTime;

  const epochMilliseconds = getUnixTime(
    {
      year: calendarYear,
      month: calendarMonth,
      day: calendarDay,
      hours: hours24,
      minutes: minutes,
      seconds: seconds,
      milliseconds: milliseconds,
    },
    tz
  );

  return Instant.givenEpochMilliseconds(epochMilliseconds);
}
