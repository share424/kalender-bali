import Wewaran from './wewaran';
import { SaptaWara } from './saptawara';
import { PancaWara } from './pancawara';

const DWI_WARA = [
    {
        name: 'menga',
        urip: 5
    },
    {
        name: 'pepet',
        urip: 7
    }
]

export class DwiWara extends Wewaran {

    private saptaWara: SaptaWara;

    private pancaWara: PancaWara;

    constructor(pawukon: number) {
        super(pawukon, 2, DWI_WARA);
        this.saptaWara = new SaptaWara(pawukon);
        this.pancaWara = new PancaWara(pawukon);
        const value = (this.saptaWara.urip + this.pancaWara.urip) % this.modulo;
        this.value = this.normalize(value);
        this.name = this.values[this.value].name;
        this.urip = this.values[this.value].urip;
    }

    normalize(value: number): number {
        return value;
    }

}