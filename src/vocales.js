export let cuentaVocales = (cadena) => {
	let cantidad = cadena.match(/[aeiou]/gi);
	return cantidad === null ? 0 : cantidad.length; 
}