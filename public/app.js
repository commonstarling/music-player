var radioApp = angular.module('radioApp', []);

radioApp.controller('RadioController', function RadioController($scope, $http) {
  $scope.song = 'test';

  var sound = new Howl({
    src: ['http://96.31.83.94:8136/stream'],
    format: ['mpeg'],
    autoplay: false,
    html5: true,
    mobileAutoEnable: true,
    loop: true,
    volume: 0.8,
    mute: false
  });

  $scope.init = function() {
    function getRequest() {
      $http
        .get('/currentSong')
        .then(function(res) {
          $scope.song = res.data;
        })
        .catch(function() {
          $scope.song = 'Radio Harbor Country Live Stream';
        });
    }
    getRequest();
    setInterval(function() {
      getRequest();
    }, 20000);
  };

  $scope.play = function() {
    if (sound._muted === true) {
      console.log('unmuted');
      sound.mute(false);
    } else {
      console.log('press play');
      sound.play();
    }
  };

  $scope.pause = function() {
    sound.mute(true);
    console.log(sound);
  };
});
