var app = angular.module('meetupApp',['ngRoute','ngResource']);
app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/meetup', {
            templateUrl: "meetup.html",
            controller: 'meetupsController',
            resolve:{
                link:function($routeParams){
                    console.log($routeParams);
                },
                title:function(){
                    console.log("run2")
                }
            }
        })
        .when('/login', {
            templateUrl: "login.html",
            controller: 'loginCtrl',
            resolve:{
                link:function($routeParams){

                    console.log($routeParams);
                },
                title:function(){
                    console.log("run2")
                }
            }
        })
        .otherwise({ redirectTo: '/login' });

    //use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);
app.run(function($rootScope,$location){
    var path = $location.path();
    console.log(path);
    $rootScope.title = path.split('/')[0]
})
