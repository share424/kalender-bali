"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wuku_1 = require("./wuku");
var wewaran_1 = require("./wewaran");
var DAYS = [
    'redite',
    'soma',
    'anggara',
    'buda',
    'wrhaspati',
    'sukra',
    'saniscara'
];
var KalenderBali = /** @class */ (function () {
    function KalenderBali(date) {
        this.date = new Date();
        if (typeof date == 'string') {
            this.date = new Date(Date.parse(date));
        }
        else if (date instanceof Date) {
            this.date = date;
        }
    }
    KalenderBali.prototype.getWuku = function (inString) {
        if (inString === void 0) { inString = false; }
        var wuku = wuku_1.getWuku(this.date);
        if (inString && wuku != null)
            return wuku_1.wukuToString(wuku);
        return wuku;
    };
    KalenderBali.prototype.getWukuUntil = function (dt, inString) {
        if (inString === void 0) { inString = false; }
        var wukus = wuku_1.getWukuInRange(this.date, dt);
        if (inString)
            return wukus === null || wukus === void 0 ? void 0 : wukus.map(wuku_1.wukuToString);
        return wukus;
    };
    KalenderBali.prototype.getTriWara = function (inString) {
        if (inString === void 0) { inString = false; }
        var triWara = wewaran_1.getTriWara(this.date);
        if (inString && triWara != null)
            return wewaran_1.triWaraToString(triWara);
        return triWara;
    };
    KalenderBali.prototype.getCaturWara = function (inString) {
        if (inString === void 0) { inString = false; }
        var caturWara = wewaran_1.getCaturWara(this.date);
        if (inString && caturWara != null)
            return wewaran_1.caturWaraToString(caturWara);
        return caturWara;
    };
    KalenderBali.prototype.getPancaWara = function (inString) {
        if (inString === void 0) { inString = false; }
        var pancaWara = wewaran_1.getPancaWara(this.date);
        if (inString && pancaWara != null)
            return wewaran_1.pancaWaraToString(pancaWara);
        return pancaWara;
    };
    KalenderBali.prototype.getSadWara = function (inString) {
        if (inString === void 0) { inString = false; }
        var sadWara = wewaran_1.getSadWara(this.date);
        if (inString && sadWara != null)
            return wewaran_1.sadWaraToString(sadWara);
        return sadWara;
    };
    KalenderBali.prototype.getDayOfWeek = function (pattern) {
        if (pattern == 'd') {
            return DAYS[this.date.getDay()];
        }
        return this.date.getDay();
    };
    return KalenderBali;
}());
exports.default = KalenderBali;
//# sourceMappingURL=kalender-bali.js.map