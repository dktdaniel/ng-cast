angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
    };
    this.searchResults = function() {};
    this.onClick = (selectedVideo) => {
      this.selectVideo(selectedVideo);
    };
    this.searchString = '';
  }
});
