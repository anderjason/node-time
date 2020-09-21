import { AbstractDate, DateStringFormat } from "../AbstractDate";
import { AbstractTime, TimeStringFormat } from "../AbstractTime";

export type DateTimeStringFormat =
  | "date at time"
  | "time on date"
  | "date time"
  | "date-time"
  | "datetime";

export interface AbstractDateTimeProps {
  abstractDate: AbstractDate;
  abstractTime: AbstractTime;
}

export class AbstractDateTime {
  static isEqual(a: AbstractDateTime, b: AbstractDateTime): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  readonly abstractDate: AbstractDate;
  readonly abstractTime: AbstractTime;

  constructor(props: AbstractDateTimeProps) {
    this.abstractDate = props.abstractDate;
    this.abstractTime = props.abstractTime;
  }

  isEqual(other: AbstractDateTime): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof AbstractDateTime)) {
      return false;
    }

    return (
      AbstractDate.isEqual(this.abstractDate, other.abstractDate) &&
      AbstractTime.isEqual(this.abstractTime, other.abstractTime)
    );
  }

  toString(
    format: DateTimeStringFormat,
    dateFormat: DateStringFormat,
    timeFormat: TimeStringFormat
  ): string {
    let dateStr: string = this.abstractDate.toString(dateFormat);
    let timeStr: string = this.abstractTime.toString(timeFormat);

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

  withAbstractDate(abstractDate: AbstractDate): AbstractDateTime {
    return new AbstractDateTime({
      abstractDate,
      abstractTime: this.abstractTime,
    });
  }

  withAbstractTime(abstractTime: AbstractTime): AbstractDateTime {
    return new AbstractDateTime({
      abstractDate: this.abstractDate,
      abstractTime,
    });
  }
}
