//Funcao fabrica

var criarPessoa = function(nome, idade){
	return {
		nome:nome,
		idade:idade
	};
};

console.log(criarPessoa("Raphael", 27));
console.log(criarPessoa("Bianca", 37))

//funcao construtora

var Pessoa = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

console.log(new Pessoa("Jessica", 22))

var pessoa = {nome:"Raphaela", idade:27}
console.log(pessoa)


var createCounter = function(){
	var value = 0;
	return {	
		add:function(){
			++value;
			return value;
		}
	}
}
var counter = createCounter();
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())

var Counter = function(){
	var value = 0;
	this.add = function(){
		++value;
		return value;
	}
}

var counter2 = new Counter();

console.log(counter2.add())
console.log(counter2.add())
console.log(counter2.add())
