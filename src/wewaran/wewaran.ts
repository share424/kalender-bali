export default class Wewaran {

    public values: WewaranValue[];

    public value: number;

    public name: string;

    public urip: number;
    
    protected modulo: number;

    constructor(pawukon: number, modulo: number, values: WewaranValue[]) {
        this.modulo = modulo;
        this.values = values;
        const value = this.process(pawukon);
        this.value = this.normalize(value);
        const wewaran = this.values[this.value];
        this.name = wewaran.name;
        this.urip = wewaran.urip;
    }

    process(pawukon: number): number {
        return pawukon % this.modulo;
    }

    normalize(value: number): number {
        if(value == 0) return this.modulo - 1;
        return value - 1;
    }

}

export interface WewaranValue {
    name: string;
    urip: number;
}