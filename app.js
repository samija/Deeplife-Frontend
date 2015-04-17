//***** This is an angular app/module registering controllers based on routing.

(function(module) {
  module.config(function($routeProvider) {
    $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/user/:username", {
          templateUrl: "templates/user.html",
          controller: "UserController"
        })
        .when("/country/:username", {
          templateUrl: "templates/country.html",
          controller: "UserController"
        })
        .otherwise({redirectTo: "/main"})
  });

}(angular.module("githubViewer", ["ngRoute"])));