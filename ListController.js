'use strict';

angular.module('drpicox.NgRepeat').controller('ListController',
		['List','$scope', function
		( List , $scope ) {

	$scope.list = new List();
	$scope.list.add();
	$scope.list.add();
	$scope.list.add();

}]);
