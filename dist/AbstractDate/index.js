"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDate = void 0;
const stringGivenAbstractDate_1 = require("./_internal/stringGivenAbstractDate");
class AbstractDate {
    constructor(props) {
        this.calendarYear = props.calendarYear;
        this.calendarMonth = props.calendarMonth;
        this.calendarDay = props.calendarDay;
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
        if (!(other instanceof AbstractDate)) {
            return false;
        }
        return (other.calendarYear === this.calendarYear &&
            other.calendarMonth === this.calendarMonth &&
            other.calendarDay === this.calendarDay);
    }
    toString(format) {
        return (0, stringGivenAbstractDate_1.stringGivenAbstractDate)(this, format);
    }
    withValues(change) {
        return new AbstractDate(Object.assign({ calendarYear: this.calendarYear, calendarMonth: this.calendarMonth, calendarDay: this.calendarDay }, change));
    }
}
exports.AbstractDate = AbstractDate;
//# sourceMappingURL=index.js.map