import { AbstractDate, DateStringFormat } from "../AbstractDate";
import { AbstractTime, TimeStringFormat } from "../AbstractTime";
export declare type DateTimeStringFormat = "date at time" | "time on date" | "date time" | "date-time" | "datetime";
export interface AbstractDateTimeProps {
    abstractDate: AbstractDate;
    abstractTime: AbstractTime;
}
export declare class AbstractDateTime {
    static isEqual(a: AbstractDateTime, b: AbstractDateTime): boolean;
    readonly abstractDate: AbstractDate;
    readonly abstractTime: AbstractTime;
    constructor(props: AbstractDateTimeProps);
    isEqual(other: AbstractDateTime): boolean;
    toString(format: DateTimeStringFormat, dateFormat: DateStringFormat, timeFormat: TimeStringFormat): string;
    withAbstractDate(abstractDate: AbstractDate): AbstractDateTime;
    withAbstractTime(abstractTime: AbstractTime): AbstractDateTime;
}
