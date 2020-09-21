"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekdayNameGivenWeekday = void 0;
const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const shortNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
function weekdayNameGivenWeekday(weekday, format) {
    if (weekday < 0 || weekday > 6) {
        throw new Error("Invalid weekday");
    }
    switch (format) {
        case "Thursday":
            return names[weekday];
        case "Thurs":
            return shortNames[weekday];
        case "Thu":
            return names[weekday].slice(0, 3);
        case "Th":
            return names[weekday].slice(0, 2);
        case "T":
            return names[weekday].slice(0, 1);
        default:
            throw new Error("Unsupported format");
    }
}
exports.weekdayNameGivenWeekday = weekdayNameGivenWeekday;
//# sourceMappingURL=weekdayNameGivenWeekday.js.map