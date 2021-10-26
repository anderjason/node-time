import { Test } from "@anderjason/tests";
import { weekdayNameGivenWeekday } from "./weekdayNameGivenWeekday";

Test.define("weekdayNameGivenWeekday returns the expected results", () => {
  Test.assert("Sunday" === weekdayNameGivenWeekday(0, "Thursday"), "Sunday");
  Test.assert("Mon" === weekdayNameGivenWeekday(1, "Thu"), "Mon");
  Test.assert("Tues" === weekdayNameGivenWeekday(2, "Thurs"), "Tues");
  Test.assert("We" === weekdayNameGivenWeekday(3, "Th"), "We");
  Test.assert("T" === weekdayNameGivenWeekday(4, "T"), "T");
});
