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
exports.TriWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var TRIWARA = [
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
var TriWara = /** @class */ (function (_super) {
    __extends(TriWara, _super);
    function TriWara(pawukon) {
        return _super.call(this, pawukon, 3, TRIWARA) || this;
    }
    return TriWara;
}(wewaran_1.default));
exports.TriWara = TriWara;
//# sourceMappingURL=triwara.js.map