function oddishOrEvenish(num) {
	let total=0;
  [...num.toString()].forEach((char) => {
  	total+=Number(char);
  })
  if(total%2 === 0) {
  	return "Even"
  }else {
  return "Odd"
  }
}

console.log(43,oddishOrEvenish(43));
console.log(373,oddishOrEvenish(373));
console.log(4433,oddishOrEvenish(4433));
