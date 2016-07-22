var homem = {
	sexo:"masculino"
};

var raphael = {
	nome:"Raphael",
	idade:12,
	__proto__:homem
};

var pedro = {
	nome:"Pedro",
	idade:23,
	__proto__:homem
};

Object.keys(pedro)

for(var propety in pedro){
	console.log(propety);
}

//Object.setPrototypeOf(raphael, homem)

console.log(raphael);
console.log(raphael.sexo);

console.log(pedro);
console.log(pedro.sexo);
console.log(pedro.prototype);