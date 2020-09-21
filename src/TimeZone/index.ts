import { listTimeZones } from "timezone-support";

export class TimeZone {
  static ofUTC(): TimeZone {
    return new TimeZone("UTC");
  }

  static ofThisMachine(): TimeZone {
    return new TimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }

  static toIanaNames(): string[] {
    return listTimeZones();
  }

  static isEqual(a: TimeZone, b: TimeZone): boolean {
    if (a == null && b == null) {
      return true;
    }

    if (a == null || b == null) {
      return false;
    }

    return a.isEqual(b);
  }

  readonly ianaName: string;

  constructor(ianaName: string) {
    this.ianaName = ianaName;
  }

  isEqual(other: TimeZone): boolean {
    if (other == null) {
      return false;
    }

    if (!(other instanceof TimeZone)) {
      return false;
    }

    return other.ianaName === this.ianaName;
  }
}
