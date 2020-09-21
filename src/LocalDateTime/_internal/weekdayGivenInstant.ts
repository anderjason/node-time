import { findTimeZone, getZonedTime } from "timezone-support";
import { TimeZone } from "../../TimeZone";
import { Instant } from "@anderjason/time";
import { Weekday } from "..";

export function weekdayGivenInstant(
  instant: Instant,
  timeZone: TimeZone
): Weekday {
  const tz = findTimeZone(timeZone.ianaName);
  const result = getZonedTime(new Date(instant.toEpochMilliseconds()), tz);

  return result.dayOfWeek! as Weekday;
}
