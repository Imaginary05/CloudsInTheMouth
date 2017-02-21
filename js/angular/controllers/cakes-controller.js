(function () {
  angular.module('cloudsInTheMouth').controller('CakesSectionController', CakesSectionController);
  CakesSectionController.$inject = ['$scope', 'CakesSectionService', '$state'];
  function CakesSectionController($scope, service, $state) {
    service.getData().then(function (data) {
      $scope.cakeCollection = data;
    });
    $scope.edit = function (cake) {
      cake.isEditing = true;
    }
    $scope.submit = function (cake) {
      cake.isEditing = false;
      service.update(cake);
    }
    $scope.delete = function (cake) {
      service.remove(cake);
    }
  }
  
})();
