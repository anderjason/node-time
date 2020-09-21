import { AbstractDate } from "../AbstractDate";
import { AbstractTime } from "../AbstractTime";
export declare type SortableDateTimeStringFormat = "2019-12-31 23:59:59" | "20191231-235959";
export interface AbstractDateTimeProps {
    abstractDate: AbstractDate;
    abstractTime: AbstractTime;
}
export declare class AbstractDateTime {
    readonly abstractDate: AbstractDate;
    readonly abstractTime: AbstractTime;
    constructor(props: AbstractDateTimeProps);
    toSortableString(format: SortableDateTimeStringFormat): string;
    withAbstractDate(abstractDate: AbstractDate): AbstractDateTime;
    withAbstractTime(abstractTime: AbstractTime): AbstractDateTime;
}
