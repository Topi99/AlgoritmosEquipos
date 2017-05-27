"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var raizOCuadrado = exports.raizOCuadrado = function raizOCuadrado(array) {
	var newArray = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var num = _step.value;

			var n = Math.sqrt(num);
			newArray.push(n % 1 == 0 ? n : num ** 2);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return newArray;
};