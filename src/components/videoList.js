angular.module('video-player')
.component('videoList', {
  bindings: {
    selectVideo: '<',
    videos: '<',
    onClick: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  controller: function() {
  }
});

