/*
	List
		.items[]
*/
'use strict';

angular.module('drpicox.NgRepeat').factory('List',
		['Item', function
		( Item ) {

	var nextId = 1;

	function List(data) {
		angular.copy(data, this);
		this.items = this.items || [];		
	};

	List.prototype.add = function() {
		var item = new Item({
			id: nextId,
			value: 'val'+nextId,
		});
		this.items.push(item);
		nextId = nextId + 1;
	};

	List.prototype.remove = function(item) {
		var index = this.items.indexOf(item);
		if (index > -1) {
 		   this.items.splice(index, 1);
		}
	};

	return List;
}]);
