angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
    };
    this.searchResults = (responseArray) => {
      this.videos = responseArray;
      this.currentVideo = responseArray[0];
    };
    //populate with default data;
    // this.searchResults(exampleVideoData);
    this.onClick = (selectedVideo) => {
      this.selectVideo(selectedVideo);
    };
    this.searchString = 'koalas';
    youTube.search(this.searchString, this.searchResults);
  }
});
