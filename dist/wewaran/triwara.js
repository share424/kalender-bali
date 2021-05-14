"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const TRIWARA = [
    {
        name: 'pasah',
        urip: 9
    },
    {
        name: 'beteng',
        urip: 4
    },
    {
        name: 'kajeng',
        urip: 7
    }
];
class TriWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 3, TRIWARA);
    }
}
exports.TriWara = TriWara;
//# sourceMappingURL=triwara.js.map