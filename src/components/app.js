angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
      console.log(this.currentVideo.id.videoId);
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
    this.getViewCount = (viewCount) => {
      this.viewCount = viewCount;
    };
    this.searchString = 'koalas';
    youTube.search(this.searchString, this.searchResults, this.getViewCount);
  }
});
