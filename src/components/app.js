angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
    };
    this.searchResults = (responseArray) => {
      this.videos = responseArray;
      this.currentVideo = responseArray[0];
    };
    this.onClick = (selectedVideo) => {
      this.selectVideo(selectedVideo);
    };
    this.searchString = 'koalas';
    this.$onInit = () => youTube.search(this.searchString, this.searchResults);
  }
});
