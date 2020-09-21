"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringGivenAbstractTime = void 0;
function stringWithPaddedZeros(input, width) {
    let result = String(Math.round(input));
    return result.length >= width
        ? result
        : new Array(width - result.length + 1).join("0") + result;
}
function stringGivenAbstractTime(abstractTime, format) {
    const hours12 = abstractTime.hours12;
    const padHours12 = stringWithPaddedZeros(hours12, 2);
    const padHours24 = stringWithPaddedZeros(abstractTime.hours24, 2);
    const padMinutes = stringWithPaddedZeros(abstractTime.minutes, 2);
    const padSeconds = stringWithPaddedZeros(abstractTime.seconds, 2);
    const padMilliseconds = stringWithPaddedZeros(abstractTime.milliseconds, 3);
    switch (format) {
        case "0000":
            return `${padHours24}${padMinutes}`;
        case "000000":
            return `${padHours24}${padMinutes}${padSeconds}`;
        case "00:00":
            return `${padHours24}:${padMinutes}`;
        case "00:00:00":
            return `${padHours24}:${padMinutes}:${padSeconds}`;
        case "00:00:??":
            if (abstractTime.seconds === 0) {
                return `${padHours24}:${padMinutes}`;
            }
            else {
                return `${padHours24}:${padMinutes}:${padSeconds}`;
            }
        case "00:00:00.???":
            if (abstractTime.milliseconds === 0) {
                return `${padHours24}:${padMinutes}:${padSeconds}`;
            }
            else {
                return `${padHours24}:${padMinutes}:${padSeconds}.${padMilliseconds}`;
            }
        case "00:00:00.000":
            return `${padHours24}:${padMinutes}:${padSeconds}.${padMilliseconds}`;
        case "0:00 AM":
            return `${hours12}:${padMinutes} ${abstractTime.amPm}`;
        case "0:00:?? AM":
            if (abstractTime.seconds === 0) {
                return `${hours12}:${padMinutes} ${abstractTime.amPm}`;
            }
            else {
                return `${hours12}:${padMinutes}:${padSeconds} ${abstractTime.amPm}`;
            }
        case "0:00:00 AM":
            return `${hours12}:${padMinutes}:${padSeconds} ${abstractTime.amPm}`;
        case "00:00 AM":
            return `${padHours12}:${padMinutes} ${abstractTime.amPm}`;
        case "00:00:?? AM":
            if (abstractTime.seconds === 0) {
                return `${padHours12}:${padMinutes} ${abstractTime.amPm}`;
            }
            else {
                return `${padHours12}:${padMinutes}:${padSeconds} ${abstractTime.amPm}`;
            }
        case "00:00:00 AM":
            return `${padHours12}:${padMinutes}:${padSeconds} ${abstractTime.amPm}`;
        default:
            throw new Error("Unsupported format in sortableTimeStringGivenTime");
    }
}
exports.stringGivenAbstractTime = stringGivenAbstractTime;
//# sourceMappingURL=stringGivenAbstractTime.js.map