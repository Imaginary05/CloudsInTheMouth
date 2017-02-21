angular.module('cloudsInTheMouth').service('CakepopsSectionService', function ($q, $http) {
  var data;
  var fetched;
  
  this.getData = function () {
    var promise;
    if (fetched) {
      promise = $q(function (resolve, reject) {
        resolve(data);
      });
    } else {
      promise = $http.get('/data-files/cakepops').then(function (response) {
        data = response.data;
        fetched = true;
        return data;
      });
    }
    return promise;
  }
  this.update = function (cakepop) {
    return $http.put('/data-files/cakepops/' + cakepop.name, cakepop);
  }
  this.remove = function (cakepopToRemove) {
    var dataIndex = data.forEach(function (cakepop, i) {
      if (cakepopToRemove === cakepop) {
        data.splice(i, 1);
        return $http.delete('/data-files/cakepops/' + cakepop.name);
      }
    });
  }
});