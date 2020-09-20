import { localDateTimeOfInstant } from "./_internal/localDateTimeOfInstant";
import { Instant } from "@anderjason/time";
import { Duration } from "@anderjason/time";
import { instantOfLocalDateTime } from "./_internal/instantOfLocalDateTime";
import { TimeZone } from "../TimeZone";
import { dayOfWeekOfInstant } from "./_internal/dayOfWeekOfInstant";
import {
  AbstractDateTime,
  SortableDateStringFormat,
  SortableTimeStringFormat,
  SortableDateTimeStringFormat,
  WrittenDateStringFormat,
} from "../AbstractDateTime";

export class LocalDateTime {
  private _abstractDateTime: AbstractDateTime;
  private _timeZone: TimeZone;

  static ofDateParts(
    calendarYear: number,
    calendarMonth: number,
    calendarDay: number,
    timeZone: TimeZone
  ): LocalDateTime {
    const abstractDateTime = AbstractDateTime.givenDefinition({
      calendarYear,
      calendarMonth,
      calendarDay,
    });

    return new LocalDateTime(abstractDateTime, timeZone);
  }

  static ofAbstractDateTime(
    abstractDateTime: AbstractDateTime,
    timeZone: TimeZone
  ): LocalDateTime {
    return new LocalDateTime(abstractDateTime, timeZone);
  }

  static ofToday(
    timeZone: TimeZone,
    hours24: number,
    minutes: number,
    seconds?: number,
    milliseconds?: number
  ): LocalDateTime {
    return localDateTimeOfInstant(Instant.ofNow(), timeZone).withTimeParts(
      hours24,
      minutes,
      seconds,
      milliseconds
    );
  }

  static ofBeginningOfToday(timeZone: TimeZone): LocalDateTime {
    return LocalDateTime.ofToday(timeZone, 0, 0);
  }

  static ofBeginningOfThisWeek(timeZone: TimeZone): LocalDateTime {
    return LocalDateTime.ofToday(timeZone, 0, 0).withBeginningOfWeek();
  }

  static ofEndOfThisWeek(timeZone: TimeZone): LocalDateTime {
    return LocalDateTime.ofToday(timeZone, 0, 0).withEndOfWeek();
  }

  static ofEndOfToday(timeZone: TimeZone): LocalDateTime {
    return LocalDateTime.ofToday(timeZone, 23, 59, 59, 999);
  }

  static ofInstant(instant: Instant, timeZone: TimeZone): LocalDateTime {
    return localDateTimeOfInstant(instant, timeZone);
  }

  static ofNow(timeZone: TimeZone): LocalDateTime {
    return localDateTimeOfInstant(Instant.ofNow(), timeZone);
  }

  private constructor(abstractDateTime: AbstractDateTime, timeZone: TimeZone) {
    this._abstractDateTime = abstractDateTime;
    this._timeZone = timeZone;
  }

  withTimeParts(
    hours24: number,
    minutes: number,
    seconds: number = 0,
    milliseconds: number = 0
  ): LocalDateTime {
    const abstractDateTime = this._abstractDateTime.withTimeParts(
      hours24,
      minutes,
      seconds,
      milliseconds
    );

    return new LocalDateTime(abstractDateTime, this._timeZone);
  }

  withDateParts(
    calendarYear: number,
    calendarMonth: number,
    calendarDay: number
  ): LocalDateTime {
    const abstractDateTime = this._abstractDateTime.withDateParts(
      calendarYear,
      calendarMonth,
      calendarDay
    );

    return new LocalDateTime(abstractDateTime, this._timeZone);
  }

  withoutMilliseconds(): LocalDateTime {
    const abstractDateTime = this._abstractDateTime.withoutMilliseconds();

    return new LocalDateTime(abstractDateTime, this._timeZone);
  }

  withoutSeconds(): LocalDateTime {
    const abstractDateTime = this._abstractDateTime.withoutSeconds();

    return new LocalDateTime(abstractDateTime, this._timeZone);
  }

  withAddedDuration(duration: Duration): LocalDateTime {
    return LocalDateTime.ofInstant(
      this.toInstant().withAddedDuration(duration),
      this._timeZone
    );
  }

  withBeginningOfDay(): LocalDateTime {
    return this.withTimeParts(0, 0);
  }

  withEndOfDay(): LocalDateTime {
    return this.withTimeParts(23, 59, 59, 999);
  }

  withBeginningOfWeek(): LocalDateTime {
    const beginningOfDay = this.withBeginningOfDay();

    return beginningOfDay.withAddedDuration(
      Duration.givenDays(0 - beginningOfDay.toDayOfWeek())
    );
  }

  withEndOfWeek(): LocalDateTime {
    const endOfDay = this.withEndOfDay();

    return endOfDay.withAddedDuration(
      Duration.givenDays(6 - endOfDay.toDayOfWeek())
    );
  }

  withBeginningOfMonth(): LocalDateTime {
    return this.withBeginningOfDay().withDateParts(
      this.toCalendarYear(),
      this.toCalendarMonth(),
      1
    );
  }

  toSortableDateString(format: SortableDateStringFormat): string {
    return this._abstractDateTime.toSortableDateString(format);
  }

  toSortableTimeString(format: SortableTimeStringFormat): string {
    return this._abstractDateTime.toSortableTimeString(format);
  }

  toSortableDateTimeString(format: SortableDateTimeStringFormat): string {
    let date: string;
    let time: string;

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

  toWrittenDateString(format: WrittenDateStringFormat): string {
    return this._abstractDateTime.toWrittenDateString(format);
  }

  toFlexibleTimeString(): string {
    return this._abstractDateTime.toFlexibleTimeString();
  }

  toCalendarYear(): number {
    return this._abstractDateTime.toCalendarYear();
  }

  toCalendarMonth(): number {
    return this._abstractDateTime.toCalendarMonth();
  }

  toCalendarDay(): number {
    return this._abstractDateTime.toCalendarDay();
  }

  toHours24(): number {
    return this._abstractDateTime.toHours24();
  }

  toHours12(): number {
    return this._abstractDateTime.toHours12();
  }

  toAmPm(): "a.m." | "p.m." {
    return this._abstractDateTime.toAmPm();
  }

  toMinutes(): number {
    return this._abstractDateTime.toMinutes();
  }

  toSeconds(): number {
    return this._abstractDateTime.toSeconds();
  }

  toMilliseconds(): number {
    return this._abstractDateTime.toMilliseconds();
  }

  toDayOfWeek(): number {
    return dayOfWeekOfInstant(this.toInstant(), this.toTimeZone());
  }

  toTimeZone(): TimeZone {
    return this._timeZone;
  }

  toInstant(): Instant {
    return instantOfLocalDateTime(this);
  }

  toAbstractDateTime(): AbstractDateTime {
    return this._abstractDateTime;
  }
}
