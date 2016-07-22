angular.module("listaApp").controller('listaCtrl', function ($scope, contatosAPI, telefoneFilter) {
				$scope.contatos = [];

				var carregarContatos = function(){
					contatosAPI.get().success(function(data){
						$scope.contatos = data/*.map(function(elemento){
							elemento.telefone = telefoneFilter(elemento.telefone, false)
							return elemento;
						});*/
					});
				}

				var _salvarContato = function(contato){
					contatosAPI.create(contato).success(function(data){
						$scope.contatos = data;
						delete $scope.contato
					});
				}

				$scope.ordenarBy = function(campo){
					$scope.order = campo;
					$scope.reverse = !$scope.reverse;
				}

				$scope.salvarContato = _salvarContato;

				carregarContatos();		
			}			
		);