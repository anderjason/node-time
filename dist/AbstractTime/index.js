"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTime = void 0;
const writtenTimeStringGivenAbstractTime_1 = require("./_internal/writtenTimeStringGivenAbstractTime");
const sortableTimeStringGivenTime_1 = require("./_internal/sortableTimeStringGivenTime");
class AbstractTime {
    constructor(props) {
        this.hours24 = props.hours24 || 0;
        this.minutes = props.minutes || 0;
        this.seconds = props.seconds || 0;
        this.milliseconds = props.milliseconds || 0;
    }
    static ofDayStart() {
        return new AbstractTime({
            hours24: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    }
    static ofDayEnd() {
        return new AbstractTime({
            hours24: 23,
            minutes: 59,
            seconds: 59,
            milliseconds: 999,
        });
    }
    get hours12() {
        if (this.hours24 === 0 || this.hours24 === 12) {
            return 12;
        }
        return this.hours24 % 12;
    }
    get amPm() {
        return this.hours24 < 12 ? "a.m." : "p.m.";
    }
    toSortableTimeString(format) {
        return sortableTimeStringGivenTime_1.sortableTimeStringGivenTime(this, format);
    }
    toWrittenTimeString() {
        return writtenTimeStringGivenAbstractTime_1.writtenTimeStringGivenAbstractTime(this);
    }
    withChange(change) {
        return new AbstractTime(Object.assign({ hours24: this.hours24, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds }, change));
    }
    withBeginningOfDay() {
        return this.withChange({
            hours24: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
        });
    }
    withEndOfDay() {
        return this.withChange({
            hours24: 23,
            minutes: 59,
            seconds: 59,
            milliseconds: 999,
        });
    }
}
exports.AbstractTime = AbstractTime;
//# sourceMappingURL=index.js.map