angular.module('cloudsInTheMouth').service('FillingService', function ($q, $http) {
  var data;
  var fetched;
  
  this.getData = function () {
    var promise;
    if (fetched) {
      promise = $q(function (resolve, reject) {
        resolve(data);
      });
    } else {
      promise = $http.get('/data-files/fillings').then(function (response) {
        data = response.data;
        fetched = true;
        return data;
      });
    }
    return promise;
  }
  this.update = function (filling) {
    return $http.put('/data-files/fillings/' + filling.name, filling);
  }
  this.remove = function (fillingToRemove) {
    var dataIndex = data.forEach(function (filling, i) {
      if (fillingToRemove === filling) {
        data.splice(i, 1);
        return $http.delete('/data-files/fillings/' + filling.name);
      }
    });
  }
});