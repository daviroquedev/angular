(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
      $scope.name = "Davi";
      $scope.sayHello = function () {
        return "Hello Coursera!";
      };
    });
    
    })();