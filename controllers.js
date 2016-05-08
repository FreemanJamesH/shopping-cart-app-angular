shoppingApp.controller('searchController', ['$scope', '$resource', 'teaInventoryService', function($scope, $resource, teaInventoryService){

$scope.view = {};
$scope.view.teaList = teaInventoryService.getTeas;
$scope.view.category = teaInventoryService.assembleCategories();

$scope.logit = function(a, b){
  teaInventoryService.orderObject[a._id] = {};
  teaInventoryService.orderObject[a._id].info = a;
  teaInventoryService.orderObject[a._id].count = b;
  console.log(teaInventoryService.orderObject)
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

}])
