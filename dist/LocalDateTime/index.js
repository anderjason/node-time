"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDateTime = void 0;
const localDateTimeOfInstant_1 = require("./_internal/localDateTimeOfInstant");
const time_1 = require("@anderjason/time");
const time_2 = require("@anderjason/time");
const instantGivenLocalDateTime_1 = require("./_internal/instantGivenLocalDateTime");
const TimeZone_1 = require("../TimeZone");
const weekdayGivenInstant_1 = require("./_internal/weekdayGivenInstant");
const AbstractDateTime_1 = require("../AbstractDateTime");
const AbstractTime_1 = require("../AbstractTime");
const weekdayNameGivenWeekday_1 = require("./_internal/weekdayNameGivenWeekday");
const localDateTimeGivenISOString_1 = require("./_internal/localDateTimeGivenISOString");
const timeZoneAbbreviationGivenLocalDateTime_1 = require("./_internal/timeZoneAbbreviationGivenLocalDateTime");
class LocalDateTime {
    constructor(props) {
        this.abstractDateTime = props.abstractDateTime;
        this.timeZone = props.timeZone;
    }
    static givenTimeToday(abstractTime, timeZone) {
        const now = (0, localDateTimeOfInstant_1.localDateTimeOfInstant)(time_1.Instant.ofNow(), timeZone);
        return now.withAbstractDateTime(now.abstractDateTime.withAbstractTime(abstractTime));
    }
    static givenISOString(input) {
        return (0, localDateTimeGivenISOString_1.localDateTimeGivenISOString)(input);
    }
    static ofNow(timeZone) {
        return (0, localDateTimeOfInstant_1.localDateTimeOfInstant)(time_1.Instant.ofNow(), timeZone);
    }
    static givenInstant(instant, timeZone) {
        return (0, localDateTimeOfInstant_1.localDateTimeOfInstant)(instant, timeZone);
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
    get abstractDate() {
        return this.abstractDateTime.abstractDate;
    }
    get abstractTime() {
        return this.abstractDateTime.abstractTime;
    }
    isEqual(other) {
        if (other == null) {
            return false;
        }
        if (!(other instanceof LocalDateTime)) {
            return false;
        }
        return (AbstractDateTime_1.AbstractDateTime.isEqual(this.abstractDateTime, other.abstractDateTime) &&
            TimeZone_1.TimeZone.isEqual(this.timeZone, other.timeZone));
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
    withStartOfDay() {
        return new LocalDateTime({
            timeZone: this.timeZone,
            abstractDateTime: this.abstractDateTime.withAbstractTime(AbstractTime_1.AbstractTime.ofStartOfDay()),
        });
    }
    withEndOfDay() {
        return new LocalDateTime({
            timeZone: this.timeZone,
            abstractDateTime: this.abstractDateTime.withAbstractTime(AbstractTime_1.AbstractTime.ofEndOfDay()),
        });
    }
    withStartOfWeek() {
        const beginningOfDay = this.withStartOfDay();
        return beginningOfDay.withAddedDuration(time_2.Duration.givenDays(0 - this.toWeekday()));
    }
    withEndOfWeek() {
        const endOfDay = this.withEndOfDay();
        return endOfDay.withAddedDuration(time_2.Duration.givenDays(6 - endOfDay.toWeekday()));
    }
    withStartOfMonth() {
        const abstractTime = AbstractTime_1.AbstractTime.ofStartOfDay();
        const abstractDate = this.abstractDate.withValues({
            calendarDay: 1,
        });
        return this.withAbstractDateTime(new AbstractDateTime_1.AbstractDateTime({
            abstractDate,
            abstractTime,
        }));
    }
    withEndOfMonth() {
        let calendarYear = this.abstractDate.calendarYear;
        let calendarMonth = this.abstractDate.calendarMonth + 1;
        if (calendarMonth > 12) {
            calendarMonth = 1;
            calendarYear += 1;
        }
        const beginningOfNextMonth = this.withAbstractDateTime(new AbstractDateTime_1.AbstractDateTime({
            abstractDate: this.abstractDate.withValues({
                calendarYear,
                calendarMonth,
                calendarDay: 1,
            }),
            abstractTime: AbstractTime_1.AbstractTime.ofStartOfDay(),
        }));
        return beginningOfNextMonth.withAddedDuration(time_2.Duration.givenMilliseconds(-1));
    }
    withStartOfYear() {
        return this.withAbstractDateTime(new AbstractDateTime_1.AbstractDateTime({
            abstractDate: this.abstractDateTime.abstractDate.withValues({
                calendarDay: 1,
                calendarMonth: 1,
            }),
            abstractTime: AbstractTime_1.AbstractTime.ofStartOfDay(),
        }));
    }
    withEndOfYear() {
        let calendarYear = this.abstractDate.calendarYear + 1;
        const beginningOfNextYear = this.withAbstractDateTime(new AbstractDateTime_1.AbstractDateTime({
            abstractDate: this.abstractDate.withValues({
                calendarYear,
                calendarMonth: 1,
                calendarDay: 1,
            }),
            abstractTime: AbstractTime_1.AbstractTime.ofStartOfDay(),
        }));
        return beginningOfNextYear.withAddedDuration(time_2.Duration.givenMilliseconds(-1));
    }
    withTimeZone(timeZone, method) {
        switch (method) {
            case "convert":
                return LocalDateTime.givenInstant(this.toInstant(), timeZone);
            case "replace":
                return new LocalDateTime({
                    abstractDateTime: this.abstractDateTime,
                    timeZone,
                });
            default:
                throw new Error("Unsupported method");
        }
    }
    toWeekday() {
        return (0, weekdayGivenInstant_1.weekdayGivenInstant)(this.toInstant(), this.timeZone);
    }
    toWeekdayName(format) {
        return (0, weekdayNameGivenWeekday_1.weekdayNameGivenWeekday)(this.toWeekday(), format);
    }
    toInstant() {
        return (0, instantGivenLocalDateTime_1.instantGivenLocalDateTime)(this);
    }
    toTimeZoneAbbreviation() {
        return (0, timeZoneAbbreviationGivenLocalDateTime_1.timeZoneAbbreviationGivenLocalDateTime)(this);
    }
    toISOString() {
        let utcDateTime;
        if (this.timeZone.ianaName === "UTC") {
            utcDateTime = this;
        }
        else {
            utcDateTime = this.withTimeZone(TimeZone_1.TimeZone.ofUTC(), "convert");
        }
        const { abstractDate, abstractTime } = utcDateTime.abstractDateTime;
        const dateStr = abstractDate.toString("2020-01-01");
        const timeStr = abstractTime.toString("00:00:00.000");
        return `${dateStr}T${timeStr}Z`;
    }
}
exports.LocalDateTime = LocalDateTime;
//# sourceMappingURL=index.js.map