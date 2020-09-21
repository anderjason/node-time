export declare type WrittenDateStringFormat = "January 1, 1980";
export declare type SortableDateStringFormat = "2019-12-31" | "20191231" | "191231";
export declare type AbstractDateTimeStringFormat = "sortableDate" | "writtenDate" | "flexibleTime";
export interface AbstractDateProps {
    calendarYear: number;
    calendarMonth: number;
    calendarDay: number;
}
export declare class AbstractDate {
    readonly calendarYear: number;
    readonly calendarMonth: number;
    readonly calendarDay: number;
    constructor(props: AbstractDateProps);
    toSortableDateString(format: SortableDateStringFormat): string;
    toWrittenDateString(format: WrittenDateStringFormat): string;
    withChange(change: Partial<AbstractDateProps>): AbstractDate;
}
