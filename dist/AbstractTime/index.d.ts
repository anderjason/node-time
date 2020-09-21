export declare type TimeStringFormat = "0000" | "000000" | "00:00" | "00:00:??" | "00:00:00" | "00:00:00.???" | "00:00:00.000" | "0:00 AM" | "0:00:?? AM" | "0:00:00 AM" | "00:00 AM" | "00:00:?? AM" | "00:00:00 AM";
export interface AbstractTimeProps {
    hours24?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export declare class AbstractTime {
    static ofStartOfDay(): AbstractTime;
    static ofEndOfDay(): AbstractTime;
    static isEqual(a: AbstractTime, b: AbstractTime): boolean;
    readonly hours24: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly milliseconds: number;
    constructor(props: AbstractTimeProps);
    get hours12(): number;
    get amPm(): "AM" | "PM";
    isEqual(other: AbstractTime): boolean;
    toString(format: TimeStringFormat): string;
    toWrittenTimeString(): string;
    withValues(change: Partial<AbstractTimeProps>): AbstractTime;
    withBeginningOfDay(): AbstractTime;
    withEndOfDay(): AbstractTime;
}
