"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInWeeks = exports.differenceInDays = void 0;
var differenceInDays = function (dt1, dt2) {
    var time = (dt2.getTime() - dt1.getTime());
    var days = time / (1000 * 3600 * 24);
    return days;
};
exports.differenceInDays = differenceInDays;
var differenceInWeeks = function (dt1, dt2) {
    var numDays = dt1.getDay();
    dt1.setDate(dt1.getDate() - numDays);
    var days = exports.differenceInDays(dt1, dt2);
    return Math.floor(days / 7);
};
exports.differenceInWeeks = differenceInWeeks;
//# sourceMappingURL=helper.js.map