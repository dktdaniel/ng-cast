angular.module('video-player')
.service('youTube', function($http) {
  this.search = (searchString, searchResults, getViewCount) => {
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
    //destructuring response object which has data property
    })
    .then(({data}) => {
      searchResults(data.items);
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          'key': YOUTUBE_API_KEY,
          'part': 'statistics',
          'id': data.items[0].id.videoId
        }
      //destructuring response object which has data property
      })
      .then(({data}) => getViewCount(data.items[0].statistics.viewCount))
      .catch(({data}) => data.error.errors.forEach((err) => {
        console.log(err.message);
      }));
    })
    .catch(({data}) => data.error.errors.forEach((err) => {
      console.log(err.message);
    }));
    
  };
});
