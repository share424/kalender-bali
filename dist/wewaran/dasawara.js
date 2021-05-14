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
exports.DasaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var saptawara_1 = require("./saptawara");
var pancawara_1 = require("./pancawara");
var DASA_WARA = [
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
var DasaWara = /** @class */ (function (_super) {
    __extends(DasaWara, _super);
    function DasaWara(pawukon) {
        var _this = _super.call(this, pawukon, 10, DASA_WARA) || this;
        _this.saptaWara = new saptawara_1.SaptaWara(pawukon);
        _this.pancaWara = new pancawara_1.PancaWara(pawukon);
        var value = (_this.saptaWara.urip + _this.pancaWara.urip + 1) % _this.modulo;
        _this.value = _this.normalize(value);
        _this.name = _this.values[_this.value].name;
        _this.urip = _this.values[_this.value].urip;
        return _this;
    }
    return DasaWara;
}(wewaran_1.default));
exports.DasaWara = DasaWara;
//# sourceMappingURL=dasawara.js.map