import Wewaran from './wewaran';

const PANCA_WARA = [
    {
        name: 'umanis',
        urip: 5
    },
    {
        name: 'paing',
        urip: 9
    },
    {
        name: 'pon',
        urip: 7
    },
    {
        name: 'wage',
        urip: 4
    },
    {
        name: 'kliwon',
        urip: 8
    }
]

export class PancaWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 5, PANCA_WARA);
    }

    normalize(value: number): number {
        return value;
    }

}