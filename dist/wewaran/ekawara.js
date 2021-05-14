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
exports.EkaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var saptawara_1 = require("./saptawara");
var pancawara_1 = require("./pancawara");
var EKA_WARA = [
    {
        name: 'luang',
        urip: 1
    },
    {
        name: 'undefined',
        urip: 0
    }
];
var EkaWara = /** @class */ (function (_super) {
    __extends(EkaWara, _super);
    function EkaWara(pawukon) {
        var _this = _super.call(this, pawukon, 2, EKA_WARA) || this;
        _this.saptaWara = new saptawara_1.SaptaWara(pawukon);
        _this.pancaWara = new pancawara_1.PancaWara(pawukon);
        var value = (_this.saptaWara.urip + _this.pancaWara.urip) % _this.modulo;
        _this.value = _this.normalize(value);
        _this.name = _this.values[_this.value].name;
        _this.urip = _this.values[_this.value].urip;
        return _this;
    }
    return EkaWara;
}(wewaran_1.default));
exports.EkaWara = EkaWara;
//# sourceMappingURL=ekawara.js.map