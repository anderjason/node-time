export declare type CalendarMonthFormat = "January" | "Jan";
export declare type DateStringFormat = "January 1, 2020" | "January 1" | "Jan 1 2020" | "Jan 01 2020" | "Jan 1" | "Jan 01" | "2020-01-01" | "20200101";
export interface AbstractDateProps {
    calendarYear: number;
    calendarMonth: number;
    calendarDay: number;
}
export declare class AbstractDate {
    static isEqual(a: AbstractDate, b: AbstractDate): boolean;
    readonly calendarYear: number;
    readonly calendarMonth: number;
    readonly calendarDay: number;
    constructor(props: AbstractDateProps);
    isEqual(other: AbstractDate): boolean;
    toString(format: DateStringFormat): string;
    withValues(change: Partial<AbstractDateProps>): AbstractDate;
}
