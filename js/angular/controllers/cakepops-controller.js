(function () {
  angular.module('cloudsInTheMouth').controller('CakepopsSectionController', CakepopsSectionController);
  CakepopsSectionController.$inject = ['$scope', 'CakepopsSectionService', '$state'];
  function CakepopsSectionController($scope, service, $state) {
    service.getData().then(function (data) {
      $scope.cakepopCollection = data;
    });
    $scope.edit = function (cakepop) {
      cakepop.isEditing = true;
    }
    $scope.submit = function (cakepop) {
      cakepop.isEditing = false;
      service.update(cakepop);
    }
    $scope.delete = function (cakepop) {
      service.remove(cakepop);
    }
  }
  
})();
