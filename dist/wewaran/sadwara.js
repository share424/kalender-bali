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
exports.SadWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var SAD_WARA = [
    {
        name: 'tungleh',
        urip: 7
    },
    {
        name: 'aryang',
        urip: 6
    },
    {
        name: 'wurukung',
        urip: 5
    },
    {
        name: 'paniron',
        urip: 8
    },
    {
        name: 'was',
        urip: 9
    },
    {
        name: 'maulu',
        urip: 3
    }
];
var SadWara = /** @class */ (function (_super) {
    __extends(SadWara, _super);
    function SadWara(pawukon) {
        return _super.call(this, pawukon, 6, SAD_WARA) || this;
    }
    return SadWara;
}(wewaran_1.default));
exports.SadWara = SadWara;
//# sourceMappingURL=sadwara.js.map