"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writtenTimeStringGivenAbstractTime = void 0;
function writtenTimeStringGivenAbstractTime(abstractTime) {
    // like 9:45
    let result = `${abstractTime.hours12}:${abstractTime.minutes.toString().padStart(2, "0")}`;
    const seconds = abstractTime.seconds;
    const milliseconds = abstractTime.milliseconds;
    if (seconds != 0 || milliseconds != 0) {
        // like 9:45:19
        result += `:${seconds.toString().padStart(2, "0")}`;
    }
    if (milliseconds != 0) {
        // like 9:45:19.110
        result += `.${Math.round(milliseconds)}`;
    }
    result += ` ${abstractTime.amPm}`;
    return result;
}
exports.writtenTimeStringGivenAbstractTime = writtenTimeStringGivenAbstractTime;
//# sourceMappingURL=writtenTimeStringGivenAbstractTime.js.map