export declare class TimeZone {
    private _ianaName;
    static ofIanaName(ianaName: string): TimeZone;
    static ofUTC(): TimeZone;
    static ofThisMachine(): TimeZone;
    static toIanaNames(): string[];
    private constructor();
    toIanaName(): string;
}
