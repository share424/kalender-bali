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
exports.SaptaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var SAPTA_WARA = [
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
var SaptaWara = /** @class */ (function (_super) {
    __extends(SaptaWara, _super);
    function SaptaWara(pawukon) {
        return _super.call(this, pawukon, 7, SAPTA_WARA) || this;
    }
    return SaptaWara;
}(wewaran_1.default));
exports.SaptaWara = SaptaWara;
//# sourceMappingURL=saptawara.js.map