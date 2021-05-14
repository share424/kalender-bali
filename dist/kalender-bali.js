"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var wewaran_1 = require("./wewaran");
var wuku_1 = __importDefault(require("./wuku"));
var KalenderBali = /** @class */ (function () {
    function KalenderBali(date) {
        this.date = new Date();
        if (typeof date == 'string') {
            this.date = new Date(Date.parse(date));
        }
        else if (date instanceof Date) {
            this.date = date;
        }
        // calculate wuku
        this.wuku = new wuku_1.default(this.date);
        // calculate day of weeks
        this.dayOfWeeks = this.date.getDay();
        // calculate pawukon
        this.pawukon = this.wuku.value * 7 + this.dayOfWeeks + 1;
        // calculate wewaran
        this.ekawara = new wewaran_1.EkaWara(this.pawukon);
        this.dwiwara = new wewaran_1.DwiWara(this.pawukon);
        this.triwara = new wewaran_1.TriWara(this.pawukon);
        this.caturwara = new wewaran_1.CaturWara(this.pawukon);
        this.pancawara = new wewaran_1.PancaWara(this.pawukon);
        this.sadwara = new wewaran_1.SadWara(this.pawukon);
        this.saptawara = new wewaran_1.SaptaWara(this.pawukon);
        this.astawara = new wewaran_1.AstaWara(this.pawukon);
        this.sangawara = new wewaran_1.SangaWara(this.pawukon);
        this.dasawara = new wewaran_1.DasaWara(this.pawukon);
    }
    return KalenderBali;
}());
exports.default = KalenderBali;
//# sourceMappingURL=kalender-bali.js.map