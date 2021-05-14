"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EkaWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const saptawara_1 = require("./saptawara");
const pancawara_1 = require("./pancawara");
const EKA_WARA = [
    {
        name: 'luang',
        urip: 1
    },
    {
        name: 'undefined',
        urip: 0
    }
];
class EkaWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 2, EKA_WARA);
        this.saptaWara = new saptawara_1.SaptaWara(pawukon);
        this.pancaWara = new pancawara_1.PancaWara(pawukon);
        const value = (this.saptaWara.urip + this.pancaWara.urip) % this.modulo;
        this.value = this.normalize(value);
        this.name = this.values[this.value].name;
        this.urip = this.values[this.value].urip;
    }
}
exports.EkaWara = EkaWara;
//# sourceMappingURL=ekawara.js.map