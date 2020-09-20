"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTime = void 0;
const localDateTimeOfInstant_1 = require("./_internal/localDateTimeOfInstant");
const time_1 = require("@anderjason/time");
const time_2 = require("@anderjason/time");
const instantOfLocalDateTime_1 = require("./_internal/instantOfLocalDateTime");
const dayOfWeekOfInstant_1 = require("./_internal/dayOfWeekOfInstant");
const AbstractDateTime_1 = require("../AbstractDateTime");
class LocalDateTime {
    constructor(abstractDateTime, timeZone) {
        this._abstractDateTime = abstractDateTime;
        this._timeZone = timeZone;
    }
    static ofDateParts(calendarYear, calendarMonth, calendarDay, timeZone) {
        const abstractDateTime = AbstractDateTime_1.AbstractDateTime.givenDefinition({
            calendarYear,
            calendarMonth,
            calendarDay,
        });
        return new LocalDateTime(abstractDateTime, timeZone);
    }
    static ofAbstractDateTime(abstractDateTime, timeZone) {
        return new LocalDateTime(abstractDateTime, timeZone);
    }
    static ofToday(timeZone, hours24, minutes, seconds, milliseconds) {
        return localDateTimeOfInstant_1.localDateTimeOfInstant(time_1.Instant.ofNow(), timeZone).withTimeParts(hours24, minutes, seconds, milliseconds);
    }
    static ofBeginningOfToday(timeZone) {
        return LocalDateTime.ofToday(timeZone, 0, 0);
    }
    static ofBeginningOfThisWeek(timeZone) {
        return LocalDateTime.ofToday(timeZone, 0, 0).withBeginningOfWeek();
    }
    static ofEndOfThisWeek(timeZone) {
        return LocalDateTime.ofToday(timeZone, 0, 0).withEndOfWeek();
    }
    static ofEndOfToday(timeZone) {
        return LocalDateTime.ofToday(timeZone, 23, 59, 59, 999);
    }
    static ofInstant(instant, timeZone) {
        return localDateTimeOfInstant_1.localDateTimeOfInstant(instant, timeZone);
    }
    static ofNow(timeZone) {
        return localDateTimeOfInstant_1.localDateTimeOfInstant(time_1.Instant.ofNow(), timeZone);
    }
    withTimeParts(hours24, minutes, seconds = 0, milliseconds = 0) {
        const abstractDateTime = this._abstractDateTime.withTimeParts(hours24, minutes, seconds, milliseconds);
        return new LocalDateTime(abstractDateTime, this._timeZone);
    }
    withDateParts(calendarYear, calendarMonth, calendarDay) {
        const abstractDateTime = this._abstractDateTime.withDateParts(calendarYear, calendarMonth, calendarDay);
        return new LocalDateTime(abstractDateTime, this._timeZone);
    }
    withoutMilliseconds() {
        const abstractDateTime = this._abstractDateTime.withoutMilliseconds();
        return new LocalDateTime(abstractDateTime, this._timeZone);
    }
    withoutSeconds() {
        const abstractDateTime = this._abstractDateTime.withoutSeconds();
        return new LocalDateTime(abstractDateTime, this._timeZone);
    }
    withAddedDuration(duration) {
        return LocalDateTime.ofInstant(this.toInstant().withAddedDuration(duration), this._timeZone);
    }
    withBeginningOfDay() {
        return this.withTimeParts(0, 0);
    }
    withEndOfDay() {
        return this.withTimeParts(23, 59, 59, 999);
    }
    withBeginningOfWeek() {
        const beginningOfDay = this.withBeginningOfDay();
        return beginningOfDay.withAddedDuration(time_2.Duration.givenDays(0 - beginningOfDay.toDayOfWeek()));
    }
    withEndOfWeek() {
        const endOfDay = this.withEndOfDay();
        return endOfDay.withAddedDuration(time_2.Duration.givenDays(6 - endOfDay.toDayOfWeek()));
    }
    withBeginningOfMonth() {
        return this.withBeginningOfDay().withDateParts(this.toCalendarYear(), this.toCalendarMonth(), 1);
    }
    toSortableDateString(format) {
        return this._abstractDateTime.toSortableDateString(format);
    }
    toSortableTimeString(format) {
        return this._abstractDateTime.toSortableTimeString(format);
    }
    toSortableDateTimeString(format) {
        let date;
        let time;
        switch (format) {
            case "2019-12-31 23:59:59":
                date = this.toSortableDateString("2019-12-31");
                time = this.toSortableTimeString("23:59:59");
                return `${date} ${time}`;
            case "20191231 235959":
                date = this.toSortableDateString("20191231");
                time = this.toSortableTimeString("235959");
                return `${date} ${time}`;
            default:
                throw new Error("Unsupported date time string format");
        }
    }
    toWrittenDateString(format) {
        return this._abstractDateTime.toWrittenDateString(format);
    }
    toFlexibleTimeString() {
        return this._abstractDateTime.toFlexibleTimeString();
    }
    toCalendarYear() {
        return this._abstractDateTime.toCalendarYear();
    }
    toCalendarMonth() {
        return this._abstractDateTime.toCalendarMonth();
    }
    toCalendarDay() {
        return this._abstractDateTime.toCalendarDay();
    }
    toHours24() {
        return this._abstractDateTime.toHours24();
    }
    toHours12() {
        return this._abstractDateTime.toHours12();
    }
    toAmPm() {
        return this._abstractDateTime.toAmPm();
    }
    toMinutes() {
        return this._abstractDateTime.toMinutes();
    }
    toSeconds() {
        return this._abstractDateTime.toSeconds();
    }
    toMilliseconds() {
        return this._abstractDateTime.toMilliseconds();
    }
    toDayOfWeek() {
        return dayOfWeekOfInstant_1.dayOfWeekOfInstant(this.toInstant(), this.toTimeZone());
    }
    toTimeZone() {
        return this._timeZone;
    }
    toInstant() {
        return instantOfLocalDateTime_1.instantOfLocalDateTime(this);
    }
    toAbstractDateTime() {
        return this._abstractDateTime;
    }
}
exports.LocalDateTime = LocalDateTime;
//# sourceMappingURL=index.js.map