import { listTimeZones } from "timezone-support";

export class TimeZone {
  private _ianaName: string;

  static ofIanaName(ianaName: string): TimeZone {
    return new TimeZone(ianaName);
  }

  static ofUTC(): TimeZone {
    return new TimeZone("UTC");
  }

  static ofThisMachine(): TimeZone {
    return new TimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }

  static toIanaNames(): string[] {
    return listTimeZones();
  }

  private constructor(ianaName: string) {
    this._ianaName = ianaName;
  }

  toIanaName(): string {
    return this._ianaName;
  }
}
