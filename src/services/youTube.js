angular.module('video-player')
.service('youTube', function($http) {
  this.search = (str, cb) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'maxResults': 5,
        'q': str,
        'type': 'video',
        'key': YOUTUBE_API_KEY,
        'part': 'snippet'
      }
    }).then((response) => cb(response.data.items));
  };
});
