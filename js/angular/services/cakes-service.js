(function () {

angular.module('cloudsInTheMouth').service('CakesSectionService', function ($q, $http) {
  var data;
  var fetched;
  
  this.getData = function () {
    var promise;
    if (fetched) {
      promise = $q(function (resolve, reject) {
        resolve(data);
      });
    } else {
      promise = $http.get('/data-files/cakes').then(function (response) {
        data = response.data;
        fetched = true;
        return data;
      });
    }
    return promise;
  }
  this.update = function (cake) {
    return $http.put('/data-files/cakes/' + cake.name, cake);
  }
  this.remove = function (cakeToRemove) {
    var dataIndex = data.forEach(function (cake, i) {
      if (cakeToRemove === cake) {
        data.splice(i, 1);
        return $http.delete('/data-files/cakes/' + cake.name);
      }
    });
  }
})
})();