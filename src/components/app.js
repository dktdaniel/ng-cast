angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.selectVideo = (selectedVideo) => {
      this.currentVideo = selectedVideo;
      youTube.getViews(this.currentVideo.id.videoId, this.getViewCount, this.getChannelTitle);
    };
    this.getViewCount = (viewCount) => {
      this.viewCount = viewCount;
    };
    this.getChannelTitle = (channelTitle) => {
      this.channelTitle = channelTitle;
    };
    this.searchResults = (responseArray) => {
      this.videos = responseArray;
      this.currentVideo = responseArray[0];
      youTube.getViews(this.currentVideo.id.videoId, this.getViewCount, this.getChannelTitle);
    };
    //populate with default data;
    // this.searchResults(exampleVideoData);
    this.onClick = (selectedVideo) => {
      this.selectVideo(selectedVideo);
    };
    
    this.searchString = 'kittens';
    youTube.search(this.searchString, this.searchResults, this.getViewCount);
  }
});
