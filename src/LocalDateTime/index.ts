import { localDateTimeOfInstant } from "./_internal/localDateTimeOfInstant";
import { Instant } from "@anderjason/time";
import { Duration } from "@anderjason/time";
import { instantGivenLocalDateTime } from "./_internal/instantGivenLocalDateTime";
import { TimeZone } from "../TimeZone";
import { weekdayGivenInstant } from "./_internal/weekdayGivenInstant";
import { AbstractDateTime } from "../AbstractDateTime";
import { AbstractTime } from "../AbstractTime";
import { AbstractDate } from "../AbstractDate";
import { weekdayNameGivenWeekday } from "./_internal/weekdayNameGivenWeekday";
import { localDateTimeGivenISOString } from "./_internal/localDateTimeGivenISOString";
import { timeZoneAbbreviationGivenLocalDateTime } from "./_internal/timeZoneAbbreviationGivenLocalDateTime";

export type WeekdayStringFormat = "Thursday" | "Thurs" | "Thu" | "Th" | "T";
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TimezoneChangeMethod = "replace" | "convert";

export interface LocalDateTimeProps {
  abstractDateTime: AbstractDateTime;
  timeZone: TimeZone;
}

export class LocalDateTime {
  static givenTimeToday(
    abstractTime: AbstractTime,
    timeZone: TimeZone
  ): LocalDateTime {
    const now = localDateTimeOfInstant(Instant.ofNow(), timeZone);

    return now.withAbstractDateTime(
      now.abstractDateTime.withAbstractTime(abstractTime)
    );
  }

  static givenISOString(input: string): LocalDateTime {
    return localDateTimeGivenISOString(input);
  }

  static ofNow(timeZone: TimeZone): LocalDateTime {
    return localDateTimeOfInstant(Instant.ofNow(), timeZone);
  }

  static givenInstant(instant: Instant, timeZone: TimeZone): LocalDateTime {
    return localDateTimeOfInstant(instant, timeZone);
  }

  static isEqual(a: LocalDateTime, b: LocalDateTime): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  readonly abstractDateTime: AbstractDateTime;
  readonly timeZone: TimeZone;

  constructor(props: LocalDateTimeProps) {
    this.abstractDateTime = props.abstractDateTime;
    this.timeZone = props.timeZone;
  }

  get abstractDate(): AbstractDate {
    return this.abstractDateTime.abstractDate;
  }

  get abstractTime(): AbstractTime {
    return this.abstractDateTime.abstractTime;
  }

  isEqual(other: LocalDateTime): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof LocalDateTime)) {
      return false;
    }

    return (
      AbstractDateTime.isEqual(this.abstractDateTime, other.abstractDateTime) &&
      TimeZone.isEqual(this.timeZone, other.timeZone)
    );
  }

  withAbstractDateTime(abstractDateTime: AbstractDateTime): LocalDateTime {
    return new LocalDateTime({
      abstractDateTime,
      timeZone: this.timeZone,
    });
  }

  withAbstractTime(abstractTime: AbstractTime): LocalDateTime {
    return new LocalDateTime({
      abstractDateTime: this.abstractDateTime.withAbstractTime(abstractTime),
      timeZone: this.timeZone,
    });
  }

  withAbstractDate(abstractDate: AbstractDate): LocalDateTime {
    return new LocalDateTime({
      abstractDateTime: this.abstractDateTime.withAbstractDate(abstractDate),
      timeZone: this.timeZone,
    });
  }

  withAddedDuration(duration: Duration): LocalDateTime {
    return LocalDateTime.givenInstant(
      this.toInstant().withAddedDuration(duration),
      this.timeZone
    );
  }

  withStartOfDay(): LocalDateTime {
    return new LocalDateTime({
      timeZone: this.timeZone,
      abstractDateTime: this.abstractDateTime.withAbstractTime(
        AbstractTime.ofStartOfDay()
      ),
    });
  }

  withEndOfDay(): LocalDateTime {
    return new LocalDateTime({
      timeZone: this.timeZone,
      abstractDateTime: this.abstractDateTime.withAbstractTime(
        AbstractTime.ofEndOfDay()
      ),
    });
  }

  withStartOfWeek(): LocalDateTime {
    const beginningOfDay = this.withStartOfDay();

    return beginningOfDay.withAddedDuration(
      Duration.givenDays(0 - this.toWeekday())
    );
  }

  withEndOfWeek(): LocalDateTime {
    const endOfDay = this.withEndOfDay();

    return endOfDay.withAddedDuration(
      Duration.givenDays(6 - endOfDay.toWeekday())
    );
  }

  withStartOfMonth(): LocalDateTime {
    const abstractTime = AbstractTime.ofStartOfDay();
    const abstractDate = this.abstractDate.withValues({
      calendarDay: 1,
    });

    return this.withAbstractDateTime(
      new AbstractDateTime({
        abstractDate,
        abstractTime,
      })
    );
  }

  withEndOfMonth(): LocalDateTime {
    let calendarYear = this.abstractDate.calendarYear;
    let calendarMonth = this.abstractDate.calendarMonth + 1;

    if (calendarMonth > 12) {
      calendarMonth = 1;
      calendarYear += 1;
    }

    const beginningOfNextMonth = this.withAbstractDateTime(
      new AbstractDateTime({
        abstractDate: this.abstractDate.withValues({
          calendarYear,
          calendarMonth,
          calendarDay: 1,
        }),
        abstractTime: AbstractTime.ofStartOfDay(),
      })
    );

    return beginningOfNextMonth.withAddedDuration(
      Duration.givenMilliseconds(-1)
    );
  }

  withStartOfYear(): LocalDateTime {
    return this.withAbstractDateTime(
      new AbstractDateTime({
        abstractDate: this.abstractDateTime.abstractDate.withValues({
          calendarDay: 1,
          calendarMonth: 1,
        }),
        abstractTime: AbstractTime.ofStartOfDay(),
      })
    );
  }

  withEndOfYear(): LocalDateTime {
    let calendarYear = this.abstractDate.calendarYear + 1;

    const beginningOfNextYear = this.withAbstractDateTime(
      new AbstractDateTime({
        abstractDate: this.abstractDate.withValues({
          calendarYear,
          calendarMonth: 1,
          calendarDay: 1,
        }),
        abstractTime: AbstractTime.ofStartOfDay(),
      })
    );

    return beginningOfNextYear.withAddedDuration(
      Duration.givenMilliseconds(-1)
    );
  }

  withTimeZone(
    timeZone: TimeZone,
    method: TimezoneChangeMethod
  ): LocalDateTime {
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

  toWeekday(): Weekday {
    return weekdayGivenInstant(this.toInstant(), this.timeZone);
  }

  toWeekdayName(format: WeekdayStringFormat): string {
    return weekdayNameGivenWeekday(this.toWeekday(), format);
  }

  toInstant(): Instant {
    return instantGivenLocalDateTime(this);
  }

  toTimeZoneAbbreviation(): string {
    return timeZoneAbbreviationGivenLocalDateTime(this);
  }

  toISOString(): string {
    let utcDateTime: LocalDateTime;
    if (this.timeZone.ianaName === "UTC") {
      utcDateTime = this;
    } else {
      utcDateTime = this.withTimeZone(TimeZone.ofUTC(), "convert");
    }

    const { abstractDate, abstractTime } = utcDateTime.abstractDateTime;
    const dateStr = abstractDate.toString("2020-01-01");
    const timeStr = abstractTime.toString("00:00:00.000");

    return `${dateStr}T${timeStr}Z`;
  }
}
