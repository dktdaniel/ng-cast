angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    selectVideo: '<',
    viewCount: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function() {
  }
});
