"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortableDateStringGivenDate = void 0;
function stringWithPaddedZeros(input, width) {
    let result = String(input);
    return result.length >= width
        ? result
        : new Array(width - result.length + 1).join("0") + result;
}
function sortableDateStringGivenDate(date, format) {
    const year = date.calendarYear;
    const month = stringWithPaddedZeros(date.calendarMonth, 2);
    const day = stringWithPaddedZeros(date.calendarDay, 2);
    switch (format) {
        case "2019-12-31":
            return `${year}-${month}-${day}`;
        case "20191231":
            return `${year}${month}${day}`;
        case "191231":
            const twoDigitYear = year.toString().slice(2);
            return `${twoDigitYear}${month}${day}`;
        default:
            throw new Error("Unsupported format");
    }
}
exports.sortableDateStringGivenDate = sortableDateStringGivenDate;
//# sourceMappingURL=sortableDateStringGivenDate.js.map