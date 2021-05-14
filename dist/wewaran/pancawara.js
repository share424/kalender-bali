"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancaWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const PANCA_WARA = [
    {
        name: 'umanis',
        urip: 5
    },
    {
        name: 'paing',
        urip: 9
    },
    {
        name: 'pon',
        urip: 7
    },
    {
        name: 'wage',
        urip: 4
    },
    {
        name: 'kliwon',
        urip: 8
    }
];
class PancaWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 5, PANCA_WARA);
    }
    normalize(value) {
        return value;
    }
}
exports.PancaWara = PancaWara;
//# sourceMappingURL=pancawara.js.map