import Wewaran from './wewaran';
import { SaptaWara } from './saptawara';
import { PancaWara } from './pancawara';

const EKA_WARA = [
    {
        name: 'luang',
        urip: 1
    },
    {
        name: 'undefined',
        urip: 0
    }
]

export class EkaWara extends Wewaran {

    private saptaWara: SaptaWara;

    private pancaWara: PancaWara;

    constructor(pawukon: number) {
        super(pawukon, 2, EKA_WARA);
        this.saptaWara = new SaptaWara(pawukon);
        this.pancaWara = new PancaWara(pawukon);
        const value = (this.saptaWara.urip + this.pancaWara.urip) % this.modulo;
        this.value = this.normalize(value);
        this.name = this.values[this.value].name;
        this.urip = this.values[this.value].urip;
    }

}