"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var rgbToHex = exports.rgbToHex = function rgbToHex(r, g, b) {
	var red = r.toString(16);
	var green = g.toString(16);
	var blue = b.toString(16);

	red.length == 1 ? red = "0" + red : red;
	green.length == 1 ? green = "0" + green : green;
	blue.length == 1 ? blue = "0" + blue : blue;

	return "\"#" + red + green + blue + "\"";
};