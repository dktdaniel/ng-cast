angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html',
  controller: function() {
    
  }
});
