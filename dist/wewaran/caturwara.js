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
exports.CaturWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var CATUR_WARA = [
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
var CaturWara = /** @class */ (function (_super) {
    __extends(CaturWara, _super);
    function CaturWara(pawukon) {
        return _super.call(this, pawukon, 4, CATUR_WARA) || this;
    }
    CaturWara.prototype.process = function (pawukon) {
        // TRIJAYA occur on pawukon 77 and 79
        if (pawukon < 77) {
            return (pawukon + 2) % this.modulo;
        }
        else if (pawukon > 79) {
            return pawukon % this.modulo;
        }
        else {
            return 3; // return 3 because effect of normalization
        }
    };
    return CaturWara;
}(wewaran_1.default));
exports.CaturWara = CaturWara;
//# sourceMappingURL=caturwara.js.map