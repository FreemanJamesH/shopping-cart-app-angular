shoppingApp.config(function($routeProvider){

  $routeProvider

  .when('/search', {
    templateUrl: 'pages/search.html',
    controller: 'searchController'
  })

  .when('/cart', {
    templateUrl: 'pages/cart.html',
    controller: 'cartController'
  })
})
