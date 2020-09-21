export declare type SortableTimeStringFormat = "23:59:59" | "235959";
export interface AbstractTimeProps {
    hours24?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export declare class AbstractTime {
    static ofDayStart(): AbstractTime;
    static ofDayEnd(): AbstractTime;
    readonly hours24: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly milliseconds: number;
    constructor(props: AbstractTimeProps);
    get hours12(): number;
    get amPm(): "a.m." | "p.m.";
    toSortableTimeString(format: SortableTimeStringFormat): string;
    toWrittenTimeString(): string;
    withChange(change: Partial<AbstractTimeProps>): AbstractTime;
    withBeginningOfDay(): AbstractTime;
    withEndOfDay(): AbstractTime;
}
