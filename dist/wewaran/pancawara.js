"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var PANCA_WARA = [
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
var PancaWara = /** @class */ (function (_super) {
    __extends(PancaWara, _super);
    function PancaWara(pawukon) {
        return _super.call(this, pawukon, 5, PANCA_WARA) || this;
    }
    return PancaWara;
}(wewaran_1.default));
exports.PancaWara = PancaWara;
//# sourceMappingURL=pancawara.js.map