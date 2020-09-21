"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortableTimeStringGivenTime = void 0;
function stringWithPaddedZeros(input, width) {
    let result = String(input);
    return result.length >= width
        ? result
        : new Array(width - result.length + 1).join("0") + result;
}
function sortableTimeStringGivenTime(abstractTime, format) {
    const hours = stringWithPaddedZeros(abstractTime.hours24, 2);
    const minutes = stringWithPaddedZeros(abstractTime.minutes, 2);
    const seconds = stringWithPaddedZeros(abstractTime.seconds, 2);
    switch (format) {
        case "23:59:59":
            return `${hours}:${minutes}:${seconds}`;
        case "235959":
            return `${hours}${minutes}${seconds}`;
        default:
            throw new Error("Unsupported format in sortableTimeStringGivenTime");
    }
}
exports.sortableTimeStringGivenTime = sortableTimeStringGivenTime;
//# sourceMappingURL=sortableTimeStringGivenTime.js.map