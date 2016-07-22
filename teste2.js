var counter = (function(){
	var _value = 0;
	var _add = function(){
		return ++_value;
	};
	return {
		add:_add
	};
})();

console.log(counter.add())
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())