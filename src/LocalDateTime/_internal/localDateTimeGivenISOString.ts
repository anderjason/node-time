import { Instant } from "@anderjason/time";
import { LocalDateTime } from "../..";
import { TimeZone } from "../../TimeZone";
const regex = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;

export function localDateTimeGivenISOString(input: string): LocalDateTime {
  if (input == null) {
    throw new Error("Input is required");
  }

  if (!regex.test(input)) {
    throw new Error("Input must be an ISO 8601 string");
  }

  const nativeDate = new Date(input);
  const instant = Instant.givenEpochMilliseconds(nativeDate.getTime());

  return LocalDateTime.givenInstant(instant, TimeZone.ofUTC());
}
