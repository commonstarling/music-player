var radioApp = angular.module('radioApp', []);

radioApp.controller('RadioController', function RadioController($scope, $http) {
  $scope.song = 'Radio Harbor Country Live Stream';

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
          let songTitle = 'Radio Harbor Country Live Stream';
          if (res.data && res.data.length) {
            songTitle = res.data;
          }
          $scope.song = songTitle;
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
    if (sound._muted) {
      sound.mute(false);
    } else if (!sound._muted && !sound.playing()) {
      sound.play();
    }
  };

  $scope.pause = function() {
    sound.mute(true);
  };
});
