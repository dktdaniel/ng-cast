angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    video: '<',
    selectVideo: '<',
    onClick: '<'
  },
  controller: function() {
    // console.log($ctrl.onClick);
  }
});
