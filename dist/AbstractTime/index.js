"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTime = void 0;
const stringGivenAbstractTime_1 = require("./_internal/stringGivenAbstractTime");
const writtenTimeStringGivenAbstractTime_1 = require("./_internal/writtenTimeStringGivenAbstractTime");
class AbstractTime {
    constructor(props) {
        this.hours24 = props.hours24 || 0;
        this.minutes = props.minutes || 0;
        this.seconds = props.seconds || 0;
        this.milliseconds = props.milliseconds || 0;
    }
    static ofStartOfDay() {
        return new AbstractTime({
            hours24: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    }
    static ofEndOfDay() {
        return new AbstractTime({
            hours24: 23,
            minutes: 59,
            seconds: 59,
            milliseconds: 999,
        });
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
    get hours12() {
        if (this.hours24 === 0 || this.hours24 === 12) {
            return 12;
        }
        return this.hours24 % 12;
    }
    get amPm() {
        return this.hours24 < 12 ? "AM" : "PM";
    }
    isEqual(other) {
        if (other == null) {
            return false;
        }
        if (!(other instanceof AbstractTime)) {
            return false;
        }
        return (other.hours24 === this.hours24 &&
            other.minutes === this.minutes &&
            other.seconds === this.seconds &&
            other.milliseconds === this.milliseconds);
    }
    toString(format) {
        return stringGivenAbstractTime_1.stringGivenAbstractTime(this, format);
    }
    toWrittenTimeString() {
        return writtenTimeStringGivenAbstractTime_1.writtenTimeStringGivenAbstractTime(this);
    }
    withValues(change) {
        return new AbstractTime(Object.assign({ hours24: this.hours24, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds }, change));
    }
    withBeginningOfDay() {
        return this.withValues({
            hours24: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    }
    withEndOfDay() {
        return this.withValues({
            hours24: 23,
            minutes: 59,
            seconds: 59,
            milliseconds: 999,
        });
    }
}
exports.AbstractTime = AbstractTime;
//# sourceMappingURL=index.js.map