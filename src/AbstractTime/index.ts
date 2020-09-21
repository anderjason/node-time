import { stringGivenAbstractTime } from "./_internal/stringGivenAbstractTime";
import { writtenTimeStringGivenAbstractTime } from "./_internal/writtenTimeStringGivenAbstractTime";

export type TimeStringFormat =
  | "0000"
  | "000000"
  | "00:00"
  | "00:00:??"
  | "00:00:00"
  | "00:00:00.???"
  | "00:00:00.000"
  | "0:00 AM"
  | "0:00:?? AM"
  | "0:00:00 AM"
  | "00:00 AM"
  | "00:00:?? AM"
  | "00:00:00 AM";

export interface AbstractTimeProps {
  hours24?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export class AbstractTime {
  static ofDayStart(): AbstractTime {
    return new AbstractTime({
      hours24: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  }

  static ofDayEnd(): AbstractTime {
    return new AbstractTime({
      hours24: 23,
      minutes: 59,
      seconds: 59,
      milliseconds: 999,
    });
  }

  static isEqual(a: AbstractTime, b: AbstractTime): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  readonly hours24: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;

  constructor(props: AbstractTimeProps) {
    this.hours24 = props.hours24 || 0;
    this.minutes = props.minutes || 0;
    this.seconds = props.seconds || 0;
    this.milliseconds = props.milliseconds || 0;
  }

  get hours12(): number {
    if (this.hours24 === 0 || this.hours24 === 12) {
      return 12;
    }

    return this.hours24 % 12;
  }

  get amPm(): "AM" | "PM" {
    return this.hours24 < 12 ? "AM" : "PM";
  }

  isEqual(other: AbstractTime): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof AbstractTime)) {
      return false;
    }

    return (
      other.hours24 === this.hours24 &&
      other.minutes === this.minutes &&
      other.seconds === this.seconds &&
      other.milliseconds === this.milliseconds
    );
  }

  toString(format: TimeStringFormat): string {
    return stringGivenAbstractTime(this, format);
  }

  toWrittenTimeString(): string {
    return writtenTimeStringGivenAbstractTime(this);
  }

  withValues(change: Partial<AbstractTimeProps>): AbstractTime {
    return new AbstractTime({
      hours24: this.hours24,
      minutes: this.minutes,
      seconds: this.seconds,
      milliseconds: this.milliseconds,
      ...change,
    });
  }

  withBeginningOfDay(): AbstractTime {
    return this.withValues({
      hours24: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  }

  withEndOfDay(): AbstractTime {
    return this.withValues({
      hours24: 23,
      minutes: 59,
      seconds: 59,
      milliseconds: 999,
    });
  }
}
