/*
	Item
		.id
		.value
*/
'use strict';

angular.module('drpicox.NgRepeat').factory('Item',
		[  function
		() {

	function Item(data) {
		angular.copy(data, this);
	};
	return Item;
}]);
