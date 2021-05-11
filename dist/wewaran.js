"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaptaWara = exports.sadWaraToString = exports.getSadWara = exports.pancaWaraToString = exports.getPancaWara = exports.caturWaraToString = exports.getCaturWara = exports.triWaraToString = exports.getTriWara = exports.getDwiWara = exports.getEkaWara = void 0;
var wuku_1 = require("./wuku");
var WEWARAN = {
    EKA_WARA: [
        'luang'
    ],
    DWI_WARA: [
        'manga',
        'pepet'
    ],
    TRI_WARA: [
        'pasah',
        'beteng',
        'kajeng'
    ],
    CATUR_WARA: [
        'sri',
        'laba',
        'jaya',
        'mandala'
    ],
    PANCA_WARA: [
        'umanis',
        'pahing',
        'pon',
        'wage',
        'keliwon'
    ],
    SAD_WARA: [
        'tungleh',
        'aryang',
        'wurukung',
        'paniron',
        'was',
        'maulu',
    ],
    SAPTA_WARA: [
        'redite',
        'soma',
        'anggara',
        'buddha',
        'wrhaspati',
        'sukra',
        'saniscara'
    ],
    ASTA_WARA: [
        'sri',
        'indra',
        'guru',
        'yama',
        'ludra',
        'brahma',
        'kala',
        'uma'
    ],
    SANGA_WARA: [
        'dangu',
        'jagur',
        'gigis',
        'nohan',
        'ogan',
        'erangan',
        'urungan',
        'tulus',
        'dadi'
    ],
    DASA_WARA: [
        'pandita',
        'pati',
        'suka',
        'duka',
        'sri',
        'manu',
        'manusa',
        'raja',
        'dewa',
        'raksasa'
    ]
};
var getEkaWara = function (date) {
    return 0;
};
exports.getEkaWara = getEkaWara;
var getDwiWara = function (date) {
    return 1;
};
exports.getDwiWara = getDwiWara;
var normalize = function (value, max) {
    if (value == 0)
        return max;
    return value - 1;
};
// I Made Yasna, et. al.2020.Matematika Dalam Perhitungan Wewaran Pada Sistem 
// Tahun Wuku (Pawukon) di Bali: Suatu Kajian Pustaka.IKIP Saraswati: Suluh Pendidikan
// e-ISSN 2623-1697
var getTriWara = function (date) {
    var wuku = wuku_1.getWuku(date);
    if (!wuku)
        return null;
    var saptaWara = exports.getSaptaWara(date);
    var triWara = ((wuku + 1) * 7 + saptaWara) % 3;
    return normalize(triWara, 2);
};
exports.getTriWara = getTriWara;
var triWaraToString = function (triWara) {
    return WEWARAN.TRI_WARA[triWara];
};
exports.triWaraToString = triWaraToString;
// I Made Yasna, et. al.2020.Matematika Dalam Perhitungan Wewaran Pada Sistem 
// Tahun Wuku (Pawukon) di Bali: Suatu Kajian Pustaka.IKIP Saraswati: Suluh Pendidikan
// e-ISSN 2623-1697
var getCaturWara = function (date) {
    var wuku = wuku_1.getWuku(date);
    if (!wuku)
        return null;
    var saptaWara = exports.getSaptaWara(date);
    // RULE: 1
    // sinta - dungulan, if dungulan, sapta wara must be redite to use rule 1
    if (wuku >= 0 && wuku < 10 || (wuku == 10 && saptaWara == 0)) {
        var caturWara = ((wuku + 1) * 7 + (saptaWara + 2)) % 4;
        return normalize(caturWara, 3);
    }
    // RULE: 2
    // dungulan - watugunung, if dungulan, sapta wara must be start from buddha
    else if (wuku > 10 || (wuku == 10 && saptaWara >= 3)) {
        var caturWara = ((wuku + 1) * 7 + saptaWara) % 4;
        return normalize(caturWara, 3);
    }
    // RULE: 3
    // Jaya Tiga, this event only occur on dungulan redite, soma, and anggara
    else {
        return 2;
    }
};
exports.getCaturWara = getCaturWara;
var caturWaraToString = function (caturWara) {
    return WEWARAN.CATUR_WARA[caturWara];
};
exports.caturWaraToString = caturWaraToString;
var getPancaWara = function (date) {
    var wuku = wuku_1.getWuku(date);
    if (!wuku)
        return null;
    var saptaWara = exports.getSaptaWara(date);
    var pancaWara = ((wuku + 1) * 7 + saptaWara) % 5;
    return normalize(pancaWara, 4);
};
exports.getPancaWara = getPancaWara;
var pancaWaraToString = function (pancaWara) {
    return WEWARAN.PANCA_WARA[pancaWara];
};
exports.pancaWaraToString = pancaWaraToString;
var getSadWara = function (date) {
    var wuku = wuku_1.getWuku(date);
    if (!wuku)
        return null;
    var saptaWara = exports.getSaptaWara(date);
    var sadWara = ((wuku + 1) * 7 + saptaWara) % 6;
    return normalize(sadWara, 5);
};
exports.getSadWara = getSadWara;
var sadWaraToString = function (sadWara) {
    return WEWARAN.SAD_WARA[sadWara];
};
exports.sadWaraToString = sadWaraToString;
var getSaptaWara = function (date) {
    var numOfDay = date.getDay();
    return numOfDay;
};
exports.getSaptaWara = getSaptaWara;
//# sourceMappingURL=wewaran.js.map