(function () {
  angular.module('cloudsInTheMouth').controller('CupcakesSectionController', CupcakesSectionController);
  CupcakesSectionController.$inject = ['$scope', 'CupcakesSectionService', '$state'];
  function CupcakesSectionController($scope, service, $state) {
    service.getData().then(function (data) {
      $scope.cupcakeCollection = data;
    });

    $scope.newProduct = {
      name: '',
      price: '',
      description: ''
    }
    $scope.add = function () {
      var copy = angular.copy($scope.newProduct);
      service.save(copy).then(function (data) {
        $scope.cupcakeCollection.push(copy);
      });
    }
    $scope.edit = function (cupcake) {
      cupcake.isEditing = true;
    }
    $scope.submit = function (cupcake) {
      cupcake.isEditing = false;
      service.update(cupcake);
    }
    $scope.delete = function (cupcake) {
      service.remove(cupcake);
    }
  }
  
})();

