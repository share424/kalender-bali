"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInWeeks = exports.differenceInDays = void 0;
const differenceInDays = (dt1, dt2) => {
    const time = (dt2.getTime() - dt1.getTime());
    const days = time / (1000 * 3600 * 24);
    return days;
};
exports.differenceInDays = differenceInDays;
const differenceInWeeks = (dt1, dt2) => {
    const numDays = dt1.getDay();
    dt1.setDate(dt1.getDate() - numDays);
    const days = exports.differenceInDays(dt1, dt2);
    return Math.floor(days / 7);
};
exports.differenceInWeeks = differenceInWeeks;
//# sourceMappingURL=helper.js.map