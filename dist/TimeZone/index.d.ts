export declare class TimeZone {
    static givenIanaName(ianaName: string): TimeZone;
    static ofUTC(): TimeZone;
    static ofThisMachine(): TimeZone;
    static toIanaNames(): string[];
    readonly ianaName: string;
    private constructor();
}
