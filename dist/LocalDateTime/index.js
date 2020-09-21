"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTime = void 0;
const localDateTimeOfInstant_1 = require("./_internal/localDateTimeOfInstant");
const time_1 = require("@anderjason/time");
const time_2 = require("@anderjason/time");
const instantOfLocalDateTime_1 = require("./_internal/instantOfLocalDateTime");
const dayOfWeekOfInstant_1 = require("./_internal/dayOfWeekOfInstant");
const AbstractDateTime_1 = require("../AbstractDateTime");
const AbstractTime_1 = require("../AbstractTime");
class LocalDateTime {
    constructor(props) {
        this.abstractDateTime = props.abstractDateTime;
        this.timeZone = props.timeZone;
    }
    static givenTimeToday(abstractTime, timeZone) {
        const now = localDateTimeOfInstant_1.localDateTimeOfInstant(time_1.Instant.ofNow(), timeZone);
        return now.withAbstractDateTime(now.abstractDateTime.withAbstractTime(abstractTime));
    }
    static ofTodayStart(timeZone) {
        return LocalDateTime.givenTimeToday(AbstractTime_1.AbstractTime.ofDayStart(), timeZone);
    }
    static ofTodayEnd(timeZone) {
        return LocalDateTime.givenTimeToday(AbstractTime_1.AbstractTime.ofDayEnd(), timeZone);
    }
    static ofWeekStart(timeZone) {
        return LocalDateTime.ofTodayStart(timeZone).withWeekStart();
    }
    static ofEndOfThisWeek(timeZone) {
        return LocalDateTime.ofTodayStart(timeZone).withWeekEnd();
    }
    static ofNow(timeZone) {
        return localDateTimeOfInstant_1.localDateTimeOfInstant(time_1.Instant.ofNow(), timeZone);
    }
    static givenInstant(instant, timeZone) {
        return localDateTimeOfInstant_1.localDateTimeOfInstant(instant, timeZone);
    }
    withAbstractDateTime(abstractDateTime) {
        return new LocalDateTime({
            abstractDateTime,
            timeZone: this.timeZone,
        });
    }
    withAbstractTime(abstractTime) {
        return new LocalDateTime({
            abstractDateTime: this.abstractDateTime.withAbstractTime(abstractTime),
            timeZone: this.timeZone,
        });
    }
    withAbstractDate(abstractDate) {
        return new LocalDateTime({
            abstractDateTime: this.abstractDateTime.withAbstractDate(abstractDate),
            timeZone: this.timeZone,
        });
    }
    withAddedDuration(duration) {
        return LocalDateTime.givenInstant(this.toInstant().withAddedDuration(duration), this.timeZone);
    }
    withDayStart() {
        return new LocalDateTime({
            timeZone: this.timeZone,
            abstractDateTime: this.abstractDateTime.withAbstractTime(AbstractTime_1.AbstractTime.ofDayStart()),
        });
    }
    withDayEnd() {
        return new LocalDateTime({
            timeZone: this.timeZone,
            abstractDateTime: this.abstractDateTime.withAbstractTime(AbstractTime_1.AbstractTime.ofDayEnd()),
        });
    }
    withWeekStart() {
        const beginningOfDay = this.withDayStart();
        return beginningOfDay.withAddedDuration(time_2.Duration.givenDays(0 - this.toDayOfWeek()));
    }
    withWeekEnd() {
        const endOfDay = this.withDayEnd();
        return endOfDay.withAddedDuration(time_2.Duration.givenDays(6 - endOfDay.toDayOfWeek()));
    }
    withMonthStart() {
        const abstractTime = AbstractTime_1.AbstractTime.ofDayStart();
        const abstractDate = this.abstractDateTime.abstractDate.withChange({
            calendarDay: 1,
        });
        return this.withAbstractDateTime(new AbstractDateTime_1.AbstractDateTime({
            abstractDate,
            abstractTime,
        }));
    }
    toDayOfWeek() {
        return dayOfWeekOfInstant_1.dayOfWeekOfInstant(this.toInstant(), this.timeZone);
    }
    toInstant() {
        return instantOfLocalDateTime_1.instantOfLocalDateTime(this);
    }
}
exports.LocalDateTime = LocalDateTime;
//# sourceMappingURL=index.js.map