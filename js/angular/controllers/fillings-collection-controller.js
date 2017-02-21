(function () {
  angular.module('cloudsInTheMouth').controller('FillingsCollectionController', FillingsCollectionController); 
  FillingsCollectionController.$inject = ['$scope', 'FillingService', '$state'];
    function FillingsCollectionController($scope, service, $state) {
    service.getData().then(function (data) {
      $scope.fillingCollection = data;
    });
    
    $scope.edit = function (filling) {
      filling.isEditing = true;
    }
    $scope.submit = function (filling) {
      filling.isEditing = false;
      service.update(filling);
    }
    $scope.delete = function (filling) {
      service.remove(filling);
    }
    $scope.readMore = function (name) {
      $state.go('fillings');
    }
  }
  
})();