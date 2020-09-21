export declare class TimeZone {
    static ofUTC(): TimeZone;
    static ofThisMachine(): TimeZone;
    static toIanaNames(): string[];
    static isEqual(a: TimeZone, b: TimeZone): boolean;
    readonly ianaName: string;
    constructor(ianaName: string);
    isEqual(other: TimeZone): boolean;
}
