/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDecimalToHex": () => (/* binding */ convertDecimalToHex),
/* harmony export */   "convertHexToDecimal": () => (/* binding */ convertHexToDecimal),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "hsvToRgb": () => (/* binding */ hsvToRgb),
/* harmony export */   "numberInputToObject": () => (/* binding */ numberInputToObject),
/* harmony export */   "parseIntFromHex": () => (/* binding */ parseIntFromHex),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* binding */ rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* binding */ rgbToHsv),
/* harmony export */   "rgbToRgb": () => (/* binding */ rgbToRgb),
/* harmony export */   "rgbaToArgbHex": () => (/* binding */ rgbaToArgbHex),
/* harmony export */   "rgbaToHex": () => (/* binding */ rgbaToHex)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255) * 255,
        g: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255) * 255,
        b: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360);
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    l = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360) * 6;
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    v = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "names": () => (/* binding */ names)
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputToRGB": () => (/* binding */ inputToRGB),
/* harmony export */   "isValidCSSUnit": () => (/* binding */ isValidCSSUnit),
/* harmony export */   "stringInputToObject": () => (/* binding */ stringInputToObject)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            v = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.v);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb)(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            l = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.l);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = (0,_util__WEBPACK_IMPORTED_MODULE_1__.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinyColor": () => (/* binding */ TinyColor),
/* harmony export */   "tinycolor": () => (/* binding */ tinycolor)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.numberInputToObject)(color);
        }
        this.originalInput = color;
        var rgb = (0,_format_input__WEBPACK_IMPORTED_MODULE_1__.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0,_util__WEBPACK_IMPORTED_MODULE_2__.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__.names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bound01": () => (/* binding */ bound01),
/* harmony export */   "boundAlpha": () => (/* binding */ boundAlpha),
/* harmony export */   "clamp01": () => (/* binding */ clamp01),
/* harmony export */   "convertToPercentage": () => (/* binding */ convertToPercentage),
/* harmony export */   "isOnePointZero": () => (/* binding */ isOnePointZero),
/* harmony export */   "isPercentage": () => (/* binding */ isPercentage),
/* harmony export */   "pad2": () => (/* binding */ pad2)
/* harmony export */ });
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./src/config/commands.ts":
/*!********************************!*\
  !*** ./src/config/commands.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commands": () => (/* binding */ commands)
/* harmony export */ });
const commands = {
    generalSettings: 'generalSettings',
    export: 'export',
    sendSettings: 'sendSettings',
    urlExport: 'urlExport',
    help: 'help',
    demo: 'demo',
    openUrl: 'openUrl',
    reset: 'reset',
    saveSettings: 'saveSettings',
    closePlugin: 'closePlugin'
};


/***/ }),

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* istanbul ignore file */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ui: {
        generalSettings: {
            width: 550,
            height: 836
        },
        export: {
            width: 550,
            height: 356
        },
        urlExport: {
            width: 550,
            height: 650
        }
    },
    key: {
        lastVersionSettingsOpened: 'lastVersionSettingsOpened',
        fileId: 'fileId',
        settings: 'settings',
        extensionPluginData: 'org.lukasoppermann.figmaDesignTokens',
        extensionFigmaStyleId: 'styleId',
        extensionVariableStyleId: 'variableId',
        extensionAlias: 'alias',
        authType: {
            token: 'token',
            gitlabToken: 'gitlab_token',
            gitlabCommit: 'gitlab_commit',
            basic: 'Basic',
            bearer: 'Bearer'
        }
    },
    exclusionPrefixDefault: ['_', '.'],
    fileExtensions: [
        {
            label: '.tokens.json',
            value: '.tokens.json'
        },
        {
            label: '.tokens',
            value: '.tokens'
        },
        {
            label: '.json',
            value: '.json'
        }
    ]
});


/***/ }),

/***/ "./src/config/defaultSettings.ts":
/*!***************************************!*\
  !*** ./src/config/defaultSettings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSettings": () => (/* binding */ defaultSettings)
/* harmony export */ });
const defaultSettings = {
    filename: 'design-tokens',
    extension: '.tokens.json',
    nameConversion: 'default',
    tokenFormat: 'standard',
    compression: false,
    urlJsonCompression: true,
    serverUrl: undefined,
    eventType: 'update-tokens',
    accessToken: undefined,
    acceptHeader: 'application/vnd.github.everest-preview+json',
    contentType: 'text/plain;charset=UTF-8',
    authType: 'token',
    reference: 'main',
    exclusionPrefix: '',
    excludeExtensionProp: false,
    alias: 'alias, ref, reference',
    keyInName: false,
    prefixInName: true,
    modeInTokenValue: false,
    modeInTokenName: false,
    resolveSameCollectionOrModeReference: false,
    prefix: {
        color: 'color',
        gradient: 'gradient',
        typography: 'typography',
        font: 'font',
        effect: 'effect',
        grid: 'grid',
        border: 'border, borders',
        breakpoint: 'breakpoint, breakpoints',
        radius: 'radius, radii',
        size: 'size, sizes',
        spacing: 'spacing',
        motion: 'motion',
        opacity: 'opacity, opacities'
    },
    exports: {
        color: true,
        gradient: true,
        font: true,
        typography: true,
        effect: true,
        grid: true,
        border: true,
        breakpoint: true,
        radius: true,
        size: true,
        spacing: true,
        motion: true,
        opacity: true,
        variables: true
    }
};


/***/ }),

/***/ "./src/config/tokenTypes.ts":
/*!**********************************!*\
  !*** ./src/config/tokenTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenTypes": () => (/* binding */ tokenTypes)
/* harmony export */ });
/* istanbul ignore file */
const tokenTypes = {
    color: {
        label: 'Colors',
        key: 'color'
    },
    gradient: {
        label: 'Gradients',
        key: 'gradient'
    },
    font: {
        label: 'Font Styles',
        key: 'font'
    },
    typography: {
        label: 'Typography',
        key: 'typography',
        exclude: ['original']
    },
    effect: {
        label: 'Effects',
        key: 'effect'
    },
    grid: {
        label: 'Grids',
        key: 'grid'
    },
    border: {
        label: 'Borders',
        key: 'border'
    },
    breakpoint: {
        label: 'Breakpoints',
        key: 'breakpoint'
    },
    radius: {
        label: 'Radii',
        key: 'radius'
    },
    size: {
        label: 'Sizes',
        key: 'size'
    },
    spacing: {
        label: 'Spacing',
        key: 'spacing'
    },
    motion: {
        label: 'Motion',
        key: 'motion'
    },
    opacity: {
        label: 'Opacity',
        key: 'opacity'
    },
    variables: {
        label: 'Figma Variables (BETA)',
        key: 'variables',
        exclude: ['original']
    }
};


/***/ }),

/***/ "./src/extractor/extractBorders.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractBorders.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const strokeJoins = {
    MITER: 'miter',
    BEVEL: 'bevel',
    ROUND: 'round'
};
const strokeAligns = {
    CENTER: 'center',
    INSIDE: 'inside',
    OUTSIDE: 'outside'
};
const extractBorders = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        // remove nodes with no border property
        .filter(node => node.strokes.length > 0)
        // convert borders
        .map(node => ({
        name: node.name,
        category: 'border',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.border.key,
        description: node.description || null,
        values: {
            strokeAlign: {
                value: strokeAligns[node.strokeAlign],
                type: 'string'
            },
            dashPattern: {
                value: [...(node.dashPattern !== undefined && node.dashPattern.length > 0 ? node.dashPattern : [0, 0])],
                type: 'string'
            },
            strokeCap: {
                value: ((typeof node.strokeCap === 'string') ? node.strokeCap.toLowerCase() : 'mixed'),
                type: 'string'
            },
            strokeJoin: {
                value: strokeJoins[node.strokeJoin],
                type: 'string'
            },
            strokeMiterLimit: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(node.strokeMiterLimit),
                unit: 'degree',
                type: 'number'
            },
            // strokeStyleId: {
            //   value: node.strokeStyleId
            // },
            strokeWeight: {
                value: node.strokeWeight,
                unit: 'pixel',
                type: 'number'
            },
            stroke: {
                value: node.strokes[0],
                type: 'color'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.border.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractBorders);


/***/ }),

/***/ "./src/extractor/extractBreakpoints.ts":
/*!*********************************************!*\
  !*** ./src/extractor/extractBreakpoints.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractBreakpoints = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'breakpoint',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.breakpoint.key,
        description: node.description || null,
        values: {
            width: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.width, 2),
                unit: 'pixel',
                type: 'number'
            },
            height: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.height, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.breakpoint.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractBreakpoints);


/***/ }),

/***/ "./src/extractor/extractColors.ts":
/*!****************************************!*\
  !*** ./src/extractor/extractColors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_convertColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const transparentFill = {
    fill: {
        value: { r: 0, g: 0, b: 0, a: 0 },
        type: 'color',
        blendMode: 'normal'
    }
};
const parseDescription = (description = '', aliasArray) => {
    aliasArray = !aliasArray || aliasArray.filter(i => i).length === 0 ? ['Ref:'] : aliasArray;
    const regex = new RegExp('(' + aliasArray.join('|').toLowerCase() + ')' + ':?\\s');
    // split description in lines
    let alias;
    const descriptionLines = description.split(/\r?\n/)
        // find match
        .filter(line => {
        if (line.toLowerCase().match(regex)) {
            alias = line.toLowerCase().replace(regex, '').trim();
            return false;
        }
        return true;
    });
    // return object
    return {
        alias: alias,
        description: descriptionLines.join('\n')
    };
};
const addAlias = (alias) => alias ? ({ [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionAlias]: alias }) : ({});
const gradientType = {
    GRADIENT_LINEAR: 'linear',
    GRADIENT_RADIAL: 'radial',
    GRADIENT_ANGULAR: 'angular',
    GRADIENT_DIAMOND: 'diamond'
};
const isGradient = (paint) => ['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].includes(paint === null || paint === void 0 ? void 0 : paint.type);
const rotationFromMatrix = ([[x1, y1], [x2, y2]]) => {
    // https://stackoverflow.com/questions/24909586/find-rotation-angle-for-affine-transform
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180.0 / Math.PI) + 315;
    return angle > 360 ? angle - 360 : angle;
};
const extractFills = (paint) => {
    var _a;
    if (paint.type === 'SOLID') {
        return {
            fill: {
                value: (0,_utils_convertColor__WEBPACK_IMPORTED_MODULE_1__.convertPaintToRgba)(paint),
                type: 'color',
                blendMode: ((_a = paint.blendMode) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'normal'
            }
        };
    }
    if (['GRADIENT_LINEAR', 'GRADIENT_RADIAL', 'GRADIENT_ANGULAR', 'GRADIENT_DIAMOND'].includes(paint.type)) {
        return {
            gradientType: {
                value: gradientType[paint.type],
                type: 'string'
            },
            rotation: {
                // https://stackoverflow.com/questions/24909586/find-rotation-angle-for-affine-transform
                value: rotationFromMatrix(paint.gradientTransform),
                type: 'number',
                unit: 'degree'
            },
            stops: paint.gradientStops.map(stop => ({
                position: {
                    value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__["default"])(stop.position),
                    type: 'number'
                },
                color: {
                    value: (0,_utils_convertColor__WEBPACK_IMPORTED_MODULE_1__.roundRgba)(stop.color),
                    type: 'color'
                }
            })),
            opacity: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_2__["default"])(paint.opacity),
                type: 'number'
            }
        };
    }
    // return null if no matching type
    /* istanbul ignore next */
    return null;
};
const extractColors = (tokenNodes, prefixArray) => {
    // get all paint styles
    return tokenNodes
        .reduce((previousValue, node) => {
        // ignore image-only fills
        const paintsAfterImageFilter = node.paints.filter(paint => paint.type !== 'IMAGE');
        if (node.paints.length && paintsAfterImageFilter.length === 0) {
            return previousValue;
        }
        // remove images fills from tokens
        node.paints = paintsAfterImageFilter;
        const { alias, description } = parseDescription(node.description, prefixArray.alias);
        const nodeIsGradient = isGradient(node.paints[0]);
        const values = node.paints.length ? node.paints.map(paint => extractFills(paint)) : [transparentFill];
        return [
            ...previousValue,
            {
                name: `${nodeIsGradient ? prefixArray.gradient[0] : prefixArray.color[0]}/${node.name}`,
                category: nodeIsGradient ? 'gradient' : 'color',
                exportKey: (nodeIsGradient ? _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.gradient.key : _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.color.key),
                description: description,
                values,
                extensions: {
                    [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: Object.assign({ [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionFigmaStyleId]: node.id, exportKey: (nodeIsGradient ? _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.gradient.key : _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.color.key) }, (addAlias(alias)))
                }
            }
        ];
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractColors);


/***/ }),

/***/ "./src/extractor/extractEffects.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractEffects.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_convertColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const effectType = {
    LAYER_BLUR: 'layerBlur',
    BACKGROUND_BLUR: 'backgroundBlur',
    DROP_SHADOW: 'dropShadow',
    INNER_SHADOW: 'innerShadow'
};
const blurValues = (effect) => ({
    effectType: {
        value: effectType[effect.type],
        type: 'string'
    },
    radius: {
        value: effect.radius,
        unit: 'pixel',
        type: 'number'
    }
});
const shadowValues = effect => ({
    effectType: {
        value: effectType[effect.type],
        type: 'string'
    },
    radius: {
        value: effect.radius,
        unit: 'pixel',
        type: 'number'
    },
    color: {
        value: (0,_utils_convertColor__WEBPACK_IMPORTED_MODULE_1__.roundRgba)(effect.color),
        type: 'color'
    },
    offset: {
        x: {
            value: effect.offset.x,
            unit: 'pixel',
            type: 'number'
        },
        y: {
            value: effect.offset.y,
            unit: 'pixel',
            type: 'number'
        }
    },
    spread: {
        value: effect.spread,
        unit: 'pixel',
        type: 'number'
    }
});
const extractEffects = (tokenNodes, prefixArray) => {
    // get effect styles
    return tokenNodes
        // remove tokens with no grid
        .filter(node => node.effects.length > 0)
        // build
        .map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'effect',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.effect.key,
        description: node.description || null,
        values: node.effects.map((effect) => effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR'
            ? blurValues(effect)
            : shadowValues(effect)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.effect.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEffects);


/***/ }),

/***/ "./src/extractor/extractFonts.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractFonts.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const textDecorations = {
    NONE: 'none',
    UNDERLINE: 'underline',
    STRIKETHROUGH: 'line-through'
};
const textCases = {
    ORIGINAL: 'none',
    UPPER: 'uppercase',
    LOWER: 'lowercase',
    TITLE: 'capitalize',
    SMALL_CAPS: 'small-caps'
};
const fontWeights = {
    100: 100,
    thin: 100,
    w1: 100,
    200: 200,
    w2: 200,
    extralight: 200,
    ultralight: 200,
    extraleicht: 200,
    300: 300,
    light: 300,
    leicht: 300,
    w3: 300,
    400: 400,
    normal: 400,
    regular: 400,
    buch: 400,
    w4: 400,
    500: 500,
    medium: 500,
    kraeftig: 500,
    kräftig: 500,
    w5: 500,
    600: 600,
    semibold: 600,
    demibold: 600,
    halbfett: 600,
    w6: 600,
    700: 700,
    bold: 700,
    dreiviertelfett: 700,
    w7: 700,
    800: 800,
    extrabold: 800,
    ultabold: 800,
    fett: 800,
    w8: 800,
    900: 900,
    black: 900,
    heavy: 900,
    super: 900,
    extrafett: 900,
    w9: 900
};
const fontStretch = {
    normal: 'normal',
    condensed: 'condensed',
    expanded: 'expanded',
    extended: 'expanded'
};
const fontStyles = {
    normal: 'normal',
    italic: 'italic',
    kursiv: 'italic',
    oblique: 'oblique'
};
const parseFontWeight = (fontStyle) => {
    const parts = fontStyle.toLowerCase().split(' ');
    let weight = parts[0];
    // merge if space after extra
    if (['extra', 'ultra', 'semi', 'demi'].includes(parts[0]) && ['bold', 'light'].includes(parts[1])) {
        weight = `${parts[0]}${parts[1]}`;
    }
    return fontWeights[weight] || 400;
};
const parseFontStretch = (fontStyle) => {
    const parts = fontStyle.toLowerCase().split(' ');
    return fontStretch[parts[parts.length - 1]] || fontStretch[parts[parts.length - 2]] || 'normal';
};
const parseFontStyle = (fontStyle) => {
    const part = fontStyle.toLowerCase().split(' ').pop();
    return fontStyles[part] || 'normal';
};
const extractFonts = (tokenNodes, prefixArray) => {
    // get raw text styles
    return tokenNodes.map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'font',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.font.key,
        description: node.description || undefined,
        values: {
            fontSize: {
                value: node.fontSize,
                unit: 'pixel',
                type: 'number'
            },
            textDecoration: {
                value: textDecorations[node.textDecoration],
                type: 'string'
            },
            fontFamily: {
                value: node.fontName.family,
                type: 'string'
            },
            fontWeight: {
                value: parseFontWeight(node.fontName.style),
                type: 'number'
            },
            fontStyle: {
                value: parseFontStyle(node.fontName.style),
                type: 'string'
            },
            fontStretch: {
                value: parseFontStretch(node.fontName.style),
                type: 'string'
            },
            _fontStyleOld: {
                value: node.fontName.style,
                type: 'string'
            },
            letterSpacing: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.letterSpacing.value),
                unit: (node.letterSpacing.unit.toLowerCase() === 'pixels' ? 'pixel' : node.letterSpacing.unit.toLowerCase()),
                type: 'number'
            },
            lineHeight: {
                // @ts-ignore
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.lineHeight.value) || 'normal',
                unit: node.lineHeight.unit.toLowerCase() === 'pixels' ? 'pixel' : node.lineHeight.unit.toLowerCase(),
                type: (Object.prototype.hasOwnProperty.call(node.lineHeight, 'value') ? 'number' : 'string')
            },
            paragraphIndent: {
                value: node.paragraphIndent,
                unit: 'pixel',
                type: 'number'
            },
            paragraphSpacing: {
                value: node.paragraphSpacing,
                unit: 'pixel',
                type: 'number'
            },
            textCase: {
                value: textCases[node.textCase] || 'none',
                type: 'string'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.font.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractFonts);


/***/ }),

/***/ "./src/extractor/extractGrids.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractGrids.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");


const gridValues = (grid) => ({
    pattern: {
        value: grid.pattern.toLowerCase(),
        type: 'string'
    },
    sectionSize: {
        value: grid.sectionSize,
        unit: 'pixel',
        type: 'number'
    }
});
const getCount = count => {
    if (count === Infinity) {
        return {
            value: 'auto',
            type: 'string'
        };
    }
    return {
        value: count,
        type: 'number'
    };
};
const rowColumnValues = (grid) => (Object.assign(Object.assign(Object.assign({ pattern: {
        value: grid.pattern.toLowerCase(),
        type: 'string'
    } }, (grid.sectionSize !== undefined && {
    sectionSize: {
        value: grid.sectionSize,
        unit: 'pixel',
        type: 'number'
    }
})), { gutterSize: {
        value: grid.gutterSize,
        unit: 'pixel',
        type: 'number'
    }, alignment: {
        value: grid.alignment.toLowerCase(),
        type: 'string'
    }, count: getCount(grid.count) }), (grid.offset !== undefined && {
    offset: {
        value: grid.offset,
        unit: 'pixel',
        type: 'number'
    }
})));
const extractGrids = (tokenNodes, prefixArray) => {
    // get grid styles
    return tokenNodes
        // remove tokens with no grid
        .filter(node => node.layoutGrids.length > 0)
        // build
        .map(node => ({
        name: `${prefixArray[0]}/${node.name}`,
        category: 'grid',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.grid.key,
        description: node.description || null,
        values: node.layoutGrids.map((grid) => grid.pattern === 'GRID' ? gridValues(grid) : rowColumnValues(grid)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.extensionPluginData]: {
                [_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.extensionFigmaStyleId]: node.id,
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.grid.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractGrids);


/***/ }),

/***/ "./src/extractor/extractMotion.ts":
/*!****************************************!*\
  !*** ./src/extractor/extractMotion.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__testing": () => (/* binding */ __testing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");



const direction = (transition) => {
    if (Object.prototype.hasOwnProperty.call(transition, 'direction')) {
        return {
            direction: {
                value: transition.direction.toLowerCase(),
                type: 'string'
            }
        };
    }
};
const easings = {
    CUSTOM_CUBIC_BEZIER: {
        type: 'custom-cubicBezier',
        curveType: 'cubicBezier',
        easing: undefined
    },
    CUSTOM_SPRING: {
        type: 'custom-spring',
        curveType: 'spring',
        easing: undefined
    },
    LINEAR: {
        type: 'linear',
        curveType: 'cubicBezier',
        easing: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        }
    },
    EASE_IN: {
        type: 'ease-in',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.41999998688697815,
            y1: 0,
            x2: 1,
            y2: 1
        }
    },
    EASE_OUT: {
        type: 'ease-out',
        curveType: 'cubicBezier',
        easing: {
            x1: 0,
            y1: 0,
            x2: 0.5799999833106995,
            y2: 1
        }
    },
    EASE_IN_AND_OUT: {
        type: 'ease-in-out',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.41999998688697815,
            y1: 0,
            x2: 0.5799999833106995,
            y2: 1
        }
    },
    EASE_IN_BACK: {
        type: 'ease-in-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.30000001192092896,
            y1: -0.05000000074505806,
            x2: 0.699999988079071,
            y2: -0.5
        }
    },
    EASE_OUT_BACK: {
        type: 'ease-out-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.44999998807907104,
            y1: 1.4500000476837158,
            x2: 0.800000011920929,
            y2: 1
        }
    },
    EASE_IN_AND_OUT_BACK: {
        type: 'ease-in-out-back',
        curveType: 'cubicBezier',
        easing: {
            x1: 0.699999988079071,
            y1: -0.4000000059604645,
            x2: 0.4000000059604645,
            y2: 1.399999976158142
        }
    },
    BOUNCY: {
        type: 'bouncy',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 600,
            damping: 15
        }
    },
    GENTLE: {
        type: 'gentle',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 100,
            damping: 15
        }
    },
    QUICK: {
        type: 'quick',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 300,
            damping: 20
        }
    },
    SLOW: {
        type: 'slow',
        curveType: 'spring',
        easing: {
            mass: 1,
            stiffness: 80,
            damping: 20
        }
    }
};
const formatEasingFunction = easingObject => {
    // spring curve
    if (easingObject.curveType === 'spring') {
        return {
            mass: {
                value: easingObject.easing.mass,
                type: 'number'
            },
            stiffness: {
                value: easingObject.easing.stiffness,
                type: 'number'
            },
            damping: {
                value: easingObject.easing.damping,
                type: 'number'
            }
        };
    }
    // spring bezier
    if (easingObject.curveType === 'cubicBezier') {
        return {
            x1: {
                // @ts-ignore
                value: easingObject.easing.x1,
                type: 'number'
            },
            x2: {
                // @ts-ignore
                value: easingObject.easing.x2,
                type: 'number'
            },
            y1: {
                // @ts-ignore
                value: easingObject.easing.y1,
                type: 'number'
            },
            y2: {
                // @ts-ignore
                value: easingObject.easing.y2,
                type: 'number'
            }
        };
    }
};
const easing = (easing) => {
    // abort if invalid easing type
    if (!('type' in easing) || easings[easing.type] === undefined) {
        return undefined;
    }
    // return custom easing
    if (easing.type === 'CUSTOM_CUBIC_BEZIER') {
        // @ts-ignore
        easings.CUSTOM_CUBIC_BEZIER.easing = {
            x1: easing.easingFunctionCubicBezier.x1,
            y1: easing.easingFunctionCubicBezier.y1,
            x2: easing.easingFunctionCubicBezier.x2,
            y2: easing.easingFunctionCubicBezier.y2
        };
    }
    // TODO: remove when figma typings are updated
    // @ts-ignore
    if (easing.type === 'CUSTOM_SPRING') {
        // @ts-ignore
        easings.CUSTOM_SPRING.easing = {
            // @ts-ignore
            mass: easing.easingFunctionSpring.mass,
            // @ts-ignore
            stiffness: easing.easingFunctionSpring.stiffness,
            // @ts-ignore
            damping: easing.easingFunctionSpring.damping
        };
    }
    return {
        easingType: {
            value: easings[easing.type].type,
            type: 'string'
        },
        easingCurveType: {
            value: easings[easing.type].curveType,
            type: 'string'
        },
        easingFunction: formatEasingFunction(easings[easing.type])
    };
};
const filterValidMotionTokens = (node) => {
    var _a;
    const validEasingTypes = Object.keys(easings);
    // @ts-ignore
    if (node.reactions.length > 0 && ((_a = node.reactions[0].action) === null || _a === void 0 ? void 0 : _a.type) === 'NODE' && node.reactions[0].action.transition !== null && validEasingTypes.includes(node.reactions[0].action.transition.easing.type)) {
        return true;
    }
    return false;
};
const extractMotion = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_1__.filterByPrefix)(prefixArray))
        // filter to only include items which have a transition property
        .filter(filterValidMotionTokens)
        // retrieve values
        .map((node) => ({
        name: node.name,
        category: 'motion',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.motion.key,
        description: node.description || null,
        values: Object.assign(Object.assign({ transitionType: {
                value: node.reactions[0].action.transition.type.toLocaleLowerCase(),
                type: 'string'
            }, duration: {
                value: Math.round((node.reactions[0].action.transition.duration + Number.EPSILON) * 1000) / 1000,
                unit: 's',
                type: 'number'
            } }, easing(node.reactions[0].action.transition.easing)), direction(node.reactions[0].action.transition)),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.motion.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractMotion);
const __testing = {
    easing: easing
};


/***/ }),

/***/ "./src/extractor/extractOpacities.ts":
/*!*******************************************!*\
  !*** ./src/extractor/extractOpacities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractOpacities = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'opacity',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.opacity.key,
        description: node.description || null,
        values: {
            opacity: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.opacity, 2),
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.opacity.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractOpacities);


/***/ }),

/***/ "./src/extractor/extractRadii.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractRadii.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractRadii = (tokenNodes, prefixArray) => {
    // get the type of the corner radius
    const getRadiusType = radius => {
        if (typeof radius === 'number') {
            return 'single';
        }
        return 'mixed';
    };
    // get the individual radii
    const getRadii = (node) => ({
        topLeft: {
            value: node.topLeftRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        topRight: {
            value: node.topRightRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        bottomRight: {
            value: node.bottomRightRadius || 0,
            unit: 'pixel',
            type: 'number'
        },
        bottomLeft: {
            value: node.bottomLeftRadius || 0,
            unit: 'pixel',
            type: 'number'
        }
    });
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        .map(node => ({
        name: node.name,
        category: 'radius',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.radius.key,
        description: node.description || null,
        values: Object.assign(Object.assign({}, (typeof node.cornerRadius === 'number' && {
            radius: {
                value: node.cornerRadius,
                unit: 'pixel',
                type: 'number'
            }
        })), { radiusType: {
                value: getRadiusType(node.cornerRadius),
                type: 'string'
            }, radii: getRadii(node), smoothing: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.cornerSmoothing, 2),
                comment: 'Percent as decimal from 0.0 - 1.0',
                type: 'number'
            } }),
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.radius.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractRadii);


/***/ }),

/***/ "./src/extractor/extractSizes.ts":
/*!***************************************!*\
  !*** ./src/extractor/extractSizes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractSizes = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray)).map(node => ({
        name: node.name,
        category: 'size',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.size.key,
        description: node.description || null,
        values: {
            width: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.width, 2),
                unit: 'pixel',
                type: 'number'
            },
            height: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.height, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.size.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractSizes);


/***/ }),

/***/ "./src/extractor/extractSpacing.ts":
/*!*****************************************!*\
  !*** ./src/extractor/extractSpacing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _extractUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractUtilities */ "./src/extractor/extractUtilities.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");




const extractSpacing = (tokenNodes, prefixArray) => {
    // return as object
    return tokenNodes.filter((0,_extractUtilities__WEBPACK_IMPORTED_MODULE_2__.filterByPrefix)(prefixArray))
        .map(node => ({
        name: node.name,
        category: 'spacing',
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.spacing.key,
        description: node.description || null,
        values: {
            top: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingTop, 2),
                unit: 'pixel',
                type: 'number'
            },
            right: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingRight, 2),
                unit: 'pixel',
                type: 'number'
            },
            bottom: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingBottom, 2),
                unit: 'pixel',
                type: 'number'
            },
            left: {
                value: (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_1__["default"])(node.paddingLeft, 2),
                unit: 'pixel',
                type: 'number'
            }
        },
        extensions: {
            [_config_config__WEBPACK_IMPORTED_MODULE_3__["default"].key.extensionPluginData]: {
                exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.spacing.key
            }
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractSpacing);


/***/ }),

/***/ "./src/extractor/extractUtilities.ts":
/*!*******************************************!*\
  !*** ./src/extractor/extractUtilities.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterByPrefix": () => (/* binding */ filterByPrefix)
/* harmony export */ });
const filterByPrefix = (prefixArray) => node => {
    // abort if wrong argument
    if (!Array.isArray(prefixArray))
        return;
    // extract prefix from node name
    const nodePrefix = node.name.substr(0, node.name.indexOf('/')).replace(/\s+/g, '');
    // abort if no prefix
    if (nodePrefix.length === 0)
        return;
    // return array
    return prefixArray.includes(nodePrefix);
};


/***/ }),

/***/ "./src/utilities/accessToken.ts":
/*!**************************************!*\
  !*** ./src/utilities/accessToken.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccessToken": () => (/* binding */ getAccessToken),
/* harmony export */   "setAccessToken": () => (/* binding */ setAccessToken)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @name getAccessToken
 * @description returns the access token for the current file or undefined
 * @param fileId {string} — ID of the current file
 */
const getAccessToken = (fileId) => __awaiter(void 0, void 0, void 0, function* () {
    // get all access tokens
    const accessTokens = yield figma.clientStorage.getAsync('accessTokens');
    // if access tokens object is present
    if (accessTokens !== undefined && accessTokens instanceof Object) {
        // retrieve the access token from the cache
        const accessToken = accessTokens[fileId];
        // return the access token or an empty string
        return accessToken || '';
    }
    // return empty string if no token is stored
    return '';
});
/**
 * @name setAccessToken
 * @description store the access token for the current given file in the user clientStorage
 * @param fileId {string} — ID of the current file
 * @param fileId {string} — access token
 */
/* istanbul ignore next */
const setAccessToken = (fileId, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    // get the access token object
    const accessTokens = (yield figma.clientStorage.getAsync('accessTokens')) || {};
    // merge tokens
    const mergedTokens = Object.assign(Object.assign({}, accessTokens), { [fileId]: accessToken });
    // merge the new token into the object
    return yield figma.clientStorage.setAsync('accessTokens', mergedTokens);
});



/***/ }),

/***/ "./src/utilities/buildFigmaData.ts":
/*!*****************************************!*\
  !*** ./src/utilities/buildFigmaData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/filterByNameProperty */ "./src/utilities/filterByNameProperty.ts");
/* harmony import */ var _utils_getPaintStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/getPaintStyles */ "./src/utilities/getPaintStyles.ts");
/* harmony import */ var _utils_getGridStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/getGridStyles */ "./src/utilities/getGridStyles.ts");
/* harmony import */ var _utils_getTokenNodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/getTokenNodes */ "./src/utilities/getTokenNodes.ts");
/* harmony import */ var _utils_getTextStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/getTextStyles */ "./src/utilities/getTextStyles.ts");
/* harmony import */ var _utils_getEffectStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/getEffectStyles */ "./src/utilities/getEffectStyles.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * @function buildFigmaData – return an object with all styles & frame to use for export
 * @param {PluginAPI} figma — the figma PluginAPI object
 * @param options – options object
 */
const buildFigmaData = (figma, settings) => __awaiter(void 0, void 0, void 0, function* () {
    // use spread operator because the original is readOnly
    const tokenFrames = yield (0,_utils_getTokenNodes__WEBPACK_IMPORTED_MODULE_3__["default"])([...figma.root.children]);
    // get user exclusion prefixes
    const userExclusionPrefixes = settings.exclusionPrefix
        .split(',')
        .map((item) => item.replace(/\s+/g, ''));
    // get data from figma
    return {
        tokenFrames: tokenFrames,
        paintStyles: (0,_utils_getPaintStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(yield figma.getLocalPaintStylesAsync()).filter((item) => (0,_utils_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        gridStyles: (0,_utils_getGridStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(yield figma.getLocalGridStylesAsync()).filter((item) => (0,_utils_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        textStyles: (0,_utils_getTextStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(yield figma.getLocalTextStylesAsync()).filter((item) => (0,_utils_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes)),
        effectStyles: (0,_utils_getEffectStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(yield figma.getLocalEffectStylesAsync()).filter((item) => (0,_utils_filterByNameProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(item, userExclusionPrefixes))
    };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFigmaData);


/***/ }),

/***/ "./src/utilities/changeNotation.ts":
/*!*****************************************!*\
  !*** ./src/utilities/changeNotation.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeNotation": () => (/* binding */ changeNotation)
/* harmony export */ });
const changeNotation = (name, currentDelimiter = '/', desiredDelimiter = '.') => {
    return name.split(currentDelimiter).join(desiredDelimiter).toLowerCase();
};


/***/ }),

/***/ "./src/utilities/convertColor.ts":
/*!***************************************!*\
  !*** ./src/utilities/convertColor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertPaintToRgba": () => (/* binding */ convertPaintToRgba),
/* harmony export */   "convertRgbaObjectToString": () => (/* binding */ convertRgbaObjectToString),
/* harmony export */   "rgbaObjectToHex8": () => (/* binding */ rgbaObjectToHex8),
/* harmony export */   "roundRgba": () => (/* binding */ roundRgba)
/* harmony export */ });
/* harmony import */ var _roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");


const roundRgba = (rgba, opacity) => {
    var _a;
    return ({
        r: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.r * 255, 0),
        g: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.g * 255, 0),
        b: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])(rgba.b * 255, 0),
        a: (0,_roundWithDecimals__WEBPACK_IMPORTED_MODULE_0__["default"])((_a = opacity !== null && opacity !== void 0 ? opacity : rgba.a) !== null && _a !== void 0 ? _a : 1)
    });
};
const convertPaintToRgba = (paint) => {
    if (paint.type === 'SOLID' && paint.visible === true) {
        return roundRgba(paint.color, paint.opacity);
    }
    return null;
};
const convertRgbaObjectToString = (rgbaObject) => `rgba(${rgbaObject.r}, ${rgbaObject.g}, ${rgbaObject.b}, ${rgbaObject.a})`;
const rgbaObjectToHex8 = (rgbaObject) => {
    // return value
    return (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__.tinycolor)(convertRgbaObjectToString(rgbaObject)).toHex8String();
};


/***/ }),

/***/ "./src/utilities/deepMerge.ts":
/*!************************************!*\
  !*** ./src/utilities/deepMerge.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
const deepMerge = (target, source) => {
    // function to test if a variable is an object
    const isObject = (obj) => obj && typeof obj === 'object';
    // make sure both the target and the source are objects
    // otherwise return source
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    // iterate over source
    Object.keys(source).forEach(key => {
        // get values from both target and source for the given key
        const targetValue = target[key];
        const sourceValue = source[key];
        // merge both values
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = [...new Set(targetValue.concat(sourceValue))];
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    // return merge object
    return target;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepMerge);


/***/ }),

/***/ "./src/utilities/extractTokenNodeValues.ts":
/*!*************************************************!*\
  !*** ./src/utilities/extractTokenNodeValues.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _convertColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertColor */ "./src/utilities/convertColor.ts");

/**
 * Return an array of solid stroke colors
 */
const getSolidStrokes = (paints) => {
    // clone without reference
    return [...paints]
        .map(paint => (0,_convertColor__WEBPACK_IMPORTED_MODULE_0__.convertPaintToRgba)(paint))
        .filter(paint => paint != null);
};
/**
 * extractTokenNodeValues
 * @param node: SceneNode
 * @returns node object
 */
const extractTokenNodeValues = (node) => {
    var _a;
    return ({
        name: node.name,
        // @ts-ignore
        description: node.description || undefined,
        bottomLeftRadius: node.bottomLeftRadius,
        bottomRightRadius: node.bottomRightRadius,
        topLeftRadius: node.topLeftRadius,
        topRightRadius: node.topRightRadius,
        cornerRadius: node.cornerRadius || undefined,
        cornerSmoothing: node.cornerSmoothing,
        strokes: getSolidStrokes(node.strokes),
        strokeWeight: node.strokeWeight,
        strokeStyleId: node.strokeStyleId,
        strokeMiterLimit: node.strokeMiterLimit,
        strokeJoin: node.strokeJoin,
        strokeCap: node.strokeCap,
        dashPattern: node.dashPattern,
        strokeAlign: node.strokeAlign,
        width: node.width,
        height: node.height,
        reactions: node.reactions || undefined,
        // @ts-ignore
        paddingTop: node.paddingTop || 0,
        // @ts-ignore
        paddingRight: node.paddingRight || 0,
        // @ts-ignore
        paddingBottom: node.paddingBottom || 0,
        // @ts-ignore
        paddingLeft: node.paddingLeft || 0,
        opacity: (_a = node.opacity) !== null && _a !== void 0 ? _a : 1
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractTokenNodeValues);


/***/ }),

/***/ "./src/utilities/filterByNameProperty.ts":
/*!***********************************************!*\
  !*** ./src/utilities/filterByNameProperty.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");

const exclusionPrefix = (exclusionPrefixStrings) => {
    return [
        ..._config_config__WEBPACK_IMPORTED_MODULE_0__["default"].exclusionPrefixDefault,
        ...exclusionPrefixStrings
    ];
};
const filterByPropertyName = (object, exclusionPrefixStrings) => !exclusionPrefix(exclusionPrefixStrings).includes(object.name.trim().substr(0, 1));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterByPropertyName);


/***/ }),

/***/ "./src/utilities/getEffectStyles.ts":
/*!******************************************!*\
  !*** ./src/utilities/getEffectStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getEffectStyles
 * @param {Array<EffectStyle>} styles – the effectStyle from the figma file
 */
const getEffectStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            effects: style.effects
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEffectStyles);


/***/ }),

/***/ "./src/utilities/getFileId.ts":
/*!************************************!*\
  !*** ./src/utilities/getFileId.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");

const getFileId = (figma) => {
    let fileId = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId);
    // set plugin id if it does not exist
    if (fileId === undefined || fileId === '') {
        figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId, figma.root.name + ' ' + Math.floor(Math.random() * 1000000000));
        // grab file ID
        fileId = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.fileId);
    }
    return fileId;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFileId);


/***/ }),

/***/ "./src/utilities/getGridStyles.ts":
/*!****************************************!*\
  !*** ./src/utilities/getGridStyles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getGridStyles
 * @param {Array} gridStyles – the gridStyles from the figma file
 */
const getGridStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            layoutGrids: style.layoutGrids
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGridStyles);


/***/ }),

/***/ "./src/utilities/getPaintStyles.ts":
/*!*****************************************!*\
  !*** ./src/utilities/getPaintStyles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getPaintStyles
 * @param {Array} paintStyles – the paintStyles from the figma file (somehow still connected)
 */
const getPaintStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            paints: style.paints
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaintStyles);


/***/ }),

/***/ "./src/utilities/getTextStyles.ts":
/*!****************************************!*\
  !*** ./src/utilities/getTextStyles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @function getTextStyles
 * @param {Array<TextStyle>} styles – the paintStyles from the figma file (somehow still connected)
 */
const getTextStyles = (styles) => {
    // init styleArray
    const styleArray = [];
    // loop through Figma styles and add to array
    styles.forEach(style => {
        styleArray.push({
            name: style.name,
            id: style.id,
            description: style.description,
            fontSize: style.fontSize,
            textDecoration: style.textDecoration,
            fontName: style.fontName,
            letterSpacing: style.letterSpacing,
            lineHeight: style.lineHeight,
            paragraphIndent: style.paragraphIndent,
            paragraphSpacing: style.paragraphSpacing,
            textCase: style.textCase
        });
    });
    // return array
    return styleArray;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTextStyles);


/***/ }),

/***/ "./src/utilities/getTokenJson.ts":
/*!***************************************!*\
  !*** ./src/utilities/getTokenJson.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportRawTokenArray": () => (/* binding */ exportRawTokenArray)
/* harmony export */ });
/* harmony import */ var _extractor_extractColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extractor/extractColors */ "./src/extractor/extractColors.ts");
/* harmony import */ var _extractor_extractGrids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extractor/extractGrids */ "./src/extractor/extractGrids.ts");
/* harmony import */ var _extractor_extractFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extractor/extractFonts */ "./src/extractor/extractFonts.ts");
/* harmony import */ var _extractor_extractEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../extractor/extractEffects */ "./src/extractor/extractEffects.ts");
/* harmony import */ var _extractor_extractMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../extractor/extractMotion */ "./src/extractor/extractMotion.ts");
/* harmony import */ var _extractor_extractSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../extractor/extractSizes */ "./src/extractor/extractSizes.ts");
/* harmony import */ var _extractor_extractSpacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extractor/extractSpacing */ "./src/extractor/extractSpacing.ts");
/* harmony import */ var _extractor_extractBorders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../extractor/extractBorders */ "./src/extractor/extractBorders.ts");
/* harmony import */ var _extractor_extractRadii__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../extractor/extractRadii */ "./src/extractor/extractRadii.ts");
/* harmony import */ var _extractor_extractBreakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../extractor/extractBreakpoints */ "./src/extractor/extractBreakpoints.ts");
/* harmony import */ var _extractor_extractOpacities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../extractor/extractOpacities */ "./src/extractor/extractOpacities.ts");
/* harmony import */ var _buildFigmaData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buildFigmaData */ "./src/utilities/buildFigmaData.ts");
/* harmony import */ var _getVariables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getVariables */ "./src/utilities/getVariables.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













const getPrefixArray = (prefixString = '') => prefixString.split(',').map(item => item.replace(/\s+/g, ''));
const exportRawTokenArray = (figma, settings) => __awaiter(void 0, void 0, void 0, function* () {
    const figmaData = yield (0,_buildFigmaData__WEBPACK_IMPORTED_MODULE_11__["default"])(figma, settings);
    // get tokens
    return [
        ...(0,_extractor_extractSizes__WEBPACK_IMPORTED_MODULE_5__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.size)),
        ...(0,_extractor_extractBreakpoints__WEBPACK_IMPORTED_MODULE_9__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.breakpoint)),
        ...(0,_extractor_extractSpacing__WEBPACK_IMPORTED_MODULE_6__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.spacing)),
        ...(0,_extractor_extractBorders__WEBPACK_IMPORTED_MODULE_7__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.border)),
        ...(0,_extractor_extractRadii__WEBPACK_IMPORTED_MODULE_8__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.radius)),
        ...(0,_extractor_extractMotion__WEBPACK_IMPORTED_MODULE_4__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.motion)),
        ...(0,_extractor_extractOpacities__WEBPACK_IMPORTED_MODULE_10__["default"])(figmaData.tokenFrames, getPrefixArray(settings.prefix.opacity)),
        ...(0,_extractor_extractColors__WEBPACK_IMPORTED_MODULE_0__["default"])(figmaData.paintStyles, { color: getPrefixArray(settings.prefix.color), gradient: getPrefixArray(settings.prefix.gradient), alias: getPrefixArray(settings.alias) }),
        ...(0,_extractor_extractGrids__WEBPACK_IMPORTED_MODULE_1__["default"])(figmaData.gridStyles, getPrefixArray(settings.prefix.grid)),
        ...(0,_extractor_extractFonts__WEBPACK_IMPORTED_MODULE_2__["default"])(figmaData.textStyles, getPrefixArray(settings.prefix.font)),
        ...(0,_extractor_extractEffects__WEBPACK_IMPORTED_MODULE_3__["default"])(figmaData.effectStyles, getPrefixArray(settings.prefix.effect)),
        ...(yield (0,_getVariables__WEBPACK_IMPORTED_MODULE_12__.getVariables)(figma, settings))
    ];
});


/***/ }),

/***/ "./src/utilities/getTokenNodes.ts":
/*!****************************************!*\
  !*** ./src/utilities/getTokenNodes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__testing": () => (/* binding */ __testing),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/extractTokenNodeValues */ "./src/utilities/extractTokenNodeValues.ts");
/* harmony import */ var _utils_isTokenNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/isTokenNode */ "./src/utilities/isTokenNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// the name that token frames have
const tokenFrameName = '_tokens';
// check if a frame is a _token frame
const isTokenFrame = (node) => node.type === 'FRAME' && node.name.trim().toLowerCase().substr(0, tokenFrameName.length) === tokenFrameName;
// return only nodes that are frames
const getFrameNodes = (nodes) => [...nodes.map(page => page.findChildren(node => isTokenFrame(node))).reduce((flatten, arr) => [...flatten, ...arr])];
/**
 * getVariantName
 * creates the variant name of the parent and child name
 */
const getVariantName = (parentName, childName) => {
    // split into array
    childName = childName.split(',')
        // remove hidden names
        .filter(part => !['_', '.'].includes(part.trim().substr(0, 1)))
        // cleanup names, only return value part
        .map(part => part.split('=')[1])
        // combine
        .join('/');
    // return full name
    return `${parentName}/${childName}`;
};
/**
 * Returns all frames from the file that have a name that starts with _tokens or the user defined token specifier
 *
 * @param pages PageNodes
 */
const getTokenNodes = (pages) => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadAllPagesAsync();
    // get token frames
    const tokenFrames = getFrameNodes(pages);
    // get all children of token frames
    return tokenFrames.map(frame => frame
        // check if children are of valid types
        .findAll(
    /* istanbul ignore next */
    node => (0,_utils_isTokenNode__WEBPACK_IMPORTED_MODULE_1__["default"])(node)))
        // merges all children into one array
        .reduce((flatten, arr) => [...flatten, ...arr], [])
        // unpack variants & warn about deprecated types
        .map((item) => {
        if (item.type === 'RECTANGLE' || item.type === 'FRAME') {
            console.warn('Please use only main components and variants, other types may be deprecated as tokens in the future');
        }
        // unpack variants
        if (item.type === 'COMPONENT_SET') {
            // TODO: Name is overwriting real object in figma
            // -> create clone and move to new array to return
            return item.children.map((child) => (Object.assign(Object.assign({}, (0,_utils_extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__["default"])(child)), { name: getVariantName(item.name, child.name) })));
        }
        // return normal item as array to unpack later
        // @ts-ignore
        return [(0,_utils_extractTokenNodeValues__WEBPACK_IMPORTED_MODULE_0__["default"])(item)];
    })
        // merges the variant children into one array
        .reduce((flatten, arr) => [...flatten, ...arr], []);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTokenNodes);
const __testing = {
    isTokenNode: _utils_isTokenNode__WEBPACK_IMPORTED_MODULE_1__["default"],
    isTokenFrame: isTokenFrame
};


/***/ }),

/***/ "./src/utilities/getVariableTypeByValue.ts":
/*!*************************************************!*\
  !*** ./src/utilities/getVariableTypeByValue.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariableTypeByValue": () => (/* binding */ getVariableTypeByValue)
/* harmony export */ });
const getVariableTypeByValue = (value) => {
    if (typeof value === 'boolean')
        return 'string';
    if (typeof value === 'number')
        return 'dimension';
    if (typeof value === 'object')
        return 'color';
    if (typeof value === 'string')
        return 'string';
};


/***/ }),

/***/ "./src/utilities/getVariables.ts":
/*!***************************************!*\
  !*** ./src/utilities/getVariables.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariables": () => (/* binding */ getVariables)
/* harmony export */ });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_convertColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/convertColor */ "./src/utilities/convertColor.ts");
/* harmony import */ var _utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/roundWithDecimals */ "./src/utilities/roundWithDecimals.ts");
/* harmony import */ var _utils_handleVariableAlias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/handleVariableAlias */ "./src/utilities/handleVariableAlias.ts");
/* harmony import */ var _utils_processAliasModes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/processAliasModes */ "./src/utilities/processAliasModes.ts");
/* harmony import */ var _utils_deepMerge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/deepMerge */ "./src/utilities/deepMerge.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const extractVariable = (variable, value, // eslint-disable-line @typescript-eslint/no-explicit-any
mode) => __awaiter(void 0, void 0, void 0, function* () {
    let category = 'color';
    let values = {};
    if (value.type === 'VARIABLE_ALIAS') {
        return yield (0,_utils_handleVariableAlias__WEBPACK_IMPORTED_MODULE_4__["default"])(variable, value, mode);
    }
    switch (variable.resolvedType) {
        case 'COLOR':
            category = 'color';
            values = {
                fill: {
                    value: (0,_utils_convertColor__WEBPACK_IMPORTED_MODULE_2__.roundRgba)(value),
                    type: 'color',
                    blendMode: 'normal'
                }
            };
            break;
        case 'FLOAT':
            category = 'dimension';
            values = (0,_utils_roundWithDecimals__WEBPACK_IMPORTED_MODULE_3__["default"])(value, 2);
            break;
        case 'STRING':
            category = 'string';
            values = value;
            break;
        case 'BOOLEAN':
            category = 'boolean';
            values = value;
            break;
    }
    return {
        name: variable.name,
        description: variable.description || undefined,
        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.variables.key,
        category,
        values
    };
});
const detectVariableReferencesInCollection = (collection, variable) => {
    var _a;
    let tmpVariable = {};
    if (variable) {
        (_a = collection === null || collection === void 0 ? void 0 : collection.modes) === null || _a === void 0 ? void 0 : _a.forEach((mode) => {
            var _a;
            const modeValue = variable.valuesByMode[mode.modeId];
            // Loop through other variables in the same collection to check for references
            (_a = collection.variableIds) === null || _a === void 0 ? void 0 : _a.forEach((otherVariableId) => __awaiter(void 0, void 0, void 0, function* () {
                const otherVariable = yield figma.variables.getVariableByIdAsync(otherVariableId);
                if (otherVariable &&
                    modeValue &&
                    typeof modeValue === 'object' &&
                    variable.name !== otherVariable.name && // Avoid self-reference
                    modeValue.id === otherVariable.id) {
                    const aliasSameMode = true;
                    tmpVariable = (0,_utils_handleVariableAlias__WEBPACK_IMPORTED_MODULE_4__["default"])(variable, modeValue, mode, aliasSameMode);
                }
            }));
        });
    }
    return (0,_utils_deepMerge__WEBPACK_IMPORTED_MODULE_6__["default"])(variable, tmpVariable);
};
const getVariables = (figma, settings) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const localVariableCollections = yield figma.variables.getLocalVariableCollectionsAsync();
    const localVariables = yield figma.variables.getLocalVariablesAsync();
    const excludedCollectionIds = localVariableCollections === null || localVariableCollections === void 0 ? void 0 : localVariableCollections.filter((collection) => !['.', '_', ...settings.exclusionPrefix.split(',')].includes(collection.name.charAt(0))).map((collection) => collection.id);
    // get collections
    const collections = localVariableCollections
        ? Object.fromEntries(localVariableCollections === null || localVariableCollections === void 0 ? void 0 : localVariableCollections.map((collection) => [collection.id, collection]))
        : [];
    // get variables
    const variables = yield Promise.all(((_a = localVariables === null || localVariables === void 0 ? void 0 : localVariables.filter((variable) => excludedCollectionIds.includes(variable.variableCollectionId))) === null || _a === void 0 ? void 0 : _a.map((variable) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        // get collection name and modes
        const { variableCollectionId } = variable;
        const { name: collection, modes } = collections[variableCollectionId];
        if (settings.resolveSameCollectionOrModeReference) {
            variable = detectVariableReferencesInCollection(collections[variableCollectionId], variable);
        }
        // return each mode value as a separate variable
        return yield Promise.all((_b = Object.entries(variable.valuesByMode)) === null || _b === void 0 ? void 0 : _b.map(([id, value]) => __awaiter(void 0, void 0, void 0, function* () {
            // Only add mode if there's more than one
            // and if modeInTokenName is set to true
            const addModeInTokenName = settings.modeInTokenName && modes.length > 1;
            const mode = modes.find(({ modeId }) => modeId === id);
            if (!mode) {
                console.warn(`cannot find mode with id ${id} for variable ${variable.name}`);
            }
            const variableName = `${collection}/${variable.name}`;
            const variableNameWithMode = mode ? `${collection}/${mode === null || mode === void 0 ? void 0 : mode.name}/${variable === null || variable === void 0 ? void 0 : variable.name}` : variableName;
            const extractedVariable = yield extractVariable(variable, value, mode);
            return Object.assign(Object.assign({}, extractedVariable), { 
                // name is constructed from collection, mode and variable name
                name: mode && addModeInTokenName ? variableNameWithMode : variableName, 
                // add metadata to extensions
                extensions: {
                    [_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.extensionPluginData]: {
                        mode: mode && addModeInTokenName ? mode.name : undefined,
                        modeId: mode && addModeInTokenName ? mode.modeId : undefined,
                        collection: collection,
                        scopes: variable.scopes,
                        [_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].key.extensionVariableStyleId]: variable.id,
                        exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_1__.tokenTypes.variables.key
                    }
                } });
        })));
    }))) || []);
    // add the mode name to the variable values value in order
    // to be able to reference to it correctly:
    // values: collection.value becomes collection.[mode name].value
    //
    // `variablesWithAliasInTheSameCollection` is not used when `settings.modeInTokenValue`
    // is set to `true` to avoid values in the form of: collection.[mode name].[mode name].value
    const variablesWithAliasInTheSameCollection = () => variables
        .flat()
        // @ts-ignore
        .map((v) => ((v === null || v === void 0 ? void 0 : v.aliasSameMode) ? (0,_utils_processAliasModes__WEBPACK_IMPORTED_MODULE_5__["default"])([v]) : v))
        .flat();
    return settings.modeInTokenValue
        ? (0,_utils_processAliasModes__WEBPACK_IMPORTED_MODULE_5__["default"])(variables.flat())
        : variablesWithAliasInTheSameCollection();
});


/***/ }),

/***/ "./src/utilities/getVersionDifference.ts":
/*!***********************************************!*\
  !*** ./src/utilities/getVersionDifference.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _semVerDifference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./semVerDifference */ "./src/utilities/semVerDifference.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "./src/utilities/version.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getVersionDifference = (figma) => __awaiter(void 0, void 0, void 0, function* () {
    // get version & version difference
    const lastVersionSettingsOpened = yield figma.clientStorage.getAsync(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.lastVersionSettingsOpened);
    const versionDifference = (0,_semVerDifference__WEBPACK_IMPORTED_MODULE_0__["default"])(_version__WEBPACK_IMPORTED_MODULE_1__["default"], lastVersionSettingsOpened);
    // update version
    if (!lastVersionSettingsOpened || lastVersionSettingsOpened !== _version__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        yield figma.clientStorage.setAsync(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].key.lastVersionSettingsOpened, _version__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
    // return version Difference
    return versionDifference;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getVersionDifference);


/***/ }),

/***/ "./src/utilities/handleVariableAlias.ts":
/*!**********************************************!*\
  !*** ./src/utilities/handleVariableAlias.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/tokenTypes */ "./src/config/tokenTypes.ts");
/* harmony import */ var _utils_getVariableTypeByValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/getVariableTypeByValue */ "./src/utilities/getVariableTypeByValue.ts");
/* harmony import */ var _utils_changeNotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/changeNotation */ "./src/utilities/changeNotation.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function handleVariableAlias(variable, value, mode, aliasSameMode = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolvedAlias = yield figma.variables.getVariableByIdAsync(value.id);
        const collection = yield figma.variables.getVariableCollectionByIdAsync(resolvedAlias.variableCollectionId);
        return {
            description: variable.description || '',
            exportKey: _config_tokenTypes__WEBPACK_IMPORTED_MODULE_0__.tokenTypes.variables.key,
            category: (0,_utils_getVariableTypeByValue__WEBPACK_IMPORTED_MODULE_1__.getVariableTypeByValue)(Object.values(resolvedAlias.valuesByMode)[0]),
            values: `{${collection.name.toLowerCase()}.${(0,_utils_changeNotation__WEBPACK_IMPORTED_MODULE_2__.changeNotation)(resolvedAlias.name, '/', '.')}}`,
            // this is being stored so we can properly update the design tokens later to account for all
            // modes when using aliases
            aliasCollectionName: collection.name.toLowerCase(),
            aliasMode: mode,
            aliasSameMode: variable.aliasSameMode || aliasSameMode
        };
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleVariableAlias);


/***/ }),

/***/ "./src/utilities/isTokenNode.ts":
/*!**************************************!*\
  !*** ./src/utilities/isTokenNode.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// the node types that can be used for tokens
const tokenNodeTypes = [
    'COMPONENT',
    'COMPONENT_SET',
    'RECTANGLE',
    'FRAME'
];
/**
 * check if a node is a valid token node type
 * Currently: 'COMPONENT', 'FRAME or 'RECTANGLE'
 * @param SceneNode node
 */
const isTokenNode = (node) => {
    return node.parent.type !== 'COMPONENT_SET' && tokenNodeTypes.includes(node.type) && node.name.length > 0;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTokenNode);


/***/ }),

/***/ "./src/utilities/processAliasModes.ts":
/*!********************************************!*\
  !*** ./src/utilities/processAliasModes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const processAliasModes = (variables) => {
    return variables.reduce((collector, variable) => {
        // only one mode will be passed in if any
        if (!variable.aliasMode) {
            collector.push(variable);
            return collector;
        }
        // alias mode singular because only one is shown
        const { aliasMode, aliasCollectionName } = variable;
        collector.push(Object.assign(Object.assign({}, variable), { values: variable.values.replace(`{${aliasCollectionName}.`, `{${aliasCollectionName}.${aliasMode.name.toLowerCase()}.`) }));
        return collector;
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processAliasModes);


/***/ }),

/***/ "./src/utilities/roundWithDecimals.ts":
/*!********************************************!*\
  !*** ./src/utilities/roundWithDecimals.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If the provided value is a number
 * it is rounded to 3 decimal positions
 * otherwise it is returned as is
 * @param value number
 * @param decimalPlaces int
 */
const roundWithDecimals = (value, decimalPlaces = 2) => {
    // exit if value is undefined
    if (value === undefined) {
        return;
    }
    // check for correct inputs
    if (typeof value !== 'number' || typeof decimalPlaces !== 'number') {
        throw new Error(`Invalid parameters, both value "${value}" (${typeof value}) and decimalPlaces "${decimalPlaces}" (${typeof decimalPlaces}) must be of type number`);
    }
    // set decimal places
    const factorOfTen = Math.pow(10, decimalPlaces);
    // round result and return
    return Math.round(value * factorOfTen) / factorOfTen;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roundWithDecimals);


/***/ }),

/***/ "./src/utilities/semVerDifference.ts":
/*!*******************************************!*\
  !*** ./src/utilities/semVerDifference.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((currentSemVer, prevSemVers = '1.0.0') => {
    const [pMajor, pMinor, pPatch] = prevSemVers.split('.');
    const [cMajor, cMinor, cPatch] = currentSemVer.split('.');
    if (pMajor < cMajor) {
        return 'major';
    }
    if (pMinor < cMinor) {
        return 'minor';
    }
    if (pPatch < cPatch) {
        return 'patch';
    }
});


/***/ }),

/***/ "./src/utilities/settings.ts":
/*!***********************************!*\
  !*** ./src/utilities/settings.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettings": () => (/* binding */ getSettings),
/* harmony export */   "resetSettings": () => (/* binding */ resetSettings),
/* harmony export */   "setSettings": () => (/* binding */ setSettings)
/* harmony export */ });
/* harmony import */ var _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/defaultSettings */ "./src/config/defaultSettings.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _stringifyJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringifyJson */ "./src/utilities/stringifyJson.ts");



const fixMissing = (defaults, current) => Object.fromEntries(Object.entries(defaults).map(([key, value]) => {
    if (value !== undefined && typeof current[key] !== typeof value) {
        return [key, defaults[key]];
    }
    return [key, current[key]];
}));
/**
 * get the current users settings
 * for settings that are not set, the defaults will be used
 * @return object
 */
const getSettings = () => {
    let storedSettings = figma.root.getPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings);
    // return defaults if no settings are present
    if (storedSettings === '') {
        return _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings;
    }
    // parse stored settings
    storedSettings = JSON.parse(storedSettings);
    // fix issues on first level
    const fixedSettings = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings, storedSettings);
    fixedSettings.prefix = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings.prefix, fixedSettings.prefix);
    fixedSettings.exports = fixMissing(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings.exports, fixedSettings.exports);
    // return settings
    return fixedSettings;
};
/**
 * @name saveSettings
 * @description save the user settings to the "cache"
 * @param {UserSettings} settings
 */
const setSettings = (settings) => {
    settings = Object.assign(Object.assign({}, _config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings), settings);
    // store public settings that should be shared across org
    figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings, (0,_stringifyJson__WEBPACK_IMPORTED_MODULE_2__.stringifyJson)(settings));
};
/**
 * @name resetSettings
 * @description resetSettings the user settings to the "cache"
 */
const resetSettings = () => figma.root.setPluginData(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].key.settings, (0,_stringifyJson__WEBPACK_IMPORTED_MODULE_2__.stringifyJson)(_config_defaultSettings__WEBPACK_IMPORTED_MODULE_0__.defaultSettings));
// exports



/***/ }),

/***/ "./src/utilities/stringifyJson.ts":
/*!****************************************!*\
  !*** ./src/utilities/stringifyJson.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyJson": () => (/* binding */ stringifyJson)
/* harmony export */ });
const stringifyJson = (object, compression = true) => {
    if (compression === true) {
        return JSON.stringify(object);
    }
    // return uncompressed json
    return JSON.stringify(object, null, 2);
};


/***/ }),

/***/ "./src/utilities/version.ts":
/*!**********************************!*\
  !*** ./src/utilities/version.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* istanbul ignore file */
const version = '6.11.3';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/settings */ "./src/utilities/settings.ts");
/* harmony import */ var _utils_accessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/accessToken */ "./src/utilities/accessToken.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/config */ "./src/config/config.ts");
/* harmony import */ var _config_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/commands */ "./src/config/commands.ts");
/* harmony import */ var _utils_getVersionDifference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/getVersionDifference */ "./src/utilities/getVersionDifference.ts");
/* harmony import */ var _utils_getFileId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/getFileId */ "./src/utilities/getFileId.ts");
/* harmony import */ var _utils_getTokenJson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/getTokenJson */ "./src/utilities/getTokenJson.ts");
/* harmony import */ var _utils_stringifyJson__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/stringifyJson */ "./src/utilities/stringifyJson.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// initiate UI
figma.showUI(__html__, {
    themeColors: true,
    visible: false
});
// ---------------------------------
// open UI
if ([_config_commands__WEBPACK_IMPORTED_MODULE_3__.commands["export"], _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.urlExport, _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.generalSettings].includes(figma.command)) {
    // wrap in function because of async client Storage
    const openUi = () => __awaiter(void 0, void 0, void 0, function* () {
        // Get the user settings
        const userSettings = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_0__.getSettings)();
        // get the current version differences to the last time the plugin was opened
        const versionDifference = yield (0,_utils_getVersionDifference__WEBPACK_IMPORTED_MODULE_4__["default"])(figma);
        // resize UI if needed
        figma.ui.resize(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].width, _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].height);
        if (versionDifference !== undefined && versionDifference !== 'patch') {
            figma.ui.resize(_config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].width, _config_config__WEBPACK_IMPORTED_MODULE_2__["default"].ui[figma.command].height + 60);
        }
        const postMessageObject = {
            command: figma.command,
            payload: {
                settings: Object.assign(Object.assign({}, userSettings), { accessToken: yield (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_1__.getAccessToken)((0,_utils_getFileId__WEBPACK_IMPORTED_MODULE_5__["default"])(figma)) }),
                data: null,
                versionDifference: versionDifference,
                metadata: {
                    filename: figma.root.name
                }
            }
        };
        if ([_config_commands__WEBPACK_IMPORTED_MODULE_3__.commands["export"], _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.urlExport].includes(figma.command)) {
            postMessageObject.payload.data = (0,_utils_stringifyJson__WEBPACK_IMPORTED_MODULE_7__.stringifyJson)(yield (0,_utils_getTokenJson__WEBPACK_IMPORTED_MODULE_6__.exportRawTokenArray)(figma, userSettings));
        }
        figma.ui.postMessage(Object.assign({}, postMessageObject));
        // register the settings UI
        figma.ui.show();
    });
    // run function
    openUi();
}
/**
 * Open Help
 * Open github help page
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.help) {
    figma.ui.postMessage({
        command: _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.help,
        payload: {
            url: 'https://github.com/lukasoppermann/design-tokens'
        }
    });
}
/**
 * Open demo
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.demo) {
    figma.ui.postMessage({
        command: _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.demo,
        payload: {
            url: 'https://www.figma.com/file/2MQ759R5kJtzQn4qSHuqR7/Design-Tokens-for-Figma?node-id=231%3A2'
        }
    });
}
/**
 * Reset settings
 */
if (figma.command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.reset) {
    (0,_utils_settings__WEBPACK_IMPORTED_MODULE_0__.resetSettings)();
    // send message
    figma.notify('⚙️ Settings have been reset.');
    figma.closePlugin();
}
/**
 * React to messages
 */
figma.ui.onmessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const { command, payload } = message;
    /**
     * on closePlugin
     * close plugin and show notification if available
     */
    if (command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.closePlugin) {
        // show notification if send
        if ((payload === null || payload === void 0 ? void 0 : payload.notification) !== undefined && (payload === null || payload === void 0 ? void 0 : payload.notification) !== '') {
            figma.notify(payload.notification);
        }
        // close plugin
        figma.ui.hide();
        figma.closePlugin();
    }
    /**
     * on saveSettings
     * save settings, access token and close plugin
     */
    if (command === _config_commands__WEBPACK_IMPORTED_MODULE_3__.commands.saveSettings) {
        // store settings
        (0,_utils_settings__WEBPACK_IMPORTED_MODULE_0__.setSettings)(payload.settings);
        // accessToken
        yield (0,_utils_accessToken__WEBPACK_IMPORTED_MODULE_1__.setAccessToken)((0,_utils_getFileId__WEBPACK_IMPORTED_MODULE_5__["default"])(figma), payload.accessToken);
        // close plugin
        if (payload.closePlugin && payload.closePlugin === true) {
            figma.closePlugin();
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFVBQVU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRSw0QkFBNEIsd0NBQXdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdDQUF3QyxrREFBa0Q7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCO0FBQ087QUFDUCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUR5RDtBQUNUO0FBQ0k7QUFDaEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlFQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxRUFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHVCQUF1QixvRUFBaUI7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYSw4RUFBOEI7QUFDM0MsMkJBQTJCLHFFQUFxQjtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVrQjtBQUNTO0FBQ0w7QUFDaEI7QUFDcEM7QUFDQTtBQUNBLDZCQUE2QixpRUFBYztBQUMzQztBQUNBO0FBQ0EsbUJBQW1CLHlFQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0VBQWlCO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx1QkFBdUIsb0VBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGFBQWEsOEVBQThCO0FBQzNDLDJCQUEyQix5RUFBeUI7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJjO0FBQ29CO0FBQ1g7QUFDckI7QUFDcEM7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsQ0FBQyx5RUFBeUIsVUFBVSxPQUFPO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDJCQUEyQixvRUFBaUI7QUFDNUM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyQkFBMkIsOERBQVM7QUFDcEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHVCQUF1QixvRUFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0VBQWdFLEdBQUcsVUFBVTtBQUN0RztBQUNBLDZDQUE2Qyx1RUFBdUIsR0FBRyxvRUFBb0I7QUFDM0Y7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhFQUE4QixtQkFBbUIsQ0FBQyxnRkFBZ0MseUNBQXlDLHVFQUF1QixHQUFHLG9FQUFvQixHQUFHO0FBQ2pNO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhtQjtBQUNBO0FBQ1o7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsOERBQVM7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZSxHQUFHLFVBQVU7QUFDN0M7QUFDQSxtQkFBbUIscUVBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhFQUE4QjtBQUMzQyxpQkFBaUIsZ0ZBQWdDO0FBQ2pELDJCQUEyQixxRUFBcUI7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVrQjtBQUNTO0FBQ3JCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsRUFBRSxTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZSxHQUFHLFVBQVU7QUFDN0M7QUFDQSxtQkFBbUIsbUVBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHVCQUF1QixvRUFBaUI7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLG9FQUFpQjtBQUN4QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYSw4RUFBOEI7QUFDM0MsaUJBQWlCLGdGQUFnQztBQUNqRCwyQkFBMkIsbUVBQW1CO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0pvQjtBQUNaO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsTUFBTTtBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlLEdBQUcsVUFBVTtBQUM3QztBQUNBLG1CQUFtQixtRUFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4RUFBOEI7QUFDM0MsaUJBQWlCLGdGQUFnQztBQUNqRCwyQkFBMkIsbUVBQW1CO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRW9CO0FBQ0k7QUFDaEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpRUFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFB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QUN4QztBQUNBLHdDQUF3Qyx1RUFBb0I7QUFDNUQ7QUFDQSx3QkFBd0IseURBQVMsdUJBQXVCLHlEQUFTO0FBQ2pFO0FBQ0EsNEJBQTRCLHlEQUFTLHVCQUF1Qix5REFBUztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxtQkFBbUIsbUJBQW1CLGtFQUFjLENBQUMsNERBQVMsVUFBVTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0VBQWUsRUFBRSxnRUFBa0I7QUFDaEQsNkNBQTZDLG1FQUFhLE9BQU8sd0VBQW1CO0FBQ3BGO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQWE7QUFDbkM7QUFDQSxpQkFBaUIsMkRBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFhO0FBQ25DO0FBQ0EsaUJBQWlCLDJEQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBYztBQUNwQyxJQUFJLDhEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrRUFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFxQjtBQUN6QztBQUNBLFFBQVEsNERBQVc7QUFDbkI7QUFDQSxjQUFjLGtFQUFjLENBQUMsNERBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vbm9kZV9tb2R1bGVzL0BjdHJsL3Rpbnljb2xvci9kaXN0L21vZHVsZS9jb252ZXJzaW9uLmpzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9ub2RlX21vZHVsZXMvQGN0cmwvdGlueWNvbG9yL2Rpc3QvbW9kdWxlL2Nzcy1jb2xvci1uYW1lcy5qcyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vbm9kZV9tb2R1bGVzL0BjdHJsL3Rpbnljb2xvci9kaXN0L21vZHVsZS9mb3JtYXQtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL25vZGVfbW9kdWxlcy9AY3RybC90aW55Y29sb3IvZGlzdC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL25vZGVfbW9kdWxlcy9AY3RybC90aW55Y29sb3IvZGlzdC9tb2R1bGUvdXRpbC5qcyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2NvbmZpZy9jb21tYW5kcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9jb25maWcvZGVmYXVsdFNldHRpbmdzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvY29uZmlnL3Rva2VuVHlwZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEJvcmRlcnMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEJyZWFrcG9pbnRzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RDb2xvcnMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEVmZmVjdHMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdEZvbnRzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RHcmlkcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0TW90aW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RPcGFjaXRpZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy9leHRyYWN0b3IvZXh0cmFjdFJhZGlpLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvZXh0cmFjdG9yL2V4dHJhY3RTaXplcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0U3BhY2luZy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2V4dHJhY3Rvci9leHRyYWN0VXRpbGl0aWVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2FjY2Vzc1Rva2VuLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2J1aWxkRmlnbWFEYXRhLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2NoYW5nZU5vdGF0aW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2NvbnZlcnRDb2xvci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9kZWVwTWVyZ2UudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZXh0cmFjdFRva2VuTm9kZVZhbHVlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9maWx0ZXJCeU5hbWVQcm9wZXJ0eS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRFZmZlY3RTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0RmlsZUlkLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldEdyaWRTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0UGFpbnRTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0VGV4dFN0eWxlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRUb2tlbkpzb24udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvZ2V0VG9rZW5Ob2Rlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRWYXJpYWJsZVR5cGVCeVZhbHVlLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2dldFZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9nZXRWZXJzaW9uRGlmZmVyZW5jZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy9oYW5kbGVWYXJpYWJsZUFsaWFzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL2lzVG9rZW5Ob2RlLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL3Byb2Nlc3NBbGlhc01vZGVzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL3JvdW5kV2l0aERlY2ltYWxzLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvLi9zcmMvdXRpbGl0aWVzL3NlbVZlckRpZmZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy8uL3NyYy91dGlsaXRpZXMvc3RyaW5naWZ5SnNvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL3V0aWxpdGllcy92ZXJzaW9uLnRzIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXRva2Vucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbi10b2tlbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tdG9rZW5zLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvdW5kMDEsIHBhZDIgfSBmcm9tICcuL3V0aWwnO1xuLy8gYHJnYlRvSHNsYCwgYHJnYlRvSHN2YCwgYGhzbFRvUmdiYCwgYGhzdlRvUmdiYCBtb2RpZmllZCBmcm9tOlxuLy8gPGh0dHA6Ly9tamlqYWNrc29uLmNvbS8yMDA4LzAyL3JnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY29udmVyc2lvbi1hbGdvcml0aG1zLWluLWphdmFzY3JpcHQ+XG4vKipcbiAqIEhhbmRsZSBib3VuZHMgLyBwZXJjZW50YWdlIGNoZWNraW5nIHRvIGNvbmZvcm0gdG8gQ1NTIGNvbG9yIHNwZWNcbiAqIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLz5cbiAqICpBc3N1bWVzOiogciwgZywgYiBpbiBbMCwgMjU1XSBvciBbMCwgMV1cbiAqICpSZXR1cm5zOiogeyByLCBnLCBiIH0gaW4gWzAsIDI1NV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvUmdiKHIsIGcsIGIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByOiBib3VuZDAxKHIsIDI1NSkgKiAyNTUsXG4gICAgICAgIGc6IGJvdW5kMDEoZywgMjU1KSAqIDI1NSxcbiAgICAgICAgYjogYm91bmQwMShiLCAyNTUpICogMjU1LFxuICAgIH07XG59XG4vKipcbiAqIENvbnZlcnRzIGFuIFJHQiBjb2xvciB2YWx1ZSB0byBIU0wuXG4gKiAqQXNzdW1lczoqIHIsIGcsIGFuZCBiIGFyZSBjb250YWluZWQgaW4gWzAsIDI1NV0gb3IgWzAsIDFdXG4gKiAqUmV0dXJuczoqIHsgaCwgcywgbCB9IGluIFswLDFdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hzbChyLCBnLCBiKSB7XG4gICAgciA9IGJvdW5kMDEociwgMjU1KTtcbiAgICBnID0gYm91bmQwMShnLCAyNTUpO1xuICAgIGIgPSBib3VuZDAxKGIsIDI1NSk7XG4gICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICB2YXIgaCA9IDA7XG4gICAgdmFyIHMgPSAwO1xuICAgIHZhciBsID0gKG1heCArIG1pbikgLyAyO1xuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgICBzID0gMDtcbiAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgIH1cbiAgICByZXR1cm4geyBoOiBoLCBzOiBzLCBsOiBsIH07XG59XG5mdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHtcbiAgICAgICAgdCArPSAxO1xuICAgIH1cbiAgICBpZiAodCA+IDEpIHtcbiAgICAgICAgdCAtPSAxO1xuICAgIH1cbiAgICBpZiAodCA8IDEgLyA2KSB7XG4gICAgICAgIHJldHVybiBwICsgKHEgLSBwKSAqICg2ICogdCk7XG4gICAgfVxuICAgIGlmICh0IDwgMSAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgfVxuICAgIGlmICh0IDwgMiAvIDMpIHtcbiAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICAgIH1cbiAgICByZXR1cm4gcDtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gSFNMIGNvbG9yIHZhbHVlIHRvIFJHQi5cbiAqXG4gKiAqQXNzdW1lczoqIGggaXMgY29udGFpbmVkIGluIFswLCAxXSBvciBbMCwgMzYwXSBhbmQgcyBhbmQgbCBhcmUgY29udGFpbmVkIFswLCAxXSBvciBbMCwgMTAwXVxuICogKlJldHVybnM6KiB7IHIsIGcsIGIgfSBpbiB0aGUgc2V0IFswLCAyNTVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1JnYihoLCBzLCBsKSB7XG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG4gICAgaCA9IGJvdW5kMDEoaCwgMzYwKTtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIGwgPSBib3VuZDAxKGwsIDEwMCk7XG4gICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgLy8gYWNocm9tYXRpY1xuICAgICAgICBnID0gbDtcbiAgICAgICAgYiA9IGw7XG4gICAgICAgIHIgPSBsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gICAgfVxuICAgIHJldHVybiB7IHI6IHIgKiAyNTUsIGc6IGcgKiAyNTUsIGI6IGIgKiAyNTUgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gUkdCIGNvbG9yIHZhbHVlIHRvIEhTVlxuICpcbiAqICpBc3N1bWVzOiogciwgZywgYW5kIGIgYXJlIGNvbnRhaW5lZCBpbiB0aGUgc2V0IFswLCAyNTVdIG9yIFswLCAxXVxuICogKlJldHVybnM6KiB7IGgsIHMsIHYgfSBpbiBbMCwxXVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9Ic3YociwgZywgYikge1xuICAgIHIgPSBib3VuZDAxKHIsIDI1NSk7XG4gICAgZyA9IGJvdW5kMDEoZywgMjU1KTtcbiAgICBiID0gYm91bmQwMShiLCAyNTUpO1xuICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgdmFyIGggPSAwO1xuICAgIHZhciB2ID0gbWF4O1xuICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgIHZhciBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXg7XG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGggLz0gNjtcbiAgICB9XG4gICAgcmV0dXJuIHsgaDogaCwgczogcywgdjogdiB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBIU1YgY29sb3IgdmFsdWUgdG8gUkdCLlxuICpcbiAqICpBc3N1bWVzOiogaCBpcyBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAzNjBdIGFuZCBzIGFuZCB2IGFyZSBjb250YWluZWQgaW4gWzAsIDFdIG9yIFswLCAxMDBdXG4gKiAqUmV0dXJuczoqIHsgciwgZywgYiB9IGluIHRoZSBzZXQgWzAsIDI1NV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcbiAgICBoID0gYm91bmQwMShoLCAzNjApICogNjtcbiAgICBzID0gYm91bmQwMShzLCAxMDApO1xuICAgIHYgPSBib3VuZDAxKHYsIDEwMCk7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKGgpO1xuICAgIHZhciBmID0gaCAtIGk7XG4gICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKTtcbiAgICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKTtcbiAgICB2YXIgbW9kID0gaSAlIDY7XG4gICAgdmFyIHIgPSBbdiwgcSwgcCwgcCwgdCwgdl1bbW9kXTtcbiAgICB2YXIgZyA9IFt0LCB2LCB2LCBxLCBwLCBwXVttb2RdO1xuICAgIHZhciBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF07XG4gICAgcmV0dXJuIHsgcjogciAqIDI1NSwgZzogZyAqIDI1NSwgYjogYiAqIDI1NSB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBSR0IgY29sb3IgdG8gaGV4XG4gKlxuICogQXNzdW1lcyByLCBnLCBhbmQgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV1cbiAqIFJldHVybnMgYSAzIG9yIDYgY2hhcmFjdGVyIGhleFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYiwgYWxsb3czQ2hhcikge1xuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKGIpLnRvU3RyaW5nKDE2KSksXG4gICAgXTtcbiAgICAvLyBSZXR1cm4gYSAzIGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3czQ2hhciAmJlxuICAgICAgICBoZXhbMF0uc3RhcnRzV2l0aChoZXhbMF0uY2hhckF0KDEpKSAmJlxuICAgICAgICBoZXhbMV0uc3RhcnRzV2l0aChoZXhbMV0uY2hhckF0KDEpKSAmJlxuICAgICAgICBoZXhbMl0uc3RhcnRzV2l0aChoZXhbMl0uY2hhckF0KDEpKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApO1xuICAgIH1cbiAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBSR0JBIGNvbG9yIHBsdXMgYWxwaGEgdHJhbnNwYXJlbmN5IHRvIGhleFxuICpcbiAqIEFzc3VtZXMgciwgZywgYiBhcmUgY29udGFpbmVkIGluIHRoZSBzZXQgWzAsIDI1NV0gYW5kXG4gKiBhIGluIFswLCAxXS4gUmV0dXJucyBhIDQgb3IgOCBjaGFyYWN0ZXIgcmdiYSBoZXhcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBmdW5jdGlvbiByZ2JhVG9IZXgociwgZywgYiwgYSwgYWxsb3c0Q2hhcikge1xuICAgIHZhciBoZXggPSBbXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChyKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQoZykudG9TdHJpbmcoMTYpKSxcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKGIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoY29udmVydERlY2ltYWxUb0hleChhKSksXG4gICAgXTtcbiAgICAvLyBSZXR1cm4gYSA0IGNoYXJhY3RlciBoZXggaWYgcG9zc2libGVcbiAgICBpZiAoYWxsb3c0Q2hhciAmJlxuICAgICAgICBoZXhbMF0uc3RhcnRzV2l0aChoZXhbMF0uY2hhckF0KDEpKSAmJlxuICAgICAgICBoZXhbMV0uc3RhcnRzV2l0aChoZXhbMV0uY2hhckF0KDEpKSAmJlxuICAgICAgICBoZXhbMl0uc3RhcnRzV2l0aChoZXhbMl0uY2hhckF0KDEpKSAmJlxuICAgICAgICBoZXhbM10uc3RhcnRzV2l0aChoZXhbM10uY2hhckF0KDEpKSkge1xuICAgICAgICByZXR1cm4gaGV4WzBdLmNoYXJBdCgwKSArIGhleFsxXS5jaGFyQXQoMCkgKyBoZXhbMl0uY2hhckF0KDApICsgaGV4WzNdLmNoYXJBdCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gUkdCQSBjb2xvciB0byBhbiBBUkdCIEhleDggc3RyaW5nXG4gKiBSYXJlbHkgdXNlZCwgYnV0IHJlcXVpcmVkIGZvciBcInRvRmlsdGVyKClcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmdiYVRvQXJnYkhleChyLCBnLCBiLCBhKSB7XG4gICAgdmFyIGhleCA9IFtcbiAgICAgICAgcGFkMihjb252ZXJ0RGVjaW1hbFRvSGV4KGEpKSxcbiAgICAgICAgcGFkMihNYXRoLnJvdW5kKHIpLnRvU3RyaW5nKDE2KSksXG4gICAgICAgIHBhZDIoTWF0aC5yb3VuZChnKS50b1N0cmluZygxNikpLFxuICAgICAgICBwYWQyKE1hdGgucm91bmQoYikudG9TdHJpbmcoMTYpKSxcbiAgICBdO1xuICAgIHJldHVybiBoZXguam9pbignJyk7XG59XG4vKiogQ29udmVydHMgYSBkZWNpbWFsIHRvIGEgaGV4IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERlY2ltYWxUb0hleChkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocGFyc2VGbG9hdChkKSAqIDI1NSkudG9TdHJpbmcoMTYpO1xufVxuLyoqIENvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgZGVjaW1hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRIZXhUb0RlY2ltYWwoaCkge1xuICAgIHJldHVybiBwYXJzZUludEZyb21IZXgoaCkgLyAyNTU7XG59XG4vKiogUGFyc2UgYSBiYXNlLTE2IGhleCB2YWx1ZSBpbnRvIGEgYmFzZS0xMCBpbnRlZ2VyICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRGcm9tSGV4KHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDE2KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJJbnB1dFRvT2JqZWN0KGNvbG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcjogY29sb3IgPj4gMTYsXG4gICAgICAgIGc6IChjb2xvciAmIDB4ZmYwMCkgPj4gOCxcbiAgICAgICAgYjogY29sb3IgJiAweGZmLFxuICAgIH07XG59XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmFoYW1hczEwL2Nzcy1jb2xvci1uYW1lcy9ibG9iL21hc3Rlci9jc3MtY29sb3ItbmFtZXMuanNvblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCB2YXIgbmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgYW50aXF1ZXdoaXRlOiAnI2ZhZWJkNycsXG4gICAgYXF1YTogJyMwMGZmZmYnLFxuICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICBhenVyZTogJyNmMGZmZmYnLFxuICAgIGJlaWdlOiAnI2Y1ZjVkYycsXG4gICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICBibGFuY2hlZGFsbW9uZDogJyNmZmViY2QnLFxuICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICBibHVldmlvbGV0OiAnIzhhMmJlMicsXG4gICAgYnJvd246ICcjYTUyYTJhJyxcbiAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICBjYWRldGJsdWU6ICcjNWY5ZWEwJyxcbiAgICBjaGFydHJldXNlOiAnIzdmZmYwMCcsXG4gICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgY29yYWw6ICcjZmY3ZjUwJyxcbiAgICBjb3JuZmxvd2VyYmx1ZTogJyM2NDk1ZWQnLFxuICAgIGNvcm5zaWxrOiAnI2ZmZjhkYycsXG4gICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgIGN5YW46ICcjMDBmZmZmJyxcbiAgICBkYXJrYmx1ZTogJyMwMDAwOGInLFxuICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgZGFya2dvbGRlbnJvZDogJyNiODg2MGInLFxuICAgIGRhcmtncmF5OiAnI2E5YTlhOScsXG4gICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgZGFya2dyZXk6ICcjYTlhOWE5JyxcbiAgICBkYXJra2hha2k6ICcjYmRiNzZiJyxcbiAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiAnIzU1NmIyZicsXG4gICAgZGFya29yYW5nZTogJyNmZjhjMDAnLFxuICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICBkYXJrcmVkOiAnIzhiMDAwMCcsXG4gICAgZGFya3NhbG1vbjogJyNlOTk2N2EnLFxuICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgIGRhcmtzbGF0ZWJsdWU6ICcjNDgzZDhiJyxcbiAgICBkYXJrc2xhdGVncmF5OiAnIzJmNGY0ZicsXG4gICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgIGRhcmt0dXJxdW9pc2U6ICcjMDBjZWQxJyxcbiAgICBkYXJrdmlvbGV0OiAnIzk0MDBkMycsXG4gICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICBkZWVwc2t5Ymx1ZTogJyMwMGJmZmYnLFxuICAgIGRpbWdyYXk6ICcjNjk2OTY5JyxcbiAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgZG9kZ2VyYmx1ZTogJyMxZTkwZmYnLFxuICAgIGZpcmVicmljazogJyNiMjIyMjInLFxuICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgZm9yZXN0Z3JlZW46ICcjMjI4YjIyJyxcbiAgICBmdWNoc2lhOiAnI2ZmMDBmZicsXG4gICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgZ2hvc3R3aGl0ZTogJyNmOGY4ZmYnLFxuICAgIGdvbGRlbnJvZDogJyNkYWE1MjAnLFxuICAgIGdvbGQ6ICcjZmZkNzAwJyxcbiAgICBncmF5OiAnIzgwODA4MCcsXG4gICAgZ3JlZW46ICcjMDA4MDAwJyxcbiAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgIGdyZXk6ICcjODA4MDgwJyxcbiAgICBob25leWRldzogJyNmMGZmZjAnLFxuICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICBpbmRpYW5yZWQ6ICcjY2Q1YzVjJyxcbiAgICBpbmRpZ286ICcjNGIwMDgyJyxcbiAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgIGtoYWtpOiAnI2YwZTY4YycsXG4gICAgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLFxuICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsXG4gICAgbGlnaHRibHVlOiAnI2FkZDhlNicsXG4gICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLFxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnI2ZhZmFkMicsXG4gICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgbGlnaHRncmVlbjogJyM5MGVlOTAnLFxuICAgIGxpZ2h0Z3JleTogJyNkM2QzZDMnLFxuICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsXG4gICAgbGlnaHRzZWFncmVlbjogJyMyMGIyYWEnLFxuICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gICAgbGlnaHRzbGF0ZWdyZXk6ICcjNzc4ODk5JyxcbiAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsXG4gICAgbGltZTogJyMwMGZmMDAnLFxuICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgIGxpbmVuOiAnI2ZhZjBlNicsXG4gICAgbWFnZW50YTogJyNmZjAwZmYnLFxuICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJyxcbiAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsXG4gICAgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsXG4gICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJyxcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLFxuICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLFxuICAgIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgIG1pc3R5cm9zZTogJyNmZmU0ZTEnLFxuICAgIG1vY2Nhc2luOiAnI2ZmZTRiNScsXG4gICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICBuYXZ5OiAnIzAwMDA4MCcsXG4gICAgb2xkbGFjZTogJyNmZGY1ZTYnLFxuICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgb2xpdmVkcmFiOiAnIzZiOGUyMycsXG4gICAgb3JhbmdlOiAnI2ZmYTUwMCcsXG4gICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgb3JjaGlkOiAnI2RhNzBkNicsXG4gICAgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLFxuICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJyxcbiAgICBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsXG4gICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgIHBlYWNocHVmZjogJyNmZmRhYjknLFxuICAgIHBlcnU6ICcjY2Q4NTNmJyxcbiAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgcGx1bTogJyNkZGEwZGQnLFxuICAgIHBvd2RlcmJsdWU6ICcjYjBlMGU2JyxcbiAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICByZWJlY2NhcHVycGxlOiAnIzY2MzM5OScsXG4gICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgcm9zeWJyb3duOiAnI2JjOGY4ZicsXG4gICAgcm95YWxibHVlOiAnIzQxNjllMScsXG4gICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICBzYWxtb246ICcjZmE4MDcyJyxcbiAgICBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsXG4gICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICBzZWFzaGVsbDogJyNmZmY1ZWUnLFxuICAgIHNpZW5uYTogJyNhMDUyMmQnLFxuICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgIHNreWJsdWU6ICcjODdjZWViJyxcbiAgICBzbGF0ZWJsdWU6ICcjNmE1YWNkJyxcbiAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgICBzbm93OiAnI2ZmZmFmYScsXG4gICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICBzdGVlbGJsdWU6ICcjNDY4MmI0JyxcbiAgICB0YW46ICcjZDJiNDhjJyxcbiAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgdGhpc3RsZTogJyNkOGJmZDgnLFxuICAgIHRvbWF0bzogJyNmZjYzNDcnLFxuICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgIHZpb2xldDogJyNlZTgyZWUnLFxuICAgIHdoZWF0OiAnI2Y1ZGViMycsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsXG4gICAgeWVsbG93OiAnI2ZmZmYwMCcsXG4gICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJyxcbn07XG4iLCJpbXBvcnQgeyBjb252ZXJ0SGV4VG9EZWNpbWFsLCBoc2xUb1JnYiwgaHN2VG9SZ2IsIHBhcnNlSW50RnJvbUhleCwgcmdiVG9SZ2IgfSBmcm9tICcuL2NvbnZlcnNpb24nO1xuaW1wb3J0IHsgbmFtZXMgfSBmcm9tICcuL2Nzcy1jb2xvci1uYW1lcyc7XG5pbXBvcnQgeyBib3VuZEFscGhhLCBjb252ZXJ0VG9QZXJjZW50YWdlIH0gZnJvbSAnLi91dGlsJztcbi8qKlxuICogR2l2ZW4gYSBzdHJpbmcgb3Igb2JqZWN0LCBjb252ZXJ0IHRoYXQgaW5wdXQgdG8gUkdCXG4gKlxuICogUG9zc2libGUgc3RyaW5nIGlucHV0czpcbiAqIGBgYFxuICogXCJyZWRcIlxuICogXCIjZjAwXCIgb3IgXCJmMDBcIlxuICogXCIjZmYwMDAwXCIgb3IgXCJmZjAwMDBcIlxuICogXCIjZmYwMDAwMDBcIiBvciBcImZmMDAwMDAwXCJcbiAqIFwicmdiIDI1NSAwIDBcIiBvciBcInJnYiAoMjU1LCAwLCAwKVwiXG4gKiBcInJnYiAxLjAgMCAwXCIgb3IgXCJyZ2IgKDEsIDAsIDApXCJcbiAqIFwicmdiYSAoMjU1LCAwLCAwLCAxKVwiIG9yIFwicmdiYSAyNTUsIDAsIDAsIDFcIlxuICogXCJyZ2JhICgxLjAsIDAsIDAsIDEpXCIgb3IgXCJyZ2JhIDEuMCwgMCwgMCwgMVwiXG4gKiBcImhzbCgwLCAxMDAlLCA1MCUpXCIgb3IgXCJoc2wgMCAxMDAlIDUwJVwiXG4gKiBcImhzbGEoMCwgMTAwJSwgNTAlLCAxKVwiIG9yIFwiaHNsYSAwIDEwMCUgNTAlLCAxXCJcbiAqIFwiaHN2KDAsIDEwMCUsIDEwMCUpXCIgb3IgXCJoc3YgMCAxMDAlIDEwMCVcIlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnB1dFRvUkdCKGNvbG9yKSB7XG4gICAgdmFyIHJnYiA9IHsgcjogMCwgZzogMCwgYjogMCB9O1xuICAgIHZhciBhID0gMTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIHYgPSBudWxsO1xuICAgIHZhciBsID0gbnVsbDtcbiAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICB2YXIgZm9ybWF0ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29sb3IgPSBzdHJpbmdJbnB1dFRvT2JqZWN0KGNvbG9yKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRDU1NVbml0KGNvbG9yLnIpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmcpICYmIGlzVmFsaWRDU1NVbml0KGNvbG9yLmIpKSB7XG4gICAgICAgICAgICByZ2IgPSByZ2JUb1JnYihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9IFN0cmluZyhjb2xvci5yKS5zdWJzdHIoLTEpID09PSAnJScgPyAncHJnYicgOiAncmdiJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZhbGlkQ1NTVW5pdChjb2xvci5oKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci5zKSAmJiBpc1ZhbGlkQ1NTVW5pdChjb2xvci52KSkge1xuICAgICAgICAgICAgcyA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3Iucyk7XG4gICAgICAgICAgICB2ID0gY29udmVydFRvUGVyY2VudGFnZShjb2xvci52KTtcbiAgICAgICAgICAgIHJnYiA9IGhzdlRvUmdiKGNvbG9yLmgsIHMsIHYpO1xuICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgZm9ybWF0ID0gJ2hzdic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZENTU1VuaXQoY29sb3IuaCkgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IucykgJiYgaXNWYWxpZENTU1VuaXQoY29sb3IubCkpIHtcbiAgICAgICAgICAgIHMgPSBjb252ZXJ0VG9QZXJjZW50YWdlKGNvbG9yLnMpO1xuICAgICAgICAgICAgbCA9IGNvbnZlcnRUb1BlcmNlbnRhZ2UoY29sb3IubCk7XG4gICAgICAgICAgICByZ2IgPSBoc2xUb1JnYihjb2xvci5oLCBzLCBsKTtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvcm1hdCA9ICdoc2wnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29sb3IsICdhJykpIHtcbiAgICAgICAgICAgIGEgPSBjb2xvci5hO1xuICAgICAgICB9XG4gICAgfVxuICAgIGEgPSBib3VuZEFscGhhKGEpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9rOiBvayxcbiAgICAgICAgZm9ybWF0OiBjb2xvci5mb3JtYXQgfHwgZm9ybWF0LFxuICAgICAgICByOiBNYXRoLm1pbigyNTUsIE1hdGgubWF4KHJnYi5yLCAwKSksXG4gICAgICAgIGc6IE1hdGgubWluKDI1NSwgTWF0aC5tYXgocmdiLmcsIDApKSxcbiAgICAgICAgYjogTWF0aC5taW4oMjU1LCBNYXRoLm1heChyZ2IuYiwgMCkpLFxuICAgICAgICBhOiBhLFxuICAgIH07XG59XG4vLyA8aHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy12YWx1ZXMvI2ludGVnZXJzPlxudmFyIENTU19JTlRFR0VSID0gJ1stXFxcXCtdP1xcXFxkKyU/Jztcbi8vIDxodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXZhbHVlcy8jbnVtYmVyLXZhbHVlPlxudmFyIENTU19OVU1CRVIgPSAnWy1cXFxcK10/XFxcXGQqXFxcXC5cXFxcZCslPyc7XG4vLyBBbGxvdyBwb3NpdGl2ZS9uZWdhdGl2ZSBpbnRlZ2VyL251bWJlci4gIERvbid0IGNhcHR1cmUgdGhlIGVpdGhlci9vciwganVzdCB0aGUgZW50aXJlIG91dGNvbWUuXG52YXIgQ1NTX1VOSVQgPSBcIig/OlwiLmNvbmNhdChDU1NfTlVNQkVSLCBcIil8KD86XCIpLmNvbmNhdChDU1NfSU5URUdFUiwgXCIpXCIpO1xuLy8gQWN0dWFsIG1hdGNoaW5nLlxuLy8gUGFyZW50aGVzZXMgYW5kIGNvbW1hcyBhcmUgb3B0aW9uYWwsIGJ1dCBub3QgcmVxdWlyZWQuXG4vLyBXaGl0ZXNwYWNlIGNhbiB0YWtlIHRoZSBwbGFjZSBvZiBjb21tYXMgb3Igb3BlbmluZyBwYXJlblxudmFyIFBFUk1JU1NJVkVfTUFUQ0gzID0gXCJbXFxcXHN8XFxcXChdKyhcIi5jb25jYXQoQ1NTX1VOSVQsIFwiKVssfFxcXFxzXSsoXCIpLmNvbmNhdChDU1NfVU5JVCwgXCIpWyx8XFxcXHNdKyhcIikuY29uY2F0KENTU19VTklULCBcIilcXFxccypcXFxcKT9cIik7XG52YXIgUEVSTUlTU0lWRV9NQVRDSDQgPSBcIltcXFxcc3xcXFxcKF0rKFwiLmNvbmNhdChDU1NfVU5JVCwgXCIpWyx8XFxcXHNdKyhcIikuY29uY2F0KENTU19VTklULCBcIilbLHxcXFxcc10rKFwiKS5jb25jYXQoQ1NTX1VOSVQsIFwiKVssfFxcXFxzXSsoXCIpLmNvbmNhdChDU1NfVU5JVCwgXCIpXFxcXHMqXFxcXCk/XCIpO1xudmFyIG1hdGNoZXJzID0ge1xuICAgIENTU19VTklUOiBuZXcgUmVnRXhwKENTU19VTklUKSxcbiAgICByZ2I6IG5ldyBSZWdFeHAoJ3JnYicgKyBQRVJNSVNTSVZFX01BVENIMyksXG4gICAgcmdiYTogbmV3IFJlZ0V4cCgncmdiYScgKyBQRVJNSVNTSVZFX01BVENINCksXG4gICAgaHNsOiBuZXcgUmVnRXhwKCdoc2wnICsgUEVSTUlTU0lWRV9NQVRDSDMpLFxuICAgIGhzbGE6IG5ldyBSZWdFeHAoJ2hzbGEnICsgUEVSTUlTU0lWRV9NQVRDSDQpLFxuICAgIGhzdjogbmV3IFJlZ0V4cCgnaHN2JyArIFBFUk1JU1NJVkVfTUFUQ0gzKSxcbiAgICBoc3ZhOiBuZXcgUmVnRXhwKCdoc3ZhJyArIFBFUk1JU1NJVkVfTUFUQ0g0KSxcbiAgICBoZXgzOiAvXiM/KFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgaGV4NjogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgIGhleDQ6IC9eIz8oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgaGV4ODogL14jPyhbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxcbn07XG4vKipcbiAqIFBlcm1pc3NpdmUgc3RyaW5nIHBhcnNpbmcuICBUYWtlIGluIGEgbnVtYmVyIG9mIGZvcm1hdHMsIGFuZCBvdXRwdXQgYW4gb2JqZWN0XG4gKiBiYXNlZCBvbiBkZXRlY3RlZCBmb3JtYXQuICBSZXR1cm5zIGB7IHIsIGcsIGIgfWAgb3IgYHsgaCwgcywgbCB9YCBvciBgeyBoLCBzLCB2fWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0lucHV0VG9PYmplY3QoY29sb3IpIHtcbiAgICBjb2xvciA9IGNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjb2xvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgbmFtZWQgPSBmYWxzZTtcbiAgICBpZiAobmFtZXNbY29sb3JdKSB7XG4gICAgICAgIGNvbG9yID0gbmFtZXNbY29sb3JdO1xuICAgICAgICBuYW1lZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgIHJldHVybiB7IHI6IDAsIGc6IDAsIGI6IDAsIGE6IDAsIGZvcm1hdDogJ25hbWUnIH07XG4gICAgfVxuICAgIC8vIFRyeSB0byBtYXRjaCBzdHJpbmcgaW5wdXQgdXNpbmcgcmVndWxhciBleHByZXNzaW9ucy5cbiAgICAvLyBLZWVwIG1vc3Qgb2YgdGhlIG51bWJlciBib3VuZGluZyBvdXQgb2YgdGhpcyBmdW5jdGlvbiAtIGRvbid0IHdvcnJ5IGFib3V0IFswLDFdIG9yIFswLDEwMF0gb3IgWzAsMzYwXVxuICAgIC8vIEp1c3QgcmV0dXJuIGFuIG9iamVjdCBhbmQgbGV0IHRoZSBjb252ZXJzaW9uIGZ1bmN0aW9ucyBoYW5kbGUgdGhhdC5cbiAgICAvLyBUaGlzIHdheSB0aGUgcmVzdWx0IHdpbGwgYmUgdGhlIHNhbWUgd2hldGhlciB0aGUgdGlueWNvbG9yIGlzIGluaXRpYWxpemVkIHdpdGggc3RyaW5nIG9yIG9iamVjdC5cbiAgICB2YXIgbWF0Y2ggPSBtYXRjaGVycy5yZ2IuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IHI6IG1hdGNoWzFdLCBnOiBtYXRjaFsyXSwgYjogbWF0Y2hbM10gfTtcbiAgICB9XG4gICAgbWF0Y2ggPSBtYXRjaGVycy5yZ2JhLmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4geyByOiBtYXRjaFsxXSwgZzogbWF0Y2hbMl0sIGI6IG1hdGNoWzNdLCBhOiBtYXRjaFs0XSB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLmhzbC5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCBsOiBtYXRjaFszXSB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLmhzbGEuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7IGg6IG1hdGNoWzFdLCBzOiBtYXRjaFsyXSwgbDogbWF0Y2hbM10sIGE6IG1hdGNoWzRdIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaHN2LmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4geyBoOiBtYXRjaFsxXSwgczogbWF0Y2hbMl0sIHY6IG1hdGNoWzNdIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaHN2YS5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHsgaDogbWF0Y2hbMV0sIHM6IG1hdGNoWzJdLCB2OiBtYXRjaFszXSwgYTogbWF0Y2hbNF0gfTtcbiAgICB9XG4gICAgbWF0Y2ggPSBtYXRjaGVycy5oZXg4LmV4ZWMoY29sb3IpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10pLFxuICAgICAgICAgICAgYTogY29udmVydEhleFRvRGVjaW1hbChtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gJ25hbWUnIDogJ2hleDgnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLmhleDYuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0pLFxuICAgICAgICAgICAgZzogcGFyc2VJbnRGcm9tSGV4KG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gJ25hbWUnIDogJ2hleCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIG1hdGNoID0gbWF0Y2hlcnMuaGV4NC5leGVjKGNvbG9yKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50RnJvbUhleChtYXRjaFsxXSArIG1hdGNoWzFdKSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50RnJvbUhleChtYXRjaFsyXSArIG1hdGNoWzJdKSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50RnJvbUhleChtYXRjaFszXSArIG1hdGNoWzNdKSxcbiAgICAgICAgICAgIGE6IGNvbnZlcnRIZXhUb0RlY2ltYWwobWF0Y2hbNF0gKyBtYXRjaFs0XSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gJ25hbWUnIDogJ2hleDgnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBtYXRjaCA9IG1hdGNoZXJzLmhleDMuZXhlYyhjb2xvcik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMV0gKyBtYXRjaFsxXSksXG4gICAgICAgICAgICBnOiBwYXJzZUludEZyb21IZXgobWF0Y2hbMl0gKyBtYXRjaFsyXSksXG4gICAgICAgICAgICBiOiBwYXJzZUludEZyb21IZXgobWF0Y2hbM10gKyBtYXRjaFszXSksXG4gICAgICAgICAgICBmb3JtYXQ6IG5hbWVkID8gJ25hbWUnIDogJ2hleCcsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIGl0IGxvb2tzIGxpa2UgYSBDU1MgdW5pdFxuICogKHNlZSBgbWF0Y2hlcnNgIGFib3ZlIGZvciBkZWZpbml0aW9uKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRDU1NVbml0KGNvbG9yKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obWF0Y2hlcnMuQ1NTX1VOSVQuZXhlYyhTdHJpbmcoY29sb3IpKSk7XG59XG4iLCJpbXBvcnQgeyBudW1iZXJJbnB1dFRvT2JqZWN0LCByZ2JhVG9IZXgsIHJnYlRvSGV4LCByZ2JUb0hzbCwgcmdiVG9Ic3YgfSBmcm9tICcuL2NvbnZlcnNpb24nO1xuaW1wb3J0IHsgbmFtZXMgfSBmcm9tICcuL2Nzcy1jb2xvci1uYW1lcyc7XG5pbXBvcnQgeyBpbnB1dFRvUkdCIH0gZnJvbSAnLi9mb3JtYXQtaW5wdXQnO1xuaW1wb3J0IHsgYm91bmQwMSwgYm91bmRBbHBoYSwgY2xhbXAwMSB9IGZyb20gJy4vdXRpbCc7XG52YXIgVGlueUNvbG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbnlDb2xvcihjb2xvciwgb3B0cykge1xuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICcnOyB9XG4gICAgICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gSWYgaW5wdXQgaXMgYWxyZWFkeSBhIHRpbnljb2xvciwgcmV0dXJuIGl0c2VsZlxuICAgICAgICBpZiAoY29sb3IgaW5zdGFuY2VvZiBUaW55Q29sb3IpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cbiAgICAgICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29sb3IgPSBudW1iZXJJbnB1dFRvT2JqZWN0KGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9yaWdpbmFsSW5wdXQgPSBjb2xvcjtcbiAgICAgICAgdmFyIHJnYiA9IGlucHV0VG9SR0IoY29sb3IpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW5wdXQgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yID0gcmdiLnI7XG4gICAgICAgIHRoaXMuZyA9IHJnYi5nO1xuICAgICAgICB0aGlzLmIgPSByZ2IuYjtcbiAgICAgICAgdGhpcy5hID0gcmdiLmE7XG4gICAgICAgIHRoaXMucm91bmRBID0gTWF0aC5yb3VuZCgxMDAgKiB0aGlzLmEpIC8gMTAwO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IChfYSA9IG9wdHMuZm9ybWF0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiByZ2IuZm9ybWF0O1xuICAgICAgICB0aGlzLmdyYWRpZW50VHlwZSA9IG9wdHMuZ3JhZGllbnRUeXBlO1xuICAgICAgICAvLyBEb24ndCBsZXQgdGhlIHJhbmdlIG9mIFswLDI1NV0gY29tZSBiYWNrIGluIFswLDFdLlxuICAgICAgICAvLyBQb3RlbnRpYWxseSBsb3NlIGEgbGl0dGxlIGJpdCBvZiBwcmVjaXNpb24gaGVyZSwgYnV0IHdpbGwgZml4IGlzc3VlcyB3aGVyZVxuICAgICAgICAvLyAuNSBnZXRzIGludGVycHJldGVkIGFzIGhhbGYgb2YgdGhlIHRvdGFsLCBpbnN0ZWFkIG9mIGhhbGYgb2YgMVxuICAgICAgICAvLyBJZiBpdCB3YXMgc3VwcG9zZWQgdG8gYmUgMTI4LCB0aGlzIHdhcyBhbHJlYWR5IHRha2VuIGNhcmUgb2YgYnkgYGlucHV0VG9SZ2JgXG4gICAgICAgIGlmICh0aGlzLnIgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLnIgPSBNYXRoLnJvdW5kKHRoaXMucik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZyA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZyA9IE1hdGgucm91bmQodGhpcy5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5iID0gTWF0aC5yb3VuZCh0aGlzLmIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHJnYi5vaztcbiAgICB9XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5pc0RhcmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJyaWdodG5lc3MoKSA8IDEyODtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuaXNMaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGFyaygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGVyY2VpdmVkIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yLCBmcm9tIDAtMjU1LlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZ2V0QnJpZ2h0bmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICByZXR1cm4gKHJnYi5yICogMjk5ICsgcmdiLmcgKiA1ODcgKyByZ2IuYiAqIDExNCkgLyAxMDAwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGVyY2VpdmVkIGx1bWluYW5jZSBvZiBhIGNvbG9yLCBmcm9tIDAtMS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmdldEx1bWluYW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICB2YXIgcmdiID0gdGhpcy50b1JnYigpO1xuICAgICAgICB2YXIgUjtcbiAgICAgICAgdmFyIEc7XG4gICAgICAgIHZhciBCO1xuICAgICAgICB2YXIgUnNSR0IgPSByZ2IuciAvIDI1NTtcbiAgICAgICAgdmFyIEdzUkdCID0gcmdiLmcgLyAyNTU7XG4gICAgICAgIHZhciBCc1JHQiA9IHJnYi5iIC8gMjU1O1xuICAgICAgICBpZiAoUnNSR0IgPD0gMC4wMzkyOCkge1xuICAgICAgICAgICAgUiA9IFJzUkdCIC8gMTIuOTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWV4cG9uZW50aWF0aW9uLW9wZXJhdG9yXG4gICAgICAgICAgICBSID0gTWF0aC5wb3coKFJzUkdCICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdzUkdCIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgICAgIEcgPSBHc1JHQiAvIDEyLjkyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1leHBvbmVudGlhdGlvbi1vcGVyYXRvclxuICAgICAgICAgICAgRyA9IE1hdGgucG93KChHc1JHQiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCc1JHQiA8PSAwLjAzOTI4KSB7XG4gICAgICAgICAgICBCID0gQnNSR0IgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZXhwb25lbnRpYXRpb24tb3BlcmF0b3JcbiAgICAgICAgICAgIEIgPSBNYXRoLnBvdygoQnNSR0IgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC4yMTI2ICogUiArIDAuNzE1MiAqIEcgKyAwLjA3MjIgKiBCO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYWxwaGEgdmFsdWUgb2YgYSBjb2xvciwgZnJvbSAwLTEuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5nZXRBbHBoYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFscGhhIHZhbHVlIG9uIHRoZSBjdXJyZW50IGNvbG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFscGhhIC0gVGhlIG5ldyBhbHBoYSB2YWx1ZS4gVGhlIGFjY2VwdGVkIHJhbmdlIGlzIDAtMS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnNldEFscGhhID0gZnVuY3Rpb24gKGFscGhhKSB7XG4gICAgICAgIHRoaXMuYSA9IGJvdW5kQWxwaGEoYWxwaGEpO1xuICAgICAgICB0aGlzLnJvdW5kQSA9IE1hdGgucm91bmQoMTAwICogdGhpcy5hKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXMgYSBIU1ZBIG9iamVjdC5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSHN2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHN2ID0gcmdiVG9Ic3YodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzdi5oICogMzYwLCBzOiBoc3YucywgdjogaHN2LnYsIGE6IHRoaXMuYSB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaHN2YSB2YWx1ZXMgaW50ZXJwb2xhdGVkIGludG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAgICAgKiBcImhzdmEoeHh4LCB4eHgsIHh4eCwgeHgpXCIuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hzdlN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgICB2YXIgaCA9IE1hdGgucm91bmQoaHN2LmggKiAzNjApO1xuICAgICAgICB2YXIgcyA9IE1hdGgucm91bmQoaHN2LnMgKiAxMDApO1xuICAgICAgICB2YXIgdiA9IE1hdGgucm91bmQoaHN2LnYgKiAxMDApO1xuICAgICAgICByZXR1cm4gdGhpcy5hID09PSAxID8gXCJoc3YoXCIuY29uY2F0KGgsIFwiLCBcIikuY29uY2F0KHMsIFwiJSwgXCIpLmNvbmNhdCh2LCBcIiUpXCIpIDogXCJoc3ZhKFwiLmNvbmNhdChoLCBcIiwgXCIpLmNvbmNhdChzLCBcIiUsIFwiKS5jb25jYXQodiwgXCIlLCBcIikuY29uY2F0KHRoaXMucm91bmRBLCBcIilcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXMgYSBIU0xBIG9iamVjdC5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHNsID0gcmdiVG9Ic2wodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICAgIHJldHVybiB7IGg6IGhzbC5oICogMzYwLCBzOiBoc2wucywgbDogaHNsLmwsIGE6IHRoaXMuYSB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaHNsYSB2YWx1ZXMgaW50ZXJwb2xhdGVkIGludG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdDpcbiAgICAgKiBcImhzbGEoeHh4LCB4eHgsIHh4eCwgeHgpXCIuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hzbFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgICB2YXIgaCA9IE1hdGgucm91bmQoaHNsLmggKiAzNjApO1xuICAgICAgICB2YXIgcyA9IE1hdGgucm91bmQoaHNsLnMgKiAxMDApO1xuICAgICAgICB2YXIgbCA9IE1hdGgucm91bmQoaHNsLmwgKiAxMDApO1xuICAgICAgICByZXR1cm4gdGhpcy5hID09PSAxID8gXCJoc2woXCIuY29uY2F0KGgsIFwiLCBcIikuY29uY2F0KHMsIFwiJSwgXCIpLmNvbmNhdChsLCBcIiUpXCIpIDogXCJoc2xhKFwiLmNvbmNhdChoLCBcIiwgXCIpLmNvbmNhdChzLCBcIiUsIFwiKS5jb25jYXQobCwgXCIlLCBcIikuY29uY2F0KHRoaXMucm91bmRBLCBcIilcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgICAqIEBwYXJhbSBhbGxvdzNDaGFyIHdpbGwgc2hvcnRlbiBoZXggdmFsdWUgdG8gMyBjaGFyIGlmIHBvc3NpYmxlXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hleCA9IGZ1bmN0aW9uIChhbGxvdzNDaGFyKSB7XG4gICAgICAgIGlmIChhbGxvdzNDaGFyID09PSB2b2lkIDApIHsgYWxsb3czQ2hhciA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiByZ2JUb0hleCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iLCBhbGxvdzNDaGFyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3IgLXdpdGggYSAjIGFwcGVuZWQuXG4gICAgICogQHBhcmFtIGFsbG93M0NoYXIgd2lsbCBzaG9ydGVuIGhleCB2YWx1ZSB0byAzIGNoYXIgaWYgcG9zc2libGVcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSGV4U3RyaW5nID0gZnVuY3Rpb24gKGFsbG93M0NoYXIpIHtcbiAgICAgICAgaWYgKGFsbG93M0NoYXIgPT09IHZvaWQgMCkgeyBhbGxvdzNDaGFyID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXgoYWxsb3czQ2hhcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZXggOCB2YWx1ZSBvZiB0aGUgY29sb3IuXG4gICAgICogQHBhcmFtIGFsbG93NENoYXIgd2lsbCBzaG9ydGVuIGhleCB2YWx1ZSB0byA0IGNoYXIgaWYgcG9zc2libGVcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSGV4OCA9IGZ1bmN0aW9uIChhbGxvdzRDaGFyKSB7XG4gICAgICAgIGlmIChhbGxvdzRDaGFyID09PSB2b2lkIDApIHsgYWxsb3c0Q2hhciA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiByZ2JhVG9IZXgodGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hLCBhbGxvdzRDaGFyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhleCA4IHZhbHVlIG9mIHRoZSBjb2xvciAtd2l0aCBhICMgYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0gYWxsb3c0Q2hhciB3aWxsIHNob3J0ZW4gaGV4IHZhbHVlIHRvIDQgY2hhciBpZiBwb3NzaWJsZVxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9IZXg4U3RyaW5nID0gZnVuY3Rpb24gKGFsbG93NENoYXIpIHtcbiAgICAgICAgaWYgKGFsbG93NENoYXIgPT09IHZvaWQgMCkgeyBhbGxvdzRDaGFyID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuICcjJyArIHRoaXMudG9IZXg4KGFsbG93NENoYXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzIGEgUkdCQSBvYmplY3QuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b1JnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHI6IE1hdGgucm91bmQodGhpcy5yKSxcbiAgICAgICAgICAgIGc6IE1hdGgucm91bmQodGhpcy5nKSxcbiAgICAgICAgICAgIGI6IE1hdGgucm91bmQodGhpcy5iKSxcbiAgICAgICAgICAgIGE6IHRoaXMuYSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFJHQkEgdmFsdWVzIGludGVycG9sYXRlZCBpbnRvIGEgc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAgICogXCJSR0JBKHh4eCwgeHh4LCB4eHgsIHh4KVwiLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9SZ2JTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gTWF0aC5yb3VuZCh0aGlzLnIpO1xuICAgICAgICB2YXIgZyA9IE1hdGgucm91bmQodGhpcy5nKTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLnJvdW5kKHRoaXMuYik7XG4gICAgICAgIHJldHVybiB0aGlzLmEgPT09IDEgPyBcInJnYihcIi5jb25jYXQociwgXCIsIFwiKS5jb25jYXQoZywgXCIsIFwiKS5jb25jYXQoYiwgXCIpXCIpIDogXCJyZ2JhKFwiLmNvbmNhdChyLCBcIiwgXCIpLmNvbmNhdChnLCBcIiwgXCIpLmNvbmNhdChiLCBcIiwgXCIpLmNvbmNhdCh0aGlzLnJvdW5kQSwgXCIpXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzIGEgUkdCQSBvYmplY3QuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b1BlcmNlbnRhZ2VSZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmbXQgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChib3VuZDAxKHgsIDI1NSkgKiAxMDApLCBcIiVcIik7IH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBmbXQodGhpcy5yKSxcbiAgICAgICAgICAgIGc6IGZtdCh0aGlzLmcpLFxuICAgICAgICAgICAgYjogZm10KHRoaXMuYiksXG4gICAgICAgICAgICBhOiB0aGlzLmEsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBSR0JBIHJlbGF0aXZlIHZhbHVlcyBpbnRlcnBvbGF0ZWQgaW50byBhIHN0cmluZ1xuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9QZXJjZW50YWdlUmdiU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm5kID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoYm91bmQwMSh4LCAyNTUpICogMTAwKTsgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMVxuICAgICAgICAgICAgPyBcInJnYihcIi5jb25jYXQocm5kKHRoaXMuciksIFwiJSwgXCIpLmNvbmNhdChybmQodGhpcy5nKSwgXCIlLCBcIikuY29uY2F0KHJuZCh0aGlzLmIpLCBcIiUpXCIpXG4gICAgICAgICAgICA6IFwicmdiYShcIi5jb25jYXQocm5kKHRoaXMuciksIFwiJSwgXCIpLmNvbmNhdChybmQodGhpcy5nKSwgXCIlLCBcIikuY29uY2F0KHJuZCh0aGlzLmIpLCBcIiUsIFwiKS5jb25jYXQodGhpcy5yb3VuZEEsIFwiKVwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSAncmVhbCcgbmFtZSBvZiB0aGUgY29sb3IgLWlmIHRoZXJlIGlzIG9uZS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuYSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICd0cmFuc3BhcmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGV4ID0gJyMnICsgcmdiVG9IZXgodGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgZmFsc2UpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobmFtZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrZXkgPSBfYlswXSwgdmFsdWUgPSBfYlsxXTtcbiAgICAgICAgICAgIGlmIChoZXggPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICB2YXIgZm9ybWF0U2V0ID0gQm9vbGVhbihmb3JtYXQpO1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgIT09IG51bGwgJiYgZm9ybWF0ICE9PSB2b2lkIDAgPyBmb3JtYXQgOiB0aGlzLmZvcm1hdDtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFN0cmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaGFzQWxwaGEgPSB0aGlzLmEgPCAxICYmIHRoaXMuYSA+PSAwO1xuICAgICAgICB2YXIgbmVlZHNBbHBoYUZvcm1hdCA9ICFmb3JtYXRTZXQgJiYgaGFzQWxwaGEgJiYgKGZvcm1hdC5zdGFydHNXaXRoKCdoZXgnKSB8fCBmb3JtYXQgPT09ICduYW1lJyk7XG4gICAgICAgIGlmIChuZWVkc0FscGhhRm9ybWF0KSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIFwidHJhbnNwYXJlbnRcIiwgYWxsIG90aGVyIG5vbi1hbHBoYSBmb3JtYXRzXG4gICAgICAgICAgICAvLyB3aWxsIHJldHVybiByZ2JhIHdoZW4gdGhlcmUgaXMgdHJhbnNwYXJlbmN5LlxuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ25hbWUnICYmIHRoaXMuYSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvTmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAncmdiJykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1JnYlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdwcmdiJykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b1BlcmNlbnRhZ2VSZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaGV4JyB8fCBmb3JtYXQgPT09ICdoZXg2Jykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoZXgzJykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaGV4NCcpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoZXg4Jykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hleDhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnbmFtZScpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9OYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic2xTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaHN2Jykge1xuICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nID0gdGhpcy50b0hzdlN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmcgfHwgdGhpcy50b0hleFN0cmluZygpO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b051bWJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKHRoaXMucikgPDwgMTYpICsgKE1hdGgucm91bmQodGhpcy5nKSA8PCA4KSArIE1hdGgucm91bmQodGhpcy5iKTtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKHRoaXMudG9TdHJpbmcoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMaWdodGVuIHRoZSBjb2xvciBhIGdpdmVuIGFtb3VudC4gUHJvdmlkaW5nIDEwMCB3aWxsIGFsd2F5cyByZXR1cm4gd2hpdGUuXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmxpZ2h0ZW4gPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICBoc2wubCArPSBhbW91bnQgLyAxMDA7XG4gICAgICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCcmlnaHRlbiB0aGUgY29sb3IgYSBnaXZlbiBhbW91bnQsIGZyb20gMCB0byAxMDAuXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgcmdiLnIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHJnYi5yIC0gTWF0aC5yb3VuZCgyNTUgKiAtKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgICAgIHJnYi5nID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCByZ2IuZyAtIE1hdGgucm91bmQoMjU1ICogLShhbW91bnQgLyAxMDApKSkpO1xuICAgICAgICByZ2IuYiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgcmdiLmIgLSBNYXRoLnJvdW5kKDI1NSAqIC0oYW1vdW50IC8gMTAwKSkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IocmdiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERhcmtlbiB0aGUgY29sb3IgYSBnaXZlbiBhbW91bnQsIGZyb20gMCB0byAxMDAuXG4gICAgICogUHJvdmlkaW5nIDEwMCB3aWxsIGFsd2F5cyByZXR1cm4gYmxhY2suXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIGhzbC5sIC09IGFtb3VudCAvIDEwMDtcbiAgICAgICAgaHNsLmwgPSBjbGFtcDAxKGhzbC5sKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1peCB0aGUgY29sb3Igd2l0aCBwdXJlIHdoaXRlLCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIFByb3ZpZGluZyAwIHdpbGwgZG8gbm90aGluZywgcHJvdmlkaW5nIDEwMCB3aWxsIGFsd2F5cyByZXR1cm4gd2hpdGUuXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRpbnQgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICByZXR1cm4gdGhpcy5taXgoJ3doaXRlJywgYW1vdW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1peCB0aGUgY29sb3Igd2l0aCBwdXJlIGJsYWNrLCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIFByb3ZpZGluZyAwIHdpbGwgZG8gbm90aGluZywgcHJvdmlkaW5nIDEwMCB3aWxsIGFsd2F5cyByZXR1cm4gYmxhY2suXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnNoYWRlID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWl4KCdibGFjaycsIGFtb3VudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXNhdHVyYXRlIHRoZSBjb2xvciBhIGdpdmVuIGFtb3VudCwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBQcm92aWRpbmcgMTAwIHdpbGwgaXMgdGhlIHNhbWUgYXMgY2FsbGluZyBncmV5c2NhbGVcbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIGhzbC5zIC09IGFtb3VudCAvIDEwMDtcbiAgICAgICAgaHNsLnMgPSBjbGFtcDAxKGhzbC5zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNhdHVyYXRlIHRoZSBjb2xvciBhIGdpdmVuIGFtb3VudCwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBAcGFyYW0gYW1vdW50IC0gdmFsaWQgYmV0d2VlbiAxLTEwMFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICBoc2wucyArPSBhbW91bnQgLyAxMDA7XG4gICAgICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wbGV0ZWx5IGRlc2F0dXJhdGVzIGEgY29sb3IgaW50byBncmV5c2NhbGUuXG4gICAgICogU2FtZSBhcyBjYWxsaW5nIGBkZXNhdHVyYXRlKDEwMClgXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5ncmV5c2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2F0dXJhdGUoMTAwKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNwaW4gdGFrZXMgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBhbW91bnQgd2l0aGluIFstMzYwLCAzNjBdIGluZGljYXRpbmcgdGhlIGNoYW5nZSBvZiBodWUuXG4gICAgICogVmFsdWVzIG91dHNpZGUgb2YgdGhpcyByYW5nZSB3aWxsIGJlIHdyYXBwZWQgaW50byB0aGlzIHJhbmdlLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuc3BpbiA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgdmFyIGh1ZSA9IChoc2wuaCArIGFtb3VudCkgJSAzNjA7XG4gICAgICAgIGhzbC5oID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoaHNsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1peCB0aGUgY3VycmVudCBjb2xvciBhIGdpdmVuIGFtb3VudCB3aXRoIGFub3RoZXIgY29sb3IsIGZyb20gMCB0byAxMDAuXG4gICAgICogMCBtZWFucyBubyBtaXhpbmcgKHJldHVybiBjdXJyZW50IGNvbG9yKS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLm1peCA9IGZ1bmN0aW9uIChjb2xvciwgYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSA1MDsgfVxuICAgICAgICB2YXIgcmdiMSA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIHJnYjIgPSBuZXcgVGlueUNvbG9yKGNvbG9yKS50b1JnYigpO1xuICAgICAgICB2YXIgcCA9IGFtb3VudCAvIDEwMDtcbiAgICAgICAgdmFyIHJnYmEgPSB7XG4gICAgICAgICAgICByOiAocmdiMi5yIC0gcmdiMS5yKSAqIHAgKyByZ2IxLnIsXG4gICAgICAgICAgICBnOiAocmdiMi5nIC0gcmdiMS5nKSAqIHAgKyByZ2IxLmcsXG4gICAgICAgICAgICBiOiAocmdiMi5iIC0gcmdiMS5iKSAqIHAgKyByZ2IxLmIsXG4gICAgICAgICAgICBhOiAocmdiMi5hIC0gcmdiMS5hKSAqIHAgKyByZ2IxLmEsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKHJnYmEpO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5hbmFsb2dvdXMgPSBmdW5jdGlvbiAocmVzdWx0cywgc2xpY2VzKSB7XG4gICAgICAgIGlmIChyZXN1bHRzID09PSB2b2lkIDApIHsgcmVzdWx0cyA9IDY7IH1cbiAgICAgICAgaWYgKHNsaWNlcyA9PT0gdm9pZCAwKSB7IHNsaWNlcyA9IDMwOyB9XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIHZhciBwYXJ0ID0gMzYwIC8gc2xpY2VzO1xuICAgICAgICB2YXIgcmV0ID0gW3RoaXNdO1xuICAgICAgICBmb3IgKGhzbC5oID0gKGhzbC5oIC0gKChwYXJ0ICogcmVzdWx0cykgPj4gMSkgKyA3MjApICUgMzYwOyAtLXJlc3VsdHM7KSB7XG4gICAgICAgICAgICBoc2wuaCA9IChoc2wuaCArIHBhcnQpICUgMzYwO1xuICAgICAgICAgICAgcmV0LnB1c2gobmV3IFRpbnlDb2xvcihoc2wpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW5mdXNpb24valF1ZXJ5LXhjb2xvci9ibG9iL21hc3Rlci9qcXVlcnkueGNvbG9yLmpzXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5jb21wbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICBoc2wuaCA9IChoc2wuaCArIDE4MCkgJSAzNjA7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLm1vbm9jaHJvbWF0aWMgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdm9pZCAwKSB7IHJlc3VsdHMgPSA2OyB9XG4gICAgICAgIHZhciBoc3YgPSB0aGlzLnRvSHN2KCk7XG4gICAgICAgIHZhciBoID0gaHN2Lmg7XG4gICAgICAgIHZhciBzID0gaHN2LnM7XG4gICAgICAgIHZhciB2ID0gaHN2LnY7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdmFyIG1vZGlmaWNhdGlvbiA9IDEgLyByZXN1bHRzO1xuICAgICAgICB3aGlsZSAocmVzdWx0cy0tKSB7XG4gICAgICAgICAgICByZXMucHVzaChuZXcgVGlueUNvbG9yKHsgaDogaCwgczogcywgdjogdiB9KSk7XG4gICAgICAgICAgICB2ID0gKHYgKyBtb2RpZmljYXRpb24pICUgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5zcGxpdGNvbXBsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIHZhciBoID0gaHNsLmg7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbmV3IFRpbnlDb2xvcih7IGg6IChoICsgNzIpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgICAgICBuZXcgVGlueUNvbG9yKHsgaDogKGggKyAyMTYpICUgMzYwLCBzOiBoc2wucywgbDogaHNsLmwgfSksXG4gICAgICAgIF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlIGhvdyB0aGUgY29sb3Igd291bGQgYXBwZWFyIG9uIGEgYmFja2dyb3VuZFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUub25CYWNrZ3JvdW5kID0gZnVuY3Rpb24gKGJhY2tncm91bmQpIHtcbiAgICAgICAgdmFyIGZnID0gdGhpcy50b1JnYigpO1xuICAgICAgICB2YXIgYmcgPSBuZXcgVGlueUNvbG9yKGJhY2tncm91bmQpLnRvUmdiKCk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKHtcbiAgICAgICAgICAgIHI6IGJnLnIgKyAoZmcuciAtIGJnLnIpICogZmcuYSxcbiAgICAgICAgICAgIGc6IGJnLmcgKyAoZmcuZyAtIGJnLmcpICogZmcuYSxcbiAgICAgICAgICAgIGI6IGJnLmIgKyAoZmcuYiAtIGJnLmIpICogZmcuYSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYHBvbHlhZCgzKWBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRyaWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5YWQoMyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYHBvbHlhZCg0KWBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRldHJhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWFkKDQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHBvbHlhZCBjb2xvcnMsIGxpa2UgKGZvciAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCBldGMuLi4pXG4gICAgICogbW9uYWQsIGR5YWQsIHRyaWFkLCB0ZXRyYWQsIHBlbnRhZCwgaGV4YWQsIGhlcHRhZCwgb2N0YWQsIGV0Yy4uLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUucG9seWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgdmFyIGggPSBoc2wuaDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFt0aGlzXTtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IDM2MCAvIG47XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgVGlueUNvbG9yKHsgaDogKGggKyBpICogaW5jcmVtZW50KSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogY29tcGFyZSBjb2xvciB2cyBjdXJyZW50IGNvbG9yXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9SZ2JTdHJpbmcoKSA9PT0gbmV3IFRpbnlDb2xvcihjb2xvcikudG9SZ2JTdHJpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBUaW55Q29sb3I7XG59KCkpO1xuZXhwb3J0IHsgVGlueUNvbG9yIH07XG4vLyBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0YWJpbGl0eSB3aXRoIHYxXG5leHBvcnQgZnVuY3Rpb24gdGlueWNvbG9yKGNvbG9yLCBvcHRzKSB7XG4gICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAnJzsgfVxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgcmV0dXJuIG5ldyBUaW55Q29sb3IoY29sb3IsIG9wdHMpO1xufVxuIiwiLyoqXG4gKiBUYWtlIGlucHV0IGZyb20gWzAsIG5dIGFuZCByZXR1cm4gaXQgYXMgWzAsIDFdXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuZDAxKG4sIG1heCkge1xuICAgIGlmIChpc09uZVBvaW50WmVybyhuKSkge1xuICAgICAgICBuID0gJzEwMCUnO1xuICAgIH1cbiAgICB2YXIgaXNQZXJjZW50ID0gaXNQZXJjZW50YWdlKG4pO1xuICAgIG4gPSBtYXggPT09IDM2MCA/IG4gOiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KDAsIHBhcnNlRmxvYXQobikpKTtcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGNvbnZlcnQgcGVyY2VudGFnZSBpbnRvIG51bWJlclxuICAgIGlmIChpc1BlcmNlbnQpIHtcbiAgICAgICAgbiA9IHBhcnNlSW50KFN0cmluZyhuICogbWF4KSwgMTApIC8gMTAwO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzXG4gICAgaWYgKE1hdGguYWJzKG4gLSBtYXgpIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8vIENvbnZlcnQgaW50byBbMCwgMV0gcmFuZ2UgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgIGlmIChtYXggPT09IDM2MCkge1xuICAgICAgICAvLyBJZiBuIGlzIGEgaHVlIGdpdmVuIGluIGRlZ3JlZXMsXG4gICAgICAgIC8vIHdyYXAgYXJvdW5kIG91dC1vZi1yYW5nZSB2YWx1ZXMgaW50byBbMCwgMzYwXSByYW5nZVxuICAgICAgICAvLyB0aGVuIGNvbnZlcnQgaW50byBbMCwgMV0uXG4gICAgICAgIG4gPSAobiA8IDAgPyAobiAlIG1heCkgKyBtYXggOiBuICUgbWF4KSAvIHBhcnNlRmxvYXQoU3RyaW5nKG1heCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgbiBub3QgYSBodWUgZ2l2ZW4gaW4gZGVncmVlc1xuICAgICAgICAvLyBDb252ZXJ0IGludG8gWzAsIDFdIHJhbmdlIGlmIGl0IGlzbid0IGFscmVhZHkuXG4gICAgICAgIG4gPSAobiAlIG1heCkgLyBwYXJzZUZsb2F0KFN0cmluZyhtYXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIG47XG59XG4vKipcbiAqIEZvcmNlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAwMSh2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdmFsKSk7XG59XG4vKipcbiAqIE5lZWQgdG8gaGFuZGxlIDEuMCBhcyAxMDAlLCBzaW5jZSBvbmNlIGl0IGlzIGEgbnVtYmVyLCB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gaXQgYW5kIDFcbiAqIDxodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc0MjIwNzIvamF2YXNjcmlwdC1ob3ctdG8tZGV0ZWN0LW51bWJlci1hcy1hLWRlY2ltYWwtaW5jbHVkaW5nLTEtMD5cbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT25lUG9pbnRaZXJvKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdzdHJpbmcnICYmIG4uaW5kZXhPZignLicpICE9PSAtMSAmJiBwYXJzZUZsb2F0KG4pID09PSAxO1xufVxuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgc3RyaW5nIHBhc3NlZCBpbiBpcyBhIHBlcmNlbnRhZ2VcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGVyY2VudGFnZShuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnc3RyaW5nJyAmJiBuLmluZGV4T2YoJyUnKSAhPT0gLTE7XG59XG4vKipcbiAqIFJldHVybiBhIHZhbGlkIGFscGhhIHZhbHVlIFswLDFdIHdpdGggYWxsIGludmFsaWQgdmFsdWVzIGJlaW5nIHNldCB0byAxXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFscGhhKGEpIHtcbiAgICBhID0gcGFyc2VGbG9hdChhKTtcbiAgICBpZiAoaXNOYU4oYSkgfHwgYSA8IDAgfHwgYSA+IDEpIHtcbiAgICAgICAgYSA9IDE7XG4gICAgfVxuICAgIHJldHVybiBhO1xufVxuLyoqXG4gKiBSZXBsYWNlIGEgZGVjaW1hbCB3aXRoIGl0J3MgcGVyY2VudGFnZSB2YWx1ZVxuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvUGVyY2VudGFnZShuKSB7XG4gICAgaWYgKG4gPD0gMSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoTnVtYmVyKG4pICogMTAwLCBcIiVcIik7XG4gICAgfVxuICAgIHJldHVybiBuO1xufVxuLyoqXG4gKiBGb3JjZSBhIGhleCB2YWx1ZSB0byBoYXZlIDIgY2hhcmFjdGVyc1xuICogQGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkMihjKSB7XG4gICAgcmV0dXJuIGMubGVuZ3RoID09PSAxID8gJzAnICsgYyA6IFN0cmluZyhjKTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb21tYW5kcyA9IHtcbiAgICBnZW5lcmFsU2V0dGluZ3M6ICdnZW5lcmFsU2V0dGluZ3MnLFxuICAgIGV4cG9ydDogJ2V4cG9ydCcsXG4gICAgc2VuZFNldHRpbmdzOiAnc2VuZFNldHRpbmdzJyxcbiAgICB1cmxFeHBvcnQ6ICd1cmxFeHBvcnQnLFxuICAgIGhlbHA6ICdoZWxwJyxcbiAgICBkZW1vOiAnZGVtbycsXG4gICAgb3BlblVybDogJ29wZW5VcmwnLFxuICAgIHJlc2V0OiAncmVzZXQnLFxuICAgIHNhdmVTZXR0aW5nczogJ3NhdmVTZXR0aW5ncycsXG4gICAgY2xvc2VQbHVnaW46ICdjbG9zZVBsdWdpbidcbn07XG4iLCIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVpOiB7XG4gICAgICAgIGdlbmVyYWxTZXR0aW5nczoge1xuICAgICAgICAgICAgd2lkdGg6IDU1MCxcbiAgICAgICAgICAgIGhlaWdodDogODM2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydDoge1xuICAgICAgICAgICAgd2lkdGg6IDU1MCxcbiAgICAgICAgICAgIGhlaWdodDogMzU2XG4gICAgICAgIH0sXG4gICAgICAgIHVybEV4cG9ydDoge1xuICAgICAgICAgICAgd2lkdGg6IDU1MCxcbiAgICAgICAgICAgIGhlaWdodDogNjUwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGtleToge1xuICAgICAgICBsYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkOiAnbGFzdFZlcnNpb25TZXR0aW5nc09wZW5lZCcsXG4gICAgICAgIGZpbGVJZDogJ2ZpbGVJZCcsXG4gICAgICAgIHNldHRpbmdzOiAnc2V0dGluZ3MnLFxuICAgICAgICBleHRlbnNpb25QbHVnaW5EYXRhOiAnb3JnLmx1a2Fzb3BwZXJtYW5uLmZpZ21hRGVzaWduVG9rZW5zJyxcbiAgICAgICAgZXh0ZW5zaW9uRmlnbWFTdHlsZUlkOiAnc3R5bGVJZCcsXG4gICAgICAgIGV4dGVuc2lvblZhcmlhYmxlU3R5bGVJZDogJ3ZhcmlhYmxlSWQnLFxuICAgICAgICBleHRlbnNpb25BbGlhczogJ2FsaWFzJyxcbiAgICAgICAgYXV0aFR5cGU6IHtcbiAgICAgICAgICAgIHRva2VuOiAndG9rZW4nLFxuICAgICAgICAgICAgZ2l0bGFiVG9rZW46ICdnaXRsYWJfdG9rZW4nLFxuICAgICAgICAgICAgZ2l0bGFiQ29tbWl0OiAnZ2l0bGFiX2NvbW1pdCcsXG4gICAgICAgICAgICBiYXNpYzogJ0Jhc2ljJyxcbiAgICAgICAgICAgIGJlYXJlcjogJ0JlYXJlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXhjbHVzaW9uUHJlZml4RGVmYXVsdDogWydfJywgJy4nXSxcbiAgICBmaWxlRXh0ZW5zaW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJy50b2tlbnMuanNvbicsXG4gICAgICAgICAgICB2YWx1ZTogJy50b2tlbnMuanNvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICcudG9rZW5zJyxcbiAgICAgICAgICAgIHZhbHVlOiAnLnRva2VucydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICcuanNvbicsXG4gICAgICAgICAgICB2YWx1ZTogJy5qc29uJ1xuICAgICAgICB9XG4gICAgXVxufTtcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgZmlsZW5hbWU6ICdkZXNpZ24tdG9rZW5zJyxcbiAgICBleHRlbnNpb246ICcudG9rZW5zLmpzb24nLFxuICAgIG5hbWVDb252ZXJzaW9uOiAnZGVmYXVsdCcsXG4gICAgdG9rZW5Gb3JtYXQ6ICdzdGFuZGFyZCcsXG4gICAgY29tcHJlc3Npb246IGZhbHNlLFxuICAgIHVybEpzb25Db21wcmVzc2lvbjogdHJ1ZSxcbiAgICBzZXJ2ZXJVcmw6IHVuZGVmaW5lZCxcbiAgICBldmVudFR5cGU6ICd1cGRhdGUtdG9rZW5zJyxcbiAgICBhY2Nlc3NUb2tlbjogdW5kZWZpbmVkLFxuICAgIGFjY2VwdEhlYWRlcjogJ2FwcGxpY2F0aW9uL3ZuZC5naXRodWIuZXZlcmVzdC1wcmV2aWV3K2pzb24nLFxuICAgIGNvbnRlbnRUeXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JyxcbiAgICBhdXRoVHlwZTogJ3Rva2VuJyxcbiAgICByZWZlcmVuY2U6ICdtYWluJyxcbiAgICBleGNsdXNpb25QcmVmaXg6ICcnLFxuICAgIGV4Y2x1ZGVFeHRlbnNpb25Qcm9wOiBmYWxzZSxcbiAgICBhbGlhczogJ2FsaWFzLCByZWYsIHJlZmVyZW5jZScsXG4gICAga2V5SW5OYW1lOiBmYWxzZSxcbiAgICBwcmVmaXhJbk5hbWU6IHRydWUsXG4gICAgbW9kZUluVG9rZW5WYWx1ZTogZmFsc2UsXG4gICAgbW9kZUluVG9rZW5OYW1lOiBmYWxzZSxcbiAgICByZXNvbHZlU2FtZUNvbGxlY3Rpb25Pck1vZGVSZWZlcmVuY2U6IGZhbHNlLFxuICAgIHByZWZpeDoge1xuICAgICAgICBjb2xvcjogJ2NvbG9yJyxcbiAgICAgICAgZ3JhZGllbnQ6ICdncmFkaWVudCcsXG4gICAgICAgIHR5cG9ncmFwaHk6ICd0eXBvZ3JhcGh5JyxcbiAgICAgICAgZm9udDogJ2ZvbnQnLFxuICAgICAgICBlZmZlY3Q6ICdlZmZlY3QnLFxuICAgICAgICBncmlkOiAnZ3JpZCcsXG4gICAgICAgIGJvcmRlcjogJ2JvcmRlciwgYm9yZGVycycsXG4gICAgICAgIGJyZWFrcG9pbnQ6ICdicmVha3BvaW50LCBicmVha3BvaW50cycsXG4gICAgICAgIHJhZGl1czogJ3JhZGl1cywgcmFkaWknLFxuICAgICAgICBzaXplOiAnc2l6ZSwgc2l6ZXMnLFxuICAgICAgICBzcGFjaW5nOiAnc3BhY2luZycsXG4gICAgICAgIG1vdGlvbjogJ21vdGlvbicsXG4gICAgICAgIG9wYWNpdHk6ICdvcGFjaXR5LCBvcGFjaXRpZXMnXG4gICAgfSxcbiAgICBleHBvcnRzOiB7XG4gICAgICAgIGNvbG9yOiB0cnVlLFxuICAgICAgICBncmFkaWVudDogdHJ1ZSxcbiAgICAgICAgZm9udDogdHJ1ZSxcbiAgICAgICAgdHlwb2dyYXBoeTogdHJ1ZSxcbiAgICAgICAgZWZmZWN0OiB0cnVlLFxuICAgICAgICBncmlkOiB0cnVlLFxuICAgICAgICBib3JkZXI6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnQ6IHRydWUsXG4gICAgICAgIHJhZGl1czogdHJ1ZSxcbiAgICAgICAgc2l6ZTogdHJ1ZSxcbiAgICAgICAgc3BhY2luZzogdHJ1ZSxcbiAgICAgICAgbW90aW9uOiB0cnVlLFxuICAgICAgICBvcGFjaXR5OiB0cnVlLFxuICAgICAgICB2YXJpYWJsZXM6IHRydWVcbiAgICB9XG59O1xuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbmV4cG9ydCBjb25zdCB0b2tlblR5cGVzID0ge1xuICAgIGNvbG9yOiB7XG4gICAgICAgIGxhYmVsOiAnQ29sb3JzJyxcbiAgICAgICAga2V5OiAnY29sb3InXG4gICAgfSxcbiAgICBncmFkaWVudDoge1xuICAgICAgICBsYWJlbDogJ0dyYWRpZW50cycsXG4gICAgICAgIGtleTogJ2dyYWRpZW50J1xuICAgIH0sXG4gICAgZm9udDoge1xuICAgICAgICBsYWJlbDogJ0ZvbnQgU3R5bGVzJyxcbiAgICAgICAga2V5OiAnZm9udCdcbiAgICB9LFxuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgbGFiZWw6ICdUeXBvZ3JhcGh5JyxcbiAgICAgICAga2V5OiAndHlwb2dyYXBoeScsXG4gICAgICAgIGV4Y2x1ZGU6IFsnb3JpZ2luYWwnXVxuICAgIH0sXG4gICAgZWZmZWN0OiB7XG4gICAgICAgIGxhYmVsOiAnRWZmZWN0cycsXG4gICAgICAgIGtleTogJ2VmZmVjdCdcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgbGFiZWw6ICdHcmlkcycsXG4gICAgICAgIGtleTogJ2dyaWQnXG4gICAgfSxcbiAgICBib3JkZXI6IHtcbiAgICAgICAgbGFiZWw6ICdCb3JkZXJzJyxcbiAgICAgICAga2V5OiAnYm9yZGVyJ1xuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgICBsYWJlbDogJ0JyZWFrcG9pbnRzJyxcbiAgICAgICAga2V5OiAnYnJlYWtwb2ludCdcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgICBsYWJlbDogJ1JhZGlpJyxcbiAgICAgICAga2V5OiAncmFkaXVzJ1xuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgICBsYWJlbDogJ1NpemVzJyxcbiAgICAgICAga2V5OiAnc2l6ZSdcbiAgICB9LFxuICAgIHNwYWNpbmc6IHtcbiAgICAgICAgbGFiZWw6ICdTcGFjaW5nJyxcbiAgICAgICAga2V5OiAnc3BhY2luZydcbiAgICB9LFxuICAgIG1vdGlvbjoge1xuICAgICAgICBsYWJlbDogJ01vdGlvbicsXG4gICAgICAgIGtleTogJ21vdGlvbidcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbGFiZWw6ICdPcGFjaXR5JyxcbiAgICAgICAga2V5OiAnb3BhY2l0eSdcbiAgICB9LFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsYWJlbDogJ0ZpZ21hIFZhcmlhYmxlcyAoQkVUQSknLFxuICAgICAgICBrZXk6ICd2YXJpYWJsZXMnLFxuICAgICAgICBleGNsdWRlOiBbJ29yaWdpbmFsJ11cbiAgICB9XG59O1xuIiwiaW1wb3J0IHJvdW5kV2l0aERlY2ltYWxzIGZyb20gJ0B1dGlscy9yb3VuZFdpdGhEZWNpbWFscyc7XG5pbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCB7IGZpbHRlckJ5UHJlZml4IH0gZnJvbSAnLi9leHRyYWN0VXRpbGl0aWVzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3Qgc3Ryb2tlSm9pbnMgPSB7XG4gICAgTUlURVI6ICdtaXRlcicsXG4gICAgQkVWRUw6ICdiZXZlbCcsXG4gICAgUk9VTkQ6ICdyb3VuZCdcbn07XG5jb25zdCBzdHJva2VBbGlnbnMgPSB7XG4gICAgQ0VOVEVSOiAnY2VudGVyJyxcbiAgICBJTlNJREU6ICdpbnNpZGUnLFxuICAgIE9VVFNJREU6ICdvdXRzaWRlJ1xufTtcbmNvbnN0IGV4dHJhY3RCb3JkZXJzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC8vIHJlbW92ZSBub2RlcyB3aXRoIG5vIGJvcmRlciBwcm9wZXJ0eVxuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5zdHJva2VzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGNvbnZlcnQgYm9yZGVyc1xuICAgICAgICAubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICBjYXRlZ29yeTogJ2JvcmRlcicsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5ib3JkZXIua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHN0cm9rZUFsaWduOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0cm9rZUFsaWduc1tub2RlLnN0cm9rZUFsaWduXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhc2hQYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFsuLi4obm9kZS5kYXNoUGF0dGVybiAhPT0gdW5kZWZpbmVkICYmIG5vZGUuZGFzaFBhdHRlcm4ubGVuZ3RoID4gMCA/IG5vZGUuZGFzaFBhdHRlcm4gOiBbMCwgMF0pXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0cm9rZUNhcDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAoKHR5cGVvZiBub2RlLnN0cm9rZUNhcCA9PT0gJ3N0cmluZycpID8gbm9kZS5zdHJva2VDYXAudG9Mb3dlckNhc2UoKSA6ICdtaXhlZCcpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlSm9pbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJva2VKb2luc1tub2RlLnN0cm9rZUpvaW5dLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3Ryb2tlTWl0ZXJMaW1pdDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLnN0cm9rZU1pdGVyTGltaXQpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdkZWdyZWUnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gc3Ryb2tlU3R5bGVJZDoge1xuICAgICAgICAgICAgLy8gICB2YWx1ZTogbm9kZS5zdHJva2VTdHlsZUlkXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuc3Ryb2tlV2VpZ2h0LFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5zdHJva2VzWzBdLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uUGx1Z2luRGF0YV06IHtcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuYm9yZGVyLmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RCb3JkZXJzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnQHV0aWxzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCB7IGZpbHRlckJ5UHJlZml4IH0gZnJvbSAnLi9leHRyYWN0VXRpbGl0aWVzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZXh0cmFjdEJyZWFrcG9pbnRzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdicmVha3BvaW50JyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmJyZWFrcG9pbnQua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKG5vZGUud2lkdGgsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5oZWlnaHQsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uUGx1Z2luRGF0YV06IHtcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuYnJlYWtwb2ludC5rZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0QnJlYWtwb2ludHM7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCB7IGNvbnZlcnRQYWludFRvUmdiYSwgcm91bmRSZ2JhIH0gZnJvbSAnQHV0aWxzL2NvbnZlcnRDb2xvcic7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnQHV0aWxzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgdHJhbnNwYXJlbnRGaWxsID0ge1xuICAgIGZpbGw6IHtcbiAgICAgICAgdmFsdWU6IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LFxuICAgICAgICB0eXBlOiAnY29sb3InLFxuICAgICAgICBibGVuZE1vZGU6ICdub3JtYWwnXG4gICAgfVxufTtcbmNvbnN0IHBhcnNlRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24gPSAnJywgYWxpYXNBcnJheSkgPT4ge1xuICAgIGFsaWFzQXJyYXkgPSAhYWxpYXNBcnJheSB8fCBhbGlhc0FycmF5LmZpbHRlcihpID0+IGkpLmxlbmd0aCA9PT0gMCA/IFsnUmVmOiddIDogYWxpYXNBcnJheTtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJygnICsgYWxpYXNBcnJheS5qb2luKCd8JykudG9Mb3dlckNhc2UoKSArICcpJyArICc6P1xcXFxzJyk7XG4gICAgLy8gc3BsaXQgZGVzY3JpcHRpb24gaW4gbGluZXNcbiAgICBsZXQgYWxpYXM7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MaW5lcyA9IGRlc2NyaXB0aW9uLnNwbGl0KC9cXHI/XFxuLylcbiAgICAgICAgLy8gZmluZCBtYXRjaFxuICAgICAgICAuZmlsdGVyKGxpbmUgPT4ge1xuICAgICAgICBpZiAobGluZS50b0xvd2VyQ2FzZSgpLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgYWxpYXMgPSBsaW5lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShyZWdleCwgJycpLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyByZXR1cm4gb2JqZWN0XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25MaW5lcy5qb2luKCdcXG4nKVxuICAgIH07XG59O1xuY29uc3QgYWRkQWxpYXMgPSAoYWxpYXMpID0+IGFsaWFzID8gKHsgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uQWxpYXNdOiBhbGlhcyB9KSA6ICh7fSk7XG5jb25zdCBncmFkaWVudFR5cGUgPSB7XG4gICAgR1JBRElFTlRfTElORUFSOiAnbGluZWFyJyxcbiAgICBHUkFESUVOVF9SQURJQUw6ICdyYWRpYWwnLFxuICAgIEdSQURJRU5UX0FOR1VMQVI6ICdhbmd1bGFyJyxcbiAgICBHUkFESUVOVF9ESUFNT05EOiAnZGlhbW9uZCdcbn07XG5jb25zdCBpc0dyYWRpZW50ID0gKHBhaW50KSA9PiBbJ0dSQURJRU5UX0xJTkVBUicsICdHUkFESUVOVF9SQURJQUwnLCAnR1JBRElFTlRfQU5HVUxBUicsICdHUkFESUVOVF9ESUFNT05EJ10uaW5jbHVkZXMocGFpbnQgPT09IG51bGwgfHwgcGFpbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaW50LnR5cGUpO1xuY29uc3Qgcm90YXRpb25Gcm9tTWF0cml4ID0gKFtbeDEsIHkxXSwgW3gyLCB5Ml1dKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ5MDk1ODYvZmluZC1yb3RhdGlvbi1hbmdsZS1mb3ItYWZmaW5lLXRyYW5zZm9ybVxuICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKSAqICgxODAuMCAvIE1hdGguUEkpICsgMzE1O1xuICAgIHJldHVybiBhbmdsZSA+IDM2MCA/IGFuZ2xlIC0gMzYwIDogYW5nbGU7XG59O1xuY29uc3QgZXh0cmFjdEZpbGxzID0gKHBhaW50KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwYWludC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvbnZlcnRQYWludFRvUmdiYShwYWludCksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6ICgoX2EgPSBwYWludC5ibGVuZE1vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpKSB8fCAnbm9ybWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoWydHUkFESUVOVF9MSU5FQVInLCAnR1JBRElFTlRfUkFESUFMJywgJ0dSQURJRU5UX0FOR1VMQVInLCAnR1JBRElFTlRfRElBTU9ORCddLmluY2x1ZGVzKHBhaW50LnR5cGUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncmFkaWVudFR5cGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ3JhZGllbnRUeXBlW3BhaW50LnR5cGVdLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm90YXRpb246IHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDkwOTU4Ni9maW5kLXJvdGF0aW9uLWFuZ2xlLWZvci1hZmZpbmUtdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdGF0aW9uRnJvbU1hdHJpeChwYWludC5ncmFkaWVudFRyYW5zZm9ybSksXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgdW5pdDogJ2RlZ3JlZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9wczogcGFpbnQuZ3JhZGllbnRTdG9wcy5tYXAoc3RvcCA9PiAoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhzdG9wLnBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFJnYmEoc3RvcC5jb2xvciksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xvcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKHBhaW50Lm9wYWNpdHkpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJldHVybiBudWxsIGlmIG5vIG1hdGNoaW5nIHR5cGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGV4dHJhY3RDb2xvcnMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgYWxsIHBhaW50IHN0eWxlc1xuICAgIHJldHVybiB0b2tlbk5vZGVzXG4gICAgICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIG5vZGUpID0+IHtcbiAgICAgICAgLy8gaWdub3JlIGltYWdlLW9ubHkgZmlsbHNcbiAgICAgICAgY29uc3QgcGFpbnRzQWZ0ZXJJbWFnZUZpbHRlciA9IG5vZGUucGFpbnRzLmZpbHRlcihwYWludCA9PiBwYWludC50eXBlICE9PSAnSU1BR0UnKTtcbiAgICAgICAgaWYgKG5vZGUucGFpbnRzLmxlbmd0aCAmJiBwYWludHNBZnRlckltYWdlRmlsdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIGltYWdlcyBmaWxscyBmcm9tIHRva2Vuc1xuICAgICAgICBub2RlLnBhaW50cyA9IHBhaW50c0FmdGVySW1hZ2VGaWx0ZXI7XG4gICAgICAgIGNvbnN0IHsgYWxpYXMsIGRlc2NyaXB0aW9uIH0gPSBwYXJzZURlc2NyaXB0aW9uKG5vZGUuZGVzY3JpcHRpb24sIHByZWZpeEFycmF5LmFsaWFzKTtcbiAgICAgICAgY29uc3Qgbm9kZUlzR3JhZGllbnQgPSBpc0dyYWRpZW50KG5vZGUucGFpbnRzWzBdKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gbm9kZS5wYWludHMubGVuZ3RoID8gbm9kZS5wYWludHMubWFwKHBhaW50ID0+IGV4dHJhY3RGaWxscyhwYWludCkpIDogW3RyYW5zcGFyZW50RmlsbF07XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5wcmV2aW91c1ZhbHVlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGAke25vZGVJc0dyYWRpZW50ID8gcHJlZml4QXJyYXkuZ3JhZGllbnRbMF0gOiBwcmVmaXhBcnJheS5jb2xvclswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogbm9kZUlzR3JhZGllbnQgPyAnZ3JhZGllbnQnIDogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IChub2RlSXNHcmFkaWVudCA/IHRva2VuVHlwZXMuZ3JhZGllbnQua2V5IDogdG9rZW5UeXBlcy5jb2xvci5rZXkpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczoge1xuICAgICAgICAgICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXTogT2JqZWN0LmFzc2lnbih7IFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsIGV4cG9ydEtleTogKG5vZGVJc0dyYWRpZW50ID8gdG9rZW5UeXBlcy5ncmFkaWVudC5rZXkgOiB0b2tlblR5cGVzLmNvbG9yLmtleSkgfSwgKGFkZEFsaWFzKGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH0sIFtdKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0Q29sb3JzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyByb3VuZFJnYmEgfSBmcm9tICdAdXRpbHMvY29udmVydENvbG9yJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZWZmZWN0VHlwZSA9IHtcbiAgICBMQVlFUl9CTFVSOiAnbGF5ZXJCbHVyJyxcbiAgICBCQUNLR1JPVU5EX0JMVVI6ICdiYWNrZ3JvdW5kQmx1cicsXG4gICAgRFJPUF9TSEFET1c6ICdkcm9wU2hhZG93JyxcbiAgICBJTk5FUl9TSEFET1c6ICdpbm5lclNoYWRvdydcbn07XG5jb25zdCBibHVyVmFsdWVzID0gKGVmZmVjdCkgPT4gKHtcbiAgICBlZmZlY3RUeXBlOiB7XG4gICAgICAgIHZhbHVlOiBlZmZlY3RUeXBlW2VmZmVjdC50eXBlXSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHJhZGl1czoge1xuICAgICAgICB2YWx1ZTogZWZmZWN0LnJhZGl1cyxcbiAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9XG59KTtcbmNvbnN0IHNoYWRvd1ZhbHVlcyA9IGVmZmVjdCA9PiAoe1xuICAgIGVmZmVjdFR5cGU6IHtcbiAgICAgICAgdmFsdWU6IGVmZmVjdFR5cGVbZWZmZWN0LnR5cGVdLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgcmFkaXVzOiB7XG4gICAgICAgIHZhbHVlOiBlZmZlY3QucmFkaXVzLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6IHJvdW5kUmdiYShlZmZlY3QuY29sb3IpLFxuICAgICAgICB0eXBlOiAnY29sb3InXG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgICAgeDoge1xuICAgICAgICAgICAgdmFsdWU6IGVmZmVjdC5vZmZzZXQueCxcbiAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICB5OiB7XG4gICAgICAgICAgICB2YWx1ZTogZWZmZWN0Lm9mZnNldC55LFxuICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNwcmVhZDoge1xuICAgICAgICB2YWx1ZTogZWZmZWN0LnNwcmVhZCxcbiAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9XG59KTtcbmNvbnN0IGV4dHJhY3RFZmZlY3RzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gZ2V0IGVmZmVjdCBzdHlsZXNcbiAgICByZXR1cm4gdG9rZW5Ob2Rlc1xuICAgICAgICAvLyByZW1vdmUgdG9rZW5zIHdpdGggbm8gZ3JpZFxuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5lZmZlY3RzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGJ1aWxkXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBgJHtwcmVmaXhBcnJheVswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgY2F0ZWdvcnk6ICdlZmZlY3QnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuZWZmZWN0LmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBub2RlLmVmZmVjdHMubWFwKChlZmZlY3QpID0+IGVmZmVjdC50eXBlID09PSAnTEFZRVJfQkxVUicgfHwgZWZmZWN0LnR5cGUgPT09ICdCQUNLR1JPVU5EX0JMVVInXG4gICAgICAgICAgICA/IGJsdXJWYWx1ZXMoZWZmZWN0KVxuICAgICAgICAgICAgOiBzaGFkb3dWYWx1ZXMoZWZmZWN0KSksXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgW2NvbmZpZy5rZXkuZXh0ZW5zaW9uRmlnbWFTdHlsZUlkXTogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuZWZmZWN0LmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RFZmZlY3RzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgcm91bmRXaXRoRGVjaW1hbHMgZnJvbSAnQHV0aWxzL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgdGV4dERlY29yYXRpb25zID0ge1xuICAgIE5PTkU6ICdub25lJyxcbiAgICBVTkRFUkxJTkU6ICd1bmRlcmxpbmUnLFxuICAgIFNUUklLRVRIUk9VR0g6ICdsaW5lLXRocm91Z2gnXG59O1xuY29uc3QgdGV4dENhc2VzID0ge1xuICAgIE9SSUdJTkFMOiAnbm9uZScsXG4gICAgVVBQRVI6ICd1cHBlcmNhc2UnLFxuICAgIExPV0VSOiAnbG93ZXJjYXNlJyxcbiAgICBUSVRMRTogJ2NhcGl0YWxpemUnLFxuICAgIFNNQUxMX0NBUFM6ICdzbWFsbC1jYXBzJ1xufTtcbmNvbnN0IGZvbnRXZWlnaHRzID0ge1xuICAgIDEwMDogMTAwLFxuICAgIHRoaW46IDEwMCxcbiAgICB3MTogMTAwLFxuICAgIDIwMDogMjAwLFxuICAgIHcyOiAyMDAsXG4gICAgZXh0cmFsaWdodDogMjAwLFxuICAgIHVsdHJhbGlnaHQ6IDIwMCxcbiAgICBleHRyYWxlaWNodDogMjAwLFxuICAgIDMwMDogMzAwLFxuICAgIGxpZ2h0OiAzMDAsXG4gICAgbGVpY2h0OiAzMDAsXG4gICAgdzM6IDMwMCxcbiAgICA0MDA6IDQwMCxcbiAgICBub3JtYWw6IDQwMCxcbiAgICByZWd1bGFyOiA0MDAsXG4gICAgYnVjaDogNDAwLFxuICAgIHc0OiA0MDAsXG4gICAgNTAwOiA1MDAsXG4gICAgbWVkaXVtOiA1MDAsXG4gICAga3JhZWZ0aWc6IDUwMCxcbiAgICBrcsOkZnRpZzogNTAwLFxuICAgIHc1OiA1MDAsXG4gICAgNjAwOiA2MDAsXG4gICAgc2VtaWJvbGQ6IDYwMCxcbiAgICBkZW1pYm9sZDogNjAwLFxuICAgIGhhbGJmZXR0OiA2MDAsXG4gICAgdzY6IDYwMCxcbiAgICA3MDA6IDcwMCxcbiAgICBib2xkOiA3MDAsXG4gICAgZHJlaXZpZXJ0ZWxmZXR0OiA3MDAsXG4gICAgdzc6IDcwMCxcbiAgICA4MDA6IDgwMCxcbiAgICBleHRyYWJvbGQ6IDgwMCxcbiAgICB1bHRhYm9sZDogODAwLFxuICAgIGZldHQ6IDgwMCxcbiAgICB3ODogODAwLFxuICAgIDkwMDogOTAwLFxuICAgIGJsYWNrOiA5MDAsXG4gICAgaGVhdnk6IDkwMCxcbiAgICBzdXBlcjogOTAwLFxuICAgIGV4dHJhZmV0dDogOTAwLFxuICAgIHc5OiA5MDBcbn07XG5jb25zdCBmb250U3RyZXRjaCA9IHtcbiAgICBub3JtYWw6ICdub3JtYWwnLFxuICAgIGNvbmRlbnNlZDogJ2NvbmRlbnNlZCcsXG4gICAgZXhwYW5kZWQ6ICdleHBhbmRlZCcsXG4gICAgZXh0ZW5kZWQ6ICdleHBhbmRlZCdcbn07XG5jb25zdCBmb250U3R5bGVzID0ge1xuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgaXRhbGljOiAnaXRhbGljJyxcbiAgICBrdXJzaXY6ICdpdGFsaWMnLFxuICAgIG9ibGlxdWU6ICdvYmxpcXVlJ1xufTtcbmNvbnN0IHBhcnNlRm9udFdlaWdodCA9IChmb250U3R5bGUpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IGZvbnRTdHlsZS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyk7XG4gICAgbGV0IHdlaWdodCA9IHBhcnRzWzBdO1xuICAgIC8vIG1lcmdlIGlmIHNwYWNlIGFmdGVyIGV4dHJhXG4gICAgaWYgKFsnZXh0cmEnLCAndWx0cmEnLCAnc2VtaScsICdkZW1pJ10uaW5jbHVkZXMocGFydHNbMF0pICYmIFsnYm9sZCcsICdsaWdodCddLmluY2x1ZGVzKHBhcnRzWzFdKSkge1xuICAgICAgICB3ZWlnaHQgPSBgJHtwYXJ0c1swXX0ke3BhcnRzWzFdfWA7XG4gICAgfVxuICAgIHJldHVybiBmb250V2VpZ2h0c1t3ZWlnaHRdIHx8IDQwMDtcbn07XG5jb25zdCBwYXJzZUZvbnRTdHJldGNoID0gKGZvbnRTdHlsZSkgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gZm9udFN0eWxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4gZm9udFN0cmV0Y2hbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dIHx8IGZvbnRTdHJldGNoW3BhcnRzW3BhcnRzLmxlbmd0aCAtIDJdXSB8fCAnbm9ybWFsJztcbn07XG5jb25zdCBwYXJzZUZvbnRTdHlsZSA9IChmb250U3R5bGUpID0+IHtcbiAgICBjb25zdCBwYXJ0ID0gZm9udFN0eWxlLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5wb3AoKTtcbiAgICByZXR1cm4gZm9udFN0eWxlc1twYXJ0XSB8fCAnbm9ybWFsJztcbn07XG5jb25zdCBleHRyYWN0Rm9udHMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgcmF3IHRleHQgc3R5bGVzXG4gICAgcmV0dXJuIHRva2VuTm9kZXMubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogYCR7cHJlZml4QXJyYXlbMF19LyR7bm9kZS5uYW1lfWAsXG4gICAgICAgIGNhdGVnb3J5OiAnZm9udCcsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5mb250LmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGZvbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRleHREZWNvcmF0aW9uc1tub2RlLnRleHREZWNvcmF0aW9uXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZS5mb250TmFtZS5mYW1pbHksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb250V2VpZ2h0OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlRm9udFdlaWdodChub2RlLmZvbnROYW1lLnN0eWxlKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHlsZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZvbnRTdHlsZShub2RlLmZvbnROYW1lLnN0eWxlKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvbnRTdHJldGNoOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlRm9udFN0cmV0Y2gobm9kZS5mb250TmFtZS5zdHlsZSksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZm9udFN0eWxlT2xkOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUuZm9udE5hbWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvdW5kV2l0aERlY2ltYWxzKG5vZGUubGV0dGVyU3BhY2luZy52YWx1ZSksXG4gICAgICAgICAgICAgICAgdW5pdDogKG5vZGUubGV0dGVyU3BhY2luZy51bml0LnRvTG93ZXJDYXNlKCkgPT09ICdwaXhlbHMnID8gJ3BpeGVsJyA6IG5vZGUubGV0dGVyU3BhY2luZy51bml0LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZUhlaWdodDoge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5saW5lSGVpZ2h0LnZhbHVlKSB8fCAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICB1bml0OiBub2RlLmxpbmVIZWlnaHQudW5pdC50b0xvd2VyQ2FzZSgpID09PSAncGl4ZWxzJyA/ICdwaXhlbCcgOiBub2RlLmxpbmVIZWlnaHQudW5pdC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHR5cGU6IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZS5saW5lSGVpZ2h0LCAndmFsdWUnKSA/ICdudW1iZXInIDogJ3N0cmluZycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYWdyYXBoSW5kZW50OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucGFyYWdyYXBoSW5kZW50LFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJhZ3JhcGhTcGFjaW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucGFyYWdyYXBoU3BhY2luZyxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGV4dENhc2U6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGV4dENhc2VzW25vZGUudGV4dENhc2VdIHx8ICdub25lJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmZvbnQua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdEZvbnRzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGdyaWRWYWx1ZXMgPSAoZ3JpZCkgPT4gKHtcbiAgICBwYXR0ZXJuOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnBhdHRlcm4udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIHNlY3Rpb25TaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnNlY3Rpb25TaXplLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH1cbn0pO1xuY29uc3QgZ2V0Q291bnQgPSBjb3VudCA9PiB7XG4gICAgaWYgKGNvdW50ID09PSBJbmZpbml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6ICdhdXRvJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBjb3VudCxcbiAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9O1xufTtcbmNvbnN0IHJvd0NvbHVtblZhbHVlcyA9IChncmlkKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBwYXR0ZXJuOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnBhdHRlcm4udG9Mb3dlckNhc2UoKSxcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9IH0sIChncmlkLnNlY3Rpb25TaXplICE9PSB1bmRlZmluZWQgJiYge1xuICAgIHNlY3Rpb25TaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLnNlY3Rpb25TaXplLFxuICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH1cbn0pKSwgeyBndXR0ZXJTaXplOiB7XG4gICAgICAgIHZhbHVlOiBncmlkLmd1dHRlclNpemUsXG4gICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfSwgYWxpZ25tZW50OiB7XG4gICAgICAgIHZhbHVlOiBncmlkLmFsaWdubWVudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sIGNvdW50OiBnZXRDb3VudChncmlkLmNvdW50KSB9KSwgKGdyaWQub2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYge1xuICAgIG9mZnNldDoge1xuICAgICAgICB2YWx1ZTogZ3JpZC5vZmZzZXQsXG4gICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgfVxufSkpKTtcbmNvbnN0IGV4dHJhY3RHcmlkcyA9ICh0b2tlbk5vZGVzLCBwcmVmaXhBcnJheSkgPT4ge1xuICAgIC8vIGdldCBncmlkIHN0eWxlc1xuICAgIHJldHVybiB0b2tlbk5vZGVzXG4gICAgICAgIC8vIHJlbW92ZSB0b2tlbnMgd2l0aCBubyBncmlkXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmxheW91dEdyaWRzLmxlbmd0aCA+IDApXG4gICAgICAgIC8vIGJ1aWxkXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBgJHtwcmVmaXhBcnJheVswXX0vJHtub2RlLm5hbWV9YCxcbiAgICAgICAgY2F0ZWdvcnk6ICdncmlkJyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmdyaWQua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IG5vZGUubGF5b3V0R3JpZHMubWFwKChncmlkKSA9PiBncmlkLnBhdHRlcm4gPT09ICdHUklEJyA/IGdyaWRWYWx1ZXMoZ3JpZCkgOiByb3dDb2x1bW5WYWx1ZXMoZ3JpZCkpLFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvbkZpZ21hU3R5bGVJZF06IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLmdyaWQua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdEdyaWRzO1xuIiwiaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVByZWZpeCB9IGZyb20gJy4vZXh0cmFjdFV0aWxpdGllcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGRpcmVjdGlvbiA9ICh0cmFuc2l0aW9uKSA9PiB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc2l0aW9uLCAnZGlyZWN0aW9uJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0cmFuc2l0aW9uLmRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGVhc2luZ3MgPSB7XG4gICAgQ1VTVE9NX0NVQklDX0JFWklFUjoge1xuICAgICAgICB0eXBlOiAnY3VzdG9tLWN1YmljQmV6aWVyJyxcbiAgICAgICAgY3VydmVUeXBlOiAnY3ViaWNCZXppZXInLFxuICAgICAgICBlYXNpbmc6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgQ1VTVE9NX1NQUklORzoge1xuICAgICAgICB0eXBlOiAnY3VzdG9tLXNwcmluZycsXG4gICAgICAgIGN1cnZlVHlwZTogJ3NwcmluZycsXG4gICAgICAgIGVhc2luZzogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBMSU5FQVI6IHtcbiAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IDEsXG4gICAgICAgICAgICB5MjogMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBFQVNFX0lOOiB7XG4gICAgICAgIHR5cGU6ICdlYXNlLWluJyxcbiAgICAgICAgY3VydmVUeXBlOiAnY3ViaWNCZXppZXInLFxuICAgICAgICBlYXNpbmc6IHtcbiAgICAgICAgICAgIHgxOiAwLjQxOTk5OTk4Njg4Njk3ODE1LFxuICAgICAgICAgICAgeTE6IDAsXG4gICAgICAgICAgICB4MjogMSxcbiAgICAgICAgICAgIHkyOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfT1VUOiB7XG4gICAgICAgIHR5cGU6ICdlYXNlLW91dCcsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IDAuNTc5OTk5OTgzMzEwNjk5NSxcbiAgICAgICAgICAgIHkyOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfSU5fQU5EX09VVDoge1xuICAgICAgICB0eXBlOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNDE5OTk5OTg2ODg2OTc4MTUsXG4gICAgICAgICAgICB5MTogMCxcbiAgICAgICAgICAgIHgyOiAwLjU3OTk5OTk4MzMxMDY5OTUsXG4gICAgICAgICAgICB5MjogMVxuICAgICAgICB9XG4gICAgfSxcbiAgICBFQVNFX0lOX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2UtaW4tYmFjaycsXG4gICAgICAgIGN1cnZlVHlwZTogJ2N1YmljQmV6aWVyJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICB4MTogMC4zMDAwMDAwMTE5MjA5Mjg5NixcbiAgICAgICAgICAgIHkxOiAtMC4wNTAwMDAwMDA3NDUwNTgwNixcbiAgICAgICAgICAgIHgyOiAwLjY5OTk5OTk4ODA3OTA3MSxcbiAgICAgICAgICAgIHkyOiAtMC41XG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVBU0VfT1VUX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2Utb3V0LWJhY2snLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNDQ5OTk5OTg4MDc5MDcxMDQsXG4gICAgICAgICAgICB5MTogMS40NTAwMDAwNDc2ODM3MTU4LFxuICAgICAgICAgICAgeDI6IDAuODAwMDAwMDExOTIwOTI5LFxuICAgICAgICAgICAgeTI6IDFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgRUFTRV9JTl9BTkRfT1VUX0JBQ0s6IHtcbiAgICAgICAgdHlwZTogJ2Vhc2UtaW4tb3V0LWJhY2snLFxuICAgICAgICBjdXJ2ZVR5cGU6ICdjdWJpY0JlemllcicsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgeDE6IDAuNjk5OTk5OTg4MDc5MDcxLFxuICAgICAgICAgICAgeTE6IC0wLjQwMDAwMDAwNTk2MDQ2NDUsXG4gICAgICAgICAgICB4MjogMC40MDAwMDAwMDU5NjA0NjQ1LFxuICAgICAgICAgICAgeTI6IDEuMzk5OTk5OTc2MTU4MTQyXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEJPVU5DWToge1xuICAgICAgICB0eXBlOiAnYm91bmN5JyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA2MDAsXG4gICAgICAgICAgICBkYW1waW5nOiAxNVxuICAgICAgICB9XG4gICAgfSxcbiAgICBHRU5UTEU6IHtcbiAgICAgICAgdHlwZTogJ2dlbnRsZScsXG4gICAgICAgIGN1cnZlVHlwZTogJ3NwcmluZycsXG4gICAgICAgIGVhc2luZzoge1xuICAgICAgICAgICAgbWFzczogMSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgZGFtcGluZzogMTVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUVVJQ0s6IHtcbiAgICAgICAgdHlwZTogJ3F1aWNrJyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAzMDAsXG4gICAgICAgICAgICBkYW1waW5nOiAyMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBTTE9XOiB7XG4gICAgICAgIHR5cGU6ICdzbG93JyxcbiAgICAgICAgY3VydmVUeXBlOiAnc3ByaW5nJyxcbiAgICAgICAgZWFzaW5nOiB7XG4gICAgICAgICAgICBtYXNzOiAxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA4MCxcbiAgICAgICAgICAgIGRhbXBpbmc6IDIwXG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZm9ybWF0RWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdPYmplY3QgPT4ge1xuICAgIC8vIHNwcmluZyBjdXJ2ZVxuICAgIGlmIChlYXNpbmdPYmplY3QuY3VydmVUeXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFzczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLm1hc3MsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGlmZm5lc3M6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWFzaW5nT2JqZWN0LmVhc2luZy5zdGlmZm5lc3MsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYW1waW5nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGVhc2luZ09iamVjdC5lYXNpbmcuZGFtcGluZyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBzcHJpbmcgYmV6aWVyXG4gICAgaWYgKGVhc2luZ09iamVjdC5jdXJ2ZVR5cGUgPT09ICdjdWJpY0JlemllcicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHgxOiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLngxLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeDI6IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdmFsdWU6IGVhc2luZ09iamVjdC5lYXNpbmcueDIsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5MToge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB2YWx1ZTogZWFzaW5nT2JqZWN0LmVhc2luZy55MSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHkyOiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdPYmplY3QuZWFzaW5nLnkyLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGVhc2luZyA9IChlYXNpbmcpID0+IHtcbiAgICAvLyBhYm9ydCBpZiBpbnZhbGlkIGVhc2luZyB0eXBlXG4gICAgaWYgKCEoJ3R5cGUnIGluIGVhc2luZykgfHwgZWFzaW5nc1tlYXNpbmcudHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyByZXR1cm4gY3VzdG9tIGVhc2luZ1xuICAgIGlmIChlYXNpbmcudHlwZSA9PT0gJ0NVU1RPTV9DVUJJQ19CRVpJRVInKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWFzaW5ncy5DVVNUT01fQ1VCSUNfQkVaSUVSLmVhc2luZyA9IHtcbiAgICAgICAgICAgIHgxOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci54MSxcbiAgICAgICAgICAgIHkxOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci55MSxcbiAgICAgICAgICAgIHgyOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci54MixcbiAgICAgICAgICAgIHkyOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25DdWJpY0Jlemllci55MlxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBUT0RPOiByZW1vdmUgd2hlbiBmaWdtYSB0eXBpbmdzIGFyZSB1cGRhdGVkXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmIChlYXNpbmcudHlwZSA9PT0gJ0NVU1RPTV9TUFJJTkcnKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZWFzaW5ncy5DVVNUT01fU1BSSU5HLmVhc2luZyA9IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG1hc3M6IGVhc2luZy5lYXNpbmdGdW5jdGlvblNwcmluZy5tYXNzLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc3RpZmZuZXNzOiBlYXNpbmcuZWFzaW5nRnVuY3Rpb25TcHJpbmcuc3RpZmZuZXNzLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZGFtcGluZzogZWFzaW5nLmVhc2luZ0Z1bmN0aW9uU3ByaW5nLmRhbXBpbmdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWFzaW5nVHlwZToge1xuICAgICAgICAgICAgdmFsdWU6IGVhc2luZ3NbZWFzaW5nLnR5cGVdLnR5cGUsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBlYXNpbmdDdXJ2ZVR5cGU6IHtcbiAgICAgICAgICAgIHZhbHVlOiBlYXNpbmdzW2Vhc2luZy50eXBlXS5jdXJ2ZVR5cGUsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjogZm9ybWF0RWFzaW5nRnVuY3Rpb24oZWFzaW5nc1tlYXNpbmcudHlwZV0pXG4gICAgfTtcbn07XG5jb25zdCBmaWx0ZXJWYWxpZE1vdGlvblRva2VucyA9IChub2RlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHZhbGlkRWFzaW5nVHlwZXMgPSBPYmplY3Qua2V5cyhlYXNpbmdzKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKG5vZGUucmVhY3Rpb25zLmxlbmd0aCA+IDAgJiYgKChfYSA9IG5vZGUucmVhY3Rpb25zWzBdLmFjdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnR5cGUpID09PSAnTk9ERScgJiYgbm9kZS5yZWFjdGlvbnNbMF0uYWN0aW9uLnRyYW5zaXRpb24gIT09IG51bGwgJiYgdmFsaWRFYXNpbmdUeXBlcy5pbmNsdWRlcyhub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbi5lYXNpbmcudHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBleHRyYWN0TW90aW9uID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC8vIGZpbHRlciB0byBvbmx5IGluY2x1ZGUgaXRlbXMgd2hpY2ggaGF2ZSBhIHRyYW5zaXRpb24gcHJvcGVydHlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJWYWxpZE1vdGlvblRva2VucylcbiAgICAgICAgLy8gcmV0cmlldmUgdmFsdWVzXG4gICAgICAgIC5tYXAoKG5vZGUpID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdtb3Rpb24nLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMubW90aW9uLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyB0cmFuc2l0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbi50eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQoKG5vZGUucmVhY3Rpb25zWzBdLmFjdGlvbi50cmFuc2l0aW9uLmR1cmF0aW9uICsgTnVtYmVyLkVQU0lMT04pICogMTAwMCkgLyAxMDAwLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSB9LCBlYXNpbmcobm9kZS5yZWFjdGlvbnNbMF0uYWN0aW9uLnRyYW5zaXRpb24uZWFzaW5nKSksIGRpcmVjdGlvbihub2RlLnJlYWN0aW9uc1swXS5hY3Rpb24udHJhbnNpdGlvbikpLFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5tb3Rpb24ua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1vdGlvbjtcbmV4cG9ydCBjb25zdCBfX3Rlc3RpbmcgPSB7XG4gICAgZWFzaW5nOiBlYXNpbmdcbn07XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICdAdXRpbHMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0T3BhY2l0aWVzID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdvcGFjaXR5JyxcbiAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLm9wYWNpdHkua2V5LFxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCBudWxsLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5vcGFjaXR5LCAyKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5vcGFjaXR5LmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RPcGFjaXRpZXM7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICdAdXRpbHMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0UmFkaWkgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyBnZXQgdGhlIHR5cGUgb2YgdGhlIGNvcm5lciByYWRpdXNcbiAgICBjb25zdCBnZXRSYWRpdXNUeXBlID0gcmFkaXVzID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3NpbmdsZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdtaXhlZCc7XG4gICAgfTtcbiAgICAvLyBnZXQgdGhlIGluZGl2aWR1YWwgcmFkaWlcbiAgICBjb25zdCBnZXRSYWRpaSA9IChub2RlKSA9PiAoe1xuICAgICAgICB0b3BMZWZ0OiB7XG4gICAgICAgICAgICB2YWx1ZTogbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgdG9wUmlnaHQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLnRvcFJpZ2h0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDAsXG4gICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgfSxcbiAgICAgICAgYm90dG9tTGVmdDoge1xuICAgICAgICAgICAgdmFsdWU6IG5vZGUuYm90dG9tTGVmdFJhZGl1cyB8fCAwLFxuICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyByZXR1cm4gYXMgb2JqZWN0XG4gICAgcmV0dXJuIHRva2VuTm9kZXMuZmlsdGVyKGZpbHRlckJ5UHJlZml4KHByZWZpeEFycmF5KSlcbiAgICAgICAgLm1hcChub2RlID0+ICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgY2F0ZWdvcnk6ICdyYWRpdXMnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMucmFkaXVzLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sICh0eXBlb2Ygbm9kZS5jb3JuZXJSYWRpdXMgPT09ICdudW1iZXInICYmIHtcbiAgICAgICAgICAgIHJhZGl1czoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLmNvcm5lclJhZGl1cyxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgeyByYWRpdXNUeXBlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGdldFJhZGl1c1R5cGUobm9kZS5jb3JuZXJSYWRpdXMpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICB9LCByYWRpaTogZ2V0UmFkaWkobm9kZSksIHNtb290aGluZzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLmNvcm5lclNtb290aGluZywgMiksXG4gICAgICAgICAgICAgICAgY29tbWVudDogJ1BlcmNlbnQgYXMgZGVjaW1hbCBmcm9tIDAuMCAtIDEuMCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnJhZGl1cy5rZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBleHRyYWN0UmFkaWk7XG4iLCJpbXBvcnQgeyB0b2tlblR5cGVzIH0gZnJvbSAnQGNvbmZpZy90b2tlblR5cGVzJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICdAdXRpbHMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IHsgZmlsdGVyQnlQcmVmaXggfSBmcm9tICcuL2V4dHJhY3RVdGlsaXRpZXMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBleHRyYWN0U2l6ZXMgPSAodG9rZW5Ob2RlcywgcHJlZml4QXJyYXkpID0+IHtcbiAgICAvLyByZXR1cm4gYXMgb2JqZWN0XG4gICAgcmV0dXJuIHRva2VuTm9kZXMuZmlsdGVyKGZpbHRlckJ5UHJlZml4KHByZWZpeEFycmF5KSkubWFwKG5vZGUgPT4gKHtcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICBjYXRlZ29yeTogJ3NpemUnLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMuc2l6ZS5rZXksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBub2RlLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS53aWR0aCwgMiksXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLmhlaWdodCwgMiksXG4gICAgICAgICAgICAgICAgdW5pdDogJ3BpeGVsJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICBbY29uZmlnLmtleS5leHRlbnNpb25QbHVnaW5EYXRhXToge1xuICAgICAgICAgICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5zaXplLmtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RTaXplcztcbiIsImltcG9ydCB7IHRva2VuVHlwZXMgfSBmcm9tICdAY29uZmlnL3Rva2VuVHlwZXMnO1xuaW1wb3J0IHJvdW5kV2l0aERlY2ltYWxzIGZyb20gJ0B1dGlscy9yb3VuZFdpdGhEZWNpbWFscyc7XG5pbXBvcnQgeyBmaWx0ZXJCeVByZWZpeCB9IGZyb20gJy4vZXh0cmFjdFV0aWxpdGllcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGV4dHJhY3RTcGFjaW5nID0gKHRva2VuTm9kZXMsIHByZWZpeEFycmF5KSA9PiB7XG4gICAgLy8gcmV0dXJuIGFzIG9iamVjdFxuICAgIHJldHVybiB0b2tlbk5vZGVzLmZpbHRlcihmaWx0ZXJCeVByZWZpeChwcmVmaXhBcnJheSkpXG4gICAgICAgIC5tYXAobm9kZSA9PiAoe1xuICAgICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICAgIGNhdGVnb3J5OiAnc3BhY2luZycsXG4gICAgICAgIGV4cG9ydEtleTogdG9rZW5UeXBlcy5zcGFjaW5nLmtleSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5vZGUuZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nVG9wLCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nUmlnaHQsIDIpLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICdwaXhlbCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3R0b206IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRXaXRoRGVjaW1hbHMobm9kZS5wYWRkaW5nQm90dG9tLCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiByb3VuZFdpdGhEZWNpbWFscyhub2RlLnBhZGRpbmdMZWZ0LCAyKSxcbiAgICAgICAgICAgICAgICB1bml0OiAncGl4ZWwnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVuc2lvbnM6IHtcbiAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnNwYWNpbmcua2V5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdFNwYWNpbmc7XG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlQcmVmaXggPSAocHJlZml4QXJyYXkpID0+IG5vZGUgPT4ge1xuICAgIC8vIGFib3J0IGlmIHdyb25nIGFyZ3VtZW50XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHByZWZpeEFycmF5KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGV4dHJhY3QgcHJlZml4IGZyb20gbm9kZSBuYW1lXG4gICAgY29uc3Qgbm9kZVByZWZpeCA9IG5vZGUubmFtZS5zdWJzdHIoMCwgbm9kZS5uYW1lLmluZGV4T2YoJy8nKSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgLy8gYWJvcnQgaWYgbm8gcHJlZml4XG4gICAgaWYgKG5vZGVQcmVmaXgubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHByZWZpeEFycmF5LmluY2x1ZGVzKG5vZGVQcmVmaXgpO1xufTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBAbmFtZSBnZXRBY2Nlc3NUb2tlblxuICogQGRlc2NyaXB0aW9uIHJldHVybnMgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgZmlsZSBvciB1bmRlZmluZWRcbiAqIEBwYXJhbSBmaWxlSWQge3N0cmluZ30g4oCUIElEIG9mIHRoZSBjdXJyZW50IGZpbGVcbiAqL1xuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAoZmlsZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBnZXQgYWxsIGFjY2VzcyB0b2tlbnNcbiAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKCdhY2Nlc3NUb2tlbnMnKTtcbiAgICAvLyBpZiBhY2Nlc3MgdG9rZW5zIG9iamVjdCBpcyBwcmVzZW50XG4gICAgaWYgKGFjY2Vzc1Rva2VucyAhPT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VucyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5zW2ZpbGVJZF07XG4gICAgICAgIC8vIHJldHVybiB0aGUgYWNjZXNzIHRva2VuIG9yIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW4gfHwgJyc7XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSBzdHJpbmcgaWYgbm8gdG9rZW4gaXMgc3RvcmVkXG4gICAgcmV0dXJuICcnO1xufSk7XG4vKipcbiAqIEBuYW1lIHNldEFjY2Vzc1Rva2VuXG4gKiBAZGVzY3JpcHRpb24gc3RvcmUgdGhlIGFjY2VzcyB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgZ2l2ZW4gZmlsZSBpbiB0aGUgdXNlciBjbGllbnRTdG9yYWdlXG4gKiBAcGFyYW0gZmlsZUlkIHtzdHJpbmd9IOKAlCBJRCBvZiB0aGUgY3VycmVudCBmaWxlXG4gKiBAcGFyYW0gZmlsZUlkIHtzdHJpbmd9IOKAlCBhY2Nlc3MgdG9rZW5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IHNldEFjY2Vzc1Rva2VuID0gKGZpbGVJZCwgYWNjZXNzVG9rZW4pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIGdldCB0aGUgYWNjZXNzIHRva2VuIG9iamVjdFxuICAgIGNvbnN0IGFjY2Vzc1Rva2VucyA9ICh5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKCdhY2Nlc3NUb2tlbnMnKSkgfHwge307XG4gICAgLy8gbWVyZ2UgdG9rZW5zXG4gICAgY29uc3QgbWVyZ2VkVG9rZW5zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2Nlc3NUb2tlbnMpLCB7IFtmaWxlSWRdOiBhY2Nlc3NUb2tlbiB9KTtcbiAgICAvLyBtZXJnZSB0aGUgbmV3IHRva2VuIGludG8gdGhlIG9iamVjdFxuICAgIHJldHVybiB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKCdhY2Nlc3NUb2tlbnMnLCBtZXJnZWRUb2tlbnMpO1xufSk7XG5leHBvcnQgeyBnZXRBY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW4gfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGZpbHRlckJ5UHJvcGVydHlOYW1lIGZyb20gJ0B1dGlscy9maWx0ZXJCeU5hbWVQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFpbnRTdHlsZXMgZnJvbSAnQHV0aWxzL2dldFBhaW50U3R5bGVzJztcbmltcG9ydCBnZXRHcmlkU3R5bGVzIGZyb20gJ0B1dGlscy9nZXRHcmlkU3R5bGVzJztcbmltcG9ydCBnZXRUb2tlbk5vZGVzIGZyb20gJ0B1dGlscy9nZXRUb2tlbk5vZGVzJztcbmltcG9ydCBnZXRUZXh0U3R5bGVzIGZyb20gJ0B1dGlscy9nZXRUZXh0U3R5bGVzJztcbmltcG9ydCBnZXRFZmZlY3RTdHlsZXMgZnJvbSAnQHV0aWxzL2dldEVmZmVjdFN0eWxlcyc7XG4vKipcbiAqIEBmdW5jdGlvbiBidWlsZEZpZ21hRGF0YSDigJMgcmV0dXJuIGFuIG9iamVjdCB3aXRoIGFsbCBzdHlsZXMgJiBmcmFtZSB0byB1c2UgZm9yIGV4cG9ydFxuICogQHBhcmFtIHtQbHVnaW5BUEl9IGZpZ21hIOKAlCB0aGUgZmlnbWEgUGx1Z2luQVBJIG9iamVjdFxuICogQHBhcmFtIG9wdGlvbnMg4oCTIG9wdGlvbnMgb2JqZWN0XG4gKi9cbmNvbnN0IGJ1aWxkRmlnbWFEYXRhID0gKGZpZ21hLCBzZXR0aW5ncykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gdXNlIHNwcmVhZCBvcGVyYXRvciBiZWNhdXNlIHRoZSBvcmlnaW5hbCBpcyByZWFkT25seVxuICAgIGNvbnN0IHRva2VuRnJhbWVzID0geWllbGQgZ2V0VG9rZW5Ob2RlcyhbLi4uZmlnbWEucm9vdC5jaGlsZHJlbl0pO1xuICAgIC8vIGdldCB1c2VyIGV4Y2x1c2lvbiBwcmVmaXhlc1xuICAgIGNvbnN0IHVzZXJFeGNsdXNpb25QcmVmaXhlcyA9IHNldHRpbmdzLmV4Y2x1c2lvblByZWZpeFxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLnJlcGxhY2UoL1xccysvZywgJycpKTtcbiAgICAvLyBnZXQgZGF0YSBmcm9tIGZpZ21hXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW5GcmFtZXM6IHRva2VuRnJhbWVzLFxuICAgICAgICBwYWludFN0eWxlczogZ2V0UGFpbnRTdHlsZXMoeWllbGQgZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlc0FzeW5jKCkpLmZpbHRlcigoaXRlbSkgPT4gZmlsdGVyQnlQcm9wZXJ0eU5hbWUoaXRlbSwgdXNlckV4Y2x1c2lvblByZWZpeGVzKSksXG4gICAgICAgIGdyaWRTdHlsZXM6IGdldEdyaWRTdHlsZXMoeWllbGQgZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzQXN5bmMoKSkuZmlsdGVyKChpdGVtKSA9PiBmaWx0ZXJCeVByb3BlcnR5TmFtZShpdGVtLCB1c2VyRXhjbHVzaW9uUHJlZml4ZXMpKSxcbiAgICAgICAgdGV4dFN0eWxlczogZ2V0VGV4dFN0eWxlcyh5aWVsZCBmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXNBc3luYygpKS5maWx0ZXIoKGl0ZW0pID0+IGZpbHRlckJ5UHJvcGVydHlOYW1lKGl0ZW0sIHVzZXJFeGNsdXNpb25QcmVmaXhlcykpLFxuICAgICAgICBlZmZlY3RTdHlsZXM6IGdldEVmZmVjdFN0eWxlcyh5aWVsZCBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlc0FzeW5jKCkpLmZpbHRlcigoaXRlbSkgPT4gZmlsdGVyQnlQcm9wZXJ0eU5hbWUoaXRlbSwgdXNlckV4Y2x1c2lvblByZWZpeGVzKSlcbiAgICB9O1xufSk7XG5leHBvcnQgZGVmYXVsdCBidWlsZEZpZ21hRGF0YTtcbiIsImV4cG9ydCBjb25zdCBjaGFuZ2VOb3RhdGlvbiA9IChuYW1lLCBjdXJyZW50RGVsaW1pdGVyID0gJy8nLCBkZXNpcmVkRGVsaW1pdGVyID0gJy4nKSA9PiB7XG4gICAgcmV0dXJuIG5hbWUuc3BsaXQoY3VycmVudERlbGltaXRlcikuam9pbihkZXNpcmVkRGVsaW1pdGVyKS50b0xvd2VyQ2FzZSgpO1xufTtcbiIsImltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICcuL3JvdW5kV2l0aERlY2ltYWxzJztcbmltcG9ydCB7IHRpbnljb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5leHBvcnQgY29uc3Qgcm91bmRSZ2JhID0gKHJnYmEsIG9wYWNpdHkpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIHI6IHJvdW5kV2l0aERlY2ltYWxzKHJnYmEuciAqIDI1NSwgMCksXG4gICAgICAgIGc6IHJvdW5kV2l0aERlY2ltYWxzKHJnYmEuZyAqIDI1NSwgMCksXG4gICAgICAgIGI6IHJvdW5kV2l0aERlY2ltYWxzKHJnYmEuYiAqIDI1NSwgMCksXG4gICAgICAgIGE6IHJvdW5kV2l0aERlY2ltYWxzKChfYSA9IG9wYWNpdHkgIT09IG51bGwgJiYgb3BhY2l0eSAhPT0gdm9pZCAwID8gb3BhY2l0eSA6IHJnYmEuYSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMSlcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgY29udmVydFBhaW50VG9SZ2JhID0gKHBhaW50KSA9PiB7XG4gICAgaWYgKHBhaW50LnR5cGUgPT09ICdTT0xJRCcgJiYgcGFpbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcm91bmRSZ2JhKHBhaW50LmNvbG9yLCBwYWludC5vcGFjaXR5KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRSZ2JhT2JqZWN0VG9TdHJpbmcgPSAocmdiYU9iamVjdCkgPT4gYHJnYmEoJHtyZ2JhT2JqZWN0LnJ9LCAke3JnYmFPYmplY3QuZ30sICR7cmdiYU9iamVjdC5ifSwgJHtyZ2JhT2JqZWN0LmF9KWA7XG5leHBvcnQgY29uc3QgcmdiYU9iamVjdFRvSGV4OCA9IChyZ2JhT2JqZWN0KSA9PiB7XG4gICAgLy8gcmV0dXJuIHZhbHVlXG4gICAgcmV0dXJuIHRpbnljb2xvcihjb252ZXJ0UmdiYU9iamVjdFRvU3RyaW5nKHJnYmFPYmplY3QpKS50b0hleDhTdHJpbmcoKTtcbn07XG4iLCIvKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBtZXJnZSBvZiBgc291cmNlYCBpbnRvIGB0YXJnZXRgLlxuICogTXV0YXRlcyBgdGFyZ2V0YCBvbmx5IGJ1dCBub3QgaXRzIG9iamVjdHMgYW5kIGFycmF5cy5cbiAqXG4gKiBAYXV0aG9yIGluc3BpcmVkIGJ5IFtqaGlsZGVuYmlkZGxlXShodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDgyMTgyMDkpLlxuICovXG5jb25zdCBkZWVwTWVyZ2UgPSAodGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICAvLyBmdW5jdGlvbiB0byB0ZXN0IGlmIGEgdmFyaWFibGUgaXMgYW4gb2JqZWN0XG4gICAgY29uc3QgaXNPYmplY3QgPSAob2JqKSA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG4gICAgLy8gbWFrZSBzdXJlIGJvdGggdGhlIHRhcmdldCBhbmQgdGhlIHNvdXJjZSBhcmUgb2JqZWN0c1xuICAgIC8vIG90aGVyd2lzZSByZXR1cm4gc291cmNlXG4gICAgaWYgKCFpc09iamVjdCh0YXJnZXQpIHx8ICFpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfVxuICAgIC8vIGl0ZXJhdGUgb3ZlciBzb3VyY2VcbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gZ2V0IHZhbHVlcyBmcm9tIGJvdGggdGFyZ2V0IGFuZCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBrZXlcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgY29uc3Qgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgLy8gbWVyZ2UgYm90aCB2YWx1ZXNcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IFsuLi5uZXcgU2V0KHRhcmdldFZhbHVlLmNvbmNhdChzb3VyY2VWYWx1ZSkpXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh0YXJnZXRWYWx1ZSkgJiYgaXNPYmplY3Qoc291cmNlVmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBNZXJnZShPYmplY3QuYXNzaWduKHt9LCB0YXJnZXRWYWx1ZSksIHNvdXJjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlVmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyByZXR1cm4gbWVyZ2Ugb2JqZWN0XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5leHBvcnQgZGVmYXVsdCBkZWVwTWVyZ2U7XG4iLCJpbXBvcnQgeyBjb252ZXJ0UGFpbnRUb1JnYmEgfSBmcm9tICcuL2NvbnZlcnRDb2xvcic7XG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBzb2xpZCBzdHJva2UgY29sb3JzXG4gKi9cbmNvbnN0IGdldFNvbGlkU3Ryb2tlcyA9IChwYWludHMpID0+IHtcbiAgICAvLyBjbG9uZSB3aXRob3V0IHJlZmVyZW5jZVxuICAgIHJldHVybiBbLi4ucGFpbnRzXVxuICAgICAgICAubWFwKHBhaW50ID0+IGNvbnZlcnRQYWludFRvUmdiYShwYWludCkpXG4gICAgICAgIC5maWx0ZXIocGFpbnQgPT4gcGFpbnQgIT0gbnVsbCk7XG59O1xuLyoqXG4gKiBleHRyYWN0VG9rZW5Ob2RlVmFsdWVzXG4gKiBAcGFyYW0gbm9kZTogU2NlbmVOb2RlXG4gKiBAcmV0dXJucyBub2RlIG9iamVjdFxuICovXG5jb25zdCBleHRyYWN0VG9rZW5Ob2RlVmFsdWVzID0gKG5vZGUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkZXNjcmlwdGlvbjogbm9kZS5kZXNjcmlwdGlvbiB8fCB1bmRlZmluZWQsXG4gICAgICAgIGJvdHRvbUxlZnRSYWRpdXM6IG5vZGUuYm90dG9tTGVmdFJhZGl1cyxcbiAgICAgICAgYm90dG9tUmlnaHRSYWRpdXM6IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMsXG4gICAgICAgIHRvcExlZnRSYWRpdXM6IG5vZGUudG9wTGVmdFJhZGl1cyxcbiAgICAgICAgdG9wUmlnaHRSYWRpdXM6IG5vZGUudG9wUmlnaHRSYWRpdXMsXG4gICAgICAgIGNvcm5lclJhZGl1czogbm9kZS5jb3JuZXJSYWRpdXMgfHwgdW5kZWZpbmVkLFxuICAgICAgICBjb3JuZXJTbW9vdGhpbmc6IG5vZGUuY29ybmVyU21vb3RoaW5nLFxuICAgICAgICBzdHJva2VzOiBnZXRTb2xpZFN0cm9rZXMobm9kZS5zdHJva2VzKSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBub2RlLnN0cm9rZVdlaWdodCxcbiAgICAgICAgc3Ryb2tlU3R5bGVJZDogbm9kZS5zdHJva2VTdHlsZUlkLFxuICAgICAgICBzdHJva2VNaXRlckxpbWl0OiBub2RlLnN0cm9rZU1pdGVyTGltaXQsXG4gICAgICAgIHN0cm9rZUpvaW46IG5vZGUuc3Ryb2tlSm9pbixcbiAgICAgICAgc3Ryb2tlQ2FwOiBub2RlLnN0cm9rZUNhcCxcbiAgICAgICAgZGFzaFBhdHRlcm46IG5vZGUuZGFzaFBhdHRlcm4sXG4gICAgICAgIHN0cm9rZUFsaWduOiBub2RlLnN0cm9rZUFsaWduLFxuICAgICAgICB3aWR0aDogbm9kZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBub2RlLmhlaWdodCxcbiAgICAgICAgcmVhY3Rpb25zOiBub2RlLnJlYWN0aW9ucyB8fCB1bmRlZmluZWQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFkZGluZ1RvcDogbm9kZS5wYWRkaW5nVG9wIHx8IDAsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBub2RlLnBhZGRpbmdSaWdodCB8fCAwLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhZGRpbmdCb3R0b206IG5vZGUucGFkZGluZ0JvdHRvbSB8fCAwLFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBub2RlLnBhZGRpbmdMZWZ0IHx8IDAsXG4gICAgICAgIG9wYWNpdHk6IChfYSA9IG5vZGUub3BhY2l0eSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMVxuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RUb2tlbk5vZGVWYWx1ZXM7XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmNvbnN0IGV4Y2x1c2lvblByZWZpeCA9IChleGNsdXNpb25QcmVmaXhTdHJpbmdzKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgLi4uY29uZmlnLmV4Y2x1c2lvblByZWZpeERlZmF1bHQsXG4gICAgICAgIC4uLmV4Y2x1c2lvblByZWZpeFN0cmluZ3NcbiAgICBdO1xufTtcbmNvbnN0IGZpbHRlckJ5UHJvcGVydHlOYW1lID0gKG9iamVjdCwgZXhjbHVzaW9uUHJlZml4U3RyaW5ncykgPT4gIWV4Y2x1c2lvblByZWZpeChleGNsdXNpb25QcmVmaXhTdHJpbmdzKS5pbmNsdWRlcyhvYmplY3QubmFtZS50cmltKCkuc3Vic3RyKDAsIDEpKTtcbmV4cG9ydCBkZWZhdWx0IGZpbHRlckJ5UHJvcGVydHlOYW1lO1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2V0RWZmZWN0U3R5bGVzXG4gKiBAcGFyYW0ge0FycmF5PEVmZmVjdFN0eWxlPn0gc3R5bGVzIOKAkyB0aGUgZWZmZWN0U3R5bGUgZnJvbSB0aGUgZmlnbWEgZmlsZVxuICovXG5jb25zdCBnZXRFZmZlY3RTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgLy8gaW5pdCBzdHlsZUFycmF5XG4gICAgY29uc3Qgc3R5bGVBcnJheSA9IFtdO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBGaWdtYSBzdHlsZXMgYW5kIGFkZCB0byBhcnJheVxuICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgc3R5bGVBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHN0eWxlLm5hbWUsXG4gICAgICAgICAgICBpZDogc3R5bGUuaWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3R5bGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBlZmZlY3RzOiBzdHlsZS5lZmZlY3RzXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJldHVybiBhcnJheVxuICAgIHJldHVybiBzdHlsZUFycmF5O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldEVmZmVjdFN0eWxlcztcbiIsImltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuY29uc3QgZ2V0RmlsZUlkID0gKGZpZ21hKSA9PiB7XG4gICAgbGV0IGZpbGVJZCA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShjb25maWcua2V5LmZpbGVJZCk7XG4gICAgLy8gc2V0IHBsdWdpbiBpZCBpZiBpdCBkb2VzIG5vdCBleGlzdFxuICAgIGlmIChmaWxlSWQgPT09IHVuZGVmaW5lZCB8fCBmaWxlSWQgPT09ICcnKSB7XG4gICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShjb25maWcua2V5LmZpbGVJZCwgZmlnbWEucm9vdC5uYW1lICsgJyAnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkpO1xuICAgICAgICAvLyBncmFiIGZpbGUgSURcbiAgICAgICAgZmlsZUlkID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKGNvbmZpZy5rZXkuZmlsZUlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVJZDtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRGaWxlSWQ7XG4iLCIvKipcbiAqIEBmdW5jdGlvbiBnZXRHcmlkU3R5bGVzXG4gKiBAcGFyYW0ge0FycmF5fSBncmlkU3R5bGVzIOKAkyB0aGUgZ3JpZFN0eWxlcyBmcm9tIHRoZSBmaWdtYSBmaWxlXG4gKi9cbmNvbnN0IGdldEdyaWRTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgLy8gaW5pdCBzdHlsZUFycmF5XG4gICAgY29uc3Qgc3R5bGVBcnJheSA9IFtdO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBGaWdtYSBzdHlsZXMgYW5kIGFkZCB0byBhcnJheVxuICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgc3R5bGVBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHN0eWxlLm5hbWUsXG4gICAgICAgICAgICBpZDogc3R5bGUuaWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3R5bGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsYXlvdXRHcmlkczogc3R5bGUubGF5b3V0R3JpZHNcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIGFycmF5XG4gICAgcmV0dXJuIHN0eWxlQXJyYXk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0R3JpZFN0eWxlcztcbiIsIi8qKlxuICogQGZ1bmN0aW9uIGdldFBhaW50U3R5bGVzXG4gKiBAcGFyYW0ge0FycmF5fSBwYWludFN0eWxlcyDigJMgdGhlIHBhaW50U3R5bGVzIGZyb20gdGhlIGZpZ21hIGZpbGUgKHNvbWVob3cgc3RpbGwgY29ubmVjdGVkKVxuICovXG5jb25zdCBnZXRQYWludFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAvLyBpbml0IHN0eWxlQXJyYXlcbiAgICBjb25zdCBzdHlsZUFycmF5ID0gW107XG4gICAgLy8gbG9vcCB0aHJvdWdoIEZpZ21hIHN0eWxlcyBhbmQgYWRkIHRvIGFycmF5XG4gICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBzdHlsZUFycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc3R5bGUubmFtZSxcbiAgICAgICAgICAgIGlkOiBzdHlsZS5pZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHlsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHBhaW50czogc3R5bGUucGFpbnRzXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJldHVybiBhcnJheVxuICAgIHJldHVybiBzdHlsZUFycmF5O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFBhaW50U3R5bGVzO1xuIiwiLyoqXG4gKiBAZnVuY3Rpb24gZ2V0VGV4dFN0eWxlc1xuICogQHBhcmFtIHtBcnJheTxUZXh0U3R5bGU+fSBzdHlsZXMg4oCTIHRoZSBwYWludFN0eWxlcyBmcm9tIHRoZSBmaWdtYSBmaWxlIChzb21laG93IHN0aWxsIGNvbm5lY3RlZClcbiAqL1xuY29uc3QgZ2V0VGV4dFN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAvLyBpbml0IHN0eWxlQXJyYXlcbiAgICBjb25zdCBzdHlsZUFycmF5ID0gW107XG4gICAgLy8gbG9vcCB0aHJvdWdoIEZpZ21hIHN0eWxlcyBhbmQgYWRkIHRvIGFycmF5XG4gICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICBzdHlsZUFycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogc3R5bGUubmFtZSxcbiAgICAgICAgICAgIGlkOiBzdHlsZS5pZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHlsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZvbnRTaXplOiBzdHlsZS5mb250U2l6ZSxcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBzdHlsZS50ZXh0RGVjb3JhdGlvbixcbiAgICAgICAgICAgIGZvbnROYW1lOiBzdHlsZS5mb250TmFtZSxcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IHN0eWxlLmxldHRlclNwYWNpbmcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBzdHlsZS5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgcGFyYWdyYXBoSW5kZW50OiBzdHlsZS5wYXJhZ3JhcGhJbmRlbnQsXG4gICAgICAgICAgICBwYXJhZ3JhcGhTcGFjaW5nOiBzdHlsZS5wYXJhZ3JhcGhTcGFjaW5nLFxuICAgICAgICAgICAgdGV4dENhc2U6IHN0eWxlLnRleHRDYXNlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJldHVybiBhcnJheVxuICAgIHJldHVybiBzdHlsZUFycmF5O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFRleHRTdHlsZXM7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBleHRyYWN0Q29sb3JzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0Q29sb3JzJztcbmltcG9ydCBleHRyYWN0R3JpZHMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RHcmlkcyc7XG5pbXBvcnQgZXh0cmFjdEZvbnRzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0Rm9udHMnO1xuaW1wb3J0IGV4dHJhY3RFZmZlY3RzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0RWZmZWN0cyc7XG5pbXBvcnQgZXh0cmFjdE1vdGlvbiBmcm9tICcuLi9leHRyYWN0b3IvZXh0cmFjdE1vdGlvbic7XG5pbXBvcnQgZXh0cmFjdFNpemVzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0U2l6ZXMnO1xuaW1wb3J0IGV4dHJhY3RTcGFjaW5nIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0U3BhY2luZyc7XG5pbXBvcnQgZXh0cmFjdEJvcmRlcnMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RCb3JkZXJzJztcbmltcG9ydCBleHRyYWN0UmFkaWkgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RSYWRpaSc7XG5pbXBvcnQgZXh0cmFjdEJyZWFrcG9pbnRzIGZyb20gJy4uL2V4dHJhY3Rvci9leHRyYWN0QnJlYWtwb2ludHMnO1xuaW1wb3J0IGV4dHJhY3RPcGFjaXRpZXMgZnJvbSAnLi4vZXh0cmFjdG9yL2V4dHJhY3RPcGFjaXRpZXMnO1xuaW1wb3J0IGJ1aWxkRmlnbWFEYXRhIGZyb20gJy4vYnVpbGRGaWdtYURhdGEnO1xuaW1wb3J0IHsgZ2V0VmFyaWFibGVzIH0gZnJvbSAnLi9nZXRWYXJpYWJsZXMnO1xuY29uc3QgZ2V0UHJlZml4QXJyYXkgPSAocHJlZml4U3RyaW5nID0gJycpID0+IHByZWZpeFN0cmluZy5zcGxpdCgnLCcpLm1hcChpdGVtID0+IGl0ZW0ucmVwbGFjZSgvXFxzKy9nLCAnJykpO1xuZXhwb3J0IGNvbnN0IGV4cG9ydFJhd1Rva2VuQXJyYXkgPSAoZmlnbWEsIHNldHRpbmdzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBmaWdtYURhdGEgPSB5aWVsZCBidWlsZEZpZ21hRGF0YShmaWdtYSwgc2V0dGluZ3MpO1xuICAgIC8vIGdldCB0b2tlbnNcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi5leHRyYWN0U2l6ZXMoZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguc2l6ZSkpLFxuICAgICAgICAuLi5leHRyYWN0QnJlYWtwb2ludHMoZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguYnJlYWtwb2ludCkpLFxuICAgICAgICAuLi5leHRyYWN0U3BhY2luZyhmaWdtYURhdGEudG9rZW5GcmFtZXMsIGdldFByZWZpeEFycmF5KHNldHRpbmdzLnByZWZpeC5zcGFjaW5nKSksXG4gICAgICAgIC4uLmV4dHJhY3RCb3JkZXJzKGZpZ21hRGF0YS50b2tlbkZyYW1lcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmJvcmRlcikpLFxuICAgICAgICAuLi5leHRyYWN0UmFkaWkoZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXgucmFkaXVzKSksXG4gICAgICAgIC4uLmV4dHJhY3RNb3Rpb24oZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXgubW90aW9uKSksXG4gICAgICAgIC4uLmV4dHJhY3RPcGFjaXRpZXMoZmlnbWFEYXRhLnRva2VuRnJhbWVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXgub3BhY2l0eSkpLFxuICAgICAgICAuLi5leHRyYWN0Q29sb3JzKGZpZ21hRGF0YS5wYWludFN0eWxlcywgeyBjb2xvcjogZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmNvbG9yKSwgZ3JhZGllbnQ6IGdldFByZWZpeEFycmF5KHNldHRpbmdzLnByZWZpeC5ncmFkaWVudCksIGFsaWFzOiBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5hbGlhcykgfSksXG4gICAgICAgIC4uLmV4dHJhY3RHcmlkcyhmaWdtYURhdGEuZ3JpZFN0eWxlcywgZ2V0UHJlZml4QXJyYXkoc2V0dGluZ3MucHJlZml4LmdyaWQpKSxcbiAgICAgICAgLi4uZXh0cmFjdEZvbnRzKGZpZ21hRGF0YS50ZXh0U3R5bGVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguZm9udCkpLFxuICAgICAgICAuLi5leHRyYWN0RWZmZWN0cyhmaWdtYURhdGEuZWZmZWN0U3R5bGVzLCBnZXRQcmVmaXhBcnJheShzZXR0aW5ncy5wcmVmaXguZWZmZWN0KSksXG4gICAgICAgIC4uLih5aWVsZCBnZXRWYXJpYWJsZXMoZmlnbWEsIHNldHRpbmdzKSlcbiAgICBdO1xufSk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBleHRyYWN0VG9rZW5Ob2RlVmFsdWVzIGZyb20gJ0B1dGlscy9leHRyYWN0VG9rZW5Ob2RlVmFsdWVzJztcbmltcG9ydCBpc1Rva2VuTm9kZSBmcm9tICdAdXRpbHMvaXNUb2tlbk5vZGUnO1xuLy8gdGhlIG5hbWUgdGhhdCB0b2tlbiBmcmFtZXMgaGF2ZVxuY29uc3QgdG9rZW5GcmFtZU5hbWUgPSAnX3Rva2Vucyc7XG4vLyBjaGVjayBpZiBhIGZyYW1lIGlzIGEgX3Rva2VuIGZyYW1lXG5jb25zdCBpc1Rva2VuRnJhbWUgPSAobm9kZSkgPT4gbm9kZS50eXBlID09PSAnRlJBTUUnICYmIG5vZGUubmFtZS50cmltKCkudG9Mb3dlckNhc2UoKS5zdWJzdHIoMCwgdG9rZW5GcmFtZU5hbWUubGVuZ3RoKSA9PT0gdG9rZW5GcmFtZU5hbWU7XG4vLyByZXR1cm4gb25seSBub2RlcyB0aGF0IGFyZSBmcmFtZXNcbmNvbnN0IGdldEZyYW1lTm9kZXMgPSAobm9kZXMpID0+IFsuLi5ub2Rlcy5tYXAocGFnZSA9PiBwYWdlLmZpbmRDaGlsZHJlbihub2RlID0+IGlzVG9rZW5GcmFtZShub2RlKSkpLnJlZHVjZSgoZmxhdHRlbiwgYXJyKSA9PiBbLi4uZmxhdHRlbiwgLi4uYXJyXSldO1xuLyoqXG4gKiBnZXRWYXJpYW50TmFtZVxuICogY3JlYXRlcyB0aGUgdmFyaWFudCBuYW1lIG9mIHRoZSBwYXJlbnQgYW5kIGNoaWxkIG5hbWVcbiAqL1xuY29uc3QgZ2V0VmFyaWFudE5hbWUgPSAocGFyZW50TmFtZSwgY2hpbGROYW1lKSA9PiB7XG4gICAgLy8gc3BsaXQgaW50byBhcnJheVxuICAgIGNoaWxkTmFtZSA9IGNoaWxkTmFtZS5zcGxpdCgnLCcpXG4gICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gbmFtZXNcbiAgICAgICAgLmZpbHRlcihwYXJ0ID0+ICFbJ18nLCAnLiddLmluY2x1ZGVzKHBhcnQudHJpbSgpLnN1YnN0cigwLCAxKSkpXG4gICAgICAgIC8vIGNsZWFudXAgbmFtZXMsIG9ubHkgcmV0dXJuIHZhbHVlIHBhcnRcbiAgICAgICAgLm1hcChwYXJ0ID0+IHBhcnQuc3BsaXQoJz0nKVsxXSlcbiAgICAgICAgLy8gY29tYmluZVxuICAgICAgICAuam9pbignLycpO1xuICAgIC8vIHJldHVybiBmdWxsIG5hbWVcbiAgICByZXR1cm4gYCR7cGFyZW50TmFtZX0vJHtjaGlsZE5hbWV9YDtcbn07XG4vKipcbiAqIFJldHVybnMgYWxsIGZyYW1lcyBmcm9tIHRoZSBmaWxlIHRoYXQgaGF2ZSBhIG5hbWUgdGhhdCBzdGFydHMgd2l0aCBfdG9rZW5zIG9yIHRoZSB1c2VyIGRlZmluZWQgdG9rZW4gc3BlY2lmaWVyXG4gKlxuICogQHBhcmFtIHBhZ2VzIFBhZ2VOb2Rlc1xuICovXG5jb25zdCBnZXRUb2tlbk5vZGVzID0gKHBhZ2VzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBmaWdtYS5sb2FkQWxsUGFnZXNBc3luYygpO1xuICAgIC8vIGdldCB0b2tlbiBmcmFtZXNcbiAgICBjb25zdCB0b2tlbkZyYW1lcyA9IGdldEZyYW1lTm9kZXMocGFnZXMpO1xuICAgIC8vIGdldCBhbGwgY2hpbGRyZW4gb2YgdG9rZW4gZnJhbWVzXG4gICAgcmV0dXJuIHRva2VuRnJhbWVzLm1hcChmcmFtZSA9PiBmcmFtZVxuICAgICAgICAvLyBjaGVjayBpZiBjaGlsZHJlbiBhcmUgb2YgdmFsaWQgdHlwZXNcbiAgICAgICAgLmZpbmRBbGwoXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBub2RlID0+IGlzVG9rZW5Ob2RlKG5vZGUpKSlcbiAgICAgICAgLy8gbWVyZ2VzIGFsbCBjaGlsZHJlbiBpbnRvIG9uZSBhcnJheVxuICAgICAgICAucmVkdWNlKChmbGF0dGVuLCBhcnIpID0+IFsuLi5mbGF0dGVuLCAuLi5hcnJdLCBbXSlcbiAgICAgICAgLy8gdW5wYWNrIHZhcmlhbnRzICYgd2FybiBhYm91dCBkZXByZWNhdGVkIHR5cGVzXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ1JFQ1RBTkdMRScgfHwgaXRlbS50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSB1c2Ugb25seSBtYWluIGNvbXBvbmVudHMgYW5kIHZhcmlhbnRzLCBvdGhlciB0eXBlcyBtYXkgYmUgZGVwcmVjYXRlZCBhcyB0b2tlbnMgaW4gdGhlIGZ1dHVyZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVucGFjayB2YXJpYW50c1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IE5hbWUgaXMgb3ZlcndyaXRpbmcgcmVhbCBvYmplY3QgaW4gZmlnbWFcbiAgICAgICAgICAgIC8vIC0+IGNyZWF0ZSBjbG9uZSBhbmQgbW92ZSB0byBuZXcgYXJyYXkgdG8gcmV0dXJuXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHRyYWN0VG9rZW5Ob2RlVmFsdWVzKGNoaWxkKSksIHsgbmFtZTogZ2V0VmFyaWFudE5hbWUoaXRlbS5uYW1lLCBjaGlsZC5uYW1lKSB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBub3JtYWwgaXRlbSBhcyBhcnJheSB0byB1bnBhY2sgbGF0ZXJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gW2V4dHJhY3RUb2tlbk5vZGVWYWx1ZXMoaXRlbSldO1xuICAgIH0pXG4gICAgICAgIC8vIG1lcmdlcyB0aGUgdmFyaWFudCBjaGlsZHJlbiBpbnRvIG9uZSBhcnJheVxuICAgICAgICAucmVkdWNlKChmbGF0dGVuLCBhcnIpID0+IFsuLi5mbGF0dGVuLCAuLi5hcnJdLCBbXSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IGdldFRva2VuTm9kZXM7XG5leHBvcnQgY29uc3QgX190ZXN0aW5nID0ge1xuICAgIGlzVG9rZW5Ob2RlOiBpc1Rva2VuTm9kZSxcbiAgICBpc1Rva2VuRnJhbWU6IGlzVG9rZW5GcmFtZVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXRWYXJpYWJsZVR5cGVCeVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiAnZGltZW5zaW9uJztcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuICdjb2xvcic7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiAnc3RyaW5nJztcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBjb25maWcgZnJvbSAnQGNvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgdG9rZW5UeXBlcyB9IGZyb20gJ0Bjb25maWcvdG9rZW5UeXBlcyc7XG5pbXBvcnQgeyByb3VuZFJnYmEgfSBmcm9tICdAdXRpbHMvY29udmVydENvbG9yJztcbmltcG9ydCByb3VuZFdpdGhEZWNpbWFscyBmcm9tICdAdXRpbHMvcm91bmRXaXRoRGVjaW1hbHMnO1xuaW1wb3J0IGhhbmRsZVZhcmlhYmxlQWxpYXMgZnJvbSAnQHV0aWxzL2hhbmRsZVZhcmlhYmxlQWxpYXMnO1xuaW1wb3J0IHByb2Nlc3NBbGlhc01vZGVzIGZyb20gJ0B1dGlscy9wcm9jZXNzQWxpYXNNb2Rlcyc7XG5pbXBvcnQgZGVlcE1lcmdlIGZyb20gJ0B1dGlscy9kZWVwTWVyZ2UnO1xuY29uc3QgZXh0cmFjdFZhcmlhYmxlID0gKHZhcmlhYmxlLCB2YWx1ZSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5tb2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgY2F0ZWdvcnkgPSAnY29sb3InO1xuICAgIGxldCB2YWx1ZXMgPSB7fTtcbiAgICBpZiAodmFsdWUudHlwZSA9PT0gJ1ZBUklBQkxFX0FMSUFTJykge1xuICAgICAgICByZXR1cm4geWllbGQgaGFuZGxlVmFyaWFibGVBbGlhcyh2YXJpYWJsZSwgdmFsdWUsIG1vZGUpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHZhcmlhYmxlLnJlc29sdmVkVHlwZSkge1xuICAgICAgICBjYXNlICdDT0xPUic6XG4gICAgICAgICAgICBjYXRlZ29yeSA9ICdjb2xvcic7XG4gICAgICAgICAgICB2YWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm91bmRSZ2JhKHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlOiAnbm9ybWFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRkxPQVQnOlxuICAgICAgICAgICAgY2F0ZWdvcnkgPSAnZGltZW5zaW9uJztcbiAgICAgICAgICAgIHZhbHVlcyA9IHJvdW5kV2l0aERlY2ltYWxzKHZhbHVlLCAyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTVFJJTkcnOlxuICAgICAgICAgICAgY2F0ZWdvcnkgPSAnc3RyaW5nJztcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0JPT0xFQU4nOlxuICAgICAgICAgICAgY2F0ZWdvcnkgPSAnYm9vbGVhbic7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB2YXJpYWJsZS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdmFyaWFibGUuZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkLFxuICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMudmFyaWFibGVzLmtleSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHZhbHVlc1xuICAgIH07XG59KTtcbmNvbnN0IGRldGVjdFZhcmlhYmxlUmVmZXJlbmNlc0luQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uLCB2YXJpYWJsZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBsZXQgdG1wVmFyaWFibGUgPSB7fTtcbiAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgICAgKF9hID0gY29sbGVjdGlvbiA9PT0gbnVsbCB8fCBjb2xsZWN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb2xsZWN0aW9uLm1vZGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgobW9kZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgbW9kZVZhbHVlID0gdmFyaWFibGUudmFsdWVzQnlNb2RlW21vZGUubW9kZUlkXTtcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBvdGhlciB2YXJpYWJsZXMgaW4gdGhlIHNhbWUgY29sbGVjdGlvbiB0byBjaGVjayBmb3IgcmVmZXJlbmNlc1xuICAgICAgICAgICAgKF9hID0gY29sbGVjdGlvbi52YXJpYWJsZUlkcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKG90aGVyVmFyaWFibGVJZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJWYXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhvdGhlclZhcmlhYmxlSWQpO1xuICAgICAgICAgICAgICAgIGlmIChvdGhlclZhcmlhYmxlICYmXG4gICAgICAgICAgICAgICAgICAgIG1vZGVWYWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbW9kZVZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS5uYW1lICE9PSBvdGhlclZhcmlhYmxlLm5hbWUgJiYgLy8gQXZvaWQgc2VsZi1yZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgbW9kZVZhbHVlLmlkID09PSBvdGhlclZhcmlhYmxlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWFzU2FtZU1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0bXBWYXJpYWJsZSA9IGhhbmRsZVZhcmlhYmxlQWxpYXModmFyaWFibGUsIG1vZGVWYWx1ZSwgbW9kZSwgYWxpYXNTYW1lTW9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZXBNZXJnZSh2YXJpYWJsZSwgdG1wVmFyaWFibGUpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRWYXJpYWJsZXMgPSAoZmlnbWEsIHNldHRpbmdzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgY29uc3QgbG9jYWxWYXJpYWJsZXMgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZXNBc3luYygpO1xuICAgIGNvbnN0IGV4Y2x1ZGVkQ29sbGVjdGlvbklkcyA9IGxvY2FsVmFyaWFibGVDb2xsZWN0aW9ucyA9PT0gbnVsbCB8fCBsb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvY2FsVmFyaWFibGVDb2xsZWN0aW9ucy5maWx0ZXIoKGNvbGxlY3Rpb24pID0+ICFbJy4nLCAnXycsIC4uLnNldHRpbmdzLmV4Y2x1c2lvblByZWZpeC5zcGxpdCgnLCcpXS5pbmNsdWRlcyhjb2xsZWN0aW9uLm5hbWUuY2hhckF0KDApKSkubWFwKChjb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLmlkKTtcbiAgICAvLyBnZXQgY29sbGVjdGlvbnNcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IGxvY2FsVmFyaWFibGVDb2xsZWN0aW9uc1xuICAgICAgICA/IE9iamVjdC5mcm9tRW50cmllcyhsb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnMgPT09IG51bGwgfHwgbG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2NhbFZhcmlhYmxlQ29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiBbY29sbGVjdGlvbi5pZCwgY29sbGVjdGlvbl0pKVxuICAgICAgICA6IFtdO1xuICAgIC8vIGdldCB2YXJpYWJsZXNcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB5aWVsZCBQcm9taXNlLmFsbCgoKF9hID0gbG9jYWxWYXJpYWJsZXMgPT09IG51bGwgfHwgbG9jYWxWYXJpYWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvY2FsVmFyaWFibGVzLmZpbHRlcigodmFyaWFibGUpID0+IGV4Y2x1ZGVkQ29sbGVjdGlvbklkcy5pbmNsdWRlcyh2YXJpYWJsZS52YXJpYWJsZUNvbGxlY3Rpb25JZCkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwKCh2YXJpYWJsZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgLy8gZ2V0IGNvbGxlY3Rpb24gbmFtZSBhbmQgbW9kZXNcbiAgICAgICAgY29uc3QgeyB2YXJpYWJsZUNvbGxlY3Rpb25JZCB9ID0gdmFyaWFibGU7XG4gICAgICAgIGNvbnN0IHsgbmFtZTogY29sbGVjdGlvbiwgbW9kZXMgfSA9IGNvbGxlY3Rpb25zW3ZhcmlhYmxlQ29sbGVjdGlvbklkXTtcbiAgICAgICAgaWYgKHNldHRpbmdzLnJlc29sdmVTYW1lQ29sbGVjdGlvbk9yTW9kZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgdmFyaWFibGUgPSBkZXRlY3RWYXJpYWJsZVJlZmVyZW5jZXNJbkNvbGxlY3Rpb24oY29sbGVjdGlvbnNbdmFyaWFibGVDb2xsZWN0aW9uSWRdLCB2YXJpYWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIGVhY2ggbW9kZSB2YWx1ZSBhcyBhIHNlcGFyYXRlIHZhcmlhYmxlXG4gICAgICAgIHJldHVybiB5aWVsZCBQcm9taXNlLmFsbCgoX2IgPSBPYmplY3QuZW50cmllcyh2YXJpYWJsZS52YWx1ZXNCeU1vZGUpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWFwKChbaWQsIHZhbHVlXSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGFkZCBtb2RlIGlmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZVxuICAgICAgICAgICAgLy8gYW5kIGlmIG1vZGVJblRva2VuTmFtZSBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICAgICAgY29uc3QgYWRkTW9kZUluVG9rZW5OYW1lID0gc2V0dGluZ3MubW9kZUluVG9rZW5OYW1lICYmIG1vZGVzLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICBjb25zdCBtb2RlID0gbW9kZXMuZmluZCgoeyBtb2RlSWQgfSkgPT4gbW9kZUlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGNhbm5vdCBmaW5kIG1vZGUgd2l0aCBpZCAke2lkfSBmb3IgdmFyaWFibGUgJHt2YXJpYWJsZS5uYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gYCR7Y29sbGVjdGlvbn0vJHt2YXJpYWJsZS5uYW1lfWA7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVXaXRoTW9kZSA9IG1vZGUgPyBgJHtjb2xsZWN0aW9ufS8ke21vZGUgPT09IG51bGwgfHwgbW9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZS5uYW1lfS8ke3ZhcmlhYmxlID09PSBudWxsIHx8IHZhcmlhYmxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYWJsZS5uYW1lfWAgOiB2YXJpYWJsZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRWYXJpYWJsZSA9IHlpZWxkIGV4dHJhY3RWYXJpYWJsZSh2YXJpYWJsZSwgdmFsdWUsIG1vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXh0cmFjdGVkVmFyaWFibGUpLCB7IFxuICAgICAgICAgICAgICAgIC8vIG5hbWUgaXMgY29uc3RydWN0ZWQgZnJvbSBjb2xsZWN0aW9uLCBtb2RlIGFuZCB2YXJpYWJsZSBuYW1lXG4gICAgICAgICAgICAgICAgbmFtZTogbW9kZSAmJiBhZGRNb2RlSW5Ub2tlbk5hbWUgPyB2YXJpYWJsZU5hbWVXaXRoTW9kZSA6IHZhcmlhYmxlTmFtZSwgXG4gICAgICAgICAgICAgICAgLy8gYWRkIG1ldGFkYXRhIHRvIGV4dGVuc2lvbnNcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblBsdWdpbkRhdGFdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBtb2RlICYmIGFkZE1vZGVJblRva2VuTmFtZSA/IG1vZGUubmFtZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVJZDogbW9kZSAmJiBhZGRNb2RlSW5Ub2tlbk5hbWUgPyBtb2RlLm1vZGVJZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZXM6IHZhcmlhYmxlLnNjb3BlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWcua2V5LmV4dGVuc2lvblZhcmlhYmxlU3R5bGVJZF06IHZhcmlhYmxlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0S2V5OiB0b2tlblR5cGVzLnZhcmlhYmxlcy5rZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgIH0pKSk7XG4gICAgfSkpKSB8fCBbXSk7XG4gICAgLy8gYWRkIHRoZSBtb2RlIG5hbWUgdG8gdGhlIHZhcmlhYmxlIHZhbHVlcyB2YWx1ZSBpbiBvcmRlclxuICAgIC8vIHRvIGJlIGFibGUgdG8gcmVmZXJlbmNlIHRvIGl0IGNvcnJlY3RseTpcbiAgICAvLyB2YWx1ZXM6IGNvbGxlY3Rpb24udmFsdWUgYmVjb21lcyBjb2xsZWN0aW9uLlttb2RlIG5hbWVdLnZhbHVlXG4gICAgLy9cbiAgICAvLyBgdmFyaWFibGVzV2l0aEFsaWFzSW5UaGVTYW1lQ29sbGVjdGlvbmAgaXMgbm90IHVzZWQgd2hlbiBgc2V0dGluZ3MubW9kZUluVG9rZW5WYWx1ZWBcbiAgICAvLyBpcyBzZXQgdG8gYHRydWVgIHRvIGF2b2lkIHZhbHVlcyBpbiB0aGUgZm9ybSBvZjogY29sbGVjdGlvbi5bbW9kZSBuYW1lXS5bbW9kZSBuYW1lXS52YWx1ZVxuICAgIGNvbnN0IHZhcmlhYmxlc1dpdGhBbGlhc0luVGhlU2FtZUNvbGxlY3Rpb24gPSAoKSA9PiB2YXJpYWJsZXNcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC5tYXAoKHYpID0+ICgodiA9PT0gbnVsbCB8fCB2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2LmFsaWFzU2FtZU1vZGUpID8gcHJvY2Vzc0FsaWFzTW9kZXMoW3ZdKSA6IHYpKVxuICAgICAgICAuZmxhdCgpO1xuICAgIHJldHVybiBzZXR0aW5ncy5tb2RlSW5Ub2tlblZhbHVlXG4gICAgICAgID8gcHJvY2Vzc0FsaWFzTW9kZXModmFyaWFibGVzLmZsYXQoKSlcbiAgICAgICAgOiB2YXJpYWJsZXNXaXRoQWxpYXNJblRoZVNhbWVDb2xsZWN0aW9uKCk7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHNlbVZlckRpZmZlcmVuY2UgZnJvbSAnLi9zZW1WZXJEaWZmZXJlbmNlJztcbmltcG9ydCBjdXJyZW50VmVyc2lvbiBmcm9tICcuL3ZlcnNpb24nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAY29uZmlnL2NvbmZpZyc7XG5jb25zdCBnZXRWZXJzaW9uRGlmZmVyZW5jZSA9IChmaWdtYSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gZ2V0IHZlcnNpb24gJiB2ZXJzaW9uIGRpZmZlcmVuY2VcbiAgICBjb25zdCBsYXN0VmVyc2lvblNldHRpbmdzT3BlbmVkID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhjb25maWcua2V5Lmxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQpO1xuICAgIGNvbnN0IHZlcnNpb25EaWZmZXJlbmNlID0gc2VtVmVyRGlmZmVyZW5jZShjdXJyZW50VmVyc2lvbiwgbGFzdFZlcnNpb25TZXR0aW5nc09wZW5lZCk7XG4gICAgLy8gdXBkYXRlIHZlcnNpb25cbiAgICBpZiAoIWxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQgfHwgbGFzdFZlcnNpb25TZXR0aW5nc09wZW5lZCAhPT0gY3VycmVudFZlcnNpb24pIHtcbiAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhjb25maWcua2V5Lmxhc3RWZXJzaW9uU2V0dGluZ3NPcGVuZWQsIGN1cnJlbnRWZXJzaW9uKTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHZlcnNpb24gRGlmZmVyZW5jZVxuICAgIHJldHVybiB2ZXJzaW9uRGlmZmVyZW5jZTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgZ2V0VmVyc2lvbkRpZmZlcmVuY2U7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHRva2VuVHlwZXMgfSBmcm9tICdAY29uZmlnL3Rva2VuVHlwZXMnO1xuaW1wb3J0IHsgZ2V0VmFyaWFibGVUeXBlQnlWYWx1ZSB9IGZyb20gJ0B1dGlscy9nZXRWYXJpYWJsZVR5cGVCeVZhbHVlJztcbmltcG9ydCB7IGNoYW5nZU5vdGF0aW9uIH0gZnJvbSAnQHV0aWxzL2NoYW5nZU5vdGF0aW9uJztcbmZ1bmN0aW9uIGhhbmRsZVZhcmlhYmxlQWxpYXModmFyaWFibGUsIHZhbHVlLCBtb2RlLCBhbGlhc1NhbWVNb2RlID0gZmFsc2UpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNvbHZlZEFsaWFzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhbHVlLmlkKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUNvbGxlY3Rpb25CeUlkQXN5bmMocmVzb2x2ZWRBbGlhcy52YXJpYWJsZUNvbGxlY3Rpb25JZCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdmFyaWFibGUuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICAgICAgICBleHBvcnRLZXk6IHRva2VuVHlwZXMudmFyaWFibGVzLmtleSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBnZXRWYXJpYWJsZVR5cGVCeVZhbHVlKE9iamVjdC52YWx1ZXMocmVzb2x2ZWRBbGlhcy52YWx1ZXNCeU1vZGUpWzBdKSxcbiAgICAgICAgICAgIHZhbHVlczogYHske2NvbGxlY3Rpb24ubmFtZS50b0xvd2VyQ2FzZSgpfS4ke2NoYW5nZU5vdGF0aW9uKHJlc29sdmVkQWxpYXMubmFtZSwgJy8nLCAnLicpfX1gLFxuICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyBzdG9yZWQgc28gd2UgY2FuIHByb3Blcmx5IHVwZGF0ZSB0aGUgZGVzaWduIHRva2VucyBsYXRlciB0byBhY2NvdW50IGZvciBhbGxcbiAgICAgICAgICAgIC8vIG1vZGVzIHdoZW4gdXNpbmcgYWxpYXNlc1xuICAgICAgICAgICAgYWxpYXNDb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBhbGlhc01vZGU6IG1vZGUsXG4gICAgICAgICAgICBhbGlhc1NhbWVNb2RlOiB2YXJpYWJsZS5hbGlhc1NhbWVNb2RlIHx8IGFsaWFzU2FtZU1vZGVcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVZhcmlhYmxlQWxpYXM7XG4iLCIvLyB0aGUgbm9kZSB0eXBlcyB0aGF0IGNhbiBiZSB1c2VkIGZvciB0b2tlbnNcbmNvbnN0IHRva2VuTm9kZVR5cGVzID0gW1xuICAgICdDT01QT05FTlQnLFxuICAgICdDT01QT05FTlRfU0VUJyxcbiAgICAnUkVDVEFOR0xFJyxcbiAgICAnRlJBTUUnXG5dO1xuLyoqXG4gKiBjaGVjayBpZiBhIG5vZGUgaXMgYSB2YWxpZCB0b2tlbiBub2RlIHR5cGVcbiAqIEN1cnJlbnRseTogJ0NPTVBPTkVOVCcsICdGUkFNRSBvciAnUkVDVEFOR0xFJ1xuICogQHBhcmFtIFNjZW5lTm9kZSBub2RlXG4gKi9cbmNvbnN0IGlzVG9rZW5Ob2RlID0gKG5vZGUpID0+IHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnQudHlwZSAhPT0gJ0NPTVBPTkVOVF9TRVQnICYmIHRva2VuTm9kZVR5cGVzLmluY2x1ZGVzKG5vZGUudHlwZSkgJiYgbm9kZS5uYW1lLmxlbmd0aCA+IDA7XG59O1xuZXhwb3J0IGRlZmF1bHQgaXNUb2tlbk5vZGU7XG4iLCJjb25zdCBwcm9jZXNzQWxpYXNNb2RlcyA9ICh2YXJpYWJsZXMpID0+IHtcbiAgICByZXR1cm4gdmFyaWFibGVzLnJlZHVjZSgoY29sbGVjdG9yLCB2YXJpYWJsZSkgPT4ge1xuICAgICAgICAvLyBvbmx5IG9uZSBtb2RlIHdpbGwgYmUgcGFzc2VkIGluIGlmIGFueVxuICAgICAgICBpZiAoIXZhcmlhYmxlLmFsaWFzTW9kZSkge1xuICAgICAgICAgICAgY29sbGVjdG9yLnB1c2godmFyaWFibGUpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBhbGlhcyBtb2RlIHNpbmd1bGFyIGJlY2F1c2Ugb25seSBvbmUgaXMgc2hvd25cbiAgICAgICAgY29uc3QgeyBhbGlhc01vZGUsIGFsaWFzQ29sbGVjdGlvbk5hbWUgfSA9IHZhcmlhYmxlO1xuICAgICAgICBjb2xsZWN0b3IucHVzaChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhcmlhYmxlKSwgeyB2YWx1ZXM6IHZhcmlhYmxlLnZhbHVlcy5yZXBsYWNlKGB7JHthbGlhc0NvbGxlY3Rpb25OYW1lfS5gLCBgeyR7YWxpYXNDb2xsZWN0aW9uTmFtZX0uJHthbGlhc01vZGUubmFtZS50b0xvd2VyQ2FzZSgpfS5gKSB9KSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0b3I7XG4gICAgfSwgW10pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3NBbGlhc01vZGVzO1xuIiwiLyoqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBudW1iZXJcbiAqIGl0IGlzIHJvdW5kZWQgdG8gMyBkZWNpbWFsIHBvc2l0aW9uc1xuICogb3RoZXJ3aXNlIGl0IGlzIHJldHVybmVkIGFzIGlzXG4gKiBAcGFyYW0gdmFsdWUgbnVtYmVyXG4gKiBAcGFyYW0gZGVjaW1hbFBsYWNlcyBpbnRcbiAqL1xuY29uc3Qgcm91bmRXaXRoRGVjaW1hbHMgPSAodmFsdWUsIGRlY2ltYWxQbGFjZXMgPSAyKSA9PiB7XG4gICAgLy8gZXhpdCBpZiB2YWx1ZSBpcyB1bmRlZmluZWRcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNoZWNrIGZvciBjb3JyZWN0IGlucHV0c1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHR5cGVvZiBkZWNpbWFsUGxhY2VzICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcGFyYW1ldGVycywgYm90aCB2YWx1ZSBcIiR7dmFsdWV9XCIgKCR7dHlwZW9mIHZhbHVlfSkgYW5kIGRlY2ltYWxQbGFjZXMgXCIke2RlY2ltYWxQbGFjZXN9XCIgKCR7dHlwZW9mIGRlY2ltYWxQbGFjZXN9KSBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyYCk7XG4gICAgfVxuICAgIC8vIHNldCBkZWNpbWFsIHBsYWNlc1xuICAgIGNvbnN0IGZhY3Rvck9mVGVuID0gTWF0aC5wb3coMTAsIGRlY2ltYWxQbGFjZXMpO1xuICAgIC8vIHJvdW5kIHJlc3VsdCBhbmQgcmV0dXJuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBmYWN0b3JPZlRlbikgLyBmYWN0b3JPZlRlbjtcbn07XG5leHBvcnQgZGVmYXVsdCByb3VuZFdpdGhEZWNpbWFscztcbiIsImV4cG9ydCBkZWZhdWx0IChjdXJyZW50U2VtVmVyLCBwcmV2U2VtVmVycyA9ICcxLjAuMCcpID0+IHtcbiAgICBjb25zdCBbcE1ham9yLCBwTWlub3IsIHBQYXRjaF0gPSBwcmV2U2VtVmVycy5zcGxpdCgnLicpO1xuICAgIGNvbnN0IFtjTWFqb3IsIGNNaW5vciwgY1BhdGNoXSA9IGN1cnJlbnRTZW1WZXIuc3BsaXQoJy4nKTtcbiAgICBpZiAocE1ham9yIDwgY01ham9yKSB7XG4gICAgICAgIHJldHVybiAnbWFqb3InO1xuICAgIH1cbiAgICBpZiAocE1pbm9yIDwgY01pbm9yKSB7XG4gICAgICAgIHJldHVybiAnbWlub3InO1xuICAgIH1cbiAgICBpZiAocFBhdGNoIDwgY1BhdGNoKSB7XG4gICAgICAgIHJldHVybiAncGF0Y2gnO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBkZWZhdWx0U2V0dGluZ3MgfSBmcm9tICdAY29uZmlnL2RlZmF1bHRTZXR0aW5ncyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmltcG9ydCB7IHN0cmluZ2lmeUpzb24gfSBmcm9tICcuL3N0cmluZ2lmeUpzb24nO1xuY29uc3QgZml4TWlzc2luZyA9IChkZWZhdWx0cywgY3VycmVudCkgPT4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjdXJyZW50W2tleV0gIT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW2tleSwgZGVmYXVsdHNba2V5XV07XG4gICAgfVxuICAgIHJldHVybiBba2V5LCBjdXJyZW50W2tleV1dO1xufSkpO1xuLyoqXG4gKiBnZXQgdGhlIGN1cnJlbnQgdXNlcnMgc2V0dGluZ3NcbiAqIGZvciBzZXR0aW5ncyB0aGF0IGFyZSBub3Qgc2V0LCB0aGUgZGVmYXVsdHMgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIG9iamVjdFxuICovXG5jb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICBsZXQgc3RvcmVkU2V0dGluZ3MgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoY29uZmlnLmtleS5zZXR0aW5ncyk7XG4gICAgLy8gcmV0dXJuIGRlZmF1bHRzIGlmIG5vIHNldHRpbmdzIGFyZSBwcmVzZW50XG4gICAgaWYgKHN0b3JlZFNldHRpbmdzID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvLyBwYXJzZSBzdG9yZWQgc2V0dGluZ3NcbiAgICBzdG9yZWRTZXR0aW5ncyA9IEpTT04ucGFyc2Uoc3RvcmVkU2V0dGluZ3MpO1xuICAgIC8vIGZpeCBpc3N1ZXMgb24gZmlyc3QgbGV2ZWxcbiAgICBjb25zdCBmaXhlZFNldHRpbmdzID0gZml4TWlzc2luZyhkZWZhdWx0U2V0dGluZ3MsIHN0b3JlZFNldHRpbmdzKTtcbiAgICBmaXhlZFNldHRpbmdzLnByZWZpeCA9IGZpeE1pc3NpbmcoZGVmYXVsdFNldHRpbmdzLnByZWZpeCwgZml4ZWRTZXR0aW5ncy5wcmVmaXgpO1xuICAgIGZpeGVkU2V0dGluZ3MuZXhwb3J0cyA9IGZpeE1pc3NpbmcoZGVmYXVsdFNldHRpbmdzLmV4cG9ydHMsIGZpeGVkU2V0dGluZ3MuZXhwb3J0cyk7XG4gICAgLy8gcmV0dXJuIHNldHRpbmdzXG4gICAgcmV0dXJuIGZpeGVkU2V0dGluZ3M7XG59O1xuLyoqXG4gKiBAbmFtZSBzYXZlU2V0dGluZ3NcbiAqIEBkZXNjcmlwdGlvbiBzYXZlIHRoZSB1c2VyIHNldHRpbmdzIHRvIHRoZSBcImNhY2hlXCJcbiAqIEBwYXJhbSB7VXNlclNldHRpbmdzfSBzZXR0aW5nc1xuICovXG5jb25zdCBzZXRTZXR0aW5ncyA9IChzZXR0aW5ncykgPT4ge1xuICAgIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MpLCBzZXR0aW5ncyk7XG4gICAgLy8gc3RvcmUgcHVibGljIHNldHRpbmdzIHRoYXQgc2hvdWxkIGJlIHNoYXJlZCBhY3Jvc3Mgb3JnXG4gICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKGNvbmZpZy5rZXkuc2V0dGluZ3MsIHN0cmluZ2lmeUpzb24oc2V0dGluZ3MpKTtcbn07XG4vKipcbiAqIEBuYW1lIHJlc2V0U2V0dGluZ3NcbiAqIEBkZXNjcmlwdGlvbiByZXNldFNldHRpbmdzIHRoZSB1c2VyIHNldHRpbmdzIHRvIHRoZSBcImNhY2hlXCJcbiAqL1xuY29uc3QgcmVzZXRTZXR0aW5ncyA9ICgpID0+IGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShjb25maWcua2V5LnNldHRpbmdzLCBzdHJpbmdpZnlKc29uKGRlZmF1bHRTZXR0aW5ncykpO1xuLy8gZXhwb3J0c1xuZXhwb3J0IHsgZ2V0U2V0dGluZ3MsIHNldFNldHRpbmdzLCByZXNldFNldHRpbmdzIH07XG4iLCJleHBvcnQgY29uc3Qgc3RyaW5naWZ5SnNvbiA9IChvYmplY3QsIGNvbXByZXNzaW9uID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChjb21wcmVzc2lvbiA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHVuY29tcHJlc3NlZCBqc29uXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iamVjdCwgbnVsbCwgMik7XG59O1xuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbmNvbnN0IHZlcnNpb24gPSAnNi4xMS4zJztcbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0U2V0dGluZ3MsIHJlc2V0U2V0dGluZ3MsIHNldFNldHRpbmdzIH0gZnJvbSAnQHV0aWxzL3NldHRpbmdzJztcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbiB9IGZyb20gJ0B1dGlscy9hY2Nlc3NUb2tlbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ0Bjb25maWcvY29uZmlnJztcbmltcG9ydCB7IGNvbW1hbmRzIH0gZnJvbSAnQGNvbmZpZy9jb21tYW5kcyc7XG5pbXBvcnQgZ2V0VmVyc2lvbkRpZmZlcmVuY2UgZnJvbSAnQHV0aWxzL2dldFZlcnNpb25EaWZmZXJlbmNlJztcbmltcG9ydCBnZXRGaWxlSWQgZnJvbSAnQHV0aWxzL2dldEZpbGVJZCc7XG5pbXBvcnQgeyBleHBvcnRSYXdUb2tlbkFycmF5IH0gZnJvbSAnQHV0aWxzL2dldFRva2VuSnNvbic7XG5pbXBvcnQgeyBzdHJpbmdpZnlKc29uIH0gZnJvbSAnQHV0aWxzL3N0cmluZ2lmeUpzb24nO1xuLy8gaW5pdGlhdGUgVUlcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgIHRoZW1lQ29sb3JzOiB0cnVlLFxuICAgIHZpc2libGU6IGZhbHNlXG59KTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gb3BlbiBVSVxuaWYgKFtjb21tYW5kcy5leHBvcnQsIGNvbW1hbmRzLnVybEV4cG9ydCwgY29tbWFuZHMuZ2VuZXJhbFNldHRpbmdzXS5pbmNsdWRlcyhmaWdtYS5jb21tYW5kKSkge1xuICAgIC8vIHdyYXAgaW4gZnVuY3Rpb24gYmVjYXVzZSBvZiBhc3luYyBjbGllbnQgU3RvcmFnZVxuICAgIGNvbnN0IG9wZW5VaSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBHZXQgdGhlIHVzZXIgc2V0dGluZ3NcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHZlcnNpb24gZGlmZmVyZW5jZXMgdG8gdGhlIGxhc3QgdGltZSB0aGUgcGx1Z2luIHdhcyBvcGVuZWRcbiAgICAgICAgY29uc3QgdmVyc2lvbkRpZmZlcmVuY2UgPSB5aWVsZCBnZXRWZXJzaW9uRGlmZmVyZW5jZShmaWdtYSk7XG4gICAgICAgIC8vIHJlc2l6ZSBVSSBpZiBuZWVkZWRcbiAgICAgICAgZmlnbWEudWkucmVzaXplKGNvbmZpZy51aVtmaWdtYS5jb21tYW5kXS53aWR0aCwgY29uZmlnLnVpW2ZpZ21hLmNvbW1hbmRdLmhlaWdodCk7XG4gICAgICAgIGlmICh2ZXJzaW9uRGlmZmVyZW5jZSAhPT0gdW5kZWZpbmVkICYmIHZlcnNpb25EaWZmZXJlbmNlICE9PSAncGF0Y2gnKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoY29uZmlnLnVpW2ZpZ21hLmNvbW1hbmRdLndpZHRoLCBjb25maWcudWlbZmlnbWEuY29tbWFuZF0uaGVpZ2h0ICsgNjApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvc3RNZXNzYWdlT2JqZWN0ID0ge1xuICAgICAgICAgICAgY29tbWFuZDogZmlnbWEuY29tbWFuZCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1c2VyU2V0dGluZ3MpLCB7IGFjY2Vzc1Rva2VuOiB5aWVsZCBnZXRBY2Nlc3NUb2tlbihnZXRGaWxlSWQoZmlnbWEpKSB9KSxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIHZlcnNpb25EaWZmZXJlbmNlOiB2ZXJzaW9uRGlmZmVyZW5jZSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZmlnbWEucm9vdC5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoW2NvbW1hbmRzLmV4cG9ydCwgY29tbWFuZHMudXJsRXhwb3J0XS5pbmNsdWRlcyhmaWdtYS5jb21tYW5kKSkge1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2VPYmplY3QucGF5bG9hZC5kYXRhID0gc3RyaW5naWZ5SnNvbih5aWVsZCBleHBvcnRSYXdUb2tlbkFycmF5KGZpZ21hLCB1c2VyU2V0dGluZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHt9LCBwb3N0TWVzc2FnZU9iamVjdCkpO1xuICAgICAgICAvLyByZWdpc3RlciB0aGUgc2V0dGluZ3MgVUlcbiAgICAgICAgZmlnbWEudWkuc2hvdygpO1xuICAgIH0pO1xuICAgIC8vIHJ1biBmdW5jdGlvblxuICAgIG9wZW5VaSgpO1xufVxuLyoqXG4gKiBPcGVuIEhlbHBcbiAqIE9wZW4gZ2l0aHViIGhlbHAgcGFnZVxuICovXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gY29tbWFuZHMuaGVscCkge1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgY29tbWFuZDogY29tbWFuZHMuaGVscCxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2x1a2Fzb3BwZXJtYW5uL2Rlc2lnbi10b2tlbnMnXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogT3BlbiBkZW1vXG4gKi9cbmlmIChmaWdtYS5jb21tYW5kID09PSBjb21tYW5kcy5kZW1vKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBjb21tYW5kOiBjb21tYW5kcy5kZW1vLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS8yTVE3NTlSNWtKdHpRbjRxU0h1cVI3L0Rlc2lnbi1Ub2tlbnMtZm9yLUZpZ21hP25vZGUtaWQ9MjMxJTNBMidcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBSZXNldCBzZXR0aW5nc1xuICovXG5pZiAoZmlnbWEuY29tbWFuZCA9PT0gY29tbWFuZHMucmVzZXQpIHtcbiAgICByZXNldFNldHRpbmdzKCk7XG4gICAgLy8gc2VuZCBtZXNzYWdlXG4gICAgZmlnbWEubm90aWZ5KCfimpnvuI8gU2V0dGluZ3MgaGF2ZSBiZWVuIHJlc2V0LicpO1xuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59XG4vKipcbiAqIFJlYWN0IHRvIG1lc3NhZ2VzXG4gKi9cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IGNvbW1hbmQsIHBheWxvYWQgfSA9IG1lc3NhZ2U7XG4gICAgLyoqXG4gICAgICogb24gY2xvc2VQbHVnaW5cbiAgICAgKiBjbG9zZSBwbHVnaW4gYW5kIHNob3cgbm90aWZpY2F0aW9uIGlmIGF2YWlsYWJsZVxuICAgICAqL1xuICAgIGlmIChjb21tYW5kID09PSBjb21tYW5kcy5jbG9zZVBsdWdpbikge1xuICAgICAgICAvLyBzaG93IG5vdGlmaWNhdGlvbiBpZiBzZW5kXG4gICAgICAgIGlmICgocGF5bG9hZCA9PT0gbnVsbCB8fCBwYXlsb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXlsb2FkLm5vdGlmaWNhdGlvbikgIT09IHVuZGVmaW5lZCAmJiAocGF5bG9hZCA9PT0gbnVsbCB8fCBwYXlsb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXlsb2FkLm5vdGlmaWNhdGlvbikgIT09ICcnKSB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkocGF5bG9hZC5ub3RpZmljYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsb3NlIHBsdWdpblxuICAgICAgICBmaWdtYS51aS5oaWRlKCk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIG9uIHNhdmVTZXR0aW5nc1xuICAgICAqIHNhdmUgc2V0dGluZ3MsIGFjY2VzcyB0b2tlbiBhbmQgY2xvc2UgcGx1Z2luXG4gICAgICovXG4gICAgaWYgKGNvbW1hbmQgPT09IGNvbW1hbmRzLnNhdmVTZXR0aW5ncykge1xuICAgICAgICAvLyBzdG9yZSBzZXR0aW5nc1xuICAgICAgICBzZXRTZXR0aW5ncyhwYXlsb2FkLnNldHRpbmdzKTtcbiAgICAgICAgLy8gYWNjZXNzVG9rZW5cbiAgICAgICAgeWllbGQgc2V0QWNjZXNzVG9rZW4oZ2V0RmlsZUlkKGZpZ21hKSwgcGF5bG9hZC5hY2Nlc3NUb2tlbik7XG4gICAgICAgIC8vIGNsb3NlIHBsdWdpblxuICAgICAgICBpZiAocGF5bG9hZC5jbG9zZVBsdWdpbiAmJiBwYXlsb2FkLmNsb3NlUGx1Z2luID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=