"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDateTime = void 0;
class AbstractDateTime {
    constructor(props) {
        this.abstractDate = props.abstractDate;
        this.abstractTime = props.abstractTime;
    }
    toSortableString(format) {
        let dateStr;
        let timeStr;
        switch (format) {
            case "2019-12-31 23:59:59":
                dateStr = this.abstractDate.toSortableDateString("2019-12-31");
                timeStr = this.abstractTime.toSortableTimeString("23:59:59");
                return `${dateStr} ${timeStr}`;
            case "20191231-235959":
                dateStr = this.abstractDate.toSortableDateString("20191231");
                timeStr = this.abstractTime.toSortableTimeString("235959");
                return `${dateStr}-${timeStr}`;
            default:
                break;
        }
    }
    withAbstractDate(abstractDate) {
        return new AbstractDateTime({
            abstractDate,
            abstractTime: this.abstractTime,
        });
    }
    withAbstractTime(abstractTime) {
        return new AbstractDateTime({
            abstractDate: this.abstractDate,
            abstractTime,
        });
    }
}
exports.AbstractDateTime = AbstractDateTime;
//# sourceMappingURL=index.js.map