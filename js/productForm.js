angular.module('productApp', ['ngAnimate', 'ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('form',{
        url: '/form',
        templateUrl: 'form.html',
        controller: 'ProductController'
      })
      .state('form.estimate',{
        url: '/estimate',
        templateUrl: 'estimate.html',
        controller: 'ProductController'
      })
      .state('form.upload',{
        url: '/upload',
        templateUrl: 'upload.html',
        controller: 'ProductController'
      })
      .state('form.profile',{
        url: '/profile',
        templateUrl: 'profile.html',
        controller: 'ProductController'
      });

    $urlRouterProvider.otherwise('/form/estimate');
  })
  .controller('ProductController', function($scope){

    $scope.formData = {};

    $scope.processForm = function(){
      alert('awesome!');
    };

    $scope.sizes = ["2.0\" x 3.5\"", "4\" x 3\""];
    $scope.size = $scope.sizes[0];

    $scope.quantity = ["100", "250", "500", "1000"];
    $scope.qty = $scope.quantity[0];

    // material 2x3.5 250 items
    $scope.materialsPrices = ["0.00", "3.99", "4.99", "8.99", "7.49", "0.00", "2.49", "0.00", "0.00"];

  });
