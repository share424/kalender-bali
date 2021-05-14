"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DasaWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const saptawara_1 = require("./saptawara");
const pancawara_1 = require("./pancawara");
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
];
class DasaWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 10, DASA_WARA);
        this.saptaWara = new saptawara_1.SaptaWara(pawukon);
        this.pancaWara = new pancawara_1.PancaWara(pawukon);
        const value = (this.saptaWara.urip + this.pancaWara.urip + 1) % this.modulo;
        this.value = this.normalize(value);
        this.name = this.values[this.value].name;
        this.urip = this.values[this.value].urip;
    }
}
exports.DasaWara = DasaWara;
//# sourceMappingURL=dasawara.js.map