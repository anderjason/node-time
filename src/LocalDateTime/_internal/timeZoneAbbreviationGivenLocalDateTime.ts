import { findTimeZone, getZonedTime } from "timezone-support";
import { LocalDateTime } from "../..";

export function timeZoneAbbreviationGivenLocalDateTime(
  input: LocalDateTime
): string {
  const tz = findTimeZone(input.timeZone.ianaName);
  const result = getZonedTime(
    new Date(input.toInstant().toEpochMilliseconds()),
    tz
  );

  return result.zone!.abbreviation!;
}
