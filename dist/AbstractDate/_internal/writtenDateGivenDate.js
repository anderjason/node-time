"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writtenDateGivenDate = void 0;
const nameGivenCalendarMonth_1 = require("./nameGivenCalendarMonth");
function writtenDateGivenDate(date, format) {
    switch (format) {
        case "January 1, 1980":
            const monthName = nameGivenCalendarMonth_1.nameGivenCalendarMonth(date.calendarMonth);
            return `${monthName} ${date.calendarDay}, ${date.calendarYear}`;
        default:
            throw new Error("Unsupported format in writtenDateGivenDate");
    }
}
exports.writtenDateGivenDate = writtenDateGivenDate;
//# sourceMappingURL=writtenDateGivenDate.js.map