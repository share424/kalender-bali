import { differenceInWeeks } from './helper';
import { DateOutOfRangeException } from './exception';

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

export default class Wuku {

    public value: number;

    public name: string;

    public readonly values: WukuValue[] = WUKU.map((wuku, value) => {
        return { value, name: wuku }
    });

    public readonly startDate: Date = new Date(Date.parse('1599-12-26'));

    public readonly startWuku: number = 18; // tambir

    constructor(date: Date) {
        if(date < this.startDate) {
            throw new DateOutOfRangeException();
        }
        const weeks = differenceInWeeks(this.startDate, date);
        this.value = (weeks + this.startWuku) % 30;
        this.name = this.values[this.value].name;
    }

}

interface WukuValue {
    value: number;
    name: string;
}