"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localDateTimeGivenISOString = void 0;
const time_1 = require("@anderjason/time");
const __1 = require("../..");
const TimeZone_1 = require("../../TimeZone");
const regex = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
function localDateTimeGivenISOString(input) {
    if (input == null) {
        throw new Error("Input is required");
    }
    if (!regex.test(input)) {
        throw new Error("Input must be an ISO 8601 string");
    }
    const nativeDate = new Date(input);
    const instant = time_1.Instant.givenEpochMilliseconds(nativeDate.getTime());
    return __1.LocalDateTime.givenInstant(instant, TimeZone_1.TimeZone.ofUTC());
}
exports.localDateTimeGivenISOString = localDateTimeGivenISOString;
//# sourceMappingURL=localDateTimeGivenISOString.js.map