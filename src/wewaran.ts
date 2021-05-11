import { differenceInDays } from './helper';
import { getWuku } from './wuku';

const WEWARAN = {
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

export const getEkaWara = (date: Date): number => {
    return 0;
}

export const getDwiWara = (date: Date): number => {
    return 1;
}

const normalize = (value: number, max: number): number => {
    if(value == 0) return max;
    return value - 1;
}

// I Made Yasna, et. al.2020.Matematika Dalam Perhitungan Wewaran Pada Sistem 
// Tahun Wuku (Pawukon) di Bali: Suatu Kajian Pustaka.IKIP Saraswati: Suluh Pendidikan
// e-ISSN 2623-1697
export const getTriWara = (date: Date): number | null => {
    const wuku = getWuku(date);
    if(!wuku) return null;
    const saptaWara = getSaptaWara(date);
    const triWara = ((wuku + 1) * 7 + saptaWara) % 3;
    return normalize(triWara, 2);
}

export const triWaraToString = (triWara: number): string => {
    return WEWARAN.TRI_WARA[triWara];
}

// I Made Yasna, et. al.2020.Matematika Dalam Perhitungan Wewaran Pada Sistem 
// Tahun Wuku (Pawukon) di Bali: Suatu Kajian Pustaka.IKIP Saraswati: Suluh Pendidikan
// e-ISSN 2623-1697
export const getCaturWara = (date: Date): number | null => {
    const wuku = getWuku(date);
    if(!wuku) return null;
    const saptaWara = getSaptaWara(date);
    // RULE: 1
    // sinta - dungulan, if dungulan, sapta wara must be redite to use rule 1
    if(wuku >= 0 && wuku < 10 || (wuku == 10 && saptaWara == 0)) {
        const caturWara = ((wuku + 1) * 7 + (saptaWara + 2)) % 4;
        return normalize(caturWara, 3);
    }
    // RULE: 2
    // dungulan - watugunung, if dungulan, sapta wara must be start from buddha
    else if(wuku > 10 || (wuku == 10 && saptaWara >= 3)) {
        const caturWara = ((wuku + 1) * 7 + saptaWara) % 4;
        return normalize(caturWara, 3);
    } 
    // RULE: 3
    // Jaya Tiga, this event only occur on dungulan redite, soma, and anggara
    else {
        return 2;
    }
}

export const caturWaraToString = (caturWara: number): string => {
    return WEWARAN.CATUR_WARA[caturWara];
}

export const getPancaWara = (date: Date): number | null => {
    const wuku = getWuku(date);
    if(!wuku) return null;
    const saptaWara = getSaptaWara(date);
    const pancaWara = ((wuku + 1) * 7 + saptaWara) % 5;
    return normalize(pancaWara, 4);
}

export const pancaWaraToString = (pancaWara: number): string => {
    return WEWARAN.PANCA_WARA[pancaWara];
}

export const getSadWara = (date: Date): number | null => {
    const wuku = getWuku(date);
    if(!wuku) return null;
    const saptaWara = getSaptaWara(date);
    const sadWara = ((wuku + 1) * 7 + saptaWara) % 6;
    return normalize(sadWara, 5);
}

export const sadWaraToString = (sadWara: number): string => {
    return WEWARAN.SAD_WARA[sadWara];
}

export const getSaptaWara = (date: Date): number => {
    const numOfDay = date.getDay();
    return numOfDay;
}