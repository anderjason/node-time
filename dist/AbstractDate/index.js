"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDate = void 0;
const sortableDateStringGivenDate_1 = require("./_internal/sortableDateStringGivenDate");
const writtenDateGivenDate_1 = require("./_internal/writtenDateGivenDate");
class AbstractDate {
    constructor(props) {
        this.calendarYear = props.calendarYear;
        this.calendarMonth = props.calendarMonth;
        this.calendarDay = props.calendarDay;
    }
    toSortableDateString(format) {
        return sortableDateStringGivenDate_1.sortableDateStringGivenDate(this, format);
    }
    toWrittenDateString(format) {
        return writtenDateGivenDate_1.writtenDateGivenDate(this, format);
    }
    withChange(change) {
        return new AbstractDate(Object.assign({ calendarYear: this.calendarYear, calendarMonth: this.calendarMonth, calendarDay: this.calendarDay }, change));
    }
}
exports.AbstractDate = AbstractDate;
//# sourceMappingURL=index.js.map