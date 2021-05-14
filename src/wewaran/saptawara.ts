import Wewaran from './wewaran';

const SAPTA_WARA = [
    {
        name: 'redita',
        urip: 5
    },
    {
        name: 'soma',
        urip: 4
    },
    {
        name: 'anggara',
        urip: 3
    },
    {
        name: 'buda',
        urip: 7
    },
    {
        name: 'wrespati',
        urip: 8
    },
    {
        name: 'sukra',
        urip: 6
    },
    {
        name: 'saniscara',
        urip: 9
    }
]

export class SaptaWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 7, SAPTA_WARA);
    }

    normalize(value: number): number {
        return value;
    }

}