"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekOfInstant = void 0;
const timezone_support_1 = require("timezone-support");
function dayOfWeekOfInstant(instant, timeZone) {
    const tz = timezone_support_1.findTimeZone(timeZone.ianaName);
    const result = timezone_support_1.getZonedTime(new Date(instant.toEpochMilliseconds()), tz);
    return result.dayOfWeek;
}
exports.dayOfWeekOfInstant = dayOfWeekOfInstant;
//# sourceMappingURL=dayOfWeekOfInstant.js.map