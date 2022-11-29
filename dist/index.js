import antlr4 from 'antlr4';
import deepEqual from 'fast-deep-equal';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var CoLangError = (function (_super) {
    __extends(CoLangError, _super);
    function CoLangError(args) {
        var _this = _super.call(this, args.message) || this;
        _this.name = 'CoLangError';
        _this.source = args.source;
        _this.line = args.line;
        _this.column = args.column;
        _this.recognizer = args.recognizer;
        _this.offendingSymbol = args.offendingSymbol;
        _this.e = args.e;
        return _this;
    }
    return CoLangError;
}(Error));

/* eslint-disable */

const serializedATN$1 = [
  4, 0, 34, 243, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
  6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
  13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7,
  20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7,
  27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7,
  34, 2, 35, 7, 35, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1,
  6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1,
  10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1,
  12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1,
  14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1,
  16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1,
  17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
  18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1,
  22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 1, 27, 1, 27, 1,
  28, 1, 28, 1, 29, 3, 29, 204, 8, 29, 1, 29, 4, 29, 207, 8, 29, 11, 29, 12, 29, 208, 1, 30, 1, 30,
  1, 30, 1, 30, 1, 31, 1, 31, 3, 31, 217, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 3, 32, 223, 8, 32, 1,
  32, 1, 32, 1, 32, 5, 32, 228, 8, 32, 10, 32, 12, 32, 231, 9, 32, 1, 33, 4, 33, 234, 8, 33, 11, 33,
  12, 33, 235, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 0, 0, 36, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11,
  6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18,
  37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30,
  61, 31, 63, 32, 65, 33, 67, 34, 69, 0, 71, 0, 1, 0, 5, 2, 0, 44, 44, 59, 59, 3, 0, 77, 77, 100,
  100, 121, 121, 3, 0, 9, 10, 12, 13, 32, 32, 2, 0, 65, 90, 97, 122, 1, 0, 48, 57, 248, 0, 1, 1, 0,
  0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0,
  0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0,
  23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33,
  1, 0, 0, 0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1,
  0, 0, 0, 0, 45, 1, 0, 0, 0, 0, 47, 1, 0, 0, 0, 0, 49, 1, 0, 0, 0, 0, 51, 1, 0, 0, 0, 0, 53, 1, 0,
  0, 0, 0, 55, 1, 0, 0, 0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0,
  0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 1, 73, 1, 0, 0, 0, 3, 75, 1, 0, 0, 0, 5, 77, 1, 0, 0, 0,
  7, 79, 1, 0, 0, 0, 9, 81, 1, 0, 0, 0, 11, 83, 1, 0, 0, 0, 13, 85, 1, 0, 0, 0, 15, 87, 1, 0, 0, 0,
  17, 89, 1, 0, 0, 0, 19, 93, 1, 0, 0, 0, 21, 99, 1, 0, 0, 0, 23, 105, 1, 0, 0, 0, 25, 110, 1, 0, 0,
  0, 27, 117, 1, 0, 0, 0, 29, 122, 1, 0, 0, 0, 31, 131, 1, 0, 0, 0, 33, 138, 1, 0, 0, 0, 35, 153, 1,
  0, 0, 0, 37, 163, 1, 0, 0, 0, 39, 175, 1, 0, 0, 0, 41, 180, 1, 0, 0, 0, 43, 184, 1, 0, 0, 0, 45,
  186, 1, 0, 0, 0, 47, 189, 1, 0, 0, 0, 49, 191, 1, 0, 0, 0, 51, 194, 1, 0, 0, 0, 53, 196, 1, 0, 0,
  0, 55, 198, 1, 0, 0, 0, 57, 200, 1, 0, 0, 0, 59, 203, 1, 0, 0, 0, 61, 210, 1, 0, 0, 0, 63, 216, 1,
  0, 0, 0, 65, 222, 1, 0, 0, 0, 67, 233, 1, 0, 0, 0, 69, 239, 1, 0, 0, 0, 71, 241, 1, 0, 0, 0, 73,
  74, 5, 36, 0, 0, 74, 2, 1, 0, 0, 0, 75, 76, 5, 45, 0, 0, 76, 4, 1, 0, 0, 0, 77, 78, 5, 47, 0, 0,
  78, 6, 1, 0, 0, 0, 79, 80, 5, 176, 0, 0, 80, 8, 1, 0, 0, 0, 81, 82, 5, 43, 0, 0, 82, 10, 1, 0, 0,
  0, 83, 84, 5, 37, 0, 0, 84, 12, 1, 0, 0, 0, 85, 86, 5, 38, 0, 0, 86, 14, 1, 0, 0, 0, 87, 88, 5,
  46, 0, 0, 88, 16, 1, 0, 0, 0, 89, 90, 5, 36, 0, 0, 90, 91, 5, 73, 0, 0, 91, 92, 5, 70, 0, 0, 92,
  18, 1, 0, 0, 0, 93, 94, 5, 36, 0, 0, 94, 95, 5, 70, 0, 0, 95, 96, 5, 82, 0, 0, 96, 97, 5, 79, 0,
  0, 97, 98, 5, 77, 0, 0, 98, 20, 1, 0, 0, 0, 99, 100, 5, 36, 0, 0, 100, 101, 5, 84, 0, 0, 101, 102,
  5, 72, 0, 0, 102, 103, 5, 69, 0, 0, 103, 104, 5, 78, 0, 0, 104, 22, 1, 0, 0, 0, 105, 106, 5, 36,
  0, 0, 106, 107, 5, 65, 0, 0, 107, 108, 5, 78, 0, 0, 108, 109, 5, 89, 0, 0, 109, 24, 1, 0, 0, 0,
  110, 111, 5, 36, 0, 0, 111, 112, 5, 69, 0, 0, 112, 113, 5, 77, 0, 0, 113, 114, 5, 80, 0, 0, 114,
  115, 5, 84, 0, 0, 115, 116, 5, 89, 0, 0, 116, 26, 1, 0, 0, 0, 117, 118, 5, 36, 0, 0, 118, 119, 5,
  78, 0, 0, 119, 120, 5, 79, 0, 0, 120, 121, 5, 84, 0, 0, 121, 28, 1, 0, 0, 0, 122, 123, 5, 36, 0,
  0, 123, 124, 5, 67, 0, 0, 124, 125, 5, 79, 0, 0, 125, 126, 5, 77, 0, 0, 126, 127, 5, 80, 0, 0,
  127, 128, 5, 76, 0, 0, 128, 129, 5, 69, 0, 0, 129, 130, 5, 88, 0, 0, 130, 30, 1, 0, 0, 0, 131,
  132, 5, 36, 0, 0, 132, 133, 5, 67, 0, 0, 133, 134, 5, 79, 0, 0, 134, 135, 5, 85, 0, 0, 135, 136,
  5, 78, 0, 0, 136, 137, 5, 84, 0, 0, 137, 32, 1, 0, 0, 0, 138, 139, 5, 36, 0, 0, 139, 140, 5, 67,
  0, 0, 140, 141, 5, 79, 0, 0, 141, 142, 5, 85, 0, 0, 142, 143, 5, 78, 0, 0, 143, 144, 5, 84, 0, 0,
  144, 145, 5, 95, 0, 0, 145, 146, 5, 67, 0, 0, 146, 147, 5, 79, 0, 0, 147, 148, 5, 77, 0, 0, 148,
  149, 5, 80, 0, 0, 149, 150, 5, 76, 0, 0, 150, 151, 5, 69, 0, 0, 151, 152, 5, 88, 0, 0, 152, 34, 1,
  0, 0, 0, 153, 154, 5, 36, 0, 0, 154, 155, 5, 68, 0, 0, 155, 156, 5, 73, 0, 0, 156, 157, 5, 83, 0,
  0, 157, 158, 5, 84, 0, 0, 158, 159, 5, 73, 0, 0, 159, 160, 5, 78, 0, 0, 160, 161, 5, 67, 0, 0,
  161, 162, 5, 84, 0, 0, 162, 36, 1, 0, 0, 0, 163, 164, 5, 105, 0, 0, 164, 165, 5, 109, 0, 0, 165,
  166, 5, 112, 0, 0, 166, 167, 5, 97, 0, 0, 167, 168, 5, 99, 0, 0, 168, 169, 5, 116, 0, 0, 169, 170,
  5, 83, 0, 0, 170, 171, 5, 105, 0, 0, 171, 172, 5, 100, 0, 0, 172, 173, 5, 101, 0, 0, 173, 174, 5,
  115, 0, 0, 174, 38, 1, 0, 0, 0, 175, 176, 5, 36, 0, 0, 176, 177, 5, 65, 0, 0, 177, 178, 5, 78, 0,
  0, 178, 179, 5, 68, 0, 0, 179, 40, 1, 0, 0, 0, 180, 181, 5, 36, 0, 0, 181, 182, 5, 79, 0, 0, 182,
  183, 5, 82, 0, 0, 183, 42, 1, 0, 0, 0, 184, 185, 5, 62, 0, 0, 185, 44, 1, 0, 0, 0, 186, 187, 5,
  62, 0, 0, 187, 188, 5, 61, 0, 0, 188, 46, 1, 0, 0, 0, 189, 190, 5, 60, 0, 0, 190, 48, 1, 0, 0, 0,
  191, 192, 5, 60, 0, 0, 192, 193, 5, 61, 0, 0, 193, 50, 1, 0, 0, 0, 194, 195, 5, 61, 0, 0, 195, 52,
  1, 0, 0, 0, 196, 197, 5, 40, 0, 0, 197, 54, 1, 0, 0, 0, 198, 199, 5, 41, 0, 0, 199, 56, 1, 0, 0,
  0, 200, 201, 7, 0, 0, 0, 201, 58, 1, 0, 0, 0, 202, 204, 5, 45, 0, 0, 203, 202, 1, 0, 0, 0, 203,
  204, 1, 0, 0, 0, 204, 206, 1, 0, 0, 0, 205, 207, 3, 71, 35, 0, 206, 205, 1, 0, 0, 0, 207, 208, 1,
  0, 0, 0, 208, 206, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 60, 1, 0, 0, 0, 210, 211, 3, 59, 29, 0,
  211, 212, 5, 46, 0, 0, 212, 213, 3, 59, 29, 0, 213, 62, 1, 0, 0, 0, 214, 217, 3, 59, 29, 0, 215,
  217, 3, 61, 30, 0, 216, 214, 1, 0, 0, 0, 216, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 219, 7,
  1, 0, 0, 219, 64, 1, 0, 0, 0, 220, 223, 3, 69, 34, 0, 221, 223, 3, 71, 35, 0, 222, 220, 1, 0, 0,
  0, 222, 221, 1, 0, 0, 0, 223, 229, 1, 0, 0, 0, 224, 228, 3, 69, 34, 0, 225, 228, 3, 71, 35, 0,
  226, 228, 5, 95, 0, 0, 227, 224, 1, 0, 0, 0, 227, 225, 1, 0, 0, 0, 227, 226, 1, 0, 0, 0, 228, 231,
  1, 0, 0, 0, 229, 227, 1, 0, 0, 0, 229, 230, 1, 0, 0, 0, 230, 66, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0,
  232, 234, 7, 2, 0, 0, 233, 232, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 233, 1, 0, 0, 0, 235, 236,
  1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 238, 6, 33, 0, 0, 238, 68, 1, 0, 0, 0, 239, 240, 7, 3, 0,
  0, 240, 70, 1, 0, 0, 0, 241, 242, 7, 4, 0, 0, 242, 72, 1, 0, 0, 0, 8, 0, 203, 208, 216, 222, 227,
  229, 235, 1, 6, 0, 0,
];

const atn$1 = new antlr4.atn.ATNDeserializer().deserialize(serializedATN$1);

const decisionsToDFA$1 = atn$1.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

class T6TriggerLexer extends antlr4.Lexer {
  static grammarFileName = 'T6Trigger.g4';
  static channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
  static modeNames = ['DEFAULT_MODE'];
  static literalNames = [
    null,
    "'\\u0024'",
    "'-'",
    "'/'",
    "'\\u00B0'",
    "'\\u002B'",
    "'\\u0025'",
    "'\\u0026'",
    "'.'",
    "'$IF'",
    "'$FROM'",
    "'$THEN'",
    "'$ANY'",
    "'$EMPTY'",
    "'$NOT'",
    "'$COMPLEX'",
    "'$COUNT'",
    "'$COUNT_COMPLEX'",
    "'$DISTINCT'",
    "'impactSides'",
    "'$AND'",
    "'$OR'",
    "'>'",
    "'>='",
    "'<'",
    "'<='",
    "'='",
    "'('",
    "')'",
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'IF',
    'FROM',
    'THEN',
    'ANY',
    'EMPTY',
    'NOT',
    'COMPLEX',
    'COUNT',
    'COUNT_COMPLEX',
    'DISTINCT',
    'IMPACT_SIDES',
    'AND',
    'OR',
    'GT',
    'GE',
    'LT',
    'LE',
    'EQ',
    'LPAREN',
    'RPAREN',
    'SEPARATOR',
    'INT',
    'DECIMAL',
    'DATE_TIME',
    'IDENTIFIER',
    'WS',
  ];
  static ruleNames = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'IF',
    'FROM',
    'THEN',
    'ANY',
    'EMPTY',
    'NOT',
    'COMPLEX',
    'COUNT',
    'COUNT_COMPLEX',
    'DISTINCT',
    'IMPACT_SIDES',
    'AND',
    'OR',
    'GT',
    'GE',
    'LT',
    'LE',
    'EQ',
    'LPAREN',
    'RPAREN',
    'SEPARATOR',
    'INT',
    'DECIMAL',
    'DATE_TIME',
    'IDENTIFIER',
    'WS',
    'LETTER',
    'DIGIT',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(
      this,
      atn$1,
      decisionsToDFA$1,
      new antlr4.PredictionContextCache()
    );
  }

  get atn() {
    return atn$1;
  }
}

T6TriggerLexer.EOF = antlr4.Token.EOF;
T6TriggerLexer.T__0 = 1;
T6TriggerLexer.T__1 = 2;
T6TriggerLexer.T__2 = 3;
T6TriggerLexer.T__3 = 4;
T6TriggerLexer.T__4 = 5;
T6TriggerLexer.T__5 = 6;
T6TriggerLexer.T__6 = 7;
T6TriggerLexer.T__7 = 8;
T6TriggerLexer.IF = 9;
T6TriggerLexer.FROM = 10;
T6TriggerLexer.THEN = 11;
T6TriggerLexer.ANY = 12;
T6TriggerLexer.EMPTY = 13;
T6TriggerLexer.NOT = 14;
T6TriggerLexer.COMPLEX = 15;
T6TriggerLexer.COUNT = 16;
T6TriggerLexer.COUNT_COMPLEX = 17;
T6TriggerLexer.DISTINCT = 18;
T6TriggerLexer.IMPACT_SIDES = 19;
T6TriggerLexer.AND = 20;
T6TriggerLexer.OR = 21;
T6TriggerLexer.GT = 22;
T6TriggerLexer.GE = 23;
T6TriggerLexer.LT = 24;
T6TriggerLexer.LE = 25;
T6TriggerLexer.EQ = 26;
T6TriggerLexer.LPAREN = 27;
T6TriggerLexer.RPAREN = 28;
T6TriggerLexer.SEPARATOR = 29;
T6TriggerLexer.INT = 30;
T6TriggerLexer.DECIMAL = 31;
T6TriggerLexer.DATE_TIME = 32;
T6TriggerLexer.IDENTIFIER = 33;
T6TriggerLexer.WS = 34;

// Generated from java-escape by ANTLR 4.11.1

// This class defines a complete generic visitor for a parse tree produced by T6TriggerParser.

class T6TriggerVisitor extends antlr4.tree.ParseTreeVisitor {
  // Visit a parse tree produced by T6TriggerParser#parse.
  visitParse(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#numbersExpr.
  visitNumbersExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#comparatorExpr.
  visitComparatorExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#complexExpr.
  visitComplexExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#numberExpr.
  visitNumberExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#binaryExpr.
  visitBinaryExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#parenExpr.
  visitParenExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#countExpr.
  visitCountExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#notExpr.
  visitNotExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#countComplexExpr.
  visitCountComplexExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#valueExpr.
  visitValueExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#emptyExpr.
  visitEmptyExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#vehicleImpactExpr.
  visitVehicleImpactExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#valuesExpr.
  visitValuesExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#anyExpr.
  visitAnyExpr(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#dateTime.
  visitDateTime(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#vehicleImpact.
  visitVehicleImpact(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#number.
  visitNumber(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#numbers.
  visitNumbers(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#field.
  visitField(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#op.
  visitOp(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#comparator.
  visitComparator(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#binary.
  visitBinary(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#not.
  visitNot(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#complex.
  visitComplex(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#count.
  visitCount(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#countComplex.
  visitCountComplex(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#value.
  visitValue(ctx) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by T6TriggerParser#values.
  visitValues(ctx) {
    return this.visitChildren(ctx);
  }
}

/* eslint-disable */

const serializedATN = [
  4, 1, 34, 211, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6,
  2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14,
  7, 14, 2, 15, 7, 15, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 3, 1, 113, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 119, 8, 1, 10, 1, 12, 1, 122, 9, 1, 1, 2, 1,
  2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 5, 5, 135, 8, 5, 10, 5, 12, 5, 138, 9, 5,
  1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 3, 8, 147, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10,
  3, 10, 155, 8, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3,
  12, 168, 8, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 180,
  8, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14,
  1, 14, 1, 14, 1, 14, 5, 14, 198, 8, 14, 10, 14, 12, 14, 201, 9, 14, 1, 15, 1, 15, 1, 15, 5, 15,
  206, 8, 15, 10, 15, 12, 15, 209, 9, 15, 1, 15, 3, 136, 199, 207, 1, 2, 16, 0, 2, 4, 6, 8, 10, 12,
  14, 16, 18, 20, 22, 24, 26, 28, 30, 0, 4, 1, 0, 30, 31, 1, 0, 22, 26, 1, 0, 20, 21, 3, 0, 1, 1, 9,
  21, 29, 29, 226, 0, 32, 1, 0, 0, 0, 2, 112, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 125, 1, 0, 0, 0, 8,
  129, 1, 0, 0, 0, 10, 131, 1, 0, 0, 0, 12, 139, 1, 0, 0, 0, 14, 141, 1, 0, 0, 0, 16, 143, 1, 0, 0,
  0, 18, 148, 1, 0, 0, 0, 20, 150, 1, 0, 0, 0, 22, 158, 1, 0, 0, 0, 24, 163, 1, 0, 0, 0, 26, 172, 1,
  0, 0, 0, 28, 199, 1, 0, 0, 0, 30, 202, 1, 0, 0, 0, 32, 33, 3, 2, 1, 0, 33, 34, 5, 0, 0, 1, 34, 1,
  1, 0, 0, 0, 35, 36, 6, 1, -1, 0, 36, 37, 5, 9, 0, 0, 37, 38, 3, 16, 8, 0, 38, 39, 5, 10, 0, 0, 39,
  40, 3, 12, 6, 0, 40, 41, 5, 11, 0, 0, 41, 113, 1, 0, 0, 0, 42, 43, 5, 9, 0, 0, 43, 44, 5, 12, 0,
  0, 44, 45, 5, 10, 0, 0, 45, 46, 3, 12, 6, 0, 46, 47, 5, 11, 0, 0, 47, 113, 1, 0, 0, 0, 48, 49, 5,
  9, 0, 0, 49, 50, 5, 13, 0, 0, 50, 51, 5, 10, 0, 0, 51, 52, 3, 12, 6, 0, 52, 53, 5, 11, 0, 0, 53,
  113, 1, 0, 0, 0, 54, 55, 5, 9, 0, 0, 55, 56, 3, 8, 4, 0, 56, 57, 5, 10, 0, 0, 57, 58, 3, 12, 6, 0,
  58, 59, 5, 11, 0, 0, 59, 113, 1, 0, 0, 0, 60, 61, 5, 9, 0, 0, 61, 62, 3, 10, 5, 0, 62, 63, 5, 10,
  0, 0, 63, 64, 3, 12, 6, 0, 64, 65, 5, 11, 0, 0, 65, 113, 1, 0, 0, 0, 66, 67, 5, 9, 0, 0, 67, 68,
  3, 20, 10, 0, 68, 69, 5, 10, 0, 0, 69, 70, 3, 12, 6, 0, 70, 71, 5, 11, 0, 0, 71, 113, 1, 0, 0, 0,
  72, 73, 5, 9, 0, 0, 73, 74, 3, 22, 11, 0, 74, 75, 5, 10, 0, 0, 75, 76, 3, 12, 6, 0, 76, 77, 5, 11,
  0, 0, 77, 113, 1, 0, 0, 0, 78, 79, 5, 9, 0, 0, 79, 80, 3, 24, 12, 0, 80, 81, 5, 10, 0, 0, 81, 82,
  3, 12, 6, 0, 82, 83, 5, 11, 0, 0, 83, 113, 1, 0, 0, 0, 84, 85, 5, 9, 0, 0, 85, 86, 3, 26, 13, 0,
  86, 87, 5, 10, 0, 0, 87, 88, 3, 12, 6, 0, 88, 89, 5, 11, 0, 0, 89, 113, 1, 0, 0, 0, 90, 91, 5, 27,
  0, 0, 91, 92, 3, 2, 1, 0, 92, 93, 5, 28, 0, 0, 93, 113, 1, 0, 0, 0, 94, 95, 5, 9, 0, 0, 95, 96, 3,
  6, 3, 0, 96, 97, 5, 10, 0, 0, 97, 98, 3, 12, 6, 0, 98, 99, 5, 11, 0, 0, 99, 113, 1, 0, 0, 0, 100,
  101, 5, 9, 0, 0, 101, 102, 3, 28, 14, 0, 102, 103, 5, 10, 0, 0, 103, 104, 3, 12, 6, 0, 104, 105,
  5, 11, 0, 0, 105, 113, 1, 0, 0, 0, 106, 107, 5, 9, 0, 0, 107, 108, 3, 30, 15, 0, 108, 109, 5, 10,
  0, 0, 109, 110, 3, 12, 6, 0, 110, 111, 5, 11, 0, 0, 111, 113, 1, 0, 0, 0, 112, 35, 1, 0, 0, 0,
  112, 42, 1, 0, 0, 0, 112, 48, 1, 0, 0, 0, 112, 54, 1, 0, 0, 0, 112, 60, 1, 0, 0, 0, 112, 66, 1, 0,
  0, 0, 112, 72, 1, 0, 0, 0, 112, 78, 1, 0, 0, 0, 112, 84, 1, 0, 0, 0, 112, 90, 1, 0, 0, 0, 112, 94,
  1, 0, 0, 0, 112, 100, 1, 0, 0, 0, 112, 106, 1, 0, 0, 0, 113, 120, 1, 0, 0, 0, 114, 115, 10, 14, 0,
  0, 115, 116, 3, 18, 9, 0, 116, 117, 3, 2, 1, 15, 117, 119, 1, 0, 0, 0, 118, 114, 1, 0, 0, 0, 119,
  122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121, 1, 0, 0, 0, 121, 3, 1, 0, 0, 0, 122, 120, 1, 0,
  0, 0, 123, 124, 5, 32, 0, 0, 124, 5, 1, 0, 0, 0, 125, 126, 5, 19, 0, 0, 126, 127, 5, 26, 0, 0,
  127, 128, 5, 30, 0, 0, 128, 7, 1, 0, 0, 0, 129, 130, 7, 0, 0, 0, 130, 9, 1, 0, 0, 0, 131, 136, 3,
  8, 4, 0, 132, 133, 5, 29, 0, 0, 133, 135, 3, 8, 4, 0, 134, 132, 1, 0, 0, 0, 135, 138, 1, 0, 0, 0,
  136, 137, 1, 0, 0, 0, 136, 134, 1, 0, 0, 0, 137, 11, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 139, 140,
  5, 33, 0, 0, 140, 13, 1, 0, 0, 0, 141, 142, 7, 1, 0, 0, 142, 15, 1, 0, 0, 0, 143, 146, 3, 14, 7,
  0, 144, 147, 3, 8, 4, 0, 145, 147, 3, 4, 2, 0, 146, 144, 1, 0, 0, 0, 146, 145, 1, 0, 0, 0, 147,
  17, 1, 0, 0, 0, 148, 149, 7, 2, 0, 0, 149, 19, 1, 0, 0, 0, 150, 151, 5, 14, 0, 0, 151, 154, 5, 27,
  0, 0, 152, 155, 3, 10, 5, 0, 153, 155, 3, 30, 15, 0, 154, 152, 1, 0, 0, 0, 154, 153, 1, 0, 0, 0,
  155, 156, 1, 0, 0, 0, 156, 157, 5, 28, 0, 0, 157, 21, 1, 0, 0, 0, 158, 159, 5, 15, 0, 0, 159, 160,
  5, 27, 0, 0, 160, 161, 3, 2, 1, 0, 161, 162, 5, 28, 0, 0, 162, 23, 1, 0, 0, 0, 163, 164, 5, 16, 0,
  0, 164, 167, 5, 27, 0, 0, 165, 168, 5, 18, 0, 0, 166, 168, 3, 28, 14, 0, 167, 165, 1, 0, 0, 0,
  167, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 170, 5, 28, 0, 0, 170, 171, 3, 16, 8, 0, 171, 25,
  1, 0, 0, 0, 172, 173, 5, 17, 0, 0, 173, 179, 5, 27, 0, 0, 174, 180, 3, 2, 1, 0, 175, 176, 5, 18,
  0, 0, 176, 177, 3, 12, 6, 0, 177, 178, 3, 2, 1, 0, 178, 180, 1, 0, 0, 0, 179, 174, 1, 0, 0, 0,
  179, 175, 1, 0, 0, 0, 180, 181, 1, 0, 0, 0, 181, 182, 5, 28, 0, 0, 182, 183, 3, 16, 8, 0, 183, 27,
  1, 0, 0, 0, 184, 198, 8, 3, 0, 0, 185, 198, 3, 8, 4, 0, 186, 198, 3, 14, 7, 0, 187, 198, 5, 33, 0,
  0, 188, 198, 5, 27, 0, 0, 189, 198, 5, 28, 0, 0, 190, 198, 5, 2, 0, 0, 191, 198, 5, 3, 0, 0, 192,
  198, 5, 4, 0, 0, 193, 198, 5, 5, 0, 0, 194, 198, 5, 6, 0, 0, 195, 198, 5, 7, 0, 0, 196, 198, 5, 8,
  0, 0, 197, 184, 1, 0, 0, 0, 197, 185, 1, 0, 0, 0, 197, 186, 1, 0, 0, 0, 197, 187, 1, 0, 0, 0, 197,
  188, 1, 0, 0, 0, 197, 189, 1, 0, 0, 0, 197, 190, 1, 0, 0, 0, 197, 191, 1, 0, 0, 0, 197, 192, 1, 0,
  0, 0, 197, 193, 1, 0, 0, 0, 197, 194, 1, 0, 0, 0, 197, 195, 1, 0, 0, 0, 197, 196, 1, 0, 0, 0, 198,
  201, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 200, 29, 1, 0, 0, 0, 201, 199, 1, 0,
  0, 0, 202, 207, 3, 28, 14, 0, 203, 204, 5, 29, 0, 0, 204, 206, 3, 28, 14, 0, 205, 203, 1, 0, 0, 0,
  206, 209, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 207, 205, 1, 0, 0, 0, 208, 31, 1, 0, 0, 0, 209, 207,
  1, 0, 0, 0, 10, 112, 120, 136, 146, 154, 167, 179, 197, 199, 207,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

class T6TriggerParser extends antlr4.Parser {
  static grammarFileName = 'java-escape';
  static literalNames = [
    null,
    "'\\u0024'",
    "'-'",
    "'/'",
    "'\\u00B0'",
    "'\\u002B'",
    "'\\u0025'",
    "'\\u0026'",
    "'.'",
    "'$IF'",
    "'$FROM'",
    "'$THEN'",
    "'$ANY'",
    "'$EMPTY'",
    "'$NOT'",
    "'$COMPLEX'",
    "'$COUNT'",
    "'$COUNT_COMPLEX'",
    "'$DISTINCT'",
    "'impactSides'",
    "'$AND'",
    "'$OR'",
    "'>'",
    "'>='",
    "'<'",
    "'<='",
    "'='",
    "'('",
    "')'",
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'IF',
    'FROM',
    'THEN',
    'ANY',
    'EMPTY',
    'NOT',
    'COMPLEX',
    'COUNT',
    'COUNT_COMPLEX',
    'DISTINCT',
    'IMPACT_SIDES',
    'AND',
    'OR',
    'GT',
    'GE',
    'LT',
    'LE',
    'EQ',
    'LPAREN',
    'RPAREN',
    'SEPARATOR',
    'INT',
    'DECIMAL',
    'DATE_TIME',
    'IDENTIFIER',
    'WS',
  ];
  static ruleNames = [
    'parse',
    'expr',
    'dateTime',
    'vehicleImpact',
    'number',
    'numbers',
    'field',
    'op',
    'comparator',
    'binary',
    'not',
    'complex',
    'count',
    'countComplex',
    'value',
    'values',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = T6TriggerParser.ruleNames;
    this.literalNames = T6TriggerParser.literalNames;
    this.symbolicNames = T6TriggerParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 1:
        return this.expr_sempred(localctx, predIndex);
      default:
        throw 'No predicate with index:' + ruleIndex;
    }
  }

  expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 14);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  parse() {
    let localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, T6TriggerParser.RULE_parse);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 32;
      this.expr(0);
      this.state = 33;
      this.match(T6TriggerParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  expr(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new ExprContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 2;
    this.enterRecursionRule(localctx, 2, T6TriggerParser.RULE_expr, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 112;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
      switch (la_) {
        case 1:
          localctx = new ComparatorExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 36;
          this.match(T6TriggerParser.IF);
          this.state = 37;
          this.comparator();
          this.state = 38;
          this.match(T6TriggerParser.FROM);
          this.state = 39;
          this.field();
          this.state = 40;
          this.match(T6TriggerParser.THEN);
          break;

        case 2:
          localctx = new AnyExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 42;
          this.match(T6TriggerParser.IF);
          this.state = 43;
          this.match(T6TriggerParser.ANY);
          this.state = 44;
          this.match(T6TriggerParser.FROM);
          this.state = 45;
          this.field();
          this.state = 46;
          this.match(T6TriggerParser.THEN);
          break;

        case 3:
          localctx = new EmptyExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 48;
          this.match(T6TriggerParser.IF);
          this.state = 49;
          this.match(T6TriggerParser.EMPTY);
          this.state = 50;
          this.match(T6TriggerParser.FROM);
          this.state = 51;
          this.field();
          this.state = 52;
          this.match(T6TriggerParser.THEN);
          break;

        case 4:
          localctx = new NumberExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 54;
          this.match(T6TriggerParser.IF);
          this.state = 55;
          this.number();
          this.state = 56;
          this.match(T6TriggerParser.FROM);
          this.state = 57;
          this.field();
          this.state = 58;
          this.match(T6TriggerParser.THEN);
          break;

        case 5:
          localctx = new NumbersExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 60;
          this.match(T6TriggerParser.IF);
          this.state = 61;
          this.numbers();
          this.state = 62;
          this.match(T6TriggerParser.FROM);
          this.state = 63;
          this.field();
          this.state = 64;
          this.match(T6TriggerParser.THEN);
          break;

        case 6:
          localctx = new NotExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 66;
          this.match(T6TriggerParser.IF);
          this.state = 67;
          this.not();
          this.state = 68;
          this.match(T6TriggerParser.FROM);
          this.state = 69;
          this.field();
          this.state = 70;
          this.match(T6TriggerParser.THEN);
          break;

        case 7:
          localctx = new ComplexExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 72;
          this.match(T6TriggerParser.IF);
          this.state = 73;
          this.complex();
          this.state = 74;
          this.match(T6TriggerParser.FROM);
          this.state = 75;
          this.field();
          this.state = 76;
          this.match(T6TriggerParser.THEN);
          break;

        case 8:
          localctx = new CountExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 78;
          this.match(T6TriggerParser.IF);
          this.state = 79;
          this.count();
          this.state = 80;
          this.match(T6TriggerParser.FROM);
          this.state = 81;
          this.field();
          this.state = 82;
          this.match(T6TriggerParser.THEN);
          break;

        case 9:
          localctx = new CountComplexExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 84;
          this.match(T6TriggerParser.IF);
          this.state = 85;
          this.countComplex();
          this.state = 86;
          this.match(T6TriggerParser.FROM);
          this.state = 87;
          this.field();
          this.state = 88;
          this.match(T6TriggerParser.THEN);
          break;

        case 10:
          localctx = new ParenExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 90;
          this.match(T6TriggerParser.LPAREN);
          this.state = 91;
          this.expr(0);
          this.state = 92;
          this.match(T6TriggerParser.RPAREN);
          break;

        case 11:
          localctx = new VehicleImpactExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 94;
          this.match(T6TriggerParser.IF);
          this.state = 95;
          this.vehicleImpact();
          this.state = 96;
          this.match(T6TriggerParser.FROM);
          this.state = 97;
          this.field();
          this.state = 98;
          this.match(T6TriggerParser.THEN);
          break;

        case 12:
          localctx = new ValueExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 100;
          this.match(T6TriggerParser.IF);
          this.state = 101;
          this.value();
          this.state = 102;
          this.match(T6TriggerParser.FROM);
          this.state = 103;
          this.field();
          this.state = 104;
          this.match(T6TriggerParser.THEN);
          break;

        case 13:
          localctx = new ValuesExprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 106;
          this.match(T6TriggerParser.IF);
          this.state = 107;
          this.values();
          this.state = 108;
          this.match(T6TriggerParser.FROM);
          this.state = 109;
          this.field();
          this.state = 110;
          this.match(T6TriggerParser.THEN);
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 120;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
          this.pushNewRecursionContext(localctx, _startState, T6TriggerParser.RULE_expr);
          this.state = 114;
          if (!this.precpred(this._ctx, 14)) {
            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 14)');
          }
          this.state = 115;
          this.binary();
          this.state = 116;
          this.expr(15);
        }
        this.state = 122;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  dateTime() {
    let localctx = new DateTimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, T6TriggerParser.RULE_dateTime);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 123;
      this.match(T6TriggerParser.DATE_TIME);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  vehicleImpact() {
    let localctx = new VehicleImpactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, T6TriggerParser.RULE_vehicleImpact);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 125;
      this.match(T6TriggerParser.IMPACT_SIDES);
      this.state = 126;
      this.match(T6TriggerParser.EQ);
      this.state = 127;
      this.match(T6TriggerParser.INT);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  number() {
    let localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, T6TriggerParser.RULE_number);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 129;
      _la = this._input.LA(1);
      if (!(_la === 30 || _la === 31)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  numbers() {
    let localctx = new NumbersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, T6TriggerParser.RULE_numbers);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 131;
      this.number();
      this.state = 136;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1 + 1) {
          this.state = 132;
          this.match(T6TriggerParser.SEPARATOR);
          this.state = 133;
          this.number();
        }
        this.state = 138;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  field() {
    let localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, T6TriggerParser.RULE_field);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 139;
      this.match(T6TriggerParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  op() {
    let localctx = new OpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, T6TriggerParser.RULE_op);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 141;
      _la = this._input.LA(1);
      if (!((_la & ~0x1f) == 0 && ((1 << _la) & 130023424) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  comparator() {
    let localctx = new ComparatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, T6TriggerParser.RULE_comparator);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 143;
      this.op();
      this.state = 146;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 30:
        case 31:
          this.state = 144;
          this.number();
          break;
        case 32:
          this.state = 145;
          this.dateTime();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  binary() {
    let localctx = new BinaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, T6TriggerParser.RULE_binary);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 148;
      _la = this._input.LA(1);
      if (!(_la === 20 || _la === 21)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  not() {
    let localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, T6TriggerParser.RULE_not);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 150;
      this.match(T6TriggerParser.NOT);
      this.state = 151;
      this.match(T6TriggerParser.LPAREN);
      this.state = 154;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (la_) {
        case 1:
          this.state = 152;
          this.numbers();
          break;

        case 2:
          this.state = 153;
          this.values();
          break;
      }
      this.state = 156;
      this.match(T6TriggerParser.RPAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  complex() {
    let localctx = new ComplexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, T6TriggerParser.RULE_complex);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 158;
      this.match(T6TriggerParser.COMPLEX);
      this.state = 159;
      this.match(T6TriggerParser.LPAREN);
      this.state = 160;
      this.expr(0);
      this.state = 161;
      this.match(T6TriggerParser.RPAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  count() {
    let localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, T6TriggerParser.RULE_count);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 163;
      this.match(T6TriggerParser.COUNT);
      this.state = 164;
      this.match(T6TriggerParser.LPAREN);
      this.state = 167;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 18:
          this.state = 165;
          this.match(T6TriggerParser.DISTINCT);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
          this.state = 166;
          this.value();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this.state = 169;
      this.match(T6TriggerParser.RPAREN);
      this.state = 170;
      this.comparator();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  countComplex() {
    let localctx = new CountComplexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, T6TriggerParser.RULE_countComplex);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 172;
      this.match(T6TriggerParser.COUNT_COMPLEX);
      this.state = 173;
      this.match(T6TriggerParser.LPAREN);
      this.state = 179;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 9:
        case 27:
          this.state = 174;
          this.expr(0);
          break;
        case 18:
          this.state = 175;
          this.match(T6TriggerParser.DISTINCT);
          this.state = 176;
          this.field();
          this.state = 177;
          this.expr(0);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this.state = 181;
      this.match(T6TriggerParser.RPAREN);
      this.state = 182;
      this.comparator();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  value() {
    let localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, T6TriggerParser.RULE_value);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 199;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
      while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1 + 1) {
          this.state = 197;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
          switch (la_) {
            case 1:
              this.state = 184;
              _la = this._input.LA(1);
              if (_la <= 0 || ((_la & ~0x1f) == 0 && ((1 << _la) & 541064706) !== 0)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              break;

            case 2:
              this.state = 185;
              this.number();
              break;

            case 3:
              this.state = 186;
              this.op();
              break;

            case 4:
              this.state = 187;
              this.match(T6TriggerParser.IDENTIFIER);
              break;

            case 5:
              this.state = 188;
              this.match(T6TriggerParser.LPAREN);
              break;

            case 6:
              this.state = 189;
              this.match(T6TriggerParser.RPAREN);
              break;

            case 7:
              this.state = 190;
              this.match(T6TriggerParser.T__1);
              break;

            case 8:
              this.state = 191;
              this.match(T6TriggerParser.T__2);
              break;

            case 9:
              this.state = 192;
              this.match(T6TriggerParser.T__3);
              break;

            case 10:
              this.state = 193;
              this.match(T6TriggerParser.T__4);
              break;

            case 11:
              this.state = 194;
              this.match(T6TriggerParser.T__5);
              break;

            case 12:
              this.state = 195;
              this.match(T6TriggerParser.T__6);
              break;

            case 13:
              this.state = 196;
              this.match(T6TriggerParser.T__7);
              break;
          }
        }
        this.state = 201;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  values() {
    let localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, T6TriggerParser.RULE_values);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 202;
      this.value();
      this.state = 207;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      while (_alt != 1 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1 + 1) {
          this.state = 203;
          this.match(T6TriggerParser.SEPARATOR);
          this.state = 204;
          this.value();
        }
        this.state = 209;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

T6TriggerParser.EOF = antlr4.Token.EOF;
T6TriggerParser.T__0 = 1;
T6TriggerParser.T__1 = 2;
T6TriggerParser.T__2 = 3;
T6TriggerParser.T__3 = 4;
T6TriggerParser.T__4 = 5;
T6TriggerParser.T__5 = 6;
T6TriggerParser.T__6 = 7;
T6TriggerParser.T__7 = 8;
T6TriggerParser.IF = 9;
T6TriggerParser.FROM = 10;
T6TriggerParser.THEN = 11;
T6TriggerParser.ANY = 12;
T6TriggerParser.EMPTY = 13;
T6TriggerParser.NOT = 14;
T6TriggerParser.COMPLEX = 15;
T6TriggerParser.COUNT = 16;
T6TriggerParser.COUNT_COMPLEX = 17;
T6TriggerParser.DISTINCT = 18;
T6TriggerParser.IMPACT_SIDES = 19;
T6TriggerParser.AND = 20;
T6TriggerParser.OR = 21;
T6TriggerParser.GT = 22;
T6TriggerParser.GE = 23;
T6TriggerParser.LT = 24;
T6TriggerParser.LE = 25;
T6TriggerParser.EQ = 26;
T6TriggerParser.LPAREN = 27;
T6TriggerParser.RPAREN = 28;
T6TriggerParser.SEPARATOR = 29;
T6TriggerParser.INT = 30;
T6TriggerParser.DECIMAL = 31;
T6TriggerParser.DATE_TIME = 32;
T6TriggerParser.IDENTIFIER = 33;
T6TriggerParser.WS = 34;

T6TriggerParser.RULE_parse = 0;
T6TriggerParser.RULE_expr = 1;
T6TriggerParser.RULE_dateTime = 2;
T6TriggerParser.RULE_vehicleImpact = 3;
T6TriggerParser.RULE_number = 4;
T6TriggerParser.RULE_numbers = 5;
T6TriggerParser.RULE_field = 6;
T6TriggerParser.RULE_op = 7;
T6TriggerParser.RULE_comparator = 8;
T6TriggerParser.RULE_binary = 9;
T6TriggerParser.RULE_not = 10;
T6TriggerParser.RULE_complex = 11;
T6TriggerParser.RULE_count = 12;
T6TriggerParser.RULE_countComplex = 13;
T6TriggerParser.RULE_value = 14;
T6TriggerParser.RULE_values = 15;

class ParseContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_parse;
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  EOF() {
    return this.getToken(T6TriggerParser.EOF, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitParse(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ExprContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_expr;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class NumbersExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  numbers() {
    return this.getTypedRuleContext(NumbersContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumbersExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NumbersExprContext = NumbersExprContext;

class ComparatorExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComparatorExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ComparatorExprContext = ComparatorExprContext;

class ComplexExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  complex() {
    return this.getTypedRuleContext(ComplexContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComplexExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ComplexExprContext = ComplexExprContext;

class NumberExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumberExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NumberExprContext = NumberExprContext;

class BinaryExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ExprContext);
    } else {
      return this.getTypedRuleContext(ExprContext, i);
    }
  };

  binary() {
    return this.getTypedRuleContext(BinaryContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitBinaryExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.BinaryExprContext = BinaryExprContext;

class ParenExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitParenExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ParenExprContext = ParenExprContext;

class CountExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  count() {
    return this.getTypedRuleContext(CountContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.CountExprContext = CountExprContext;

class NotExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  not() {
    return this.getTypedRuleContext(NotContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNotExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.NotExprContext = NotExprContext;

class CountComplexExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  countComplex() {
    return this.getTypedRuleContext(CountComplexContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountComplexExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.CountComplexExprContext = CountComplexExprContext;

class ValueExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  value() {
    return this.getTypedRuleContext(ValueContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValueExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ValueExprContext = ValueExprContext;

class EmptyExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  EMPTY() {
    return this.getToken(T6TriggerParser.EMPTY, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitEmptyExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.EmptyExprContext = EmptyExprContext;

class VehicleImpactExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  vehicleImpact() {
    return this.getTypedRuleContext(VehicleImpactContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitVehicleImpactExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.VehicleImpactExprContext = VehicleImpactExprContext;

class ValuesExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  values() {
    return this.getTypedRuleContext(ValuesContext, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValuesExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ValuesExprContext = ValuesExprContext;

class AnyExprContext extends ExprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  IF() {
    return this.getToken(T6TriggerParser.IF, 0);
  }

  ANY() {
    return this.getToken(T6TriggerParser.ANY, 0);
  }

  FROM() {
    return this.getToken(T6TriggerParser.FROM, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  THEN() {
    return this.getToken(T6TriggerParser.THEN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitAnyExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.AnyExprContext = AnyExprContext;

class DateTimeContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_dateTime;
  }

  DATE_TIME() {
    return this.getToken(T6TriggerParser.DATE_TIME, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitDateTime(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class VehicleImpactContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_vehicleImpact;
  }

  IMPACT_SIDES() {
    return this.getToken(T6TriggerParser.IMPACT_SIDES, 0);
  }

  EQ() {
    return this.getToken(T6TriggerParser.EQ, 0);
  }

  INT() {
    return this.getToken(T6TriggerParser.INT, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitVehicleImpact(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NumberContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_number;
  }

  INT() {
    return this.getToken(T6TriggerParser.INT, 0);
  }

  DECIMAL() {
    return this.getToken(T6TriggerParser.DECIMAL, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumber(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NumbersContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_numbers;
  }

  number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NumberContext);
    } else {
      return this.getTypedRuleContext(NumberContext, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNumbers(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class FieldContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_field;
  }

  IDENTIFIER() {
    return this.getToken(T6TriggerParser.IDENTIFIER, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class OpContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_op;
  }

  GT() {
    return this.getToken(T6TriggerParser.GT, 0);
  }

  GE() {
    return this.getToken(T6TriggerParser.GE, 0);
  }

  LT() {
    return this.getToken(T6TriggerParser.LT, 0);
  }

  LE() {
    return this.getToken(T6TriggerParser.LE, 0);
  }

  EQ() {
    return this.getToken(T6TriggerParser.EQ, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitOp(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ComparatorContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_comparator;
  }

  op() {
    return this.getTypedRuleContext(OpContext, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  dateTime() {
    return this.getTypedRuleContext(DateTimeContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComparator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class BinaryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_binary;
  }

  AND() {
    return this.getToken(T6TriggerParser.AND, 0);
  }

  OR() {
    return this.getToken(T6TriggerParser.OR, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitBinary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NotContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_not;
  }

  NOT() {
    return this.getToken(T6TriggerParser.NOT, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  numbers() {
    return this.getTypedRuleContext(NumbersContext, 0);
  }

  values() {
    return this.getTypedRuleContext(ValuesContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitNot(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ComplexContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_complex;
  }

  COMPLEX() {
    return this.getToken(T6TriggerParser.COMPLEX, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitComplex(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CountContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_count;
  }

  COUNT() {
    return this.getToken(T6TriggerParser.COUNT, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  DISTINCT() {
    return this.getToken(T6TriggerParser.DISTINCT, 0);
  }

  value() {
    return this.getTypedRuleContext(ValueContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCount(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CountComplexContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_countComplex;
  }

  COUNT_COMPLEX() {
    return this.getToken(T6TriggerParser.COUNT_COMPLEX, 0);
  }

  LPAREN() {
    return this.getToken(T6TriggerParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(T6TriggerParser.RPAREN, 0);
  }

  comparator() {
    return this.getTypedRuleContext(ComparatorContext, 0);
  }

  expr() {
    return this.getTypedRuleContext(ExprContext, 0);
  }

  DISTINCT() {
    return this.getToken(T6TriggerParser.DISTINCT, 0);
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitCountComplex(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ValueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_value;
  }

  number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NumberContext);
    } else {
      return this.getTypedRuleContext(NumberContext, i);
    }
  };

  op = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(OpContext);
    } else {
      return this.getTypedRuleContext(OpContext, i);
    }
  };

  IDENTIFIER = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IDENTIFIER);
    } else {
      return this.getToken(T6TriggerParser.IDENTIFIER, i);
    }
  };

  LPAREN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.LPAREN);
    } else {
      return this.getToken(T6TriggerParser.LPAREN, i);
    }
  };

  RPAREN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.RPAREN);
    } else {
      return this.getToken(T6TriggerParser.RPAREN, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  IF = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IF);
    } else {
      return this.getToken(T6TriggerParser.IF, i);
    }
  };

  FROM = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.FROM);
    } else {
      return this.getToken(T6TriggerParser.FROM, i);
    }
  };

  THEN = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.THEN);
    } else {
      return this.getToken(T6TriggerParser.THEN, i);
    }
  };

  ANY = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.ANY);
    } else {
      return this.getToken(T6TriggerParser.ANY, i);
    }
  };

  EMPTY = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.EMPTY);
    } else {
      return this.getToken(T6TriggerParser.EMPTY, i);
    }
  };

  NOT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.NOT);
    } else {
      return this.getToken(T6TriggerParser.NOT, i);
    }
  };

  COMPLEX = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COMPLEX);
    } else {
      return this.getToken(T6TriggerParser.COMPLEX, i);
    }
  };

  COUNT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COUNT);
    } else {
      return this.getToken(T6TriggerParser.COUNT, i);
    }
  };

  COUNT_COMPLEX = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.COUNT_COMPLEX);
    } else {
      return this.getToken(T6TriggerParser.COUNT_COMPLEX, i);
    }
  };

  DISTINCT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.DISTINCT);
    } else {
      return this.getToken(T6TriggerParser.DISTINCT, i);
    }
  };

  IMPACT_SIDES = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.IMPACT_SIDES);
    } else {
      return this.getToken(T6TriggerParser.IMPACT_SIDES, i);
    }
  };

  AND = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.AND);
    } else {
      return this.getToken(T6TriggerParser.AND, i);
    }
  };

  OR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.OR);
    } else {
      return this.getToken(T6TriggerParser.OR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ValuesContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = T6TriggerParser.RULE_values;
  }

  value = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ValueContext);
    } else {
      return this.getTypedRuleContext(ValueContext, i);
    }
  };

  SEPARATOR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(T6TriggerParser.SEPARATOR);
    } else {
      return this.getToken(T6TriggerParser.SEPARATOR, i);
    }
  };

  accept(visitor) {
    if (visitor instanceof T6TriggerVisitor) {
      return visitor.visitValues(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

T6TriggerParser.ParseContext = ParseContext;
T6TriggerParser.ExprContext = ExprContext;
T6TriggerParser.DateTimeContext = DateTimeContext;
T6TriggerParser.VehicleImpactContext = VehicleImpactContext;
T6TriggerParser.NumberContext = NumberContext;
T6TriggerParser.NumbersContext = NumbersContext;
T6TriggerParser.FieldContext = FieldContext;
T6TriggerParser.OpContext = OpContext;
T6TriggerParser.ComparatorContext = ComparatorContext;
T6TriggerParser.BinaryContext = BinaryContext;
T6TriggerParser.NotContext = NotContext;
T6TriggerParser.ComplexContext = ComplexContext;
T6TriggerParser.CountContext = CountContext;
T6TriggerParser.CountComplexContext = CountComplexContext;
T6TriggerParser.ValueContext = ValueContext;
T6TriggerParser.ValuesContext = ValuesContext;

((function (_super) {
    __extends(ParseCtx, _super);
    function ParseCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParseCtx;
})(T6TriggerParser.ParseContext));
((function (_super) {
    __extends(ExprCtx, _super);
    function ExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExprCtx;
})(T6TriggerParser.ExprContext));
((function (_super) {
    __extends(NumbersExprCtx, _super);
    function NumbersExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumbersExprCtx;
})(T6TriggerParser.NumbersExprContext));
((function (_super) {
    __extends(ComparatorExprCtx, _super);
    function ComparatorExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComparatorExprCtx;
})(T6TriggerParser.ComparatorExprContext));
((function (_super) {
    __extends(ComplexExprCtx, _super);
    function ComplexExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComplexExprCtx;
})(T6TriggerParser.ComplexExprContext));
((function (_super) {
    __extends(NumberExprCtx, _super);
    function NumberExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberExprCtx;
})(T6TriggerParser.NumberExprContext));
((function (_super) {
    __extends(BinaryExprCtx, _super);
    function BinaryExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BinaryExprCtx;
})(T6TriggerParser.BinaryExprContext));
((function (_super) {
    __extends(ParenExprCtx, _super);
    function ParenExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParenExprCtx;
})(T6TriggerParser.ParenExprContext));
((function (_super) {
    __extends(CountExprCtx, _super);
    function CountExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CountExprCtx;
})(T6TriggerParser.CountExprContext));
((function (_super) {
    __extends(NotExprCtx, _super);
    function NotExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotExprCtx;
})(T6TriggerParser.NotExprContext));
((function (_super) {
    __extends(CountComplexExprCtx, _super);
    function CountComplexExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CountComplexExprCtx;
})(T6TriggerParser.CountComplexExprContext));
((function (_super) {
    __extends(ValueExprCtx, _super);
    function ValueExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValueExprCtx;
})(T6TriggerParser.ValueExprContext));
((function (_super) {
    __extends(EmptyExprCtx, _super);
    function EmptyExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmptyExprCtx;
})(T6TriggerParser.EmptyExprContext));
((function (_super) {
    __extends(VehicleImpactExprCtx, _super);
    function VehicleImpactExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleImpactExprCtx;
})(T6TriggerParser.VehicleImpactExprContext));
((function (_super) {
    __extends(ValuesExprCtx, _super);
    function ValuesExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValuesExprCtx;
})(T6TriggerParser.ValuesExprContext));
((function (_super) {
    __extends(AnyExprCtx, _super);
    function AnyExprCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnyExprCtx;
})(T6TriggerParser.AnyExprContext));
((function (_super) {
    __extends(DateTimeCtx, _super);
    function DateTimeCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DateTimeCtx;
})(T6TriggerParser.DateTimeContext));
((function (_super) {
    __extends(VehicleImpactCtx, _super);
    function VehicleImpactCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleImpactCtx;
})(T6TriggerParser.VehicleImpactContext));
((function (_super) {
    __extends(NumberCtx, _super);
    function NumberCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberCtx;
})(T6TriggerParser.NumberContext));
((function (_super) {
    __extends(NumbersCtx, _super);
    function NumbersCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumbersCtx;
})(T6TriggerParser.NumbersContext));
((function (_super) {
    __extends(FieldCtx, _super);
    function FieldCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldCtx;
})(T6TriggerParser.FieldContext));
((function (_super) {
    __extends(OpCtx, _super);
    function OpCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OpCtx;
})(T6TriggerParser.OpContext));
((function (_super) {
    __extends(ComparatorCtx, _super);
    function ComparatorCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComparatorCtx;
})(T6TriggerParser.ComparatorContext));
((function (_super) {
    __extends(BinaryCtx, _super);
    function BinaryCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BinaryCtx;
})(T6TriggerParser.BinaryContext));
((function (_super) {
    __extends(NotCtx, _super);
    function NotCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotCtx;
})(T6TriggerParser.NotContext));
((function (_super) {
    __extends(ComplexCtx, _super);
    function ComplexCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ComplexCtx;
})(T6TriggerParser.ComplexContext));
((function (_super) {
    __extends(CountCtx, _super);
    function CountCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CountCtx;
})(T6TriggerParser.CountContext));
((function (_super) {
    __extends(CountComplexCtx, _super);
    function CountComplexCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CountComplexCtx;
})(T6TriggerParser.CountComplexContext));
((function (_super) {
    __extends(ValueCtx, _super);
    function ValueCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValueCtx;
})(T6TriggerParser.ValueContext));
((function (_super) {
    __extends(ValuesCtx, _super);
    function ValuesCtx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValuesCtx;
})(T6TriggerParser.ValuesContext));
var EFieldType;
(function (EFieldType) {
    EFieldType["string"] = "string";
    EFieldType["enum"] = "enum";
    EFieldType["integer"] = "integer";
    EFieldType["timestamp"] = "timestamp";
    EFieldType["complex"] = "complex";
    EFieldType["decimal"] = "decimal";
    EFieldType["enum_list"] = "enum_list";
    EFieldType["injury"] = "injury";
    EFieldType["user"] = "user";
    EFieldType["image"] = "image";
    EFieldType["user_list"] = "user_list";
    EFieldType["icd"] = "icd";
    EFieldType["ais"] = "ais";
    EFieldType["custom"] = "custom";
    EFieldType["vehicleImpactType"] = "vehicleImpactType";
    EFieldType["address"] = "address";
})(EFieldType || (EFieldType = {}));
var ESource;
(function (ESource) {
    ESource["LEXER"] = "Lexer";
    ESource["PARSER"] = "Parser";
    ESource["EVALUATE_VISITOR"] = "EvaluateConditionVisitor";
})(ESource || (ESource = {}));

var ErrorListener = (function (_super) {
    __extends(ErrorListener, _super);
    function ErrorListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorListener.getInstance = function () {
        if (!ErrorListener.instance) {
            ErrorListener.instance = new ErrorListener();
        }
        return ErrorListener.instance;
    };
    ErrorListener.clearInstance = function () {
        ErrorListener.instance = null;
    };
    ErrorListener.prototype.isLexer = function (recogniser) {
        return recogniser instanceof T6TriggerLexer;
    };
    ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        var source = this.isLexer(recognizer) ? ESource.LEXER : ESource.PARSER;
        this.report = new CoLangError({
            message: msg,
            source: source,
            line: line,
            column: column,
            recognizer: recognizer,
            offendingSymbol: offendingSymbol,
            e: e,
        });
    };
    return ErrorListener;
}(antlr4.error.ErrorListener));

var InputStream = antlr4.InputStream;
var Lexer = (function () {
    function Lexer(condition) {
        var chars = new InputStream(condition, true);
        var lexer = new T6TriggerLexer(chars);
        lexer.removeErrorListeners();
        var errorListener = ErrorListener.getInstance();
        lexer.addErrorListener(errorListener);
        this.lexer = lexer;
    }
    return Lexer;
}());

var CommonTokenStream = antlr4.CommonTokenStream;
var Parser = (function () {
    function Parser(coLangLexer) {
        var lexer = coLangLexer.lexer;
        var tokens = new CommonTokenStream(lexer);
        var parser = new T6TriggerParser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        var errorListener = ErrorListener.getInstance();
        parser.addErrorListener(errorListener);
        this.parser = parser;
        this.ast = parser.parse();
        this.error = errorListener.report;
        ErrorListener.clearInstance();
    }
    return Parser;
}());

var ExtractFieldNamesVisitor = (function (_super) {
    __extends(ExtractFieldNamesVisitor, _super);
    function ExtractFieldNamesVisitor() {
        var _this = _super.call(this) || this;
        _this.fieldNamesSet = new Set();
        return _this;
    }
    ExtractFieldNamesVisitor.prototype.visitParse = function (ctx) {
        _super.prototype.visit.call(this, ctx.expr());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitValueExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitValuesExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitComparatorExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitAnyExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitEmptyExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return _super.prototype.visitEmptyExpr.call(this, ctx);
    };
    ExtractFieldNamesVisitor.prototype.visitNotExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitNumberExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitBinaryExpr = function (ctx) {
        _super.prototype.visit.call(this, ctx.expr(0));
        _super.prototype.visit.call(this, ctx.expr(1));
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitNumbersExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitParenExpr = function (ctx) {
        _super.prototype.visit.call(this, ctx.expr());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitComplexExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        _super.prototype.visit.call(this, ctx.complex().expr());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitCountExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitCountComplexExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        if (ctx.countComplex().DISTINCT() !== null) {
            this.fieldNamesSet.add(ctx.countComplex().field().getText());
        }
        _super.prototype.visit.call(this, ctx.countComplex().expr());
        return null;
    };
    ExtractFieldNamesVisitor.prototype.visitVehicleImpactExpr = function (ctx) {
        this.fieldNamesSet.add(ctx.field().getText());
        return null;
    };
    Object.defineProperty(ExtractFieldNamesVisitor.prototype, "fieldNames", {
        get: function () {
            return this.fieldNamesSet;
        },
        enumerable: false,
        configurable: true
    });
    return ExtractFieldNamesVisitor;
}(T6TriggerVisitor));

var EDateTimeUnits;
(function (EDateTimeUnits) {
    EDateTimeUnits["D"] = "d";
    EDateTimeUnits["M"] = "m";
    EDateTimeUnits["Y"] = "y";
})(EDateTimeUnits || (EDateTimeUnits = {}));
var EvaluateConditionVisitor = (function (_super) {
    __extends(EvaluateConditionVisitor, _super);
    function EvaluateConditionVisitor(fieldTokens) {
        var _this = _super.call(this) || this;
        _this.fieldTokensScope = {};
        _this.evaluationResult = false;
        _this.triggeredFieldTokens = null;
        _this.setFieldTokensScope(fieldTokens);
        return _this;
    }
    EvaluateConditionVisitor.prototype.setFieldTokensScope = function (tokens) {
        if (this.isArray(tokens)) {
            this.fieldTokensScope = getScope(tokens);
        }
        else {
            this.fieldTokensScope = __assign({}, tokens);
        }
        function getScope(tokens, result) {
            var e_1, _a;
            if (result === void 0) { result = {}; }
            try {
                for (var tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next(); !tokens_1_1.done; tokens_1_1 = tokens_1.next()) {
                    var token = tokens_1_1.value;
                    result[token.fieldName] = result[token.fieldName]
                        ? __spreadArray(__spreadArray([], __read(result[token.fieldName]), false), [token], false) : [token];
                    if (token.fieldType === EFieldType.complex) {
                        getScope(token.children, result);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        }
    };
    EvaluateConditionVisitor.prototype.checkFieldType = function (fieldTokens, acceptableFieldTypes) {
        if (!fieldTokens.every(function (ft) { return acceptableFieldTypes.includes(ft.fieldType); })) {
            throw new Error("Incorrect model type for [".concat(fieldTokens[0].fieldName, "]: actual - [").concat(fieldTokens[0].fieldType, "], requested - [").concat(acceptableFieldTypes.join('|'), "]"));
        }
    };
    EvaluateConditionVisitor.prototype.getRelevantFieldTokens = function (conditionFieldName) {
        var relevantTokens = this.fieldTokensScope[conditionFieldName];
        return relevantTokens && relevantTokens.length > 0 ? relevantTokens : null;
    };
    EvaluateConditionVisitor.prototype.getConditionValue = function (ctx) {
        var inputStream = ctx.start.source[1];
        if (!inputStream)
            throw new Error('InputStream is missing in TokenSourceTuple');
        return inputStream.getText(ctx.start.start, ctx.stop.stop);
    };
    EvaluateConditionVisitor.prototype.truthifyResult = function (result, token) {
        if (result) {
            var res = __assign({}, result);
            res.triggeredFieldTokens = res.triggeredFieldTokens.add(token);
            return res;
        }
        else {
            return {
                evaluationResult: true,
                triggeredFieldTokens: new Set().add(token),
            };
        }
    };
    EvaluateConditionVisitor.prototype.dateTimeValueParse = function (rawValue) {
        var parsedValue = rawValue.match(/^[1-9]\d*/);
        var parsedUnit = rawValue.match(/[a-z]+$/i);
        var value = parsedValue ? parsedValue[0] : parsedValue;
        var unit = parsedUnit ? parsedUnit[0].toLowerCase() : parsedUnit;
        switch (unit) {
            case 'day':
            case 'days':
                unit = EDateTimeUnits.D;
                break;
            case 'month':
            case 'months':
                unit = EDateTimeUnits.M;
                break;
            case 'year':
            case 'years':
                unit = EDateTimeUnits.Y;
        }
        return { value: value, unit: unit };
    };
    EvaluateConditionVisitor.prototype.dateTimeValueConverter = function (tokenUnit, rowTokenValue, conditionUnit, rowConditionValue) {
        var tokenValue = Number(rowTokenValue);
        var conditionValue = Number(rowConditionValue);
        if (tokenUnit === conditionUnit) {
            return { tokenValue: tokenValue, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.M) {
            return { tokenValue: tokenValue / 30, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.D && conditionUnit === EDateTimeUnits.Y) {
            return { tokenValue: tokenValue / 360, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.D) {
            return { tokenValue: tokenValue * 30, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.M && conditionUnit === EDateTimeUnits.Y) {
            return { tokenValue: tokenValue / 12, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.D) {
            return { tokenValue: tokenValue * 360, conditionValue: conditionValue };
        }
        else if (tokenUnit === EDateTimeUnits.Y && conditionUnit === EDateTimeUnits.M) {
            return { tokenValue: tokenValue * 12, conditionValue: conditionValue };
        }
    };
    EvaluateConditionVisitor.prototype.compare = function (opCtx, tokenValue, conditionValue) {
        if (opCtx.GT())
            return tokenValue > conditionValue;
        if (opCtx.GE())
            return tokenValue >= conditionValue;
        if (opCtx.LT())
            return tokenValue < conditionValue;
        if (opCtx.LE())
            return tokenValue <= conditionValue;
        if (opCtx.EQ())
            return tokenValue === conditionValue;
        return false;
    };
    EvaluateConditionVisitor.prototype.isTruthy = function (result) {
        return result !== null;
    };
    EvaluateConditionVisitor.prototype.isTokenValueEmpty = function (token) {
        var fieldType = token.fieldType, fieldValue = token.fieldValue;
        switch (fieldType) {
            case EFieldType.complex:
                return fieldValue === undefined;
            case EFieldType.decimal:
            case EFieldType.integer:
            case EFieldType.timestamp:
                return fieldValue === null;
            case EFieldType.ais:
            case EFieldType.enum:
            case EFieldType.string:
                return fieldValue === '';
            case EFieldType.enum_list:
                try {
                    return fieldValue.length === 0;
                }
                catch (_a) {
                    throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
                }
            case EFieldType.image:
                try {
                    return (fieldValue.hasOwnProperty('images') &&
                        fieldValue.images.length === 0);
                }
                catch (_b) {
                    throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
                }
            case EFieldType.vehicleImpactType:
                try {
                    return Object.keys(fieldValue).length === 0;
                }
                catch (_c) {
                    throw new Error('Check the value for the vehicleImpactType field. It must be like object literal - {}');
                }
            default:
                throw new Error('Check the fieldType for the value');
        }
    };
    EvaluateConditionVisitor.prototype.isTokenValuesEqual = function (token1, token2) {
        var _a, _b, _c, _d;
        var fieldType;
        if (token1.fieldType === token2.fieldType) {
            fieldType = token1.fieldType;
        }
        else {
            throw new Error('Field types must be equal');
        }
        switch (fieldType) {
            case EFieldType.ais:
            case EFieldType.enum:
            case EFieldType.string:
            case EFieldType.decimal:
            case EFieldType.integer:
                return token1.fieldValue === token2.fieldValue;
            case EFieldType.timestamp:
                try {
                    return token1.fieldValue === null || token2.fieldValue === null
                        ? token1.fieldValue === token2.fieldValue
                        : token1.fieldValue.getTime() === token2.fieldValue.getTime();
                }
                catch (_e) {
                    throw new Error('Check the value for the timestamp type. It must be Date type');
                }
            case EFieldType.enum_list:
                try {
                    var arr1 = token1.fieldValue;
                    var arr2 = token2.fieldValue;
                    return this.isArraysEqual(arr1, arr2);
                }
                catch (_f) {
                    throw new Error('Check the value for the enum_list type field. It must be like array literal - []');
                }
            case EFieldType.image:
                try {
                    var obj1 = token1.fieldValue;
                    var obj2 = token2.fieldValue;
                    return deepEqual(obj1, obj2);
                }
                catch (_g) {
                    throw new Error('Check the value for the image type field. It must be like this object literal - { images: [] }');
                }
            case EFieldType.vehicleImpactType:
                try {
                    var t1ValCopy = __assign({}, token1.fieldValue);
                    delete t1ValCopy.passengerPositions;
                    delete t1ValCopy.impactSides;
                    var t2ValCopy = __assign({}, token2.fieldValue);
                    delete t2ValCopy.passengerPositions;
                    delete t2ValCopy.impactSides;
                    if (deepEqual(t1ValCopy, t2ValCopy)) {
                        return (this.isArraysEqual((_a = token1.fieldValue.passengerPositions) !== null && _a !== void 0 ? _a : [], (_b = token2.fieldValue.passengerPositions) !== null && _b !== void 0 ? _b : []) &&
                            this.isArraysEqual((_c = token1.fieldValue.impactSides) !== null && _c !== void 0 ? _c : [], (_d = token2.fieldValue.impactSides) !== null && _d !== void 0 ? _d : []));
                    }
                    return false;
                }
                catch (_h) {
                    throw new Error('Check the value for the vehicleImpactType field. It must be like object literal - {}');
                }
            default:
                throw new Error('Check the fieldType for the value');
        }
    };
    EvaluateConditionVisitor.prototype.isArray = function (fieldTokens) {
        return Array.isArray(fieldTokens);
    };
    EvaluateConditionVisitor.prototype.isArraysEqual = function (arr1, arr2) {
        return arr1.length === arr2.length && arr1.every(function (a1) { return arr2.includes(a1); });
    };
    EvaluateConditionVisitor.prototype.isNumeric = function (token) {
        return token.fieldType === EFieldType.integer || token.fieldType === EFieldType.decimal;
    };
    EvaluateConditionVisitor.prototype.isString = function (token) {
        return (token.fieldType === EFieldType.ais ||
            token.fieldType === EFieldType.enum ||
            token.fieldType === EFieldType.string);
    };
    EvaluateConditionVisitor.prototype.isEnumList = function (token) {
        return token.fieldType === EFieldType.enum_list;
    };
    EvaluateConditionVisitor.prototype.visitParse = function (ctx) {
        try {
            var res = _super.prototype.visit.call(this, ctx.expr());
            if (res) {
                var evaluationResult = res.evaluationResult, triggeredFieldTokens = res.triggeredFieldTokens;
                this.evaluationResult = evaluationResult;
                this.triggeredFieldTokens = triggeredFieldTokens;
            }
        }
        catch (e) {
            throw e;
        }
    };
    EvaluateConditionVisitor.prototype.visitBinaryExpr = function (ctx) {
        var res = null;
        var leftExprResult = _super.prototype.visit.call(this, ctx.expr(0));
        var rightExprResult = _super.prototype.visit.call(this, ctx.expr(1));
        var isOrOperator = !!ctx.binary().OR();
        if (isOrOperator) {
            if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
                res = {
                    evaluationResult: true,
                    triggeredFieldTokens: new Set(__spreadArray(__spreadArray([], __read(leftExprResult.triggeredFieldTokens), false), __read(rightExprResult.triggeredFieldTokens), false)),
                };
                return res;
            }
            else if (this.isTruthy(leftExprResult)) {
                return leftExprResult;
            }
            else if (this.isTruthy(rightExprResult)) {
                return rightExprResult;
            }
            else {
                return res;
            }
        }
        else {
            if (this.isTruthy(leftExprResult) && this.isTruthy(rightExprResult)) {
                res = {
                    evaluationResult: true,
                    triggeredFieldTokens: new Set(__spreadArray(__spreadArray([], __read(leftExprResult.triggeredFieldTokens), false), __read(rightExprResult.triggeredFieldTokens), false)),
                };
                return res;
            }
            else {
                return res;
            }
        }
    };
    EvaluateConditionVisitor.prototype.visitComparatorExpr = function (ctx) {
        var e_2, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.string, EFieldType.integer, EFieldType.decimal];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = ctx.comparator().number()
            ? this.getConditionValue(ctx.comparator().number())
            : this.getConditionValue(ctx.comparator().dateTime());
        var operatorCtx = ctx.comparator().op();
        try {
            for (var relevantTokens_1 = __values(relevantTokens), relevantTokens_1_1 = relevantTokens_1.next(); !relevantTokens_1_1.done; relevantTokens_1_1 = relevantTokens_1.next()) {
                var token = relevantTokens_1_1.value;
                if (this.isString(token)) {
                    var _b = this.dateTimeValueParse(token.fieldValue), rowTokenValue = _b.value, tokenUnit = _b.unit;
                    var _c = this.dateTimeValueParse(conditionValue), rowCondValue = _c.value, condUnit = _c.unit;
                    var isValuesAndUnitsNotNull = rowTokenValue !== null &&
                        tokenUnit !== null &&
                        rowCondValue !== null &&
                        condUnit !== null;
                    if (isValuesAndUnitsNotNull) {
                        var converterResult = this.dateTimeValueConverter(tokenUnit, rowTokenValue, condUnit, rowCondValue);
                        if (converterResult) {
                            var tokenValue = converterResult.tokenValue, conditionValue_1 = converterResult.conditionValue;
                            if (this.compare(operatorCtx, tokenValue, conditionValue_1)) {
                                res = this.truthifyResult(res, token);
                            }
                        }
                    }
                }
                else if (this.isNumeric(token) &&
                    token.fieldValue !== null &&
                    this.compare(operatorCtx, token.fieldValue, Number(conditionValue))) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (relevantTokens_1_1 && !relevantTokens_1_1.done && (_a = relevantTokens_1.return)) _a.call(relevantTokens_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitAnyExpr = function (ctx) {
        var e_3, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        try {
            for (var relevantTokens_2 = __values(relevantTokens), relevantTokens_2_1 = relevantTokens_2.next(); !relevantTokens_2_1.done; relevantTokens_2_1 = relevantTokens_2.next()) {
                var token = relevantTokens_2_1.value;
                if (!this.isTokenValueEmpty(token)) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (relevantTokens_2_1 && !relevantTokens_2_1.done && (_a = relevantTokens_2.return)) _a.call(relevantTokens_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitEmptyExpr = function (ctx) {
        var e_4, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        try {
            for (var relevantTokens_3 = __values(relevantTokens), relevantTokens_3_1 = relevantTokens_3.next(); !relevantTokens_3_1.done; relevantTokens_3_1 = relevantTokens_3.next()) {
                var token = relevantTokens_3_1.value;
                if (this.isTokenValueEmpty(token)) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (relevantTokens_3_1 && !relevantTokens_3_1.done && (_a = relevantTokens_3.return)) _a.call(relevantTokens_3);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitNumberExpr = function (ctx) {
        var e_5, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = this.getConditionValue(ctx.number());
        try {
            for (var relevantTokens_4 = __values(relevantTokens), relevantTokens_4_1 = relevantTokens_4.next(); !relevantTokens_4_1.done; relevantTokens_4_1 = relevantTokens_4.next()) {
                var token = relevantTokens_4_1.value;
                if (this.isString(token) && token.fieldValue === conditionValue) {
                    res = this.truthifyResult(res, token);
                }
                else if (this.isNumeric(token) &&
                    token.fieldValue !== null &&
                    token.fieldValue === Number(conditionValue)) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (relevantTokens_4_1 && !relevantTokens_4_1.done && (_a = relevantTokens_4.return)) _a.call(relevantTokens_4);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitNumbersExpr = function (ctx) {
        var e_6, _a;
        var _this = this;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.ais, EFieldType.integer, EFieldType.decimal];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = ctx
            .numbers()
            .number()
            .map(function (nCtx) { return _this.getConditionValue(nCtx); });
        try {
            for (var relevantTokens_5 = __values(relevantTokens), relevantTokens_5_1 = relevantTokens_5.next(); !relevantTokens_5_1.done; relevantTokens_5_1 = relevantTokens_5.next()) {
                var token = relevantTokens_5_1.value;
                if (this.isString(token) && conditionValue.includes(token.fieldValue)) {
                    res = this.truthifyResult(res, token);
                }
                else if (this.isNumeric(token) &&
                    token.fieldValue !== null &&
                    conditionValue.includes(String(token.fieldValue))) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (relevantTokens_5_1 && !relevantTokens_5_1.done && (_a = relevantTokens_5.return)) _a.call(relevantTokens_5);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitNotExpr = function (ctx) {
        var e_7, _a;
        var _this = this;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [
            EFieldType.ais,
            EFieldType.integer,
            EFieldType.decimal,
            EFieldType.string,
            EFieldType.enum,
            EFieldType.enum_list,
        ];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = ctx.not().numbers()
            ? ctx
                .not()
                .numbers()
                .number()
                .map(function (nCtx) { return _this.getConditionValue(nCtx); })
            : ctx
                .not()
                .values()
                .value()
                .map(function (vCtx) { return _this.getConditionValue(vCtx).toLowerCase(); });
        var _loop_1 = function (token) {
            if (this_1.isString(token) && !conditionValue.includes(token.fieldValue.toLowerCase())) {
                res = this_1.truthifyResult(res, token);
            }
            else if (this_1.isNumeric(token) && !conditionValue.includes(String(token.fieldValue))) {
                res = this_1.truthifyResult(res, token);
            }
            else if (this_1.isEnumList(token)) {
                var tokenValue_1 = token.fieldValue.map(function (fv) { return fv.toLowerCase(); });
                if (conditionValue.every(function (cv) { return !tokenValue_1.includes(cv); })) {
                    res = this_1.truthifyResult(res, token);
                }
            }
        };
        var this_1 = this;
        try {
            for (var relevantTokens_6 = __values(relevantTokens), relevantTokens_6_1 = relevantTokens_6.next(); !relevantTokens_6_1.done; relevantTokens_6_1 = relevantTokens_6.next()) {
                var token = relevantTokens_6_1.value;
                _loop_1(token);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (relevantTokens_6_1 && !relevantTokens_6_1.done && (_a = relevantTokens_6.return)) _a.call(relevantTokens_6);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitComplexExpr = function (ctx) {
        return _super.prototype.visit.call(this, ctx.complex().expr());
    };
    EvaluateConditionVisitor.prototype.visitCountExpr = function (ctx) {
        var e_8, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.string, EFieldType.enum];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = ctx.count().value() ? this.getConditionValue(ctx.count().value()) : null;
        var operatorCtx = ctx.count().comparator().op();
        var conditionValueCount = this.getConditionValue(ctx.count().comparator().number());
        var tokensForCount = conditionValue
            ? relevantTokens.filter(function (rt) { return rt.fieldValue === conditionValue; })
            : relevantTokens.reduce(function (uniqueNameTokens, rt) {
                if (uniqueNameTokens.every(function (unt) { return unt.fieldValue !== rt.fieldValue; })) {
                    uniqueNameTokens.push(rt);
                }
                return uniqueNameTokens;
            }, []);
        if (this.compare(operatorCtx, tokensForCount.length, Number(conditionValueCount))) {
            try {
                for (var tokensForCount_1 = __values(tokensForCount), tokensForCount_1_1 = tokensForCount_1.next(); !tokensForCount_1_1.done; tokensForCount_1_1 = tokensForCount_1.next()) {
                    var token = tokensForCount_1_1.value;
                    res = this.truthifyResult(res, token);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (tokensForCount_1_1 && !tokensForCount_1_1.done && (_a = tokensForCount_1.return)) _a.call(tokensForCount_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitCountComplexExpr = function (ctx) {
        var e_9, _a, e_10, _b;
        var _this = this;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var parentTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!parentTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.complex];
        this.checkFieldType(parentTokens, acceptableFieldTypes);
        var operatorCtx = ctx.countComplex().comparator().op();
        var conditionResultsCount = this.getConditionValue(ctx.countComplex().comparator().number());
        var distinctFieldName = ctx.countComplex().DISTINCT()
            ? ctx.countComplex().field().getText()
            : null;
        var distinctFieldTokens = [];
        var childTokens = [];
        var truthyParentResultsCount = 0;
        var originScope = this.fieldTokensScope;
        try {
            parentLoop: for (var parentTokens_1 = __values(parentTokens), parentTokens_1_1 = parentTokens_1.next(); !parentTokens_1_1.done; parentTokens_1_1 = parentTokens_1.next()) {
                var parentToken = parentTokens_1_1.value;
                this.setFieldTokensScope(parentToken.children);
                var parentResult = _super.prototype.visit.call(this, ctx.countComplex().expr());
                if (this.isTruthy(parentResult) && distinctFieldName) {
                    var childTokensBuffer = [];
                    var _loop_2 = function (childToken) {
                        if (childToken.fieldName === distinctFieldName &&
                            distinctFieldTokens.some(function (distinctToken) {
                                return _this.isTokenValuesEqual(distinctToken, childToken);
                            })) {
                            return "continue-parentLoop";
                        }
                        else if (childToken.fieldName === distinctFieldName) {
                            distinctFieldTokens.push(childToken);
                            childTokensBuffer.push(childToken);
                        }
                        else {
                            childTokensBuffer.push(childToken);
                        }
                    };
                    try {
                        for (var _c = (e_10 = void 0, __values(parentResult.triggeredFieldTokens)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var childToken = _d.value;
                            var state_1 = _loop_2(childToken);
                            switch (state_1) {
                                case "continue-parentLoop": continue parentLoop;
                            }
                        }
                    }
                    catch (e_10_1) { e_10 = { error: e_10_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_10) throw e_10.error; }
                    }
                    if (childTokensBuffer.length > 0) {
                        truthyParentResultsCount++;
                        childTokens = __spreadArray(__spreadArray([], __read(childTokens), false), __read(childTokensBuffer), false);
                    }
                }
                else if (this.isTruthy(parentResult)) {
                    truthyParentResultsCount++;
                    childTokens = __spreadArray(__spreadArray([], __read(childTokens), false), __read(parentResult.triggeredFieldTokens), false);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (parentTokens_1_1 && !parentTokens_1_1.done && (_a = parentTokens_1.return)) _a.call(parentTokens_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        this.setFieldTokensScope(originScope);
        if (this.compare(operatorCtx, truthyParentResultsCount, Number(conditionResultsCount))) {
            res = {
                evaluationResult: true,
                triggeredFieldTokens: new Set(childTokens),
            };
            return res;
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitParenExpr = function (ctx) {
        return _super.prototype.visit.call(this, ctx.expr());
    };
    EvaluateConditionVisitor.prototype.visitVehicleImpactExpr = function (ctx) {
        var e_11, _a;
        var _b;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.vehicleImpactType];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = ctx.vehicleImpact().INT().getText();
        try {
            for (var relevantTokens_7 = __values(relevantTokens), relevantTokens_7_1 = relevantTokens_7.next(); !relevantTokens_7_1.done; relevantTokens_7_1 = relevantTokens_7.next()) {
                var token = relevantTokens_7_1.value;
                if ((_b = token.fieldValue.impactSides) === null || _b === void 0 ? void 0 : _b.includes(Number(conditionValue))) {
                    res = this.truthifyResult(res, token);
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (relevantTokens_7_1 && !relevantTokens_7_1.done && (_a = relevantTokens_7.return)) _a.call(relevantTokens_7);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitValueExpr = function (ctx) {
        var e_12, _a;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValue = this.getConditionValue(ctx.value());
        try {
            for (var relevantTokens_8 = __values(relevantTokens), relevantTokens_8_1 = relevantTokens_8.next(); !relevantTokens_8_1.done; relevantTokens_8_1 = relevantTokens_8.next()) {
                var token = relevantTokens_8_1.value;
                if (this.isEnumList(token)) {
                    var tokenValueLC = token.fieldValue.map(function (tv) { return tv.toLowerCase(); });
                    if (tokenValueLC.includes(conditionValue.toLowerCase())) {
                        res = this.truthifyResult(res, token);
                    }
                }
                else if (this.isString(token)) {
                    if (token.fieldValue.toLowerCase() === conditionValue.toLowerCase()) {
                        res = this.truthifyResult(res, token);
                    }
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (relevantTokens_8_1 && !relevantTokens_8_1.done && (_a = relevantTokens_8.return)) _a.call(relevantTokens_8);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return res;
    };
    EvaluateConditionVisitor.prototype.visitValuesExpr = function (ctx) {
        var e_13, _a;
        var _this = this;
        var res = null;
        var conditionFieldName = ctx.field().getText();
        var relevantTokens = this.getRelevantFieldTokens(conditionFieldName);
        if (!relevantTokens)
            return res;
        var acceptableFieldTypes = [EFieldType.string, EFieldType.enum, EFieldType.enum_list];
        this.checkFieldType(relevantTokens, acceptableFieldTypes);
        var conditionValues = ctx
            .values()
            .value()
            .map(function (vCtx) { return _this.getConditionValue(vCtx).toLowerCase(); });
        var _loop_3 = function (token) {
            if (this_2.isEnumList(token)) {
                var tokenValue_2 = token.fieldValue.map(function (tv) { return tv.toLowerCase(); });
                if (conditionValues.some(function (cv) { return tokenValue_2.includes(cv); })) {
                    res = this_2.truthifyResult(res, token);
                }
            }
            else if (this_2.isString(token)) {
                if (conditionValues.includes(token.fieldValue.toLowerCase())) {
                    res = this_2.truthifyResult(res, token);
                }
            }
        };
        var this_2 = this;
        try {
            for (var relevantTokens_9 = __values(relevantTokens), relevantTokens_9_1 = relevantTokens_9.next(); !relevantTokens_9_1.done; relevantTokens_9_1 = relevantTokens_9.next()) {
                var token = relevantTokens_9_1.value;
                _loop_3(token);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (relevantTokens_9_1 && !relevantTokens_9_1.done && (_a = relevantTokens_9.return)) _a.call(relevantTokens_9);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return res;
    };
    return EvaluateConditionVisitor;
}(T6TriggerVisitor));

var CoLang = (function () {
    function CoLang(params) {
        var _a;
        this.withCache = true;
        this.cachedParse = {};
        if (params) {
            this.withCache = (_a = params.withCache) !== null && _a !== void 0 ? _a : true;
            this.onError = params.onError;
        }
        this.checkCondition = this.checkCondition.bind(this);
        this.getFieldEntries = this.getFieldEntries.bind(this);
        this.evaluateFieldTokens = this.evaluateFieldTokens.bind(this);
        this.clearCache = this.clearCache.bind(this);
    }
    CoLang.prototype.getParseResult = function (condition) {
        if (this.cachedParse[condition])
            return this.cachedParse[condition];
        var lexer = new Lexer(condition);
        var _a = new Parser(lexer), ast = _a.ast, error = _a.error;
        if (this.withCache) {
            this.cachedParse[condition] = { ast: ast, error: error };
        }
        return { ast: ast, error: error };
    };
    CoLang.prototype.isError = function (error, condition, conditionOwnerId) {
        if (error) {
            if (this.onError)
                this.onError(error, condition, conditionOwnerId);
            return true;
        }
        return false;
    };
    CoLang.prototype.checkCondition = function (condition, withCache) {
        if (withCache === void 0) { withCache = false; }
        this.withCache = withCache;
        var error = this.getParseResult(condition).error;
        return error;
    };
    CoLang.prototype.getFieldEntries = function (params) {
        var condition = params.condition, conditionOwnerId = params.conditionOwnerId;
        var _a = this.getParseResult(condition), ast = _a.ast, error = _a.error;
        if (this.isError(error, condition, conditionOwnerId))
            return null;
        var extractFieldNamesVisitor = new ExtractFieldNamesVisitor();
        ast.accept(extractFieldNamesVisitor);
        return extractFieldNamesVisitor.fieldNames;
    };
    CoLang.prototype.evaluateFieldTokens = function (params) {
        var condition = params.condition, fieldTokens = params.fieldTokens, conditionOwnerId = params.conditionOwnerId;
        var _a = this.getParseResult(condition), ast = _a.ast, error = _a.error;
        if (this.isError(error, condition, conditionOwnerId))
            return null;
        try {
            var evaluateConditionVisitor = new EvaluateConditionVisitor(fieldTokens);
            ast.accept(evaluateConditionVisitor);
            var evaluationResult = evaluateConditionVisitor.evaluationResult, triggeredFieldTokens = evaluateConditionVisitor.triggeredFieldTokens;
            return { evaluationResult: evaluationResult, triggeredFieldTokens: triggeredFieldTokens };
        }
        catch (e) {
            var message = e.message;
            var error_1 = new CoLangError({ message: message, source: ESource.EVALUATE_VISITOR });
            if (this.onError)
                this.onError(error_1, condition, conditionOwnerId);
            return null;
        }
    };
    CoLang.prototype.clearCache = function () {
        this.cachedParse = {};
    };
    return CoLang;
}());

var FieldTokenModel = (function () {
    function FieldTokenModel(id, parentId, fieldName, fieldValue, fieldType, children) {
        if (parentId === void 0) { parentId = ''; }
        if (children === void 0) { children = []; }
        this.id = id;
        this.parentId = parentId;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
        this.fieldType = fieldType;
        this.children = children;
    }
    return FieldTokenModel;
}());

export { CoLang, CoLangError, ESource, FieldTokenModel };
//# sourceMappingURL=index.js.map
