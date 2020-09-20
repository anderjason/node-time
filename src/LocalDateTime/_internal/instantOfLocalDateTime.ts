import { findTimeZone, getUnixTime } from "timezone-support";
import { LocalDateTime } from "..";
import { Instant } from "@anderjason/time";

export function instantOfLocalDateTime(localDateTime: LocalDateTime): Instant {
  const tz = findTimeZone(localDateTime.toTimeZone().toIanaName());

  const epochMilliseconds = getUnixTime(
    {
      year: localDateTime.toCalendarYear(),
      month: localDateTime.toCalendarMonth(),
      day: localDateTime.toCalendarDay(),
      hours: localDateTime.toHours24(),
      minutes: localDateTime.toMinutes(),
      seconds: localDateTime.toSeconds(),
      milliseconds: localDateTime.toMilliseconds(),
    },
    tz
  );

  return Instant.givenEpochMilliseconds(epochMilliseconds);
}
