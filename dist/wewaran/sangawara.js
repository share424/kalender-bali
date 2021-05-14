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
exports.SangaWara = void 0;
var wewaran_1 = __importDefault(require("./wewaran"));
var SANGA_WARA = [
    {
        name: 'dangu',
        urip: 9
    },
    {
        name: 'jangur',
        urip: 8
    },
    {
        name: 'gigis',
        urip: 6
    },
    {
        name: 'nohan',
        urip: 7
    },
    {
        name: 'ogan',
        urip: 4
    },
    {
        name: 'erangan',
        urip: 5
    },
    {
        name: 'urungan',
        urip: 7
    },
    {
        name: 'tulus',
        urip: 3
    },
    {
        name: 'dadi',
        urip: 4
    }
];
var SangaWara = /** @class */ (function (_super) {
    __extends(SangaWara, _super);
    function SangaWara(pawukon) {
        return _super.call(this, pawukon, 9, SANGA_WARA) || this;
    }
    return SangaWara;
}(wewaran_1.default));
exports.SangaWara = SangaWara;
//# sourceMappingURL=sangawara.js.map