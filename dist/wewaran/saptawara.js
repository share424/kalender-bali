"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaptaWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const SAPTA_WARA = [
    {
        name: 'redita',
        urip: 5
    },
    {
        name: 'soma',
        urip: 4
    },
    {
        name: 'anggara',
        urip: 3
    },
    {
        name: 'buda',
        urip: 7
    },
    {
        name: 'wrespati',
        urip: 8
    },
    {
        name: 'sukra',
        urip: 6
    },
    {
        name: 'saniscara',
        urip: 9
    }
];
class SaptaWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 7, SAPTA_WARA);
    }
}
exports.SaptaWara = SaptaWara;
//# sourceMappingURL=saptawara.js.map