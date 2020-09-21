import { Instant } from "@anderjason/time";
import { Duration } from "@anderjason/time";
import { TimeZone } from "../TimeZone";
import { AbstractDateTime } from "../AbstractDateTime";
import { AbstractTime } from "../AbstractTime";
import { AbstractDate } from "../AbstractDate";
export declare type WeekdayStringFormat = "Thursday" | "Thurs" | "Thu" | "Th" | "T";
export declare type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare type TimezoneChangeMethod = "replace" | "convert";
export interface LocalDateTimeProps {
    abstractDateTime: AbstractDateTime;
    timeZone: TimeZone;
}
export declare class LocalDateTime {
    static givenTimeToday(abstractTime: AbstractTime, timeZone: TimeZone): LocalDateTime;
    static givenISOString(input: string): LocalDateTime;
    static ofNow(timeZone: TimeZone): LocalDateTime;
    static givenInstant(instant: Instant, timeZone: TimeZone): LocalDateTime;
    static isEqual(a: LocalDateTime, b: LocalDateTime): boolean;
    readonly abstractDateTime: AbstractDateTime;
    readonly timeZone: TimeZone;
    constructor(props: LocalDateTimeProps);
    get abstractDate(): AbstractDate;
    get abstractTime(): AbstractTime;
    isEqual(other: LocalDateTime): boolean;
    withAbstractDateTime(abstractDateTime: AbstractDateTime): LocalDateTime;
    withAbstractTime(abstractTime: AbstractTime): LocalDateTime;
    withAbstractDate(abstractDate: AbstractDate): LocalDateTime;
    withAddedDuration(duration: Duration): LocalDateTime;
    withStartOfDay(): LocalDateTime;
    withEndOfDay(): LocalDateTime;
    withStartOfWeek(): LocalDateTime;
    withEndOfWeek(): LocalDateTime;
    withStartOfMonth(): LocalDateTime;
    withEndOfMonth(): LocalDateTime;
    withStartOfYear(): LocalDateTime;
    withEndOfYear(): LocalDateTime;
    withTimeZone(timeZone: TimeZone, method: TimezoneChangeMethod): LocalDateTime;
    toWeekday(): Weekday;
    toWeekdayName(format: WeekdayStringFormat): string;
    toInstant(): Instant;
    toTimeZoneAbbreviation(): string;
    toISOString(): string;
}
