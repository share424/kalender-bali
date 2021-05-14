"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SangaWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const SANGA_WARA = [
    {
        name: 'dangu',
        urip: 9
    },
    {
        name: 'jangur',
        urip: 8
    },
    {
        name: 'gigis',
        urip: 6
    },
    {
        name: 'nohan',
        urip: 7
    },
    {
        name: 'ogan',
        urip: 4
    },
    {
        name: 'erangan',
        urip: 5
    },
    {
        name: 'urungan',
        urip: 7
    },
    {
        name: 'tulus',
        urip: 3
    },
    {
        name: 'dadi',
        urip: 4
    }
];
class SangaWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 9, SANGA_WARA);
    }
    process(pawukon) {
        if (pawukon < 5) {
            return 1;
        }
        else {
            return (pawukon + 6) % this.modulo;
        }
    }
}
exports.SangaWara = SangaWara;
//# sourceMappingURL=sangawara.js.map