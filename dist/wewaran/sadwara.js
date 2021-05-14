"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SadWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const SAD_WARA = [
    {
        name: 'tungleh',
        urip: 7
    },
    {
        name: 'aryang',
        urip: 6
    },
    {
        name: 'wurukung',
        urip: 5
    },
    {
        name: 'paniron',
        urip: 8
    },
    {
        name: 'was',
        urip: 9
    },
    {
        name: 'maulu',
        urip: 3
    }
];
class SadWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 6, SAD_WARA);
    }
}
exports.SadWara = SadWara;
//# sourceMappingURL=sadwara.js.map