import { stringGivenAbstractDate } from "./_internal/stringGivenAbstractDate";

export type CalendarMonthFormat = "January" | "Jan";
export type DateStringFormat =
  | "January 1, 2020"
  | "January 1"
  | "Jan 1 2020"
  | "Jan 01 2020"
  | "Jan 1"
  | "Jan 01"
  | "2020-01-01"
  | "20200101";

export interface AbstractDateProps {
  calendarYear: number;
  calendarMonth: number;
  calendarDay: number;
}

export class AbstractDate {
  static isEqual(a: AbstractDate, b: AbstractDate): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  readonly calendarYear: number;
  readonly calendarMonth: number;
  readonly calendarDay: number;

  constructor(props: AbstractDateProps) {
    this.calendarYear = props.calendarYear;
    this.calendarMonth = props.calendarMonth;
    this.calendarDay = props.calendarDay;
  }

  isEqual(other: AbstractDate): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof AbstractDate)) {
      return false;
    }

    return (
      other.calendarYear === this.calendarYear &&
      other.calendarMonth === this.calendarMonth &&
      other.calendarDay === this.calendarDay
    );
  }

  toString(format: DateStringFormat): string {
    return stringGivenAbstractDate(this, format);
  }

  withValues(change: Partial<AbstractDateProps>): AbstractDate {
    return new AbstractDate({
      calendarYear: this.calendarYear,
      calendarMonth: this.calendarMonth,
      calendarDay: this.calendarDay,
      ...change,
    });
  }
}
