"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var cuentaVocales = exports.cuentaVocales = function cuentaVocales(cadena) {
	var cantidad = cadena.match(/[aeiou]/gi);
	return cantidad === null ? 0 : cantidad.length;
};