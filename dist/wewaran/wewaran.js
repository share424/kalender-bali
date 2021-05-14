"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wewaran = /** @class */ (function () {
    function Wewaran(pawukon, modulo, values) {
        this.modulo = modulo;
        this.values = values;
        var value = this.process(pawukon);
        this.value = this.normalize(value);
        var wewaran = this.values[this.value];
        this.name = wewaran.name;
        this.urip = wewaran.urip;
    }
    Wewaran.prototype.process = function (pawukon) {
        return pawukon % this.modulo;
    };
    Wewaran.prototype.normalize = function (value) {
        if (value == 0)
            return this.modulo - 1;
        return value - 1;
    };
    return Wewaran;
}());
exports.default = Wewaran;
//# sourceMappingURL=wewaran.js.map