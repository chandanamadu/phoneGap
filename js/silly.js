
var SILLY = (function(module){

	module.DoIt = function(resultObiect){
		resultObiect.prepend(Date()+'<br>');

	};
	return module;
}(SILLY||{}));
