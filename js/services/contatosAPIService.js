angular.module("listaApp").factory('contatosAPI', function ($http, config) {
	
	var _get = function(){
		return $http.get(config.urlBase+ "/contatos");
	};

	var _create = function(contato){
		return $http.post(config.urlBase + '/contatos/create', contato);
	};

	return {
		get:_get,
		create:_create
	};
})