shoppingApp.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/search.html',
    controller: 'searchController'
  })

  .when('/cart', {
    templateUrl: 'pages/cart.html',
    controller: 'cartController'
  })

  .when('/contact', {
    templateUrl: 'pages/contact.html'
  })
})
