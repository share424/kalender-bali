"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaturWara = void 0;
const wewaran_1 = __importDefault(require("./wewaran"));
const CATUR_WARA = [
    {
        name: 'sri',
        urip: 4
    },
    {
        name: 'laba',
        urip: 5
    },
    {
        name: 'jaya',
        urip: 9
    },
    {
        name: 'mandala',
        urip: 7
    }
];
class CaturWara extends wewaran_1.default {
    constructor(pawukon) {
        super(pawukon, 4, CATUR_WARA);
    }
    process(pawukon) {
        // TRIJAYA occur on pawukon 77 and 79
        if (pawukon < 71) {
            return pawukon % this.modulo;
        }
        else if (pawukon > 73) {
            return (pawukon + 2) % this.modulo;
        }
        else {
            return 3; // return 3 because effect of normalization
        }
    }
}
exports.CaturWara = CaturWara;
//# sourceMappingURL=caturwara.js.map