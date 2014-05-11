'use strict';

angular.module('drpicox.NgRepeat').directive('itemFormView',
			[ function
			( ) {

	var links = 0;

	return {
		restrict: 'AE',
		templateUrl: 'ItemFormView.html',
		scope: {
			item: '=itemFormView',
			list: '=',
		},
		link: function (scope, element, attrs) {

			// scope.item
			// scope.list
			scope.remove = function() {
				scope.list.remove(scope.item);
			}

			links = links + 1;
			scope.links = links;
		},
	};

}]);