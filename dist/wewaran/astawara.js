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
exports.AstaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var ASTA_WARA = [
    {
        name: 'sri',
        urip: 6
    },
    {
        name: 'indra',
        urip: 5
    },
    {
        name: 'guru',
        urip: 8
    },
    {
        name: 'yama',
        urip: 9
    },
    {
        name: 'ludra',
        urip: 3
    },
    {
        name: 'brahma',
        urip: 7
    },
    {
        name: 'kala',
        urip: 1
    },
    {
        name: 'uma',
        urip: 4
    }
];
var AstaWara = /** @class */ (function (_super) {
    __extends(AstaWara, _super);
    function AstaWara(pawukon) {
        return _super.call(this, pawukon, 8, ASTA_WARA) || this;
    }
    AstaWara.prototype.process = function (pawukon) {
        if (pawukon < 77) {
            return (pawukon + 2) % this.modulo;
        }
        else if (pawukon > 79) {
            return pawukon % this.modulo;
        }
        else {
            return 7;
        }
    };
    return AstaWara;
}(wewaran_1.default));
exports.AstaWara = AstaWara;
//# sourceMappingURL=astawara.js.map