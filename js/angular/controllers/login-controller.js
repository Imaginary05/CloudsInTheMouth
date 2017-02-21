(function () {
  angular.module('cloudsInTheMouth').controller('LoginController', LoginController);
  LoginController.$inject = ['$scope', '$state', '$http'];
  function LoginController($scope, $state, $http) {
    var promise;
    $scope.login = {
      name: '',
      password: ''
    }


    $scope.submit = function () {
      promise = $http.put('/login', $scope.login).then(function (response) {
        $state.go('home');
      });

    }

  }
  
})();
