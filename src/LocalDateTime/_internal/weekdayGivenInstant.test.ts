import { Test } from "@anderjason/tests";
import { Instant } from "@anderjason/time";
import { TimeZone } from "../../TimeZone";
import { weekdayGivenInstant } from "./weekdayGivenInstant";

Test.define("weekdayGivenInstant returns the expected result", () => {
  const instant = Instant.givenEpochMilliseconds(1600824606000);
  const timeZone = new TimeZone("America/Los_Angeles");

  const actual = weekdayGivenInstant(instant, timeZone);
  const expected = 2; // Tuesday

  Test.assert(actual === expected);
});
