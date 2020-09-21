"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDateTime = void 0;
const AbstractDate_1 = require("../AbstractDate");
const AbstractTime_1 = require("../AbstractTime");
class AbstractDateTime {
    constructor(props) {
        this.abstractDate = props.abstractDate;
        this.abstractTime = props.abstractTime;
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
        if (!(other instanceof AbstractDateTime)) {
            return false;
        }
        return (AbstractDate_1.AbstractDate.isEqual(this.abstractDate, other.abstractDate) &&
            AbstractTime_1.AbstractTime.isEqual(this.abstractTime, other.abstractTime));
    }
    toString(format, dateFormat, timeFormat) {
        let dateStr = this.abstractDate.toString(dateFormat);
        let timeStr = this.abstractTime.toString(timeFormat);
        switch (format) {
            case "date at time":
                return `${dateStr} at ${timeStr}`;
            case "time on date":
                return `${timeStr} on ${dateStr}`;
            case "date time":
                return `${dateStr} ${timeStr}`;
            case "date-time":
                return `${dateStr}-${timeStr}`;
            case "datetime":
                return `${dateStr}${timeStr}`;
            default:
                throw new Error("Unsupported format");
        }
    }
    withAbstractDate(abstractDate) {
        return new AbstractDateTime({
            abstractDate,
            abstractTime: this.abstractTime,
        });
    }
    withAbstractTime(abstractTime) {
        return new AbstractDateTime({
            abstractDate: this.abstractDate,
            abstractTime,
        });
    }
}
exports.AbstractDateTime = AbstractDateTime;
//# sourceMappingURL=index.js.map