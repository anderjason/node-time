import { findTimeZone, getZonedTime } from "timezone-support";
import { TimeZone } from "../../TimeZone";
import { Instant } from "@anderjason/time";

export function dayOfWeekOfInstant(
  instant: Instant,
  timeZone: TimeZone
): number {
  const tz = findTimeZone(timeZone.toIanaName());
  const result = getZonedTime(new Date(instant.toEpochMilliseconds()), tz);

  return result.dayOfWeek!;
}
