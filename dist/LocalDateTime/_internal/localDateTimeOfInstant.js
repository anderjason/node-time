"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDateTimeOfInstant = void 0;
const timezone_support_1 = require("timezone-support");
const __1 = require("..");
function localDateTimeOfInstant(instant, timeZone) {
    const tz = timezone_support_1.findTimeZone(timeZone.toIanaName());
    const result = timezone_support_1.getZonedTime(new Date(instant.toEpochMilliseconds()), tz);
    return __1.LocalDateTime.ofDateParts(result.year, result.month, result.day, timeZone).withTimeParts(result.hours, result.minutes, result.seconds, result.milliseconds);
}
exports.localDateTimeOfInstant = localDateTimeOfInstant;
//# sourceMappingURL=localDateTimeOfInstant.js.map