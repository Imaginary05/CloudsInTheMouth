(function () {
  
angular.module('cloudsInTheMouth').service('CupcakesSectionService', function ($q, $http) {
  var data;
  var fetched;
  
  this.getData = function () {
    var promise;
    if (fetched) {
      promise = $q(function (resolve, reject) {
        resolve(data);
      });
    } else {
      promise = $http.get('/data-files/cupcakes').then(function (response) {
        data = response.data;
        fetched = true;
        return data;
      });
    }
    return promise;
  }
  this.update = function (cupcake) {
    return $http.put('/data-files/cupcakes/' + cupcake.name, cupcake);
  }
  this.remove = function (cupcakeToRemove) {
    var dataIndex = data.forEach(function (cupcake, i) {
      if (cupcakeToRemove === cupcake) {
        data.splice(i, 1);
        return $http.delete('/data-files/cupcakes/' + cupcake.name);
      }
    });
  }
  this.save = function (data) {
    return $http.post('/data-files/cupcakes', data).then(function (response) {
      return response.data;
    });
  }
})

})();