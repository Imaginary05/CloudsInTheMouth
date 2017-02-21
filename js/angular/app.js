angular.module('cloudsInTheMouth', ['ui.router']);

angular.module('cloudsInTheMouth').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');
  $urlRouterProvider.otherwise('/home');
  $stateProvider/*.state('base', {
    abstract: true,
  вынести сюда темплейт-часть с хедером и футером
  })*/
  .state('login', {
    url: '/login',
    templateUrl: '/views/admin/login.html',
    controller: 'LoginController'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/views/admin/main.html',
    views: {
      '': {
        templateUrl: '/views/admin/main.html'
      },
      'products@home': {
        templateUrl: '/views/admin/products.html',
        controller: 'ProductsCollectionController'
      },
      'fillings@home': {
        templateUrl: '/views/admin/fillings.html',
        controller: 'FillingsCollectionController'
      }
    }
  })
  .state('cupcakes', {
    url: '/products/cupcakes',
    templateUrl:'/views/admin/cupcakes.html',
    controller: 'CupcakesSectionController'
  })
  .state('cakes', {
    url: '/products/cakes',
    templateUrl:'/views/admin/cakes.html',
    controller: 'CakesSectionController'
  })
  .state('cakepops', {
    url: '/products/cakepops',
    templateUrl:'/views/admin/cakepops.html',
    controller: 'CakepopsSectionController'
  })
  .state('fillings', {
    url: '/fillings',
    templateUrl:'/views/admin/fillingsSell.html',
    controller: 'FillingsCollectionController'
  });
});


