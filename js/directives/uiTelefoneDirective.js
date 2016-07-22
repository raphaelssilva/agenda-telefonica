angular.module("listaApp").directive("uiTelefone", function(telefoneFilter){
	return {
		require:'ngModel',
		link:function(scope, element, attrs, contrs){
			var _tratarTelefone = function(v){
				var value = v.replace(/[^0-9]+/g, "");
				
				if(value.length > 2){
					value = "("+value.substring(0,2)+")"+value.substring(2);
				}

				if(value.length > 8 ){
					value = value.substring(0,8) + '-' + value.substring(8);
				}

				if(value.length>13) return value.substring(0, 13)
				return value;
			}

			element.bind('keyup', function(){
				contrs.$setViewValue(_tratarTelefone(contrs.$viewValue));
				contrs.$render();
			});		

			contrs.$formatters.push(function(value){
				return telefoneFilter(value, true);
			});
			
			contrs.$parsers.push(function(value){
				return value.replace(/[^0-9]+/g, "");
			});
		}
	}
});