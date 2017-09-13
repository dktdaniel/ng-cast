angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    selectVideo: '<',
    viewCount: '<',
    channelTitle: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function() {
  }
});
