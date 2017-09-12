angular.module('video-player')
.service('youTube', function($http) {
  this.search = (searchString, searchResults) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'maxResults': 5,
        'q': searchString,
        'type': 'video',
        'key': YOUTUBE_API_KEY,
        'part': 'snippet'
      }
    }).then((response) => searchResults(response.data.items));
  };
});
