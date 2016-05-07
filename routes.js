shoppingApp.config(function($routeProvider){

  $routeProvider

  .when('/search', {
    templateUrl: 'pages/search.html',
    controller: 'searchController'
  })
})
