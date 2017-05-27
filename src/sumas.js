export let suma = (array) => {
	let positivos = 0;
	let negativos = 0;

	for (let num of array){
		num > 0 ? positivos+=1 : negativos+=num; 
	}

	return [positivos, negativos];
}