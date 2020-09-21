import { Instant } from "@anderjason/time";
import { Duration } from "@anderjason/time";
import { TimeZone } from "../TimeZone";
import { AbstractDateTime } from "../AbstractDateTime";
import { AbstractTime } from "../AbstractTime";
import { AbstractDate } from "../AbstractDate";
export interface LocalDateTimeProps {
    abstractDateTime: AbstractDateTime;
    timeZone: TimeZone;
}
export declare class LocalDateTime {
    static givenTimeToday(abstractTime: AbstractTime, timeZone: TimeZone): LocalDateTime;
    static ofTodayStart(timeZone: TimeZone): LocalDateTime;
    static ofTodayEnd(timeZone: TimeZone): LocalDateTime;
    static ofWeekStart(timeZone: TimeZone): LocalDateTime;
    static ofEndOfThisWeek(timeZone: TimeZone): LocalDateTime;
    static ofNow(timeZone: TimeZone): LocalDateTime;
    static givenInstant(instant: Instant, timeZone: TimeZone): LocalDateTime;
    readonly abstractDateTime: AbstractDateTime;
    readonly timeZone: TimeZone;
    constructor(props: LocalDateTimeProps);
    withAbstractDateTime(abstractDateTime: AbstractDateTime): LocalDateTime;
    withAbstractTime(abstractTime: AbstractTime): LocalDateTime;
    withAbstractDate(abstractDate: AbstractDate): LocalDateTime;
    withAddedDuration(duration: Duration): LocalDateTime;
    withDayStart(): LocalDateTime;
    withDayEnd(): LocalDateTime;
    withWeekStart(): LocalDateTime;
    withWeekEnd(): LocalDateTime;
    withMonthStart(): LocalDateTime;
    toDayOfWeek(): number;
    toInstant(): Instant;
}
