var radioApp = angular.module('radioApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
radioApp.controller('RadioController', function RadioController($scope, $http) {
  $scope.song = 'test';
  var that = this;

  $scope.init = function() {
    var self = this;
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
      console.log('second request');
    }, 20000);
  };
});
