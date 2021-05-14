import Wewaran from './wewaran';

const SAD_WARA = [
    {
        name: 'tungleh',
        urip: 7
    },
    {
        name: 'aryang',
        urip: 6
    },
    {
        name: 'wurukung',
        urip: 5
    },
    {
        name: 'paniron',
        urip: 8
    },
    {
        name: 'was',
        urip: 9
    },
    {
        name: 'maulu',
        urip: 3
    }
]

export class SadWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 6, SAD_WARA);
    }

}