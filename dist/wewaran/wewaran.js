"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wewaran {
    constructor(pawukon, modulo, values) {
        this.modulo = modulo;
        this.values = values;
        const value = this.process(pawukon);
        this.value = this.normalize(value);
        const wewaran = this.values[this.value];
        this.name = wewaran.name;
        this.urip = wewaran.urip;
    }
    process(pawukon) {
        return pawukon % this.modulo;
    }
    normalize(value) {
        if (value == 0)
            return this.modulo - 1;
        return value - 1;
    }
}
exports.default = Wewaran;
//# sourceMappingURL=wewaran.js.map