var radioApp = angular.module('radioApp', []);

radioApp.controller('RadioController', function RadioController($scope, $http) {
  $scope.song = 'test';

  $scope.init = function() {
    function getRequest() {
      $http.get('/currentSong').then(
        function(res) {
          $scope.song = res.data;
        },
        function(error) {
          console.error(error);
        }
      );
    }
    getRequest();
    setInterval(function() {
      getRequest();
    }, 20000);
  };
});
