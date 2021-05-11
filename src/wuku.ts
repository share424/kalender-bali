import { differenceInWeeks } from './helper';

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

const startDate = new Date(Date.parse('1599-12-26'));
const startWuku = 18;

export const getWuku = (date: Date): number | null => {
    if(date < startDate) {
        return null;
    }
    const weeks = differenceInWeeks(startDate, date)
    const wuku = (weeks + startWuku) % 30;
    return wuku;
}

export const getWukuInRange = (dt1: Date, dt2: Date): number[] | null => {
    if(dt1 < startDate || dt2 < startDate || dt2 < dt1) {
        return null;
    }
    const weeks = differenceInWeeks(startDate, dt1);
    const diffWeeks = differenceInWeeks(dt1, dt2);
    const wukus = [];
    const start = (weeks + startWuku) % 30;
    for(let i = 0; i<=diffWeeks; i++) {
        const wuku = (start + i) % 30
        wukus.push(wuku);
    }
    return wukus;
}

export const wukuToString = (wuku: number) => {
    return WUKU[wuku];
}