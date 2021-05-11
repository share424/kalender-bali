"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wukuToString = exports.getWukuInRange = exports.getWuku = void 0;
var helper_1 = require("./helper");
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
var startDate = new Date(Date.parse('1599-12-26'));
var startWuku = 18;
var getWuku = function (date) {
    if (date < startDate) {
        return null;
    }
    var weeks = helper_1.differenceInWeeks(startDate, date);
    var wuku = (weeks + startWuku) % 30;
    return wuku;
};
exports.getWuku = getWuku;
var getWukuInRange = function (dt1, dt2) {
    if (dt1 < startDate || dt2 < startDate || dt2 < dt1) {
        return null;
    }
    var weeks = helper_1.differenceInWeeks(startDate, dt1);
    var diffWeeks = helper_1.differenceInWeeks(dt1, dt2);
    var wukus = [];
    var start = (weeks + startWuku) % 30;
    for (var i = 0; i <= diffWeeks; i++) {
        var wuku = (start + i) % 30;
        wukus.push(wuku);
    }
    return wukus;
};
exports.getWukuInRange = getWukuInRange;
var wukuToString = function (wuku) {
    return WUKU[wuku];
};
exports.wukuToString = wukuToString;
//# sourceMappingURL=wuku.js.map