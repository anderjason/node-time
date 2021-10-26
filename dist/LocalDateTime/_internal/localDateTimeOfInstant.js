"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDateTimeOfInstant = void 0;
const timezone_support_1 = require("timezone-support");
const __1 = require("..");
const AbstractDateTime_1 = require("../../AbstractDateTime");
const AbstractDate_1 = require("../../AbstractDate");
const AbstractTime_1 = require("../../AbstractTime");
function localDateTimeOfInstant(instant, timeZone) {
    const tz = (0, timezone_support_1.findTimeZone)(timeZone.ianaName);
    const result = (0, timezone_support_1.getZonedTime)(new Date(instant.toEpochMilliseconds()), tz);
    const abstractDateTime = new AbstractDateTime_1.AbstractDateTime({
        abstractDate: new AbstractDate_1.AbstractDate({
            calendarYear: result.year,
            calendarMonth: result.month,
            calendarDay: result.day,
        }),
        abstractTime: new AbstractTime_1.AbstractTime({
            hours24: result.hours,
            minutes: result.minutes,
            seconds: result.seconds,
            milliseconds: result.milliseconds,
        }),
    });
    return new __1.LocalDateTime({
        timeZone,
        abstractDateTime,
    });
}
exports.localDateTimeOfInstant = localDateTimeOfInstant;
//# sourceMappingURL=localDateTimeOfInstant.js.map