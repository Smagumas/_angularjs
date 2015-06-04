var first_app = angular.module('first_app', ['ngRoute', 'ngAnimate']);
var controllers = {};

first_app.config(function ($routeProvider) {
	$routeProvider
			.when('/',
				{
					controller: 'FirstController',
					templateUrl: 'onepage.html'
				})
			.when('/antras',
				{
					controller: 'FirstController',
					templateUrl: 'twopage.html'
				})
			.otherwise({ redirectTo: '/' });
});

first_app.factory('firstFactory', function () {
	var friends = [
		{name:'Juozas',city:'Vilnius'},
		{name:'Petras',city:'Kaunas'},
		{name:'Algis',city:'Mažeikiai'},
		{name:'Onute',city:'Klaipeda'}
	];
	var factory = {};
	factory.getFriends = function() {
		return friends;
	};
	factory.postFriend = function(friend) {
		
	};
	return factory;
});

controllers.FirstController = function ($scope, firstFactory) {
	$scope.friends = [];
	
	init();
	
	function init() {
		$scope.friends = firstFactory.getFriends();
	}
	
	$scope.addFriend = function () {
		$scope.friends.push({ 
			name: $scope.newFriend.name,
			city: $scope.newFriend.city
		});
	};
};

first_app.controller(controllers);

function goBack() {
    window.history.back();
}