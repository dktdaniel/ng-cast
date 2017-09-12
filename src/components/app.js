angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    // console.log('videos from', this.videos);
    this.onClick = function() {
      console.log('clicked');
    };
  }
});
