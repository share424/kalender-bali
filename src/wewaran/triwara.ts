import Wewaran from './wewaran';

const TRIWARA = [
    {
        name: 'pasah',
        urip: 9
    },
    {
        name: 'beteng',
        urip: 4
    },
    {
        name: 'kajeng',
        urip: 7
    }
];

export class TriWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 3, TRIWARA);
    }

}