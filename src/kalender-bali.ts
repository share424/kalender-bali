import { getWuku, getWukuInRange, wukuToString } from './wuku';
import { 
    getEkaWara, 
    getDwiWara, 
    getTriWara,
    getCaturWara,
    getPancaWara,
    getSadWara,
    triWaraToString,
    caturWaraToString,
    pancaWaraToString,
    sadWaraToString
} from './wewaran';

const DAYS = [
    'redite',
    'soma',
    'anggara',
    'buda',
    'wrhaspati',
    'sukra',
    'saniscara'
];

export default class KalenderBali {

    private date: Date = new Date();

    constructor(date: string|Date|undefined) {
        if(typeof date == 'string') {
            this.date = new Date(Date.parse(date));
        } else if(date instanceof Date) {
            this.date = date;
        }
    }

    getWuku(inString: boolean = false) {
        const wuku = getWuku(this.date);
        if(inString && wuku != null) return wukuToString(wuku);
        return wuku;
    }

    getWukuUntil(dt: Date, inString: boolean = false) {
        const wukus = getWukuInRange(this.date, dt);
        if(inString) return wukus?.map(wukuToString);
        return wukus
    }

    getTriWara(inString: boolean = false) {
        const triWara = getTriWara(this.date);
        if(inString && triWara != null) return triWaraToString(triWara);
        return triWara;
    }

    getCaturWara(inString: boolean = false) {
        const caturWara = getCaturWara(this.date);
        if(inString && caturWara != null) return caturWaraToString(caturWara);
        return caturWara;
    }

    getPancaWara(inString: boolean = false) {
        const pancaWara = getPancaWara(this.date);
        if(inString && pancaWara != null) return pancaWaraToString(pancaWara);
        return pancaWara;
    }

    getSadWara(inString: boolean = false) {
        const sadWara = getSadWara(this.date);
        if(inString && sadWara != null) return sadWaraToString(sadWara);
        return sadWara;
    }

    getDayOfWeek(pattern: string|undefined) {
        if(pattern == 'd') {
            return DAYS[this.date.getDay()];
        }
        return this.date.getDay();
    }

}