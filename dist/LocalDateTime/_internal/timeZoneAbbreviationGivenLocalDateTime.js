"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeZoneAbbreviationGivenLocalDateTime = void 0;
const timezone_support_1 = require("timezone-support");
function timeZoneAbbreviationGivenLocalDateTime(input) {
    const tz = timezone_support_1.findTimeZone(input.timeZone.ianaName);
    const result = timezone_support_1.getZonedTime(new Date(input.toInstant().toEpochMilliseconds()), tz);
    return result.zone.abbreviation;
}
exports.timeZoneAbbreviationGivenLocalDateTime = timeZoneAbbreviationGivenLocalDateTime;
//# sourceMappingURL=timeZoneAbbreviationGivenLocalDateTime.js.map