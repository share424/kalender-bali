import Wewaran from './wewaran';

const SANGA_WARA = [
    {
        name: 'dangu',
        urip: 9
    },
    {
        name: 'jangur',
        urip: 8
    },
    {
        name: 'gigis',
        urip: 6
    },
    {
        name: 'nohan',
        urip: 7
    },
    {
        name: 'ogan',
        urip: 4
    },
    {
        name: 'erangan',
        urip: 5
    },
    {
        name: 'urungan',
        urip: 7
    },
    {
        name: 'tulus',
        urip: 3
    },
    {
        name: 'dadi',
        urip: 4
    }
]

export class SangaWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 9, SANGA_WARA);
    }

}