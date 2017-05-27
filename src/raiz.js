export let raizOCuadrado = (array) => {
	let newArray = [];

	for(let num of array){
		let n = Math.sqrt(num);
		newArray.push( n%1 == 0 ? n : num**2 )
	}

	return newArray;
}