export default class Wewaran {
    values: WewaranValue[];
    value: number;
    name: string;
    urip: number;
    protected modulo: number;
    constructor(pawukon: number, modulo: number, values: WewaranValue[]);
    process(pawukon: number): number;
    normalize(value: number): number;
}
export interface WewaranValue {
    name: string;
    urip: number;
}
//# sourceMappingURL=wewaran.d.ts.map