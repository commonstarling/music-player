var radioApp = angular.module('radioApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
radioApp.controller('RadioController', function RadioController($scope, $http) {
  $scope.song = 'test';
  var that = this;

  $scope.getSong = function() {
    console.log('click');
    // $http.get('/currentSong').then(
    //   function(res) {
    //     $scope.song = res.data;
    //   },
    //   function(error) {
    //     console.error(error);
    //   }
    // );
  };
});
