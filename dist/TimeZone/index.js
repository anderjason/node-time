"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
const timezone_support_1 = require("timezone-support");
class TimeZone {
    constructor(ianaName) {
        this.ianaName = ianaName;
    }
    static ofUTC() {
        return new TimeZone("UTC");
    }
    static ofThisMachine() {
        return new TimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    }
    static toIanaNames() {
        return (0, timezone_support_1.listTimeZones)();
    }
    static isEqual(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        return a.isEqual(b);
    }
    isEqual(other) {
        if (other == null) {
            return false;
        }
        if (!(other instanceof TimeZone)) {
            return false;
        }
        return other.ianaName === this.ianaName;
    }
}
exports.TimeZone = TimeZone;
//# sourceMappingURL=index.js.map