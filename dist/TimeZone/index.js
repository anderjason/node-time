"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
const timezone_support_1 = require("timezone-support");
class TimeZone {
    constructor(ianaName) {
        this.ianaName = ianaName;
    }
    static givenIanaName(ianaName) {
        return new TimeZone(ianaName);
    }
    static ofUTC() {
        return new TimeZone("UTC");
    }
    static ofThisMachine() {
        return new TimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }
    static toIanaNames() {
        return timezone_support_1.listTimeZones();
    }
}
exports.TimeZone = TimeZone;
//# sourceMappingURL=index.js.map