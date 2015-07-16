// Initialize the contactListApp as an AngularJS module
var contactListApp = angular.module("ContactListApp", ['ngRoute']);

/*
	Declare a module to handle routing between templates so that page loads aren't necessary when using the app.
*/
contactListApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controllerAs: 'list',
        templateUrl: 'partials/list.html'
      })
	   .when('/add', {
		controller: 'AddController',
        controllerAs: 'add',
        templateUrl: 'partials/edit.html'
      })
	   .when('/edit', {
        controller: 'AddController',
		controllerAs: 'edit',
        templateUrl: 'partials/edit.html'
      })
	  .otherwise({
		redirectTo: '/'
	  });
}]);