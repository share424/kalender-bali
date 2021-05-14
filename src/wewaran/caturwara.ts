import Wewaran from './wewaran';

const CATUR_WARA = [
    {
        name: 'sri',
        urip: 4
    },
    {
        name: 'laba',
        urip: 5
    },
    {
        name: 'jaya',
        urip: 9
    },
    {
        name: 'mandala',
        urip: 7
    }
]

export class CaturWara extends Wewaran {

    constructor(pawukon: number) {
        super(pawukon, 4, CATUR_WARA);
    }

    process(pawukon: number): number {
        // TRIJAYA occur on pawukon 77 and 79
        if(pawukon < 77) {
            return (pawukon + 2) % this.modulo;
        } else if( pawukon > 79) {
            return pawukon % this.modulo
        } else {
            return 3; // return 3 because effect of normalization
        }
    }

}