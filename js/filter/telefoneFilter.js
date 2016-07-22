angular.module("listaApp").filter("telefone", function(){
	return function(input, isDDD){
		if(input.length > 11 || input.length < 8) return "Invalid Number ("+input+")";

		var primeiroGrupo, segundoGrupo, dddGrupo;

		segundoGrupo = input.substring(input.length-4);
		if(input.length == 8 || input.length == 9 ) {
			primeiroGrupo = input.substring(0, input.length-4);
			dddGrupo = "";
		}else{
			primeiroGrupo = input.substring(2, input.length-4);
			dddGrupo  = input.substring(0, 2);
		}

		return (isDDD?(dddGrupo? "("+dddGrupo+")": ""):"")+" "+primeiroGrupo+"-"+segundoGrupo;
	};
});