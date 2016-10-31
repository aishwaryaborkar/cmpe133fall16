angular.module('DataService', []).factory('dataService', ['$http', function($http, $q) {

	var urlBase = 'http://localhost:8080/api';
	$http.defaults.headers.post["Content-Type"] = 'application/JSON';
    var dataService = {};

	dataService.testService = testService;
	dataService.performLoginOperation = performLoginOperation;
	
	return dataService;	
  
 
	function testService(){
		return $http({
				method: 'GET',
				url: urlBase + '/testService'
		}).then(
			function(res) { //what to on on success call
				console.log(JSON.stringify(res.data));
				return res.data;
			},
			function(res) { //what to do on failed call
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
		});
	}

		
	function performLoginOperation(userIn, passIn){ 
		return $http({
				method: 'POST',
				url: urlBase + '/login',
				data: {email : userIn,
						password : passIn}
		}).then(
			function(body) { //what to on on success call
				console.log(body);
				return body;
			},
			function(res){
				console.log(JSON.stringify(res.data));
				return $q.reject(res.data);
			});
	}
    
	
}]);