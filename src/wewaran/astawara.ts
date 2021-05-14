import Wewaran from './wewaran';

const ASTA_WARA = [
    {
        name: 'sri',
        urip: 6
    },
    {
        name: 'indra',
        urip: 5
    },
    {
        name: 'guru',
        urip: 8
    },
    {
        name: 'yama',
        urip: 9
    },
    {
        name: 'ludra',
        urip: 3
    },
    {
        name: 'brahma',
        urip: 7
    },
    {
        name: 'kala',
        urip: 1
    },
    {
        name: 'uma',
        urip: 4
    }
]

export class AstaWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 8, ASTA_WARA);
    }

    process(pawukon: number): number {
        if(pawukon < 71) {
            return pawukon % this.modulo;
        } else if(pawukon > 73) {
            return (pawukon - 2) % this.modulo;
        } else {
            return 7;
        }
    }

}