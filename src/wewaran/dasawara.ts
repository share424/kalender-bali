import Wewaran from './wewaran';
import { SaptaWara } from './saptawara';
import { PancaWara } from './pancawara';

const DASA_WARA = [
    {
        name: 'pandita',
        urip: 5
    },
    {
        name: 'pati',
        urip: 7
    },
    {
        name: 'suka',
        urip: 10
    },
    {
        name: 'duka',
        urip: 4
    },
    {
        name: 'sri',
        urip: 6
    },
    {
        name: 'manu',
        urip: 2
    },
    {
        name: 'manusa',
        urip: 3
    },
    {
        name: 'raja',
        urip: 8
    },
    {
        name: 'dewa',
        urip: 9
    },
    {
        name: 'raksasa',
        urip: 1
    }
]

export class DasaWara extends Wewaran {

    private saptaWara: SaptaWara;

    private pancaWara: PancaWara;

    constructor(pawukon: number) {
        super(pawukon, 10, DASA_WARA);
        this.saptaWara = new SaptaWara(pawukon);
        this.pancaWara = new PancaWara(pawukon);
        const value = (this.saptaWara.urip + this.pancaWara.urip + 1) % this.modulo;
        this.value = this.normalize(value);
        this.name = this.values[this.value].name;
        this.urip = this.values[this.value].urip;
    }

}