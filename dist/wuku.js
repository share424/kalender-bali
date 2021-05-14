"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var exception_1 = require("./exception");
var WUKU = [
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
var Wuku = /** @class */ (function () {
    function Wuku(date) {
        this.values = WUKU.map(function (wuku, value) {
            return { value: value, name: wuku };
        });
        this.startDate = new Date(Date.parse('1599-12-26'));
        this.startWuku = 18; // tambir
        if (date < this.startDate) {
            throw new exception_1.DateOutOfRangeException();
        }
        var weeks = helper_1.differenceInWeeks(this.startDate, date);
        this.value = (weeks + this.startWuku) % 30;
        this.name = this.values[this.value].name;
    }
    return Wuku;
}());
exports.default = Wuku;
//# sourceMappingURL=wuku.js.map