import { findTimeZone, getZonedTime } from "timezone-support";
import { LocalDateTime } from "..";
import { Instant } from "@anderjason/time";
import { TimeZone } from "../../TimeZone";

export function localDateTimeOfInstant(
  instant: Instant,
  timeZone: TimeZone
): LocalDateTime {
  const tz = findTimeZone(timeZone.toIanaName());
  const result = getZonedTime(new Date(instant.toEpochMilliseconds()), tz);

  return LocalDateTime.ofDateParts(
    result.year,
    result.month,
    result.day,
    timeZone
  ).withTimeParts(
    result.hours,
    result.minutes,
    result.seconds,
    result.milliseconds
  );
}
