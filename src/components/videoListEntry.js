angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    // console.log($ctrl);
  }
});