(function () {
  angular.module('cloudsInTheMouth').controller('ProductsCollectionController', ProductsCollectionController);
  ProductsCollectionController.$inject = ['$scope', 'ProductService', '$state'];
  function ProductsCollectionController($scope, service, $state) {
    service.getData().then(function (data) {
      $scope.productCollection = data;
    });

    $scope.edit = function (product) {
      console.log(product);
      product.isEditing = true;
    }
    $scope.submit = function (product) {
      product.isEditing = false;
      service.update(product);
    }
    $scope.delete = function (product) {
      service.remove(product);
    }
    $scope.readMore = function (name) {
      $state.go(name.toLowerCase());
    }
  }

})();
