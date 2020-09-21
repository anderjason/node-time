"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringGivenAbstractDate = void 0;
const nameGivenCalendarMonth_1 = require("./nameGivenCalendarMonth");
function stringWithPaddedZeros(input, width) {
    let result = String(input);
    return result.length >= width
        ? result
        : new Array(width - result.length + 1).join("0") + result;
}
function stringGivenAbstractDate(date, format) {
    const year = date.calendarYear;
    const padMonth = stringWithPaddedZeros(date.calendarMonth, 2);
    const padDay = stringWithPaddedZeros(date.calendarDay, 2);
    switch (format) {
        case "January 1, 2020":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "January")} ${date.calendarDay}, ${date.calendarYear}`;
        case "January 1":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "January")} ${date.calendarDay}`;
        case "Jan 1 2020":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "Jan")} ${date.calendarDay} ${date.calendarYear}`;
        case "Jan 01 2020":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "Jan")} ${padDay} ${date.calendarYear}`;
        case "Jan 1":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "Jan")} ${date.calendarDay}`;
        case "Jan 01":
            return `${nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth, "Jan")} ${padDay}`;
        case "2020-01-01":
            return `${year}-${padMonth}-${padDay}`;
        case "20200101":
            return `${year}${padMonth}${padDay}`;
        default:
            throw new Error("Unsupported format");
    }
}
exports.stringGivenAbstractDate = stringGivenAbstractDate;
//# sourceMappingURL=stringGivenAbstractDate.js.map