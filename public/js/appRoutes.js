angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/Login.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		
		.when('/search', {
			templateUrl: 'views/Search.html',
			controller: 'SearchController'
		})
		
		.when('/profile', {
			templateUrl: 'views/Profile.html',
			controller: 'SearchController'
		})
		
		.when('/message', {
			templateUrl: 'views/Message.html',
			controller: 'SearchController'
		})
		
		.when('/forum', {
			templateUrl: 'views/Forum.html',
			controller: 'SearchController'
		})
		
		.when('/connection', {
			templateUrl: 'views/Connection.html',
			controller: 'SearchController'
		});

	$locationProvider.html5Mode(true);

}]);