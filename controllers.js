shoppingApp.controller('searchController', ['$scope', '$resource', 'teaInventoryService', function($scope, $resource, teaInventoryService){

$scope.view = {};
$scope.view.teaList = teaInventoryService.getTeas;

$scope.test = 'test'



}])


shoppingApp.controller('cartController', ['$scope', '$resource', function($scope, $resource){

$scope.view = {};

}])
