export let rgbToHex = (r, g, b) => {
	let red = r.toString(16);
	let green = g.toString(16);
	let blue = b.toString(16);

	(red.length==1) ? red="0"+red : red;
	(green.length==1) ? green="0"+green : green;
	(blue.length==1) ? blue="0"+blue : blue;

	return (`"#${red}${green}${blue}"`)
}