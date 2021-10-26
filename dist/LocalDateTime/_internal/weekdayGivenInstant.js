"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekdayGivenInstant = void 0;
const timezone_support_1 = require("timezone-support");
function weekdayGivenInstant(instant, timeZone) {
    const tz = (0, timezone_support_1.findTimeZone)(timeZone.ianaName);
    const result = (0, timezone_support_1.getZonedTime)(new Date(instant.toEpochMilliseconds()), tz);
    return result.dayOfWeek;
}
exports.weekdayGivenInstant = weekdayGivenInstant;
//# sourceMappingURL=weekdayGivenInstant.js.map