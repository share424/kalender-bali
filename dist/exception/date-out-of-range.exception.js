"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateOutOfRangeException extends Error {
    constructor() {
        super(`the given date is out of range`);
    }
}
exports.default = DateOutOfRangeException;
//# sourceMappingURL=date-out-of-range.exception.js.map