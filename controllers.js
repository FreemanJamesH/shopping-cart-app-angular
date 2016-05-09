shoppingApp.controller('searchController', ['$scope', '$resource', 'teaInventoryService', function($scope, $resource, teaInventoryService){

$scope.view = {};
$scope.view.teaList = teaInventoryService.getTeas;
$scope.view.category = teaInventoryService.assembleCategories();

$scope.addToCart = function(a, b){
  if (teaInventoryService.orderObject[a._id]){
    teaInventoryService.orderObject[a._id].count += b
  } else {
  teaInventoryService.orderObject[a._id] = {};
  teaInventoryService.orderObject[a._id].info = a;
  teaInventoryService.orderObject[a._id].count = b;
}
}


$scope.orderObject = {};


$scope.test = 'test'



}])


shoppingApp.controller('cartController', ['$scope', '$resource', 'teaInventoryService', function($scope, $resource, teaInventoryService){

$scope.view = {};
$scope.view.cartList = teaInventoryService.orderObject;
console.log($scope.view.cartList)

$scope.delete = function(a){
  delete teaInventoryService.orderObject[a]
  console.log('a')
}


$scope.getTotal = function(){ $scope.total = teaInventoryService.getTotal()}
$scope.getTotal();

}])
