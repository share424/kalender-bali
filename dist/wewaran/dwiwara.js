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
exports.DwiWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var saptawara_1 = require("./saptawara");
var pancawara_1 = require("./pancawara");
var DWI_WARA = [
    {
        name: 'menga',
        urip: 5
    },
    {
        name: 'pepet',
        urip: 7
    }
];
var DwiWara = /** @class */ (function (_super) {
    __extends(DwiWara, _super);
    function DwiWara(pawukon) {
        var _this = _super.call(this, pawukon, 2, DWI_WARA) || this;
        _this.saptaWara = new saptawara_1.SaptaWara(pawukon);
        _this.pancaWara = new pancawara_1.PancaWara(pawukon);
        var value = (_this.saptaWara.urip + _this.pancaWara.urip) % _this.modulo;
        _this.value = _this.normalize(value);
        _this.name = _this.values[_this.value].name;
        _this.urip = _this.values[_this.value].urip;
        return _this;
    }
    DwiWara.prototype.normalize = function (value) {
        return value;
    };
    return DwiWara;
}(wewaran_1.default));
exports.DwiWara = DwiWara;
//# sourceMappingURL=dwiwara.js.map