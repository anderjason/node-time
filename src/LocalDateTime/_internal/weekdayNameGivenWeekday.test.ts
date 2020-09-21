import { Test } from "@anderjason/tests";
import { weekdayNameGivenWeekday } from "./weekdayNameGivenWeekday";

Test.define("weekdayNameGivenWeekday returns the expected results", () => {
  Test.assert("Sunday" === weekdayNameGivenWeekday(0, "Thursday"));
  Test.assert("Mon" === weekdayNameGivenWeekday(1, "Thu"));
  Test.assert("Tues" === weekdayNameGivenWeekday(2, "Thurs"));
  Test.assert("We" === weekdayNameGivenWeekday(3, "Th"));
  Test.assert("T" === weekdayNameGivenWeekday(4, "T"));
});
