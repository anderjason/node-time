"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameGivenCalendarMonth = void 0;
const names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
function nameGivenCalendarMonth(calendarMonth, format) {
    const index = calendarMonth - 1;
    if (index < 0 || index > 11) {
        throw new Error("Invalid calendar month");
    }
    switch (format) {
        case "January":
            return names[index];
        case "Jan":
            return names[index].slice(0, 3);
        default:
            throw new Error("Unsupported format");
    }
}
exports.nameGivenCalendarMonth = nameGivenCalendarMonth;
//# sourceMappingURL=nameGivenCalendarMonth.js.map