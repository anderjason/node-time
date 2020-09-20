"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instantOfLocalDateTime = void 0;
const timezone_support_1 = require("timezone-support");
const time_1 = require("@anderjason/time");
function instantOfLocalDateTime(localDateTime) {
    const tz = timezone_support_1.findTimeZone(localDateTime.toTimeZone().toIanaName());
    const epochMilliseconds = timezone_support_1.getUnixTime({
        year: localDateTime.toCalendarYear(),
        month: localDateTime.toCalendarMonth(),
        day: localDateTime.toCalendarDay(),
        hours: localDateTime.toHours24(),
        minutes: localDateTime.toMinutes(),
        seconds: localDateTime.toSeconds(),
        milliseconds: localDateTime.toMilliseconds(),
    }, tz);
    return time_1.Instant.givenEpochMilliseconds(epochMilliseconds);
}
exports.instantOfLocalDateTime = instantOfLocalDateTime;
//# sourceMappingURL=instantOfLocalDateTime.js.map