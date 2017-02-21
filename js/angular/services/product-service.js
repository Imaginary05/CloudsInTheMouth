angular.module('cloudsInTheMouth').service('ProductService', function ($q, $http) {
  var data;
  var fetched;
  
  this.getData = function () {
    var promise;
    if (fetched) {
      promise = $q(function (resolve, reject) {
        resolve(data);
      });
    } else {
      promise = $http.get('/data-files/products').then(function (response) {
        data = response.data;
        fetched = true;
        return data;
      });
    }
    return promise;
  }
  this.update = function (product) {
    return $http.put('/data-files/products/' + product.name, product);
  }
  this.remove = function (productToRemove) {
    var dataIndex = data.forEach(function (product, i) {
      if (productToRemove === product) {
        data.splice(i, 1);
        return $http.delete('/data-files/products/' + product.name);
      }
    });
  }

});