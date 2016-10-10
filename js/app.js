var app = angular.module('angularSpa', [
    'ngRoute'
    ])
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakilah/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
        this.postActors = function(datos){
            return $http.post(urlBase, datos);
        };
    })

    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/actors',{
            templateUrl: 'views/actors.html',
            controller: 'actorsCtrl'
        })
        .when('/crear',{
            templateUrl: 'views/formulario.html',
            controller: 'formCtrl'
        })


        .otherwise({
            redirectTo: '/home'
          });
});
