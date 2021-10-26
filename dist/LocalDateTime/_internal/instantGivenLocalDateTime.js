"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantGivenLocalDateTime = void 0;
const timezone_support_1 = require("timezone-support");
const time_1 = require("@anderjason/time");
function instantGivenLocalDateTime(localDateTime) {
    const { abstractDateTime, timeZone } = localDateTime;
    const tz = (0, timezone_support_1.findTimeZone)(timeZone.ianaName);
    const { abstractDate, abstractTime } = abstractDateTime;
    const { calendarYear, calendarMonth, calendarDay } = abstractDate;
    const { hours24, minutes, seconds, milliseconds } = abstractTime;
    const epochMilliseconds = (0, timezone_support_1.getUnixTime)({
        year: calendarYear,
        month: calendarMonth,
        day: calendarDay,
        hours: hours24,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
    }, tz);
    return time_1.Instant.givenEpochMilliseconds(epochMilliseconds);
}
exports.instantGivenLocalDateTime = instantGivenLocalDateTime;
//# sourceMappingURL=instantGivenLocalDateTime.js.map