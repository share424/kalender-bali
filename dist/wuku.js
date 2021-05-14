"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const exception_1 = require("./exception");
const WUKU = [
    'sinta',
    'landep',
    'ukir',
    'kulantir',
    'tolu',
    'grumbreg',
    'wariga',
    'warigadian',
    'julungwangi',
    'sungsang',
    'dungulan',
    'kuningan',
    'langkir',
    'medangsia',
    'pujut',
    'pahang',
    'kerulut',
    'merakih',
    'tambir',
    'medangkungan',
    'matal',
    'uye',
    'menail',
    'perangbakat',
    'bala',
    'ugu',
    'wayang',
    'kelawu',
    'dukut',
    'watugunung'
];
class Wuku {
    constructor(date) {
        this.values = WUKU.map((wuku, value) => {
            return { value, name: wuku };
        });
        this.startDate = new Date(Date.parse('1599-12-26'));
        this.startWuku = 18; // tambir
        if (date < this.startDate) {
            throw new exception_1.DateOutOfRangeException();
        }
        const weeks = helper_1.differenceInWeeks(this.startDate, date);
        this.value = (weeks + this.startWuku) % 30;
        this.name = this.values[this.value].name;
    }
}
exports.default = Wuku;
//# sourceMappingURL=wuku.js.map